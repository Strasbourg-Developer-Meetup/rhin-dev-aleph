import {Head, Link} from "aleph/react";
import {Meetup} from "../types/meetup.ts";
import MeetupCard from "../components/MeetupCard.tsx";

const externalLinks = [
    ["Get Started", "https://alephjs.org/docs/get-started"],
    ["Docs", "https://alephjs.org/docs"],
    ["Github", "https://github.com/alephjs/aleph.js"],
];

const comingMeetups: Array<Meetup> = [
    {
        title:
            "How Algebraic Effects influenced popular frameworks like react.js ?",
        dateTime: "2022-11-09T19:00:00",
        place: "La Plage Digitale - Strasbourg",
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
        labels: [
            "Algebraic Effects",
            "React",
            "Eff",
            "SemanticVersion",
            "GraphQL"
        ],
        description:
            "Find out how algebraic effects influenced popular frameworks like react.js!",
        url: "https://www.meetup.com/fr-FR/strasbourg-developer-meetup/events/289360629/",
        imageUrl:
            "https://www.meetup.com/_next/image/?url=https%3A%2F%2Fsecure-content.meetupstatic.com%2Fimages%2Fclassic-events%2F508201857%2F676x380.webp&w=3840&q=75",
    },
];
const pastMeetups: Array<Meetup> = [
    {
        title: "Why Deno ?",
        dateTime: "2022-09-28T19:00:00",
        place: "La Plage Digitale - Strasbourg",
        speaker: [
            {
                name: "Kevin Faulhaber",
            },
        ],
        labels: [
            "Deno",
            "Node.js",
            "Typescript",
            "Javascript",
            "UnitTest",
        ],
        description:
            'Ever heard of node? node --> [no][de] --> [de][no] --> deno. That\'s right, Deno is a "A modern runtime for JavaScript and TypeScript". Find out what makes Deno so special and how it could be the next big thing.',
        url: "/meetups/why-deno",
        imageUrl:
            "https://www.meetup.com/_next/image/?url=https%3A%2F%2Fsecure-content.meetupstatic.com%2Fimages%2Fclassic-events%2F507376881%2F676x380.webp&w=3840&q=75",
    },
];

export default function Index() {
    return (
        <div className="screen index mt-18">
            <Head>
                <title>Aleph.js</title>
                <meta name="description" content="The Fullstack Framework in Deno."/>
            </Head>

            <div className="mx-auto max-w-5xl px-4">
                <div>
                    <h2 className={"text-5xl font-normal leading-normal mt-0 mb-2 text-slate-800"}>Coming meetups</h2>
                    {comingMeetups.map((item) => {
                        return <MeetupCard
                            data={item}
                            isComing={true}
                        />;
                    })}
                </div>
                <div>
                    <h2 className={"text-5xl font-normal leading-normal mt-0 mb-2 text-slate-800"}>Past meetups</h2>
                    {pastMeetups.map((item) => {
                        return <MeetupCard
                            data={item}
                            isComing={false}
                        />;
                    })}
                </div>
            </div>
        </div>
    );
}
