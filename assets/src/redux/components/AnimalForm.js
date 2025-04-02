// AnimalForm.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addAnimal, editAnimal } from "../redux/animalSlice";

const AnimalForm = ({ currentAnimal, setCurrentAnimal }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    breed: "",
    description: "",
    images: "", // Comma-separated URLs
  });

  // If editing, load the current animal's data into the form.
  useEffect(() => {
    if (currentAnimal) {
      setFormData(currentAnimal);
    }
  }, [currentAnimal]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentAnimal) {
      // Dispatch edit action when editing.
      dispatch(editAnimal({ ...formData }));
      setCurrentAnimal(null);
    } else {
      // Dispatch add action when adding a new animal.
      dispatch(addAnimal({ ...formData }));
    }
    // Reset the form after submission.
    setFormData({ name: "", breed: "", description: "", images: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        name="breed"
        placeholder="Breed"
        value={formData.breed}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        required
      />
      <input
        name="images"
        placeholder="Image URLs (comma separated)"
        value={formData.images}
        onChange={handleChange}
        required
      />
      <button type="submit">
        {currentAnimal ? "Edit Animal" : "Add Animal"}
      </button>
    </form>
  );
};

export default AnimalForm;
