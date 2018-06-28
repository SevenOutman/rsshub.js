import { RSSHubRequestSetup } from "./index";

interface RSSHubFeedEndpoint<T = void> {
    (params?: T): RSSHubRequestSetup;
}

interface Feed {
    [ key: string ]: RSSHubFeedEndpoint;
}

interface BilibiliFeed extends Feed {
    bangumi: RSSHubFeedEndpoint<{ seasonid: string }>;
    user_video: RSSHubFeedEndpoint<{ uid: string }>;
    user_dynamic: RSSHubFeedEndpoint<{ uid: string }>;
    user_fav: RSSHubFeedEndpoint<{ uid: string }>;
    fav: RSSHubFeedEndpoint<{ uid: string, fid: string }>;
    user_coin: RSSHubFeedEndpoint<{ uid: string }>;
    user_followers: RSSHubFeedEndpoint<{ uid: string }>;
    user_followings: RSSHubFeedEndpoint<{ uid: string }>;
    partion: RSSHubFeedEndpoint<{ partion: string }>;
    video_reply: RSSHubFeedEndpoint<{ aid: string }>;
    link_news: RSSHubFeedEndpoint<{ product: string }>;
    live_room: RSSHubFeedEndpoint<{ roomID: string }>;
    live_search: RSSHubFeedEndpoint<{ key: string, order: string }>;
    live_area: RSSHubFeedEndpoint<{ areaID: string, order: string }>;
    blackboard: RSSHubFeedEndpoint;
    mall_new: RSSHubFeedEndpoint;
    mall_ip: RSSHubFeedEndpoint<{ id: string }>;
}

interface BangumiFeed {
    calendar_today: RSSHubFeedEndpoint;
}

interface WeiboFeed {
    user: RSSHubFeedEndpoint<{ uid: string }>;
    user2: RSSHubFeedEndpoint<{ uid: string }>;
    keyword: RSSHubFeedEndpoint<{ keyword: string }>;
}

interface TiebaFeed {
    forum: RSSHubFeedEndpoint<{ kw: string }>;
    forum_good: RSSHubFeedEndpoint<{ kw: string, cid: string }>
}

interface JikeFeed {
    topic: RSSHubFeedEndpoint<{ id: string }>;
    topic_square: RSSHubFeedEndpoint<{ id: string }>;
    user: RSSHubFeedEndpoint<{ id: string }>;
}

interface NCMFeed {
    playlist: RSSHubFeedEndpoint<{ id: string }>;
    user_playlist: RSSHubFeedEndpoint<{ uid: string }>;
    artist: RSSHubFeedEndpoint<{ id: string }>;
}

interface JuejinFeed {
    category: RSSHubFeedEndpoint<{ category: string }>;
}

interface JianshuFeed {
    home: RSSHubFeedEndpoint;
    trending_weekly: RSSHubFeedEndpoint;
    trending_monthly: RSSHubFeedEndpoint;
    collection: RSSHubFeedEndpoint<{ id: string }>;
    user: RSSHubFeedEndpoint<{ id: string }>;
}

interface ZhihuFeed {
    collection: RSSHubFeedEndpoint<{ id: string }>;
    people_activities: RSSHubFeedEndpoint<{ id: string }>;
    people_answers: RSSHubFeedEndpoint<{ id: string }>;
    zhuanlan: RSSHubFeedEndpoint<{ id: string }>;
    daily: RSSHubFeedEndpoint;
}

interface ZiroomFeed {
    room: RSSHubFeedEndpoint<{ city: string, iswhole: number, room: number, keyword: string }>;
}

interface ExpressFeed extends RSSHubFeedEndpoint<{ company: string, number: string }> {

}

interface MzituFeed extends RSSHubFeedEndpoint {
    category: RSSHubFeedEndpoint<{ category: string }>;
    tags: RSSHubFeedEndpoint;
    tag: RSSHubFeedEndpoint<{ tag: string }>;
    post: RSSHubFeedEndpoint<{ id: string }>;
}

interface PixivFeed {
    user_bookmarks: RSSHubFeedEndpoint<{ id: string }>;
    user: RSSHubFeedEndpoint<{ id: string }>;
    ranking: RSSHubFeedEndpoint<{ mode: string, date: string }>;
}

interface DoubanFeed {
    movie_playing: RSSHubFeedEndpoint<{ score?: string, city?: string }>;
    movie_later: RSSHubFeedEndpoint;
    movie_ustop: RSSHubFeedEndpoint;
    group: RSSHubFeedEndpoint<{ groupid: string }>;
}

interface JandanFeed {
    pic: RSSHubFeedEndpoint;
}

interface DapentiFeed {
    tugua: RSSHubFeedEndpoint;
}

interface DockoneFeed {
    weekly: RSSHubFeedEndpoint;
}

interface TucaoqqFeed {
    post: RSSHubFeedEndpoint<{ project: string, key: string }>;
}

interface BiqugeFeed {
    novel_latestchapter: RSSHubFeedEndpoint<{ id: string }>;
}

interface ToutiaoFeed {
    today: RSSHubFeedEndpoint;
    user: RSSHubFeedEndpoint<{ id: string }>;
}

