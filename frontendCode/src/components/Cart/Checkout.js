import classes from './Checkout.module.css';
import { useRef, useState } from 'react';

const isEmpty = value => value.trim() === '';

const Checkout = (props) => {
    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        adress: true,
        email: true
    })


    const nameInputRef = useRef();
    const adressInputRef = useRef();
    const emailInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAdress = adressInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredAdressIsValid = !isEmpty(enteredAdress);
    const enteredEmailIsValid = enteredEmail.includes("@");

    setFormInputsValidity({
        name: enteredNameIsValid,
        adress: enteredAdressIsValid,
        email: enteredEmailIsValid,
    })

    const formIsValid = 
    enteredNameIsValid && 
    enteredAdressIsValid &&
    enteredEmailIsValid;



    if (!formIsValid) {
        return;
    }

    props.onConfirm({
        name: enteredName,
        adress: enteredAdress,
        email: enteredEmail
    });
  };

  const nameControlClasses = `${classes.control} ${formInputsValidity.name ? '': classes.invalid}`;
  const adressControlClasses = `${classes.control} ${formInputsValidity.adress ? '': classes.invalid}`;
  const emailControlClasses = `${classes.control} ${formInputsValidity.email ? '': classes.invalid}`;


  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor='name'>Full Name</label>
        <input type='text' id='name' ref={nameInputRef} />
        {!formInputsValidity.name && <p>❌Enter a valid name</p>}
      </div>
      <div className={adressControlClasses}>
        <label htmlFor='adress'>Full adress (Country, City, Street and number)</label>
        <input type='text' id='adress' ref={adressInputRef} />
        {!formInputsValidity.adress && <p>❌Enter an adress</p>}
      </div>
      <div className={emailControlClasses}>
        <label htmlFor='email'>E-mail</label>
        <input type='text' id='email' ref={emailInputRef} />
        {!formInputsValidity.email && <p>❌Enter a valid email</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
