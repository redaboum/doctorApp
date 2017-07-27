from django.http import HttpResponse
from django.http import HttpResponseRedirect
from django.shortcuts import render
import json
from back.models import Pathology
from django.core.serializers import serialize

def get(request):
  pathologies = Pathology.objects.all()
  return HttpResponse(serialize('json', pathologies), content_type="application/json")

def post(request):
  return HttpResponse(json.dumps({"coucou": "reda"}), content_type="application/json")
