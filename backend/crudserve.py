from flask import Flask,Response,request
from flask.wrappers import Request
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
import certifi
import pymongo
import json 
import dns


############################CONEXION CON LA BASE DE DATOS#################################
app=Flask(__name__)

try:
    
    client = pymongo.MongoClient("mongodb+srv://admin-21dias:Dragon19981960@21dias-back.dqw6g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",ssl=True,ssl_cert_reqs='CERT_NONE')
    db = client.get_database("21dias-db")
    
except:
    print('Error: conxion fallida a mongo db')

###############################OBTENERUSUSARIO###########################################
@app.route('/usuarios',methods=['GET'])
def obtener_usuarios():
    try:
        datos=list(db.usuarios.find())
        for usuario in datos:
            usuario["_id"]=str(usuario["_id"])
        return Response(
            response=json.dumps(datos),
            status=500,
            mimetype="application/json"
        )
    except Exception as ex:
        print(ex)
        return Response(
            response=json.dumps({"message":"can not obtain users"}),
            status=500,
            mimetype="application/json"
        )
########################################OBTENERUSUARIOPOREMAIL##################################
@app.route('/usuarios/<email>',methods=['GET'])
def obtener_usuario_por_email(email):
    try:
        #datos=db.usuarios.find_one({"_id":ObjectId(id)},{"_id":0})
        datos=db.usuarios.find_one({"email":email},{"_id":0})
        print(datos)
        #datos["email"]=str(datos["email"])
        return Response(
            response=json.dumps(datos),
            status=200,
            mimetype="application/json"
        )
    except Exception as ex:
        print(ex)
        return Response(
            response=json.dumps({"message":"can not obtain userses"}),
            status=500,
            mimetype="application/json"
        )

###############################CREARUSUSARIO####################################################

@app.route('/usuarios', methods=['POST'])
def crear_usuario():
    try:
        print("inicio")

        usuario={
            'name': request.form ["name"],
            'lastName': request.form["lastName"],
            'password':request.form["password"],
            'email':request.form["email"],
            'gender':request.form["gender"],
            'city':request.form["city"],
            'country':request.form["country"],
            'role': request.form["role"],
            'urlImage':request.form["urlImage"],
            'listIdsCompletedExercises':request.form.getlist('listIdsCompletedExercises'),
            'pauseConsiderationList':request.form.getlist('pauseConsiderationList'),
            'contemplationConsiderationList':request.form.getlist('contemplationConsiderationList')

        }
        print("cree el usuario")
        dbResponse=db.usuarios.insert_one(usuario)
        print("entre")
        print(dbResponse.inserted_id)
        #for atributos in dir(dbResponse):
           # print(atributos)
        
        return Response(
            response=json.dumps({"message":"user created","id": "{}".format(dbResponse.inserted_id)}),
            status=200,
            mimetype="application/json"
        )
        
    except Exception as ex:
        print("***********")
        print(ex)
        print("***********")

##################################ACTUALIZARUSUARIO####################################################
@app.route('/usuarios/<id>',methods=["PATCH"])
def actualizar_usuario(id):
    try:
       
        dbResponse=db.usuarios.update(
            {"_id":ObjectId(id)},
            {"$set":{
                'name': request.form ["name"],
                'lastName': request.form["lastName"],
                'password':request.form["password"],
                'gender':request.form["gender"],
                'city':request.form["city"],
                'country':request.form["country"],
                'role': request.form["role"],
                'urlImage':request.form["urlImage"],
                'listIdsCompletedExercises.$.std':request.form.getlist('listIdsCompletedExercises'),
                'pauseConsiderationList.$.std':request.form.getlist('pauseConsiderationList'),
                'contemplationConsiderationList.$.std':request.form.getlist('contemplationConsiderationList')
            }
            })
        
        #for atributos in dir(dbResponse):
            #print("**********{}***********".format(atributos))
        if dbResponse.modified_count==1:

            return Response(
                response=json.dumps({"message":"user updated"}),
                status=200,
                mimetype="application/json"
            )
        else:
            return Response(
                response=json.dumps({"message":"nothing to update"}),
                status=200,
                mimetype="application/json"
            )


    except Exception as ex:
        print(ex)
        return Response(
            response=json.dumps({"message":"can not update the user"}),
            status=500,
            mimetype="application/json"
        )
