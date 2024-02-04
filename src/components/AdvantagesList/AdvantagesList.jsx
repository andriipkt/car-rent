import { Button } from 'components/AdvertList/AdvertCard/AdvertCard.styled';
import {
  HeroBackground,
  Hero,
  HeroPictureWrapper,
  ListItem,
  ListWrapper,
  HeroCar,
  HeroTitleWrapper,
} from './AdvantagesList.styled';
import HeroImage from '../../assets/main-car.9b30faa59387879fa060.png';
import backgroundImg from '../../assets/pngtree-city-line-sketch-png-image_6102066.png';
import { Link } from 'react-router-dom';

const AdvantagesList = () => {
  return (
    <div>
      <Hero>
        <HeroTitleWrapper>
          <h2>Discover the Benefits of Our Car Renting App</h2>

          <Link to="/catalog">
            <Button $width={'260px'}>Browse Catalog</Button>
          </Link>
        </HeroTitleWrapper>

        <HeroPictureWrapper>
          <HeroBackground src={backgroundImg} alt="bacground" />
          <HeroCar src={HeroImage} alt="hero car" />
        </HeroPictureWrapper>
      </Hero>

      <ListWrapper>
        <ListItem>
          <h3>Convenience</h3>
          <p>
            With our car renting app, you can book a car anytime, anywhere,
            saving you the hassle of visiting multiple rental agencies.
          </p>
        </ListItem>

        <ListItem>
          <h3>Variety</h3>
          <p>
            Choose from a wide range of vehicles to suit your needs, whether
            it's a compact car for city driving or a spacious SUV for a family
            road trip.
          </p>
        </ListItem>

        <ListItem>
          <h3>Cost-Effective</h3>
          <p>
            Enjoy competitive pricing and flexible rental options, allowing you
            to find the best deals that fit your budget.
          </p>
        </ListItem>

        <ListItem>
          <h3>Easy Booking</h3>
          <p>
            Our user-friendly interface makes booking a car quick and
            hassle-free, with instant confirmation and seamless payment options.
          </p>
        </ListItem>

        <ListItem>
          <h3>24/7 Support</h3>
          <p>
            Need assistance during your rental period? Our dedicated customer
            support team is available around the clock to address any queries or
            concerns.
          </p>
        </ListItem>

        <ListItem>
          <h3>Transparent Pricing</h3>
          <p>
            Say goodbye to hidden fees and unexpected charges. With our app,
            you'll always know the total cost upfront, ensuring peace of mind
            throughout your rental experience.
          </p>
        </ListItem>

        <ListItem>
          <h3>Reviews and Ratings</h3>
          <p>
            Make informed decisions based on real customer reviews and ratings,
            helping you choose the right car rental option with confidence.
          </p>
        </ListItem>
      </ListWrapper>
    </div>
  );
};

export default AdvantagesList;
