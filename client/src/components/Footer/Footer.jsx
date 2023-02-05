import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope} from "react-icons/fa";
import Payment from "../../assets/payments.png";
import "./Footer.scss";

const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">

                </div>

            </div>
            <div className="col">
                <div className="title">Contact</div>
                <div className="c-item">
                    <FaLocationArrow />
                    <div className="text">
                        臺北市信義區信義路五段7號
                    </div>
                </div>
                <div className="c-item">
                    <FaMobileAlt />
                    <div className="text">
                        電話:0800-092-000
                    </div>
                </div>
                <div className="c-item">
                    <FaEnvelope />
                    <div className="text">
                        Email:willy5209593@gmail.com
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="title">Categories</div>
                <span className="text">Watches</span>
                <span className="text">Phones</span>
                <span className="text">Laptops</span>
                <span className="text">Computers</span>
                <span className="text">Accessories</span>
            </div>
            <div className="col">
                <div className="title">Pages</div>
                <span className="text">Home</span>
                <span className="text">About</span>
                <span className="text">Privacy Policy</span>
                <span className="text">Returns</span>
                <span className="text">Terms & Conditions</span>
                <span className="text">Contact Us</span>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                    STORE 2023 CREATED BY CALMTEA
                </div>
                <img src={Payment}/>
            </div>
        </div>
    </footer>;
};

export default Footer;