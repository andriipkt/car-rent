import { useDispatch } from 'react-redux';
import AdvertList from '../components/AdvertList/AdvertList';
import { useEffect } from 'react';
import { getAdverts } from '../redux/adverts/operations';

const Catalog = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdverts());
  }, [dispatch]);

  return (
    <>
      <div>Catalog</div>
      <AdvertList />
    </>
  );
};

export default Catalog;
