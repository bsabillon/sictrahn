const database = require("../../configuration/database");

var methods = {

    obtenerPuertos: function(request,response){
        const queryString = "SELECT * FROM puertos"
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

    obtenerPuertoPorId: function(request,response){
        const idpuerto = request.params.idpuerto;
        const queryString = "SELECT * FROM puertos WHERE idpuerto =?"
        database.query(queryString, [idpuerto], (error, rows, fields)=>{
         if(error){
            response.send("Error: " + error)
            response.sendStatus(500)
            response.end()
            return
         }
         response.json(rows)
        })
    },

    agregarPuerto: function(request, response){
      
      const puerto_name = request.body.puerto_name;
      const puerto_observa = request.body.puerto_observa;
      const puerto_tipo = request.body.puerto_tipo;
      const puerto_idmunicipio = request.body.puerto_idmunicipio;
      const puerto_iddoctype= request.body.puerto_iddoctype;
     
      const queryString = "INSERT INTO puertos ( puerto_name, puerto_observa, puerto_tipo, puerto_idmunicipio, puerto_iddoctype) VALUES (?,?,?,?,?) ";
      
      database.query(queryString, [puerto_name, puerto_observa, puerto_tipo, puerto_idmunicipio, puerto_iddoctype], (error, results, fields) =>{
          if(error){
            response.send("Error: " + error)
            response.sendStatus(500)
            response.end()
            return
          }
          response.json('Puerto agregado exitosamente.');
          response.end()
      })
    },

    eliminarPuerto: function(request, response){
    const idpuerto = request.params.idpuerto;
    const queryString = "DELETE FROM puertos WHERE idpuerto = ?";
    database.query(queryString, [idpuerto], (error, rows, fields)=>{
        if(error){
            response.send("Error: "+ error);
            response.sendStatus(500)
            response.end()
            return
        }
        response.json("Puerto eliminado correctamente.")
    })
    },


}

module.exports= methods;