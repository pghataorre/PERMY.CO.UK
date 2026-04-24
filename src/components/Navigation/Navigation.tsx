import CloseIcon from "../Icons/CloseIcon";
import config from "../../config/config.mjs";
import './Navigation.scss';


type TNavigation = {
	handleNavState: (event: React.MouseEvent<Element, MouseEvent> | undefined, pageName: string) => void;
}

const Navigation = ({ handleNavState }: TNavigation) => {
	return (
		<>
			<button className="close-nav" onClick={(event) => handleNavState(event, '')}>
				<CloseIcon />
			</button>
			<ul className="nav">
				<li onClick={(event) => handleNavState(event, 'default-page')} >
					<a href="default-page">Home</a>
				</li>
				<li onClick={(event) => handleNavState(event, config.liveMixPathName)}>
					<a href="live-session">Live Sessions</a>
				</li>
				<li onClick={(event) => handleNavState(event, 'mixes-page')}>
					<a href="mixes-page">Mixes</a>
				</li>
				<li onClick={(event) => handleNavState(event, 'contact-page')}>
					<a href="#contact-page">Get in touch</a>
				</li>
			</ul>
		</>
	)
}

export default Navigation;