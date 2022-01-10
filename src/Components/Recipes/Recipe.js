import { useState } from "react";
import { styled } from '@mui/material/styles';
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Ingredients from "../Ingredients/Ingredients";
import Step from "./Step";
import Steps from "./Steps";

const PREFIX = 'Recipe';

const classes = {
    root: `${PREFIX}-root`
};

const StyledContainer = styled(Container)((
    {
        theme
    }
) => ({
    [`&.${classes.root}`]: {
        flexWrap: "wrap",
        justifyContent: "space-around",
        backgroundColor: theme.palette.background.paper,
    }
}));

const Recipe = () => {

    let { category, id } = useParams();
    const [recipes, setRecipes] = useState();
    if (category) {
        import("../../db/" + category + ".json").then((json) => {
            setRecipes(json.default);
        });
    }

    let recipe = recipes?.find((r) => r.id === parseInt(id));
    if (recipe) {
        var photos = JSON.parse(recipe?.Media)?.photos;
        cacheImages(photos.map((p) => p?.src_big?.replaceAll("http://","https://")));
    }

    return recipe ? (
        <StyledContainer component="main" maxWidth="md" className={classes.root}>
            <br />
            <Typography gutterBottom variant="h4">
                {recipe.Title}
            </Typography>
            <br />
            <Ingredients ingredients={JSON.parse(recipe.Ingredients)} />
            {!recipe.isStepPhoto && <Step title={recipe.Description} />}
            <Steps photos={photos} />
            <br />
            <br />
        </StyledContainer>
    ) : null;
};

const cacheImages = async (srcArray) => {
    const promises = await srcArray.map((src) => {
        return new Promise(function (resolve, reject) {
            const img = new Image();
            img.src = src;
            img.onload = resolve();
            img.onerror = reject();
        });
    });
    await Promise.all(promises);
};

export default Recipe;
