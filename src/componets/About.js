import React, { useState } from 'react'

export default function About() {
    const [mystyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })
    const [btnText,setBtnText] = useState("Enable Dark Mode")
    const toggleStyle = () => 
    {
        if (mystyle.color === 'White'){
            setMyStyle({
                color: 'white',
                backgroundColor: 'black'
            })
            setBtnText("Enable Light Mode")
        }
        else {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtnText("Enable Dark Mode")
        }
    }
            return (
                <>
                    <div className="container my-5" style={mystyle}>
                        <h1 className='my-5'>About Us</h1>
                        <div class="accordion" id="accordionExample" style={mystyle}>
                            <div class="card">
                                <div className="card-header" id="headingOne">
                                    <h2 class="mb-0">
                                        <button style={mystyle} className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            please add some contect
                                        </button>
                                    </h2>
                                </div>

                                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div className="card-body" style={mystyle}>
                                        Some placeholder content for the first accordion panel. This panel is shown by default, thanks to the <code>.show</code> class.
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header" id="headingTwo">
                                    <h2 class="mb-0">
                                        <button style={mystyle} className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            please add more content
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                    <div class="card-body" style={mystyle}>
                                        Some placeholder content for the second accordion panel. This panel is hidden by default.
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingThree">
                                    <h2 className="mb-0">
                                        <button style={mystyle} className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Collapsible Group Item #3
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                    <div class="card-body" style={mystyle}>
                                        And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by default.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <button className='my-3 btn btn-primary' onClick={toggleStyle} >{btnText}</button>
                    </div>
            </>
            )}