import React from "react";

function Header ( {username} ) {

    return (
        <div>
            {username ? (
                <h3>Welcome, {username}!</h3>
            ) : (
                <h3>Click the Login Link to Login!</h3>
            )}
        </div>
    )
}

export default Header;