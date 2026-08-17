// REST API Client helper for backend API endpoints

const API_BASE_URL = '/api/v1';

export async function fetchNotices() {
  try {
    const response = await fetch(`${API_BASE_URL}/notices`);
    if (!response.ok) throw new Error('Failed to fetch notices');
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    return { success: false, data: [] };
  }
}
