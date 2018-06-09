import { RSSHubFeeds } from "./feeds";

export interface RSS2Result {

}

export interface AtomResult {

}

export interface JSONFeedResult {

}

export interface RSSHubRequestSetup {
    get<T = RSS2Result>(): Promise<T>;

    rss2(): Promise<RSS2Result>;

    atom(): Promise<AtomResult>;

    json(): Promise<JSONFeedResult>;
}

export interface RSSHubStatic {
    feeds: RSSHubFeeds;

    request(url: string): RSSHubRequestSetup;

    config(values: Object): void;
}

declare const RSSHub: RSSHubStatic;
export default RSSHub;
