import { Route, Routes, BrowserRouter } from "react-router-dom";
import RecipesContainer from "./Components/Recipes/RecipeContainer";
import Recipe from "./Components/Recipes/Recipe";
import ScrollToTop from "./hoc/ScrollToTop";
import CategoryContainer from "./Components/Categories/CategoryContainer";
import Search from "./Components/Search/Search";
import { ThemeProvider, StyledEngineProvider, createTheme } from "@mui/material";

const theme = createTheme();

function App() {
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <ScrollToTop />
                    <Routes>
                        <Route path="/recipe/:category/:id" element={<Recipe />} />
                        <Route path="/category/:parent" element={<CategoryContainer />} />
                        <Route path="/recipes/:category" element={<RecipesContainer />} />
                        <Route path="/search" element={<Search />} />
                        <Route path="/" element={<CategoryContainer />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </StyledEngineProvider>
    );
}

export default App;
