
const Consulta = require('../models/consultaM');



class ConsultaControllers{
    async findAll(){
    try {
        return await Consulta.find().lean();
    } catch (error) {
        throw error;
    }
}

    async create(consulta){
        try{
            return await Consulta.create(consulta)
        } catch (error){
            throw error;
        }
    }

    async delete (id){
        try{
            await Consulta.findByIdAndDelete(id)
        } catch(error){
            throw error;
        }
    }
}


module.exports= new ConsultaControllers;



