from django.test import TestCase
from django.contrib.auth.models import User
from rest_framework.test import APIClient
from rest_framework import status

class UserViewSetTest(TestCase):
    def setUp(self):
        # Create a test user
        self.user = User.objects.create_user(username='testuser', password='testpassword')
        self.client = APIClient()

    def test_get_current_user(self):
        # Authenticate the test client
        self.client.force_authenticate(user=self.user)

        # Make a GET request to the viewset
        response = self.client.get('/api/users/')

        # Check that the response contains the correct data
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['username'], 'testuser')  # Adjust this according to your UserSerializer

        # Clean up authentication
        self.client.force_authenticate(user=None)
