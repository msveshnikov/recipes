let recipes = require("../db/recipes.json");
let categories = require("../db/categories.json");
var fs = require("fs");

categories.forEach((c) => {
    let jsonData;
    if (c.ParentCategory_ID === 160) {
        let keywords = c.keywords.split(",");
        jsonData = recipes.filter((o) => keywords.some((k) => o.Title.includes(k)));
    } else {
        jsonData = recipes.filter((o) => o.category_id === c.id || o.subcategory_id === c.id);
    }
    if (c.ParentCategory_ID !== 0) {
        fs.writeFile(c.id + ".json", JSON.stringify(jsonData), () => {});
    }
    if (jsonData[0]) {
        const photo = JSON.parse(jsonData[0].Media).photos[0];
        c.src_big = photo.src_big;
    }
    if (c.id === 160) {
        c.src_big = "https://www.researchworld.com/wp-content/uploads/2013/02/multi-country.jpg";
    }
});

fs.writeFile("cats.json", JSON.stringify(categories), () => {});
