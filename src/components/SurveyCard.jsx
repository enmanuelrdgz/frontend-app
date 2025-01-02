import React, { useState } from 'react';

const SurveyCard = ({ title, options }) => {
  const [votes, setVotes] = useState(
    options.map(option => ({ name: option.name, count: option.count || 0 }))
  );

  const handleVote = (optionName) => {
    setVotes(votes.map(option =>
      option.name === optionName
        ? { ...option, count: option.count + 1 }
        : option
    ));
  };

  return (
    <div style={styles.card}>
      <h2 style={styles.title}>{title}</h2>
      <ul style={styles.list}>
        {votes.map((option, index) => (
          <li key={index} style={styles.listItem}>
            <span>{option.name} ({option.count} votos)</span>
            <button style={styles.button} onClick={() => handleVote(option.name)}>
              Votar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    maxWidth: '400px',
    margin: '16px auto',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  },
  title: {
    textAlign: 'center',
    marginBottom: '16px'
  },
  list: {
    listStyleType: 'none',
    padding: 0
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '8px'
  },
  button: {
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '8px 12px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  }
};

export default SurveyCard;