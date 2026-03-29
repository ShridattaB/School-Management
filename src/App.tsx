function App(){
  const appName=import.meta.env.VITE_APP_NAME

  return(
    <div>
      <h1>{appName}</h1>
    </div>
  )
}

export default App
