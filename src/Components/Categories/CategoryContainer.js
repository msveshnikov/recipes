import CategoryCard from "./CategoryCard";
import { styled } from '@mui/material/styles';
import Container from "@mui/material/Container";
import { useParams } from "react-router-dom";
import cats from "../../db/cats.json";
// import FeedAd from "./../AdSense/FeedAd";
import Header from "./../Header";
import Footer from "../Footer";

const PREFIX = 'CategoryContainer';

const classes = {
    root: `${PREFIX}-root`
};

// TODO jss-to-styled codemod: The Fragment root was replaced by div. Change the tag if needed.
const Root = styled('div')((
    {
        theme
    }
) => ({
    [`& .${classes.root}`]: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        backgroundColor: theme.palette.background.paper,
    }
}));

const CategoryContainer = () => {

    let { parent } = useParams();

    return (
        (<Root>
            <Header />
            <Container component="main" maxWidth="lg" className={classes.root}>
                {cats
                    .filter((c) => c.ParentCategory_ID === parseInt(parent || 0))
                    .map((c) => (
                        <CategoryCard key={c.id} category={c} />
                    ))}
                {/* <FeedAd /> */}
            </Container>
            <Footer/>
        </Root>)
    );
};

export default CategoryContainer;
