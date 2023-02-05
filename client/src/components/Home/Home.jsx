import "./Home.scss"

import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";

const Home = () => {
    return <div>
        <Banner />
        <div className="main-content"></div>
        <div className="layout">
            <Category />
            <Products />
        </div>
    </div>;
};

export default Home;