import { Route, Redirect, Switch, BrowserRouter } from "react-router-dom";
import RecipesContainer from "./Recipes/RecipeContainer";
import Recipe from "./Recipes/Recipe";
import ScrollToTop from "./hoc/ScrollToTop";
import CategoryContainer from "./Categories/CategoryContainer";

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Switch>
                <Route path="/recipe/:category/:id" component={Recipe} />
                <Route path="/category/:parent" component={CategoryContainer} />
                <Route path="/recipes/:category" component={RecipesContainer} />
                <Route path="/" exact component={CategoryContainer} />
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
