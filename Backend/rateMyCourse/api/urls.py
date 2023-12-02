from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PersonsViewSet, UserViewSet, UniversityViewSet, CourseViewSet


router = DefaultRouter()
router.register('persons', PersonsViewSet, basename='Persons')
router.register('University', UniversityViewSet, basename='University')
router.register('Course', CourseViewSet, basename='Course')
router.register('users', UserViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]