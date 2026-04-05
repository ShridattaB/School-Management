// import { useState, useRef } from 'react';
// import type { User } from './types/user';

// function App() {
//   // ✅ Typed state
//   const [user, setUser] = useState<User | null>(null);

//   // ✅ Typed ref
//   const inputRef = useRef<HTMLInputElement>(null);

//   // ✅ Controlled input state
//   const [name, setName] = useState<string>('');

//   // ✅ Typed change handler
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setName(e.target.value); // TS knows this is string
//   };

//   // ✅ Typed submit handler
//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const newUser: User = {
//       id: '1',
//       name: name,
//       email: 'test@gmail.com',
//       role: 'student',
//       createdAt: new Date().toISOString(),
//     };

//     setUser(newUser);

//     // focus input using ref
//     inputRef.current?.focus();
//   };

//   return (
//     <>
//       <h1>School Management System</h1>

//       <form onSubmit={handleSubmit}>
//         <input
//           ref={inputRef}
//           type="text"
//           value={name}
//           onChange={handleChange}
//           placeholder="Enter name"
//         />
//         <button type="submit">Add User</button>
//       </form>

//       {user && <p>User: {user.name}</p>}
//     </>
//   );
// }

// export default App;


import Dashboard from './components/Dashboard';
// import MainApp from './ContaxApi-learning/MainApp';

function App() {
//   const [users, setUsers] = useState<User[]>([]);

//   // ✅ Partial<User> (update payload)
//   const updatePayload: UpdateUser = {
//     name: 'Updated Name',
//   };

//   // ✅ Pick<User>
//   const basicUser: UserBasicInfo = {
//     id: '1',
//     name: 'Shridatt',
//   };

//   // dummy users
//   const userList: User[] = [
//     {
//       id: '1',
//       name: 'Shridatt',
//       email: 'test@gmail.com',
//       role: 'student',
//       createdAt: new Date().toISOString(),
//     },
//   ];

//   // ✅ Generic function usage
//   const foundUser = getById(userList, '1');

//   return (
//     <>
//       <h1>School Management System</h1>
//       <p>{foundUser?.name}</p>
//     </>
//   );
// }
return(
  <Dashboard/>
  // <MainApp/>
)
}
export default App;
