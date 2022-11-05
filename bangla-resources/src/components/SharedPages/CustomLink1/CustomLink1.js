import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink1 = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{
                    color: match ? "white" : "black",
                    textDecoration: match ? "none" : "none",
                    backgroundColor: match ? "#04AA6D" : ""
                }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
};

export default CustomLink1;