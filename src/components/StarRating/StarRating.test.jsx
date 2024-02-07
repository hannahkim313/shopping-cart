import { render, screen } from '@testing-library/react';
import StarRating from './StarRating';

const wholeSrc = '/src/assets/images/star.svg';
const halfSrc = '/src/assets/images/star-half.svg';
const outlineSrc = '/src/assets/images/star-outline.svg';

describe('StarRating component', () => {
  it('returns 3 whole stars when rating = 3', () => {
    render(<StarRating rating={3} />);
    const stars = screen.getAllByRole('img');
    expect(stars[0]).toHaveAttribute('src', wholeSrc);
    expect(stars[1]).toHaveAttribute('src', wholeSrc);
    expect(stars[2]).toHaveAttribute('src', wholeSrc);
    expect(stars[3]).toHaveAttribute('src', outlineSrc);
    expect(stars[4]).toHaveAttribute('src', outlineSrc);
  });

  it('returns 3 whole stars when rating = 3.2', () => {
    render(<StarRating rating={3.2} />);
    const stars = screen.getAllByRole('img');
    expect(stars[0]).toHaveAttribute('src', wholeSrc);
    expect(stars[1]).toHaveAttribute('src', wholeSrc);
    expect(stars[2]).toHaveAttribute('src', wholeSrc);
    expect(stars[3]).toHaveAttribute('src', outlineSrc);
    expect(stars[4]).toHaveAttribute('src', outlineSrc);
  });

  it('returns 3.5 stars when rating = 3.5', () => {
    render(<StarRating rating={3.5} />);
    const stars = screen.getAllByRole('img');
    expect(stars[0]).toHaveAttribute('src', wholeSrc);
    expect(stars[1]).toHaveAttribute('src', wholeSrc);
    expect(stars[2]).toHaveAttribute('src', wholeSrc);
    expect(stars[3]).toHaveAttribute('src', halfSrc);
    expect(stars[4]).toHaveAttribute('src', outlineSrc);
  });

  it('returns 3.5 stars when rating = 3.7', () => {
    render(<StarRating rating={3.7} />);
    const stars = screen.getAllByRole('img');
    expect(stars[0]).toHaveAttribute('src', wholeSrc);
    expect(stars[1]).toHaveAttribute('src', wholeSrc);
    expect(stars[2]).toHaveAttribute('src', wholeSrc);
    expect(stars[3]).toHaveAttribute('src', halfSrc);
    expect(stars[4]).toHaveAttribute('src', outlineSrc);
  });

  it('returns 5 empty stars when rating = 0', () => {
    render(<StarRating rating={0} />);
    const stars = screen.getAllByRole('img');
    expect(stars[0]).toHaveAttribute('src', outlineSrc);
    expect(stars[1]).toHaveAttribute('src', outlineSrc);
    expect(stars[2]).toHaveAttribute('src', outlineSrc);
    expect(stars[3]).toHaveAttribute('src', outlineSrc);
    expect(stars[4]).toHaveAttribute('src', outlineSrc);
  });
});
