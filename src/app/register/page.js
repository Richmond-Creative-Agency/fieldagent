import Navigation from '../ui/navigation/Navigation';
import Input from '../ui/Input';
export const metadata = {
  title: 'Register a new account | Field Agent',
  description: 'Organize your community',
};
export default function Page() {
  return (
    <>
      <Navigation />
      <main className="flex min-h-screen flex-col items-center p-24">
        <h1 className="mb-4 text-3xl">Interested? Register Now</h1>
        <form className="flex flex-col bg-slate-600 p-4 rounded-sm">
          <Input type="text" placeholder="Username" required />
          <Input type="password" placeholder="Password" required />
          <Input type="email" placeholder="Email" required />
          <button className="rounded-md py-2 my-2 bg-slate-800 hover:bg-slate-500 transition ease-in-out">
            Submit
          </button>
        </form>
      </main>
    </>
  );
}
