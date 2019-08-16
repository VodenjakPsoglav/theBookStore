import { ADD_TO_CART,
    REMOVE_ITEM,
    SUB_QUANTITY,
    ADD_QUANTITY,
    ADD_SHIPPING,
    SUB_SHIPPING,
    SET_BOOKS,
    FETCH_BOOKS_ERR} from '../actions/action-types/cart-actions'


const initState = {
    items:
    [
        {id:1,title:'Winter body game ', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:10,imgURL:"https://picsum.photos/id/96/200/2504",category:"lifestyle"},
        {id:2,title:'This is the Book', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:11,imgURL:"https://picsum.photos/id/95/200/250"},
        {id:3,title:'Vans hands dans mans bans runs cans', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:12,imgURL:"https://picsum.photos/id/70/200/250",category:"drama"},
        {id:4,title:'White Little Things', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:14,imgURL:"https://picsum.photos/id/932/200/250",category:"adventure"},
        {id:5,title:'Cropped-sho', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:11,imgURL:"https://picsum.photos/id/77/200/250",category:"lifestyle"},
        {id:6,title:'Blues Last One', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:21,imgURL:"https://picsum.photos/id/558/200/250",category:"lifestyle"},
        {id:7,title:'Happy End Somewhere', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:13,imgURL:"https://picsum.photos/id/324/200/250",category:"lifestyle"},
        {id:8,title:'ACC is the thing', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:51,imgURL:"https://picsum.photos/id/8/200/250",category:"drama"},
        {id:91,title:'Santa is here', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:8,imgURL:"https://picsum.photos/id/11/200/250",category:"adventure"},
        {id:92,title:'In the garden', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:17,imgURL:"https://picsum.photos/id/153/200/250",category:"drama"},
        {id:93,title:'Viva Las Vegas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:12,imgURL:"https://picsum.photos/id/10/200/250",category:"lifestyle"},
        {id:94,title:'How to basic', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:31,imgURL:"https://picsum.photos/id/13/200/250",category:"horror"},
        {id:95,title:'List of a 5yo trees', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:33,imgURL:"https://picsum.photos/id/143/200/250",category:"lifestyle"},
        {id:96,title:'Rosa', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:13,imgURL:"https://picsum.photos/id/695/200/250",category:"lifestyle"},
        {id:97,title:'Angel with wings', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:3,imgURL:"https://picsum.photos/id/338/200/250",category:"horror"},
        {id:98,title:'Angel with wings 2', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:5,imgURL:"https://picsum.photos/id/266/200/250",category:"horror"},
     
    ],
    addedItems:[
       
        
    ],
    total: 0,
    error:false

}
const cartReducer= (state = initState,action)=>{
   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1 ;
            
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }

    if(action.type=== ADD_SHIPPING){
          return{
              ...state,
              total: state.total + 6
          }
    }

    if(action.type=== SUB_SHIPPING){
        return{
            ...state,
            total: state.total - 6
        }
  }
    if(action.type===SET_BOOKS){
        return{
            ...state,
            items:action.items,
        }
    }
    if(action.type===FETCH_BOOKS_ERR){
        return{
            ...state,
            error:true,
        }
    }
  
  
  
    else{
    return state
    }
    
}

export default cartReducer