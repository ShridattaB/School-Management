import type { User } from './types/user';

function App() {
  const user: User = {
    id: '1',
    name: 'Shridatt',
    email: 'test@gmail.com',
    // role: 'student',
    createdAt: new Date().toISOString(),
  };

  return <h1>{user.name}</h1>;
}

export default App;