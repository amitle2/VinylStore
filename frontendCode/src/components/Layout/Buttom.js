import { Fragment } from 'react';
import Logo from '../../assets/Logo.png';
import classes from './Buttom.module.css';

const Buttom = () => {
  return (
    <Fragment>
    <buttom className={classes.buttom}>
      <img src={Logo} alt='Logo' />
      </buttom>
    </Fragment>
  );
};

export default Buttom;
