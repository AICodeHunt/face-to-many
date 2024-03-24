import React, {useState, useEffect} from 'react';
import Head from "next/head";

const tdkArray = [
    {title: 'Face To Many - Replicate Face To Many & Make AI PS2 Filter', path: '/'},
];

function findItemByPath(path: string): { title: string, path: string } | undefined {
    let item = tdkArray.find(item => item.path === path);
    if (item === undefined) {
        item = {title: 'Face To Many - Replicate Face To Many & Make AI PS2 Filter', path: '/'}
    }
    return item;
}

interface TDK {
    title: string
    path: string
}

export const HeadMeta = () => {
    const [host, setHost] = useState("");
    const [url, setUrl] = useState("");
    const [item, setItem] = useState<TDK>();
    useEffect(() => {
        const currentDomain = window.location.hostname;
        const port = window.location.port;
        const protocol = window.location.protocol;
        const path = window.location.pathname;
        setItem(findItemByPath(path));
        setUrl(window.location.href);
        if (port === '80' || port === '443' || port === '') {
            setHost(protocol + "//" + currentDomain + "/");
        } else {
            setHost(protocol + "//" + currentDomain + ":" + port + "/");
        }
    }, []);
    return (
        <Head>
            <title>{item?.title}</title>
            <meta name="description"
                  content="Face To Many Make the PS2 filter AI Photo to participate in this PS2 Filter AI trend. With just one click, generate PS2 Filter AI Photo in seconds."/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="canonical" href={url}/>
            <link rel="icon" href="/favicon.png"/>
        </Head>
    );
};
