import Head from 'next/head';

export default function Home() {
  const discordLoginHandler = () => {
    window.location.assign(`${process.env.BACKEND_URL}/auth/discord`);
  };

  return (
    <div className=" bg-gray-800">
      <Head>
        <title>PR1SM LEAGUE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <button onClick={discordLoginHandler}> Login with Discord</button>
      </div>
    </div>
  );
}
