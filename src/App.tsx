/* import Counter from "./Components/Counter"; 
import BasicFuntions from "./typescript/BasicFuntions";
import BasicTypes from "./typescript/BasicTypes";
import ObjectLiterals from "./typescript/ObjectLiterals";  */
import UserPage from './Components/userPage';
import { AuthProvider } from './context/AuthContext';
/* import LoginPage from "./Components/LoginPage"; */


function App() {
  return (
    <AuthProvider>
       <div className='flex flex-col items-center h-svh'>
        {/* <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1> */}
        {/* <ObjectLiterals /> */}
        {/* <BasicFunctions /> */}
        {/*<BasicTypes />*/}
        {/* <Counter /> */}
        {/* <LoginPage /> */}
        <UserPage />
      </div>
    </AuthProvider>
  )
}

export default App
