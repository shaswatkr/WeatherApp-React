import React from "react";

const NoCityFound = () => {
    return (
        <div className="jumbotron">
            <a className="display-5" href="/">
                No City Found with the following name,
                <span className="text-danger"> GO BACK!! </span>
            </a>
        </div>
    );
};

export default NoCityFound;
