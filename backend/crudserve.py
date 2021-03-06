from flask import Flask, Response, request, jsonify
from flask_cors import CORS
from flask.wrappers import Request
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from bson.json_util import dumps as dp
from pprint import PrettyPrinter, pprint
from pymongo import database
import certifi
import pymongo
import json
import dns
import hashlib
import pprint
from cryptography.fernet import Fernet
import codecs
from messagestomail import enviar_correo
################################ funcion de encriptacion##################################
CONST_KEY = Fernet.generate_key()
FERNET = Fernet(CONST_KEY)


def encriptacion(password):
    encMessage = FERNET.encrypt(bytes(password, 'UTF-8'))
    return encMessage

###################################### funcion de desencriptacion########################


def desencriptacion(password):
    print(str(password, 'UTF-8'))
    print(FERNET.decrypt(password).decode('UTF-8'))
    return FERNET.decrypt(password).decode('UTF-8')


############################CONEXION CON LA BASE DE DATOS#################################
app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'
cors = CORS(app, resources={r"/*": {"origins": "*"}})

try:

    client = pymongo.MongoClient(
        "mongodb+srv://admin-21dias:Dragon19981960@21dias-back.dqw6g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", ssl=True, ssl_cert_reqs='CERT_NONE')
    db = client.get_database("21dias-db")

except:
    print('Error: conxion fallida a mongo db')

###############################OBTENERUSUSARIO###########################################


@app.route('/usuarios', methods=['GET'])
def obtener_usuarios():
    try:
        datos = list(db.usuarios.find())
        for usuario in datos:
            usuario["_id"] = str(usuario["_id"])
            usuario["password"] = ""
            for exercise in usuario["listCompletedExercises"]:
                exercise["_id"] = str(exercise["_id"])
            for pauseCons in usuario["pauseConsiderationList"]:
                pauseCons["_id"] = str(pauseCons["_id"])
            for contemCons in usuario["contemplationConsiderationList"]:
                contemCons["_id"] = str(contemCons["_id"])
        return Response(
            response=json.dumps(datos),
            status=200,
            mimetype="application/json"
        )
    except Exception as ex:
        print(ex)
        return Response(
            response=json.dumps({"message": "can not obtain users"}),
            status=500,
            mimetype="application/json"
        )
###############################OBTENERUSUSARIO###########################################


@app.route('/usuarios/userId=<userId>', methods=['GET'])
def obtener_usuario_por_Id(userId):
    try:
        datos = db.usuarios.find_one({"_id": ObjectId(userId)})
        datos["_id"] = str(datos["_id"])
        datos["password"] = ""
        for exercise in datos["listCompletedExercises"]:
            exercise["_id"] = str(exercise["_id"])
        for pauseCons in datos["pauseConsiderationList"]:
            pauseCons["_id"] = str(pauseCons["_id"])
        for contemCons in datos["contemplationConsiderationList"]:
            contemCons["_id"] = str(contemCons["_id"])
        return Response(
            response=json.dumps(datos),
            status=200,
            mimetype="application/json"
        )
    except Exception as ex:
        print(ex)
        return Response(
            response=json.dumps({"message": "can not obtain users"}),
            status=500,
            mimetype="application/json"
        )
########################################OBTENERUSUARIOPOREMAIL##################################


@app.route('/usuarios/login', methods=['POST'])
def obtener_usuario_por_email():
    try:
        _json = request.json
        _email = _json['email']
        _password = _json['password']
        datos = db.usuarios.find_one({"email": _email})
        print(datos["password"])
        hasedpassword = desencriptacion(datos['password'])
        if hasedpassword == _password and request.method == "POST":
            print(datos)
            datos["_id"] = str(datos["_id"])
            for exercise in datos["listCompletedExercises"]:
                exercise["_id"] = str(exercise["_id"])
            for pauseCons in datos["pauseConsiderationList"]:
                pauseCons["_id"] = str(pauseCons["_id"])
            for contemCons in datos["contemplationConsiderationList"]:
                contemCons["_id"] = str(contemCons["_id"])
            resp = dp(datos)
            return resp
        else:
            message = {
                'status': 401,
                'message': 'Contrase??a invalida' + request.url
            }
            resp = jsonify(message)
            return resp
    except Exception as ex:
        print(ex)
        message = {
            'status': 500,
            'message': 'User Not Found ' + request.url
        }
        resp = jsonify(message)
        return resp
