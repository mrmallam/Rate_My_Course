from django.shortcuts import render
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
from django.contrib.auth.models import User
from .serializers import PersonsSerializer, UserSerializer, UniversitySerializer, CourseSerializer
from rest_framework import viewsets
from .models import Persons, University, Course
from rest_framework.response import Response

class PersonsViewSet(viewsets.ModelViewSet):
    queryset = Persons.objects.all()
    serializer_class = PersonsSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = (TokenAuthentication, )

class UniversityViewSet(viewsets.ModelViewSet):
    queryset = University.objects.all()
    serializer_class = UniversitySerializer
    # permission_classes = [IsAuthenticated]
    # authentication_classes = (TokenAuthentication, )

class CourseViewSet(viewsets.ModelViewSet):
    serializer_class = CourseSerializer
    
    def get_queryset(self):
        university_name = self.request.query_params.get('university', None)
        if university_name is not None:
            return Course.objects.filter(university__name=university_name)
        return Course.objects.all()

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.none()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = (TokenAuthentication, )

# Current User Profile View
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def current_user_profile(request):
    # Retrieve the profile of the currently authenticated user.
    serializer = UserSerializer(request.user)
    return Response(serializer.data)

# Update User Profile View
@api_view(['PATCH'])
@permission_classes([IsAuthenticated])
def update_user_profile(request):
    # Update the profile of the currently authenticated user.
    serializer = UserSerializer(request.user, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors)

# Change Password View
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def change_password(request):
    user = request.user
    old_password = request.data.get('old_password')
    new_password = request.data.get('new_password')

    # Check old password
    if not user.check_password(old_password):
        return Response({'old_password': ['Wrong password.']}, status=status.HTTP_400_BAD_REQUEST)

    # Set new password 
    user.set_password(new_password)
    user.save()
    return Response({'status': 'password changed'}, status=status.HTTP_200_OK)