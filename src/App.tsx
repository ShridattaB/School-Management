function App() {
  const appName = import.meta.env.VITE_APP_NAME

  function greet(name: string) {
    console.log('Hello, ' + name + ' !!!')
  }

  return (
    <div>
      <h1>{appName}</h1>
    </div>
  )
}

export default App
