import { motion } from 'framer-motion';
import DiscordLogo from '../public/discord.svg';

export default function LoginButton() {
  const discordLoginHandler = () => {
    window.location.assign(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/discord`);
  };

  return (
    <div className="block">
      <motion.button
        className="flex flex-row justify-center bg-discord-blue w-full p-2 rounded  focus:outline-none"
        onClick={discordLoginHandler}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
      >
        <DiscordLogo className=" w-8 h-8" />
        <span className="ml-2 text-white font-bold text-lg">Log in with Discord</span>
      </motion.button>
    </div>
  );
}
