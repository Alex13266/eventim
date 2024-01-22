import { useContext, Fragment } from "react";

import { CategoriesContext } from "../../contexts/categories.context";

import EventsCard from "../events-card/events-card.component";

import "./events-category.styles.scss";

const EventsCategory = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        return (
          <Fragment key={title}>
            <div className='events-cards-container'>
              {categoriesMap[title].map((product) => (
                <EventsCard key={product.id} product={product} />
              ))}
            </div>
          </Fragment>
        );
      })}
    </Fragment>
  );
};

export default EventsCategory;
