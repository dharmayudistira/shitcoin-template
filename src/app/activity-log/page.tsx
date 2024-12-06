import Header from '@/app/_components/header';
import Footer from '@/app/_components/footer';
import Link from 'next/link';

interface ActivityItem {
  title: string;
  subtitle: string;
}

const interactXLink = '';
const activities: ActivityItem[] = Array.from({ length: 5 }).map((_, index) => {
  return {
    title: `Title ${index}`,
    subtitle: `Subtitle ${index}`
  };
});

export default function Page() {
  return (
    <main className='w-full h-full bg-red-500'>
      <Header />

      {/* Content */}
      <div className='container pt-20'>
        <div className='flex w-full justify-start text-xl mb-10'>
          Back to Home
        </div>

        <p className='text-5xl text-center mb-16'>COIN Activity</p>

        <div className='flex flex-col gap-4 mb-32'>
          {activities.map((item, index) => {
            return (
              <div
                key={index}
                className='w-full border rounded-xl px-4 py-2 flex justify-between'
              >
                <div className='flex flex-col gap-2'>
                  <p className='text-xs'>{item.subtitle}</p>
                  <p className='text-lg'>{item.title}</p>
                </div>

                <Link
                  href={interactXLink}
                  className='w-[200px] border rounded-xl flex gap-4 items-center px-4'
                >
                  <p>Interact with X</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </main>
  );
}
