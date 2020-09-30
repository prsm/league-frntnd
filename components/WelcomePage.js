import FontLogo from '../public/logoFontStroke.svg';
import Logo from '../public/pr1sm.svg';
import LoginButton from './LoginButton';

export default function WelcomePage() {
  return (
    <>
      <div className="w-full bg-prsm-dark-700 overflow-hidden relative">
        <div className="z-10 mt-8 mb-2 mx-4 absolute px-4 pt-4">
          <FontLogo className="text-white fill-current w-32" />
          <h1 className="text-white font-bold text-4xl mt-4">
            LEAGUE<span className=" text-prsm-red-500 text-xs align-top">BETA</span>
          </h1>
          <p className="text-white font-medium text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt efficitur quam, ac convallis lectus molestie id. Ut imperdiet ipsum nec
            turpis pretium lacinia. Sed vitae pretium diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam
            eu varius elit, et fermentum est. Nullam tristique nisl eget mollis tincidunt. Mauris ultricies eros sed mi luctus, vitae tempus magna consectetur.
            Aliquam diam eros, aliquam ultrices maximus et, hendrerit a nunc.
          </p>
        </div>

        <Logo className="block w-132 mt-48" />
      </div>
      <div className="mt-4 mb-2 mx-4 pt-2 pb-2 px-2 bg-prsm-dark-700 rounded-md shadow-lg">
        <h2 className=" text-white font-bold text-2xl text-center">Join the action today</h2>
        <p className="text-white text-center mb-4 font-medium">(You'll be automatically added to our Guild)</p>
        <LoginButton />
      </div>
      <div className="mt-4 mb-2 mx-4 pt-2 px-2">
        <h2 className="text-prsm-dark-800 font-bold text-2xl mb-2 ">CoD Olympics</h2>
        <img className="rounded-md shadow-lg" src="banner.png" alt="PR1SM CoD Olympics banner" />
        <p className="text-prsm-dark-800 font-medium text-lg mt-4">
          <span className="text-prsm-red-600">This section describes what the olympics are.</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Integer tincidunt efficitur quam, ac convallis lectus molestie id. Ut imperdiet ipsum nec turpis pretium lacinia. Sed vitae pretium diam. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        </p>
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
      </div>
      <div className="static left-0 bottom-0 h-32 w-full bg-prsm-dark-700">
        <h1 className="my-8 mx-4 text-white font-bold text-4xl">Footer</h1>
      </div>
    </>
  );
}
