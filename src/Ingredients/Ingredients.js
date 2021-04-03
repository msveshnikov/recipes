import ingredients from "../db/ingredients.json";
import types from "../db/types.json";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    paper: {
        backgroundColor: "#ffc",
        padding: 10,
        maxWidth: 400,
        marginBottom: 30,
    },
    title: {
        marginBottom: 20,
    },
}));

const Ingredients = (props) => {
    const classes = useStyles();
    return props.ingredients ? (
        <Paper className={classes.paper}>
            <Typography className={classes.title} variant="h5">
                Ингредиенты:
            </Typography>
            {props.ingredients.map((t) => (
                <>
                    <Typography variant="subtitle1" key={t.name}>
                        <b>{t.name}</b>
                    </Typography>
                    {t.childs.map((p) => (
                        <Typography variant="subtitle1" key={p.id}>
                            {ingredients.find((i) => i.id === parseInt(p.id))?.Title} {p.count}{" "}
                            {types.find((t) => t.id === parseInt(p.type))?.title}
                        </Typography>
                    ))}
                </>
            ))}
        </Paper>
    ) : null;
};

export default Ingredients;
