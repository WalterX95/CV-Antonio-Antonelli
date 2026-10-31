export default function HeroComponent({title, subtitle, description, buttonText, buttonLink, backgroundColor, videoMp4, videoWebm, videoPoster}) {
    return (
<div className={`relative h-screen flex items-center overflow-hidden ${backgroundColor}`}>
    {videoMp4 && (
        <>
            {/* Video di sfondo in loop; con "riduci movimento" attivo resta solo il gradiente */}
            <video className="absolute inset-0 object-cover w-full h-full motion-reduce:hidden"
                autoPlay muted loop playsInline poster={videoPoster} aria-hidden="true">
                {videoWebm && <source src={videoWebm} type="video/webm"/>}
                <source src={videoMp4} type="video/mp4"/>
            </video>
            <div className="absolute inset-0 bg-slate-950/25" aria-hidden="true"></div>
        </>
    )}
    <div className="relative px-4 mx-auto mt-16 mb-16 max-w-7xl sm:mt-24">
        <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] sm:text-5xl md:text-6xl font-title">
                <span className="block">{title}</span>
                <span className="block pt-2">{subtitle}</span>
            </h1>
            <p className="max-w-md mx-auto mt-3 text-base text-gray-100 drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)] sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                {description}
            </p>
            <div className="max-w-md mx-auto mt-5 sm:flex sm:justify-center md:mt-8">

                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                    <a href={buttonLink}
                        className="block shadow-lg w-full px-8 py-3 text-base font-medium text-blue-600 bg-white hover:bg-blue-50 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 rounded-md md:py-4 md:text-lg md:px-10 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300">
                        {buttonText}
                    </a>
                </div>
            </div>
        </div>
    </div>

</div>
    )
}
