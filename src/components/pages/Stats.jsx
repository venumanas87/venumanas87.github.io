import React from 'react'
import PhoneCard from '../PhoneCard'
import "./stats.css"
import SkillsCard from '../SkillsCard'
import AchievementsCard from '../AchievementsCard'
import round_img from "../../assets/round_image.png";
import crown_img from "../../assets/line_crown.png";

export default function Stats() {



    return (
        <>

            <section className='stats'>

                <div className="skillsRow">
                    <SkillsCard title="Kotlin" count="80" />
                    <SkillsCard title="Java" count="80" />
                    <SkillsCard title="Android Development" count="90" />
                    <SkillsCard title="Web Development" count="60" />
                    <SkillsCard title="Motion Animation" count="50" />
                </div>


                <span className='tooBig'>And What Else?</span>

                <div className="grid-container">

                    <div className="bigHolder">


                        <div className="bigCard">

                            <img className="round-img" src={round_img} />

                            <div className="textWrapper">


                                <div className='largeFont'>50+</div>

                                <span className='descText'>Freelance projects delivered</span>

                            </div>

                        </div>



                    </div>


                    <div className="smallCard-1">
                        <img className="crown-img" src={crown_img} />


                        <div className="textWrapper-sm1">


                            <div className='mediumFont'>4</div>

                            <span className='descText'>Applications published on playstore</span>

                        </div>

                    </div>


                    <div className="smallCard-2">
                        <div className="textWrapper-sm2">


                            <div className='mediumFont'>50+</div>

                            <span className='descText'>Freelance projects delivered</span>

                        </div>
                    </div>



                </div>
            </section>
        </>
    )
}