import { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import logo from "../../../assets/images/logo.png"; 
import { FaBars, FaTimes } from 'react-icons/fa';


const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen w-full  overflow-hidden font-raleway relative">
    
      <button 
        className="md:hidden absolute top-4 left-4 z-50 text-2xl" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <aside className={`
        fixed md:static inset-y-0 left-0 z-40 w-70 bg-secondary border-r border-gray-200 p-6 flex flex-col justify-between shrink-0 transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div>
          <NavLink to='/'>
            <img src={logo} alt="Logo" className="h-50 mb-10 mx-auto" />
          </NavLink>
          <nav className="flex flex-col gap-2 text-xs font-bold uppercase tracking-widest text-gray-500">
            {['Overview', 'Products', 'Orders', 'Customers', 'Settings'].map(nav => (
              <NavLink 
                key={nav}
                to={`/dashboard/${nav.toLowerCase()}`}
                onClick={() => setIsOpen(false)} 
                className={({isActive}) => isActive ? "text-white bg-black p-3 rounded" : "p-3 hover:bg-gray-50 hover:text-black rounded"}
              >
                {nav}
              </NavLink>
            ))}
          </nav>
        </div>
        <button className="border border-gray-300 py-2 rounded text-xs hover:bg-gray-50">Logout</button>
      </aside>

      {isOpen && <div className="md:hidden fixed inset-0 bg-black/50 z-30" onClick={() => setIsOpen(false)}></div>}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <header className="h-16 bg-white border-b flex justify-end items-center px-8 shrink-0">
            <div className="flex items-center gap-3">
                <div className="text-right">
                    <p className="text-sm font-bold">Admin</p>
                    <p className="text-[10px] text-gray-500">Super User</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-200 border"></div>
            </div>
        </header>
        
        <main className="flex-1 overflow-y-auto p-8">
          <Outlet /> 
        </main>
      </div>
    </div>
  );
};
export default DashboardLayout;