import Filter from 'components/Filter/Filter';
import AdvertList from '../components/AdvertList/AdvertList';

const Catalog = () => {
  return (
    <>
      <div
        style={{ width: 'fit-content', margin: '0 auto', marginBottom: '50px' }}
      >
        <Filter />
      </div>

      <AdvertList page={'catalog'} />
    </>
  );
};

export default Catalog;
