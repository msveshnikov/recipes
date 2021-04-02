import { Route, Redirect, Switch } from "react-router-dom";
import RecipesContainer from "./Recipes/RecipeContainer";
import Recipe from "./Recipes/Recipe";

function App() {
    return (
        <Switch>
            <Route path="/recipe/:id" component={Recipe} />
            <Route path="/" exact component={RecipesContainer} />
            <Redirect to="/" />
        </Switch>
    );
}

export default App;
