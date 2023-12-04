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
        
        # Make password write-only
        # Make username read-only
        extra_kwargs = {
            'username': {'required': False},
            'password': {'write_only': True,'required': False}
        }
        
    def update(self, instance, validated_data):
        password = validated_data.pop('password', None)
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        
        if password is not None:
            instance.set_password(password)
        
        instance.save()
        return instance