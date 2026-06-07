const Meta = require('../models/Meta');
const Financeiro = require('../models/Financeiro');

exports.index = async (req, res) => {

    const grupoId = req.params.id || 1;

    const saldo = await Financeiro.saldoGrupo(grupoId);
    const movimentacoes = await Financeiro.listarMovimentacoes(grupoId);
    const metas = await Meta.listar(grupoId);

    const metasComProgresso = metas.map(m => {

        const atual = Number(m.valor_atual || 0);
        const objetivo = Number(m.valor_objetivo || 1);

        const progresso = (atual / objetivo) * 100;

        return {
            ...m,
            progresso: progresso.toFixed(0)
        };
    });

    res.render('metas', {
        saldo,
        movimentacoes,
        metas: metasComProgresso,
        grupoId
    });
};

exports.criarMeta = async (req, res) => {

    const grupoId = req.params.id;
    const { nomeMeta, valorMeta } = req.body;

    await Meta.criar(nomeMeta, valorMeta, grupoId);

    res.redirect('/metas/' + grupoId);
};

exports.excluirMeta = async (req, res) => {

    const grupoId = req.params.id;
    const metaId = req.params.metaId;

    await Meta.excluir(metaId);

    res.redirect('/metas/' + grupoId);
};