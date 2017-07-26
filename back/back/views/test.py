from django.http import HttpResponse
from django.http import HttpResponseRedirect
from django.shortcuts import render
import json

def test():
  return HttpResponse(json.dumps({"coucou": "reda"}), content_type="application/json")
