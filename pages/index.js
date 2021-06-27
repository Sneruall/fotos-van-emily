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
        <p className="font-semibold text-pink-darkest">
          Hier komt de begin "slide"
        </p>
      </div>

        <div className="grid grid-rows-1 md:grid-cols-2 md:gap-6 justify-items-center bg-pink py-40 md:px-20 lg:p-40">
          <p className="font-display text-white text-center text-5xl mx-5 md:hidden">
            Hee, welkom op mijn site!
          </p>

          <div className="order-2 md:order-1">
            <p className="font-display text-pink-darkest text-center text-5xl mx-5 hidden md:block">
              Hee, welkom op mijn site!
            </p>
            <p className="font-display text-pink-darkest text-center text-3xl">
              Mijn naam is
            </p>
            <p className="font-display text-white text-center text-5xl uppercase">
              Emily van Roomen
            </p>
            <p className="font-display text-pink-darkest text-center text-3xl">
              en ik ben fotograaf actief in omgeving Zeist en Utrecht
            </p>
            <p className="text-center text-lg mx-6">
              Ik woon in Zeist maar ben in heel Nederland actief, met mijn tiny
              house opwielen kom ik overal naar toe! Je kunt bij mij terecht
              voor een professionele fotoshoot voor allerlei gelegenheden; van
              bruiloften tot hondenshoots. Met veel aandacht en enthousiasme
              zorg ik voor prachtige foto’s waar jij voor altijd van kan blijven
              genieten. Kijk rond op mijn site en aarzel niet om contact met mij
              op te nemen!
            </p>
          </div>

          <div className="order-1 hidden md:block">
            <Image
              src="/images/emily.png"
              alt="Emily"
              width={370}
              height={553}
            />
          </div>

          <div className="order-1 md:hidden">
            <Image
              src="/images/emily.png"
              alt="Emily"
              width={230}
              height={343}
            />
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
