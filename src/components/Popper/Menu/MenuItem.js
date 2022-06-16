import Button from '@/components/Button';

function MenuItem({ data, onClick }) {
  return (
    <div>
      <Button leftIcon={data.icon} onClick={onClick}>
        {data.title}
      </Button>
    </div>
  );
}

export default MenuItem;
