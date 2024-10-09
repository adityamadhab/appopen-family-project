import { Link } from 'react-router-dom';
import React from 'react'

export default function NewHeader() {
    return (
        <div>
            {/* Header Section */}
            <header className="bg-[#d9645a] py-2" >
                <div className="container mx-auto px-4 flex items-center" >
                    <img src='/government.png' alt='Indian Flag' width={"60px"} height={"80px"} className='mr-5'></img>
                    <h1 className="text-white text-3xl font-medium	">National Family Records Portal</h1>
                </div>
            </header>

            {/* Navigation Bar */}
            <nav className="bg-gray-200 border-b border-gray-300">
                <div className="container mx-auto px-4">
                    <ul className="flex space-x-1 text-[0.8rem] " style={{ height: "2rem" }}>
                        <li className=' hover:bg-[#105B7A] hover:text-white flex items-center px-3' style={{ minHeight: "100%" }}><Link to="/" className=" transition-colors">Home</Link></li>
                        <li className=' hover:bg-[#105B7A] hover:text-white flex items-center px-3' style={{ minHeight: "100%" }}><Link to="/data-collection" className=" transition-colors ">Data Collection</Link></li>
                        <li className=' hover:bg-[#105B7A] hover:text-white flex items-center px-3' style={{ minHeight: "100%" }}><Link to="/family-tree" className=" transition-colors ">Family Tree</Link></li>
                        <li className=' hover:bg-[#105B7A] hover:text-white flex items-center px-3' style={{ minHeight: "100%" }}><Link to="/issues" className=" transition-colors ">Issues</Link></li>
                        <li className=' hover:bg-[#105B7A] hover:text-white flex items-center px-3' style={{ minHeight: "100%" }}><Link to="/help" className=" transition-colors ">Help Center</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
