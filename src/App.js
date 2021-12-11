import Cart from "./Cart";
import Navbar from "./Navbar";
import { useGlobalContext } from "./context";
import Loading from "./Loading";

function App() {
  const { loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Navbar />
      <Cart />
    </>
  );
}

export default App;
