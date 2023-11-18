
import './phone_card.css'

export default function PhoneCard(props){


    return(
        <>
        <div className="phoneCard">
            <h2 className='red'>{props.name}</h2>
        </div>
        </>
    )
}