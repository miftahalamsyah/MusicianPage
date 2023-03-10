import Head from 'next/head';
import { Inter } from '@next/font/google';
import { Navbar } from "../components/navbar";
import { Bio } from "../components/bio";
import { Musicstore } from "../components/musicstore";
import { Merchstore } from "../components/merchstore";
import { Tour } from "../components/tour";
import { Booking } from "../components/booking";
import { Footer } from "../components/footer";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>nrrdy | Official Website</title>
          <meta
              name="keywords"
              content="music"
          />
          <meta
              name="description"
              content="Hi! I am Musician."
          />
          <meta name="author" content="Miftah Alamsyah" />
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
          <Navbar />

          <section className="bio">
              <Bio />
          </section>

          <section className="musicstore">
              <Musicstore />
          </section>

          <section className="merchstore">
              <Merchstore />
          </section>

          <section className ="tour">
              <Tour />
          </section>

          <section className="booking">
              <Booking />
          </section>

          <Footer />
      </main>
    </>
  )
}
