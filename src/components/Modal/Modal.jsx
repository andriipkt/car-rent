import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  Backdrop,
  CloseIconWrapper,
  Description,
  ModalWindow,
  Picture,
  RentalConditionItem,
  RentalConditionList,
  Tag,
  TagsWrapper,
} from './Modal.styled';
import { Button } from 'components/AdvertList/AdvertCard/AdvertCard.styled';
import { CloseIcon } from 'components/Icons/Icons';
import { formatNumberWithCommas } from 'helpers/formatNumberWithCommas';

const Modal = ({ toggle, advertItem }) => {
  const {
    make,
    model,
    year,
    rentalPrice,
    address,
    type,
    id,
    functionalities,
    img,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    rentalConditions,
    mileage,
  } = advertItem;

  const addressInfo = address.split(' ').map(word => word.replace(',', ''));
  const city = addressInfo.slice(-2)[0];
  const country = addressInfo.slice(-2)[1];

  const rentalConditionsArr = rentalConditions.split('\n');
  const minimumAge = rentalConditionsArr[0].split(': ');

  useEffect(() => {
    const handleKeyEsc = event => {
      if (event.code === 'Escape') {
        toggle();
      }
    };

    window.addEventListener('keydown', handleKeyEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyEsc);
      document.body.style.overflow = 'auto';
    };
  }, [toggle]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      toggle();
    }
  };

  return ReactDOM.createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalWindow>
        <Picture src={img} alt={description} />

        <CloseIconWrapper onClick={toggle}>
          <CloseIcon />
        </CloseIconWrapper>

        <h3>
          {make} <span>{model}</span>, {year}
        </h3>

        <TagsWrapper>
          <Tag>{city}</Tag>
          <Tag>{country}</Tag>
          <Tag>Id: {id}</Tag>
          <Tag>Year: {year}</Tag>
          <Tag>Type: {type}</Tag>
        </TagsWrapper>
        <TagsWrapper style={{ marginBottom: '14px' }}>
          <Tag>Fuel Consumption: {fuelConsumption}</Tag>
          <Tag>Engine Size: {engineSize}</Tag>
        </TagsWrapper>

        <Description style={{ marginBottom: '24px' }}>
          {description}
        </Description>

        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ marginBottom: '8px' }}>
            Accessories and functionalities:
          </h4>
          <TagsWrapper>
            {accessories.map((accessorie, index) => (
              <Tag key={index}>{accessorie}</Tag>
            ))}
          </TagsWrapper>
          <TagsWrapper>
            {functionalities.map((functionalitie, index) => (
              <Tag key={index}>{functionalitie}</Tag>
            ))}
          </TagsWrapper>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ marginBottom: '8px' }}>Rental Conditions: </h4>
          <RentalConditionList>
            <RentalConditionItem>
              Minumum age: <span>{minimumAge[1]}</span>
            </RentalConditionItem>

            <RentalConditionItem>{rentalConditionsArr[1]}</RentalConditionItem>

            <RentalConditionItem>{rentalConditionsArr[2]}</RentalConditionItem>

            <RentalConditionItem>
              Mileage: <span>{formatNumberWithCommas(parseInt(mileage))}</span>
            </RentalConditionItem>

            <RentalConditionItem>
              Price: <span>{rentalPrice}</span>
            </RentalConditionItem>
          </RentalConditionList>
        </div>

        <Button $width={'168px'}>
          <a href="tel:+380730000000">Rental Car</a>
        </Button>
      </ModalWindow>
    </Backdrop>,
    document.querySelector('#popup-root')
  );
};

export default Modal;
