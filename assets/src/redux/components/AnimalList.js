// AnimalList.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeAnimal } from "../redux/animalSlice";

const AnimalList = ({ setCurrentAnimal }) => {
  // Access animal list from Redux state.
  const animals = useSelector((state) => state.animals.animalList);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Animal List</h2>
      {animals.map((animal) => (
        <div
          key={animal.id}
          style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}
        >
          <h3>
            {animal.name} ({animal.breed})
          </h3>
          <p>{animal.description}</p>
          {/* Display multiple images (assuming comma-separated URLs) */}
          <div>
            {animal.images.split(",").map((img, idx) => (
              <img
                key={idx}
                src={img.trim()}
                alt={animal.name}
                style={{ width: "100px", marginRight: "10px" }}
              />
            ))}
          </div>
          <button onClick={() => setCurrentAnimal(animal)}>Edit</button>
          <button onClick={() => dispatch(removeAnimal(animal.id))}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default AnimalList;
