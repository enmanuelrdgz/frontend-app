import React, { useState } from 'react';
import styles from '../styles/SurveyCard.module.css'

type Option = {
  id: number,
  name: String,
  votes: number
}

type SurveyCardProps = {
  title: String,
  options: Option[]
}

const SurveyCard: React.FC<SurveyCardProps> = ({title, options}) => {

  return (
    <div className={styles["survey-container"]}>
      <div className={styles["title-container"]}>
        <h2 className={styles["title"]}>{title}</h2>
      </div>
      <div className={styles["option-container"]}>
        <ul>
        {
          options.map((option) => (
            <li key={option.id}>
              <div className={styles["option"]}>
                <span className={styles["option-name"]}>{option.name}</span>
                <span className={styles["votes"]}>Votes: <span className='vote-count'>{option.votes}</span></span>
              </div>
            </li>
          ))
        }
        </ul>
      </div>
    </div>
  );
};

export default SurveyCard;