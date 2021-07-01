from django.shortcuts import render
from rest_framework import generics

# Create your views here.
from petsAPI.models import Pets
from petsAPI.serializers import PetSerializer


def index(req):
    return render(req, 'index.html')


class PetsListApiView(generics.ListCreateAPIView):
    queryset = Pets.objects.all()
    serializer_class = PetSerializer


class PetDetailsApiView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Pets.objects.all()
    serializer_class = PetSerializer