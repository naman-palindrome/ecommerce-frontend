import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import Message from '../components/Message'
import {Row,Column,ListImage,Image,Form,Button,Card} from 'react-bootstrap'
import {addToCart} from '../actions/cartActions'
import {Link} from 'react-router-dom'


function CartScreen({match,location,history}) {
    const productId=match.params.id;
    
    return (
        <div>
            CART
        </div>
    )
}

export default CartScreen
