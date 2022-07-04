const carroService = require('../services/carroService')

module.exports = {
    buscarTodos: async (req, res) => {
        let json = {error: '', result:[]}

        let carros = await carroService.buscarTodos();

        for(let i in carros){
            json.result.push({
                codigo: carros[i].codigo,
                descricao: carros[i].modelo,
                place: carros[i].place
            })
            res.json(json)
        }
    },

    buscarUm: async (req, res) => {
        let json = {error:'', result:{}}

        let codigo = req.params.codigo;
        let carro = await carroService.buscarUm(codigo);

        if(carro){
            json.result = carro;
        }
            res.json(json)
        
    },
    inserir: async (req, res) => {
        let json = {error:'', result:{}}

        let modelo = req.body.modelo;
        let place = req.body.place;
        
        if(modelo && place){
            let carroCodigo = await carroService.inserir(modelo, place);
            json.result = {
                codigo: carroCodigo,
                modelo,
                place
            };
        } else {
            json.error = 'Campos não enviados';
        }
        res.json(json)
    },

    alterar: async (req, res) => {
        let json = {error: '', result:{}}

        let codigo = req.params.codigo
        let modelo = req.body.modelo
        let place = req.body.place

        if(codigo && modelo && place){
            await carroService.alterar(codigo, modelo, place)
            json.result = {
                codigo,
                modelo,
                place
            }
        } else {
            json.error = 'Campos não enviados'
        }

        res.json(json)
        
    },

    excluir: async (req, res) => {
        let json = {error: '', result:{}}
    
        await carroService.excluir(req.params.codigo)

        res.json(json)

    }
        
}