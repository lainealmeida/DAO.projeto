require('dotenv').config();
let db = require("../db");
let escola = require("./model/escolas");
let administracao = require("./model/administracao");
let ambientacao = require("./model/ambientacao");
let aluno= require("./model/aluno");


async function sincronizar() {
    await db.sync({force:true});
}

sincronizar();

var DAO = {
    //CREATE
    inserir: {
        administracao: async function(id, atual_administracao){
            await Administracao.create({atual_administracao: atual_administracao});
        },
        escola: async function(id, localizacao, historia_da_escola){
            await Escola.create({localizacao: localizacao, historia_da_escola: historia_da_escola});
        },
        ambientacao: async function(id, imagens, propostas){
            await Ambientacao.create({imagens: imagens, propostas : propostas});
        },
        aluno: async function(id, acesso){
            await Aluno.create({acesso: acesso});
      
        }
    },

    //READ

    consultar: async function(Administracao){
        let tabelas = await Administracao.findAll();
        console.log(tabelas);
    },

    //UPDATE

    atualizar: {
        administracao: async function(c){
            let administracao = await Administracao.findOne({
                where: {id: id}
            });
            administracao.update({atual_administracao: atual_administracao});
        },
        escola: async function(id, localizacao, historia_da_escola){
            let escola = await Escola.findOne({
                where: {id: id}
            });
            escola.update({localizacao: localizacao});
        },
        aluno: async function(id, acesso){
            let aluno = await Aluno.findOne({
                where: {id: id}
            });
            aluno.update({acesso: acesso});
        }
    },

    //DELETE

    deletar: async function(id, atual_administracao){
        let administracao = await Administracao.findOne({
            where: {id: id}
        });
        tupla.destroy();
    }
}

try{
    DAO.inserir.administracao(id, atual_administracao);
    /*DAO.inserir.administracao(atual_administracao);
    DAO.inserir.escola(id, localizacao);
    DAO.inserir.aluno(acesso)
    DAO.inserir.ambientacao(id);*/
}catch(error){
    throw new Error('Objeto não criado!')
}

try{
    DAO.consultar(Administracao);
}catch(error){
    throw new Error('Objeto não encontrado!')
}

try{
    DAO.atualizar.administracao(id, atual_administracao);
    /*DAO.atualizar.escola(id, localizacao);
    DAO.atualizar.aluno(acesso);*/
}catch(error){
    throw new Error('Objeto não atualizado!')
}

try{
    DAO.deletar(id, atual_administracao);
}catch(error){
    throw new Error('Objeto não deletado!')
}
