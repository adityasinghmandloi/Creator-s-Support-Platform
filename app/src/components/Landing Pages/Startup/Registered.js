import React, {useState, useEffect} from "react";
import "./Registered.css";
import Navbar from "../Navbar";

const Registered = () => {
    return (
        <>
        <Navbar />
            <div className="registered__main__container">
                <div className="container">
                    <h1 className="text-center my-3 startup__heading">For Creators</h1>
                    <div className="registered my-5">
                        <div className="registered__heading text-center">
                            GETTING STARTED AS A CREATOR
                        </div>
                        <div className="registered__container">
                            <div className="timeline my-5">
                                <div className="section left">
                                    <i className="icon fa fa-home"></i>
                                    <div className="content">
                                        <p>
                                            Define your passion and identify your target supporters.
                                        </p>
                                    </div>
                                </div>
                                <div className="section right">
                                    <i className="icon fa-solid fa-shield"></i>
                                    <div className="content">
                                        <p>
                                            Access the resources section to learn how to engage effectively.
                                        </p>
                                    </div>
                                </div>
                                <div className="section left">
                                    <i className="icon fa fa-user"></i>
                                    <div className="content">
                                        <p>
                                            Build an inspiring profile to share your creative journey.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="registered my-5">
                        <div className="registered__heading text-center">
                            REGISTER AS A CREATOR
                        </div>
                        <div className="registered__container">
                            <div className="timeline my-5">
                                <div className="section left">
                                    <i className="icon fa fa-home"></i>
                                    <div className="content">
                                        <p>
                                            Complete the registration form with your details and set clear goals.
                                        </p>
                                    </div>
                                </div>
                                <div className="section right">
                                    <i className="icon fa-solid fa-shield"></i>
                                    <div className="content">
                                        <p>
                                            Undergo a verification process to validate your profile.
                                        </p>
                                    </div>
                                </div>
                                <div className="section left">
                                    <i className="icon fa fa-user"></i>
                                    <div className="content">
                                        <p>
                                            Share your unique link with potential supporters.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <h1 className="text-center my-3 startup__heading">For Supporters</h1>
                    <div className="registered my-5">
                        <div className="registered__heading text-center">
                            HOW TO SUPPORT CREATORS
                        </div>
                        <div className="registered__container">
                            <div className="timeline my-5">
                                <div className="section left">
                                    <i className="icon fa fa-home"></i>
                                    <div className="content">
                                        <p>
                                            Browse through the basics in the resources section.
                                        </p>
                                    </div>
                                </div>
                                <div className="section right">
                                    <i className="icon fa-solid fa-shield"></i>
                                    <div className="content">
                                        <p>
                                            Register or log in to start supporting creators.
                                        </p>
                                    </div>
                                </div>
                                <div className="section left">
                                    <i className="icon fa fa-user"></i>
                                    <div className="content">
                                        <p>
                                            Choose a creator whose work resonates with you.
                                        </p>
                                    </div>
                                </div>
                                <div className="section right">
                                    <i className="icon fa-solid fa-shield"></i>
                                    <div className="content">
                                        <p>
                                            Visit their profile to learn more about their vision.
                                        </p>
                                    </div>
                                </div>
                                <div className="section left">
                                    <i className="icon fa fa-user"></i>
                                    <div className="content">
                                        <p>
                                            Select a support amount and complete your contribution.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Registered;
