// App.js
import React, { useState } from "react";
import AnimalForm from "./components/AnimalForm";
import AnimalList from "./components/AnimalList";

function App() {
  // State to keep track of the animal currently being edited.
  const [currentAnimal, setCurrentAnimal] = useState(null);

  return (
    <div>
      <h1>Animal Manager</h1>
      <AnimalForm
        currentAnimal={currentAnimal}
        setCurrentAnimal={setCurrentAnimal}
      />
      <AnimalList setCurrentAnimal={setCurrentAnimal} />
    </div>
  );
}

export default App;
