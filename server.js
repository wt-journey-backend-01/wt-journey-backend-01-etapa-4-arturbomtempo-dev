const express = require('express');
const dotenv = require('dotenv');
const swagger = require('./docs/swagger');
const agentesRouter = require('./routes/agentesRoutes');
const casosRouter = require('./routes/casosRoutes');
const authRouter = require('./routes/authRoutes');
const { errorHandler } = require('./utils/errorHandler');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/auth', authRouter);
app.use('/casos', authenticateToken, casosRouter);
app.use('/agentes', authenticateToken, agentesRouter);

swagger(app);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Servidor do Departamento de Polícia rodando na porta:${PORT}`);
});
