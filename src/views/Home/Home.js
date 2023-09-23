import React, { useState } from 'react';
import './Home.css';
import ProductCard from '../Product/Product';


export default function Home() {
    const [products, setProducts] = useState([
        {
            name: "Mango",
            emoji: "🍋",
            price: 330,
            bgColor:"#00bfff"
        },
        {
            name: "Banana",
            emoji: "🍌",
            price: 30,
            bgColor:" 	#e699ff"
        },
        {
            name: "Apple",
            emoji: "🍎",
            price: 90,
            bgColor:"#99ffb3"
        },
        {
            name: "Pineapple",
            emoji: "🍍",
            price: 200,
            bgColor:"#99ffe6"
        },
        {
            name: "Grapes",
            emoji: "🍇",
            price: 60,
            bgColor:"orange"
        },
        {
            name: "Strawberry",
            emoji: "🍓",
            price: 120,
            bgColor:"#ffcc99"
        }
    ]);

    return (
        <>
           <div className='card-contener'>
           {products.map((productInfo) => {
                const { name, emoji, price , bgColor} = productInfo;
                return <ProductCard name={name} emoji={emoji} price={price} bgColor={bgColor} />;
            })}
           </div>
        </>
    );
}
