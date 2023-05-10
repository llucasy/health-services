import AuthForm from './components/AuthForm';

export default function LoginPage() {
  return (
    <section className="w-full max-w-[400px] py-6 px-8 min-h-72 bg-zinc-100 rounded shadow-xl">
      <AuthForm />
    </section>
  );
}
