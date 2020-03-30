const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index (request, response){
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response) {
        const {name, email, whatsapp, city, uf } = request.body;

        // gera um id com 4 nº aleatórios e transforma em uma string hexadecimal
        const id = crypto.randomBytes(4).toString('HEX');
    
        //await aguarda o código terminar pra depois continuar
        await connection('ongs').insert({ //aqui passa todas as colunas que quer inserir
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
    
        return response.json({id});
    }
};