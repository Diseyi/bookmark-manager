import Logo from "../logo";
import Container from "../container";
import hamburger from "../../assets/images/icon-hamburger.svg";

interface HeaderProps {
  onclick: () => void
 }

const Header = ({onclick}: HeaderProps) => {
  return (
    <div className="bg-white py-6 ">
      <Container>
        <div className="flex flex-row items-center justify-between gap-8">
          <div className="">
            <Logo color="#242A45" />
          </div>
          <div className="hidden md:flex gap-8">
              <button className="text-dark-blue hover:text-soft-red ">Features</button>
              <button className="text-dark-blue hover:text-soft-red">Pricing</button>
              <button className="text-dark-blue hover:text-soft-red">Contact</button>
              <button className=" text-white border-2 border-soft-red bg-soft-red px-8 py-[6px] rounded hover:bg-white hover:text-soft-red">Login</button>
          </div>
          <button onClick={onclick} className="md:hidden">
            <img src={hamburger} alt="" className="" />
          </button>
        </div>
      </Container>
    </div>
  )
}

export default Header