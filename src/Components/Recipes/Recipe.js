import { useState } from "react";
import { useParams } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Ingredients from "../Ingredients/Ingredients";
import Step from "./Step";
import Steps from "./Steps";

const useStyles = makeStyles((theme) => ({
    root: {
        flexWrap: "wrap",
        justifyContent: "space-around",
        backgroundColor: theme.palette.background.paper,
    },
}));

const Recipe = () => {
    const classes = useStyles();
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
        cacheImages(photos.map((p) => p.src_big));
    }

    return recipe ? (
        <Container component="main" maxWidth="md" className={classes.root}>
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
        </Container>
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
