import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { method, body } = req
  return NextResponse.json({ message: 'this is get request'})
}

export async function POST(req: NextRequest) {
  const { method, body } = req
  return NextResponse.json({ message: 'this is post request' })
}