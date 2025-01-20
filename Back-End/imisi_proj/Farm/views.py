from django.shortcuts import render
from django.conf import settings
from django.core.mail import EmailMessage 
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.

# def tester(request):
    # return render(request, 'Farm/page1.html')

class Sendmail(APIView):
    def post(self, request):
        # Extract data from the request
        name = request.data.get('name')
        email = request.data.get('email')
        subject = request.data.get('subject')
        message = request.data.get('message')

        # Validate required fields
        if not all([name, email, subject, message]):
            return Response({'status': False, 'message': 'All fields are required'}, status=400)

        try:
            # Create the email
            email_message = EmailMessage(
                subject=f"A message from {name}: {subject}",
                body=message,
                from_email=settings.EMAIL_HOST_USER,  # Sender email (your app's email)
                to=[settings.EMAIL_HOST_USER],  # Receiver email (your app's admin email)
                reply_to=[email]  # User's email for replies
            )
            email_message.send(fail_silently=False)
            return Response({'status': True, 'message': 'Email sent successfully'}, status=200)
        except Exception as e:
            return Response({'status': False, 'message': f'An error occurred: {str(e)}'}, status=500)

def ReactTemplate(request):
    return render(request, 'Farm/index.html')