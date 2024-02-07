import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const StarRating = ({ rating = 0 }) => {
  let currRating = rating;

  return (
    <>
      {[0, 0, 0, 0, 0].map((_, index) => {
        if (index + 1 <= rating) {
          currRating -= 1;

          return (
            <img key={uuidv4()} src="/src/assets/images/star.svg" alt="" />
          );
        }

        if ((rating % 1 === 0.5 || rating % 1 > 0.5) && currRating >= 0.5) {
          currRating -= 0.5;

          return (
            <img key={uuidv4()} src="/src/assets/images/star-half.svg" alt="" />
          );
        }

        return (
          <img
            key={uuidv4()}
            src="/src/assets/images/star-outline.svg"
            alt=""
          />
        );
      })}
    </>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default StarRating;
