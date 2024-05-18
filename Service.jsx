import React from 'react'
const service = [
    {
        name: "Web App",
        det : "We specialize in crafting cutting-edge web applications that propel businesses forward in the digital landscape. Our team combines creativity with technical expertise to deliver bespoke solutions. "
    }, 
    {
        name:"Mobile App",
        det: "Empower your business with our mobile app development solutions. We create sleek, functional apps that seamlessly integrate into users' lives, delivering convenience and value on the go."
    },
    {
        name:"Graphic Design",
        det: "Unlock the power of visual storytelling with our graphic design services. From captivating logos to stunning brand identities, we bring your vision to life with creativity and precision."
    },  
    {
        name:"UI/UX",
        det: "Elevate user experiences with our UI/UX design expertise. We craft intuitive interfaces that engage and delight users, driving meaningful interactions and conversions."
    },
    {
        name:"Video Editing",
        det: "Transform raw footage into captivating stories with our expert video editing services. We blend creativity and technical proficiency to craft polished videos that captivate audiences and amplify your message."
    }
]

const Service = () => {
    return (
        <>
            <div className="service-container bg-slate-900 h-full flex flex-wrap justify-center items-center">
                {service.map((e)=>{
                    return(
                    <div className="relative flex flex-col mt-6 text-gray-700 bg-clip-padding bg-gray-200 bg-opacity-10 backdrop-filter backdrop-blur-lg w-72 rounded-xl shadow-md m-6 hover:scale-105 duration-200">
                    <div className="p-6">

                        <div class="flex  items-center justify-center ">
                            <span class="absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-2xl box-content font-extrabold text-transparent text-center select-none">
                                {e.name}
                            </span>
                            <h1
                                class="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-2xl font-extrabold text-transparent text-center select-auto">
                                {e.name}
                            </h1>
                        </div>
                        <hr className='h-px'/>
                        <br />
                        <p className="block font-sans text-base antialiased font-light leading-relaxed text- text-gray-100">
                            {e.det}
                        </p>
                    </div>
                    <div className="p-6 pt-0">
                        <a href="#" className="inline-block">
                            <button
                                className="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                                type="button">
                                Technologies
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                    stroke="currentColor" className="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                                </svg>
                            </button>
                        </a>
                    </div>
                </div>)
                })}
                

               
            </div>
        </>
    )
}

export default Service