import './ContactData.scss';
import contactItems from '../../data/socials.json';

const ContactData = () => {
	return (
		<div className="code">
			<p className="line">
				<span className="socials">.socials</span> &#123;
			</p>
			{contactItems.map((item, index) => (
				<p className="line" key={index}>
					&nbsp;&nbsp;&nbsp;{item.social}:{' '}
					<a href={item.href} target="_blank">
						{item.link}
					</a>
					;
				</p>
			))}
			<p className="line">&#125;</p>
		</div>
	);
};

export default ContactData;
