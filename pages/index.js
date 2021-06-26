import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>De Foto's van Emily</title>
        {/* description meta */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-red-50">
        <p className="font-semibold">Hier komt de begin "slide"</p>
      </div>

      <div className="grid bg-yellow-100">
        <div className="grid grid-cols-1 md:grid-cols-2 my-40 gap-4 justify-items-center">
          <p className="font-semibold">Hee, welkom op mijn site!</p>
          <div>
            <Image
              src="/images/Laurensvanroomen.jpg"
              alt="Laurens"
              width={1200}
              height={800}
            />
          </div>
        </div>
      </div>

      {/* <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <p className="font-semibold">Dit is montserrat</p>
        <p className="font-display text-6xl">Dit is Quick</p>

        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Get started by editing{' '}
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
            pages/index.js
          </code>
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <a
            href="https://nextjs.org/docs"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
            <p className="mt-4 text-xl">
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Learn &rarr;</h3>
            <p className="mt-4 text-xl">
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Examples &rarr;</h3>
            <p className="mt-4 text-xl">
              Discover and deploy boilerplate example Next.js projects.
            </p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
            <p className="mt-4 text-xl">
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main> */}

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </Fragment>
  );
}
