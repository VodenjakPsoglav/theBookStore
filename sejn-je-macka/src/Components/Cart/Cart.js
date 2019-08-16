import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem,addQuantity,subtractQuantity} from '../../Store/actions/cartActions'
import Recipe from './Recipe'
import './Cart.scss'

class Cart extends Component{

    //to remove the item completely
    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }
    render(){
              
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                       
                        <li key={item.id}>
                            <div className='cartItem'>
                                    <div className='cartItemImg'> 
                                        <img  src={item.imgURL} alt={item.img} />
                                    </div>
                                
                                    <div>
                                        <span>{item.title}</span>
                                        <p>{item.desc}</p>
                                        <p><b>Price: {item.price}$</b></p> 
                                        
                                    <div className='cartPandQ' >
                                            
                                            <Link to="/cart" style={{textDecoration:'none'}} onClick={()=>{this.handleAddQuantity(item.id)}}>AddQuantity</Link>
                                            
                                            <p>
                                            <b>Quantity: {item.quantity}</b> 
                                            </p>
                                            <Link to="/cart"><i className="fa fa-minus-square" onClick={()=>{this.handleSubtractQuantity(item.id)}}>RemoveQuanitiy</i></Link>
                                        </div>
                                        <button  onClick={()=>{this.handleRemove(item.id)}}>Remove the item form the cart</button>
                                    </div>
                            </div>    
                            </li> 
                             
                             
                         
                    )
                })
            ):

             (
                <h2>Cart is empty</h2>
             )
       return(
            <div className="cartContainer">
                <div className="cart">
                    <h3>You have ordered:</h3>
                    <ul className="collectionCart">
                        {addedItems}
                    </ul>
                </div> 
                <Recipe />          
            </div>
       )
    }
}


const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        //addedItems: state.addedItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)