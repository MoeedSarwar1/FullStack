import { BACKEND_URL } from '@env';
export const registerUser = async (
  name: string,
  email: string,
  password: string,
) => {
  try {
    const res = await fetch(`${BACKEND_URL}/api/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });
    return await res.json();
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    // Normalize email before sending to backend
    const normalizedEmail = email.trim().toLowerCase();
    const res = await fetch(`${BACKEND_URL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: normalizedEmail, password }),
    });
    return await res.json();
  } catch (error) {
    throw error;
  }
};
