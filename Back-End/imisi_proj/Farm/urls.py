from django.urls import path
from Farm import views

urlpatterns = [
    path('', views.tester, name= 'tested'),
]
