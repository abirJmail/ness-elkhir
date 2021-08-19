import React from 'react'
import "./About.css"

const About = () => {
    return (
        <div>
            <h1 className="prgh1">Facts About Blood and Blood Types</h1>
            <div  className="prgbd">
                <h2>How Blood Type Is Determined And Why You Need To Know</h2>
                <img className="imgbld" src="http://www.cnts.tn/media/k2/items/cache/542390225756f78888142d54f3d17e01_M.jpg" alt="imgblood"/>
                <p>Blood types are determined by the presence or absence of certain antigens – substances that can trigger an immune response if they are foreign to the body.  Since some antigens can trigger a patient's immune system to attack the transfused blood, safe blood transfusions depend on careful blood typing and cross-matching. Do you know what blood type is safe for you if you need a transfusion?</p>
                <p>There are four major blood groups determined by the presence or absence of two antigens – A and B – on the surface of red blood cells. In addition to the A and B antigens, there is a protein called the Rh factor, which can be either present (+) or absent (–), creating the 8 most common blood types (A+, A-,  B+, B-,  O+, O-,  AB+, AB-).</p>
            </div>
            <div  className="prgbd" >
                <h2>Blood Types and Transfusion</h2>
                <img className="imgbld" style={{width:"60%",height:"30%"}} src="https://www.moh.gov.sa/HealthAwareness/EducationalContent/PublicHealth/PublishingImages/PublicHealthPages017.PNG" alt="imgblood"/>
                <p>There are very specific ways in which blood types must be matched for a safe transfusion. The right blood transfusion can mean the difference between life and death. </p>
                <p>Also, Rh-negative blood is given to Rh-negative patients, and Rh-positive or Rh-negative blood may be given to Rh-positive patients. The rules for plasma are the reverse. </p>
                <h3>The universal red cell donor has Type O negative blood.</h3>
            </div>
            <div  className="prgbd">
                <h2>How Is My Blood Type Determined?</h2>
                <img className="imgbld"  src="https://www.seha.ae/assets/uploads/2021/05/image-400x263.jpg" alt="imgblood"/>
                <p>It’s inherited. Like eye color, blood type is passed genetically from your parents. Whether your blood group is type A, B, AB or O is based on the blood types of your mother and father.</p>
            </div>
            <div  className="prgbd">
                <h2>What are the rarest blood types?</h2>

                <p>There are eight main blood types but some are rarer than others. The list below shows the percentage of donors with each blood type:</p>
                <ul className="bloodli">
                    <il><h3>O positive: 35% </h3></il>
                    <li><img className="imgbld" src="https://www.blood.co.uk/remote.axd/nhsbtdbe.blob.core.windows.net/umbraco-assets-corp/15070/29720-000np-know-your-type-web-buttons-400px-x-170px-blood-type-oplus.png?anchor=center&mode=crop&width=600&height=255&rnd=131925388320000000&quality=70" alt="imgblood"/></li>
                    <hr/><hr/>
                    <il><h3>O negative: 13%</h3> </il>
                    <li><img className="imgbld" src="https://www.blood.co.uk/remote.axd/nhsbtdbe.blob.core.windows.net/umbraco-assets-corp/15069/29720-000np-know-your-type-web-buttons-400px-x-170px-blood-type-o.png?anchor=center&mode=crop&width=600&height=255&rnd=131925388310000000&quality=70" alt="imgblood"/></li>
                    <hr/><hr/>
                    <il><h3>A positive: 30%</h3> </il>
                    <li><img className="imgbld" src="https://www.blood.co.uk/remote.axd/nhsbtdbe.blob.core.windows.net/umbraco-assets-corp/15064/29720-000np-know-your-type-web-buttons-400px-x-170px-blood-type-aplus.png?anchor=center&mode=crop&width=600&height=255&rnd=131925388270000000&quality=70" alt="imgblood"/></li>
                    <hr/><hr/>
                    <il><h3>A negative: 8% </h3></il>
                    <li><img className="imgbld" src="https://www.blood.co.uk/remote.axd/nhsbtdbe.blob.core.windows.net/umbraco-assets-corp/15063/29720-000np-know-your-type-web-buttons-400px-x-170px-blood-type-a.png?anchor=center&mode=crop&width=600&height=255&rnd=131925388260000000&quality=70" alt="imgblood"/></li>
                    <hr/><hr/>
                    <il><h3>B positive: 8%</h3> </il>
                    <li><img  className="imgbld" src="https://www.blood.co.uk/remote.axd/nhsbtdbe.blob.core.windows.net/umbraco-assets-corp/15068/29720-000np-know-your-type-web-buttons-400px-x-170px-blood-type-bplus.png?anchor=center&mode=crop&width=600&height=255&rnd=131925388300000000&quality=70" alt="imgblood"/></li>
                    <hr/><hr/>
                    <il><h3>B negative: 2% </h3></il>
                    <li><img  className="imgbld" src="https://www.blood.co.uk/remote.axd/nhsbtdbe.blob.core.windows.net/umbraco-assets-corp/15067/29720-000np-know-your-type-web-buttons-400px-x-170px-blood-type-b.png?anchor=center&mode=crop&width=600&height=255&rnd=131925388290000000&quality=70" alt="imgblood"/></li>
                    <hr/><hr/>
                    <il><h3>AB positive: 2%</h3> </il>
                    <li><img  className="imgbld" src="https://www.blood.co.uk/remote.axd/nhsbtdbe.blob.core.windows.net/umbraco-assets-corp/15066/29720-000np-know-your-type-web-buttons-400px-x-170px-blood-type-abplus.png?anchor=center&mode=crop&width=600&height=255&rnd=131925388280000000&quality=70" alt="imgblood"/></li>
                    <hr/><hr/>
                    <il><h3>AB negative: 1% </h3></il>
                    <li><img  className="imgbld" src="https://www.blood.co.uk/remote.axd/nhsbtdbe.blob.core.windows.net/umbraco-assets-corp/15065/29720-000np-know-your-type-web-buttons-400px-x-170px-blood-type-ab.png?anchor=center&mode=crop&width=600&height=255&rnd=131925388280000000&quality=70" alt="imgblood"/></li>
                    <hr/><hr/>

                </ul>
            </div>
        </div>
    )
}

export default About
