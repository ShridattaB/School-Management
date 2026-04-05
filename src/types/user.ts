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

// Utility Types

export type UpdateUser = Partial<User>;

export type UserBasicInfo = Pick<User, 'id' | 'name'>;

export type UserWithoutCreatedAt = Omit<User, 'createdAt'>;
