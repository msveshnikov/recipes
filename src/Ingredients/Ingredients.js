import ingredients from "../db/ingredients.json";
import types from "../db/types.json";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    paper: {
        backgroundColor: "#ffc" ,
        flexWrap: "wrap",
        justifyContent: "space-around",
        padding: 10,
        marginBottom: 30
    },
}));

const Ingredients = (props) => {
    const classes = useStyles();
    return (
        <Paper className={classes.paper} >
            <Typography variant="h5">Ингредиенты:</Typography>
            {props.ingredients.map((p) => (
                <Typography variant="subtitle2" key={p.id}>
                    {ingredients.find((i) => i.id === parseInt(p.id))?.Title} {p.count}{" "}
                    {types.find((t) => t.id === parseInt(p.type))?.title}
                </Typography>
            ))}
        </Paper>
    );
};

export default Ingredients;
