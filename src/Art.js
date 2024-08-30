

import React, { useState } from 'react';
import './option.css';

const Art = () => {
  // Sample data (in real use, this would come from a database or API)
  const [booksData] = useState([
    { id: 1, title: 'A MAN CALLED OVE', author: 'Author Fredrik Backman', price: 10, image: 'https://th.bing.com/th/id/OIP.vZSBs8BZmP27ex_Em6Hz7wHaLj?rs=1&pid=ImgDetMain ' },
    { id: 2, title: 'A TEASPOON of EARTH and SEA ', author: 'Author Dina Nayeri', price: 15, image: 'https://th.bing.com/th/id/OIP.DpiSDYBYx5CbvPYcOMe7eAHaLH?w=128&h=192&c=7&r=0&o=5&dpr=2&pid=1.7  ' },
    { id: 3, title: 'The CREATIVE POWER of SOUND', author: 'Author Abeth Claire Prophet', price: 20, image: 'https://cdn4.i-scmp.com/sites/default/files/images/methode/2017/10/26/711331d2-b565-11e7-95c2-e7a557915c7a_600x_150705.JPG' },
  ]);

  const [cartItems, setCartItems] = useState([]);

  // Function to add a book to the cart
  const addToCart = (bookId) => {
    const selectedBook = booksData.find(book => book.id === bookId);
    if (selectedBook) {
      setCartItems(prevCartItems => [...prevCartItems, selectedBook]);
    }
  };

  // Function to handle checkout (dummy function for demo purposes)
  const handleCheckout = () => {
    alert('Checkout functionality is not implemented in this demo.');
  };

  return (
    <div className="container">
      <h1 className="text-center">Engross Into The World of Science and Cosmos</h1>
      <div id="books" className="row">
        {booksData.map(book => (
          <div key={book.id} className="col-md-4 mb-4">
            <div className="book card h-100">
              <img src={book.image} className="card-img-top" alt={book.title} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">By {book.author}</p>
                <p className="card-text">Price: ${book.price}</p>
                <button className="mt-auto btn btn-success" onClick={() => addToCart(book.id)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div id="cart" className="mt-4">
        <h2>Cart</h2>
        <ul id="cart-items" className="list-group">
          {cartItems.map(item => (
            <li key={item.id} className="list-group-item">{item.title} - ${item.price}</li>
          ))}
        </ul>
        <button id="checkout-btn" className="btn btn-primary mt-3" onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  );
};



export default Art;
