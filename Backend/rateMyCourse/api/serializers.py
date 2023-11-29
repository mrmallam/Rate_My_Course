from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.authtoken.views import Token
from .models import Person, University


class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = ['id', 'first_name', 'last_name']

class UniversitySerializer(serializers.ModelSerializer):
    class Meta:
        model = University
        fields = ['id', 'name', 'reviews']


# USER Serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password']
        
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