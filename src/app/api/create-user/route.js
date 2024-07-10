import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('Name');
  const userName = searchParams.get('UserName');

  try {
    if (!name || !userName) throw new Error('Name and username required');
    await sql`INSERT INTO Users (Name, User_name) VALUES (${name}, ${userName});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const users = await sql`SELECT * FROM Users;`;
  return NextResponse.json({ users }, { status: 200 });
}
