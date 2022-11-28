import './Page404.scss';
import { useLocation } from 'react-router-dom';

const Page404 = () => {
	const location = useLocation();

	return (
		<div className="page404">
			<h2>404 Page</h2>
			<p>
				The page <code>{location.pathname}</code> does not exist.
			</p>
		</div>
	);
};

export default Page404;
