import Image from "next/image"
import Link from "next/link"

const Header = () => {
  return (
    <nav className="bg-black text-white h-17" >
          
          <div className="container f_between">
                    <Link href={'/'} className="text-xl c_primary" > Food Logo </Link>
                    <Link href={'/cart'} >
                        <Image
                            src={"/cart.svg"}
                            alt="cart image"
                            width={20}
                            height={20} 
                            className="w-5 h-auto"
                        />
                    </Link>
          </div>

    </nav>
  )
}

export default Header