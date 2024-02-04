import Select from 'react-select';
import options from '../../data/makes.json';
import { Form, InputWrapper } from './Filter.styled';
import { Button } from 'components/AdvertList/AdvertCard/AdvertCard.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filter } from '../../redux/filter/selectors';
import {
  carBrandFilter,
  carMileageFilter,
  priceFilter,
} from '../../redux/filter/slice';

const Filter = () => {
  const dispatch = useDispatch();
  const { carMileage } = useSelector(filter);

  const carOptions = options.map(option => {
    return { value: option, label: option };
  });

  let priceOptions = [];
  for (let i = 10; i < 150; i += 10) {
    priceOptions.push({ value: i, label: i.toString() });
  }

  const handleFilter = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'from':
        dispatch(carMileageFilter({ ...carMileage, from: value }));
        break;

      case 'to':
        dispatch(carMileageFilter({ ...carMileage, to: value }));
        break;

      default:
        console.error('Invalid input name');
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        Car brand
        <Select
          className="car-select"
          options={carOptions}
          isSearchable={true}
          placeholder={'Enter the text'}
          onChange={car => dispatch(carBrandFilter(car.value))}
        />
      </label>
      <label>
        Price/ 1 hour
        <Select
          className="price-select"
          options={priceOptions}
          isSearchable={true}
          placeholder={'To $'}
          onChange={price => dispatch(priceFilter(price.value))}
        />
      </label>
      <label>
        Сar mileage / km
        <InputWrapper>
          <input
            type="number"
            name="from"
            placeholder="From"
            onChange={handleFilter}
            value={carMileage.from}
          />
          <input
            type="number"
            name="to"
            placeholder="To"
            onChange={handleFilter}
            value={carMileage.to}
          />
        </InputWrapper>
      </label>

      <Button type="submit" $width={'136px'} $height={'48px'}>
        Search
      </Button>
    </Form>
  );
};

export default Filter;
