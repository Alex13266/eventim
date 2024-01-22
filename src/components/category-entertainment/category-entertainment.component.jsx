import "./category-entertainment.styles.scss";

const CategoryEntertainment = () => {
    return (
        <div className="Category-Entertainment-Container">
            <row className="Category-Entertainment-Inner">
                <div className="col Category-Entertainment-Card">
                    <img
                        src="https://images.unsplash.com/photo-1571435763834-4d6fbb550bb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
                        alt="concert"
                    />
                    <span>Концерти</span>
                </div>
                <div className="col Category-Entertainment-Card">
                    <img
                        src="https://images.unsplash.com/photo-1675160838746-0a3082dd780a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        alt=""
                    />
                    <span>Култура</span>
                </div>
                <div className="col Category-Entertainment-Card">
                    <img
                        src="https://images.unsplash.com/photo-1600250395178-40fe752e5189?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
                        alt=""
                    />
                    <span>Спорт</span>
                </div>
                <div className="col Category-Entertainment-Card">
                    <img
                        src="https://images.unsplash.com/photo-1547423753-bff7561e2956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        alt=""
                    />
                    <span>Семейство</span>
                </div>
                <div className="col Category-Entertainment-Card">
                    <img
                        src="https://images.unsplash.com/photo-1606819717115-9159c900370b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        alt=""
                    />
                    <span>Арт</span>
                </div>
                <div className="col Category-Entertainment-Card">
                    <img
                        src="https://images.unsplash.com/photo-1594122230689-45899d9e6f69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        alt=""
                    />
                    <span>Други</span>
                </div>
            </row>
        </div>
    );
};

export default CategoryEntertainment;
