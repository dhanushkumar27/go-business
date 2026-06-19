import {useNavigate} from 'react-router-dom'

import Login from "../../pages/Login"


const LoginWrapper = () => {
    const navigate = useNavigate()
    return <Login navigate={navigate}/>
}

export default LoginWrapper