import classes from './Details.module.css';

const Details = () => {
  return (
    <section className={classes.summary}>
      <h2>Contact:</h2>
      <div className={classes.contact}>
      <p>
        Amit Levy
      </p>
      <p>
        0545448022
      </p>
      <p>
        alamitlevy@gmail 
      </p>
      </div>
    </section>
  );
};

export default Details;
