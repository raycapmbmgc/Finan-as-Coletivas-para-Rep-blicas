const Usuario = require('../models/Usuario');

exports.loginPage = (req, res) => {
    res.render('login');
};

exports.cadastroPage = (req, res) => {
    res.render('cadastro');
};
exports.login = async (req, res) => {
    try {
        const { email, senha } = req.body;
        const usuario = await Usuario.buscarPorEmail(email);
        if (!usuario) {
            return res.send('Usuário não encontrado');
        }
        if (usuario.senha !== senha) {
            return res.send('Senha inválida');
        }
        req.session.usuario = usuario;
        res.redirect('/dashboard');
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao fazer login');
    }
};
exports.cadastro = async (req, res) => {
    try {
        const { nome, email, senha } = req.body;
        await Usuario.criar(nome, email, senha);
        res.redirect('/login');
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao cadastrar');
    }
};
exports.logout = (req, res) => {
    req.session.destroy(() => {
        res.redirect('/login');
    });
};