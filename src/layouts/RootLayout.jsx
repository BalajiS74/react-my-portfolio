import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

function RootLayout() {
  useEffect(() => {
    const sections = document.querySelectorAll('section, .reveal, .animated-section, .animated-card')

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')

            const next = entry.target.nextElementSibling
            if (next && (next.matches('section') || next.matches('.reveal') || next.matches('.animated-section') || next.matches('.animated-card'))) {
              next.classList.add('in-view')
            }

            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.4, rootMargin: '0px 0px -12% 0px' }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <div className='h-100'>
      <Navbar />
      <div className=''>
        <Outlet />
      </div>
    </div>
  )
}

export default RootLayout