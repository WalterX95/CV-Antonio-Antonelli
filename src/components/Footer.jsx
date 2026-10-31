function Footer() {
    return (
        <footer id='contatti'>
    <div className="bg-gray-800 py-4 text-gray-400">
      <div className="container px-4 mx-auto">
        <div className="-mx-4 flex flex-wrap justify-between">
          <div className="px-4 my-4 w-full xl:w-1/4">
            <a href="#" className="flex items-center gap-3 mb-6">
              <img src="/logo.svg" alt="" className="w-10 h-10"/>
              <span className="text-2xl font-bold text-white">Antonio Antonelli</span>
            </a>
            <p className="text-justify">
              Junior Data Analyst formato con EPICODE. Trasformo i dati grezzi in informazioni chiare e utili per prendere decisioni, con Excel, SQL, Python e Power BI.
            </p>
          </div>

          <div className="px-4 my-4 w-full sm:w-auto">
            <div>
              <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-500">Navigazione</h2>
            </div>
            <ul className="leading-8">
              <li><a href="#" className="hover:text-green-400">Home</a></li>
              <li><a href="#work" className="hover:text-green-400">Progetti</a></li>
              <li><a href="https://github.com/tonyanto99" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">GitHub</a></li>
            </ul>
          </div>
          <div className="px-4 my-4 w-full sm:w-auto">
            <div>
              <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-500">Competenze</h2>
            </div>
            <ul className="leading-8">
              <li>Excel: tabelle pivot, XLOOKUP, grafici</li>
              <li>SQL: MySQL, JOIN, viste</li>
              <li>Python: pandas, seaborn</li>
              <li>Power BI: Power Query, DAX</li>
            </ul>
          </div>
          <div className="px-4 my-4 w-full sm:w-auto xl:w-1/5">
            <div>
              <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-500">Contatti</h2>
            </div>
            <a href="https://github.com/tonyanto99" target="_blank" rel="noopener noreferrer" aria-label="GitHub di Antonio Antonelli" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full hover:text-green-400 hover:border-green-400">
              <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-gradient-to-r from-blue-600 to-green-600 py-4 text-gray-100">
      <div className="container mx-auto px-4">
        <div className="-mx-4 flex flex-wrap justify-between">
          <div className="px-4 w-full text-center sm:w-auto sm:text-left">
            © {new Date().getFullYear()} Antonio Antonelli. Tutti i diritti riservati.
          </div>
          <div className="px-4 w-full text-center sm:w-auto sm:text-left">
            Realizzato con React e Tailwind CSS.
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer;
