from django.shortcuts import render

# Create your views here.

def tester(request):
    return render(request, 'Farm/page1.html')