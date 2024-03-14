



//   return (
//     <header>
//       <div className="container">
//         <Link to="/">
//           <h1>Eazy</h1>
//         </Link>
//         <nav>
//           {user && (
//             <div>
//               <span>{user.email}</span>
//               <button onClick={handleClick}>Log out</button>
//             </div>
//           )}
//           {!user && (
//             <div>
//               <Link to="/login">Login</Link>
//               <Link to="/signup">Signup</Link>
//             </div>
//           )}
//         </nav>
//       </div>
//     </header>
//   )
// }

// export default Navbar

import React, { useState,useEffect } from 'react'
import styled from 'styled-components'
import avatar from '../../img/avatar.png'
import { signout } from '../../utils/Icons'
import { menuItems } from '../../utils/menuItems'

import { Link,useLocation,useNavigate } from 'react-router-dom'
import { useLogout } from '../../hooks/useLogout'
import { useAuthContext } from '../../hooks/useAuthContext'
import '../../pages/Login.css'
import LogoutConfirmationModal from '../../LogoutConfirmationModal'





 

function Navigation({ active, setActive }) {
    const { logout } = useLogout();
    const { user } = useAuthContext();
    const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
    const location = useLocation(); // Get the current route location
    const navigate = useNavigate();

  
    useEffect(() => {
      // Close the logout modal whenever the route changes
      setIsLogoutModalOpen(false);
    }, [location.pathname]);
  
    const handleLogout = () => {
      setIsLogoutModalOpen(true);
    };
  
    const handleLogoutConfirmed = () => {
        logout();
        setIsLogoutModalOpen(false);
      
        // Redirect to the login page using React Router v6
        window.location.href = '/login';
      };
      
  
    const handleLogoutCanceled = () => {
      setIsLogoutModalOpen(false);
    };
  
    // Conditionally render the navigation bar based on the route
    const shouldRenderNavigation = location.pathname !== '/login' && location.pathname !== '/signup';;
  
    return shouldRenderNavigation ? (
      <NavStyled>
        <div className="user-con">
          <img src={avatar} alt="" />
          <div className="text">
            {/* <h2></h2>
            <p>Your Money</p> */}
          </div>
        </div>
        <ul className="menu-items">
          {menuItems.map((item) => (
            <li
              key={item.id}
              onClick={() => setActive(item.id)}
              className={active === item.id ? 'active' : ''}
            >
              <Link to={item.link} style={{ textDecoration: "none" }}>
              <span >{item.icon}</span>
                <span className="title">{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
        {!user && (
          <div>
            <Link to="/login" className="loginbtn">
              Login
            </Link>
            <Link to="/signup" className="loginbtn">
              Signup
            </Link>
          </div>
        )}
        <div className="bottom-nav">
          <li>
            {user && (
              <div >
                <span className="name">{user.email}</span>
                <li onClick={handleLogout} className="name1">
                    {signout} Sign Out
                </li>
              </div>
            )}
          </li>
        </div>
        {/* Logout Confirmation Modal */}
        <LogoutConfirmationModal
          isOpen={isLogoutModalOpen}
          onClose={handleLogoutCanceled}
          onConfirm={handleLogoutConfirmed}
        />
      </NavStyled>
    ) : null;
  }
  
  

const NavStyled = styled.nav`
    padding: 2rem 1.5rem;
    width: 374px;
    height: 100%;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;

    .user-con{
        height: 100px;
        display: flex;
        align-items: center;
        gap: 1rem;

        img{
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            background: #fcf6f9;
            border: 2px solid #FFFFFF;
            padding: .2rem;
            box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
        }
        h2{
            color: rgba(34, 34, 96, 1);
        }
        p{
            color: rgba(34, 34, 96, .6);
        }
    }

    .menu-items{
        flex: 1;
        display: flex;
        flex-direction: column;
    
        li{
            display: grid;
            grid-template-columns: 40px auto;
            align-items: center;
            margin: .6rem 0;
            font-weight: 500;
            cursor: pointer;
            transition: all .4s ease-in-out;
            color: rgba(34, 34, 96, .6);
            padding-left: 1rem;
            position: relative;
        
            i{
                color: rgba(34, 34, 96, 0.6);
                font-size: 1.4rem;
                transition: all .4s ease-in-out;
            }
        }
    }

    .active{
        color: rgba(34, 34, 96, 1) !important;
        i{
            color: rgba(34, 34, 96, 1) !important;
        }
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 4px;
            height: 100%;
            background: #222260;
            border-radius: 0 10px 10px 0;
        }
    }
`;

export default Navigation;