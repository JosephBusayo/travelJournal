import React from 'react';

export default function Location(props){
    return(
        <section className="location">
            <div >
                <img src={`../images/${props.item.image}`} alt="location image" className="location-image"/>
            </div>

            <div>
                <p>{props.item.location} <a href={props.item.googleMapsUrl}>View on Google Maps</a> </p>
                <h2>{props.item.title}</h2>
                <p>{props.item.startDate} - {props.item.endDate}</p>
                <p>{props.item.description}</p>
            </div>
        </section>
    )
}