import './Navbar.css'
import telephone from "./telephone.png";
import allen from "./allen.png";
import { useNavigate } from 'react-router-dom';


export function Navbar(){
    const navigate = useNavigate();
    return <div className='main-outer-div'>
        <div className='outernavbar-div'>
            <img onClick={()=> navigate('/')} className="allen-logo" src={allen}/>
            <div className='outernavbar-div'>
                <img className='phone-logo' src={telephone}/>
                <button className='login-button'>Login</button>
            </div>
        </div>
        <div className='inner-div'>
            <p onClick={()=> navigate('/classroom')}>Classroom Course</p>
            <p onClick={()=> navigate('/error')}>Online Course</p>
            <p onClick={()=> navigate('/error')}>Test Series</p>
            <p onClick={()=> navigate('/error')}>Results</p>
            <p onClick={()=> navigate('/error')}>Study Material</p>
            <p onClick={()=> navigate('/error')}>Scholarships</p>
            <p onClick={()=> navigate('/error')}>Allen E-Store</p>
            <p onClick={()=> navigate('/error')}>More</p>
        </div>
    </div>
}