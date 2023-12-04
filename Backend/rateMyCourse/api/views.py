from django.shortcuts import render
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from django.contrib.auth.models import User
from .serializers import PersonsSerializer, UserSerializer, UniversitySerializer, CourseSerializer
from rest_framework import viewsets
from .models import Persons, University, Course
from django.http import Http404
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

# Customized to handle user data but restricts access to only the authenticated user's information.
# It overrides the default queryset with get_queryset method.
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.none()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = (TokenAuthentication, )

    # def get_queryset(self):
    #     # return a list containing only the current user.
    #     user = self.request.user
    #     if user.is_authenticated:
    #         return User.objects.filter(id=user.id)
    #     else:
    #         raise Http404

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