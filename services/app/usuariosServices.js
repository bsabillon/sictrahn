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

    obtenerUsuarioPorLogin: function(request,response){
        const usuario_login = request.params.usuario_login;
        const queryString = "SELECT * FROM usuarios WHERE usuario_login =?"
        database.query(queryString, [usuario_login], (error, rows, fields)=>{
         if(error){
            response.send("Error: " + error)
            response.sendStatus(500)
            response.end()
            return
         }
         response.json(rows)
        })
    },

    agregarUsuarios: function(request, response){
      
      const usuario_login = request.body.usuario_login;
      const usuario_clave = request.body.usuario_clave;
      const usuario_nombre = request.body.usuario_nombre;
      const usuario_estado = request.body.usuario_estado;
     
      const queryString = "INSERT INTO usuarios ( usuario_login, usuario_clave, usuario_nombre, usuario_estado) VALUES (?,?,?,?) ";
      
      database.query(queryString, [usuario_login, usuario_clave, usuario_nombre, usuario_estado], (error, results, fields) =>{
          if(error){
            response.send("Error: " + error)
            response.sendStatus(500)
            response.end()
            return
          }
          response.json('Usuario agregado exitosamente.');
          response.end()
      })
    },

    eliminarUsuarios: function(request, response){
    const idusuario = request.params.idusuario;
    const queryString = "DELETE FROM usuarios WHERE idusuario = ?";
    database.query(queryString, [idusuario], (error, rows, fields)=>{
        if(error){
            response.send("Error: "+ error);
            response.sendStatus(500)
            response.end()
            return
        }
        response.json("Usuario eliminado correctamente.")
    })
    },

    tologin: function(request, response){
        const usuario_login= request.params.usuario_login;
        const usuario_clave= request.params.usuario_clave;

        const queryString = "SELECT * FROM usuarios WHERE usuario_login = ? AND usuario_clave=? ";
        database.query(queryString, [usuario_login, usuario_clave], (error, rows, fields)=>{
            if(error){
                response.send("Error: "+ error );
                response.sendStatus(500)
                response.end()      
            }
            response.json(rows)
        })
    }

}

module.exports= methods;