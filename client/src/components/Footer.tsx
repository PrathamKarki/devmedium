import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
   <>

<footer className='border-t-1'>
     <div className='footer w-[80%] max-w-7xl mx-auto py-6 '>
        <div className='flex items-center justify-center '>
            <ul className='flex gap-5'>
                <li><Link href='/'>Help</Link></li>
                <li><Link href='/'>About</Link></li>
                <li><Link href='/'>Privacy</Link></li>
                <li><Link href='/'>Terms</Link></li>
                <li><Link href='/'>Rules</Link></li>
            </ul>
        </div>

     </div>
</footer>
   </>
  )
}

export default Footer