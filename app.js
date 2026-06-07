require("dotenv").config();

const express = require("express");
const path = require("path");
const session = require("express-session");

const authMiddleware = require("./middlewares/authMiddleware");

const authRoutes = require("./routes/authRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const grupoRoutes = require("./routes/grupoRoutes");
const despesaRoutes = require("./routes/despesaRoutes");
const saldoRoutes = require("./routes/saldoRoutes");
const metaRoutes = require("./routes/metaRoutes");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use(session({
    secret: "rateio-secret",
    resave: false,
    saveUninitialized: false
}));

app.use("/", authRoutes);

app.use("/dashboard", authMiddleware, dashboardRoutes);
app.use("/grupos", authMiddleware, grupoRoutes);
app.use("/despesas", authMiddleware, despesaRoutes);
app.use("/saldos", authMiddleware, saldoRoutes);
app.use("/metas", authMiddleware, metaRoutes);

app.get("/metas", authMiddleware, (req, res) => {
    const grupoId = req.session.grupoId || 1;
    return res.redirect(`/metas/${grupoId}`);
});

app.use((req, res) => {
    res.status(404).render("index", {
        error: "Página não encontrada"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("SERVIDOR INICIADO COM SUCESSO");
    console.log(`URL: http://localhost:${PORT}`);
});