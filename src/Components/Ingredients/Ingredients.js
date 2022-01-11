import ingredients from "../../db/ingredients.json";
import { styled } from "@mui/material/styles";
import types from "../../db/types.json";
import { Paper, Typography } from "@mui/material";
import { Fragment } from "react";

const PREFIX = "Ingredients";

const classes = {
    paper: `${PREFIX}-paper`,
    title: `${PREFIX}-title`,
};

const StyledPaper = styled(Paper)(() => ({
    [`&.${classes.paper}`]: {
        backgroundColor: "#ffc",
        padding: 10,
        maxWidth: 400,
        marginBottom: 30,
    },

    [`& .${classes.title}`]: {
        marginBottom: 20,
    },
}));

const Ingredients = (props) => {
    return props.ingredients?.length > 0 ? (
        <StyledPaper className={classes.paper}>
            <Typography className={classes.title} variant="h5">
                Состав:
            </Typography>
            {props.ingredients.map((t) => (
                <Fragment key={t.name}>
                    <Typography variant="subtitle1">
                        <b>{t.name}</b>
                    </Typography>
                    {t.childs.map((p, index) => (
                        <Typography variant="subtitle1" key={index}>
                            {ingredients.find((i) => i.id === parseInt(p.id))?.Title} {p.count}{" "}
                            {types.find((t) => t.id === parseInt(p.type))?.title}
                        </Typography>
                    ))}
                </Fragment>
            ))}
        </StyledPaper>
    ) : null;
};

export default Ingredients;
