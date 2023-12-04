from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PersonsViewSet, UserViewSet, UniversityViewSet, CourseViewSet, current_user_profile


router = DefaultRouter()
router.register('persons', PersonsViewSet, basename='Persons')
router.register('University', UniversityViewSet, basename='University')
router.register('Course', CourseViewSet, basename='Course')
router.register('users', UserViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
path('api/user/profile/', current_user_profile, name='current_user_profile'),
]