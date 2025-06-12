import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='flex flex-wrap justify-between bg-gray-400 font-semibold'>
            <Link to="/" className='pl-5 m-5'>Home</Link>
            <div className='p-5 font-bold pl-24'>Ecommerce</div>
            <div className='flex m-5'>
                <Link to="/contact" className='pr-10'>Contact</Link>
                <Link to="/cart" className='pr-5'>Cart</Link>
            </div>
        </div>
    );
}

export default Navbar;
