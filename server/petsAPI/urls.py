from django.urls import path
from petsAPI.views import PetsListApiView, PetDetailsApiView

urlpatterns = [

    path('', PetsListApiView.as_view(), name='pets list view'),
    path('details/<int:pk>/', PetDetailsApiView.as_view(), name='pet details view'),
]
