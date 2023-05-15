export default function AuthForm() {
  return (
    <form>
      <div className="mb-6">
        <label htmlFor="name" className="block text-gray-800 font-bold">
          E-mail:
        </label>
        <input
          type="email"
          name="name"
          id="name"
          placeholder="Digite seu e-mail"
          className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
          required
          // value={username}
          // onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-gray-800 font-bold">
          Senha:
        </label>
        <input
          type="password"
          name="email"
          id="email"
          placeholder="Digite sua senha"
          className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
          required
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {/* {error && (
        <div className="mb-4 text-red-500">{error}</div>
      )} */}
      <button className="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 hover:bg-indigo-600 text-white font-bold w-full text-center rounded">
        Entrar
      </button>
      {/* {loading && (
        <div className="mt-4">...</div>
      )} */}
    </form>
  )
}