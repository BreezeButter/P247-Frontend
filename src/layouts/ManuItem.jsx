import { Link } from 'react-router-dom';

export default function MenuItem({ Icon, to, active }) {
  return (
    <Link to={to}>
      <div >
        <Icon className={active ? 'text-white bg-primary ' : 'text-primary bg-white '} />
      </div>
    </Link>
  );
}
