import Image from 'next/image'
import Logo from "../public/images/logo.png"

export default function Navbar() {

  return (
    <>
    
      <div className="nav mp08">
            <div className="">
               <Image src={Logo} width="152px" height="48px" />
            </div>
            <div className="resizeInput">
                <input type="text" placeholder='What do you want to learn?' className='bdr input'/>
            </div>
            <div className="rf">
                <a href="#login" className='link mp8'>Login</a>
                <button className="btn bdr mp8">Signup</button>
            </div>
      </div>
      <div className="rf navBottom">
        <a className="navLink mp8" href="">Courses</a>
        <a className="navLink mp8" href="">About Us</a>
        <a className="navLink mp8" href="">Our Teachers</a>
        <a className="navLink mp8" href="">Pricing</a>
        <a className="navLink mp8" href="">Company</a>
      </div>
    
   
    </>
  )
}
