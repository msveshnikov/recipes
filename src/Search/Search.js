import React from "react";
import {
    InstantSearch,
    Index,
    Hits,
    Stats,
    SearchBox,
    Pagination,
    Highlight,
    Configure,
} from "react-instantsearch-dom";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
import algoliasearch from "algoliasearch/lite";
import "instantsearch.css/themes/algolia.css";
import "./Search.css";

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
    const photo = JSON.parse(hit?.Media).photos?.[0];
    return (
        <div className="hit-card">
            <Link component={RouterLink} to={"/recipe/" + hit.subcategory_id + "/" + hit.id}>
                <img className="hit-image" src={photo.src_big} align="left" alt={hit.Title} />
                <h1 className="hit-name">
                    <Highlight attribute="Title" hit={hit} />
                </h1>
            </Link>
        </div>
    );
}
