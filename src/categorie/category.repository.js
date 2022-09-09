const fs = require("fs/promises");
const { generateRandomIndex } = require("../utils/generate-random-index");
class CategoryRepository {
  async findAll() {
    // const categories = await fs.readFile("./categories.json", "utf-8");
    // return JSON.parse(categories);
    return JSON.parse(await fs.readFile("./categories.json"), "utf-8");

  }
  async findOne(id) {
    const categories = JSON.parse(await fs.readFile("./categories.json", "utf-8"));
    // console.log(obj[1]);
    // console.log(obj[parseInt(id)]);
    return categories[parseInt(id)];
  }
  async createOne(categoryObj) {
    //on récupère la liste
    const categories = JSON.parse(await fs.readFile("./categories.json", "utf-8"))
    const id = generateRandomIndex();
    // ici on créé la clé à laquelle on associe un object
    categories[id] = categoryObj;
    //on ajoute à la liste
    await fs.writeFile("./categories.json", JSON.stringify(categories));
  }

  async updateOne(id, categoryObj) {
    const categories = JSON.parse(await fs.readFile("./categories.json", "utf-8"))
    categories[id] = {id, ... categoryObj}
    await fs.writeFile("./categories.json", JSON.stringify(categories));
  }

  async deleteOne(id) {
    const categories = JSON.parse(
      await fs.readFile("./categories.json", "utf8")
    );
    delete categories[id];
    await fs.writeFile("./categories.json", JSON.stringify(categories));
  }
}
module.exports = CategoryRepository;
