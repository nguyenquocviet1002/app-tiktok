import PropTypes from 'prop-types';
import Header from '@/layouts/components/Header';
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

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
