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

###############################CREARUSUSARIO####################################################

@app.route('/usuarios', methods=['POST'])
def crear_usuario():
    try:
        print("inicio")
        usuario={'name': request.form["name"]
        ,'lastname':request.form["lastname"],
        'mail':request.form["mail"],
        'photo': request.form["photo"]
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
        dbResponse=db.usuarios.update_one(
            {"_id":ObjectId(id)},
            {"$set":{"name":request.form["name"]}}
        )
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




if __name__=="__main__":
    app.run(port=80,debug=True)
