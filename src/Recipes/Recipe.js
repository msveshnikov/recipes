import { useParams } from "react-router-dom";
import recipes from "../db/recipes2.json";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Ingredients from "../Ingredients/Ingredients";
import Carousel from "react-material-ui-carousel";
import Step from "./Step";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        flexWrap: "wrap",
        justifyContent: "space-around",
        backgroundColor: theme.palette.background.paper,
    },
}));

const Recipe = () => {
    const classes = useStyles();
    let { id } = useParams();
    let recipe = recipes.find((r) => r.id === parseInt(id));
    let photos = JSON.parse(recipe?.Media).photos;
    useEffect(() => {
        if (recipe.isStepPhoto) {
            cacheImages(photos.map((p) => p.src_big));
        }
    }, [photos, recipe.isStepPhoto]);

    return (
        <Container component="main" maxWidth="md" className={classes.root}>
            <br />
            <Typography gutterBottom variant="h4">
                {recipe.Title}
            </Typography>
            <br />
            <Ingredients ingredients={JSON.parse(recipe.Ingredients)?.[0]?.childs} />
            {recipe.isStepPhoto ? (
                <Carousel
                    navButtonsProps={{
                        style: {
                            backgroundColor: "gray",
                        },
                    }}
                    animation="slide"
                    navButtonsAlwaysVisible="true"
                >
                    {photos.map((p) => (
                        <Step photo={p} title={p.text_ru} />
                    ))}
                </Carousel>
            ) : (
                <Step photo={photos[0]} title={recipe.Description} />
            )}
        </Container>
    );
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
