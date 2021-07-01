
from rest_framework import  serializers

from petsAPI.models import Pets


class PetSerializer(serializers.ModelSerializer):

    class Meta:
        model = Pets
        exclude = ['owner']
