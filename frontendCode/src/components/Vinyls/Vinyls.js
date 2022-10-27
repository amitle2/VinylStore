import { Fragment } from 'react';
import classes from './Vinyls.module.css';
import VinylsSummary from './VinylsSummary';
import AvailableVinyls from './AvailableVinyls';

const Vinyls = () => {
  return (
    <Fragment>
        <div className={classes.summary}>
      <VinylsSummary />
      <AvailableVinyls />
      </div>
    </Fragment>
  );
};

export default Vinyls;
