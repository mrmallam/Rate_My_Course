from django.db import models

# Create your models here.

class Persons(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)

class Universities(models.Model):
    name = models.CharField(max_length=50)
    reviews = models.IntegerField()
    # logo = models
