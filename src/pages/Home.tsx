import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import ThemeSwitcher from '../components/ThemeSwitcher'

const Home = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center justify-start gap-8 h-full">
      <div className="flex justify-center gap-1">
        <a href="https://vite.dev" target="_blank">
          <img 
            src={viteLogo} 
            className="h-24 p-6 transition-all hover:drop-shadow-[0_0_2em_rgba(100,108,255,0.667)]"
            alt="Vite logo" 
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img 
            src={reactLogo} 
            className="h-24 p-6 animate-[spin_20s_linear_infinite] hover:drop-shadow-[0_0_2em_rgba(97,218,251,0.667)]"
            alt="React logo" 
          />
        </a>
      </div>
      
      <div className="flex flex-col items-center gap-8 text-center">
        <h1 className="text-5xl font-bold">Vite + React</h1>
        
        <div className="flex flex-col items-center gap-4">
          <button 
            onClick={() => setCount((count) => count + 1)}
            className="btn btn-primary w-fit"
          >
            count is {count}
          </button>
          <p>
            Edit <code className="badge badge-neutral">src/App.tsx</code> and save to test HMR
          </p>
        </div>
        
        <p className="text-base-content/60">
          Click on the Vite and React logos to learn more
        </p>

        <div className="flex flex-col items-center gap-2">
          <h2 className="text-xl font-semibold">Theme Selection:</h2>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  )
}

export default Home
