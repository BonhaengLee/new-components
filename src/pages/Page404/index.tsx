import * as React from 'react';

import styles from './Page404.module.scss';

const Page404: React.FC = () => {
  const title = 'DDuck-SSang Page Not Found';

  return (
    <>
      <div className={styles.ly_customPageContainer}>
        <main className={styles.ly_customPageContainer_inner}>
          <h1 className={styles.el_title}>Page Not Found</h1>

          <figure className={styles.ly_imgWrapper}>
            <img
              src="/assets/404.png"
              alt="404 Not Found"
              className={styles.el_img}
            />
          </figure>
        </main>
      </div>
    </>
  );
};

export default Page404;