const db = require('../config/db');

class Financeiro {

    static async saldoGrupo(grupoId) {
        const [rows] = await db.query(`
            SELECT 
                SUM(CASE WHEN tipo='entrada' THEN valor ELSE -valor END) as saldo
            FROM movimentacoes
            WHERE grupo_id = ?
        `, [grupoId]);

        return rows[0].saldo || 0;
    }

    static async listarMovimentacoes(grupoId) {
        const [rows] = await db.query(`
            SELECT * FROM movimentacoes
            WHERE grupo_id = ?
            ORDER BY created_at DESC
        `, [grupoId]);

        return rows;
    }

    static async entrada(grupoId, valor, responsavel, metaId = null) {
        await db.query(`
            INSERT INTO movimentacoes (grupo_id, tipo, valor, responsavel, meta_id)
            VALUES (?, 'entrada', ?, ?, ?)
        `, [grupoId, valor, responsavel, metaId]);
    }

    static async saida(grupoId, valor, responsavel, metaId = null) {
        await db.query(`
            INSERT INTO movimentacoes (grupo_id, tipo, valor, responsavel, meta_id)
            VALUES (?, 'saida', ?, ?, ?)
        `, [grupoId, valor, responsavel, metaId]);
    }
}

module.exports = Financeiro;