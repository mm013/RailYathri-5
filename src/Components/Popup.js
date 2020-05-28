import React from "react";
import "./Popup.css";
import "react-datepicker/dist/react-datepicker.css";
import image from "../images/icon-train-details.svg";
import image2 from "../images/Path 563.svg";
import image3 from "../images/Path 565.svg";
import image4 from "../images/Group 173.svg";

function Popup() {
    return (
        <div className="body">
            <div className="container">
                <div className="heading">
                    <img alt="logo" src={image} />
                    <h3 className="title">Journey Details</h3>
                </div>

                <div className="textArea">
                    <div className="textArea1">
                        <img src={image2} alt="" />
                        <input
                            className="inputTrain"
                            type="text"
                            placeholder="Train# / name"
                        ></input>
                    </div>

                    <div className="textArea2">
                        <input
                            className="inputDest"
                            type="text"
                            placeholder="Boarding station"
                        ></input>
                        <i className="fas fa-map-marker-alt"></i>
                    </div>
                </div>

                <div className="textArea3">
                    <input
                        className="Boarding"
                        type="text"
                        placeholder="Boarding date"
                    ></input>
                    <i class="fas fa-calendar-alt"></i>
                </div>

                <div className="dateBox">
                    <h4 className="yesterday">YESTERDAY</h4>
                    <h4 className="today">TODAY</h4>
                    <h4 className="tomorrow">TOMORROW</h4>
                </div>

                <div className="orTab">
                    <div className="orBox1"></div>
                    <h5 className="or">OR</h5>
                    <div className="orBox2"></div>
                </div>

                <div className="pnrArea">
                    <img src={image2} alt="" />
                    <input
                        className=""
                        type="text"
                        placeholder="Enter PNR"
                    ></input>
                </div>
            </div>

            <div className="recommended">
                <img src={image3} alt="" />
                <h6>Recomended Search</h6>
            </div>

            <div className="container">
                <div className="cards">
                    <div className="pnrNo">
                        <h4>1424567095</h4>
                        <p>20-02-2020</p>
                    </div>

                    <div className="trainDetails">
                        <p>12625 - Trivandrum - New Delhi Kerala Express</p>
                    </div>
                </div>

                <div className="cards">
                    <div className="pnrNo">
                        <h4>1424567095</h4>
                        <p>20-02-2020</p>
                    </div>

                    <div className="trainDetails">
                        <p>12625 - Trivandrum - New Delhi Kerala Express</p>
                    </div>
                </div>

                <div className="cards">
                    <div className="pnrNo">
                        <h4>1424567095</h4>
                        <p>20-02-2020</p>
                    </div>

                    <div className="trainDetails">
                        <p>12625 - Trivandrum - New Delhi Kerala Express</p>
                    </div>
                </div>

                <div className="cards">
                    <div className="pnrNo">
                        <h4>1424567095</h4>
                        <p>20-02-2020</p>
                    </div>

                    <div className="trainDetails">
                        <p>12625 - Trivandrum - New Delhi Kerala Express</p>
                    </div>
                </div>
            </div>

            <div className="trendingSearch">
                <img src={image4} alt="" />
                <h6>Trending Search</h6>
            </div>

            <div className="container">
                <div className="trendingCard">
                    <img src={image4} alt="" />
                    <p>12625 Kerala SF Express</p>
                </div>

                <div className="trendingCard">
                    <img src={image4} alt="" />
                    <p>16792 sabari</p>
                </div>

                <div className="trendingCard">
                    <img src={image4} alt="" />
                    <p>12625 Island Express</p>
                </div>

                <div className="trendingCard">
                    <img src={image4} alt="" />
                    <p>16381 Kanyakumari Express</p>
                </div>

                <div className="trendingCard">
                    <img src={image4} alt="" />
                    <p>12218 Kerala Sampark Kranti Express</p>
                </div>

                <div className="trendingCard">
                    <img src={image4} alt="" />
                    <p>16792 palaruvi Express</p>
                </div>

                <div className="trendingCard">
                    <img src={image4} alt="" />
                    <p>16792 sabari</p>
                </div>
            </div>

            <div className="container ">
                <hr />
                <div className="footer">
                    <div className="rate">
                        <i className="fas fa-rupee-sign"></i>
                        <h4>439 |</h4>
                        <h6>3 item(s)</h6>
                        <i className="fas fa-angle-down"></i>
                        <p className="extra">Extra charges may apply</p>
                    </div>

                    <button className="proceed" type="button">
                        <h4>PROCEED</h4>
                        <p>Select Delivery Station</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Popup;
