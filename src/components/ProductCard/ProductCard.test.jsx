import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../utils/test-utils';
import ProductCard from './ProductCard';

describe('ProductCard component', () => {
  describe('successful rendering of elements', () => {
    it('renders a product card and its information', () => {
      renderWithRouter(
        <ProductCard
          id={1}
          title="Product 1"
          price={10.99}
          image="product-1.jpg"
        />
      );

      expect(
        screen.getByRole('heading', { level: 3, name: 'Product 1' })
      ).toBeInTheDocument();
      expect(screen.getByText('$10.99')).toBeInTheDocument();
      expect(screen.getByRole('img')).toBeInTheDocument();
    });
  });
});
