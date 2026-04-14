import { useContext } from "react";
import { FormContext } from "./context/FormContext";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";

function Main() {
  const { step } = useContext(FormContext);

  if (step === 1) return <Step1 />;
  if (step === 2) return <Step2 />;
  if (step === 3) return <Step3 />;

  return <Step1 />;
}

export default Main;