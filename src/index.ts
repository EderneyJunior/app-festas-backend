import express from 'express'
import cors from 'cors'
import conexao from './db/conexao'

const app = express()

app.use(cors())

app.use(express.json())

//DB conexão
conexao()

app.listen(3000, () => console.log('Servidor rodando na porta 3000'))