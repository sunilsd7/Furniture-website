/* <div >
    {
      data.map((sunil,i)=>{
        return <div key={i}>
          <h2>{sunil.img}</h2>
        </div>

      })
    }
  </div> */

import living from "../assets/living.png";
import dinning from "../assets/dinning.png";
import Bedroom from "../assets/Bedroom.png";

export const data = [
  {
    id: 1,
    image: living,
    head: "Living",
  },
  {
    id: 2,
    image: dinning,
    head: "Dinning",
  },
  {
    id: 3,
    image: Bedroom,
    head: "Bedroom",
  },
];
