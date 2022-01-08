import { Route, Redirect, Switch, BrowserRouter } from "react-router-dom";
import RecipesContainer from "./Components/Recipes/RecipeContainer";
import Recipe from "./Components/Recipes/Recipe";
import ScrollToTop from "./hoc/ScrollToTop";
import CategoryContainer from "./Components/Categories/CategoryContainer";
import Search from "./Components/Search/Search";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme();

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <ScrollToTop />
                <Switch>
                    <Route path="/recipe/:category/:id" component={Recipe} />
                    <Route path="/category/:parent" component={CategoryContainer} />
                    <Route path="/recipes/:category" component={RecipesContainer} />
                    <Route path="/search" component={Search} />
                    <Route path="/" exact component={CategoryContainer} />
                    <Redirect to="/" />
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
