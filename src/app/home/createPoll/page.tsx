"use client"

import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const CreatePollPage: React.FC = () => {

  const [title, setTitle] = useState<string>(""); 
  const [options, setOptions] = useState<string[]>(["", ""]);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleOptionChange = (index: number, value: string) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const addOption = () => {
    setOptions([...options, ""]);
  };

  const removeOption = (index: number) => {
    if (options.length > 2) {
      const updatedOptions = options.filter((_, i) => i !== index);
      setOptions(updatedOptions);
    } else {
      alert("Poll must have at least two options");
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const body = {
        title: title,
        options: options,
        token: localStorage.getItem("token")
    }

    axios.post(process.env.NEXT_PUBLIC_API_URL + "/api/poll", body, {headers: {token: localStorage.getItem("token")}})
      .then(() => {
          alert("Survey created succesfully!");
      })
      .catch(err => alert(err.message));

    setTitle("");
    setOptions(["", ""]);
  };

  return (
    <main>
        <h1>Create Poll</h1>

        <p>Description for this page</p>

        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Enter the poll title</legend>
                <label>Title:
                    <input type="text" value={title} onChange={handleTitleChange} required/>
                </label>
            </fieldset>

            <fieldset>
                <legend>Enter the poll options</legend>

                <ul>
                    {options.map((option, index) => (
                    <li key={index}>
                        <label>Option:
                            <input
                                type="text"
                                value={option}
                                onChange={(e) => handleOptionChange(index, e.target.value)}
                                placeholder={`Option ${index + 1}`}
                                required
                            />
                        </label>
                        
                        <button type="button" onClick={() => removeOption(index)}>
                            Remove
                        </button>                        
                    </li>
                    ))}
                </ul>

                <button type="button" onClick={addOption}>
                    Add New Option
                </button>
            </fieldset>

            <button type='submit'>Create</button>
        </form>
    </main>
  );
};

export default CreatePollPage;