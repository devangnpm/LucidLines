import TotalUsers from "../components/TotalUsers"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import TotalPosts from "../components/TotalPosts"
import TotalComments from "../components/TotalComments"
import RecentUsers from "../components/RecentUsers"
import RecentComments from "../components/RecentComments"


export const Admin = () => {
    return(
        <div>
        <div className="flex flex-nowrap w-full border-red-500 mt-12  gap-6  h-45 justify-center lg:flex-row ml-22">
         <Header/>
         <Sidebar/>
         <TotalUsers/>
         <TotalPosts/>
         <TotalComments/>
        </div>

        <div className="flex  w-full  mt-7 ml-3">
         <RecentUsers/>
         <RecentComments/>
        </div>

        </div>
    )
}