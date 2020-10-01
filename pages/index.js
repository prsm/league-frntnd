import Content from '@components/Content';
import WelcomePage from '@components/WelcomePage';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useAuth } from '../contexts/auth';
import Logo from '../public/pr1sm.svg';

export default function Home() {
  const user = undefined;
  const router = useRouter();

  const { isAuthenticated, saveJwt, loading } = useAuth();

  const jwtCheck = () => {
    if (router.query.jwt) {
      saveJwt();
    }
  };

  const loadingImage = (
    <div className="m-auto mt-40">
      <Logo className=" w-48 m-auto fill-current text-prsm-dark-700" />
      <p className="text-lg font-semibold text-prsm-dark-700 text-center">loading...</p>
    </div>
  );

  https: return (
    <div>
      <Head>
        <title>PR1SM LEAGUE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {jwtCheck()}
      {loading ? loadingImage : isAuthenticated ? <Content /> : <WelcomePage />}
    </div>
  );
}
