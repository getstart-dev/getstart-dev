import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    document.body.classList.add(
      "bg-slate-100",
      "grid",
      "h-screen",
      "place-items-center",
      "text-xl"
    );
  });

  return (
    <>
      <div className="grid place-items-center">
        <div
          className="mt-8 text-6xl font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-950"
        >
          Getstart<span className="hidden md:inline">.dev</span>
        </div>
        <div className="m-2 font-thin text-center">
          Quickly bootstrap your development project in your preferred language and framework.
        </div>
        <div className="m-8">
          <form className="drop-shadow-2xl flex flex-col md:flex-row items-center"
            action="https://getlaunchlist.com/s/cws1wE">
            <input
              className="py-1 md:w-80 px-3 border border-pink-400 rounded-sm"
              type="email"
              name="email"
              placeholder="Your email"
            />
            <button
              className="py-1 px-4 mt-2 md:mt-0 bg-pink-500 border border-pink-700 hover:bg-pink-700 hover:border-pink-900 text-white"
              type="submit">
              Join waiting list
            </button>
          </form>
        </div>
      </div>
      <div
        className="absolute left-0 top-0 brightness-150 -z-50 blur-2xl h-screen w-screen bg-[url('google-deepmind-unsplash.jpg')]"
      />
    </>
  )
}

export default App
