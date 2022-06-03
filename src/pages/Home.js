
import Carousel from '../components/Carousel'
import Header from '../components/Header'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';

const Home = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);

    const [searchValue, setSearchValue] = useState("");




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




    const ShowSearchProducts = () => {
        return (
            data.filter((value) => {
                if (searchValue === "") {
                    return value;
                } else if (value.title.toLowerCase().includes(searchValue.toLowerCase())) {
                    return value;
                }
            })
                .map((product) => {
                    return (
                        <>
                            <div className="col-md-4 mb-3">
                                <div class="card h-100 text-center p-4" key={product.id} >
                                    <img src={product.image} class="card-img-top" alt={product.title}
                                        height={350}
                                    />
                                    <div class="card-body">
                                        <h5 class="card-title">{product.title.substring(0, 20)}...</h5>
                                        <p class="card-text lead fw-bold " >CAD {product.price}</p>
                                        <Link to={`/products/${product.id}`} class="btn btn-outline-info">View Details</Link>

                                    </div>
                                </div>
                            </div>
                        </>)
                })
        );
    }
    return (
        <div>
            <Header />
            <Carousel />
            <div>
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-12 mb-5">

                            <hr />
                        </div>
                    </div>
                    <div>
                        <input type="text" class="form-control" placeholder="Search products" onChange={(e) => setSearchValue(e.target.value)} />
                        <br />
                    </div>
                    <br /> <br />


                    <div className="row justify-content-center">

                        {loading ? <Loader /> : <ShowSearchProducts />}
                        {/*  {ifSorted?<ShowSortProducts/>:<ShowSearchProducts/>} */}
                    </div>
                </div>
            </div>

        </div>
    )

}

export default Home