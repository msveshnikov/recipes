import React from "react";
import { styled } from '@mui/material/styles';
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";

const PREFIX = 'CategoryCard';

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

const CategoryCard = ({ category }) => {


    return (
        <StyledCard className={classes.card}>
            <Link
                component={RouterLink}
                to={
                    category.ParentCategory_ID === 0 && category.id !== 104 && category.id !== 14
                        ? "/category/" + category.id
                        : "/recipes/" + category.id
                }
                className={classes.actionArea}
                underline="hover">
                <CardMedia className={classes.media} image={category?.src_big?.replaceAll("http://","https://")} />
                <CardContent>
                    <Typography gutterBottom variant="h4">
                        {category.Title}
                    </Typography>
                </CardContent>
            </Link>
        </StyledCard>
    );
};

export default CategoryCard;
