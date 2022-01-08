import React from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Link from "@mui/material/Link";
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

const CategoryCard = ({ category }) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
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
        </Card>
    );
};

export default CategoryCard;
