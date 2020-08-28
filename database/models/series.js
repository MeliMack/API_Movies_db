module.exports= function(sequelize,dataTypes){
    let alias="series";
    let columns={
        id:{
            type:dataTypes.INTEGER(10).UNSIGNED,
            primaryKey:true,
            autoIncrement: true
       },
 
       title:{
           type:dataTypes.STRING(500),
           allowNull:false
         },
 
        release_date:{
             type:dataTypes.DATE,
             allowNull:false
         },
 
         end_date:{
            type:dataTypes.DATE,
            allowNull:false
        },

         genre_id:{
            type:dataTypes.INTEGER(10),
            allowNull:false
         }
     }
 
     let config={
         tableName:"series",
         timestamp:true,
         underscored:true
     };
 
     let series= sequelize.define(alias,columns,config);
     return series;
 }     