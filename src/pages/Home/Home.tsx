export default function Home() {
  const boolean = true;
  return (
    <>
      <main className="w-full h-full bg-home-background bg-cover  ">
        <div className="bg-black opacity-80 absolute w-full h-full" />
        <div className="h-full w-full absolute z-10 p-4 flex items-center justify-center flex-col gap-6 text-gray-100 ">
          <h1 className="text-6xl">
            Fut<span className="text-green-600">stats</span>
          </h1>
          <form
            action="submit"
            className="w-96 p-4 flex flex-col gap-4 text-center"
          >
            <h3 className="text-lg">Entre com seu token</h3>
            <input
              type="text"
              placeholder="Digite aqui seu token"
              className={`p-4 rounded-lg bg-gray-800 ${
                boolean ? "border-solid border-2 border-red-600" : ""
              }`}
            />
            {boolean ? (
              <small className="text-red-600 font-bold">Erro de login</small>
            ) : (
              ""
            )}
            <button className="bg-green-600 p-2 rounded-md">Entrar</button>
          </form>
        </div>
      </main>
    </>
  );
}
