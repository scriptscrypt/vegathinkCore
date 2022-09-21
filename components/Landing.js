import LandImg from "../public/images/LandingImg.png"
import IconArrow from "../public/images/Icons/IconArrow.png"
import Image from "next/image"
import com1 from "../public/images/Companies/Company1.png"
import com2 from "../public/images/Companies/Company2.png"
import com3 from "../public/images/Companies/Company3.png"
import com4 from "../public/images/Companies/Company4.png"
export default function Landing() {


  return (
    <>
      <div className="rfw">
        <div className="w48 mp8">
          <div className="f1">
            Explore the Industry Standard <span className="txtPri">VLSI courses</span> designed by field expert professionals
          </div>
          <div className="f2 mp80">Courses are offered in online mode with weekly assesments</div>
          <button className="btn bdr rf">
              <div className="mp08">Our Courses</div>
              <div className="mp08"> <Image className="" src={IconArrow}/> </div>
          </button>
          </div>
  
        <div className="w32 mp8">
          <Image src={LandImg}/>
        </div>
      </div>

      <div className="rfw">
        <div className="mp8 txtGrey">Our alumnis are placed in</div>
        <div className="rf mp08">
          <div className="mp08">
              <Image width="96px" height="24px" src={com1}/> 
          </div>  
          <div className="mp08">
              <Image width="96px" height="24px" src={com2}/> 
          </div>  
          <div className="mp08">
              <Image width="96px" height="24px" src={com3}/> 
          </div>  
          <div className="mp08">
              <Image width="96px" height="24px" src={com4}/> 
          </div>  
             
        </div>
      </div>
    </>
  )
}
