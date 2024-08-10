'use client';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const LOGIN = dynamic(() => import('./loginPage'), { ssr: false });
const LOGINSELECTPAGE = dynamic(() => import('./loginSelectPage'), { ssr: false });
const SOCIAL = dynamic(() => import('./socialLogin'), { ssr: false });
export default function Page() {

  return (
    <div>
      <LOGIN/>
    </div>
  );
}