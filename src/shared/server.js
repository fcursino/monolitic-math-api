const express =  require("express");
const cors =  require("cors");

const equacaoRouters =  require("../modules/equacao/routes/equacao.routes.js");
const geometriaRouters =  require("../modules/geometria/routes/geometria.routes.js");

const app = express();

app.use(express.json());
app.use(cors());
app.use(equacaoRouters);
app.use(geometriaRouters);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server up and running on port ${port}`);
});
