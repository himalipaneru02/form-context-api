import { FormProvider } from "./context/FormContext";
import Main from "./Main";

function App() {
  return (
    <FormProvider>
      <Main />
    </FormProvider>
  );
}

export default App;