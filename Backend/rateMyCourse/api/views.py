from django.shortcuts import render
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User
from .serializers import PersonsSerializer, UserSerializer, UniversitySerializer, CourseSerializer
from rest_framework import viewsets
from .models import Persons, University, Course

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
    queryset = User.objects.all()  # A default queryset, won't be used for data retrieval
    serializer_class = UserSerializer

    # permission_classes = [IsAuthenticated]
    # authentication_classes = (TokenAuthentication, )

    # serializer_class = UserSerializer
    # permission_classes = [IsAuthenticated]

    # def get_queryset(self):
    #     # Return only the current user
    #     return User.objects.filter(id=self.request.user.id)