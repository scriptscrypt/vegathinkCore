import FeaturesCard from "./FeaturesCard";
import icon1 from "../public/images/Icons/IconCertificate.png"
import icon2 from "../public/images/Icons/IconPlay.png"
import icon3 from "../public/images/Icons/IconSupport.png"
import icon4 from "../public/images/Icons/IconSuitcase.png"

export default function Features() {

  return (
    <>
        <div className="rfw mp16">
            <FeaturesCard src={icon1} txt="Certificate on completion of the course" />
            <FeaturesCard src={icon2} txt="Completely online content available in both live or recorded mode" />
            <FeaturesCard src={icon3} txt="Remote access to simulated hardware tools and accesibility through VPN" />
            <FeaturesCard src={icon4} txt="Assistance in placements to get a job in VLSI based companies" />
       </div>
    </>
  )
}
