import { Header } from "./components/Header/Header.jsx";
import { CoreConcepts } from "./components/CoreConcepts.jsx";
import { Examples } from "./components/Examples.jsx";
import { MainGoal } from "./components/MainGoal.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
        <MainGoal />
      </main>
    </>
  );
}

export default App;
