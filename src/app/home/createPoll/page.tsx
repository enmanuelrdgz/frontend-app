"use client"

import { useState } from 'react';
import axios from 'axios';
import styles from "@/styles/CreatePollPage.module.css"

const CreatePollPage: React.FC = () => {

  const [title, setTitle] = useState<string>(""); 
  const [warning, setWarning] = useState<string>(""); 
  const [options, setOptions] = useState<string[]>([]);

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
      const updatedOptions = options.filter((_, i) => i !== index);
      setOptions(updatedOptions);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const body = {
        title: title,
        options: options,
        token: localStorage.getItem("token")
    }

    axios.post(process.env.NEXT_PUBLIC_API_URL + "/poll", body)
        .then(() => {
            alert("Survey created succesfully!");
        })
        .catch(err => {
            console.log(err.message);
            setWarning(err.response?.data.message);
        });

    setTitle("");
    setOptions(["", ""]);
  };

  return (
    <main>
        <form onSubmit={handleSubmit} className={styles.form}>
            <strong className={styles.title}>Create Poll</strong>

            <fieldset className={styles.fieldset}>
                <legend>Choose a title for your poll</legend>

                <input className={styles.input} type="text" placeholder='title' value={title} onChange={handleTitleChange} required/>
            </fieldset>

            <fieldset className={styles.fieldset}>
                <legend>Enter the options for your poll</legend>

                <ul className={styles.ul}>
                    <li>
                        <input className={styles.input} type="text" placeholder='Option 1' required/>
                    </li>

                    <li>
                        <input className={styles.input} type="text" placeholder='Option 2' required/>
                        <button style={{visibility: "hidden"}}>
                            X
                        </button>
                    </li>

                    {options.map((option, index) => (
                    <li key={index}>
                        <input
                            className={styles.input}
                            type="text"
                            value={option}
                            onChange={(e) => handleOptionChange(index, e.target.value)}
                            placeholder={`Option ${index + 3}`}
                            required
                        />
                        
                        <button className={styles.removeBtn} type="button" onClick={() => removeOption(index)}>
                            X
                        </button>                        
                    </li>
                    ))}
                </ul>

                <button className={styles.btn} type="button" onClick={addOption}>
                    Add New Option
                </button>
            </fieldset>

            <strong style={{color: "red"}}>{warning}</strong>

            <button className={styles.btn} type='submit'>Create</button>
        </form>
    </main>
  );
};

export default CreatePollPage;