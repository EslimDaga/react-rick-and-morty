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
      <main className="flex-1 overflow-y-auto px-4 py-4 bg-gray-100 dark:bg-gray-800">
        { children }
      </main>
    </PokeApp>
  )
}

export default Layout;