###############################CREARUSUSARIO####################################################


@app.route('/usuarios', methods=['POST'])
def crear_usuario():
    try:
        _json = request.json
        _id = _json['_id']
        _name = _json['name']
        _lastName = _json['lastName']
        _password = _json['password']
        _email = _json['email']
        _gender = _json['gender']
        _city = _json['city']
        _country = _json['country']
        _role = _json['role']
        _urlImage = _json['urlImage']
        _listCompletedExercises = _json['listCompletedExercises']
        _pauseConsiderationList = _json['pauseConsiderationList']
        _contemplationConsiderationList = _json['contemplationConsiderationList']
        print(_email)
        print(_password)
        if _name and _lastName and _email and _password and request.method == 'POST':
            _hashed_password = encriptacion(_password)
            usuario = {
                'name': _name,
                'lastName': _lastName,
                'password': _hashed_password,
                'email': _email,
                'gender': _gender,
                'city': _city,
                'country': _country,
                'role': _role,
                'urlImage': _urlImage,
                'listCompletedExercises': _listCompletedExercises,
                'pauseConsiderationList': _pauseConsiderationList,
                'contemplationConsiderationList': _contemplationConsiderationList
            }
            enviar_correo('luisjaramilloespinos16@gmail.com',
                          'dragon1998', usuario["email"])
            id = db.usuarios.insert(usuario)

            print("cree el usuario")
            resp = jsonify("Exito, usuario a??adido")
            resp.status_code = 200
            return resp

        else:
            message = {
                'status': 404,
                'message': 'Not Found ' + request.url
            }
            resp = jsonify(message)
            return resp
    except Exception as ex:
        print("***********")
        print(ex)
        print("***********")

###############################CREARUSUSARIO####################################################


@app.route('/usuarios/saveExercise/idUser=<idUser>&idExercise=<idExercise>', methods=['PUT'])
def save_exercise(idUser, idExercise):
    try:
        exercise = db.spiritualexercises.find_one(
            {'_id': ObjectId(idExercise)})
        existentExercise = db.usuarios.find_one({
            '_id': ObjectId(idUser),
            'listCompletedExercises': {
                '$in': [exercise]
            }
        })
        if existentExercise and request.method == 'PUT':
            message = {
                'status': 404,
                'message': 'Not Found ' + request.url
            }
            resp = jsonify(message)
            return resp
        else:
            db.usuarios.update_one({
                '_id': ObjectId(idUser)
            }, {
                '$push': {
                    'listCompletedExercises': exercise
                }
            })
            print("a??adi el ejercicio")
            resp = jsonify("Exito, ejercicio a??adido a usuario")
            resp.status_code = 200
            return resp
    except Exception as ex:
        print("***********")
        print(ex)
        print("***********")


