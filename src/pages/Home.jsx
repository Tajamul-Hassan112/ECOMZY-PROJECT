import React, { useEffect } from 'react'
import { useState } from 'react';
import Spinner from '../components/Spinner';
import Product from '../components/Product';
function Home() {
    const API_URL = "https://fakestoreapi.com/products";
   const [loading,setLoading]=useState(false)
   const [posts, setPosts] = useState([]);

   async function fetchProductData() {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setPosts(data); // Update the state with the fetched data
    } catch (error) {
      console.log("error in fetching ", error);
    } finally {
      setLoading(false); // Ensure setLoading is set to false whether successful or not
    }
  }
  
   useEffect(()=>{
    fetchProductData();
   },[])
   
   return (
    <div>
      {loading ? (
        <Spinner />
      ) : posts.length > 0 ? (
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {posts.map((post) => (
            <Product key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <p>No Data Found</p>
        </div>
      )}
    </div>
  );
  
}

export default Home
