

// import React, { useState } from 'react';

// const Sciencefp = () => {
//   // Sample data (in real use, this would come from a database or API)
//   const [booksData] = useState([
//     { id: 1, title: 'Book 1', author: 'Author Chirsty A Holland', price: 10, image: 'https://i.pinimg.com/originals/a2/0a/0a/a20a0a3cc24261529fe1db3ee715413c.jpg ' },
//     { id: 2, title: 'Book 2', author: 'Author Dina Nayeri', price: 15, image: 'https://www.boookart.com/uploads/boookart/products/1603441132023-535754_l.jpg' },
//     { id: 3, title: 'Book 3', author: 'Author Ann Druyan', price: 20, image: 'https://th.bing.com/th/id/OIP.FECSpubWwHRo09ZNfugdggHaK3?rs=1&pid=ImgDetMain' },
//   ]);

//   const [cartItems, setCartItems] = useState([]);

//   // Function to add a book to the cart
//   const addToCart = (bookId) => {
//     const selectedBook = booksData.find(book => book.id === bookId);
//     if (selectedBook) {
//       setCartItems(prevCartItems => [...prevCartItems, selectedBook]);
//     }
//   };

//   // Function to handle checkout (dummy function for demo purposes)
//   const handleCheckout = () => {
//     alert('Checkout functionality is not implemented in this demo.');
//   };

//   return (
//     <div className="container">
//       <h1 className="text-center">Engross Into The World of Science and Cosmos</h1>
//       <div id="books" className="row">
//         {booksData.map(book => (
//           <div key={book.id} className="col-md-4 mb-4">
//             <div className="book card h-100">
//               <img src={book.image} className="card-img-top" alt={book.title} />
//               <div className="card-body d-flex flex-column">
//                 <h5 className="card-title">{book.title}</h5>
//                 <p className="card-text">By {book.author}</p>
//                 <p className="card-text">Price: ${book.price}</p>
//                 <button className="mt-auto btn btn-success" onClick={() => addToCart(book.id)}>Add to Cart</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div id="cart" className="mt-4">
//         <h2>Cart</h2>
//         <ul id="cart-items" className="list-group">
//           {cartItems.map(item => (
//             <li key={item.id} className="list-group-item">{item.title} - ${item.price}</li>
//           ))}
//         </ul>
//         <button id="checkout-btn" className="btn btn-primary mt-3" onClick={handleCheckout}>Checkout</button>
//       </div>
//     </div>
//   );
// };



// export default Sciencefp;
//Made new changes
import React, { useState } from 'react';

const Sciencefp = () => {
  const [booksData] = useState([
    { id: 1, title: 'Book 1', author: 'Author Chirsty A Holland', price: 10, image: 'https://i.pinimg.com/originals/a2/0a/0a/a20a0a3cc24261529fe1db3ee715413c.jpg' },
    { id: 2, title: 'Book 2', author: 'Author Dina Nayeri', price: 15, image: 'https://www.boookart.com/uploads/boookart/products/1603441132023-535754_l.jpg' },
    { id: 3, title: 'Book 3', author: 'Author Ann Druyan', price: 20, image: 'https://th.bing.com/th/id/OIP.FECSpubWwHRo09ZNfugdggHaK3?rs=1&pid=ImgDetMain' },
  ]);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (bookId) => {
    const selectedBook = booksData.find(book => book.id === bookId);
    if (selectedBook) {
      setCartItems(prevCartItems => {
        const existingItem = prevCartItems.find(item => item.id === bookId);
        if (existingItem) {
          // If the book is already in the cart, increase the quantity
          return prevCartItems.map(item =>
            item.id === bookId ? { ...item, quantity: item.quantity + 1 } : item
          );
        } else {
          // If it's a new book, add it to the cart with quantity 1
          return [...prevCartItems, { ...selectedBook, quantity: 1 }];
        }
      });
    }
  };

  const removeFromCart = (bookId) => {
    setCartItems(prevCartItems => {
      const existingItem = prevCartItems.find(item => item.id === bookId);
      if (existingItem.quantity > 1) {
        // If quantity is greater than 1, decrease the quantity
        return prevCartItems.map(item =>
          item.id === bookId ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        // If quantity is 1, remove the item from the cart
        return prevCartItems.filter(item => item.id !== bookId);
      }
    });
  };

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
            <li key={item.id} className="list-group-item">
              {item.title} - ${item.price} x {item.quantity}
              <button className="btn btn-danger btn-sm float-end" onClick={() => removeFromCart(item.id)}>-</button>
              <button className="btn btn-primary btn-sm float-end me-2" onClick={() => addToCart(item.id)}>+</button>
            </li>
          ))}
        </ul>
        <button id="checkout-btn" className="btn btn-primary mt-3" onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  );
};

export default Sciencefp;

