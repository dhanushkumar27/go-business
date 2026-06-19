import Cookies from 'js-cookie'
import {useNavigate} from 'react-router-dom'

import './index.css'

const DashboardHeader = (props) =>{
    const navigate = useNavigate()
    const onClickLogout = () =>{
        Cookies.remove("jwt_token")
        navigate("/login",{replace:true})
    }

    return (
    <div className="header-contaniner">
        <h1 className='header-heading'>Go Business</h1>
        <div className='header-buttons-card'>
            <button type="button" className='header-tryForFree-button'>Try For Free</button>
            <button className='header-logout-button' type="button" onClick={onClickLogout}>Log out</button>
        </div>
    </div>
     )
}

export default DashboardHeader