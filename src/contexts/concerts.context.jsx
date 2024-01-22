import { createContext, useEffect, useState } from "react";

import { getConcertsDocuments } from "../utils/firebase.utils";

export const ConcertsContext = createContext({
    concertsMap: {},
});

export const ConcertsProvider = ({ children }) => {
    const [concertsMap, setConcertsMap] = useState({});

    useEffect(() => {
        const getConcertsMap = async () => {
            const concertMap = await getConcertsDocuments();
            setConcertsMap(concertMap);
        };

        getConcertsMap();
    }, []);

    const value = { concertsMap };

    return (
        <ConcertsContext.Provider value={value}>
            {children}
        </ConcertsContext.Provider>
    );
};
