import './ThemeInfo.scss';

interface IInfo {
	icon: string;
	name: string;
	publisher: string;
	theme: string;
}

const ThemeInfo = ({ icon, name, publisher, theme }: IInfo) => {
	const setTheme = (theme: any) => {
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('theme', theme);
	};

	return (
		<div className="theme-info">
			<div className="box">
				<div className="img">
					<img src={icon} alt={name} height={100} width={100} />
				</div>
				<div className="info">
					<div>
						<h3>{name}</h3>
						<h5>{publisher}</h5>
					</div>
					<button onClick={() => setTheme(theme)}>Set Color Theme</button>
				</div>
			</div>
		</div>
	);
};

export default ThemeInfo;
