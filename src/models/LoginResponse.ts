export type UserRole = 'tenant' | 'owner' | 'admin' | null;

export interface AuthResponse {
  message: string;
  token: string;
  role: UserRole;
  id: number;
  user: {
    id: number;
    username: string;
    email: string;
  };
}