##################################ELIMINAR USUSARIO###################################################
@app.route("/usuarios/<id>",methods=["DELETE"])
def eliminar_usuario(id):
    try:
        dbResponse=db.usuarios.delete_one({"_id":ObjectId(id)})
        for atributos in dir(dbResponse):
            print("******{}******".format(atributos))
        return Response(
            response=json.dumps({"message":"user deleted","id":f"{id}"}),
            status=200,
            mimetype="application/json"
        )
    
    except Exception as ex:
        print("************")
        print(ex)
        print("************")
        return Response(
            response=json.dumps({"message":"can not delete this user"}),
            status=500,
            mimetype="application/json"
        )
####################################Reflexiones############################################
@app.route('/reflexiones',methods=['POST'])
def crear_reflexion():
    try:
        reflexion={'titulo': request.form["titulo"],
        'descripcion':request.form["descripcion"],
        'dia':request.form["dia"],
        'url': request.form["url"]
        }
        dbResponse=db.reflexiones.insert_one(reflexion)
        print(dbResponse.inserted_id)
        return Response(
            response=json.dumps({"message":"reflection created","id": "{}".format(dbResponse.inserted_id)}),
            status=200,
            mimetype="application/json"
        )
        
    except Exception as ex:
        print("***********")
        print(ex)
        print("***********")

###########################OBTENERREFELXION######################################################
@app.route('/reflexiones',methods=['GET'])
def obtener_reflexion():
    try:
        datos=list(db.reflexiones.find())
        for reflexion in datos:
            reflexion["_id"]=str(reflexion["_id"])
        return Response(
            response=json.dumps(datos),
            status=500,
            mimetype="application/json"
        )
    except Exception as ex:
        print(ex)
        return Response(
            response=json.dumps({"message":"can not obtain reflection"}),
            status=500,
            mimetype="application/json"
        )
#######################################ACTUALIZARREFLEXION#####################################
@app.route('/reflexiones/<dia>',methods=['PATCH'])
def actulizar_reflexion(dia):
    try:
        dbResponse=db.reflexiones.update_one(
            {"dia":dia},
            {"$set":{"url":request.form["url"]}}
        )
        if dbResponse.modified_count==1:

            return Response(
                response=json.dumps({"message":"reflection updated"}),
                status=200,
                mimetype="application/json"
            )
        else:
            return Response(
                response=json.dumps({"message":"nothing to update"}),
                status=200,
                mimetype="application/json"
            )
    except Exception as ex:
        print(ex)
        return Response(
            response=json.dumps({"message":"can not update the reflection"}),
            status=500,
            mimetype="application/json"
        )
##########################################ELIMINARREFELXION########################################################
@app.route('/reflexiones/<dia>',methods=['Delete'])
def eliminar_reflexion(dia):
    try:
        dbResponse=db.reflexiones.delete_one({'dia': dia})
        return Response(
                response=json.dumps({"message":"reflection deleted","day":f"{dia}"}),
                status=200,
                mimetype="application/json"
        )
    except Exception as ex:
        print(ex)
        return Response(
            response=json.dumps({"message":"can not update the refelction"}),
            status=500,
            mimetype="application/json"
        )
###################################################CONTEMPLACIONES#################################################
@app.route('/contemplaciones',methods=['POST'])
def crear_contemplacion():
    try:
        contemplacion={'titulo': request.form["titulo"],
        'descripcion':request.form["descripcion"],
        'dia':request.form["dia"],
        'url': request.form["url"]
        }
        dbResponse=db.contemplaciones.insert_one(contemplacion)
        print(dbResponse.inserted_id)
        return Response(
            response=json.dumps({"message":"reflection created","id": "{}".format(dbResponse.inserted_id)}),
            status=200,
            mimetype="application/json"
        )
        
    except Exception as ex:
        print("***********")
        print(ex)
        print("***********")
#########################################OBTENER CONTEMPLACION#################################################
@app.route('/contemplaciones',methods=['GET'])
def obtener_contemplacion():
    try:
        datos=list(db.contemplaciones.find())
        for reflexion in datos:
            reflexion["_id"]=str(reflexion["_id"])
        return Response(
            response=json.dumps(datos),
            status=500,
            mimetype="application/json"
        )
    except Exception as ex:
        print(ex)
        return Response(
            response=json.dumps({"message":"can not obtain reflection"}),
            status=500,
            mimetype="application/json"
        )
#######################################ACTUALIZARCONTEMPLACION###############################################################
@app.route('/contemplaciones/<dia>',methods=['PATCH'])
def actulizar_contemplacion(dia):
    try:
        dbResponse=db.contemplaciones.update_one(
            {"dia":dia},
            {"$set":{"url":request.form["url"]}}
        )
        if dbResponse.modified_count==1:

            return Response(
                response=json.dumps({"message":"contemplation updated"}),
                status=200,
                mimetype="application/json"
            )
        else:
            return Response(
                response=json.dumps({"message":"nothing to contemplation"}),
                status=200,
                mimetype="application/json"
            )
    except Exception as ex:
        print(ex)
        return Response(
            response=json.dumps({"message":"can not update the contemplation"}),
            status=500,
            mimetype="application/json"
        )
