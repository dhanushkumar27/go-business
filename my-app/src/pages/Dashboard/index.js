
import DashboardHeader from '../../components/DashboardHeader'
import DashboardBody from '../../components/DashboardBody'
import DashboardFooter from '../../components/DashboardFooter'

import './index.css'

const Dashboard = () =>{
  
    return (
        <div className='dashboard-page'>
            <DashboardHeader/>
            <DashboardBody/>
            <DashboardFooter/>
        </div>
        
    )
}
export default Dashboard