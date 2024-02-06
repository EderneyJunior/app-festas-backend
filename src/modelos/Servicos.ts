import mongoose from 'mongoose'

const { Schema } = mongoose

export const servicoSchema = new Schema({
        nome: {
            type: String,
            require: true
        },
        descricao: {
            type: String,
            require: true
        },
        preco: {
            type: Number,
            require: true
        },
        imagem: {
            type: String,
            require: true
        }
    },
    {timestamps: true}
)

export const Servico = mongoose.model("Service", servicoSchema)