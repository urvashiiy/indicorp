import React, { useState, useEffect } from 'react';

const ProductListing = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await fetch('http://localhost:3000/Tools/getall');
    console.log(res.status);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setProducts(data);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const displayProducts = () => {
    return products.map((item) => (
      <div className="card m-5" style={{ width: "30rem",height:'auto',boxShadow:'#292986 0px 0px 8px 8px', }} key={item.id}>
        <img 
          className='card-img-top mt-4'  
          src={`http://localhost:3000/${item.image}`} 
          alt="img" 
          style={{ height: '200px', maxwidth: '230px', objectFit:'contain',justifyContent:'center',alignContent:'center'  }} 
        />
        <div className="card-body">
        <h4 className='mt-3 text-dark text-center'>{item.name}</h4>
          <p className='card-text mt-3 text-dark'>{item.description}</p>
          <button className=' buton btn ' style={{backgroundColor:'#292986',color:'white'}}>Buy </button>
        </div>
      </div>
    ));
  };

  return (
    <div style={{background:'#C0D6E8'}}>
      <header className='bg-body-tertiary' >
        <div className='container py-5'>
          <h4 className='text-center fw-bold' style={{color:'#292986',}}>All Products</h4>
          <input 
            type="text" 
            placeholder='Search Product' 
            className='form-control w-75 m-auto' 
          />
        </div>
      </header>
      <div className='container mt-5'>
        <div className='row mt-5 p-5'>
          {displayProducts()}
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
