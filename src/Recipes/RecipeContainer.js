import React from "react";
import RecipeCard from "./RecipeCard";
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

const RecipesContainer = () => {
    const classes = useStyles();
    const { data } = useSWR(`https://restcountries.eu/rest/v2/all`, fetcher);

    return data ? (
        <Container component="main" maxWidth="lg" className={classes.root}>
            {data.map((country) => {
                return <RecipeCard key={country.numericCode} country={country} />;
            })}
        </Container>
    ) : null;
};

export default RecipesContainer;
