import Pic from '../assets/logo.jpg';
import { Navbar, Image } from "./styledComponents";

export const Header = () => {
  return (
    <Navbar>
      <Image src={Pic} alt="" />
      <h2>Taskmate</h2>
    </Navbar>
  )
}
