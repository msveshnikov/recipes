import React from "react";
import { useParams } from "react-router-dom";
import recipes from "../db/recipes2.json";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
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
    return (
        <Container component="main" maxWidth="md" className={classes.root}>
            {recipe.isStepPhoto ? (
                photos.map((p, index) => (
                    <div key={index}>
                        <Typography dangerouslySetInnerHTML={{ __html: p.text_ru }} />
                        <img style={{ marginTop: "15px" }} width="100%" src={p.src} alt="" />
                    </div>
                ))
            ) : (
                <>
                    <Typography dangerouslySetInnerHTML={{ __html: recipe.Description }} />
                    <img style={{ marginTop: "15px" }} width="100%" src={photos[0].src} alt="" />
                </>
            )}
        </Container>
    );
};

export default Recipe;
