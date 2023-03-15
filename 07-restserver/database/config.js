const mongoose = require("mongoose");

const dbConection = async ()=>{

  try {

    await mongoose.connect(process.env.MONGODB);

    console.log("base de datos conectada correctamente");
    
  } catch (error) {
    console.log(  error);
    throw new Error("Error al conectarse a base de datos");

};
};

module.exports = {

  dbConection,

};