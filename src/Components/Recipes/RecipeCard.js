import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";

const PREFIX = 'RecipeCard';

const classes = {
    media: `${PREFIX}-media`,
    card: `${PREFIX}-card`,
    actionArea: `${PREFIX}-actionArea`
};

const StyledCard = styled(Card)((
    {
        theme
    }
) => ({
    [`& .${classes.media}`]: {
        height: 200,
        width: 300,
    },

    [`&.${classes.card}`]: {
        textAlign: "center",
        width: 300,
        borderRadius: 3,
        margin: theme.spacing(2),
        transition: "all 0.5s",
        "&:hover": {
            transform: "scale(1.05)",
        },
    },

    [`& .${classes.actionArea}`]: {
        "&:hover, &:focus, &:visited, &:link, &:active": {
            textDecoration: "none",
        },
        color: "gray",
    }
}));

const RecipeCard = ({ recipe }) => {

    const [hidden, setHidden] = useState(false);
    const photo = JSON.parse(recipe?.Media).photos?.[0];

    return hidden ? null : (
        <StyledCard className={classes.card}>
            <Link
                component={RouterLink}
                to={"/recipe/" + recipe.subcategory_id + "/" + recipe.id}
                className={classes.actionArea}
                underline="hover">
                <CardMedia
                    className={classes.media}
                    image={photo?.src_big?.replaceAll("http://","https://")}
                    component="img"
                    onError={(e) => {
                        setHidden(true);
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
        </StyledCard>
    );
};

export default RecipeCard;
