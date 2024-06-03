import { UserRole } from './LoginResponse';

export interface User {
  id: number;
  firstname: string;
  lastname: string;
  password: string;
  email: string;
  birthdate: Date;
  avatar: string;
  role: UserRole;
}
