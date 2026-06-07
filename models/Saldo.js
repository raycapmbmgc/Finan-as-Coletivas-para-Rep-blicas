class Saldo {

    static calcularMovimentacoes(movimentacoes) {

        const totalEntrada = movimentacoes
            .filter(m => m.tipo === 'entrada')
            .reduce((acc, m) => acc + Number(m.valor), 0);

        const totalSaida = movimentacoes
            .filter(m => m.tipo === 'saida')
            .reduce((acc, m) => acc + Number(m.valor), 0);

        const saldo = totalEntrada - totalSaida;

        const pessoas = [...new Set(movimentacoes.map(m => m.responsavel))];
        const quantidadePessoas = pessoas.length || 1;

        return {
            saldo,
            totalEntrada,
            totalSaida,
            valorPorPessoa: saldo / quantidadePessoas,
            pessoas
        };
    }
}

module.exports = Saldo;