interface JinritoutiaoFeed {
    keyword: RSSHubFeedEndpoint<{ keyword: string }>;
}

interface GeektimeFeed {
    column: RSSHubFeedEndpoint<{ cid: string }>;
}

interface CCTVFeed extends RSSHubFeedEndpoint<{ category: string }> {

}

interface DisqusFeed {
    posts: RSSHubFeedEndpoint<{ forum: string }>;
}

interface TwitterFeed {
    user: RSSHubFeedEndpoint<{ id: string }>;
}

interface InstagramFeed {
    user: RSSHubFeedEndpoint<{ id: string }>;
}

interface YoutubeFeed {
    user: RSSHubFeedEndpoint<{ username: string }>;
    channel: RSSHubFeedEndpoint<{ id: string }>;
}

interface IQiyiFeed {
    dongman: RSSHubFeedEndpoint<{ id: string }>;
}

interface InfzmFeed extends RSSHubFeedEndpoint<{ id: string }> {

}

interface DribbbleFeed {
    popular: RSSHubFeedEndpoint<{ timeframe: 'week' | 'month' | 'year' | 'ever' }>;
    user: RSSHubFeedEndpoint<{ name: string }>;
    keyword: RSSHubFeedEndpoint<{ keyword: string }>;
}

interface DouyuFeed {
    room: RSSHubFeedEndpoint<{ id: string | number }>;
}

interface PandaFeed {
    room: RSSHubFeedEndpoint<{ id: string | number }>;
}

interface V2EXFeed {
    topics: RSSHubFeedEndpoint<{ type: 'hot' | 'latest' }>;
}

interface TelegramFeed {
    channel: RSSHubFeedEndpoint<{ username: string }>;
}

interface ReadhubFeed {
    category: RSSHubFeedEndpoint<{ category: 'topic' | 'news' | 'technews' | 'blockchain' }>;
}

interface KonachanFeed {
    post: RSSHubFeedEndpoint<{ tags?: string }>;
    post_popular_recent: RSSHubFeedEndpoint<{ period: '1d' | '1w' | '1m' | '1y' }>;
}

interface YandereFeed {
    post: RSSHubFeedEndpoint<{ tags?: string }>;
    post_popular_recent: RSSHubFeedEndpoint<{ period: '1d' | '1w' | '1m' | '1y' }>;
}

interface GitHubFeed {
    repos: RSSHubFeedEndpoint<{ user: string }>;
    trending: RSSHubFeedEndpoint<{ since: 'daily' | 'weekly' | 'monthly', language: string }>;
}

interface NYTimesFeed {
    morning_post: RSSHubFeedEndpoint;
}

interface UUKanshuFeed {
    chapter: RSSHubFeedEndpoint<{ id: string | number }>;
}

interface XimalayaFeed {
    album: RSSHubFeedEndpoint<{ classify: string, id: string | number }>;
}

interface EZTVFeed {
    torrents: RSSHubFeedEndpoint<{ imdb_id: string | number }>;
}

interface SMZDMFeed {
    keyword: RSSHubFeedEndpoint<{ keyword: string }>;
}

interface SHMTUFeed {
    events: RSSHubFeedEndpoint;
    notes: RSSHubFeedEndpoint;
    jwc: RSSHubFeedEndpoint<{ type: 1 | 2 }>;
}

interface BJNewsFeed extends RSSHubFeedEndpoint<{ category: string }> {

}

export interface RSSHubFeeds {
    bilibili: BilibiliFeed;
    bangumi: BangumiFeed;
    weibo: WeiboFeed;
    tieba: TiebaFeed;
    jike: JikeFeed;
    ncm: NCMFeed;
    juejin: JuejinFeed;
    jianshu: JianshuFeed;
    zhihu: ZhihuFeed;
    ziroom: ZiroomFeed;
    express: ExpressFeed;
    mzitu: MzituFeed;
    pixiv: PixivFeed;
    douban: DoubanFeed;
    jandan: JandanFeed;
    dapenti: DapentiFeed;
    dockone: DockoneFeed;
    tucaoqq: TucaoqqFeed;
    biquge: BiqugeFeed;
    toutiao: ToutiaoFeed;
    jinritoutiao: JinritoutiaoFeed;
    geektime: GeektimeFeed;
    cctv: CCTVFeed;
    disqus: DisqusFeed;
    twitter: TwitterFeed;
    instagram: InstagramFeed;
    youtube: YoutubeFeed;
    iqiyi: IQiyiFeed;
    infzm: InfzmFeed;
    dribbble: DribbbleFeed;
    douyu: DouyuFeed;
    panda: PandaFeed;
    v2ex: V2EXFeed;
    telegram: TelegramFeed;
    readhub: ReadhubFeed;
    konachan: KonachanFeed;
    yande_re: YandereFeed;
    github: GitHubFeed;
    nytimes: NYTimesFeed;
    uukanshu: UUKanshuFeed;
    ximalaya: XimalayaFeed;
    eztv: EZTVFeed;
    smzdm: SMZDMFeed;
    shmtu: SHMTUFeed;
    bjnews: BJNewsFeed;
}

declare const Feeds: RSSHubFeeds;
export default Feeds;
