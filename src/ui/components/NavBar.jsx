import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';



export const NavBar = () => {
    
    const { user ,logout } = useContext(AuthContext)

    console.log(user)
    const navigate = useNavigate()

    const onLogout = () => {
    navigate("/login", { replace: true }); // replace permite reemplazar la vista anterior por la nueva  (no me puedo devolver a la anterior)//

    logout()
    console.log('sali')
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Heroes App
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={({ isActive }) =>
                        `nav-link nav-item  ${isActive ? "active" : ""}`
                        }
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        to="/dc"
                        className={({ isActive }) =>
                        `nav-link nav-item  ${isActive ? "active" : ""}`
                        }
                    >
                        DC
                    </NavLink>
                    <NavLink 
                        to="/search"
                        className={({ isActive }) =>
                        `nav-link nav-item  ${isActive ? "active" : ""}`
                        }
                    >
                        Search
                    </NavLink>
                  
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-link nav-item text-primary"> { user?.name} </span>
                    <button onClick={onLogout} className="nav-link nav-item btn">
                        Log out
                    </button>
                </ul>
            </div>
        </nav>
    )
}