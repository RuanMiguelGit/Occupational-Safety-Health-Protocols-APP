"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../api/app,");
const port = process.env.PORT || 3003;
app_1.app.listen(port, () => console.log(`conectado na porta ${port}`));
