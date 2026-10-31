import { useState } from 'react'
import antoniocvLogo from '../assets/logo-512.png'

const menuLinks = [
    { label: 'Progetti', href: '#work' },
    { label: 'Contatti', href: '#contatti' },
    { label: 'GitHub', href: 'https://github.com/tonyanto99', external: true },
]


function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
       <nav className='bg-white border-gray-200 py-2.5 dark:bg-gray-900'>
        <div className='flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto'>
        <a href='#' className='flex items-center'>
            <img src={antoniocvLogo} className='h-6 mr-3 sm:h-9' alt='Logo Antonio Antonelli'/>
            <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>Antonio Antonelli</span>
        </a>
        <div className='flex items-center lg:order-2'>
            <div className='hidden mt-2 mr-4 sm:inline-block'>
                <span></span>
            </div>
             <a href='/cv-antonio-antonelli.pdf' download='CV-Antonio-Antonelli.pdf'
				className='text-white bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 focus:outline-none dark:focus:ring-blue-800'>Scarica CV</a>
            <button type='button'
				className='inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
				aria-controls='mobile-menu-2' aria-expanded={menuOpen}
				onClick={() => setMenuOpen((open) => !open)}>
                <span className='sr-only'>{menuOpen ? 'Chiudi il menu' : 'Apri il menu'}</span>
                <svg className={`${menuOpen ? 'hidden' : 'block'} w-6 h-6`} fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
					<path fillRule='evenodd'
						d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
						clipRule='evenodd'></path>
				</svg>
                <svg className={`${menuOpen ? 'block' : 'hidden'} w-6 h-6`} fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
					<path fillRule='evenodd'
						d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
						clipRule='evenodd'></path>
				</svg>
			</button>
        </div>
        <div className={`${menuOpen ? 'block' : 'hidden'} items-center justify-between w-full lg:flex lg:w-auto lg:order-1`} id='mobile-menu-2'>
            <ul className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
                <li>
                    <a href='#' onClick={() => setMenuOpen(false)}
                        className='block py-2 pl-3 pr-4 text-white bg-blue-600 rounded lg:bg-transparent lg:text-blue-600 lg:p-0 dark:text-white'
                        aria-current='page'>Home</a>
                </li>
                {menuLinks.map((link) => (
                    <li key={link.label}>
                        <a href={link.href} onClick={() => setMenuOpen(false)}
                            {...(link.external && { target: '_blank', rel: 'noopener noreferrer' })}
                            className='block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-600 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'>{link.label}</a>
                    </li>
                ))}
            </ul>
        </div>
    </div>
</nav>
    )
}

export default Header;
