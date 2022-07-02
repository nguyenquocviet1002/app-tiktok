import Header from '@/components/Layout/components/Header';
import Sidebar from './Sidebar';
import styles from './DefaultLayout.module.scss';

function DefaultLayout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      <div className="container">
        <div className="flex">
          <Sidebar />
          <div className="content">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
