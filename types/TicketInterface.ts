export interface Ticket {
	title: string;
	description: string;
	category: string;
	priority: number;
	progress: number;
	status: string;
	active: boolean;
	createdAt: string;
	_id: string | number;
	foundTicket?: Ticket;
}
