import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../Container/Container.jsx'

function Header() {
    return (
        <div className='py-3 w-full bg-purple-900'>
            <Container>
                <div className='flex items-center justify-between p-1'>
                    <h3 className='text-white text-2xl'>Aditya Verma</h3>
                    <div className=''>
                        <ul className='flex space-x-4'>
                            <li className=''><Link to="/Intensity" className='text-white px-1'>Intensity</Link></li>
                            <li className=''><Link to="#" className='text-white px-1'>Likelihood</Link></li>
                            <li className=''><Link to="#" className='text-white  px-1'>Relevance</Link></li>
                            <li className=''><Link to="#" className='text-white  px-1'>Country</Link></li>
                            <li className=''><Link to="#" className='text-white  px-1'>Region</Link></li>
                            <li className=''><Link to="#" className='text-white  px-1'>City</Link></li>
                            <li className=''><Link to="#" className='text-white  px-1'>Topics</Link></li>
                        </ul>
                    </div>
                </div>
            </Container>
        </div>

    )
}

export default Header
