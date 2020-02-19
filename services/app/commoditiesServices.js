const database = require("../../configuration/database");

var methods = {
    obtenerCommodities: function(request,response){
        const queryString = "SELECT * FROM commodity"
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

    obtenerCommodityPorId: function(request,response){
        const idcommodity = request.params.idcommodity;
        const queryString = "SELECT * FROM commodity WHERE idcommodity =?"
        database.query(queryString, [idcommodity], (error, rows, fields)=>{
         if(error){
            response.send("Error: " + error)
            response.sendStatus(500)
            response.end()
            return
         }
         response.json(rows)
        })
    },

    agregarCommodity: function(request, response){
      
      const commodity_name = request.body.commodity_name;
      const commodity_idcommoditytipo = request.body.commodity_idcommoditytipo;
      const commodity_contenedor_pref = request.body.commodity_contenedor_pref;
      const commodity_iddoctype = request.body.commodity_iddoctype;
     
      const queryString = "INSERT INTO commodity ( commodity_name, commodity_idcommoditytipo, commodity_contenedor_pref, commodity_iddoctype) VALUES (?,?,?,?) ";
      
      database.query(queryString, [commodity_name, commodity_idcommoditytipo, commodity_contenedor_pref, commodity_iddoctype], (error, results, fields) =>{
          if(error){
            response.send("Error: " + error)
            response.sendStatus(500)
            response.end()
            return
          }
          response.json('Commodity agregado exitosamente.');
          response.end()
      })
    },

    eliminarCommodity: function(request, response){
    const idcommodity = request.params.idcommodity;
    const queryString = "DELETE FROM commodity WHERE idcommodity = ?";
    database.query(queryString, [idcommodity], (error, rows, fields)=>{
        if(error){
            response.send("Error: "+ error);
            response.sendStatus(500)
            response.end()
            return
        }
        response.json("commodity eliminado correctamente.")
    })
    },


}

module.exports= methods;