from django.urls import path
from Farm.views import Sendmail, ReactTemplate


urlpatterns = [
    path('api/imisifedara/send/mail', Sendmail.as_view(), name= ''),
    path('', ReactTemplate, name='react-template' )
]
