import React from 'react';
import styles from './styles/FilterTag.module.css';

export default function FilterTag({ id, value, onDelete }) {
  return (
    <div className={styles.Filter_tag}>
      <p>{value}</p>
      <p onClick={() => onDelete(id)}>X</p>
    </div>
  );
} 