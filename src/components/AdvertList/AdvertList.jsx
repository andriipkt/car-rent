import { useSelector } from 'react-redux';
import AdvertCard from './AdvertCard/AdvertCard';
import { selectAdverts } from '../../redux/adverts/selectors';

const AdvertList = () => {
  const adverts = useSelector(selectAdverts);

  return (
    <>
      <div>AdvertList</div>

      {adverts.map(advert => (
        <AdvertCard advert={advert} />
      ))}
    </>
  );
};

export default AdvertList;
