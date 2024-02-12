import { screen } from '@testing-library/react';
import { afterEach, beforeEach, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { renderWithRouter } from '../../utils/test-utils';
import ProductPage from './ProductPage';

const mockData = {
  category: 'test',
  id: 1,
  title: 'Product 1',
  price: 10.99,
  image: 'product-1.jpg',
  rating: {
    rate: 5.0,
    count: 120,
  },
  description: 'sample description',
};

const mockHandleAddToBag = vi.fn();

describe('ProductPage component', () => {
  beforeEach(() =>
    renderWithRouter(
      <ProductPage
        data={mockData}
        numBagItems={0}
        handleAddToBag={mockHandleAddToBag}
      />
    )
  );

  afterEach(() => vi.restoreAllMocks());

  describe('rendering of elements', () => {
    it('renders the product image', () => {
      const productImg = screen.getAllByRole('img')[4];
      expect(productImg).toHaveAttribute('src', mockData.image);
    });

    it('renders the product name', () => {
      expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(
        mockData.title
      );
    });

    it('renders the rating value', () => {
      expect(
        screen.getByRole('heading', { level: 3, name: /rating/i }).textContent
      ).toMatch(`${mockData.rating.rate}`);
    });

    it('renders the rating count', () => {
      expect(
        screen.getByText(`(${mockData.rating.count})`)
      ).toBeInTheDocument();
    });

    it('renders the product price', () => {
      expect(screen.getByText(`$${mockData.price}`)).toBeInTheDocument();
    });

    it('renders the product description', () => {
      expect(screen.getByText(mockData.description)).toBeInTheDocument();
    });

    it('renders the "add to bag" button', () => {
      expect(
        screen.getByRole('button', { name: /add to bag/i })
      ).toBeInTheDocument();
    });

    it('renders the "favorite" button', () => {
      expect(
        screen.getByRole('button', { name: 'Favorite' })
      ).toBeInTheDocument();
    });
  });

  describe('onClick handling of "add to bag" button', () => {
    it('calls handleAddToBag() callback on click', async () => {
      const addToBagBtn = screen.getByRole('button', { name: /add to bag/i });
      await userEvent.click(addToBagBtn);
      expect(mockHandleAddToBag).toHaveBeenCalledWith(mockData);
    });
  });
});
