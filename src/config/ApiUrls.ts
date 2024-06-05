const BASE_URL = "http://localhost:3000";

export const LOGIN_URL = `${BASE_URL}/api/auth/login`;
export const REGISTER_URL = `${BASE_URL}/api/auth/register`;
export const USER_PROFILE_URL = (userId: number) => `${BASE_URL}/api/users/${userId}`;
export const ACCOMMODATIONS = `${BASE_URL}/api/accommodations`;
export const POST_LIKE = (accommodationId: number) =>
  `${BASE_URL}/api/accommodations/${accommodationId}/like`;

// Messaging URLs
export const GET_CONVERSATIONS_URL = (userId: number) => `${BASE_URL}/api/messaging/conversations/${userId}`;
export const GET_CONVERSATION_BETWEEN_USERS_URL = (user1Id: number, user2Id: number) => `${BASE_URL}/api/messaging/conversation/${user1Id}/${user2Id}`;
export const GET_MESSAGES_URL = (conversationId: number) => `${BASE_URL}/api/messaging/messages/${conversationId}`;
export const POST_MESSAGE_URL = `${BASE_URL}/api/messaging/messages`;
export const POST_CONVERSATION_URL = `${BASE_URL}/api/messaging/conversations`;

// Owner-specific URLs
export const USER_LIKES_URL = (accommodationId: number) => `${BASE_URL}/api/accommodations/${accommodationId}/likes`;
export const ACCEPT_TENANT_URL = `${BASE_URL}/api/accommodations/accept-tenant`;
