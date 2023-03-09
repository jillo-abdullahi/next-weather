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
      <div className="bg-gradient-to-b from-blue-gem to-cherry-pie h-screen flex items-center justify-center"></div>
    </>
  );
}
