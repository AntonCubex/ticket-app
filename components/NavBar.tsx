import { HomeIcon, TicketIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const NavBar = () => {
	return (
		<nav className='flex justify-between bg-nav p-4'>
			<div className='flex items-center space-x-4'>
				<Link href='/'>
					<HomeIcon className='h-6 w-6 text-default-text' />
				</Link>
				<Link href='/TicketPage/new'>
					<TicketIcon className='h-6 w-6 text-default-text' />
				</Link>
			</div>
			<div>
				<p className='text-default-text'>someemail@gmail.com</p>
			</div>
		</nav>
	);
};

export default NavBar;