##################################ACTUALIZARUSUARIO####################################################
@app.route('/usuarios/<id>', methods=['PUT'])
def actualizar_usuario(id):
    try:
        _id = id
        _json = request.json
        _name = _json['name']
        _lastName = _json['lastName']
        _password = _json['password']
        _email = _json['email']
        _gender = _json['gender']
        _city = _json['city']
        _country = _json['country']
        _role = _json['role']
        _urlImage = _json['urlImage']
        _listCompletedExercises = _json['listCompletedExercises']
        _pauseConsiderationList = _json['pauseConsiderationList']
        _contemplationConsiderationList = _json['contemplationConsiderationList']

        if _name and _lastName and _email and _password and request.method == 'PUT':
            _hashed_password = encriptacion(_password)
            id = db.usuarios.update_one(
                {
                    '_id': ObjectId(_id['$oid']) if '$oid' in _id else ObjectId(_id)
                },
                {
                    '$set': {
                        'name': _name,
                        'lastName': _lastName,
                        'password': _hashed_password,
                        'email': _email,
                        'gender': _gender,
                        'city': _city,
                        'country': _country,
                        'role': _role,
                        'urlImage': _urlImage,
                        'listCompletedExercises': _listCompletedExercises,
                        'pauseConsiderationList': _pauseConsiderationList,
                        'contemplationConsiderationList': _contemplationConsiderationList
                    }
                }
            )
            print("actualice el usuario")
            resp = jsonify("Exito, usuario actualizado")
            resp.status_code = 200
            return resp

        else:
            message = {
                'status': 404,
                'message': 'Not Found ' + request.url
            }
            resp = jsonify(message)
            return resp
    except Exception as ex:
        print("***********")
        print(ex)
        print("***********")

####################################Ejercicios Espirirtuales#####################################################


@app.route('/SpiritualExercises', methods=['POST'])
def crear_ejercicio_espiritual():
    try:
        print("inicio")
        ejercicio_spiritual = {
            'type': request.form["type"],
            'dayIndex': request.form["dayIndex"],
            'title': request.form["title"],
            'sentenceone': request.form["sentenceone"],
            'sentencetwo': request.form["sentencetwo"],
            'urlAudio': request.form["urlAudio"],
            'urlImage': request.form["urlImage"]
        }
        print("cree el usuario")
        dbResponse = db.spiritualexercises.insert_one(ejercicio_spiritual)
        print("entre")
        print(dbResponse.inserted_id)
        # for atributos in dir(dbResponse):
        # print(atributos)

        return Response(
            response=json.dumps(
                {"message": "exercise created", "id": "{}".format(dbResponse.inserted_id)}),
            status=200,
            mimetype="application/json"
        )

    except Exception as ex:
        print("***********")
        print(ex)
        print("***********")
######################################Obtener ejercicio espirirtual###########################################


@app.route('/SpiritualExercises', methods=['GET'])
def obtener_ejercicios():
    try:
        ejercicios = list(db.spiritualexercises.find())
        for ejercicio in ejercicios:
            ejercicio["_id"] = str(ejercicio["_id"])
        return Response(
            response=json.dumps(ejercicios),
            status=200,
            mimetype="application/json"
        )
    except Exception as ex:
        print(ex)
        return Response(
            response=json.dumps({"message": "can not obtain exercises"}),
            status=500,
            mimetype="application/json"
        )

######################################Obtener ejercicio espirirtual###########################################


@app.route('/SpiritualExercises/idUser=<idUser>&type=<type>', methods=['GET'])
def obtener_ejercicios_user_tipo(idUser, type):
    try:
        datos = db.usuarios.find_one(
            {
                '_id': ObjectId(idUser)
            },
            {
                '_id': 0,
                'listCompletedExercises': 1
            })
        print(datos)
        exerciseList = []
        for exercise in datos["listCompletedExercises"]:
            if exercise["type"] == type:
                exercise["_id"] = str(exercise["_id"])
                exerciseList.append(exercise)
        print(exerciseList)
        resp = dp(exerciseList)
        return resp

    except Exception as ex:
        print(ex)
        return Response(
            response=json.dumps({"message": "can not obtain exercises"}),
            status=500,
            mimetype="application/json"
        )

######################################Obtener ejercicio espirirtual###########################################


@app.route('/usuarios/spiritualExercises', methods=['GET'])
def obtener_ejercicios_user():
    try:
        datos = list(db.usuarios.find(
            {},
            {
                '_id': 0,
                'listCompletedExercises': 1
            }))
        print(datos)
        exerciseList = []
        for usuario in datos:
            for exercise in usuario["listCompletedExercises"]:
                exercise["_id"] = str(exercise["_id"])
                exerciseList.append(exercise)
        print(exerciseList)
        resp = dp(exerciseList)
        return resp
    except Exception as ex:
        print(ex)
        return Response(
            response=json.dumps({"message": "can not obtain exercises"}),
            status=500,
            mimetype="application/json"
        )

