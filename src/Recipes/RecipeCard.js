import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Link from "@material-ui/core/Link";

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
    },
}));

const RecipeCard = ({ country }) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <Link
                className={classes.actionArea}
                rel="noopener noreferrer"
                target="_blank"
                href={"https://en.wikipedia.org/wiki/" + country.name}
            >
                <CardMedia className={classes.media} image={country.flag} />
                <CardContent>
                    <Typography gutterBottom variant="h4">
                        {country.name}
                    </Typography>
                    <br />
                    <Typography variant="h6" color="textSecondary">
                        <strong>Capital:</strong>
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {country.capital}
                    </Typography>
                    <br />
                    <Typography variant="h6">
                        <strong>Region:</strong>
                    </Typography>
                    <Typography>{country.region}</Typography>
                    <br />
                </CardContent>
            </Link>
        </Card>
    );
};

export default RecipeCard;
