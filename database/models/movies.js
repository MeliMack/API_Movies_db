module.exports= function(sequelize,dataTypes){
   let alias="movies";
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

        rating:{
            type:dataTypes.DECIMAL(3.1),
            allowNull:false
        },

        awards:{
            type:dataTypes.INTEGER(10),
            allowNull:false
        },

        release_date:{
            type:dataTypes.DATE,
            allowNull:false
        },

        length:{
           type:dataTypes.INTEGER(10).UNSIGNED,
        }
    }

    let config={
        tableName:"movies",
        timestamp:true,
        underscored:true
    };

    let movies= sequelize.define(alias,columns,config);
    return movies;
}     