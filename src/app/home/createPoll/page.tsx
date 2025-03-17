"use client"

import { ChangeEvent, useState } from 'react';
import axios from 'axios';
import styles from "@/styles/CreatePollPage.module.css"

const CreatePollPage: React.FC = () => {

  const [title, setTitle] = useState<string>(""); 
  const [warning, setWarning] = useState<string>(""); 
  const [firstOption, setFirstOption] = useState<string>("")
  const [secondOption, setSecondOption] = useState<string>("")
  const [extraOptions, setExtraOptions] = useState<string[]>([]);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleOptionChange = (index: number, value: string) => {
    const updatedOptions = [...extraOptions];
    updatedOptions[index] = value;
    setExtraOptions(updatedOptions);
  };

  const handleFirstOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstOption(e.target.value);
  }

  const handleSecondOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSecondOption(e.target.value);
  }

  const addOption = () => {
    setExtraOptions([...extraOptions, ""]);
  };

  const removeOption = (index: number) => {
      const updatedOptions = extraOptions.filter((_, i) => i !== index);
      setExtraOptions(updatedOptions);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const body = {
        title: title,
        options: [firstOption, secondOption].concat(extraOptions),
    }

    const headers = {
        token: sessionStorage.getItem("token")
    }

    axios.post("http://ec2-3-145-177-192.us-east-2.compute.amazonaws.com:8080" + "/poll", body, {headers: headers})
        .then(() => {
            alert("Survey created succesfully!");
        })
        .catch(err => {
            console.log(err.message);
            setWarning(err.response?.data.message);
        });

    setTitle("");
    setExtraOptions([]);
  };

  return (
    <main className={styles.main}>
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
                        <input className={styles.input} onChange={handleFirstOptionChange} type="text" placeholder='Option 1' required/>
                    </li>

                    <li>
                        <input className={styles.input} onChange={handleSecondOptionChange} type="text" placeholder='Option 2' required/>
                        <button style={{visibility: "hidden"}}>
                            X
                        </button>
                    </li>

                    {extraOptions.map((option, index) => (
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