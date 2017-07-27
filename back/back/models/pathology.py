from django.db import models

class Pathology(models.Model):
  id = models.IntegerField(primary_key=True)
  speciality = models.TextField()
  name = models.TextField()
  clinicalPresentation = models.TextField()
  recommendations = models.TextField()
