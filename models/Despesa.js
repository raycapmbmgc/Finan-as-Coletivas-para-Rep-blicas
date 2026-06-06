const db = require('../config/db');

class Despesa {

    static async listar() {

        const [rows] = await db.query(`
            SELECT *
            FROM despesas
            ORDER BY data_despesa DESC
        `);

        return rows;
    }

    static async criar(
        descricao,
        valor,
        categoria,
        usuario_pagador,
        grupo_id
    ) {

        const sql = `
            INSERT INTO despesas
            (
                descricao,
                valor,
                categoria,
                usuario_pagador,
                grupo_id,
                data_despesa
            )
            VALUES (?, ?, ?, ?, ?, NOW())
        `;

        await db.query(sql, [
            descricao,
            valor,
            categoria,
            usuario_pagador,
            grupo_id
        ]);
    }

    static async excluir(id) {

        await db.query(
            'DELETE FROM despesas WHERE id = ?',
            [id]
        );
    }

    static async total() {

        const [rows] = await db.query(`
            SELECT COALESCE(SUM(valor),0) total
            FROM despesas
        `);

        return rows[0].total;
    }

}

module.exports = Despesa;