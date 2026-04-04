// 1. Union Type
export type Role = 'admin' | 'teacher' | 'student';

// 2. Interface + Primitive Types + Optional Field
export interface User {
  id: string;          // primitive
  name: string;
  email: string;
  role: Role;          // union
  isActive: boolean;
  age?: number;        // optional
}

// 3. Utility Types

// Create → no id
export type CreateUser = Omit<User, 'id'>;

// Update → partial fields
export type UpdateUser = Partial<User>;

// List → limited fields
export type UserListItem = Pick<User, 'id' | 'name' | 'role'>;


// 4. Generics (Reusable API Response)
export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}