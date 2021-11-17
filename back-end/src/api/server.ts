import { app} from '../api/app,'
const port = process.env.PORT || 3003;

app.listen(port, () => console.log(`conectado na porta ${port}`));