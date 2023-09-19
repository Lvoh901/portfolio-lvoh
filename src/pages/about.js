import React from "react";

const About = () => {
    return (
        <div className="container about">
            <div className="container text-white" id="about-section">
                <h1>About Me:</h1>
                <p id="about">Value and Quality Guaranteed anytime.</p>
                <button type="button" className="btn btn_one text-white fw-bold" onclick="MoreAbout()">See More</button>
            </div>

            <div className="container text-white" id="skills">
                <h1 classname="mb-5">Skillset:</h1>

                <div className="skills">
                    <div className="skill">
                        <p className="text-center">
                            <i className="bi bi-vector-pen display-4"></i>
                        </p>

                        <p className="fw-bold text-center">01. Logo Design</p>

                        <p className="text-center">
                            Make your brand standout with an attention-provoking logo that sets you apart and creates the
                            attention you need.
                        </p>
                    </div>

                    <div className="skill">
                        <p className="text-center">
                            <i className="bi bi-code-slash display-4"></i>
                        </p>

                        <p className="fw-bold text-center">02. FrontEnd Web Dev.</p>

                        <p className="text-center">
                            Website Development that incoporates modern development systems including version control, HTML,
                            CSS, and React.JS.
                        </p>
                    </div>

                    <div className="skill">
                        <p className="text-center">
                            <i className="bi bi-person-workspace display-4"></i>
                        </p>

                        <p className="fw-bold text-center">03. Freelancing</p>

                        <p className="text-center">
                            Specializing in both research and data analysis models with both the basic and advanced systems
                            to derive both meaningful and impactful information.
                        </p>
                    </div>

                    <div className="skill">
                        <p className="text-center">
                            <i className="bi bi-globe2 display-4"></i>
                        </p>

                        <p className="fw-bold text-center">04. GIS</p>

                        <p className="text-center">
                            Work covers various aspects from data collection, analysis, representation, and periodic updates
                            of the same.
                        </p>
                    </div>
                </div>

                <div className="hours text-center" id="workhours">
                    <h4 className="fw-bold text-decoration-underline">Work Hours</h4>

                    <p id="total" className="fw-bold"></p>
                </div>

                <div className="estimate text-center">
                    <button type="button" className="btn_one costing text-white" data-bs-toggle="modal"
                        data-bs-target="#exampleModal">See My Estimate Cost</button>


                    <div className="modal fade text-black" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5 fw-bold" id="exampleModalLabel">Cost Estimator</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div className="form">
                                        <div className="page">
                                            <label for="page" className="fw-bold">Number of Pages</label>
                                            <select className="form-select" aria-label="Default select example" id="page">
                                                <option value="5000">1-Page</option>
                                                <option value="10000">2-Pages</option>
                                                <option value="15000">3-Pages</option>
                                                <option value="20000">4-Pages</option>
                                                <option value="25000">5-Pages</option>
                                            </select>
                                        </div>

                                        <div className="type">
                                            <label for="type" className="fw-bold">Type of Site</label>
                                            <select className="form-select" aria-label="Default select example" id="type">
                                                <option value="50">Static Site</option>
                                                <option value="100">Dynamic Site</option>
                                            </select>
                                        </div>

                                        <div className="feature">
                                            <label for="features" className="fw-bold">Additional Feature</label>
                                            <select className="form-select" aria-label="Default select example" id="feature">
                                                <option value="25">Non-Responsive</option>
                                                <option value="50">Responsive</option>
                                            </select>
                                        </div>

                                        <div className="duration">
                                            <label for="weeks" className="fw-bold">Choose Timeframe</label>
                                            <select className="form-select" aria-label="Default select example" id="duration">
                                                <option value="7">6-Weeks</option>
                                                <option value="14">5-Weeks</option>
                                                <option value="21">4-Weeks</option>
                                                <option value="28">3-Weeks</option>
                                                <option value="35">2-Weeks</option>
                                                <option value="42">1-Week</option>
                                            </select>
                                        </div>

                                        <button type="button" className="btn_two" onclick="totalCost()">Show Cost</button>
                                    </div>

                                    <p id="cost" style={{fontWeight: 800}}></p>
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
    );
}

export default About;




// hours button
// variables
var research = 12000;
var web = 3000;
var graphic = 2000;
var photography = 500;
var gis = 5000;

var hours = research + web + graphic + photography + gis;

let text = `${hours}+`;

// document.getElementById("total").innerHTML = text;

// // cost estimator
// function totalCost() {
//     const page = parseFloat(document.getElementById("page").value);
//     const type = parseFloat(document.getElementById("type").value);
//     const feature = parseFloat(document.getElementById("feature").value);
//     const duration = parseFloat(document.getElementById("duration").value);

//     const costEstimate = (type * feature * duration);
//     const webCost = (page + parseFloat(costEstimate)).toFixed(0);

//     document.getElementById("cost").innerText = `Ksh. ${webCost}`;
// }

// function buildOption(){
//     let cost = document.getElementById("cost").value;
//     let admitOption = (cost < 20000) ? "I will get back to You":"Let's Chat";

//     document.querySelector("p#letsWork").innerHTML = admitOption
// }