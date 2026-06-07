const db = require('../config/db');

class Grupo {

    static async listar() {
        const [rows] = await db.query('SELECT * FROM grupos');
        return rows;
    }

    static async buscarPorId(id) {
        const [rows] = await db.query(
            'SELECT * FROM grupos WHERE id = ?',
            [id]
        );
        return rows[0];
    }

    static async criar(nome, criadorId) {
        await db.query(
            'INSERT INTO grupos (nome, criador_id) VALUES (?, ?)',
            [nome, criadorId]
        );
    }

    static async excluir(id) {
        await db.query(
            'DELETE FROM grupos WHERE id = ?',
            [id]
        );
    }

    static async listarParticipantes(grupoId) {
        const [rows] = await db.query(
            'SELECT * FROM participantes WHERE grupo_id = ?',
            [grupoId]
        );
        return rows;
    }

    static async adicionarParticipante(grupoId, nome, funcao) {
        await db.query(
            'INSERT INTO participantes (grupo_id, nome, funcao) VALUES (?, ?, ?)',
            [grupoId, nome, funcao]
        );
    }

    // 🔥 SOLICITAÇÃO DE ENTRADA (CORRIGIDO)
    static async criarSolicitacao(grupoId, usuarioId) {

        // evita duplicar pedido
        const [existente] = await db.query(
            `SELECT * FROM solicitacoes_grupo 
             WHERE grupo_id = ? AND usuario_id = ?`,
            [grupoId, usuarioId]
        );

        if (existente.length > 0) {
            return;
        }

        await db.query(
            `INSERT INTO solicitacoes_grupo (grupo_id, usuario_id, status)
             VALUES (?, ?, 'pendente')`,
            [grupoId, usuarioId]
        );
    }

    static async total() {
        const [rows] = await db.query(
            'SELECT COUNT(*) AS total FROM grupos'
        );

        return rows[0].total;
    }
}

module.exports = Grupo;