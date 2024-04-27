import React from "react";
const Skills = () => 

{
    return(
        <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>

            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="w-full flex justify-center items-center flex-col mb-7">
                    <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center'>Skills</p>
                    <p  className="py-4 text-2xl">Here is a list of things that I have learned and tools I have used </p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <p className="my-4">React</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <p className="my-4">C++</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <p className="my-4">JavaScript</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <p className="my-4">MongoDB</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <p className="my-4">Tailwind</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <p className="my-4">Java</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <p className="my-4">Node JS</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <p className="my-4">Docker</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <p className="my-4">SQLite</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <p className="my-4">Cypress</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <p className="my-4">Socket.IO</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <p className="my-4">Kotlin</p>
                    </div>
                    

                </div>
                
            </div>

        </div>
    )
}

export default Skills;