import React from "react";
import RecipeCard from "./RecipeCard";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import recipes from "../db/recipes2.json";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        backgroundColor: theme.palette.background.paper,
    },
}));

const RecipesContainer = () => {
    const classes = useStyles();
    console.log(recipes);
    return (
        <Container component="main" maxWidth="lg" className={classes.root}>
            {recipes.map((recipe) => {
                return <RecipeCard key={recipe.id} recipe={recipe} />;
            })}
        </Container>
    );
};

export default RecipesContainer;
