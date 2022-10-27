import Card from '../UI/Card';
import VinylItem from './VinylItem/VinylItem';
import classes from './AvailableVinyls.module.css';
import { useEffect, useState } from 'react';


const AvailableVinyls = () => {
  const [vinyls, setVinyls] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchVinyls = async () => {
      const response = await fetch('https://vinyl-store-backend.herokuapp.com/api/products');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const responseData = await response.json();

      const loadedVinyls = [];


      for (const key in responseData) {
        loadedVinyls.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
          image: responseData[key].image

        });
      }

      setVinyls(loadedVinyls);
      setIsLoading(false);
    };

    fetchVinyls().catch((error) => {
        setIsLoading(false);
        setHttpError(error.message);
      });
    }, []);

    if (isLoading) {
        return (
          <section className={classes.VinylsLoading}>
            <p>Loading...</p>
          </section>
        );
      }
    
      if (httpError) {
        return (
          <section className={classes.VinylsError}>
            <p>{httpError}</p>
          </section>
        );
      }
  

  const VinylsList = vinyls.map((Vinyl) => (
    <VinylItem
      key={Vinyl.id}
      id={Vinyl.id}
      name={Vinyl.name}
      description={Vinyl.description}
      price={Vinyl.price}
      image={Vinyl.image}
    />
  ));

  return (
    <section className={classes.Vinyls}>
      <Card>
        <ul>{VinylsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableVinyls;