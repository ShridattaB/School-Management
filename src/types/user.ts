// Role union
export type Role = 'admin' | 'teacher' | 'student' | 'parent';

// User interface
export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  createdAt: string;
  avatarUrl?: string; // optional
}