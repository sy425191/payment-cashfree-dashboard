import Sidebar from "./Sidebar";

const Layout = ({children}) => {
    return (
        <div className="flex flex-column h-screen w-screen">
            <Sidebar />
            {children}
        </div>
    )
}

export default Layout;