import DeleteBlock from './DeleteBlock';
import PriorityDisplay from './PriorityDisplay';
import ProgressDisplay from './ProgressDisplay';
import StatusDisplay from './StatusDisplay';
import { Ticket } from '@/types/TicketInterface';
import Link from 'next/link';

interface TicketCardProps {
	id: number | string;
	ticket: Ticket;
}

const TicketCard: React.FC<TicketCardProps> = ({ id, ticket }) => {
	const formatTimeStamp = (timestamp: string) => {
		const options: Intl.DateTimeFormatOptions = {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour: 'numeric',
			minute: 'numeric',
			second: 'numeric',
			hour12: false,
		};
		const date = new Date(timestamp);
		const formattedDate = date.toLocaleString('en-US', options);

		return formattedDate;
	};

	return (
		<div className='flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2'>
			<div className='flex mb-3'>
				<PriorityDisplay priority={ticket.priority} />
				<div className='ml-auto'>
					<DeleteBlock id={ticket._id} />
				</div>
			</div>

			<Link href={`/TicketPage/${ticket._id}`} style={{ display: 'contents' }}>
				<h4>{ticket.title}</h4>
				<hr className='h-px my-4 bg-page border-0 dark:bg-gray-700' />
				<p className='whitespace-pre-wrap'>{ticket.description}</p>
				<div className='flex-grow'></div>
				<div className='flex mt-2'>
					<div className='flex flex-col'>
						<p className='text-xs my-1'>{formatTimeStamp(ticket.createdAt)}</p>
						<ProgressDisplay progress={ticket.progress} />
					</div>
					<div className='ml-auto flex items-end'>
						<StatusDisplay status={ticket.status} />
					</div>
				</div>
			</Link>
		</div>
	);
};

export default TicketCard;
