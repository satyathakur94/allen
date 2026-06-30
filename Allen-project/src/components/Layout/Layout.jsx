import {Outlet} from 'react-router-dom'
import { Navbar } from '../Navbar/Navbar'
import Bottombar from '../BottonBar/Bottombar'
export default function Layout(){
    return <>
        <div>
            {<Navbar/>}
        </div>
        <br></br>
        <br></br>
        <Outlet/>
        
        <br></br>
        <br></br>
         <br></br>
          <br></br>
           <br></br>
        <div>

            {<Bottombar/>}
        </div>
    </>
}