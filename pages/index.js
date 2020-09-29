import Head from 'next/head';

export default function Home() {
  const discordLoginHandler = () => {
    window.location.assign(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/discord`);
  };

  return (
    <div>
      <Head>
        <title>PR1SM LEAGUE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex align-middle justify-items-center flex-col m-auto bg-black lg:w-1/2 lg:rounded-lg shadow-lg mt-64">
        <h1 className="text-white font-extrabold text-lg lg:text-2xl self-center mt-2">Ich bruch e paar Test accounts</h1>
        <p className="text-white font-bold  lg:text-lg self-center">Meld dich doch bitte schnell ah</p>
        <button className=" text-white mb-4 underline" onClick={discordLoginHandler}>
          Login with Discord
        </button>
      </div>
    </div>
  );
}
