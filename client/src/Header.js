import React from "react";

function Header ( {username} ) {

    return (
        <div>
            {username ? (
                <h3>Howdy, {username}!</h3>
            ) : (
                <h3>Please login!</h3>
            )}
        </div>
    )
}

export default Header;