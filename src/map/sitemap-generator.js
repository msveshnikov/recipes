let cats = require("../db/categories.json");
let recipes = require("../db/recipes.json");

require("babel-register")({
    presets: ["es2015", "react"],
});

const router = require("./sitemap-routes").default;
const Sitemap = require("react-router-sitemap").default;

function generateSitemap() {
    let idCats = [];
    let idCatsRecipes = [];

    for (let i = 0; i < cats.length; i++) {
        idCats.push({ category: cats[i].id });
    }

    for (let j = 0; j < recipes.length; j++) {
        idCatsRecipes.push({ category: recipes[j].subcategory_id, id: recipes[j].id });
    }

    const paramsConfig = {
        "/recipe/:category/:id": idCatsRecipes,
        "/category/:category": idCats,
        "/recipes/:category": idCats,
    };

    return new Sitemap(router).applyParams(paramsConfig).build("https://mycooks.club").save("./public/sitemap.xml");
}

generateSitemap();
