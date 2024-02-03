import {
  Button,
  CardTitleWrapper,
  CardWrapper,
  Picture,
  PictureWrapper,
  FavIconWrapper,
  CardInfo,
  CardInfoWrapper,
} from './AdvertCard.styled';
import { FavoriteIcon } from '../../Icons/Icons';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, deleteFavorite } from '../../../redux/favorites/slice';
import { selectFavorites } from '../../../redux/favorites/selectors';

const AdvertCard = ({ advertItem }) => {
  const {
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    id,
    functionalities,
    img,
    description,
  } = advertItem;
  const dispatch = useDispatch();
  const { favorites } = useSelector(selectFavorites);

  const addressInfo = address.split(' ').map(word => word.replace(',', ''));
  const city = addressInfo.slice(-2)[0];
  const country = addressInfo.slice(-2)[1];

  const tags = [
    city,
    country,
    rentalCompany,
    type,
    model,
    id,
    functionalities[0],
  ];

  const isFavorite = favorites.some(fav => fav.id === id);

  const handleOnAddFavorite = advert => {
    if (!isFavorite) {
      dispatch(addFavorite(advert));
    } else {
      dispatch(deleteFavorite(advert.id));
    }
  };

  return (
    <CardWrapper>
      <PictureWrapper>
        <Picture src={img} loading="lazy" alt={description} />
        <FavIconWrapper onClick={() => handleOnAddFavorite(advertItem)}>
          <FavoriteIcon color={isFavorite ? '#3470ff' : 'transparent'} />
        </FavIconWrapper>
      </PictureWrapper>

      <CardTitleWrapper>
        <h2>
          {make} <span>{model}</span>, {year}
        </h2>

        <p>{rentalPrice}</p>
      </CardTitleWrapper>

      <CardInfoWrapper>
        <CardInfo>
          {/* {tags.map(el => {
          return <InfoEl key={`${el}.${id}`}>{el}</InfoEl>;
        })} */}
          {/* {tags.map(tag => tag.join('U+02758'))} */}
          {tags.join(' | ')}
        </CardInfo>

        <Button>Learn more</Button>
      </CardInfoWrapper>
    </CardWrapper>
  );
};

export default AdvertCard;
