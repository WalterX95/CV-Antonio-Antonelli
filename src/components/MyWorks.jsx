import works from '../works/works.json'

const MyWorks = () => {
    return (
        <div id='work' className='flex flex-col items-center justify-center w-full h-full'>
            <h1 className='text-4xl font-bold m-auto p-4 text-gray-800 dark:text-white'>My Works</h1>
            <div className='grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 md:grid-cols-3'>
                {works.map((work) => (
                    <div key={work.id} className='flex flex-col p-4 bg-white rounded-lg shadow-md dark:bg-gray-800'>
                        {work.image && (
                            <img src={work.image} alt={work.imageAlt} loading='lazy' className='object-cover object-top w-full mb-4 rounded-md aspect-[2/1]'/>
                        )}
                        <h2 className='text-xl font-semibold text-gray-800 dark:text-white'>{work.title}</h2>
                        <p className='mt-2 mb-5 text-gray-600 dark:text-gray-400'>{work.description}</p>
                        <a href={work.link} target='_blank' rel='noopener noreferrer'
                            className='group inline-flex items-center m-auto self-start gap-2 px-5 py-2.5 mt-auto text-sm font-semibold text-white transition-all duration-300 rounded-full shadow-md bg-gradient-to-r from-blue-500 to-green-500 hover:shadow-lg hover:shadow-green-500/40 hover:-translate-y-0.5 hover:from-blue-600 hover:to-green-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300 dark:focus-visible:ring-blue-800'>
                            <svg className='w-4 h-4' fill='currentColor' role='presentation' aria-hidden='true'>
                                <use href='/icons.svg#github-icon'></use>
                            </svg>
                            {work.label}
                            <svg className='w-4 h-4 transition-transform duration-300 group-hover:translate-x-1' fill='none' stroke='currentColor' strokeWidth='2.5' viewBox='0 0 24 24' aria-hidden='true'>
                                <path strokeLinecap='round' strokeLinejoin='round' d='M5 12h14M13 6l6 6-6 6'/>
                            </svg>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyWorks