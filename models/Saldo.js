class Saldo {

    static calcular(despesas, quantidadePessoas) {

        let total = 0;

        despesas.forEach(despesa => {
            total += Number(despesa.valor);
        });

        const valorPorPessoa =
            total / quantidadePessoas;

        return {
            total,
            valorPorPessoa
        };
    }

}

module.exports = Saldo;