import axios from 'axios'
import { useState, useEffect } from 'react';



export default function HeroSection() {
    const [products, setProducts] = useState([])
    const [message, setMessage] = useState('')

    useEffect(() => {
        async function fetchProducts() {
                    try{
                const response = await axios.get("https://e-commerce-api-main-wywgq5.laravel.cloud/api/products?page=10");
                if (response.data.status === 'success') {
                        setProducts(response.data.data.data)
                }
            }catch(error){
                setMessage(error.response?.data?.message || "Error fetching product")

            }
            
        }
        fetchProducts()
    }, [])

    return (
        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {message && <p className="text-red-500">{message}</p>}
            {products.length > 0 ? (
              products.map((product, index) => (
                <div
                  key={index}
                  className=" rounded-xl overflow-hidden shadow hover:shadow-lg transition"
                >
                  <img
                    src={product.image || "https://via.placeholder.com/150"}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-lg">{product.name}</h3>
                    <p className="text-gray-600">{product.description}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>Loading products...</p>
            )}
          </div>
        </div>
      );
}