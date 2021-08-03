import {connect} from 'react-redux'
// import Header from '../components/header/Header'
import { addToCart } from './actions/Actions'
import ProductDisplay from '../components/product/ProductDisplay'


const mapStateToProps = state =>({
    data:state.CardItems
})

const mapDispatchToProps = dispatch =>({
    addToCartHandler:data=>dispatch(addToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(ProductDisplay);