import os
import smtplib
from email.message import EmailMessage
'''EMAIL_ADDRESS =os.environ.get('EMAIL_USER')
EMAIL_PASSWORD =os.environ.get('EMAIL_PASS')'''

with smtplib.SMTP('smtp.gmail.com',587) as smtp:
    smtp.ehlo()
    smtp.starttls()
    smtp.ehlo()

    smtp.login('luisjaramilloespinos16@gmail.com','dragon1998')
    subject='notification about  register in 21 dias'
    body='welcome to our new platfrom we are greatfull to count with you as new user'
    msg=f'Subject:{subject}\n\n{body}'
    smtp.sendmail('luisjaramilloespinos16@gmail.com','luisjaramilloespinos16@gmail.com',msg)
