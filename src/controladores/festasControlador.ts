import { Request, Response } from 'express'
import modeloFestas from '../modelos/Festa'

type SchemaServico = {
    nome: string,
    descricao: string,
    preco: number,
    imagem: string
}

const checarFesta = (orcamento: number, servicos: SchemaServico[]) => {
    const soma = servicos.reduce((sum, servico) => sum + servico.preco, 0)

    if(soma > orcamento) {
        return true
    }
    return false
}

const festasControlador = {
    criarFesta: async (req: Request, res: Response) => {
        try {
            const festa = {
                titulo: req.body.titulo,
                autor: req.body.autor,
                descricao: req.body.descricao,
                orcamento: req.body.orcamento,
                imagem: req.body.imagem,
                servicos: req.body.servicos
            }

            if((festa.servicos) && checarFesta(festa.orcamento, festa.servicos)) {
                return res.status(406).json({menssagem: 'Orçamento insuficiente!'})
            }

            const festaCriada = await modeloFestas.create(festa)

            return res.status(201).json(festaCriada)
        } catch (error) {
            return res.status(500).json({menssagem: 'Erro interno no servior!'})
        }
    },
    listarFestas: async (req: Request, res: Response) => {
        try {
            const festas = await modeloFestas.find()

            return res.json(festas)
        } catch (error) {
            return res.status(500).json({menssagem: 'Erro interno no servior!'})
        }
    },
    buscarFestaPorId: async (req: Request, res: Response) => {
        try {
            const { id } = req.params

            const festa = await modeloFestas.findById(id)

            if(!festa) {
                return res.status(404).json({menssagem: 'Festanão encontrada'})
            }

            return res.json(festa)
        } catch (error) {
            return res.status(500).json({menssagem: 'Erro interno no servior!'})
        }
    },
    deletarFesta: async (req: Request, res: Response) => {
        try {
            const { id } = req.params

            const festa = await modeloFestas.findById(id)

            if(!festa) {
                return res.status(404).json({menssagem: 'Festanão encontrada'})
            }

            const festaDeletada = await modeloFestas.findByIdAndDelete(id)

            return res.json(festaDeletada)
        } catch (error) {
            return res.status(500).json({menssagem: 'Erro interno no servior!'})
        }
    },
    atualizarFesta: async (req: Request, res: Response) => {
        try {
            const { id } = req.params

            const festa = await modeloFestas.findById(id)

            if(!festa) {
                return res.status(404).json({menssagem: 'Festanão encontrada'})
            }

            const festaPraAtualizar = {
                titulo: req.body.titulo,
                autor: req.body.autor,
                descricao: req.body.descricao,
                orcamento: req.body.orcamento,
                imagem: req.body.imagem,
                servicos: req.body.servicos
            }

            if (festaPraAtualizar.servicos && checarFesta(festaPraAtualizar.orcamento, festaPraAtualizar.servicos)) {
                return res.status(406).json('Orçamento insuficiente!')
            }

            const festaAtualizada = await modeloFestas.findByIdAndUpdate(id, festaPraAtualizar)

            return res.json(festaAtualizada)
        } catch (error) {
            return res.status(500).json({menssagem: 'Erro interno no servior!'})
        }
    }
}

export default festasControlador