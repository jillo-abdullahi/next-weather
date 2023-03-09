import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Your weather</title>
        <meta name="description" content="What's the weather like" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-slate-100 h-screen flex items-center justify-center">
        <div className="bg-white text-black rounded-lg shadow-lg p-4">
          This should be at the center
        </div>
      </div>
    </>
  );
}
