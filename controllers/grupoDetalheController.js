const Grupo = require('../models/Grupo');

exports.detalhe = async (req, res) => {

    try {

        console.log("ID RECEBIDO:", req.params.id);

        const grupo = await Grupo.buscarPorId(req.params.id);

        console.log("GRUPO:", grupo);

        const participantes =
            await Grupo.listarParticipantes(req.params.id);

        const grupos = await Grupo.listar();
res.render('grupos', {
    grupos,
    grupo,
    participantes,
    usuario: req.session.usuario,
    msg: req.query.msg || null,
    erro: req.query.erro || null
});

    } catch (erro) {

        console.error(erro);

res.render('grupos', {
    grupos: [],
    grupo: null,
    participantes: [],
    usuario: req.session.usuario,
    erro: 'Erro ao carregar grupo'
});
    }
};