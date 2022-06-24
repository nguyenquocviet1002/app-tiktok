import Button from '@/components/Button';

function MenuItem({ data, onClick }) {
  console.log(data);
  return (
    <div>
      <Button leftIcon={data.icon} onClick={onClick} props={data}>
        {data.title}
      </Button>
    </div>
  );
}

export default MenuItem;
