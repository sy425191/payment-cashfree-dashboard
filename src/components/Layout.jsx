import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <Sidebar />
      <div className="w-full md:overflow-y-auto bg-slate-50">{children}</div>
    </div>
  );
};

export default Layout;