###############################################ELIMINARCONTEMPLACION######################
@app.route('/contemplaciones/<dia>',methods=['Delete'])
def eliminar_contemplacion(dia):
    try:
        dbResponse=db.contemplaciones.delete_one({'dia': dia})
        return Response(
                response=json.dumps({"message":"contemplation deleted","day":f"{dia}"}),
                status=200,
                mimetype="application/json"
        )
    except Exception as ex:
        print(ex)
        return Response(
            response=json.dumps({"message":"can not update the contemplation"}),
            status=500,
            mimetype="application/json"
        )
####################################Ejercicios Espirirtuales#####################################################
@app.route('/SpiritualExercises', methods=['POST'])
def crear_ejercicio_espiritual():
    try:
        print("inicio")
        ejercicio_spiritual={
         'type': request.form["type"],
         'dayIndex':request.form["dayIndex"],
         'title':request.form["title"],
         'sentenceone': request.form["sentenceone"],
         'sentencetwo': request.form["sentencetwo"],
         'urlAudio':request.form["urlAudio"],
         'urlImage':request.form["urlImage"]
        }
        print("cree el usuario")
        dbResponse=db.spiritualexercises.insert_one(ejercicio_spiritual)
        print("entre")
        print(dbResponse.inserted_id)
        #for atributos in dir(dbResponse):
           # print(atributos)
        
        return Response(
            response=json.dumps({"message":"exercise created","id": "{}".format(dbResponse.inserted_id)}),
            status=200,
            mimetype="application/json"
        )
        
    except Exception as ex:
        print("***********")
        print(ex)
        print("***********")
######################################Obtener ejercicio espirirtual###########################################
@app.route('/SpiritualExercises',methods=['GET'])
def obtener_ejercicios():
    try:
        ejercicios=list(db.spiritualexercises.find())
        for ejercicio in ejercicios:
            ejercicio["_id"]=str(ejercicio["_id"])
        return Response(
            response=json.dumps(ejercicios),
            status=500,
            mimetype="application/json"
        )
    except Exception as ex:
        print(ex)
        return Response(
            response=json.dumps({"message":"can not obtain exercises"}),
            status=500,
            mimetype="application/json"
        )
###################################################Obetener ejerccio espiritual por id############################
@app.route('/SpiritualExercises/<id>',methods=['GET'])
def obtener_ejercicio_por_id(id):
    try:
        ejercicio=db.spiritualexercises.find_one({"_id":ObjectId(id)},{"_id":0})
        return Response(
            response=json.dumps(ejercicio),
            status=200,
            mimetype="application/json"
        )
    except Exception as ex:
        print(ex)
        return Response(
            response=json.dumps({"message":"can not obtain exercises"}),
            status=500,
            mimetype="application/json"
        )
##################################################Obtener ejercicio espiritual por type ################################
@app.route('/SpiritualExercises/type=<tipo>',methods=['GET'])
def obtener_ejercicio_por_tipo(tipo):
    try:
        ejercicios=list(db.spiritualexercises.find({"type":tipo},{"_id":0}))
        
        return Response(
            response=json.dumps(ejercicios),
            status=200,
            mimetype="application/json"
        )
    except Exception as ex:
        print(ex)
        return Response(
            response=json.dumps({"message":"can not obtain exercises"}),
            status=500,
            mimetype="application/json"
        )
############################################### Objetner ejercicios spirituales de usuario################
@app.route('/SpiritualExercises/userid=<tipo>',methods=['GET'])
def obtener_ejercicio_por_tipo(tipo):
    try:
        ejercicios=list(db.spiritualexercises.find({"type":tipo},{"_id":0}))
        
        return Response(
            response=json.dumps(ejercicios),
            status=200,
            mimetype="application/json"
        )
    except Exception as ex:
        print(ex)
        return Response(
            response=json.dumps({"message":"can not obtain exercises"}),
            status=500,
            mimetype="application/json"
        )
