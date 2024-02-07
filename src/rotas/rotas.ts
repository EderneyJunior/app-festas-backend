import { Router } from "express"
import rotasServico from './servicos'
import rotasFestas from './festas'

const rotas = Router()

rotas.use(rotasServico)
rotas.use(rotasFestas)

export default rotas
