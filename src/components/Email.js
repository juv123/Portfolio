import React from 'react';

const Email = ({ mailto, label }) => {
    return (
        <a
            href={`mailto:${mailto}`}
            onClick={(e) => {
                window.location.href = `mailto:${mailto}`;
                e.preventDefault();
            }}
        >
            {label}
        </a>
    );
};

export default Email;