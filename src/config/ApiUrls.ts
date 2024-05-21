const BASE_URL = "http://localhost:3000";

export const LOGIN_URL = `${BASE_URL}/api/auth/login`;
export const REGISTER_URL = `${BASE_URL}/api/auth/register`;
export const USER_PROFILE_URL = (userId: number) => `${BASE_URL}/api/users/${userId}`;
export const ACCOMMODATIONS = `${BASE_URL}/api/accommodations`;
export const POST_LIKE = (accommodationId: number) =>
  `${BASE_URL}/api/accommodations/${accommodationId}/like`;