###################################################Obetener ejerccio espiritual por id############################


@app.route('/SpiritualExercises/<id>', methods=['GET'])
def obtener_ejercicio_por_id(id):
    try:
        ejercicio = db.spiritualexercises.find_one({"_id": ObjectId(id)})
        print(ejercicio)
        ejercicio["_id"] = str(ejercicio["_id"])
        return Response(
            response=json.dumps(ejercicio),
            status=200,
            mimetype="application/json"
        )
    except Exception as ex:
        print(ex)
        return Response(
            response=json.dumps({"message": "can not obtain exercises"}),
            status=500,
            mimetype="application/json"
        )
#######################################################obtner por dia y tipo##########


@app.route('/SpiritualExercises/day=<dia>&type=<tipo>', methods=['GET'])
def obtener_ejercicio_por_dia_y_tipo(dia, tipo):
    try:
        ejercicio = db.spiritualexercises.find_one(
            {"dayIndex": dia, "type": tipo})
        # return dp(ejercicio)
        ejercicio["_id"] = str(ejercicio["_id"])
        return Response(
            response=json.dumps(ejercicio),
            status=200,
            mimetype="application/json"
        )
    except Exception as ex:
        print(ex)
        return Response(
            response=json.dumps({"message": "can not obtain exercises"}),
            status=500,
            mimetype="application/json"
        )
##################################################Obtener ejercicio espiritual por type ################################


@app.route('/SpiritualExercises/type=<tipo>', methods=['GET'])
def obtener_ejercicio_por_tipo(tipo):
    try:
        ejercicios = list(db.spiritualexercises.find(
            {"type": tipo}, {"_id": 0}))

        return Response(
            response=json.dumps(ejercicios),
            status=200,
            mimetype="application/json"
        )
    except Exception as ex:
        print(ex)
        return Response(
            response=json.dumps({"message": "can not obtain exercises"}),
            status=500,
            mimetype="application/json"
        )
###################################### Actualizar ejercicio espiritual por id ##########################################


@app.route('/SpiritualExercises/update/<id>', methods=["PUT"])
def actualizar_ejercicio_espiritual(id):
    try:
        _id = id
        _json = request.json
        _type = _json['type']
        _dayIndex = _json['dayIndex']
        _title = _json['title']
        _sentenceone = _json['sentenceone']
        _sentencetwo = _json['sentencetwo']
        _urlAudio = _json['urlAudio']
        _urlImage = _json['urlImage']

        if _title and _sentenceone and _sentencetwo and _urlAudio and _urlImage and request.method == 'PUT':
            id = db.spiritualexercises.update_one(
                {
                    '_id': ObjectId(_id['$oid']) if '$oid' in _id else ObjectId(_id)
                },
                {"$set":
                    {
                        'type': _type,
                        'dayIndex': _dayIndex,
                        "title": _title,
                        "sentenceone": _sentenceone,
                        "sentencetwo": _sentencetwo,
                        "urlAudio": _urlAudio,
                        "urlImage": _urlImage
                    }
                 }
            )
            resp = jsonify("Exito, usuario actualizado")
            resp.status_code = 200
            return resp

        else:
            message = {
                'status': 404,
                'message': 'Not Found ' + request.url
            }
            resp = jsonify(message)
            return resp
    except Exception as ex:
        print(ex)
        return Response(
            response=json.dumps(
                {"message": "can not update the contemplation"}),
            status=500,
            mimetype="application/json"
        )
############################################Eliminar ejercicio por id##################################


