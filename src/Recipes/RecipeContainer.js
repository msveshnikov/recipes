import RecipeCard from "./RecipeCard";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import recipes from "../db/recipes2.json";
import Pagination from "@material-ui/lab/Pagination";
import { useState } from "react";

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
    const PAGE_SIZE = 9;
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };

    return (
        <div>
            <Container component="main" maxWidth="lg" className={classes.root}>
                {recipes.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE).map((recipe) => {
                    return <RecipeCard key={recipe.id} recipe={recipe} />;
                })}
            </Container>
            <br />
            <Pagination
                color="secondary"
                count={Math.floor(recipes.length / PAGE_SIZE) + 1}
                page={page}
                onChange={handleChange}
            />
        </div>
    );
};

export default RecipesContainer;
