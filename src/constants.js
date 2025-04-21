// API URL Configuration
export const API_URL = import.meta.env.VITE_API_URL || 'https://jsonplaceholder.typicode.com/posts/1';

/*
  To use a custom API (e.g., MockAPI or a real vulnerability scanning API):
  1. Create a .env file in the project root.
  2. Add: VITE_API_URL=https://your-api-url
  3. Replace the default JSONPlaceholder URL above with your API endpoint.
  Example: VITE_API_URL=https://api.mockapi.io/v1/scans
*/