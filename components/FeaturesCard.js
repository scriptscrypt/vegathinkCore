import Image from "next/image";

export default function FeaturesCard(props) {

  return (
    <>
    <div className="cf">
        <div className="mp8">
            <Image src={props.src} width="96px" height="88px"/>
        </div>
        <div className="mp016">{props.txt}</div>
    </div>
    </>
  )
}
