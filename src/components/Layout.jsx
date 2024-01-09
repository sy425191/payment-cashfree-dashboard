import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-column h-screen w-screen">
      <Sidebar />
      <div className="w-full overflow-y-auto">{children}</div>
    </div>
  );
};

export default Layout;
