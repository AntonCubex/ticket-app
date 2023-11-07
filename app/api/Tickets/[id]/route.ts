import Ticket from '../../../../models/Ticket';
import { NextResponse } from 'next/server';

export async function GET(
	req: Request,
	{ params }: { params: { id: string } }
) {
	try {
		const { id } = params;
		const foundTicket = await Ticket.findOne({ _id: id });
		return NextResponse.json({ foundTicket }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ message: 'Error', error }, { status: 500 });
	}
}

export async function DELETE(
	req: Request,
	{ params }: { params: { id: string } }
) {
	try {
		const { id } = params; // Log the error
		await Ticket.findByIdAndDelete(id);
		return NextResponse.json({ message: 'Deleted ticket' }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ message: 'Error', error }, { status: 500 });
	}
}

export async function PUT(
	req: Request,
	{ params }: { params: { id: string } }
) {
	try {
		const { id } = params; // Log the error
		const body = await req.json();
		const ticketData = body.formData;

		const updateTicketData = await Ticket.findByIdAndUpdate(id, {
			...ticketData,
		});

		return NextResponse.json({ message: 'Deleted ticket' }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ message: 'Error', error }, { status: 500 });
	}
}
