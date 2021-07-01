# from django.db import models

# Create your models here.
from django.contrib.auth.models import User
from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models


class Pets(models.Model):
    name = models.CharField(max_length=30, blank=False)
    age = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(100)], blank=True)
    image = models.ImageField(upload_to='pets_images', blank=False)
    description = models.TextField(blank=True, max_length=1000)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, )

    def __str__(self):
        return f"{self.name.capitalize()}, Age: {self.age}"
