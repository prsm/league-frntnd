import Logo from '../public/pr1sm.svg';
import LoginButton from './LoginButton';

export default function WelcomePage() {
  return (
    <>
      <div className="w-full bg-prsm-dark-700 overflow-hidden">
        <div className="z-10 mt-8 mb-2 mx-4 absolute">
          <h1 className="text-white font-bold text-4xl mb-2">PR1SM LEAGUE</h1>
          <p className="text-white font-medium text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt efficitur quam, ac convallis lectus molestie id. Ut imperdiet ipsum nec
            turpis pretium lacinia. Sed vitae pretium diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam
            eu varius elit, et fermentum est. Nullam tristique nisl eget mollis tincidunt. Mauris ultricies eros sed mi luctus, vitae tempus magna consectetur.
            Aliquam diam eros, aliquam ultrices maximus et, hendrerit a nunc.
          </p>
        </div>

        <Logo className="block w-132 mt-20" />
      </div>
      <div className="mt-4 mb-2 mx-4 pt-2 pb-2 px-2 bg-prsm-dark-700 rounded-md">
        <h2 className=" text-white font-bold text-2xl text-center">Join the action today</h2>
        <p className="text-white text-center mb-4 font-medium">(You'll be automatically added to our Guild)</p>
        <LoginButton />
      </div>
      <div className="mt-4 mb-2 mx-4 pt-2 ">
        <h2 className=" text-white font-bold text-2xl mb-2 text-center">Join the action today</h2>
        <h2 className=" text-white font-bold text-2xl mb-2 text-center">Join the action today</h2>

        <LoginButton />
      </div>
    </>
  );
}
