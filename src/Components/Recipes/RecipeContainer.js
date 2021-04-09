import RecipeCard from "./RecipeCard";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import { useParams } from "react-router-dom";

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
    let { category } = useParams();

    const [recipes, setRecipes] = useState();
    if (category) {
        import("../../db/" + category + ".json").then((json) => {
            setRecipes(json.default);
        });
    }
    return recipes ? (
        <Container component="main" maxWidth="lg" className={classes.root}>
            {recipes.map((recipe) => {
                return <RecipeCard key={recipe.id} recipe={recipe} />;
            })}
        </Container>
    ) : null;
};

export default RecipesContainer;
