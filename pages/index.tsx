import type { NextPage } from 'next';
import Container from '@components/container';

const Home: NextPage = () => {
  return (
    <div className="section-padding-primary">
      <Container>
        <div className="mx-auto max-w-[1200px] rounded-10 bg-primary px-6 py-10 text-black">
          <h2 className="text-center text-2xl font-bold text-white md:text-3xl 2xl:text-4xl">
            Welcome to Nextjs starter
          </h2>
        </div>
      </Container>
    </div>
  );
};

export default Home;
