import { CityItem } from './CityItem';
import { Spinner } from './Spinner';
import { Message } from './Message';

import styles from './CityList.module.css';

export const CityList = ({ isLoading, cities }) => {
  if(isLoading) return <Spinner />
  if(cities.length <= 0) return <Message message="Add your first city by clicking on a city on the map"/>
  
  return (
    <ul className={styles.cityList}>
      {cities.map(city => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  )
}