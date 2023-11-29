from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PersonsViewSet, UserViewSet, UniversitiesViewSet


router = DefaultRouter()
router.register('persons', PersonsViewSet, basename='Persons')
router.register('universities', UniversitiesViewSet, basename='Universities')
router.register('users', UserViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]