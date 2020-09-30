import { motion } from 'framer-motion';
import DiscordLogo from '../public/discord.svg';
import FontLogo from '../public/logoFontStroke.svg';
import Logo from '../public/pr1sm.svg';
import LoginButton from './LoginButton';

export default function WelcomePage() {
  return (
    <>
      <div className="w-full bg-prsm-dark-700 overflow-hidden relative">
        <div className=" mt-8 mb-2 mx-4 px-4 py-4 lg:px-64 lg:py-20">
          <FontLogo className="text-white fill-current w-32 lg:w-48" />
          <h1 className="text-white font-bold text-4xl mt-4 lg:text-6xl lg:mb-8">
            LEAGUE<span className=" text-prsm-red-500 text-sm lg:text-base align-top">BETA</span>
          </h1>
          <p className="text-white font-medium text-lg">
            Welcome to PR1SM League, a custom made league system for and by PR1SM. This beta version was created for the Call of Duty Olympics.
            <br />
            You can log in with Discord. The data we'll be able to access are basic profile informations, your e-mail and your avatar.
            <br />
            <br />
            Also, make sure to join our Discord Server. There you'll be able to find more informations about current matches or tournaments.
          </p>
        </div>

        <Logo className="block -z-10 absolute" />
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="mt-6 mb-2 mx-4 pt-2 pb-4 px-4 bg-prsm-dark-700 rounded-md shadow-lg lg:w-1/2">
          <h2 className=" text-white font-bold text-2xl text-center">Enter the LEAGUE</h2>
          <p className="text-white text-center mb-4 font-medium">Battle it out against other PR1SM members</p>
          <LoginButton />
        </div>
        <div className="mt-6 mb-2 mx-4 pt-2 pb-4 px-4 bg-prsm-dark-700 rounded-md shadow-lg lg:w-1/2">
          <h2 className=" text-white font-bold text-2xl text-center">Get the latest</h2>
          <p className="text-white text-center mb-4 font-medium">Join our Discord server to see upcoming matches</p>
          <motion.a
            className="flex flex-row justify-center bg-discord-blue w-full p-2 rounded  focus:outline-none"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            href="https://discord.gg/pr1sm"
          >
            <DiscordLogo className=" w-8 h-8" />
            <span className="ml-2 text-white font-bold text-lg">Join PR1SM Discord server</span>
          </motion.a>
        </div>
      </div>
      <div className="bg-prsm-dark-700 rounded-md shadow-lg mt-4 mb-2 py-4 px-4 mx-4">
        <h2 className="text-white font-bold text-2xl mb-4 ">
          CoD Olympics<span className=" text-prsm-red-500 text-xs align-top">Next event</span>
        </h2>
        <img className="rounded-md  border-white border-2 mb-4" src="banner.png" alt="PR1SM CoD Olympics banner" />
        <p className="text-white font-medium text-lg mt-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt efficitur quam, ac convallis lectus molestie id. Ut imperdiet ipsum nec
          turpis pretium lacinia. Sed vitae pretium diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        </p>
      </div>
      <h3 className="text-prsm-dark-800 font-bold text-xl my-2">Olympic disciplines:</h3>
      <ul className="list-disc list-inside mb-4">
        <li className="text-prsm-red-600">
          <span className="text-prsm-dark-800 font-medium text-lg">Call of Duty 4: Modern Warfare</span>
        </li>
        <li className="text-prsm-red-600">
          <span className="text-prsm-dark-800 font-medium text-lg">Call of Duty 4: Modern Warfare</span>
        </li>
        <li className="text-prsm-red-600">
          <span className="text-prsm-dark-800 font-medium text-lg">Call of Duty 4: Modern Warfare</span>
        </li>
        <li className="text-prsm-red-600">
          <span className="text-prsm-dark-800 font-medium text-lg">Call of Duty 4: Modern Warfare</span>
        </li>
        <li className="text-prsm-red-600">
          <span className="text-prsm-dark-800 font-medium text-lg">Call of Duty 4: Modern Warfare</span>
        </li>
        <li className="text-prsm-red-600">
          <span className="text-prsm-dark-800 font-medium text-lg">Call of Duty 4: Modern Warfare</span>
        </li>
      </ul>

      <div className="static left-0 bottom-0  w-full bg-prsm-dark-700 py-4">
        <Logo className="fill-current text-white w-12 h-12 m-auto" />
      </div>
    </>
  );
}
