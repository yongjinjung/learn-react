import { useState } from 'react'
import './App.css'

function Header() {
  return (
    <header>
      <h2>header</h2>
    </header>
  )
}

function Footer() {
  return (
    <footer>
      <h2>Footer</h2>
    </footer>
  )
}

function Main(){
  return (
    <main>
      <Counter />
    </main>
  );
}

function Counter() {
  return (
    <button>Counter</button>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
