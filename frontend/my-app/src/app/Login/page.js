'use client'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../Firebase/config';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [user] = useAuthState(auth);
  const router = useRouter();

  if (typeof window !== 'undefined') {
    const userSession = sessionStorage.getItem('user');

    console.log({ user });

    if (!user && !userSession) {
      router.push('/sign-up');
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Your content goes here */}
    </main>
  );
}