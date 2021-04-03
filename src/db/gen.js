let recipes = require("../db/recipes.json");
let categories = require("../db/categories.json");
var fs = require("fs");

categories.forEach((c) => {
    let jsonData = recipes.filter((o) => o.category_id === c.id || o.subcategory_id === c.id);
    fs.writeFile(c.id + ".json", JSON.stringify(jsonData), () => {});
    if (jsonData[0]) {
        const photo = JSON.parse(jsonData[0].Media).photos[0];
        c.src_big = photo.src_big;
    }
});

fs.writeFile("cats.json", JSON.stringify(categories), () => {});
