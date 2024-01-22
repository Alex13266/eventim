import { useContext, useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";

import EventsCard from "../../components/events-card/events-card.component";

import { CategoriesContext } from "../../contexts/categories.context";

const EventsCategory = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);
    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <Fragment>
            <div className="title">{category && category.toUpperCase()}</div>
            <div className="category-container">
                {products &&
                    products.map((product) => (
                        <EventsCard key={product.id} product={product} />
                    ))}
            </div>
        </Fragment>
    );
};

export default EventsCategory;
