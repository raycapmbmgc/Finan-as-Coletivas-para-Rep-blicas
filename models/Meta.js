const db = require('../config/db');

class Meta {

   static async listar(grupoId) {
    const [rows] = await db.query(`
        SELECT * FROM metas WHERE grupo_id = ?
    `, [grupoId]);

    return rows;
}

    static async criar(nome, valor_objetivo, grupoId) {
    await db.query(`
        INSERT INTO metas (nome, valor_objetivo, valor_atual, grupo_id)
        VALUES (?, ?, 0, ?)
    `, [nome, valor_objetivo, grupoId]);
}

    static async excluir(id) {
        await db.query(`
            DELETE FROM metas WHERE id = ?
        `, [id]);
    }
}

module.exports = Meta;