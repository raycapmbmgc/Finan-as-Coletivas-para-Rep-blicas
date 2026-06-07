const Despesa = require('../models/Despesa');
const Grupo = require('../models/Grupo');
const Usuario = require('../models/Usuario');

exports.index = async (req, res) => {

    const despesas = await Despesa.listar();
    const grupos = await Grupo.listar();
    const usuarios = await Usuario.listar();

    res.render('despesas', {
        despesas,
        grupos,
        usuarios
    });
};

exports.nova = (req, res) => {
    res.render('despesa-form');
};

exports.criar = async (req, res) => {

    try {

        console.log("=== NOVA DESPESA ===");
        console.log(req.body);

        const {
            descricao,
            valor,
            categoria,
            usuario_pagador,
            grupo_id
        } = req.body;

        await Despesa.criar(
            descricao,
            valor,
            categoria,
            usuario_pagador,
            grupo_id
        );

        res.redirect('/despesas');

    } catch (error) {

        console.error("ERRO AO SALVAR DESPESA:");
        console.error(error);

        res.status(500).send(error.message);
    }
};

exports.excluir = async (req, res) => {

    try {

        await Despesa.excluir(req.params.id);

        res.redirect('/despesas');

    } catch (error) {

        console.error(error);

        res.status(500).send('Erro ao excluir despesa');
    }
};