import express from 'express'
import cors from 'cors'
import conexao from './db/conexao'
import rotas from './rotas/rotas'

const app = express()

app.use(cors())

app.use(express.json())

//DB conexão
conexao()

app.use(rotas)

app.listen(3000, () => console.log('Servidor rodando na porta 3000'))