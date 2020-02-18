const database = require("../../configuration/database");

var methods = {

    obtenerUsuarios: function(request,response){
        const queryString = "SELECT * FROM usuarios"
        database.query(queryString, (error, rows, fields)=>{
         if(error){
            response.send("Error: " + error)
            response.sendStatus(500)
            response.end()
            return
         }
         response.json(rows)
        })
    },
    /*
    Usuarios.findAll()
    .then(usuarios=>{
        response.json(usuarios);
    })
    .catch((error)=>{
        response.send("Error: "+ error)
    })

    obtenerUsuarioPorLogin: function(request,response){
        Usuarios.findAll({
            where: {
                usuario_login: request.params.usuario_login
              } 
        })
        .then(usuarios=>{
            response.json(usuarios);
        })
        .catch((error)=>{
            response.send("Error: "+ error)
        })
    },

    agregarUsuarios: function(request, response){
        Usuarios.create(
            request.body
        )
        .then(usuario=>{
            response
            .status(200)
            .send('Usuario agregado correctamente');
        })
        .catch(error=>
            response.send("Error: "+ error))
    },


    tologin: function(request, response){
        Usuarios.findOne({
            where: {
                [Op.and]:[
                    {usuario_login: request.params.usuario_login},
                    {usuario_clave: request.params.usuario_clave}
                ]
              } 
        })
        .then(
            usuarios=>{
                if(usuarios==null){
                    response.send("Usuario o contrasena invalido")
                }
                else{
                response.json(usuarios);
                }

        })
        .catch((error)=>{
            response.send("Error: "+ error)
        })
    },


    */
}

module.exports= methods;