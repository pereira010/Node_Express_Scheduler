const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
    Defines formatting for each event, defines collection name for events
*/

//Create User schema
const Event = new Schema(
    {
        nome: {type: String, required: false},
        descricao: {type: String, required: false},
        hora_evento: {type: String, required: false},
        id_endereco: {type: String, required: false},
        id_user: {type: String, required: false}
    },
    {timestamps: true},
    {collection: 'events'} //Put user data in users collection
);

module.exports = mongoose.model('events', Event);  //Define user model - using User schema

