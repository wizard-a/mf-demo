import React from 'react';
import styles from './index.less';

const Mf1Button = React.lazy(() => import("mf1/Button"));

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <React.Suspense fallback='loading'>
        <Mf1Button />
      </React.Suspense>
    </div>
  );
}
