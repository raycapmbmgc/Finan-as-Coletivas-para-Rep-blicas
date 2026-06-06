const db = require('../config/db');

class Grupo {

    static async listar() {

        const [rows] = await db.query(
            'SELECT * FROM grupos'
        );

        return rows;
    }

    static async criar(nome) {

        await db.query(
            'INSERT INTO grupos(nome) VALUES(?)',
            [nome]
        );
    }

    static async excluir(id) {

        await db.query(
            'DELETE FROM grupos WHERE id = ?',
            [id]
        );
    }

    static async total() {

        const [rows] = await db.query(
            'SELECT COUNT(*) total FROM grupos'
        );

        return rows[0].total;
    }

}

module.exports = Grupo;