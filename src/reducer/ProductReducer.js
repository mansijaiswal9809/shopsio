 const ProductReducer=(state,action)=>{
    if(action.type==='loading'){
        return {...state, Product_loading:true}
    }
    if(action.type==='GET_PRODUCTS_SUCCESS'){
        const featurePro= action.payload.filter((product)=>(
            product.featured===true
        ))
        return {...state, Product_loading:false, Featured:featurePro, All:action.payload }
    }
    if(action.type==='All'){
     return {...state,Category:[...action.payload]}   
    }
    if(action.type==="Men"){
        const menData= action.payload.filter((product)=>product.category==="Men")
        return {...state, Category:menData }
    }
    if(action.type==="Women"){
        const womenData= action.payload.filter((product)=>product.category==="Women")
        return {...state, Category:womenData }
    }
    if(action.type==="Home"){
        const homeData= action.payload.filter((product)=>product.category==="Home & Decors")
        return {...state, Category:homeData }
    }
    if(action.type==="Single"){
        const single= state.All.find((product)=>product.id===action.payload)
        return {...state, singleProduct: single}
    }
    return state
} 
export default ProductReducer