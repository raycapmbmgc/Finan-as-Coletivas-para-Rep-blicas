const Meta = require('../models/Meta');

exports.index = async (req, res) => {

    const metas = await Meta.listar();

    res.render('metas', {
        metas
    });
};

exports.nova = (req, res) => {
    res.render('meta-form');
};

exports.criar = async (req, res) => {

    const {
        nome,
        valor_objetivo
    } = req.body;

    await Meta.criar(
        nome,
        valor_objetivo
    );

    res.redirect('/metas');
};

exports.excluir = async (req, res) => {

    await Meta.excluir(req.params.id);
    res.redirect('/metas');
};