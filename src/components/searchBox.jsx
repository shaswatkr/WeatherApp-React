import React from "react";

const SearchBox = ({ query, queryModification, search }) => {
    return (
        <div className="search-box">
            <input
                type="text"
                className="search-bar"
                placeholder="Search.."
                onChange={(e) => queryModification(e)}
                value={query}
                onKeyPress={search}
            />
        </div>
    );
};

export default SearchBox;
