import PropTypes from 'prop-types';
import Button from '@/components/Button';

function MenuItem({ data, onClick }) {
  return (
    <div>
      <Button leftIcon={data.icon} onClick={onClick} props={data}>
        {data.title}
      </Button>
    </div>
  );
}

MenuItem.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};

export default MenuItem;
