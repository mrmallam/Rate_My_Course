from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet, UniversityViewSet, CourseViewSet, ReviewViewSet, UserDetailView


router = DefaultRouter()
router.register('University', UniversityViewSet, basename='University')
router.register('Course', CourseViewSet, basename='Course')
router.register('users', UserViewSet)
router.register('Review', ReviewViewSet, basename='Review')

urlpatterns = [
    path('api/', include(router.urls)),
    path('api/users/<str:username>/', UserDetailView.as_view(), name='user-detail'), 

]