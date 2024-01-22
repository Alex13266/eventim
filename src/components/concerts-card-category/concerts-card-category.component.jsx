import { useContext, Fragment, useState } from "react";

import { ConcertsContext } from "../../contexts/concerts.context";

import ConcertsCard from "../concerts-card/concerts-card.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";

import "./concerts-card-category.styles.scss";

const ConcertsCategory = () => {
    const { concertsMap } = useContext(ConcertsContext);
    const [searchTerm, setSearchTerm] = useState("");

    const filteredConcerts = Object.values(concertsMap)
        .flat()
        .filter((concert) =>
            concert.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

    const handleClearSearch = () => {
        setSearchTerm("");
    };
    return (
        <div className="ConcertCategory-Container">
            <div className="SearchBar-Wrapper">
                <div className="SearchBar-Inner SearchBarIcons">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input
                        className="SearchBar"
                        type="text"
                        placeholder="Въведете група"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <FontAwesomeIcon
                        className="RemoveSearch SearchBarIcons"
                        icon={faXmark}
                        onClick={handleClearSearch}
                    />
                </div>
            </div>
            {Object.keys(concertsMap).map((title) => {
                return (
                    <Fragment key={title}>
                        <div>
                            {filteredConcerts.map((concert) => (
                                <ConcertsCard
                                    key={concert.id}
                                    product={concert}
                                />
                            ))}
                        </div>
                    </Fragment>
                );
            })}
        </div>
    );
};

export default ConcertsCategory;
