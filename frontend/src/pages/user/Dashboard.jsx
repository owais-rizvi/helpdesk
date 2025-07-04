import { colors } from "../../colors"
import UserLayout from "../../layouts/UserLayout"

const Dashboard = () => {
  return (
    <UserLayout>
        <div className="h-screen" style={{fontFamily: 'Sanchez, serif'}}>
            <h1 className="text-center text-4xl font-medium mt-4 mb-6">Dashboard</h1>
            <div className="flex justify-evenly">
                <div className="shadow-[8px_8px_0px_rgba(0,0,0,0.3)] rounded-2xl flex flex-col w-[200px] h-[230px] text-center" style={{backgroundColor: "#2f82ff"}}>
                    <h1 className="text-lg mt-3.5 font-sanchez">Total Tickets</h1>
                    <h1 style={{color: "#05386b"}} className="text-8xl mt-10">12</h1>
                </div>
                <div className="shadow-[8px_8px_0px_rgba(0,0,0,0.3)] rounded-2xl flex flex-col w-[200px] h-[230px] text-center" style={{backgroundColor: "#0bff68"}}>
                    <h1 className="text-lg mt-3.5">Total Solved</h1>
                    <h1 style={{color: "#05386b"}} className="text-8xl mt-10">8</h1>
                </div>
                <div className="shadow-[8px_8px_0px_rgba(0,0,0,0.3)] rounded-2xl flex flex-col w-[200px] h-[230px] text-center" style={{backgroundColor: "#fe594e"}}>
                    <h1 className="text-lg mt-3.5">Total Awaiting Approval</h1>
                    <h1 style={{color: "#05386b"}} className="text-8xl mt-3">2</h1>
                </div>
                <div className="shadow-[8px_8px_0px_rgba(0,0,0,0.3)] rounded-2xl flex flex-col w-[200px] h-[230px] text-center" style={{backgroundColor: "#fcff6c"}}>
                    <h1 className="text-lg mt-3.5">Total in Progress</h1>
                    <h1 style={{color: "#05386b"}} className="text-8xl mt-10">2</h1>
                </div>
            </div>
        </div>
    </UserLayout>
  )
}

export default Dashboard