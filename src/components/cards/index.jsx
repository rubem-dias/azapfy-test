import React from 'react'
import '../../assets/style/card.css'


export default function Card(props) {
    return (
        <>
         <div className="container card">
            <div class="card">
                <img src={props.image}></img>
            </div>
         </div>
        </>
    )
}