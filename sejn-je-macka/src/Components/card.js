import React from 'react'
import './card.scss'

const card = (props) => {
    return (
        <div className="cardWrap">
             <div className="cardPicture">
                 <div className="cardImg" style={{background:'url('+ props.imgURL +')'}}>
                   
                </div>
             <div className="cardBttm">
                        <div className="cardTitle"><p>{props.title}</p></div>
                        <div className="cardLeftButton"><button>INFO</button></div>
                        <div className="cardRightButton" onClick={props.cartClick}><button>{props.price} $$$<i className="fa fa-cart-plus" aria-hidden="true"> </i>
</button></div>
                     </div>
            </div>
            
        </div>
    )
}

export default card
