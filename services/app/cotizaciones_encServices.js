const database = require("../../configuration/database");

var methods = {

    obtenerCotizaciones_enc: function(request,response){
        const queryString = "SELECT * FROM cotizaciones_enc";
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

    obtenerCotizaciones_encPorId: function(request,response){
        const idcotizacion = request.params.idcotizacion;
        const queryString = "SELECT * FROM cotizaciones_enc WHERE idcotizacion =?"
        database.query(queryString, [idcotizacion], (error, rows, fields)=>{
         if(error){
            response.send("Error: " + error)
            response.sendStatus(500)
            response.end()
            return
         }
         response.json(rows)
        })
    },

    agregarCotizaciones_enc: function(request, response){
      
      const cotizacion_referencia = request.body.cotizacion_referencia;
      const cotizacion_idcliente = request.body.cotizacion_idcliente;
      const cotizacion_fecha = request.body.cotizacion_fecha;
      const cotizacion_vencimiento = request.body.cotizacion_fecha_entrega;
      const cotizacion_diastransito= request.body.cotizacion_diastransito;
      const cotizacion_fecha_entrega= request.body.cotizacion_fecha_entrega;
      const cotizacion_semana= request.body.cotizacion_semana;
      const cotizacion_dia= request.body.cotizacion_dia;
      const cotizacion_idperfil= request.body.cotizacion_idperfil;
      const cotizacion_idasesor= request.body.cotizacion_idasesor;
      const cotizacion_idusuario= request.body.cotizacion_idusuario;
      const cotizacion_idestado= request.body.cotizacion_idestado;
      const cotizacion_idincoterms= request.body.cotizacion_idincoterms;
      const cotizacion_idesc= request.body.cotizacion_idesc;
      const cotizacion_idcontacto= request.body.cotizacion_idcontacto;

      const queryString = 
      "INSERT INTO cotizaciones_enc (cotizacion_referencia, cotizacion_idcliente, cotizacion_fecha, cotizacion_vencimiento, cotizacion_diastransito, cotizacion_fecha_entrega, cotizacion_semana,cotizacion_dia, cotizacion_idperfil, cotizacion_idasesor,  cotizacion_idusuario, cotizacion_idestado, cotizacion_idincoterms, cotizacion_idesc, cotizacion_idcontacto   ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) ";
      database.query(queryString, 
        [cotizacion_referencia, cotizacion_idcliente, cotizacion_fecha, cotizacion_vencimiento, cotizacion_diastransito,cotizacion_fecha_entrega,
         cotizacion_semana, cotizacion_dia, cotizacion_idperfil, cotizacion_idasesor, cotizacion_idusuario, cotizacion_idestado, cotizacion_idincoterms, cotizacion_idesc, cotizacion_idcontacto
         ], (error, results, fields) =>{
          if(error){
            response.send("Error: " + error)
            response.sendStatus(500)
            response.end()
            return
          }
          response.json('cotizaciones_enc agregado exitosamente.');
          response.end()
      })
    },

    eliminarCotizaciones_enc: function(request, response){
    const idcotizacion = request.params.idcotizacion;
    const queryString = "DELETE FROM cotizaciones_enc WHERE idcotizacion = ?";
    database.query(queryString, [idcotizacion], (error, rows, fields)=>{
        if(error){
            response.send("Error: "+ error);
            response.sendStatus(500)
            response.end()
            return
        }
        response.json("cotizaciones_enc eliminado correctamente.")
    })
    },


}

module.exports= methods;
