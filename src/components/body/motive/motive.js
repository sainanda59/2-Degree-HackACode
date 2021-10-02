import React from 'react'
import './motive.css';
function Motive() {
    return (
        <div id="motive">
           <div className="moto" id="moto">
        <div className="moto-main">
            <div className="moto-left">
                <h1 data-aos="zoom-in-down" data-aos-delay="300">Our Motive</h1>
                <p data-aos="zoom-in-down" data-aos-delay="400">Global warming is the increase of average world temperature as a result of what is known as the greenhouse effect. Certain gases in the atmosphere act like glass in a greenhouse, allowing sunlight through to heat the earth's surface but trapping the heat as it radiates back into space.
                It's being predicted that by the next century Earth will see a rise of nearly 5°C in the global temperature due to Global warming. <br/><br/>
                Team 2° believes this rise in temperature can be restrained to 2°C and aims to make it a reality with this project </p>
            </div>
            <div className="moto-right">
                <iframe width="400" height="250"
                src="https://www.youtube.com/embed/JfA45BKa0NQ" data-aos="zoom-in-up" data-aos-delay="500" title={"video"}/>

            </div>
        </div>
    </div>
        </div>
    )
}

export default Motive
