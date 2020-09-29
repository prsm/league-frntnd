import Content from '@components/Content';
import WelcomePage from '@components/WelcomePage';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useAuth } from '../contexts/auth';

export default function Home() {
  const user = undefined;
  const router = useRouter();

  const { isAuthenticated, saveJwt } = useAuth();

  const jwtCheck = () => {
    if (router.query.jwt) {
      saveJwt();
    }
  };

  https: return (
    <div>
      <Head>
        <title>PR1SM LEAGUE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {jwtCheck()}
      {isAuthenticated ? <Content /> : <WelcomePage />}
    </div>
  );
}
