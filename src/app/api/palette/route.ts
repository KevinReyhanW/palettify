import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const response = await fetch('http://colormind.io/api/', {
      method: 'POST',
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      throw new Error('Failed to fetch from Colormind API');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to generate palette' },
      { status: 500 }
    );
  }
}
