import React from "react";
import {Meetup} from "../types/meetup.ts";
import {Link} from "aleph/react";
import dayjs from "dayjs";
import CallToAction from "./CallToAction.tsx";

type MeetupCardProps = {
    data: Meetup;
    isComing: boolean;
};

function MeetupCard(props: MeetupCardProps) {
    return (
        <div className="dark:bg-gray-800 dark:text-gray-50 mb-10 bg-white rounded-xl">
            <div className="container grid grid-cols-12 mx-auto dark:bg-gray-900">
                <div
                    className="bg-no-repeat bg-cover dark:bg-gray-700 col-span-full lg:row-span-none lg:col-span-4 lg:h-full h-64 lg:rounded-r-xl lg:rounded-tl-none rounded-t-xl"
                    style={{
                        backgroundImage: "url('" + props.data.imageUrl + "')",
                        backgroundPosition: "center center",
                        backgroundBlendMode: "multiply",
                        backgroundSize: "cover",
                    }}
                ></div>
                <div className="flex flex-col p-6 col-span-full lg:row-span-full lg:col-span-8 lg:p-10 lg:pt-8">
                    <div className="">
                        {props.data.labels.map((label) => {
                            return (
                                <span
                                    className="px-2 py-1 mr-2 mt-2 text-xs rounded-full inline-block bg-yellow-500 text-white dark:bg-violet-400 dark:text-gray-900">
              #{label}
            </span>)
                        })}

                    </div>

                    <span className="text-xl my-5 font-bold">
              {dayjs(props.data.dateTime).format("DD/MM/YYYY à HH:mm")} @{props.data.place}
            </span>
                    <h1 className="text-3xl font-semibold">{props.data.title}</h1>
                    <p className="flex-1 py-5">{props.data.description}</p>
                    <div className="flex lg:flex-row flex-col justify-between pt-2">
                        <div className="flex space-x-2 items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-5 h-5 dark:text-gray-400"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <span className="self-center text-md">
                by {props.data.speaker.map((speaker, i, arr) => speaker.name + (arr.length - 1 !== i ? ", " : ''))}
              </span>
                        </div>
                        <div className={"lg:m-0 mt-5"}>

                            {props.isComing &&
                                <CallToAction
                                    icon={"/assets/meetup.png"}
                                    to={props.data.url}
                                    linkProps={{
                                        target: "_blank",
                                        rel: "noopener noreferrer"
                                    }}
                                >
                                    Register on Meetup.com
                                </CallToAction>
                            }
                            {!props.isComing &&
                                <CallToAction
                                    icon={"/assets/youtube.png"}
                                    to={props.data.url}
                                >
                                    Watch replay
                                </CallToAction>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MeetupCard;
