import config from '../config/config.mjs';

type TEmailBody = {
    name: string;
    email: string;
    message: string;
}

const sendEmail = async (body: TEmailBody): Promise<boolean> => {
	try {
			const res = await fetch(`${config.apiUrl}/email`, {
					method: 'POST',
					headers: {
							"Content-type": "application/json",
							"Accept": "*/*"
					},
					body: JSON.stringify(body),
			});

			if(!res.ok) {
					return false;
			}

			return true;

	} catch(error) {
			return false;
	}
}

export default sendEmail;
