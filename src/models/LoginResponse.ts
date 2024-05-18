export type UserRole = 'tenant' | 'owner' | null;

export interface AuthResponse {
  message: string;
  token: string;
  role: UserRole;
}
