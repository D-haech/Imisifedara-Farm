from django.urls import path
from Farm.views import Sendmail

urlpatterns = [
    path('api/imisifedara/send/mail', Sendmail.as_view(), name= ''),
]
