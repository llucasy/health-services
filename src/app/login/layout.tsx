import HeaderForm from './components/HeaderForm'

export const metadata = {
  title: 'Login',
  description: 'Healthcare services - Login',
}

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col justify-center items-center sm:h-screen">
      <HeaderForm />
      {children}
    </main>
  )
}
