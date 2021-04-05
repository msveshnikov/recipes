import CategoryCard from "./CategoryCard";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import cats from "../db/cats.json";
import FeedAd from "./../AdSense/FeedAd";
import Header from "./../Header";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        backgroundColor: theme.palette.background.paper,
    },
}));

const CategoryContainer = () => {
    const classes = useStyles();
    let { parent } = useParams();

    return (
        <>
            <Header title="My Cooks Club" />
            <Container component="main" maxWidth="lg" className={classes.root}>
                {cats
                    .filter((c) => c.ParentCategory_ID === parseInt(parent || 0))
                    .map((c) => (
                        <CategoryCard key={c.id} category={c} />
                    ))}
                <FeedAd />
            </Container>
        </>
    );
};

export default CategoryContainer;
