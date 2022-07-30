import {
  faCircleQuestion,
  faCloudUpload,
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faMessage,
  faSignOut,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css';
import config from '@/config';

import Button from '@/components/Button';
import Image from '@/components/Image';
import Menu from '@/components/Popper/Menu';
import { Link } from 'react-router-dom';
import Search from '../Search';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'Tiếng Việt',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcuts',
  },
];

function Header() {
  const currentUser = true;

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'View profile',
      to: '/user',
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: 'Get coin',
      to: '/user',
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Settings',
      to: '/settings',
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: 'Log out',
      to: '/logout',
    },
  ];

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Link to={config.routes.home} className={cx('logo')}>
          Logo
        </Link>
        <Search />
        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                <button className={cx('action-btn')}>
                  <FontAwesomeIcon icon={faCloudUpload} />
                </button>
              </Tippy>
              <button className={cx('action-btn')}>
                <FontAwesomeIcon icon={faMessage} />
              </button>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Login</Button>
            </>
          )}
          <Menu items={currentUser ? userMenu : MENU_ITEMS}>
            {currentUser ? (
              <Image
                src="https://yt3.ggpht.com/yti/APfAmoGQBo-psr7bUJokXYOPkXhl-t1k7f9D_sutuztHWQ=s88-c-k-c0x00ffffff-no-rj-mo"
                className={cx('user-avatar')}
                alt=""
              />
            ) : (
              <div className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </div>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