@app.route('/SpiritualExercises/delete/day=<day>&type=<type>', methods=["DELETE"])
def eliminar_ejercicio_espiritual(day, type):
    try:
        print(day+' '+type)
        _day = day
        _type = type
        print(_day+' '+_type)
        id = db.spiritualexercises.update_one(
            {
                'dayIndex': _day,
                'type': _type
            },
            {"$set":
                {
                    "title": "",
                    "sentenceone": "",
                    "sentencetwo": "",
                    "urlAudio": "",
                    "urlImage": ""
                }
             }
        )
        print(id)
        resp = jsonify("Exito, ejercicio eliminado")
        print(resp)
        resp.status_code = 200
        return resp
    except Exception as ex:
        print(ex)
        return Response(
            response=json.dumps(
                {"message": "can not update the contemplation"}),
            status=500,
            mimetype="application/json"
        )
#########################################################Consultar Contemplation####################################################


@app.route('/ContemplationConsideration', methods=['GET'])
def obtener_contemplations():
    try:
        contemplations = list(db.contemplationConsideration.find())
        for contemplacion in contemplations:
            contemplacion["_id"] = str(contemplacion["_id"])
        return Response(
            response=json.dumps(contemplations),
            status=200,
            mimetype="application/json"
        )
    except Exception as ex:
        print(ex)
        return Response(
            response=json.dumps({"message": "can not obtain contemplations"}),
            status=500,
            mimetype="application/json"
        )
#########################################################Consultar Contemplation####################################################


@app.route('/ContemplationConsideration/contemplationId=<id>', methods=['GET'])
def obtener_contemplation_by_Id(id):
    try:
        data = db.contemplationConsideration.find_one({"_id": ObjectId(id)})
        data["_id"] = str(data["_id"])
        print(data)
        return Response(
            response=json.dumps(data),
            status=200,
            mimetype="application/json"
        )
    except Exception as ex:
        print(ex)
        return Response(
            response=json.dumps({"message": "can not obtain contemplations"}),
            status=500,
            mimetype="application/json"
        )
#########################################################Consultar Contemplation####################################################


@app.route('/ContemplationConsideration/idUser=<idUser>', methods=['GET'])
def obtener_contemplations_usuario(idUser):
    try:
        contemplations = list(
            db.contemplationConsideration.find({"idUser": idUser}))
        for contemplacion in contemplations:
            contemplacion["_id"] = str(contemplacion["_id"])
        return Response(
            response=json.dumps(contemplations),
            status=200,
            mimetype="application/json"
        )
    except Exception as ex:
        print(ex)
        return Response(
            response=json.dumps({"message": "can not obtain contemplations"}),
            status=500,
            mimetype="application/json"
        )
#########################################################Consultar Contemplation####################################################


@app.route('/ContemplationConsideration/text', methods=['POST'])
def create_text_contemplation():
    try:
        _json = request.json
        _dayIndex = _json['dayIndex']
        _type = _json['type']
        _urlConsiderationAudio = _json['urlConsiderationAudio']
        _considerationText = _json['considerationText']
        _idUser = _json['idUser']

        consideration = {
            'dayIndex': _dayIndex,
            'type': _type,
            'urlConsiderationAudio': "",
            'considerationText': _considerationText,
            'idUser': _idUser
        }
        id = db.contemplationConsideration.insert(consideration)
        if id and request.method == 'POST':
            print("cree la contemplacion")
            resp = jsonify("Exito, contemplacion a??adida")
            resp.status_code = 200
            return resp
        else:
            message = {
                'status': 404,
                'message': 'Not Found ' + request.url
            }
            resp = jsonify(message)
            return resp
    except Exception as ex:
        print(ex)
        return Response(
            response=json.dumps({"message": "can not obtain contemplations"}),
            status=500,
            mimetype="application/json"
        )

#########################################################Consultar Contemplation####################################################


