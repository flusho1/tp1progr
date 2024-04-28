const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
    {
        Nombre_Jug: {
            type: String
        },
        Posicion_Jug: {
            type: String
        },
        Equipo_Jug: {
            type: String
        },
        Edad_Jug: {
            type: Number
        },
        Nacionalidad_Jug: {
            type: String
        },
        NumCamiseta_Jug: {
            type: Number
        },
        Altura_Jug: {
            type: mongoose.Schema.Types.Mixed,
            required: true
        },
        Peso_Jug: {
            type: mongoose.Schema.Types.Mixed,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);
const ModelUser = mongoose.model("users", userSchema);
module.exports = ModelUser;