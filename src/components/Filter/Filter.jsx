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
import { resetFilters, setFilteredAdverts } from '../../redux/adverts/slice';
import { getAdverts } from '../../redux/adverts/operations';

const Filter = () => {
  const dispatch = useDispatch();
  const { carBrand, price, carMileage } = useSelector(filter);

  const carOptions = options.map(option => {
    return { value: option, label: option };
  });

  let priceOptions = [];
  for (let i = 10; i <= 300; i += 10) {
    priceOptions.push({ value: i, label: i.toString() });
  }

  const handleCarMileageFilter = event => {
    const { name, value } = event.target;

    dispatch(carMileageFilter({ ...carMileage, [name]: value }));
  };

  const handleCarFilter = event => {
    dispatch(carBrandFilter(event.value));
  };

  const handleSubmit = async event => {
    event.preventDefault();

    dispatch(setFilteredAdverts({ carBrand, price, carMileage }));
  };

  const handleReset = () => {
    dispatch(resetFilters());
    dispatch(getAdverts({}));

    dispatch(carBrandFilter(''));
    dispatch(priceFilter(''));
    dispatch(carMileageFilter({ from: '', to: '' }));
  };

  return (
    <Form onSubmit={handleSubmit} onReset={handleReset}>
      <label>
        Car brand
        <Select
          className="car-select"
          options={carOptions}
          isSearchable={true}
          placeholder={'Enter the text'}
          value={carBrand && { value: carBrand, label: carBrand }}
          onChange={handleCarFilter}
        />
      </label>
      <label>
        Price/ 1 hour
        <Select
          className="price-select"
          options={priceOptions}
          isSearchable={true}
          placeholder={'To $'}
          value={price && { value: price, label: price }}
          onChange={price => dispatch(priceFilter(price.value))}
        />
      </label>

      <InputWrapper>
        <label>
          Сar mileage / km
          <input
            type="number"
            name="from"
            placeholder="From"
            onChange={handleCarMileageFilter}
            value={carMileage.from}
          />
        </label>
        <label>
          <input
            type="number"
            name="to"
            placeholder="To"
            onChange={handleCarMileageFilter}
            value={carMileage.to}
          />
        </label>
      </InputWrapper>

      <Button
        type="submit"
        disabled={!carBrand && !price && !carMileage.from && !carMileage.to}
        $width={'136px'}
        $height={'48px'}
      >
        Search
      </Button>
      <Button
        type="reset"
        disabled={!carBrand && !price && !carMileage.from && !carMileage.to}
        $width={'136px'}
        $height={'48px'}
      >
        Reset
      </Button>
    </Form>
  );
};

export default Filter;
