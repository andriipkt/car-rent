import {
  Button,
  CardTitleWrapper,
  CardWrapper,
  InfoEl,
  CardInfoWrapper,
  Picture,
  PictureWrapper,
  FavIconWrapper,
} from './AdvertCard.styled';

import { FavoriteIcon } from '../../Icons/Icons';

const AdvertCard = ({ advert }) => {
  console.log(advert);
  const id = 9812;

  const arr = [
    'address (kiev)',
    'Ukraine',
    'rentalCompany',
    'type (SUV)',
    'model',
    'id',
    'functionalities (1st)',
  ];

  return (
    <CardWrapper>
      <PictureWrapper>
        <Picture
          $imgsrc={
            'https://ftp.goit.study/img/cars-test-task/buick_enclave.jpeg'
          }
        />
        <FavIconWrapper>
          <FavoriteIcon color={'blue'} />
        </FavIconWrapper>
      </PictureWrapper>

      <CardTitleWrapper>
        <h2>
          make(Buick) <span>model(Enclave)</span>, year(2008)
        </h2>

        <p>rentalPrice ($40)</p>
      </CardTitleWrapper>

      <CardInfoWrapper>
        {arr.map(el => {
          return (
            <InfoEl key={`${id}.${el}`}>
              <p>{el}</p>
            </InfoEl>
          );
        })}
      </CardInfoWrapper>

      <Button>Learn more</Button>
    </CardWrapper>
  );
};

export default AdvertCard;
