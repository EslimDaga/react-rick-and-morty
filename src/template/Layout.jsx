import Header from "../components/Header";
import styledComponents from "styled-components";

const PokeApp = styledComponents.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Layout = ({ children }) => {
  return (
    <PokeApp>
      <Header />
      { children }
    </PokeApp>
  )
}

export default Layout;