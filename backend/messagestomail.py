import smtplib
from decouple import config 

def send_message(msg,mail):
    message=msg
    subject='correo de prueba '
    message='Subject: {}\n\n {}'.format(subject,message)
    server=smtplib.SMTP('smtp.gmail.com',587)
    server.starttls()
    server.login('luisjaramilloespinos16@gmail.com', '')
    server.sendmail('luisjaramilloespinos16@gmail.com','santidragon@hotmail.com',message)
    server.quit()
    print ('correo enviado exitosamente')