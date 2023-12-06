from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from django.contrib.auth.models import User

# Create your models here.

class University(models.Model):
    name = models.CharField(max_length=50, primary_key=True)
    reviews = models.IntegerField(null=True, blank=True)
    image = models.ImageField(upload_to='images/', default='')


class Course(models.Model):
    name = models.CharField(max_length=50, primary_key=True)
    university = models.ForeignKey(University, on_delete=models.CASCADE)
    description = models.CharField(max_length=500, default="No description available")
    workload = models.CharField(max_length=25, default="Medium")
    difficulty = models.CharField(max_length=25, default="Medium")
    usefulness = models.CharField(max_length=25, default="Medium")

    
class Review(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    university = models.ForeignKey(University, on_delete=models.CASCADE)
    workload = models.IntegerField(default=0, validators=[MinValueValidator(1), MaxValueValidator(5)])
    difficulty = models.IntegerField(default=0, validators=[MinValueValidator(1), MaxValueValidator(5)])
    usefulness = models.IntegerField(default=0, validators=[MinValueValidator(1), MaxValueValidator(5)])
    review = models.CharField(max_length=500, default="No review available")
    professor = models.CharField(max_length=50, default="No professor available")
    submission_date = models.DateField(auto_now_add=True)
    # username = models.ForeignKey(User, on_delete=models.CASCADE, related_name='reviews', default="test")

    # upvotes = models.IntegerField()
    # downvotes = models.IntegerField()
    