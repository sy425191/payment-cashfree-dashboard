import Sidebar from "./Sidebar";

const Layout = ({children}) => {
    return (
        <div className="">
            <Sidebar />
            {children}
        </div>
    )
}

export default Layout;