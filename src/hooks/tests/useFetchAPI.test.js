import { renderHook, waitFor } from '@testing-library/react';
import { expect, vi } from 'vitest';
import { act } from 'react-dom/test-utils';
import useFetchAPI from '../useFetchAPI';

global.fetch = vi.fn();

const createFetchResponse = (data = []) =>
  Promise.resolve({
    json: () => Promise.resolve(data),
  });

describe('useFetchAPI hook', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('initial values of state variables', () => {
    it('sets the initial value of "data" to an empty array', async () => {
      fetch.mockResolvedValue(createFetchResponse());
      const { result } = renderHook(() => useFetchAPI('mock-url'));

      await waitFor(() => {
        expect(result.current.data).toEqual([]);
      });
    });

    it('sets the initial value of "loading" to true', async () => {
      fetch.mockResolvedValue(createFetchResponse());
      const { result } = renderHook(() => useFetchAPI('mock-url'));

      await waitFor(() => {
        expect(result.current.loading).toEqual(true);
      });
    });

    it('sets the initial value of "errorState" to null', async () => {
      fetch.mockResolvedValue(createFetchResponse());
      const { result } = renderHook(() => useFetchAPI('mock-url'));

      await waitFor(() => {
        expect(result.current.errorState).toEqual(null);
      });
    });
  });

  describe('a successful fetch', () => {
    it('sets the value of "data" on a successful fetch', async () => {
      const mockData = [
        { id: 1, title: 'Product 1', price: 10.99, image: 'product-1.jpg' },
        { id: 2, title: 'Product 2', price: 15.99, image: 'product-2.jpg' },
      ];
      fetch.mockResolvedValue(createFetchResponse(mockData));
      const { result } = renderHook(() => useFetchAPI('mock-url'));

      await waitFor(() => {
        expect(result.current.data).toStrictEqual(mockData);
      });
    });
  });

  describe('an aborted fetch', () => {
    it('prints an aborted error on an aborted fetch', async () => {
      const mockConsole = vi.spyOn(console, 'log');
      fetch.mockRejectedValue({ name: 'AbortError' });
      renderHook(() => useFetchAPI('mock-url'));

      await waitFor(() => {
        expect(mockConsole).toHaveBeenCalledWith('Fetching data was aborted');
      });
    });
  });

  describe('an unsuccessful fetch', () => {
    it('prints a fetching error on an unsuccessful fetch', async () => {
      const mockConsole = vi.spyOn(console, 'log');
      fetch.mockRejectedValue('Error');
      renderHook(() => useFetchAPI('mock-url'));

      await waitFor(() => {
        expect(mockConsole).toHaveBeenCalledWith(
          'Error fetching data:',
          'Error'
        );
      });
    });

    it('sets the value of "errorState" to the error when an error is caught', async () => {
      fetch.mockRejectedValue('Error');
      const { result } = renderHook(() => useFetchAPI('mock-url'));

      await waitFor(() => {
        expect(result.current.errorState).not.toEqual(null);
      });
    });
  });

  describe('a completed fetch', () => {
    it('sets the value of "loading" to false after completing a fetch', async () => {
      const mockData = [
        { id: 1, title: 'Product 1', price: 10.99, image: 'product-1.jpg' },
        { id: 2, title: 'Product 2', price: 15.99, image: 'product-2.jpg' },
      ];
      fetch.mockResolvedValue(createFetchResponse(mockData));
      const { result } = renderHook(() => useFetchAPI('mock-url'));

      await waitFor(() => {
        expect(result.current.loading).toEqual(false);
      });
    });
  });

  describe('cleanup function', () => {
    it('calls the cleanup function to abort the fetch', async () => {
      const mockAbort = vi.fn();
      global.AbortController = vi.fn(() => ({
        abort: mockAbort,
      }));
      fetch.mockResolvedValue(createFetchResponse());
      const { unmount } = renderHook(() => useFetchAPI('mock-url'));

      act(() => unmount());

      await waitFor(() => {
        expect(mockAbort).toHaveBeenCalled();
      });
    });
  });
});
