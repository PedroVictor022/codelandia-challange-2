import jordan_1 from "../../assets/air-jordan-1-high-zoom-cmft-tropical-twist-1-400.png";
import jordan_2 from "../../assets/air-jordan-1-mid-black-noble-red-w-1-1000.png"
import jordan_3 from "../../assets/air-jordan-1-mid-bright-citrus-1-1000 1.png"

import jordan_4 from "../../assets/air-jordan-1-mid-carbon-fiber-1-1000 1.png"
import jordan_5 from "../../assets/air-jordan-1-mid-dutch-green-1-400.png"
import jordan_6 from "../../assets/air-jordan-1-mid-grey-camo-1-1000 1.png"
import jordan_7 from "../../assets/air-jordan-1-mid-light-smoke-grey-gs-1-1000.png"
import jordan_8 from "../../assets/air-jordan-1-retro-high-court-purple-w-1-400.png"

const MainHome = () => {

  return (
    <div className="h-screen w-full">
      
      <div className="h-16 p-10 font-bold ">
        <h2 className="text-4xl py-6">A melhor loja de Jordan</h2>
        <p>O tênis Jordan é fruto de uma velha e forte parceria</p>
        <p>entre a Nike e o jogador Michael Jordan</p>
      </div>

      <div className="w-full">
        <div className="grid grid-cols-2">
          
          <div className="p-2 "><img src={jordan_1} alt="jordan" /></div>
          <div className="p-2 "><img src={jordan_2} alt="jordan" /></div>
          <div className="p-2 "><img src={jordan_3} alt="jordan" /></div>
          <div className="p-2 "><img src={jordan_4} alt="jordan" /></div>
          <div className="p-2 "><img src={jordan_5} alt="jordan" /></div>
          <div className="p-2 "><img src={jordan_6} alt="jordan" /></div>
          <div className="p-2 "><img src={jordan_7} alt="jordan" /></div>
          <div className="p-2 "><img src={jordan_8} alt="jordan" /></div>

        </div>
      </div>

    </div>
  )
} 

export default MainHome;