import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <main className='h-screen w-full'>
      <Toaster/>
      <Outlet/>
    </main>
  )
}

export default App