import AsideBlock from "./components/AsideBlock/AsideBlock";
import {Outlet} from "react-router-dom";
import MapAndAdvertising from "./components/MapAndAdvertising/MapAndAdvertising";
import Header from "./components/Header/Header";
function App() {
    const user = {
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG9pr9imIxIYtkasLO5K0XShV1ipYLS3WKYgyLtWk7jwKobonk0OrZFqe850gAsLa56Bw&usqp=CAU',
        firstName:'Alice',
        lastName: 'Smith',
        role: 'Pet owner',
        isActive: true,
    }
  return (
      <div className='flex flex-col  '>
       <div>
      <Header/>
       </div>
          <div className='flex flex-row w-[1200px]  my-[-110px] mx-auto justify-between '>
              <div className='w-[240px]'><AsideBlock user={user}/></div>
              <div className='w-[590px]'><Outlet/></div>
              <div className='w-[330px]'><MapAndAdvertising/></div>
          </div>

      </div>
  );
}

export default App;
