import React from 'react'

const page = () => {
  return (
    <div className='mt-22 w-screen max-w-2xl mx-auto text-xl tracking-wide flex flex-col gap-12 pt-40 pb-16 text-brandBlack px-4'>
       <p>GitScope is a developer analytics platform that transforms public GitHub data into meaningful insights. Explore repositories, languages, activity, and more - all in one place.</p> 

       <p>GitScope brings that information together into one focused and interactive experience.</p>

       <p>With GitScope, you can search for a GitHub developer and explore their profile through a structured dashboard. Instead of simply showing basic profile information, GitScope helps you look deeper into a developer's public work. You can explore their repositories, discover the languages they work with, see which projects receive the most attention, and understand patterns in their repository activity.</p>

       <p>The goal isn't to judge how good a developer is. It's about making their public work easier to understand.</p>

       <p>The project is also an exploration of modern frontend development. It combines Next.js, TypeScript, Tailwind CSS, GitHub's API, Recharts, and Motion to create an interface where data and design work together.</p>

       <p>From the landing page to the developer dashboard, every part of GitScope is designed around exploration. You can start with a simple username search and gradually discover repositories, technologies, activity, and other details about a developer's public GitHub presence.</p>

       <h2 className='font-semibold text-2xl'>Built for developers. Built with data. Built to explore.</h2>
    </div>
  )
}

export default page