###################################### Actualizar ejercicio espiritual por id ##########################################
@app.route('/SpiritualExercises/<id>',methods=["PATCH"])
def actualizar_ejercicio_espiritual(id):
    try:
    
        dbResponse=db.spiritualexercises.update_one(
            {"_id":ObjectId(id)},
            {"$set":{"dayIndex":request.form["dayIndex"],
                "title":request.form["title"],
                "sentenceone":request.form["sentenceone"],
                "sentencetwo":request.form["sentencetwo"],
                "urlAudio":request.form["urlAudio"],
                "urlImage":request.form["urlImage"]}}
        )
        if dbResponse.modified_count==1:
            return Response(
                response=json.dumps({"message":"exercise updated"}),
                status=200,
                mimetype="application/json")
        else:
            return Response(
                response=json.dumps({"message":"nothing to contemplation"}),
                status=200,
                mimetype="application/json"
            )

    except Exception as ex:
        print(ex)
        return Response(
            response=json.dumps({"message":"can not update the exercise"}),
            status=500,
            mimetype="application/json")
############################################Eliminar ejercicio por id##################################
@app.route("/SpiritualExercises/<id>",methods=["DELETE"])
def eliminar_ejercicio_espirirtual(id):
    try:
        dbResponse=db.spiritualexercises.delete_one({"_id":ObjectId(id)})
        for atributos in dir(dbResponse):
            print("******{}******".format(atributos))
        return Response(
            response=json.dumps({"message":"exercise deleted","id":f"{id}"}),
            status=200,
            mimetype="application/json"
        )
    
    except Exception as ex:
        print("************")
        print(ex)
        print("************")
        return Response(
            response=json.dumps({"message":"can not delete this exercise"}),
            status=500,
            mimetype="application/json"
        )
################################ ContemplationConsideration######################################
@app.route('/ContemplationConsideration', methods=['POST'])
def crear_contemplation():
    try:
        print("inicio")
        contemplacion={
         'title':request.form["title"],
         'dayIndex': request.form["dayIndex"],
         'type': request.form["type"],
         'creationDate':request.form["creationDate"],
         'urlConsiderationAudio':request.form["urlConsiderationAudio"],
         'considerationText':request.form["considerationText"],
         'idUser':request.form["idUser"]
        }
        print("cree el usuario")
        dbResponse=db.ContemplationConsideration.insert_one(contemplacion)
        print("entre")
        print(dbResponse.inserted_id)
        #for atributos in dir(dbResponse):
           # print(atributos)
        
        return Response(
            response=json.dumps({"message":"contemplation created","id": "{}".format(dbResponse.inserted_id)}),
            status=200,
            mimetype="application/json"
        )
        
    except Exception as ex:
        print("***********")
        print(ex)
        print("***********")
#########################################################Consultar Contemplation####################################################
@app.route('/ContemplationConsideration',methods=['GET'])
def obtener_contemplations():
    try:
        contemplations=list(db.ContemplationConsideration.find())
        for contemplacion in contemplations:
            contemplacion["_id"]=str(contemplacion["_id"])
        return Response(
            response=json.dumps(contemplations),
            status=500,
            mimetype="application/json"
        )
    except Exception as ex:
        print(ex)
        return Response(
            response=json.dumps({"message":"can not obtain contemplations"}),
            status=500,
            mimetype="application/json"
        )
####################################### Update contemplations by id#########################################
@app.route('/ContemplationConsideration/<id>',methods=["PATCH"])
def actualizar_Contemplation(id):
    try:
    
        dbResponse=db.ContemplationConsideration.update_one(
            {"_id":ObjectId(id)},
            {"$set":{'title':request.form["title"],'dayIndex': request.form["dayIndex"],'type': request.form["type"],
                     'creationDate':request.form["creationDate"],'urlConsiderationAudio':request.form["urlConsiderationAudio"],
                     'considerationText':request.form["considerationText"],
                     'idUser':request.form["idUser"]}
            }
        )
        if dbResponse.modified_count==1:
            return Response(
                response=json.dumps({"message":"exercise updated"}),
                status=200,
                mimetype="application/json")
        else:
            return Response(
                response=json.dumps({"message":"nothing to contemplation"}),
                status=200,
                mimetype="application/json"
            )

    except Exception as ex:
        print(ex)
        return Response(
            response=json.dumps({"message":"can not update the exercise"}),
            status=500,
            mimetype="application/json")
###################################### Eliminar Cotnemplations#######################################
@app.route('/ContemplationConsideration/<id>',methods=["DELETE"])
def eliminar_contemplation(id):
    try:
        dbResponse=db.ContemplationConsideration.delete_one({'_id':id})
        return Response(
                response=json.dumps({"message":"contemplation deleted","id":f"{id}"}),
                status=200,
                mimetype="application/json"
        )
    except Exception as ex:
        print(ex)
        return Response(
            response=json.dumps({"message":"can not delete the contemplation"}),
            status=500,
            mimetype="application/json"
        )





if __name__=="__main__":
    app.run(port=80,debug=True)