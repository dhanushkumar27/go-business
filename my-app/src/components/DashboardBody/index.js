import {useState,useEffect} from 'react'

import './index.css'

  const apiStatus = {
        initial:'INITAIL',
        success:'SUCCESS',
        failure:'FAILURE',
        inProgress:'IN_PROGRESS'
    }

const DashboardBody = () =>{
  

    const [currentStatus,setCurrentStatus] = useState(apiStatus.initial)

    useEffect(() => {
    getDashboardData()
}, [])

    

    const getDashboardData = () =>{
        setCurrentStatus(apiStatus.inProgress)
    }

    const successView = () => {}

    const failureView = () => {}

    const inProgressView = () => {}

    const renderDashboard = () =>{
    switch(currentStatus){
        case apiStatus.success:
        return successView()
        
        case apiStatus.failure:
        return failureView()
        
        case apiStatus.in_progress:
        return inProgressView()

        default:
            return null
    }

}

    return (
        <div className='dashboard-body-container'>
            <h1 className='dashboard-heading'>Referrals Dashboard</h1>
            <p className='dashboard-para'>Track your Referrals, earnings,partner activity in one place.</p>

        </div>
    )
}


export default DashboardBody