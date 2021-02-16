import React, { useEffect, useState } from "react";

const CategoryContainer = (props) => {
    return (
        <div
            className="categoryContainer"
            style={{
                backgroundImage: `url(${props.image})`,
            }}
        >
            <h3 className="categoryTitle">{props.title}</h3>
        </div>
    );
};

export default CategoryContainer;
