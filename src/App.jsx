import Header from "./Components/Header"
import Results from "./Components/Results";
import UserInput from "./Components/Userinput";
import { useState } from "react";
function App() {
  const [userInput,setUserInput]=useState(
    {
        initialInvestment:1000,
        annualInvestment :1200,
        expectedReturn : 6,
        duration : 10
    }
);
function handleChange(inputIdentifier,newValue){
  setUserInput(preUserValue=>
      {
          return {
              ...preUserValue,
              [inputIdentifier]:newValue
          }
      }
  );
}
  return (<>
  <Header/>
    <UserInput onChange={handleChange}
    UserInput={userInput}/>
    <Results input={userInput}/>
    </>
    
  );
}

export default App
