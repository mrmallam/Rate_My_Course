from django.db import models

# Create your models here.

class Person(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)

class University(models.Model):
    name = models.CharField(max_length=50)
    reviews = models.IntegerField()
    # logo = models