@app.route('/ContemplationConsideration/audio', methods=['POST'])
def create_audio_contemplations():
    try:
        _json = request.json
        _dayIndex = _json['dayIndex']
        _type = _json['type']
        _urlConsiderationAudio = _json['urlConsiderationAudio']
        _considerationText = _json['considerationText']
        _idUser = _json['idUser']

        consideration = {
            'dayIndex': _dayIndex,
            'type': _type,
            'urlConsiderationAudio': _urlConsiderationAudio,
            'considerationText': "",
            'idUser': _idUser
        }
        id = db.contemplationConsideration.insert(consideration)
        if id and request.method == 'POST':
            print("cree la contemplacion")
            resp = jsonify("Exito, contemplacion a??adida")
            resp.status_code = 200
            return resp
        else:
            message = {
                'status': 404,
                'message': 'Not Found ' + request.url
            }
            resp = jsonify(message)
            return resp
    except Exception as ex:
        print(ex)
        return Response(
            response=json.dumps({"message": "can not obtain contemplations"}),
            status=500,
            mimetype="application/json"
        )
#########################################################Consultar Contemplation####################################################


@app.route('/PauseConsideration', methods=['GET'])
def obtener_contemplationsP():
    try:
        contemplations = list(db.pauseConsideration.find())
        for contemplacion in contemplations:
            contemplacion["_id"] = str(contemplacion["_id"])
        return Response(
            response=json.dumps(contemplations),
            status=200,
            mimetype="application/json"
        )
    except Exception as ex:
        print(ex)
        return Response(
            response=json.dumps({"message": "can not obtain contemplations"}),
            status=500,
            mimetype="application/json"
        )
#########################################################Consultar Contemplation####################################################


@app.route('/PauseConsideration/contemplationId=<id>', methods=['GET'])
def obtener_contemplationP_by_Id(id):
    try:
        data = db.pauseConsideration.find_one({"_id": ObjectId(id)})
        data["_id"] = str(data["_id"])
        print(data)
        return Response(
            response=json.dumps(data),
            status=200,
            mimetype="application/json"
        )
    except Exception as ex:
        print(ex)
        return Response(
            response=json.dumps({"message": "can not obtain contemplations"}),
            status=500,
            mimetype="application/json"
        )
#########################################################Consultar Contemplation####################################################


@app.route('/PauseConsideration/idUser=<idUser>', methods=['GET'])
def obtener_contemplationsP_usuario(idUser):
    try:
        contemplations = list(db.pauseConsideration.find({"idUser": idUser}))
        for contemplacion in contemplations:
            contemplacion["_id"] = str(contemplacion["_id"])
        return Response(
            response=json.dumps(contemplations),
            status=200,
            mimetype="application/json"
        )
    except Exception as ex:
        print(ex)
        return Response(
            response=json.dumps({"message": "can not obtain contemplations"}),
            status=500,
            mimetype="application/json"
        )
#########################################################Consultar Contemplation####################################################


@app.route('/PauseConsideration', methods=['POST'])
def create_contemplationP():
    try:
        _json = request.json
        _dayIndex = _json['dayIndex']
        _emoji = _json['emoji']
        _idUser = _json['idUser']
        print(_json)

        consideration = {
            'dayIndex': _dayIndex,
            'emoji': _emoji,
            'idUser': _idUser
        }
        print(consideration)
        id = db.pauseConsideration.insert(consideration)
        if id and request.method == 'POST':
            print("cree la contemplacion")
            resp = jsonify("Exito, contemplacion a??adida")
            resp.status_code = 200
            return resp
        else:
            message = {
                'status': 404,
                'message': 'Not Found ' + request.url
            }
            resp = jsonify(message)
            return resp
    except Exception as ex:
        print(ex)
        return Response(
            response=json.dumps({"message": "can not obtain contemplations"}),
            status=500,
            mimetype="application/json"
        )


################################## GET POSICIONES GENERICAS ###################################
@app.route('/posiciones', methods=["GET"])
def obtener_posiciones():
    try:
        dbResponse = list(db.genericPositions.find({}, {'_id': 0}))
        return Response(
            response=json.dumps(dbResponse),
            status=200,
            mimetype="application/json"
        )
    except Exception as ex:
        print(ex)
        return Response(
            response=json.dumps(
                {"message": "can not delete the contemplation"}),
            status=500,
            mimetype="application/json"
        )


if __name__ == "__main__":
    app.run(port=90, debug=True)
