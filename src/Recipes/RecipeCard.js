import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    media: {
        height: 200,
        width: 300,
    },
    card: {
        textAlign: "center",
        width: 300,
        borderRadius: 3,
        margin: theme.spacing(2),
        transition: "all 0.5s",
        "&:hover": {
            transform: "scale(1.05)",
        },
    },
    actionArea: {
        "&:hover, &:focus, &:visited, &:link, &:active": {
            textDecoration: "none",
        },
        color: "gray",
    },
}));

const RecipeCard = ({ recipe }) => {
    const classes = useStyles();

    const photo = JSON.parse(recipe?.Media).photos?.[0];

    return (
        <Card className={classes.card}>
            <Link
                component={RouterLink}
                to={"/recipe/" + recipe.subcategory_id + "/" + recipe.id}
                className={classes.actionArea}
            >
                <CardMedia
                    className={classes.media}
                    src={photo.src_big}
                    component="img"
                    onError={(e) => {
                        e.target.src = photo.src;
                    }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h4">
                        {recipe.Title}
                    </Typography>
                    {recipe.RecipeAuthor && (
                        <>
                            <Typography variant="h6" color="textSecondary">
                                <strong>Автор:</strong>
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                {recipe.RecipeAuthor}
                            </Typography>
                        </>
                    )}
                </CardContent>
            </Link>
        </Card>
    );
};

export default RecipeCard;
