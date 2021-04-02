import { Route, Redirect, Switch } from "react-router-dom";
import RecipesContainer from "./Recipes/RecipeContainer";
import Recipe from "./Recipes/Recipe";
import ScrollToTop from "./hoc/ScrollToTop";

function App() {
    return (
        <div>
            <ScrollToTop />
            <Switch>
                <Route path="/recipe/:id" component={Recipe} />
                <Route path="/" exact component={RecipesContainer} />
                <Redirect to="/" />
            </Switch>
        </div>
    );
}

export default App;
