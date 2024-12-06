import Header from '@/app/_components/header';
import { Section1 } from '@/app/_components/section-1';
import { Section2 } from '@/app/_components/section-2';
import { Section3 } from '@/app/_components/section-3';
import { Section4 } from '@/app/_components/section-4';
import Footer from '@/app/_components/footer';
import RunningText from '@/app/_components/running-text';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='w-full h-full relative'>
      <Header />
      <Section1 />
      <RunningText
        marqueProps={{ direction: 'right' }}
        image={
          <Image
            src={'https://picsum.photos/40'}
            width={40}
            height={40}
            alt=''
          />
        }
        coinName='$COIN'
        count={100}
      />
      <Section2 />
      <RunningText coinName='$COIN' count={100} />
      <Section3 />
      <RunningText coinName='$COIN' count={100} />
      <Section4 />
      <Footer />
    </main>
  );
}
