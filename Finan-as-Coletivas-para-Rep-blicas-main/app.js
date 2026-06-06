const express = require('express');
const path = require('path');

const authRoutes = require('./routes/authRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const grupoRoutes = require('./routes/grupoRoutes');
const despesaRoutes = require('./routes/despesaRoutes');
const saldoRoutes = require('./routes/saldoRoutes');
const metaRoutes = require('./routes/metaRoutes');

const app = express();

// Configurações
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Rotas
app.use('/', authRoutes);
app.use('/dashboard', dashboardRoutes);
app.use('/grupos', grupoRoutes);
app.use('/despesas', despesaRoutes);
app.use('/saldos', saldoRoutes);
app.use('/metas', metaRoutes);

// 404
app.use((req, res) => {
    res.status(404).render('404');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});