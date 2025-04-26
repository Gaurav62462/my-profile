import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const referer = request.headers.get('referer');
  console.log(request,'requestrequest')
  console.log('Referer Header:', referer);

  return NextResponse.next();
}
