import React from "react";
import {Link, LinkProps} from "aleph/react";

type CallToActionProps = {
    icon: string;
    to: string;
    children?: React.ReactNode;
    linkProps?: LinkProps;
};

export default function CallToAction(props: CallToActionProps) {
    return (
        <Link
            {...props.linkProps}
            to={props.to}
        >
            <div
                className={"inline-flex items-center justify-center py-2 px-4 rounded-lg bg-yellow-400 lg:w-auto w-full hover:scale-115 ease-in-out duration-300"}>
                <img alt={"icon"} src={props.icon} className={"w-6 inline-block"}/>
                <span className={"ml-2"}>{props.children}</span>
            </div>
        </Link>
    );
}