import TicketForm from '@/components/TicketForm';
import { Ticket } from '@/types/TicketInterface';

const getTicketById = async (id: string) => {
	try {
		const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
			cache: 'no-store',
		});

		if (!res.ok) {
			throw new Error('Failed to fetch topic');
		}

		return res.json();
	} catch (error) {
		console.log(error);
	}
};

let updateTicketData: any = {};
const TicketPage = async ({ params }: { params: { id: string } }) => {
	const EDITMODE = params.id === 'new' ? false : true;

	if (EDITMODE) {
		updateTicketData = await getTicketById(params.id);
		updateTicketData = updateTicketData.foundTicket;
	} else {
		updateTicketData = {
			_id: 'new',
		};
	}

	return <TicketForm ticket={updateTicketData} />;
};

export default TicketPage;
