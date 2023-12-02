from django.db import models

# Create your models here.

class Persons(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)

class University(models.Model):
    name = models.CharField(max_length=50, primary_key=True)
    reviews = models.IntegerField(null=True, blank=True)
    # logo = models

class Course(models.Model):
    name = models.CharField(max_length=50)
    university = models.ForeignKey(University, on_delete=models.CASCADE)
    workload = models.CharField(max_length=25, default="Medium")
    difficulty = models.CharField(max_length=25, default="Medium")
    usefulness = models.CharField(max_length=25, default="Medium")
