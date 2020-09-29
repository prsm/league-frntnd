import DiscordLogo from '../public/discord.svg';

export default function LoginButton() {
  const discordLoginHandler = () => {
    window.location.assign(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/discord`);
  };

  return (
    <div className="block">
      <button className="flex flex-row justify-center bg-discord-blue p-2 rounded w-full" onClick={discordLoginHandler}>
        <DiscordLogo className=" w-8 h-8 flex-none" />
        <span className="ml-2 text-white font-bold text-lg">Log in with Discord</span>
      </button>
    </div>
  );
}
