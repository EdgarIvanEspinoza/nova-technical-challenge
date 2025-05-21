import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <Button>
        <Link href={'/profile/ivan-espinoza'}>Go to Ivan Espinoza profile</Link>
      </Button>
    </div>
  );
}
