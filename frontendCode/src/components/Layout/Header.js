import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import VinylsImage from '../../assets/Vinyls.jpg';
import classes from './Header.module.css';
import Logo from '../../assets/Logo.png';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
      <img src={Logo} alt='Logo' />
      <div className={classes['cart']}>
      <HeaderCartButton onClick={props.onShowCart} />
      </div>
      </header>
      <div className={classes['main-image']}>
        <img src={VinylsImage} alt='Vynils' />
      </div>
    </Fragment>
  );
};

export default Header;
