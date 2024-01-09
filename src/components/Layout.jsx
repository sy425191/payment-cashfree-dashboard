import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-column h-screen w-screen">
      <Sidebar />
      <div className="w-full overflow-y-auto bg-slate-50">{children}</div>
    </div>
  );
};

export default Layout;
