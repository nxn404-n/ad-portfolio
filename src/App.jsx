import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import AllProjects from './components/AllProjects';

function App() {
  return (
    <div className="p-3 flex flex-col ">
      <Navbar />
      <Homepage />
      <AllProjects />
    </div>
  )
}

export default App
