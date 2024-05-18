import React from 'react'

const Service = () => {
    return (
        <>
            <div className="service-container bg-slate-900 h-full flex flex-wrap justify-center items-center">
                
                <div className="relative flex flex-col mt-6 text-gray-700 bg-clip-padding bg-gray-200 bg-opacity-10 backdrop-filter backdrop-blur-lg w-96 rounded-xl shadow-md m-6">
                    <div className="p-6">

                        <div class="flex  items-center justify-center ">
                            <span class="absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-2xl box-content font-extrabold text-transparent text-center select-none">
                                UI/UX
                            </span>
                            <h1
                                class="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-2xl font-extrabold text-transparent text-center select-auto">
                                UI/UX
                            </h1>
                        </div>
                        <p className="block font-sans text-base antialiased font-light leading-relaxed text- text-gray-100">
                            Because it's about motivating the doers. Because I'm here to follow my
                            dreams and inspire others.
                        </p>
                    </div>
                    <div className="p-6 pt-0">
                        <a href="#" className="inline-block">
                            <button
                                className="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                                type="button">
                                Learn More
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                    stroke="currentColor" className="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                                </svg>
                            </button>
                        </a>
                    </div>
                </div>

               
            </div>
        </>
    )
}

export default Service