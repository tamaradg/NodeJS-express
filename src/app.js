const express = require("express");
const { categorieRouter } = require("./categorie/categorie.router");
const { logger } = require("./middlewares/logger");
const cors = require("cors");
const whiteliste = ["http://localhost:7000"];

const app = express();

app.use(express.json());
app.use(cors());
app.use(logger);

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       if (whiteliste.indexOf(origin) !== -1) {
//         callback(null, true);
//       } else {
//         callback(new Error("Non autorisé par CORS"));
//       }
//     },
//   })
// );

app.use("/api/categories", categorieRouter);
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server run on port ${PORT}`);
});
