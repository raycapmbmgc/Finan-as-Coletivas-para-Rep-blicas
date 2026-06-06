const db = require('../config/db');

class Meta {

    static async listar() {

        const [rows] = await db.query(
            'SELECT * FROM metas'
        );

        return rows;
    }

    static async criar(
        nome,
        valor_objetivo
    ) {

        await db.query(`
            INSERT INTO metas
            (
                nome,
                valor_objetivo,
                valor_atual
            )
            VALUES (?, ?, 0)
        `, [
            nome,
            valor_objetivo
        ]);
    }

    static async excluir(id) {

        await db.query(
            'DELETE FROM metas WHERE id = ?',
            [id]
        );
    }

}

module.exports = Meta;