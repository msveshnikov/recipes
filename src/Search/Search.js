import React from "react";
import { InstantSearch, Index, Hits, Stats, SearchBox, Pagination, Configure } from "react-instantsearch-dom";
import algoliasearch from "algoliasearch/lite";
import "instantsearch.css/themes/algolia.css";
import "./Search.css";
import RecipeCard from "../Recipes/RecipeCard";

const searchClient = algoliasearch("P4PLXKJXKN", "4eaf7bb47fdd2af21c0896028cf9e0f0");

function Search() {
    return (
        <div className="search-container">
            <InstantSearch searchClient={searchClient} indexName="recipes">
                <div className="search-panel">
                    <div>
                        <SearchBox
                            autoFocus={true}
                            className="searchbox"
                            translations={{
                                placeholder: "Поиск по рецептам",
                            }}
                        />

                        <Index indexName="recipes">
                            <Configure hitsPerPage={12} />
                            <Stats />
                            <Hits hitComponent={Recipe} />
                            <div className="pagination">
                                <Pagination />
                            </div>
                        </Index>
                    </div>
                </div>
            </InstantSearch>
        </div>
    );
}

export default Search;

function Recipe({ hit }) {
    return <RecipeCard recipe={hit} />;
}
