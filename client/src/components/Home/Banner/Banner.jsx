
import "./Banner.scss";
import BannerImg from "../../../assets/banner.png";
const Banner = () => {
    return <div className="banner">
        <div className="content">
            <div className="text-content">
                <h1>SALES</h1>
                <p>A shop sell electronic products.
                    
                </p>
                <div className="ctas">
                    <div className="banner-cta">Read More</div>
                    <div className="banner-cta v2">Shop Now</div>
                </div>
            </div>
            <img className="banner-img" src={BannerImg} alt="" />
        </div>
    </div>;
};

export default Banner;