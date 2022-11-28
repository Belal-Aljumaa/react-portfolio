import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import {
	PageHome,
	PageAbout,
	PageContact,
	PageSettings,
	PageGithub,
	PageProjects,
	PageSkills,
	PageCertificates,
	Page404,
} from './pages/Index';
import './App.scss';

function App() {
	useEffect(() => {
		const theme = localStorage.getItem('theme');
		if (theme !== null) {
			document.documentElement.setAttribute('data-theme', theme);
		}
	}, []);
	return (
		<Layout>
			<Routes>
				<Route path="home" element={<PageHome />} />
				<Route path="about" element={<PageAbout />} />
				<Route path="contact" element={<PageContact />} />
				<Route path="settings" element={<PageSettings />} />
				<Route path="projects" element={<PageProjects />} />
				<Route path="github" element={<PageGithub />} />
				<Route path="skills" element={<PageSkills />} />
				<Route path="certificates" element={<PageCertificates />} />
				<Route path="*" element={<Page404 />} />
				<Route path="/" element={<Navigate to="/home" replace />} />
			</Routes>
		</Layout>
	);
}

export default App;
