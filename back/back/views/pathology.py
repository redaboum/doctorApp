from django.http import HttpResponse
from django.http import HttpResponseRedirect
from django.shortcuts import render
import json
from back.models import Pathology
from django.core.serializers import serialize
from django.views.decorators.csrf import csrf_exempt

def get(request):
  pathologies = Pathology.objects.all()
  return HttpResponse(serialize('json', pathologies), content_type="application/json")

@csrf_exempt
def post(request):
  data = request.POST
  speciality = data["speciality"]
  print(speciality)
  print(data)
  return HttpResponse(json.dumps({"coucou": "reda"}), content_type="application/json")
