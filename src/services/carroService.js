const db = require('../services/db')
module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, reijetado) => {
            db.query('SELECT * FROM carros',
                (error, results) => {
                    if (error) {
                        reijetado(error);
                        return;
                    } else {
                        aceito(results);
                    }
                })
        })
    },

    buscarUm: (codigo) => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM carros WHERE codigo = ?', [codigo],
                (error, results) => {
                    if (error) {
                        rejeitado(error); return;
                    } if (results.length > 0) {
                        aceito(results[0])
                    } else {
                        aceito(false)
                    }
                })
        })
    },

    inserir: (modelo, place) => {
        return new Promise((aceito, rejeitado) => {
            db.query('INSERT INTO carros (modelo, place) VALUES (?,?)', [modelo, place],
                (error, results) => {
                    if (error) {
                        rejeitado(error); return;
                    }
                    aceito(results.insertCodigo)
                })
        })
    },

    alterar: (codigo, modelo, place) => {
        return new Promise((aceito, rejeitado) => {
            db.query('UPDATE carros SET modelo = ?, place = ? WHERE codigo = ?', [modelo, place, codigo],
                (error, results) => {
                    if (error) { rejeitado(error); return; }
                    aceito(results)
                })
        })
    },

    excluir: (codigo) => {
        return new Promise((aceito, rejeitado) => {
            db.query('DELETE FROM carros WHERE codigo = ?', [codigo],
                (error, results) => {
                    if (error) { rejeitado(error); return; }
                    aceito(results);
                })
        })
    }

}