"use client"
import { XMarkIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation';

interface DeleteBlockProps {
	id: number | string;
}

const DeleteBlock: React.FC<DeleteBlockProps> = ({ id }) => {
	const router = useRouter();

	const deleteTicket = async () => {
		const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
			method: 'DELETE',
		});

		if (res.ok) {
			router.refresh();
			console.log('Deleted successfully');
		}
	};

	return (
		<XMarkIcon
			className='h-6 w-6 text-red-400 hover:cursor-pointer hover:text-red-200'
			onClick={deleteTicket}
		/>
	);
};

export default DeleteBlock;
