import {
  Button,
  CardTitleWrapper,
  CardWrapper,
  Picture,
  PictureWrapper,
  FavIconWrapper,
  CardInfoWrapper,
} from './AdvertCard.styled';
import { FavoriteIcon } from '../../Icons/Icons';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, deleteFavorite } from '../../../redux/favorites/slice';
import { selectFavorites } from '../../../redux/favorites/selectors';
import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import { Tag, TagsWrapper } from 'components/Modal/Modal.styled';

const AdvertCard = ({ advertItem }) => {
  const [showModal, setShowModal] = useState(false);
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

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
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
          <TagsWrapper>
            {tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </TagsWrapper>

          <Button onClick={toggleModal}>Learn more</Button>
        </CardInfoWrapper>
      </CardWrapper>

      {showModal && <Modal toggle={toggleModal} advertItem={advertItem} />}
    </>
  );
};

export default AdvertCard;
