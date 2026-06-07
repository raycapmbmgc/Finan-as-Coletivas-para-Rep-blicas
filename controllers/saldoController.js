const Financeiro = require('../models/Financeiro');
const Saldo = require('../models/Saldo');

exports.index = async (req, res) => {

    const grupoId = req.params.id || 1;

    const movimentacoes = await Financeiro.listarMovimentacoes(grupoId);

    const resultado = Saldo.calcularMovimentacoes(movimentacoes);

    res.render('saldos', {
        movimentacoes,
        saldo: resultado.saldo,
        totalEntrada: resultado.totalEntrada,
        totalSaida: resultado.totalSaida,
        valorPorPessoa: resultado.valorPorPessoa,
        pessoas: resultado.pessoas,
        grupoId
    });
};