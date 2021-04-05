let recipes = require("../db/recipes.json");
let categories = require("../db/categories.json");
var fs = require("fs");
let total = 0;

categories.forEach((c) => {
    let jsonData;
    if (c.ParentCategory_ID === 160) {
        let keywords = c.keywords.split(",");
        jsonData = recipes.filter((o) => keywords.some((k) => o.Title.includes(k)));
    } else {
        jsonData = recipes.filter((o) => o.category_id === c.id || o.subcategory_id === c.id);
    }

    // bad images CDNs
    jsonData = jsonData.filter((c) => !c.Media.includes("v540103905"));
    jsonData = jsonData.filter((c) => !c.Media.includes("v409216865"));
    jsonData = jsonData.filter((c) => !c.Media.includes("v540103427"));
    jsonData = jsonData.filter((c) => !c.Media.includes("v7005958"));
    jsonData = jsonData.filter((c) => !c.Media.includes("v614727171"));
    jsonData = jsonData.filter((c) => !c.Media.includes("v619816852"));
    jsonData = jsonData.filter((c) => !c.Media.includes("v322829554"));
    jsonData = jsonData.filter((c) => !c.Media.includes("v322519554"));
    jsonData = jsonData.filter((c) => !c.Media.includes("v606527036"));
    jsonData = jsonData.filter((c) => !c.Media.includes("v425724852"));
    jsonData = jsonData.filter((c) => !c.Media.includes("v540107427"));
    jsonData = jsonData.filter((c) => !c.Media.includes("v614620554"));
    jsonData = jsonData.filter((c) => !c.Media.includes("v616220852"));
    jsonData = jsonData.filter((c) => !c.Media.includes("recipe-2928"));
    

    if (c.ParentCategory_ID !== 0 || c.id === 104 || c.id===14) {
        total += jsonData.length;
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

console.log(total);
fs.writeFile("cats.json", JSON.stringify(categories), () => {});
