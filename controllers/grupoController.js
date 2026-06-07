const Grupo = require('../models/Grupo');

exports.index = async (req, res) => {

    const grupos = await Grupo.listar();

    res.render('grupos', {
        grupos,
        grupo: null,
        participantes: [],
        usuario: req.session.usuario
    });
};

exports.criar = async (req, res) => {

    try {

        const { nome } = req.body;

        await Grupo.criar(nome, req.session.usuario.id);

        return res.redirect('/grupos');

    } catch (erro) {
        console.error(erro);
        return res.send('Erro ao criar grupo');
    }
};

exports.excluir = async (req, res) => {

    const grupo = await Grupo.buscarPorId(req.params.id);

    if (!grupo || grupo.criador_id !== req.session.usuario.id) {
        return res.status(403).send('Sem permissão');
    }

    await Grupo.excluir(req.params.id);

    return res.redirect('/grupos');
};

exports.adicionarParticipante = async (req, res) => {

    const { nome, funcao } = req.body;

    await Grupo.adicionarParticipante(
        req.params.id,
        nome,
        funcao
    );

    return res.redirect('/grupos/' + req.params.id);
};

// 🔥 SOLICITAR ENTRADA (CORRIGIDO)
exports.solicitarEntrada = async (req, res) => {

    try {

        await Grupo.criarSolicitacao(
            req.params.id,
            req.session.usuario.id
        );

        return res.redirect('/grupos/' + req.params.id + '?msg=solicitado');

    } catch (erro) {

        console.error(erro);

        return res.redirect('/grupos/' + req.params.id + '?erro=erro_solicitacao');
    }
};