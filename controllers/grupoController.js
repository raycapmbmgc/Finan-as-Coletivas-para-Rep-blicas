const Grupo = require('../models/Grupo');

exports.index = async (req, res) => {

    const grupos = await Grupo.listar();

    res.render('grupos', {
        grupos
    });
};

exports.novo = (req, res) => {
    res.render('grupo-form');
};

exports.criar = async (req, res) => {
    
    const { nome } = req.body;
    await Grupo.criar(nome);
    res.redirect('/grupos');
};

exports.excluir = async (req, res) => {
    await Grupo.excluir(req.params.id);
    res.redirect('/grupos');
};