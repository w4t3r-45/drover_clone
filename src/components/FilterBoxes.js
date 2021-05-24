import React, { useState, useEffect ,Component } from 'react';
import styles from './styles/FilterBoxes.module.css';



// this component will receive FilterTags and render them as a list 

export default function FilterBoxes({ items }) {
  return (
    <div className={styles.Fiters_tags_wrapper}>
      {items.map(cpnt =>{
        return cpnt;
      })}
    </div>
  );
}