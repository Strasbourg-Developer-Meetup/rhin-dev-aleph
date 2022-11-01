import {PropsWithChildren} from "react";
import {MDXProvider} from "@mdx-js/react";
import {Head, NavLink} from "aleph/react";
import {components} from "../components/Heading.tsx";


export default function Docs(props: PropsWithChildren) {
    return (
        <>
            <Head>
                <meta name="description" content="Meetup"/>
            </Head>

            <div className="mt-18 mx-auto max-w-5xl px-4 meetups">
                <div className="markdown-body">
                    <MDXProvider components={components}>
                        {props.children}
                    </MDXProvider>
                </div>
            </div>
        </>
    );
}
