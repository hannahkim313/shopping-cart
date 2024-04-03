import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import starImg from '../../assets/images/star.svg';
import starHalfImg from '../../assets/images/star-half.svg';
import starOutlineImg from '../../assets/images/star-outline.svg';

const StarRating = ({ rating = 0 }) => {
  let currRating = rating;

  return (
    <>
      {[0, 0, 0, 0, 0].map((_, index) => {
        if (index + 1 <= rating) {
          currRating -= 1;

          return <img key={uuidv4()} src={starImg} alt="" />;
        }

        if ((rating % 1 === 0.5 || rating % 1 > 0.5) && currRating >= 0.5) {
          currRating -= 0.5;

          return <img key={uuidv4()} src={starHalfImg} alt="" />;
        }

        return <img key={uuidv4()} src={starOutlineImg} alt="" />;
      })}
    </>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default StarRating;
