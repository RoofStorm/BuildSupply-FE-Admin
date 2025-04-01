import { Button } from "@/components/ui/button";
import "./App.css";
import { CardWithForm } from "./components/CardWithForm/CardWithForm";

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center m-20">
        <Button onClick={() => {console.log("Clicked")}}>Click me</Button>
      </div>

      <div className="flex flex-col items-center justify-center">
        <CardWithForm />
      </div>

    </>
  );
}

export default App;
