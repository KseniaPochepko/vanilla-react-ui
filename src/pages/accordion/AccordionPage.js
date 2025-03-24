import React, { useEffect } from 'react';
import { AccordionList } from '../../components/AccordionList';

import styles from './AccordionPage.module.css';

export default function AccordionPage() {
  useEffect(() => {
    document.title = 'FAQ';
  }, []);

  return (
    <div className={styles.container}>
      <AccordionList />
    </div>
  );
}
