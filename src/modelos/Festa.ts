import mongoose from 'mongoose'
const { Schema } = mongoose
import { servicoSchema } from './Servicos'

const festaSchema = new Schema({
    titulo: {
        type: String,
        require: true
    },
    autor: {
        type: String,
        require: true
    },
    descricao: {
        type: String,
        require: true
    },
    orcamento: {
        type: Number,
        require: true
    },
    imagem: {
        type: String,
        require: true
    },
    servicos: {
        type: [servicoSchema],
        require: true
    }
}, {timestamps: true})

const festa = mongoose.model('Festa', festaSchema)

export default festa
