import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header'
import Loader from '../components/Loader';




const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);

   
    let componentMounted = true;

    useEffect(() => {

        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json()); 
                setFilter(await response.json());
                setLoading(false);
                console.log(filter)
            }
            return () => {
                componentMounted = false;
            }
        }

        getProducts();


    }, [])

 
//Filter by category

    const filterProduct = (cat) => { 
        const updatedList = data.filter((x)=>x.category === cat); 
        setFilter(updatedList)
    }
//Sort by price

    const sortProduct=(val)=>{
        if(val==="popular"){
            setFilter(data)
        }else if(val==="LTH"){
            const sortedList=[...data].sort((a, b) => a.price - b.price) 
            setFilter(sortedList)
        }else if(val==="HTL"){
            const sortedList=[...data].sort((a, b) => b.price - a.price) 
            setFilter(sortedList)
        }
       
    }

    const ShowProducts = () => {
        return(
            <>

<div className="buttons d-flex justify-content-center mb-5 pb-5">
  <button className="btn btn-block btn-outline-info me-2 " onClick={()=>setFilter(data)}>All</button>
  <button className="btn btn-block btn-outline-info me-2 " onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
  <button className="btn btn-block btn-outline-info me-2 " onClick={()=>filterProduct("women's clothing")}>
    Women's Clothing
  </button>
  <button className="btn btn-block btn-outline-info me-2 " onClick={()=>filterProduct("jewelery")}>Jewelery</button>
  <button className="btn btn-block btn-outline-info me-2 " onClick={()=>filterProduct("electronics")}>Electronic</button>

</div> 
        
        { filter.map((product)=>{
           return(
          <>
          <div className="col-md-3 mb-4">
          <div class="card h-100 text-center p-4" key={product.id} >
  <img src={product.image} class="card-img-top" alt={product.title}
  height={300}
  />
  <div class="card-body">
    <h5 class="card-title">{product.title.substring(0,20)}...</h5>
    <p class="card-text lead fw-bold " >CAD {product.price}</p>
    <Link to={`/products/${product.id}`} class="btn btn-outline-info">View Details</Link>
    
  </div>
</div>
</div>
          </>)
     })}

</>
 );
       
    };

    return (
        <div>
            <Header />
            <div>
    <div className="container my-5 py-5">
        <div className="row">
             <div className="col-12 mb-5">
                 <h1 className="display-6 fw-bolder
                 text-center">Popular Products</h1>
                 <hr />
            </div>
        </div>
       
        <div>


<select class="form-select" onChange={(e)=>sortProduct(e.target.value)}>
<option value="popular">Popularity</option>
    <option value="LTH" >Price -
      Lowest to Highest
    </option>
    <option value="HTL" >Price -
    Highest to Lowest
    </option>
</select>

<br />
</div>
<br /> <br />
        <div className="row justify-content-center">
             {loading ? <Loader/>:<ShowProducts/>}
        </div>
    </div>
</div>
           
           </div>
    )
}

export default Products

