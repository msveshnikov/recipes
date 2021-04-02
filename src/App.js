import RecipesContainer from "./Recipes/RecipeContainer";
import { Route, Redirect, Switch } from "react-router-dom";
import Recipe from "./Recipes/Recipe";

function App() {
    <Switch>
        <Route path="/recipe/:id" exact children={<Recipe />} />
        <Route path="/" exact component={RecipesContainer} />
        <Redirect to="/" />
    </Switch>;

    return <RecipesContainer />;
}

export default App;
