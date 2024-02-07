import { Request, Response } from 'express'
import { Servico } from '../modelos/Servicos'

const servicoControlador = {
    criar: async (req: Request, res: Response) => {
        try {
            const servico = {
                nome: req.body.nome,
                descricao: req.body.descricao,
                preco: req.body.preco,
                imagem: req.body.imagem
            }

            const resposta = await Servico.create(servico)

            return res.status(201).json(resposta)
        } catch (error) {
            return res.status(500).json({menssagem: 'Erro interno no servior!'})
        }
    },
    listarServicos: async (req: Request, res: Response) => {
        try {
            const servicos = await Servico.find()

            return res.json(servicos)
        } catch (error) {
            return res.status(500).json({menssagem: 'Erro interno no servior!'})
        }
    },
    buscarPorId: async (req: Request, res: Response) => {
        try {
            const { id } = req.params

            const servicoBuscado = await Servico.findById(id)

            if(!servicoBuscado) {
                return res.status(404).json({menssagem: 'Serviço não encontrado'})
            }

            return res.json(servicoBuscado)
        } catch (error) {
            return res.status(500).json({menssagem: 'Erro interno no servior!'})
        }
    },
    deletarServicos: async (req: Request, res: Response) => {
        try {
            const { id } = req.params
            const servicoBuscado = await Servico.findById(id)

            if(!servicoBuscado) {
                return res.status(404).json({menssagem: 'Serviço não encontrado'})
            }

            const servicoDeletado = await Servico.findByIdAndDelete(id)

            return res.json(servicoDeletado)
        } catch (error) {
            return res.status(500).json({menssagem: 'Erro interno no servior!'})
        }
    },
    atualizarServicos: async (req: Request, res: Response) => {
        try {
            const { id } = req.params

            const servico = {
                nome: req.body.nome,
                descricao: req.body.descricao,
                preco: req.body.preco,
                imagem: req.body.imagem
            }

            const servicoAtualizado = await Servico.findByIdAndUpdate(id, servico)

            if(!servicoAtualizado) {
                return res.status(404).json({menssagem: 'Serviço não encontrado'})
            }

            return res.json(servicoAtualizado)
        } catch (error) {
            return res.status(500).json({menssagem: 'Erro interno no servior!'})
        }
    }
}

export default servicoControlador