import heart from '../../img/heart.svg'
import product from '../../img/product.svg'
import rating from '../../img/rating.svg'
import React from "react";
import shoppingBag from '../../img/shopping-bag.svg'
import shoppingCart from '../../img/shopping-cart.svg'

export const SearchResult = () => {
    return (
        <div className="row search-result">
            <img src={product} alt="product" />
            <div>
                <h2>Apple Watch Series 4 GPS</h2>
                <p>By <strong>Apple</strong></p>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                    a type specimen book.
                </p>
            </div>
            <div>
                <img src={rating} alt="rating icon" />
                <strong>$399</strong>
                <p>
                    <img src={shoppingCart} alt="shopping cart icon" />Free Shipping
                </p>
                <button type="button">
                    <img src={heart} alt="heart icon" />
                    WISHLIST
                </button>
                <button className="default-button" type="button">
                    <img src={shoppingBag} alt="shopping bag icon" />
                    ADD TO CART
                </button>
            </div>
        </div>
    )
}