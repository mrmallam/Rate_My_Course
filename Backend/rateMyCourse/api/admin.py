from django.contrib import admin

# Register your models here.
from .models import Person, University

admin.site.register(Person)
admin.site.register(University)
