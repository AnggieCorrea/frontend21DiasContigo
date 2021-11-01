from flask import Flask, Response, request, jsonify
from flask_cors import CORS
from flask.wrappers import Request
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from bson.json_util import dumps as dp
from pprint import pprint
from werkzeug.security import generate_password_hash, check_password_hash
import certifi
import pymongo
import json
import dns

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
        print(_email)
        _hashed_password = _json['password']
        print(_hashed_password)
        datos = db.usuarios.find_one({"email": _email})
        print(datos)
        if check_password_hash(datos['password'],_hashed_password):
            resp = dp(datos)
            return resp
        else:
            usuario = {
                'name': '',
                'lastName': '',
                'password': '',
                'email': '',
                'gender': '',
                'city': '',
                'country': '',
                'role': '',
                'urlImage': '',
                'listIdsCompletedPauses': [],
                'listIdsCompletedContemplations': [],
                'pauseConsiderationList': [],
                'contemplationConsiderationList': []
            }
            resp = dp(usuario)
            return resp
    except Exception as ex:
        print(ex)
        message = {
                'status': 404,
                'message': 'Not Found '+ request.url  
            }
        resp = jsonify(message)
        return resp

###############################CREARUSUSARIO####################################################
@app.route('/usuarios', methods=['POST'])
def crear_usuario():
    try:
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
        _listIdsCompletedPauses = _json['listIdsCompletedPauses']
        _listIdsCompletedContemplations = _json['listIdsCompletedContemplations']
        _pauseConsiderationList = _json['pauseConsiderationList']
        _contemplationConsiderationList = _json['contemplationConsiderationList']

        if _name and _lastName and _email and _password and request.method =='POST':
            _hashed_password = generate_password_hash(_password)
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
                'listIdsCompletedPauses': _listIdsCompletedPauses,
                'listIdsCompletedContemplations': _listIdsCompletedContemplations,
                'pauseConsiderationList': _pauseConsiderationList,
                'contemplationConsiderationList': _contemplationConsiderationList
            }
            id = db.usuarios.insert(usuario)
            print("cree el usuario")
            resp = jsonify("Exito, usuario añadido")
            resp.status_code = 200
            return resp

        else:
            message = {
                'status': 404,
                'message': 'Not Found '+ request.url  
            }
            resp = jsonify(message)
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
        _listIdsCompletedPauses = _json['listIdsCompletedPauses']
        _listIdsCompletedContemplations = _json['listIdsCompletedContemplations']
        _pauseConsiderationList = _json['pauseConsiderationList']
        _contemplationConsiderationList = _json['contemplationConsiderationList']

        if _name and _lastName and _email and _password and request.method =='PUT':
            _hashed_password = generate_password_hash(_password)
                
            id = db.usuarios.update_one(
                {
                    '_id':ObjectId(_id['$oid']) if '$oid' in _id else ObjectId(_id)
                },
                {
                    '$set':{
                        'name': _name,
                        'lastName': _lastName,
                        'password': _hashed_password,
                        'email': _email,
                        'gender': _gender,
                        'city': _city,
                        'country': _country,
                        'role': _role,
                        'urlImage': _urlImage,
                        'listIdsCompletedPauses': _listIdsCompletedPauses,
                        'listIdsCompletedContemplations': _listIdsCompletedContemplations,
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
                'message': 'Not Found '+ request.url  
            }
            resp = jsonify(message)
            return resp
    except Exception as ex:
        print("***********")
        print(ex)
        print("***********")
##################################ELIMINAR USUSARIO###################################################


@app.route("/usuarios/<id>", methods=["DELETE"])
def eliminar_usuario(id):
    try:
        dbResponse = db.usuarios.delete_one({"_id": ObjectId(id)})
        for atributos in dir(dbResponse):
            print("******{}******".format(atributos))
        return Response(
            response=json.dumps({"message": "user deleted", "id": f"{id}"}),
            status=200,
            mimetype="application/json"
        )

    except Exception as ex:
        print("************")
        print(ex)
        print("************")
        return Response(
            response=json.dumps({"message": "can not delete this user"}),
            status=500,
            mimetype="application/json"
        )
####################################Reflexiones############################################


@app.route('/reflexiones', methods=['POST'])
def crear_reflexion():
    try:
        reflexion = {'titulo': request.form["titulo"],
                     'descripcion': request.form["descripcion"],
                     'dia': request.form["dia"],
                     'url': request.form["url"]
                     }
        dbResponse = db.reflexiones.insert_one(reflexion)
        print(dbResponse.inserted_id)
        return Response(
            response=json.dumps(
                {"message": "reflection created", "id": "{}".format(dbResponse.inserted_id)}),
            status=200,
            mimetype="application/json"
        )

    except Exception as ex:
        print("***********")
        print(ex)
        print("***********")

###########################OBTENERREFELXION######################################################


@app.route('/reflexiones', methods=['GET'])
def obtener_reflexion():
    try:
        datos = list(db.reflexiones.find())
        for reflexion in datos:
            reflexion["_id"] = str(reflexion["_id"])
        return Response(
            response=json.dumps(datos),
            status=500,
            mimetype="application/json"
        )
    except Exception as ex:
        print(ex)
        return Response(
            response=json.dumps({"message": "can not obtain reflection"}),
            status=500,
            mimetype="application/json"
        )
#######################################ACTUALIZARREFLEXION#####################################


@app.route('/reflexiones/<dia>', methods=['PATCH'])
def actulizar_reflexion(dia):
    try:
        dbResponse = db.reflexiones.update_one(
            {"dia": dia},
            {"$set": {"url": request.form["url"]}}
        )
        if dbResponse.modified_count == 1:

            return Response(
                response=json.dumps({"message": "reflection updated"}),
                status=200,
                mimetype="application/json"
            )
        else:
            return Response(
                response=json.dumps({"message": "nothing to update"}),
                status=200,
                mimetype="application/json"
            )
    except Exception as ex:
        print(ex)
        return Response(
            response=json.dumps({"message": "can not update the reflection"}),
            status=500,
            mimetype="application/json"
        )
##########################################ELIMINARREFELXION########################################################


@app.route('/reflexiones/<dia>', methods=['Delete'])
def eliminar_reflexion(dia):
    try:
        dbResponse = db.reflexiones.delete_one({'dia': dia})
        return Response(
            response=json.dumps(
                {"message": "reflection deleted", "day": f"{dia}"}),
            status=200,
            mimetype="application/json"
        )
    except Exception as ex:
        print(ex)
        return Response(
            response=json.dumps({"message": "can not update the refelction"}),
            status=500,
            mimetype="application/json"
        )
###################################################CONTEMPLACIONES#################################################


@app.route('/contemplaciones', methods=['POST'])
def crear_contemplacion():
    try:
        contemplacion = {'titulo': request.form["titulo"],
                         'descripcion': request.form["descripcion"],
                         'dia': request.form["dia"],
                         'url': request.form["url"]
                         }
        dbResponse = db.contemplaciones.insert_one(contemplacion)
        print(dbResponse.inserted_id)
        return Response(
            response=json.dumps(
                {"message": "reflection created", "id": "{}".format(dbResponse.inserted_id)}),
            status=200,
            mimetype="application/json"
        )

    except Exception as ex:
        print("***********")
        print(ex)
        print("***********")
#########################################OBTENER CONTEMPLACION#################################################


@app.route('/contemplaciones', methods=['GET'])
def obtener_contemplacion():
    try:
        datos = list(db.contemplaciones.find())
        for reflexion in datos:
            reflexion["_id"] = str(reflexion["_id"])
        return Response(
            response=json.dumps(datos),
            status=500,
            mimetype="application/json"
        )
    except Exception as ex:
        print(ex)
        return Response(
            response=json.dumps({"message": "can not obtain reflection"}),
            status=500,
            mimetype="application/json"
        )
#######################################ACTUALIZARCONTEMPLACION###############################################################


@app.route('/contemplaciones/<dia>', methods=['PATCH'])
def actulizar_contemplacion(dia):
    try:
        dbResponse = db.contemplaciones.update_one(
            {"dia": dia},
            {"$set": {"url": request.form["url"]}}
        )
        if dbResponse.modified_count == 1:

            return Response(
                response=json.dumps({"message": "contemplation updated"}),
                status=200,
                mimetype="application/json"
            )
        else:
            return Response(
                response=json.dumps({"message": "nothing to contemplation"}),
                status=200,
                mimetype="application/json"
            )
    except Exception as ex:
        print(ex)
        return Response(
            response=json.dumps(
                {"message": "can not update the contemplation"}),
            status=500,
            mimetype="application/json"
        )
###############################################ELIMINARCONTEMPLACION######################


@app.route('/contemplaciones/<dia>', methods=['Delete'])
def eliminar_contemplacion(dia):
    try:
        dbResponse = db.contemplaciones.delete_one({'dia': dia})
        return Response(
            response=json.dumps(
                {"message": "contemplation deleted", "day": f"{dia}"}),
            status=200,
            mimetype="application/json"
        )
    except Exception as ex:
        print(ex)
        return Response(
            response=json.dumps(
                {"message": "can not update the contemplation"}),
            status=500,
            mimetype="application/json"
        )
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
            status=500,
            mimetype="application/json"
        )
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
        ejercicio["_id"] = str(ejercicio["_id"])
        ejercicio["urlImage"] = str(ejercicio["urlImage"])
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
############################################### Objetner ejercicios spirituales de usuario################


@app.route('/SpiritualExercises/userid=<id>', methods=['GET'])
def obtener_ejercicios_por_userid(id):
    try:
        ejercicios = list(db.spiritualexercises.aggregate([
            {
                "$lookup":
                {
                    "from": "usuarios",
                    "localField": "dayIndex",
                    "foreignField": "listIdsCompletedExercises",
                    "as": "listIdsxdayIndex"
                }
            },
            {
                "$project": {
                    "_id": 0,
                    "listIdsxdayIndex._id": 0  # . es equivlaente apuntero sobre el obejro de la lista
                }
            }
        ]
        ))
        for element in ejercicios:
            pprint(element)

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


@app.route('/SpiritualExercises/update/<id>', methods=["POST"])
def actualizar_ejercicio_espiritual(id):
    try:

        dbResponse = db.spiritualexercises.update_one(
            {"_id": ObjectId(id)},
            {"$set": {
                "_id": ObjectId(request.form["_id"]),
                "dayIndex": request.form["dayIndex"],
                "title": request.form["title"],
                "sentenceone": request.form["sentenceone"],
                "sentencetwo": request.form["sentencetwo"],
                "urlAudio": request.form["urlAudio"],
                "urlImage": request.form["urlImage"]}}
        )
        if dbResponse.modified_count == 1:
            return Response(
                response=json.dumps({"message": "exercise updated"}),
                status=200,
                mimetype="application/json")
        else:
            return Response(
                response=json.dumps({"message": "nothing to contemplation"}),
                status=200,
                mimetype="application/json"
            )

    except Exception as ex:
        print(ex)
        return Response(
            response=json.dumps({"message": "can not update the exercise"}),
            status=500,
            mimetype="application/json")
############################################Eliminar ejercicio por id##################################


@app.route("/SpiritualExercises/<id>", methods=["DELETE"])
def eliminar_ejercicio_espirirtual(id):
    try:
        dbResponse = db.spiritualexercises.delete_one({"_id": ObjectId(id)})
        for atributos in dir(dbResponse):
            print("******{}******".format(atributos))
        return Response(
            response=json.dumps(
                {"message": "exercise deleted", "id": f"{id}"}),
            status=200,
            mimetype="application/json"
        )

    except Exception as ex:
        print("************")
        print(ex)
        print("************")
        return Response(
            response=json.dumps({"message": "can not delete this exercise"}),
            status=500,
            mimetype="application/json"
        )
################################ ContemplationConsideration######################################


@app.route('/ContemplationConsideration', methods=['POST'])
def crear_contemplation():
    try:
        print("inicio")
        contemplacion = {
            'title': request.form["title"],
            'dayIndex': request.form["dayIndex"],
            'type': request.form["type"],
            'creationDate': request.form["creationDate"],
            'urlConsiderationAudio': request.form["urlConsiderationAudio"],
            'considerationText': request.form["considerationText"],
            'idUser': request.form["idUser"]
        }
        print("cree el usuario")
        dbResponse = db.ContemplationConsideration.insert_one(contemplacion)
        print("entre")
        print(dbResponse.inserted_id)
        # for atributos in dir(dbResponse):
        # print(atributos)

        return Response(
            response=json.dumps(
                {"message": "contemplation created", "id": "{}".format(dbResponse.inserted_id)}),
            status=200,
            mimetype="application/json"
        )

    except Exception as ex:
        print("***********")
        print(ex)
        print("***********")
#########################################################Consultar Contemplation####################################################


@app.route('/ContemplationConsideration', methods=['GET'])
def obtener_contemplations():
    try:
        contemplations = list(db.ContemplationConsideration.find())
        for contemplacion in contemplations:
            contemplacion["_id"] = str(contemplacion["_id"])
        return Response(
            response=json.dumps(contemplations),
            status=500,
            mimetype="application/json"
        )
    except Exception as ex:
        print(ex)
        return Response(
            response=json.dumps({"message": "can not obtain contemplations"}),
            status=500,
            mimetype="application/json"
        )
####################################### Update contemplations by id#########################################


@app.route('/ContemplationConsideration/<id>', methods=["PATCH"])
def actualizar_Contemplation(id):
    try:

        dbResponse = db.ContemplationConsideration.update_one(
            {"_id": ObjectId(id)},
            {"$set": {'title': request.form["title"], 'dayIndex': request.form["dayIndex"], 'type': request.form["type"],
                      'creationDate': request.form["creationDate"], 'urlConsiderationAudio': request.form["urlConsiderationAudio"],
                      'considerationText': request.form["considerationText"],
                      'idUser': request.form["idUser"]}
             }
        )
        if dbResponse.modified_count == 1:
            return Response(
                response=json.dumps({"message": "exercise updated"}),
                status=200,
                mimetype="application/json")
        else:
            return Response(
                response=json.dumps({"message": "nothing to contemplation"}),
                status=200,
                mimetype="application/json"
            )

    except Exception as ex:
        print(ex)
        return Response(
            response=json.dumps({"message": "can not update the exercise"}),
            status=500,
            mimetype="application/json")
###################################### Eliminar Cotnemplations#######################################


@app.route('/ContemplationConsideration/<id>', methods=["DELETE"])
def eliminar_contemplation(id):
    try:
        dbResponse = db.ContemplationConsideration.delete_one({'_id': id})
        return Response(
            response=json.dumps(
                {"message": "contemplation deleted", "id": f"{id}"}),
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
