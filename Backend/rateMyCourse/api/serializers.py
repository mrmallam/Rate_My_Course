from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.authtoken.views import Token
from .models import Persons, University, Course


class PersonsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Persons
        fields = ['id', 'first_name', 'last_name']

class UniversitySerializer(serializers.ModelSerializer):
    class Meta:
        model = University
        fields = ['name', 'reviews']

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ['id', 'name', 'university', 'workload', 'difficulty', 'usefulness']

# USER Serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password', 'email', 'first_name', 'last_name']
        
        #to hide passwords from showing up using GET
        extra_kwargs = {'password': {
            'write_only': True,
            'required': True,
        }}
        
    # For hashing passwords for new users
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user) # To create tkens for new users
        return user