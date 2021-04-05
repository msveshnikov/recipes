import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Ingredients from "../Ingredients/Ingredients";
import Carousel from "react-material-ui-carousel";
import Step from "./Step";

const useStyles = makeStyles((theme) => ({
    root: {
        flexWrap: "wrap",
        justifyContent: "space-around",
        backgroundColor: theme.palette.background.paper,
    },
}));

const Recipe = () => {
    const classes = useStyles();
    const last = useRef(null);
    let { category, id } = useParams();
    const [recipes, setRecipes] = useState();
    const [auto, setAuto] = useState(true);
    if (category) {
        import("../db/" + category + ".json").then((json) => {
            setRecipes(json.default);
        });
    }

    let recipe = recipes?.find((r) => r.id === parseInt(id));
    let photos;
    if (recipe) {
        photos = JSON.parse(recipe?.Media)?.photos;
    }
    useEffect(() => {
        if (recipe?.isStepPhoto) {
            cacheImages(photos.map((p) => p.src_big));
        }
    }, [photos, recipe?.isStepPhoto]);

    return recipe ? (
        <>
            <Container component="main" maxWidth="md" className={classes.root}>
                <br />
                <Typography gutterBottom variant="h4">
                    {recipe.Title}
                </Typography>
                <br />
                <Ingredients
                    onClick={() => {
                        setAuto(false);
                    }}
                    ingredients={JSON.parse(recipe.Ingredients)}
                />
                {recipe.isStepPhoto ? (
                    <Carousel
                        onChange={() => {
                            last.current.scrollIntoView({ block: "end", inline: "end", behavior: "smooth" });
                        }}
                        autoPlay={auto}
                        navButtonsProps={{
                            style: {
                                backgroundColor: "gray",
                            },
                        }}
                        animation="slide"
                        cycleNavigation="true"
                        navButtonsAlwaysVisible="true"
                    >
                        {photos.map((p) => (
                            <Step
                                onClick={() => {
                                    setAuto(false);
                                }}
                                key={p.photo_id}
                                photo={p}
                                title={p.text_ru}
                            />
                        ))}
                    </Carousel>
                ) : (
                    <Step photo={photos[0]} title={recipe.Description} />
                )}
            </Container>
            <div id="last" ref={last}>
                {" "}
            </div>
        </>
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
