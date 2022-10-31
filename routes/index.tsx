import { Head, Link } from "aleph/react";
import { Meetup } from "../types/meetup.ts";
import MeetupCard from "../components/MeetupCard.tsx";

const externalLinks = [
  ["Get Started", "https://alephjs.org/docs/get-started"],
  ["Docs", "https://alephjs.org/docs"],
  ["Github", "https://github.com/alephjs/aleph.js"],
];

const meetups: Array<Meetup> = [
  {
    title:
      "How Algebraic Effects influenced popular frameworks like react.js ?",
    dateTime: "2022-11-09T19:00:00",
    place: "La plage digitale - Strasbourg",
    speaker: [
      {
        name: "Paul Chobert",
      },
      {
        name: "Edouard Mangel",
      },
      {
        name: "Ali",
      },
    ],
    labels: [],
    description:
      "Find out how algebraic effects influenced popular frameworks like react.js!",
    url: "/meetups/algebraic-effects",
    imageUrl:
      "https://www.meetup.com/_next/image/?url=https%3A%2F%2Fsecure-content.meetupstatic.com%2Fimages%2Fclassic-events%2F508201857%2F676x380.webp&w=3840&q=75",
  },
  {
    title: "Why Deno ?",
    dateTime: "2022-09-28T19:00:00",
    place: "La plage digitale - Strasbourg",
    speaker: [
      {
        name: "Kevin Faulhaber",
      },
    ],
    labels: [],
    description:
      'Ever heard of node? node --> [no][de] --> [de][no] --> deno. That\'s right, Deno is a "A modern runtime for JavaScript and TypeScript". Find out what makes Deno so special and how it could be the next big thing.',
    url: "/meetups/why-deno",
    imageUrl:
      "https://www.meetup.com/_next/image/?url=https%3A%2F%2Fsecure-content.meetupstatic.com%2Fimages%2Fclassic-events%2F507376881%2F676x380.webp&w=3840&q=75",
  },
];

export default function Index() {
  return (
    <div className="screen index">
      <Head>
        <title>Aleph.js</title>
        <meta name="description" content="The Fullstack Framework in Deno." />
      </Head>

      {meetups.map((item) => {
        return <MeetupCard data={item} />;
      })}
      <p className="logo">
        <img src="./assets/logo.svg" width="75" height="75" title="Aleph.js" />
      </p>
      <h1>The Fullstack Framework in Deno.</h1>
      <p>
        <strong>Aleph.js</strong> gives you the best developer experience for
        building web applications
        <br /> with modern toolings.
      </p>
      <div className="external-links">
        {externalLinks.map(([text, href]) => (
          <a href={href} target="_blank" key={href}>
            {text}
          </a>
        ))}
      </div>
      <nav>
        <Link role="button" to="/docs">
          Documentations
        </Link>
      </nav>
    </div>
  );
}
