import { useAuth } from '../contexts/auth';

export default function WelcomePage() {
  const { loading, user, logout } = useAuth();

  const logoutHandler = () => {
    window.location.assign(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/discord`);
  };

  const gg = (
    <>
      <p className="text-white font-bold  lg:text-lg self-center">{`${user.username}#${user.discriminator}`}</p>
      <button className=" text-white mb-4 underline" onClick={logout}>
        Logout
      </button>
    </>
  );

  return (
    <div className="flex align-middle justify-items-center flex-col m-auto bg-prsm-dark-800 lg:w-1/2 lg:rounded-lg shadow-lg mt-64">
      <h1 className="text-white font-extrabold text-lg lg:text-2xl self-center mt-2">Content Page</h1>
      {loading ? <p className="text-white font-bold  lg:text-lg self-center">loading...</p> : gg}
    </div>
  );
}
