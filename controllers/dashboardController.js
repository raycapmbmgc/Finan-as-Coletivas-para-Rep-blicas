const Despesa = require('../models/Despesa');
const Grupo = require('../models/Grupo');
const Meta = require('../models/Meta');

exports.index = async (req, res) => {
    try {

        const totalDespesas = await Despesa.total();
        const totalGrupos = await Grupo.total();
        const metas = await Meta.listar();

        res.render('dashboard', {
            totalDespesas,
            totalGrupos,
            metas
        });

    } catch (error) {
        console.error(error);
        res.status(500).send('Erro no dashboard');
    }
};