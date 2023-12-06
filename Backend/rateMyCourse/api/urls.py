from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet, UniversityViewSet, CourseViewSet, ReviewViewSet
from django.conf import settings
from django.conf.urls.static import static

router = DefaultRouter()
router.register('University', UniversityViewSet, basename='University')
router.register('Course', CourseViewSet, basename='Course')
router.register('users', UserViewSet)
router.register('Review', ReviewViewSet, basename='Review')

urlpatterns = [
    path('api/', include(router.urls)),
]

# To display images in the browser during development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
# In production, configure web server (e.g., Apache, Nginx) to serve media files securely
