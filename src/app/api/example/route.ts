import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ 
    message: 'Example API route',
    timestamp: new Date().toISOString()
  })
}

export async function POST(request: Request) {
  const body = await request.json()
  
  // Add your logic here
  
  return NextResponse.json({ 
    success: true,
    data: body
  })
}