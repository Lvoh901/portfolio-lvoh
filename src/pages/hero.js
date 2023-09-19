import React from "react";

const Hero = () => {
    return (
        <div className="container hero">
            <div className="header">
                <div className="container profile">
                    <img src={require('./images/profile01.png')} alt="profile" id="profile" width="250px"></img>
                </div>

                <div className="container d-flex flex-row justify-content-center align-items-center mt-4" id="hero">
                    <div className="name">
                        <p className="text-white text-center name1">Elvis</p>

                        <p className="text-white text-center name2">Odhiambo.</p>

                        <p className="text-white text-center mt-5 professions">
                            a Frontend <strong><u>Web Developer</u></strong> || <strong><u>Graphic</u></strong> Designer || <strong><u>GIS</u></strong> Specialist.
                        </p>

                        <div className="container d-flex justify-content-center mt-5" id="socials">
                            <img src={require('./images/gmail.png')} alt="gmail" width="50px"></img>
                            <img src={require('./images/linkedin.png')} alt="linkedin" width="50px"></img>
                            <img src={require('./images/twitter.png')} alt="twitter" width="50px"></img>
                        </div>

                        <div className="container buttons ">
                            <button type="button" className="btn btn_one text-white fw-bold" data-bs-toggle="modal" data-bs-target="#staticBackdrop" id="hire_me">Hire_Me</button>

                            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5 fw-bold" id="staticBackdropLabel">Tell me about your project
                                            </h1>
                                        </div>
                                        <div className="modal-body">
                                            <form name="contact" method="post" data-netlify="true">
                                                <div className="row g-3 mb-3">
                                                    <div className="col">
                                                        <input type="text" className="form-control" placeholder="First name"
                                                            aria-label="First name"></input>
                                                    </div>
                                                    <div className="col">
                                                        <input type="text" className="form-control" placeholder="Last name"
                                                            aria-label="Last name"></input>
                                                    </div>
                                                </div>

                                                <div className="input-group mb-3">
                                                    <label className="input-group-text" for="inputGroupSelect01">Service</label>
                                                    <select className="form-select" id="inputGroupSelect01">
                                                        <option selected>Choose...</option>
                                                        <option value="1">Web Dev.</option>
                                                        <option value="2">Graphics Design</option>
                                                        <option value="3">Photography</option>
                                                        <option value="4">GIS</option>
                                                        <option value="5">Code Review</option>
                                                        <option value="6">Script Automation</option>
                                                        <option value="7">Game Scripting/ Modding</option>
                                                        <option value="8">Data Visualization</option>
                                                        <option value="9">Tech Advice</option>
                                                    </select>
                                                </div>

                                                <div className="mb-3">
                                                    <label for="exampleInputEmail1" class="form-label fw-bold">Email address</label>
                                                    <input type="email" className="form-control" id="exampleInputEmail1"
                                                        placeholder="johndoe@gmail.com"></input>
                                                </div>

                                                <div className="mb-3">
                                                    <label for="exampleInputEmail1" class="form-label fw-bold">Phone No.</label>
                                                    <input type="tel" className="form-control" placeholder="0712345678"></input>
                                                </div>

                                                <button type="submit" className="btn btn-primary">Submit</button>
                                            </form>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;