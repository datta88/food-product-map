import React from 'react';
import './Product.css';

 export const productCard = ({name , emoji, price, bgColor}) => {
    return(
        <>
            <div className='Product-contener' style={{backgroundColor:bgColor}}>
                <h2>{name}</h2>
                <h3><span className='emoji'>{emoji}</span></h3>
                <h4>RS:{price}</h4>
            </div>
        </>
    )
}
 export default productCard