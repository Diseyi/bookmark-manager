import Logo from "../logo";
import Container from "../container";
import hamburger from "../../assets/images/icon-hamburger.svg";

interface HeaderProps {
  onclick: () => void
 }

const Header = ({onclick}: HeaderProps) => {
  return (
    <header className="bg-white py-12 ">
      <Container>
        <nav className="flex flex-row items-center justify-between gap-8">
          <div className="">
            <Logo color="#242A45" />
          </div>
          <div className="hidden md:flex gap-8">
              <button className="text-dark-blue uppercase hover:text-soft-red ">Features</button>
              <button className="text-dark-blue uppercase hover:text-soft-red">Pricing</button>
              <button className="text-dark-blue uppercase hover:text-soft-red">Contact</button>
              <button className=" text-white uppercase border-2 border-soft-red bg-soft-red px-8 py-[6px] rounded hover:bg-white hover:text-soft-red">Login</button>
          </div>
          <button onClick={onclick} className="md:hidden">
            <img src={hamburger} alt="" className="" />
          </button>
        </nav>
      </Container>
    </header>
  )
}

export default Header