import { Route, Redirect, Switch } from "react-router-dom";
import RecipesContainer from "./Recipes/RecipeContainer";
import Recipe from "./Recipes/Recipe";
import ScrollToTop from "./hoc/ScrollToTop";
import AdSense from "react-adsense";

function App() {
    return (
        <div>
            <ScrollToTop />
            <Switch>
                <Route path="/recipe/:id" component={Recipe} />
                <Route path="/" exact component={RecipesContainer} />
                <Redirect to="/" />
            </Switch>
            <AdSense.Google
                client="ca-pub-1351673544337847"
                slot="2591225138"
                style={{ display: "block" }}
                layout="in-article"
                format="fluid"
            />
        </div>
    );
}

export default App;
