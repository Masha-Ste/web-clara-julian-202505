import Header from '../components/Header'
import { useState, useEffect } from 'react'

export default function Landing() {
  const fullText = 'Jugando a producir, dirigir y escribir guiones'
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, i))
      i++
      if (i > fullText.length) clearInterval(interval)
    }, 90)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id='Landing' className=' min-h-screen flex items-center justify-center text-white'>
      <Header />
      <div className='z-10 mt-20 md:mt-0 p-6 bg-black/60 text-center min-w-full  shadow-lg'>
        <h1 className='text-2xl md:text-5xl leading-relaxed  whitespace-pre-line'>{displayedText}</h1>
      </div>
    </section>
  )
}
