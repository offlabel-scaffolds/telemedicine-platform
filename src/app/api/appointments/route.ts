import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function GET() {
  const appointments = await prisma.appointment.findMany({
    take: 10,
    orderBy: { scheduledAt: 'desc' }
  })
  return NextResponse.json(appointments)
}

export async function POST(request: Request) {
  const body = await request.json()
  const appointment = await prisma.appointment.create({
    data: body
  })
  return NextResponse.json(appointment)
}