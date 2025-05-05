// src/hooks/useApiError.ts
import { useCallback } from 'react';
import { toast } from 'react-toastify';

export const useApiError = () => {
  return useCallback((error: any) => {
    if (error.response) {
      const status = error.response.status;
      const message = error.response.data?.message || 'An unexpected error occurred.';

      // Customize based on status code
      switch (status) {
        case 400:
          toast.error(`Bad Request: ${message}`);
          break;
        case 401:
          toast.error(`Unauthorized: ${message}`);
          break;
        case 403:
          toast.error(`Forbidden: ${message}`);
          break;
        case 404:
          toast.error(`Not Found: ${message}`);
          break;
        case 500:
          toast.error(`Server Error: ${message}`);
          break;
        default:
          toast.error(`Error (${status}): ${message}`);
      }
    } else if (error.request) {
      // The request was made but no response received
      toast.error('Network error or no response from server.');
    } else {
      // Something else
      toast.error(`Error: ${error.message}`);
    }
  }, []);
};
