import { NextRequest, NextResponse } from 'next/server'

const corsHeaders = {
	'Access-Control-Allow-Origin': '*', // allow all origins
	'Access-Control-Allow-Methods': '*',
	'Access-Control-Allow-Headers': 'Content-Type',
}

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders })
}

export async function GET(req: NextRequest) {
	const { method, body } = req
	return NextResponse.json(
		{ message: 'this is get request', body },
		{ headers: corsHeaders },
	)
}

export async function POST(req: NextRequest) {
	const { method, body } = req
	return NextResponse.json(
		{ message: 'this is post request', body },
		{ headers: corsHeaders },
	)
}
