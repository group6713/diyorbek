import React from "react";
import Swal from "sweetalert2";
import { Button } from "flowbite-react";
import CardContainer from '../Components/Card/CardContainer';

const Home = ()=>{

    const clicked = ()=>{
        Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire("Saved!", "", "success");
            } else if (result.isDenied) {
              Swal.fire("Changes are not saved", "", "info");
            }
          });
    }
    


    return(
        <div>
         
            <h1> Home Page</h1>
            <button onClick={clicked} className="bg-cyan-600 p-2 rounded text-white">Click me</button>
            <h1 className="text-center text-[35px] font-[900]">text center</h1>
            <br />
            <br />
          <Button>click me</Button>
          <CardContainer />
        </div>
    )
}

export default Home;