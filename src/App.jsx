import { Outlet } from 'react-router-dom'


const App = () => {
  return (
    <main className='h-screen w-full'>
      <Outlet/>
    </main>
  )
}

export default App