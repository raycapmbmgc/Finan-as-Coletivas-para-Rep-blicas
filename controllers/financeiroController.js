const Financeiro = require('../models/Financeiro');

exports.entrada = async (req, res) => {
    const grupoId = req.params.id;
    const { valor, responsavel } = req.body;

    await Financeiro.entrada(grupoId, valor, responsavel);

    res.redirect('/metas/' + grupoId);
};

exports.saida = async (req, res) => {
    const grupoId = req.params.id;
    const { valor, responsavel } = req.body;

    await Financeiro.saida(grupoId, valor, responsavel);

    res.redirect('/metas/' + grupoId);
};