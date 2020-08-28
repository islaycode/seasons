import './SeasonDisplay.css';
import React from 'react'

const seasonConfig = {
    summer: {
        text: "It's Summer.Let's hit the beach!",
        iconName: 'sun'
    },
    winter: {
        text: "Its Cold out there!",
        iconName: 'snowflake'
    }
}
const getSeason =(lat, month)=>{
    if(month> 2 && month <9){
        return lat > 0 ? 'summer' : 'winter'; 
    } else{
        return lat < 0 ? 'winter' : 'summer';
    }
}
export const SeasonDisplay = (props) => {   

    const season = getSeason(props.lat, new Date().getMonth()); 
    //console.log(season)
    const  {text,iconName} = seasonConfig[season];
    return(
        <div className={`season-display ${season}`}>
            <i className={`icon-left ${iconName} massive icon`}/>
            <h1>{text}</h1>
            <i className={`icon-right ${iconName} massive icon`}/>
        </div>
    )
}

export default SeasonDisplay;