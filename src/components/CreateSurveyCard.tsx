import React, { useState } from "react";
import axios from "axios";
import styles from "../styles/CreateSurveyCard.module.css"

const CreateSurveyCard: React.FC = () => {
  const [title, setTitle] = useState<string>(""); // Estado para el título de la encuesta
  const [options, setOptions] = useState<string[]>(["", ""]); // Estado para las opciones (mínimo 2)

  // Manejar el cambio de título
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  // Manejar el cambio en los inputs de las opciones
  const handleOptionChange = (index: number, value: string) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  // Agregar una nueva opción
  const addOption = () => {
    setOptions([...options, ""]);
  };

  // Eliminar una opción
  const removeOption = (index: number) => {
    if (options.length > 2) {
      const updatedOptions = options.filter((_, i) => i !== index);
      setOptions(updatedOptions);
    } else {
      alert("La encuesta debe tener al menos dos opciones.");
    }
  };

  // Manejar el envío del formulario
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Validar el formulario
    if (!title.trim()) {
      alert("El título no puede estar vacío.");
      return;
    }
    if (options.some((option) => !option.trim())) {
      alert("No pueden haber opciones vacias.");
      return;
    }

    // Procesar la encuesta (puedes enviarla a una API aquí)
    const requestBody = {
        title: title,
        options: options,
        token: localStorage.getItem("token")
    }

    axios.post(process.env.NEXT_PUBLIC_API_URL + "/api/survey", requestBody)
    .then(() => {
        alert("Survey created succesfully!");
    })
    .catch(err => {
        console.log(err.message);
        alert("Something went wrong...");
    })

    // Resetear el formulario (opcional)
    setTitle("");
    setOptions(["", ""]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className={styles["form-title"]}>Create new survey</h1>

      {/* Input para el título */}
      <div>
        <label className={styles["label"]} htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="Survey title"
          className={styles["input"]}
        />
      </div>

      {/* Inputs dinámicos para las opciones */}
      <div>
        <h2>Options:</h2>
        {options.map((option, index) => (
          <div key={index}>
            <input
              type="text"
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
              placeholder={`Option ${index + 1}`}
              className={styles["input"]}
            />
            <button
              type="button"
              onClick={() => removeOption(index)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Botón para agregar nueva opción */}
      <button type="button" onClick={addOption}>
        Add Option
      </button>

      {/* Botón para enviar el formulario */}
      <div>
        <button type="submit">Create Survey</button>
      </div>
    </form>
  );
};

export default CreateSurveyCard;