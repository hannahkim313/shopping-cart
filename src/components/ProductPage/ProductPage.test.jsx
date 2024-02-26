import { screen } from '@testing-library/react';
import { afterEach, beforeEach, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { renderWithRouter } from '../../utils/test-utils';
import ProductPage from './ProductPage';

const mockData = [
  {
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
    quantity: 1,
  },
  {
    category: 'test',
    id: 2,
    title: 'Product 2',
    price: 15.99,
    image: 'product-2.jpg',
    rating: {
      rate: 3.0,
      count: 110,
    },
    description: 'sample description',
    quantity: 10,
  },
];

const mockHandleAddToBag = vi.fn();

const mockIsMaxQuantity = vi.fn().mockImplementation((id) => {
  const product = mockData.find((item) => item.id === id);

  return !product ? false : product.quantity === 10;
});

describe('ProductPage component', () => {
  describe('rendering of elements', () => {
    describe('rendering of elements when max quantity is reached', () => {
      it('renders the quantity limit error when limit is reached', () => {
        renderWithRouter(
          <ProductPage
            data={mockData[1]}
            numBagItems={0}
            isMaxQuantity={mockIsMaxQuantity}
            id={2}
            handleAddToBag={mockHandleAddToBag}
          />
        );

        expect(screen.getByText(/quantity limit/i)).toBeInTheDocument();

        vi.restoreAllMocks();
      });
    });

    describe('rendering of default elements', () => {
      beforeEach(() =>
        renderWithRouter(
          <ProductPage
            data={mockData[0]}
            numBagItems={0}
            isMaxQuantity={mockIsMaxQuantity}
            id={1}
            handleAddToBag={mockHandleAddToBag}
          />
        )
      );

      afterEach(() => vi.restoreAllMocks());

      it('renders the product image', () => {
        const productImg = screen.getAllByRole('img')[4];
        expect(productImg).toHaveAttribute('src', mockData[0].image);
      });

      it('renders the product name', () => {
        expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(
          mockData[0].title
        );
      });

      it('renders the rating value', () => {
        expect(
          screen.getByRole('heading', { level: 3, name: /rating/i }).textContent
        ).toMatch(`${mockData[0].rating.rate}`);
      });

      it('renders the rating count', () => {
        expect(
          screen.getByText(`(${mockData[0].rating.count})`)
        ).toBeInTheDocument();
      });

      it('renders the product price', () => {
        expect(screen.getByText(`$${mockData[0].price}`)).toBeInTheDocument();
      });

      it('renders the product description', () => {
        expect(screen.getByText(mockData[0].description)).toBeInTheDocument();
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
  });

  describe('onClick handling of "add to bag" button', () => {
    it('calls handleAddToBag() callback on click', async () => {
      renderWithRouter(
        <ProductPage
          data={mockData[0]}
          numBagItems={0}
          isMaxQuantity={mockIsMaxQuantity}
          id={1}
          handleAddToBag={mockHandleAddToBag}
        />
      );

      const addToBagBtn = screen.getByRole('button', { name: /add to bag/i });
      await userEvent.click(addToBagBtn);
      expect(mockHandleAddToBag).toHaveBeenCalledWith(mockData[0]);

      vi.restoreAllMocks();
    });
  });
});
