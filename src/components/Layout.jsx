import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-column h-screen w-screen">
      <Sidebar />
      <div className="w-full">{children}</div>
    </div>
  );
};

export default Layout;
