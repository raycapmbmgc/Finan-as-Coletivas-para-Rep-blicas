const Despesa = require('../models/Despesa');

exports.index = async (req, res) => {

    const despesas = await Despesa.listar();

    res.render('despesas', {
        despesas
    });
};

exports.nova = (req, res) => {
    res.render('despesa-form');
};

exports.criar = async (req, res) => {

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
};

exports.excluir = async (req, res) => {

    await Despesa.excluir(req.params.id);

    res.redirect('/despesas');
};