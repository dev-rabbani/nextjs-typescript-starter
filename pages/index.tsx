import type { NextPage } from 'next';
import Container from '@components/container';

const Home: NextPage = () => {
  return (
    <div className="section-padding-primary">
      <Container>
        <div className="mx-auto max-w-[1200px] rounded-10 bg-primary py-10 px-6 text-black">
          <h2 className="2xl:text-6xl text-center text-5xl font-bold text-white">
            Welcome to Nextjs starter
          </h2>
        </div>
      </Container>
    </div>
  );
};

export default Home;
