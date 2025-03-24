import React, { useEffect, useRef } from 'react';

import styles from './AccordionSection.module.css';
import cx from 'classnames';

export function AccordionSection({ title, value, collapsed, onChangeCollapse }) {
  const sectionRef = useRef();
  const sectionHeight = useRef();

  useEffect(() => {
    sectionHeight.current = sectionRef.current.scrollHeight;
  }, []);

  return (
    <div className={cx(styles.section, collapsed ? styles.collapsed : '')}>
      <div className={styles.section_title_container} onClick={onChangeCollapse}>
        <div className={styles.arrow}>&#x21CB;</div>
        <div className={cx('text', styles.title)}>{title}</div>
      </div>
      <div
        ref={sectionRef}
        className={cx(styles.section_body)}
        style={{ maxHeight: collapsed ? 0 : sectionHeight.current }}
      >
        <div ref={sectionRef} className={cx(styles.section_content)}>
          <p className={styles.section_text}>{value.text}</p>
          {value.cta && (
            <a href={value.cta.url} target="_blank" rel="noreferrer">
              <button className={cx('button', 'success')}>{value.cta.text}</button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
