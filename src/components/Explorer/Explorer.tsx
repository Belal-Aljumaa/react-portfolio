import { useState } from 'react';
import { VscChevronRight } from 'react-icons/vsc';
import { NavLink } from 'react-router-dom';
import explorerItems from '../../data/explorerItems.json';
import './explorer.scss';

const Explorer = () => {
	const [portfolioOpen, setPortfolioOpen] = useState(true);

	return (
		<>
			<div className="explorer">
				<p className="title-header">Explorer</p>
				<div>
					<input
						type="checkbox"
						className="checkbox"
						id="portfolio"
						checked={portfolioOpen}
						onChange={() => setPortfolioOpen(!portfolioOpen)}
					/>
					<label htmlFor="portfolio" className="heading">
						<VscChevronRight
							className="chevron"
							style={portfolioOpen ? { transform: 'rotate(90deg)' } : {}}
						/>
						Portfolio
					</label>
					<div
						className="files"
						style={portfolioOpen ? { display: 'block' } : { display: 'none' }}
					>
						{explorerItems.map((item) => (
							<NavLink to={item.path} key={item.name}>
								<div className="file">
									<img
										src={`/images/${item.icon}`}
										alt={item.name}
										height={18}
										width={18}
									/>{' '}
									<p>{item.name}</p>
								</div>
							</NavLink>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Explorer;
