import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import "./App.css";
import { CardWithForm } from "./components/CardWithForm/CardWithForm";

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-svh">
        <Button>Click me 123</Button>
      </div>

      <div className="items-top flex space-x-2">
        <Checkbox id="terms1" />
        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor="terms1"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </label>
          <p className="text-sm text-muted-foreground">
            You agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>

      <CardWithForm />
    </>
  );
}

export default App;
