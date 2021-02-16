import React, { useEffect, useState } from "react";
import axios from "axios";
import CategoryContainer from "./CategoryContainer";
import Loading from "./Loading";
//import { Link } from "react-router-dom";
// const axiosConfig = axios.create({
//     baseURL: "http://localhost:5000/",
// });

const Body = () => {
    const [categories, setCategories] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const values = await axios.get("/api/category");
            setCategories(values.data);
        }
        fetchData();
    }, []);

    console.log(categories);

    const renderCarousel = () => {
        if (!categories)
            return (
                <div className="loadingCenter">
                    <Loading />
                </div>
            );
        else {
            return (
                <div>
                    <h3 className="categoriesInKijijiTitle">
                        Showing Categories Stored In The Database of My Kijiji
                        Project
                    </h3>
                    <a href="https://github.com/mattfrancis888/kijiji">
                        <h4
                            onClick={() => {}}
                            className="linkToProjectRepoTitle"
                        >
                            Link to Kijiji Project Repo:
                            https://github.com/mattfrancis888/kijiji
                        </h4>
                    </a>
                    <div className="categoriesWrap">
                        {categories.map((category, index) => {
                            return (
                                <CategoryContainer
                                    key={index}
                                    title={category}
                                />
                            );
                        })}
                    </div>
                </div>
            );
        }
    };
    return <React.Fragment>{renderCarousel()}</React.Fragment>;
};

export default Body;
