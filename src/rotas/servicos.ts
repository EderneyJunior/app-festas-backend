import { Router } from "express"
import servicosControlador from '../controladores/servicosControlador'

const rotas = Router()


rotas.post('/servicos', servicosControlador.criar)
rotas.get('/servicos', servicosControlador.listarServicos)
rotas.get('/servicos/:id', servicosControlador.buscarPorId)
rotas.delete('/servicos/:id', servicosControlador.deletarServicos)
rotas.put('/servicos/:id', servicosControlador.atualizarServicos)

export default rotas