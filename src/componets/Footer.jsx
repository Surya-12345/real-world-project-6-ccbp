import React from 'react'

const Footer = () => {
    return (
        <div className="container  text-center">
            <div className="row">
                <div className="col-12">
                    <div className="SoialMediaIconConatiner  ">
                        <img className="social-icon" src="/assets/linkedin.png" alt="social-media-icon" />
                        <img className="social-icon" src="/assets/facebook.png" alt="social-media-icon" />
                        <img className="social-icon" src="/assets/instagram.png" alt="social-media-icon" />
                        <img className="social-icon social-icon-yt" src="/assets/youtube.png" alt="social-media-icon" />
                    </div>
                </div>
                <div className="col-12 mt-3 mt-md-0">
                    <p className='copywriteText '>The Pokémon Company &#169; 2023 | All Rights Reserved</p>
                </div>
            </div>

        </div>
    )
}

export default Footer