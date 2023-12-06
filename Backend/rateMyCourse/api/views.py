from django.shortcuts import render
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User
from .serializers import UserSerializer, UniversitySerializer, CourseSerializer, ReviewSerializer
from rest_framework import viewsets
from .models import University, Course, Review
from django.shortcuts import render, get_object_or_404
from rest_framework.response import Response


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = (TokenAuthentication, )

    lookup_field = 'username'

    def retrieve(self, request, *args, **kwargs):
        # Overriding the retrieve method to handle username
        instance = get_object_or_404(self.get_queryset(), username=kwargs.get('username'))
        serializer = self.get_serializer(instance)
        return Response(serializer.data)
    
    # def get_queryset(self):
    #     # Fetch the 'person' parameter from the request's query parameters
    #     person_username = self.request.query_params.get('person', None)
    #     if person_username is not None:
    #         # Filter reviews based on the person's username
    #         return Review.objects.filter(person__username=person_username)
    #     return Review.objects.all()
        

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


class ReviewViewSet(viewsets.ModelViewSet):
    serializer_class = ReviewSerializer
    
    def get_queryset(self):
        course_name = self.request.query_params.get('course', None)
        if course_name is not None:
            return Review.objects.filter(course__name=course_name)
        return Review.objects.all()