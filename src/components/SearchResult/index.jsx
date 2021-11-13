import heart from '../../img/heart.svg'
import product from '../../img/product.svg'
import rating from '../../img/rating.svg'
import React from "react";
import shoppingBag from '../../img/shopping-bag.svg'
import shoppingCart from '../../img/shopping-cart.svg'

export const SearchResult = () => {
    return (
        <div className="row search-result">
            <div className="search-result__product d-flex">
                <img src={product} alt="product" />
                <div className="search-result__product__description d-flex flex-column justify-content-center">
                    <h2>Apple Watch Series 4 GPS</h2>
                    <span>By <strong>Apple</strong></span>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                        a type specimen book.
                    </p>
                </div>
                <div className="search-result__product__options d-flex flex-column align-items-center justify-content-center">
                    <img className="align-self-end" src={rating} alt="rating icon" />
                    <strong>$399</strong>
                    <p className="d-flex align-items-center justify-content-center">
                        <img src={shoppingCart} alt="shopping cart icon" />Free Shipping
                    </p>
                    <button className="search-result__product__options__button d-flex align-items-center justify-content-center" type="button">
                        <img src={heart} alt="heart icon" />
                        WISHLIST
                    </button>
                    <button className="default-button d-flex align-items-center justify-content-center" type="button">
                        <img src={shoppingBag} alt="shopping bag icon" />
                        ADD TO CART
                    </button>
                </div>
            </div>
            <div className="search-result__product d-flex">
                <img src={product} alt="product" />
                <div className="search-result__product__description d-flex flex-column justify-content-center">
                    <h2>JBL Speaker</h2>
                    <span>By <strong>JBL</strong></span>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                        a type specimen book.
                    </p>
                </div>
                <div className="search-result__product__options d-flex flex-column align-items-center justify-content-center">
                    <strong>$199</strong>
                    <p className="d-flex align-items-center justify-content-center">
                        <img src={shoppingCart} alt="shopping cart icon" />Free Shipping
                    </p>
                    <button className="search-result__product__options__button d-flex align-items-center justify-content-center" type="button">
                        <img src={heart} alt="heart icon" />
                        WISHLIST
                    </button>
                    <button className="default-button d-flex align-items-center justify-content-center" type="button">
                        <img src={shoppingBag} alt="shopping bag icon" />
                        ADD TO CART
                    </button>
                </div>
            </div>
            <div className="search-result__product d-flex">
                <img src={product} alt="product" />
                <div className="search-result__product__description d-flex flex-column justify-content-center">
                    <h2>Apple iPhone X 128GB</h2>
                    <span>By <strong>Apple</strong></span>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                        a type specimen book.
                    </p>
                </div>
                <div className="search-result__product__options d-flex flex-column align-items-center justify-content-center">
                    <strong>$899</strong>
                    <p className="d-flex align-items-center justify-content-center">
                        <img src={shoppingCart} alt="shopping cart icon" />Free Shipping
                    </p>
                    <button className="search-result__product__options__button d-flex align-items-center justify-content-center" type="button">
                        <img src={heart} alt="heart icon" />
                        WISHLIST
                    </button>
                    <button className="default-button d-flex align-items-center justify-content-center" type="button">
                        <img src={shoppingBag} alt="shopping bag icon" />
                        ADD TO CART
                    </button>
                </div>
            </div>
            <div className="search-result__product d-flex">
                <img src={product} alt="product" />
                <div className="search-result__product__description d-flex flex-column justify-content-center">
                    <h2>Beats Headphones</h2>
                    <span>By <strong>Beats</strong></span>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                        a type specimen book.
                    </p>
                </div>
                <div className="search-result__product__options d-flex flex-column align-items-center justify-content-center">
                    <strong>$459</strong>
                    <p className="d-flex align-items-center justify-content-center">
                        <img src={shoppingCart} alt="shopping cart icon" />Free Shipping
                    </p>
                    <button className="search-result__product__options__button d-flex align-items-center justify-content-center" type="button">
                        <img src={heart} alt="heart icon" />
                        WISHLIST
                    </button>
                    <button className="default-button d-flex align-items-center justify-content-center" type="button">
                        <img src={shoppingBag} alt="shopping bag icon" />
                        ADD TO CART
                    </button>
                </div>
            </div>
            <div className="search-result__product d-flex">
                <img src={product} alt="product" />
                <div className="search-result__product__description d-flex flex-column justify-content-center">
                    <h2>Apple Watch Series 4 GPS</h2>
                    <span>By <strong>Apple</strong></span>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                        a type specimen book.
                    </p>
                </div>
                <div className="search-result__product__options d-flex flex-column align-items-center justify-content-center">
                    <strong>$2499</strong>
                    <p className="d-flex align-items-center justify-content-center">
                        <img src={shoppingCart} alt="shopping cart icon" />Free Shipping
                    </p>
                    <button className="search-result__product__options__button d-flex align-items-center justify-content-center" type="button">
                        <img src={heart} alt="heart icon" />
                        WISHLIST
                    </button>
                    <button className="default-button d-flex align-items-center justify-content-center" type="button">
                        <img src={shoppingBag} alt="shopping bag icon" />
                        ADD TO CART
                    </button>
                </div>
            </div>
        </div>
    )
}