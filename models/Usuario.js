const db = require('../config/db');

class Usuario {

    static async criar(nome, email, senha) {
        const sql = `
            INSERT INTO usuarios
            (nome, email, senha)
            VALUES (?, ?, ?)
        `;

        await db.query(sql, [nome, email, senha]);
    }

    static async buscarPorEmail(email) {
        const sql = `
            SELECT * FROM usuarios
            WHERE email = ?
        `;

        const [rows] = await db.query(sql, [email]);

        return rows[0];
    }

    static async listar() {
        const [rows] = await db.query(
            'SELECT * FROM usuarios'
        );

        return rows;
    }

}

module.exports = Usuario;