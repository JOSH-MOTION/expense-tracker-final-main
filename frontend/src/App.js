import React, { useState, useMemo,useEffect } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import bg from './img/bg.png';
import { MainLayout } from './styles/Layouts';
import Orb from './Components/Orb/Orb';
import Navigation from './Components/Navigation/Navigation';
import Dashboard from './Components/Dashboard/Dashboard';
import Incomes from './Components/Income/Income';
import Expenses from './Components/Expenses/Expenses';
import { useGlobalContext } from './context/globalContext';
import Loading from './Loading'; // Import your Loading component
import Login from './pages/Login';
import Signup from './pages/Signup';
import { Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
import Transaction from './Components/Transaction/Transaction';

function App() {
  const global = useGlobalContext();
  console.log(global);

  const { user } = useAuthContext()

  const orbMemo = useMemo(() => <Orb />, []);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (you can replace this with your actual loading logic)
    setTimeout(() => {
      setIsLoading(false); // Set isLoading to false when your app is ready
    }, 2000); // Replace with your desired loading time
  }, []);

  return (
    <AppStyled bg={bg} className="App">
      {orbMemo}
      <MainLayout>
        <Router>
        {isLoading ? ( // Display the Loading component while isLoading is true
        <Loading />
      ) : (
        <>
          <Navigation />
          <main>
          <Routes>
          
          <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
          <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/Signup" />} />
              <Route path="/dashboard" element={ <Dashboard />} />
              <Route path="/transactions" element={ <Transaction />} />
              <Route path="/expenses" element={<Expenses />} />
              <Route path="/incomes" element={<Incomes />} />
            </Routes>
          </main>
          </>
          )}
        </Router>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.bg});
  position: relative;
  main {
    flex: 1;
    background: rgba(200, 246, 249, 0.78);
    border: 3px solid #ffffff;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export default App;







// function App() {
//   const [active, setActive] = useState(1)

//   const global = useGlobalContext();
//      console.log(global);
  
//      const { user } = useAuthContext()

//   const displayData = () => {
//     switch(active){
//       case 1:
//         return <Dashboard />
//       case 2:
//         return <Dashboard />
//       case 3:
//         return <Income />
//       case 4: 
//         return <Expenses />
//         case 5: 
//         return < Login />
//         case 6: 
//         return <Signup />
//       default: 
//         return <Dashboard />
//     }
//   }

//   const orbMemo = useMemo(() => {
//     return <Orb />
//   },[])

//   return (
//     <AppStyled bg={bg} className="App">
//       {orbMemo}
//       <MainLayout>
//         <Navigation active={active} setActive={setActive} />
//         <main>
//           {displayData()}
//         </main>
//       </MainLayout>
//     </AppStyled>
//   );
// }

// const AppStyled = styled.div`
//   height: 100vh;
//   background-image: url(${props => props.bg});
//   position: relative;
//   main{
//     flex: 1;
//     background: rgba(252, 246, 249, 0.78);
//     border: 3px solid #FFFFFF;
//     backdrop-filter: blur(4.5px);
//     border-radius: 32px;
//     overflow-x: hidden;
//     &::-webkit-scrollbar{
//       width: 0;
//     }
//   }
// `;

// export default App;
