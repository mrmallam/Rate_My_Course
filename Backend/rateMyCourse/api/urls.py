from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PersonViewSet, UserViewSet, UniversityViewSet


router = DefaultRouter()
router.register('person', PersonViewSet, basename='Person')
router.register('university', UniversityViewSet, basename='University')
router.register('user', UserViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]