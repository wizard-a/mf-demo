import React from 'react';
import styles from './index.less';

const Mf1Button = React.lazy(() => import("mf21/Button"));

export default function IndexPage() {
  console.log('=======render=>')
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      Demo
      <React.Suspense fallback='loading'>
        <Mf1Button />
      </React.Suspense>
    </div>
  );
}
