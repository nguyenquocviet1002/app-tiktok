import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('info-avt')}
        src="https://yt3.ggpht.com/yti/APfAmoGQBo-psr7bUJokXYOPkXhl-t1k7f9D_sutuztHWQ=s88-c-k-c0x00ffffff-no-rj-mo"
        alt="1"
      />
      <div className={cx('info')}>
        <p className={cx('name')}>
          <span>hahaha</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </p>
        <span className={cx('user-name')}>@hhahaha</span>
      </div>
    </div>
  );
}

export default AccountItem;
