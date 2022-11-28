import { RepoCard } from '../../components/Index';
import GitHubCalendar from 'react-github-calendar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './PageGithub.scss';


console.log(process.env);
interface IValue {
	login: string;
	avatar_url: string;
	public_repos: string;
	followers: string;
}

const PageGithub = () => {
	const [userInfo, setUserInfo] = useState<IValue>();
	const [repos, setRepos] = useState([]);
	const [loading, setLoading] = useState(false);

	const theme = {
		level0: '#161B22',
		level1: '#0e4429',
		level2: '#006d32',
		level3: '#26a641',
		level4: '#39d353',
	};

	const getUserInfo = async () => {
		try {
			const result = await axios.get(
				`https://api.github.com/users/${import.meta.env.VITE_GITHUB_USERNAME}`
			);
			setUserInfo(result.data);
		} catch (error) {
			console.log(error);
		}
	};

	const getRepos = async () => {
		try {
			const result = await axios.get(
				`https://api.github.com/users/${import.meta.env.VITE_GITHUB_USERNAME}/repos`
			);
			setRepos(result.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 1000);
		getUserInfo();
		getRepos();
	}, []);

	return (
		<div className="githab">
			{userInfo && (
				<div className="user">
					<div>
						<img
							src={userInfo.avatar_url}
							alt={userInfo.login}
							width={50}
							height={50}
						/>
						<h3 className="username">{userInfo.login}</h3>
					</div>
					<div>
						<h3>{userInfo.public_repos} repos</h3>
					</div>
					<div>
						<h3>{userInfo.followers} followers</h3>
					</div>
				</div>
			)}

			{loading ? (
				<div className="loader-container">
					<div className="spinner"></div>
				</div>
			) : (
				<div className="container">
					{repos.map((repo, i) => (
						<RepoCard key={i} repo={repo} />
					))}
				</div>
			)}
			<div className="contributions">
				<GitHubCalendar
					username= {import.meta.env.VITE_GITHUB_USERNAME}
					theme={theme}
					hideColorLegend
					hideMonthLabels
				/>
			</div>
		</div>
	);
};

export default PageGithub;
