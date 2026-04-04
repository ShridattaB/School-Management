import { useState } from 'react';
import type { User, CreateUser } from './types/index';

function App() {
  const [user, setUser] = useState<User | null>(null);

  const newUser: CreateUser = {
    name: 'Shridatt',
    email: 'test@gmail.com',
    role: 'student',
    isActive: true
  };

  return (
    <>
      <h1>School Management System</h1>
      <p>{newUser.name}</p>
  
    </>
  );
}

export default App;