import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQrcode } from "@fortawesome/free-solid-svg-icons";
import Main from "../components/main";
import Hero from "../components/hero";
import ContactInfo from "../components/contact-info";
import "../styles/index.scss";

const IndexPage = () => {
    const [qrOpenCode, setQrOpen] = useState(false);

    const handleToggle = () => {
        setQrOpen((prev) => !prev);
    };

    // const closeQrCode = () => {
    //     setQrOpen(false);
    // };

    return (
        <Main pageTitle="Home">
            <Hero id="home">
                <div className="welcome-container">
                    <h1>Hello.</h1>
                    <hr />
                    <p>
                        I'm Jordan. I am a computer science student, and the
                        purpose of this site is to experiment with creating a
                        website for myself and to show some of my work. Nice to
                        meet you!
                    </p>
                </div>
                <div className="card-container">
                    <button className="button-wrapper" onClick={handleToggle}>
                        <div role="button" className="icon-wrapper">
                            <FontAwesomeIcon icon={faQrcode} className="icon" />
                        </div>
                    </button>
                    {qrOpenCode ? (
                        <StaticImage
                            src="../images/qr-code.png"
                            alt="QR code with contact information"
                            className="qr-code-wrapper"
                            imgClassName="qr-code"
                        />
                    ) : (
                        <StaticImage
                            src="../images/profile_picture.jpg"
                            alt="Jordan Tan"
                            className="profile-picture-wrapper"
                            imgClassName="profile-picture"
                        />
                    )}
                    <div className="personal-info-container">
                        <div className="name-container">
                            <h2>Jordan Tan</h2>
                            <h3>Student</h3>
                        </div>
                        <ContactInfo />
                    </div>
                </div>
            </Hero>
        </Main>
    );
};

export default IndexPage;
