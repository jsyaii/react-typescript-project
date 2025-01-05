import { useDispatch, useSelector } from "react-redux"
import { RootState } from "./app/store"
import { decrement, increment } from "./app/features/counter/counterSlice"
import { Button } from "./components/ui/button"
import { Outlet } from "react-router-dom"
import Navbar from "./components/Layout/Navbar"


function App() {
  
  return (
    <div>
<Navbar />
  <Outlet />  
    </div>
  );
  
}

export default App;
