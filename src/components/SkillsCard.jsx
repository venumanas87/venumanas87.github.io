
import ProgressBar from "./ProgressBar"
import "./slillscard.css"

export default function SkillsCard(props){

    return(
        <>
        <div className="skill">
           <div className="title">{props.title}</div> 
           <h5 className="redFix">{props.count}%</h5>
           <ProgressBar bgcolor="purple" progress={props.count}  height={20}/>
           <br/>
        </div>
        </>
    )

}