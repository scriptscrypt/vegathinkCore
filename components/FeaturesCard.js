import Image from "next/image";

export default function FeaturesCard(props) {

  return (
    <>
    <div className="cf txtC w288">
        <div className="mp8">
            <Image src={props.src} width="72px" height="72px"/>
        </div>
        <div className="mp016">{props.txt}</div>
    </div>
    </>
  )
}
