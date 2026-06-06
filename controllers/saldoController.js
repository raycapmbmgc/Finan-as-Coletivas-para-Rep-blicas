const Despesa = require('../models/Despesa');

exports.index = async (req, res) => {

    const despesas = await Despesa.listar();

    let total = 0;

    despesas.forEach(d => {
        total += Number(d.valor);
    });

    const quantidadePessoas = 3;
    const valorPorPessoa = total / quantidadePessoas;

    res.render('saldos', {
        despesas,
        total,
        valorPorPessoa
    });
};