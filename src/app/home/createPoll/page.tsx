"use client"

import React from 'react';
import styles from "../../styles/createPollPage.module.css"
import Link from 'next/link';
import { useState } from 'react';
import axios from 'axios';

const CreatePollPage: React.FC = () => {

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
    <main className={styles["layout"]}>
        <h1>Create Poll</h1>

        <p>Description for this page</p>

        <form>
            <fieldset>
                <legend>Enter the poll title</legend>
                <label>Title:
                    <input className={styles["input"]} type="text" onChange={handleTitleChange}/>
                </label>
            </fieldset>

            <fieldset>
                <legend>Enter the poll options</legend>

                <ul>
                    {options.map((option, index) => (
                    <li key={index} className={styles["option-container"]}>
                        <label>Option:
                            <input
                                type="text"
                                value={option}
                                onChange={(e) => handleOptionChange(index, e.target.value)}
                                placeholder={`Option ${index + 1}`}
                                className={styles["input"]}
                            />
                        </label>
                        
                        <button
                            className={styles["remove-option-btn"]}
                            type="button"
                            onClick={() => removeOption(index)}
                        >
                            Remove
                        </button>                        
                    </li>
                    ))}
                </ul>

                <button type="button" onClick={addOption} className={styles["add-option-btn"]}>
                    Add New Option
                </button>
            </fieldset>

            <button>Create</button>
        </form>
    </main>
  );
};

export default CreatePollPage;