import {HeaderComponent} from "../components/Header/HeaderComponent";
import { FooterComponent } from "../components/Footer/FooterComponent";
import { Outlet } from "react-router-dom";

 export const App = () =>{
  return(
    <div className="layout">
      <HeaderComponent/>
      <main className="content-area">
        <Outlet />
      </main>
      <FooterComponent/>
    </div>
  )
}


