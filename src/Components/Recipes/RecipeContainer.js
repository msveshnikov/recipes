import RecipeCard from "./RecipeCard";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import { useState } from "react";
import { useParams } from "react-router-dom";

const PREFIX = "RecipesContainer";

const classes = {
    root: `${PREFIX}-root`,
};

const StyledContainer = styled(Container)(({ theme }) => ({
    [`&.${classes.root}`]: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        backgroundColor: theme.palette.background.paper,
    },
}));

const RecipesContainer = () => {
    let { category } = useParams();

    const [recipes, setRecipes] = useState();
    if (category) {
        import("../../db/" + category + ".json").then((json) => {
            setRecipes(json.default);
        });
    }
    return recipes ? (
        <StyledContainer component="main" maxWidth="lg" className={classes.root}>
            {recipes.map((recipe) => {
                return <RecipeCard key={recipe.id} recipe={recipe} />;
            })}
        </StyledContainer>
    ) : null;
};

export default RecipesContainer;
