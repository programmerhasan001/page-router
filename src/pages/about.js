import AboutLayout from '@/components/AboutLayout'
import React from 'react'

export default function About() {
  return (
    <div className="min-h-[30vh] bg-green-200">
        <h2 className="text-3xl">About page</h2>
    </div>
  )
}


About.getLayout = (page) => {
    return (
        <AboutLayout>
            {page}
        </AboutLayout>
    )
}