import RecipesContainer from "./Recipes/RecipeContainer";
import AdSense from "react-adsense";

function App() {
    return (
        <>
            <AdSense.Google
                client="ca-pub-1351673544337847"
                slot="3301281933"
                style={{ display: "block" }}
                layout="in-article"
                format="fluid"
            />
            <RecipesContainer />;
        </>
    );
}

export default App;
