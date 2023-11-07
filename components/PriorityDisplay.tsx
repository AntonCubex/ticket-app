import { FireIcon } from '@heroicons/react/24/solid';
import { Ticket } from '@/types/TicketInterface';

interface PriorityDisplayProps {
	priority: number;
}

const PriorityDisplay: React.FC<PriorityDisplayProps> = ({ priority }) => {
	return (
		<div className='flex justify-start align-baseline'>
			<FireIcon
				className={`h-6 w-6 pr-1 ${
					priority > 1 ? 'text-red-400' : 'text-slate-400'
				}`}
			/>
			<FireIcon
				className={`h-6 w-6 pr-1 ${
					priority > 2 ? 'text-red-400' : 'text-slate-400'
				}`}
			/>
			<FireIcon
				className={`h-6 w-6 pr-1 ${
					priority > 3 ? 'text-red-400' : 'text-slate-400'
				}`}
			/>
			<FireIcon
				className={`h-6 w-6 pr-1 ${
					priority > 4 ? 'text-red-400' : 'text-slate-400'
				}`}
			/>
			<FireIcon
				className={`h-6 w-6 pr-1 ${
					priority > 5 ? 'text-red-400' : 'text-slate-400'
				}`}
			/>
		</div>
	);
};

export default PriorityDisplay;
