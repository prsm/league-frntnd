import { motion } from 'framer-motion';
import DiscordLogo from '../public/discord.svg';
import FontLogo from '../public/logoFontStroke.svg';
import Logo from '../public/pr1sm.svg';
import LoginButton from './LoginButton';

export default function WelcomePage() {
  return (
    <>
      <div className="w-full bg-prsm-dark-700 overflow-hidden relative">
        <div className=" mt-8 mb-2 mx-4 px-4 py-4 lg:px-32 xl:px-64 lg:py-20">
          <FontLogo className="text-white fill-current w-32 lg:w-48 float-right " />
          <h1 className="text-white font-bold text-4xl mt-16 lg:text-6xl lg:mb-8">
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
        <div className="mt-6 mb-2 mx-4 pt-2 pb-4 px-4 bg-prsm-dark-700 rounded-md shadow-lg lg:w-1/2 lg:p-8">
          <h2 className=" text-white font-bold text-2xl text-center">Enter the LEAGUE</h2>
          <p className="text-white text-center mb-4 font-medium">Battle it out against other PR1SM members</p>
          <LoginButton />
        </div>
        <div className="mt-6 mb-2 mx-4 pt-2 pb-4 px-4 bg-prsm-dark-700 rounded-md shadow-lg lg:w-1/2 lg:p-8">
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
      <div className="bg-prsm-dark-700 rounded-md shadow-lg mt-4 mb-6 py-4 px-4 mx-4 lg:p-8">
        <h2 className="text-white font-bold text-2xl lg:text-3xl mb-4 ">
          CoD Olympics<span className=" text-prsm-red-500 text-xs align-top lg:text-base">Next event</span>
        </h2>
        <div className="flex flex-col lg:flex-row flex-no-wrap justify-between">
          <div className="lg:pr-4">
            <img className="rounded-md border-white border-2 mb-4" src="banner.png" alt="PR1SM CoD Olympics banner" />
          </div>
          <div className="lg:ml-4">
            <h3 className="text-white font-bold text-xl mb-4">What are the Call of Duty Olympics?</h3>
            <p className="text-white font-medium text-lg">
              Over the next two LAN-Events there will be different gamemodes in different games.
              <br />
              There will be more information on this in the following days.
              <br />
              <span className="text-prsm-red-500">Join our Discord server to stay updated</span>
            </p>
            <h3 className="text-white font-bold text-xl my-4">Olympic disciplines:</h3>
            <ul className="list-disc list-inside mb-4">
              <li className="text-prsm-red-600">
                <span className="text-white font-medium text-lg">LAN2K20</span>
                <ul className="list-disc list-inside">
                  <li className="text-prsm-red-600 ml-4">
                    <span className="text-white font-medium text-lg">IW4x -> MW2</span>
                  </li>
                  <li className="text-prsm-red-600 ml-4">
                    <span className="text-white font-medium text-lg">Plutonium -> BO2</span>
                  </li>
                </ul>
              </li>
              <li className="text-prsm-red-600">
                <span className="text-white font-medium text-lg">Isle of Lan</span>
                <ul className="list-disc list-inside">
                  <li className="text-prsm-red-600 ml-4">
                    <span className="text-white font-medium text-lg">TBD</span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="static left-0 bottom-0  w-full bg-prsm-dark-700 py-4">
        <Logo className="fill-current text-white w-12 h-12 m-auto" />
      </div>
    </>
  );
}
