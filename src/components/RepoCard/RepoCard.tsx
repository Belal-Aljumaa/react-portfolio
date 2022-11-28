import { VscGithubAlt } from 'react-icons/vsc';
import { VscRepoForked } from 'react-icons/vsc';
import { AiOutlineStar } from 'react-icons/ai';
import { AiOutlineEye } from 'react-icons/ai';
import './RepoCard.scss';

const RepoCard = ({ repo }: any) => {
	return (
		<div className="repo-card">
			<div className="card">
				<h3 className="title">{repo.name}</h3>

				<div className="stats">
					<div>
						<div>
							<AiOutlineEye className="icon" /> {repo.watchers}
						</div>
						<div>
							<VscRepoForked className="icon" /> {repo.forks}
						</div>
						<div>
							<AiOutlineStar className="icon" /> {repo.stargazers_count}
						</div>
					</div>
					<div>
						<a href={repo.html_url} target="_blank">
							<VscGithubAlt height={20} width={20} className="icon" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RepoCard;
