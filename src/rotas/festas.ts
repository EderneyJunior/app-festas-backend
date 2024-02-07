import { Router } from "express"
import festasControlador from '../controladores/festasControlador'

const rotas = Router()

rotas.post('/festas', festasControlador.criarFesta)
rotas.get('/festas', festasControlador.listarFestas)
rotas.get('/festas/:id', festasControlador.buscarFestaPorId)
rotas.delete('/festas/:id', festasControlador.deletarFesta)
rotas.put('/festas/:id', festasControlador.atualizarFesta)

export default rotas