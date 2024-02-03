import { useDispatch, useSelector } from 'react-redux';
import AdvertCard from './AdvertCard/AdvertCard';
import { selectAdverts, selectIsLoading } from '../../redux/adverts/selectors';
import { AdvertCardsWrapper, LoadMoreBtn } from './AdvertList.styled';
import { setPage } from '../../redux/adverts/slice';
import { TailSpin } from 'react-loader-spinner';
import { selectFavorites } from '../../redux/favorites/selectors';

const AdvertList = ({ page }) => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);
  const isLoading = useSelector(selectIsLoading);
  const { favorites } = useSelector(selectFavorites);
  console.log('page', page);

  const advertsToRender = page === 'catalog' ? adverts : favorites;

  return (
    <>
      <div>AdvertList</div>

      <AdvertCardsWrapper>
        {advertsToRender.map(advert => (
          <AdvertCard key={advert.id} advertItem={advert} />
        ))}
      </AdvertCardsWrapper>

      {advertsToRender.length % 12 === 0 &&
        (isLoading ? (
          <TailSpin
            color="#3470ff"
            width={50}
            height={50}
            wrapperStyle={{ marginTop: '75px', justifyContent: 'center' }}
          />
        ) : (
          advertsToRender.length !== 0 && (
            <LoadMoreBtn onClick={() => dispatch(setPage())}>
              Load more
            </LoadMoreBtn>
          )
        ))}
    </>
  );
};

export default AdvertList;
