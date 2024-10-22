import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/js/dist/modal'

export function Ecommerce(){
    const [category,setCategory] = useState([])
    const [products,setProducts] = useState([])
    const [cartCount,setCartCount] = useState(0)
    const [cartItems,setCartItems] = useState([])
    const [total,setTotal] = useState(0)

   
    function getCategories(){
        axios.get('https://fakestoreapi.com/products/categories')
        .then(response=>{
            response.data.unshift('all')
            setCategory(response.data)
    })
    }
    function displayProducts(url){
    
        
        axios.get(url)
        .then(res=>
            setProducts(res.data)
        )
    }
    function categoryChangeFun(e){
        if(e.target.value==="all"){
            displayProducts('https://fakestoreapi.com/products')
        }
        else{
            displayProducts(`https://fakestoreapi.com/products/category/${e.target.value}`)
        }
    }
    function navButtonsClick(categoryName){
        if(categoryName === "all"){
            displayProducts('https://fakestoreapi.com/products')
        }
        else{
            displayProducts(`https://fakestoreapi.com/products/category/${categoryName}`)
        }

    }
    function addToCart(item){
        
        cartItems.push(item)
        
        alert(`${item.title} \nAdded to cart`)
        setCartCount(cartItems.length)
        console.log(item)

    }
    useEffect(()=>{

        getCategories()
        
        displayProducts('https://fakestoreapi.com/products')
    },[])
    
    return(
        <div className='d-flex flex-column'>
            <header className="bg-secondary p-3 text-white d-flex justify-content-between align-items-center">
                <div>
                    <h1 className=''>SHOPPING.</h1>
                </div>
                <div>
                    <span className='px-2 mx-2 btn btn-light' onClick={()=>navButtonsClick('all')} >Home</span>
                    <span className='px-2 mx-2 btn btn-light' onClick={()=>navButtonsClick('electronics')}>Electronics</span>
                    <span className='px-2 mx-2 btn btn-light' onClick={()=>navButtonsClick(`men's clothing`)}>Men's Fashion</span>
                    <span className='px-2 mx-2 btn btn-light' onClick={()=>navButtonsClick('jewelery')}>Jewellery</span>
                    <span className='px-2 mx-2 btn btn-light' onClick={()=>navButtonsClick(`women's clothing`)}>Women's Fashion</span>
                </div>
                <div>
                    <button type='button' data-bs-toggle="modal" data-bs-target="#cart" className='bi bi-cart4 btn btn-warning p-2 rounded position-relative'>
                        <span className='bg-danger badge text-white rounded rounded-circle position-absolute'>{cartCount}</span>    
                    </button>
                    <div className='modal fade' id="cart">
                        <div className='modal-dialog'>
                            <div className='modal-content'>
                                <div className='modal-header text-primary'>
                                    <h5><b>Cart Items</b></h5>
                                    <button className='btn btn-close' data-bs-dismiss="modal"></button>
                                </div>
                                <div className='modal-body text-secondary'>
                                    
                                    {
                                        cartItems.map((ite,i)=>
                                        
                                               <dl key={i} className='d-flex justify-content-between align-items-center'>
                                                 <dd className='w-25'>{ite.title}</dd>
                                                 <dt >${ite.price}</dt>
                                                 <dt><img src={ite.image} width={'50px'}/></dt>
                                               </dl>
                                               
                                        )
                                        
                                    }
                                    
                                </div>
                                <div className='modal-footer text-secondary d-flex justify-content-between'>
                                    <p>Total Price : <b className='text-primary'>${cartItems.reduce((total,itm)=>total+itm.price,0)}</b></p>
                                        <button data-bs-dismiss="modal" className='btn btn-secondary'>Ok</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </header>
            <main className='row m-3'>
                <div className='col-2'>
                    <label className='fs-5'>Select Category</label>
                <select className='rounded rounded-3 form-select' onChange={categoryChangeFun}>
                    {
                        category.map(cate=>
                            <option key={cate} value={cate} >{cate.toUpperCase()}</option>
                        )
                    }
                </select>
                </div>
                <div className='col-10 d-flex flex-wrap overflow-auto' style={{'height':'500px'}}>
                    {
                        products.map(item=>
                            <div className='card d-flex mx-2' key={item.id} style={{'width':'350px'}}>
                                
                                <img src={item.image} className='m-3' width={'120px'}/>
                                <div className='card-body' >
                                    <h5 className='py-2'>{item.title}</h5>
                                    <span className='bg-success text-white p-1 rounded'><span>{item.rating.rate} </span>
                                    <span className='bi bi-star-fill'></span></span>
                                    <span className='px-1'>({item.rating.count})</span>
                                    <div className='my-2 d-flex'>
                                        <div className='fs-5'>Price: </div> <div className='h4 mx-2'> {item.price.toLocaleString('en-us',{style:'currency',currency:'USD'})}</div>
                                    </div>
                                </div>
                                <div className='card-footer'>
                                    <button className='btn btn-warning bi bi-cart4' onClick={()=>addToCart(item)}>Add Cart</button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </main>
          
        </div>
    )
}