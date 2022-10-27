import { useState } from 'react';

import Header from './components/Layout/Header';
import Vinyls from './components/Vinyls/Vinyls';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import Details from './components/UI/Details';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header  onShowCart={showCartHandler} />
      <main>
        <Vinyls />
      </main>
      <Details/>
    </CartProvider>
  );
}

export default App;
