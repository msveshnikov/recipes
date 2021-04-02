import React from "react";
import { useParams } from "react-router-dom";
import recipes from "../db/recipes2.json";
import Typography from "@material-ui/core/Typography";

const Recipe = () => {
    let { id } = useParams();
    let recipe = recipes.find((r) => r.id === parseInt(id));
    console.log(recipe);
    console.log(JSON.parse(recipe?.Media).photos);
    return (
        <Typography
            dangerouslySetInnerHTML={{ __html: recipe.Description || JSON.parse(recipe?.Media).photos[0].text_ru }}
        ></Typography>
    );
};

export default Recipe;
