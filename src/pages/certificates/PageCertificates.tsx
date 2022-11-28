import bootstrsp from '/images/bootstrap.jpg';
import web_design from '/images/web_design.png';
import javascript from '/images/javascript.png';
import './PageCertificates.scss';

const PageCertificates = () => {
	return (
		<div className="certificates">
			<h2 className="title">My Certificates</h2>
			<div className="container">
				<div className="img-box">
					<a href="https://user-images.githubusercontent.com/92271729/204103159-f0a33744-1dd5-4d4b-9364-a900bf7ec84f.jpg" target="_blank">
            <img src={bootstrsp} alt="bootstrsp" width={450} height={300}/>
          <div className="overlay">Bootstrap 5</div>
          </a>
				</div>
				<div className="img-box">
					<a href="https://user-images.githubusercontent.com/92271729/204103160-89183922-45ab-4343-b53b-e286eb5f03d7.png" target="_blank">
            <img src={web_design} alt="web_design" width={450} height={300}/>
          <div className="overlay">Web Design</div>
          </a>
				</div>
				<div className="img-box">
					<a href="https://user-images.githubusercontent.com/92271729/204103158-a19569e3-9627-4c22-a8fe-e0ce4d287b6c.png" target="_blank">
            <img src={javascript} alt="javascript" width={450} height={300}/>
          <div className="overlay">JavaScript</div>
          </a>
				</div>
			</div>
		</div>
	);
};

export default PageCertificates;
