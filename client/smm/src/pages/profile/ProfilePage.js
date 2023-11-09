import { Card } from "react-bootstrap";
import SettingsCard from "./SettingsCard";

const ProfilePage = ({ smm }) => {

	return (
		<SettingsCard>
			  <Card.Title>{smm}</Card.Title>
		</SettingsCard>
	  );
}

export default ProfilePage;