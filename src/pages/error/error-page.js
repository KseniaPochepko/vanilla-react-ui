import React, { useEffect } from 'react';
import { useRouteError } from 'react-router-dom';
import styles from './error-page.module.css';
import ErrorImage from '../../static/images/404.png';

export function ErrorPage() {
  const error = useRouteError();

  useEffect(() => {
    document.title = `Error ${error.status}`;
  }, [error]);

  return (
    <div className={styles.error_page}>
      <div className={styles.error_image}>
        <img className={styles.not_found_image} src={ErrorImage} alt="error" />
      </div>
      {/*<h1>Oops!</h1>*/}
      {/*<p className={styles.error_text}>Sorry, an unexpected error has occurred.</p>*/}
      {/*<p>*/}
      {/*  <i>{error.statusText || error.message}</i>*/}
      {/*</p>*/}
    </div>
  );
}
