// const CategorieService = require("../categorie.service.js");

// function validateId(request, response, next) {
//   const id = parseInt(request.params.id);
//   const categorieService = new CategorieService()
//   const category = categorieService.findOne((category) => category.id === parseInt(id));
//   if (!category) {
//     return response.sendStatus(404);
//   }
//   request.category = category;
//   next();
// }

// module.exports.validateId = validateId;
