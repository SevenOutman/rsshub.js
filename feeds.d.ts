import {RSSHubRequestSetup} from "./index";

interface RSSHubFeedEndpoint<T = void> {
    (params?: T): RSSHubRequestSetup;
}

interface Feed {
    [key: string]: RSSHubFeedEndpoint<any>;
}
interface RsshubFeed {
    rss: RSSHubFeedEndpoint;
}

interface BilibiliFeed {
    user_video: RSSHubFeedEndpoint<{ uid: string | number }>;
    user_article: RSSHubFeedEndpoint<{ uid: string | number }>;
    user_fav: RSSHubFeedEndpoint<{ uid: string | number }>;
    user_coin: RSSHubFeedEndpoint<{ uid: string | number }>;
    user_dynamic: RSSHubFeedEndpoint<{ uid: string | number }>;
    user_followers: RSSHubFeedEndpoint<{ uid: string | number }>;
    user_followings: RSSHubFeedEndpoint<{ uid: string | number }>;
    partion: RSSHubFeedEndpoint<{ tid: string | number }>;
    partion_ranking: RSSHubFeedEndpoint<{ tid: string | number, days?: string }>;
    bangumi: RSSHubFeedEndpoint<{ seasonid: string | number }>;
    video_reply: RSSHubFeedEndpoint<{ aid: string | number }>;
    link_news: RSSHubFeedEndpoint<{ product: string }>;
    live_room: RSSHubFeedEndpoint<{ roomID: string }>;
    live_search: RSSHubFeedEndpoint<{ key: string, order: string }>;
    live_area: RSSHubFeedEndpoint<{ areaID: string, order: string }>;
    fav: RSSHubFeedEndpoint<{ uid: string | number, fid: string | number }>;
    blackboard: RSSHubFeedEndpoint;
    mall_new: RSSHubFeedEndpoint;
    mall_ip: RSSHubFeedEndpoint<{ id: string | number }>;
    ranking: RSSHubFeedEndpoint<{ rid?: string | number, day?: string }>;
    user_channel: RSSHubFeedEndpoint<{ uid: string | number, cid: string | number }>;
    topic: RSSHubFeedEndpoint<{ topic: string }>;
}

interface BangumiFeed {
    calendar_today: RSSHubFeedEndpoint;
    subject: RSSHubFeedEndpoint<{ id: string | number, type: string }>;
    person: RSSHubFeedEndpoint<{ id: string | number }>;
    topic: RSSHubFeedEndpoint<{ id: string | number }>;
}

interface WeiboFeed {
    user: RSSHubFeedEndpoint<{ uid: string | number }>;
    user2: RSSHubFeedEndpoint<{ uid: string | number }>;
    keyword: RSSHubFeedEndpoint<{ keyword: string }>;
}

interface TiebaFeed {
    forum: RSSHubFeedEndpoint<{ kw: string }>;
    forum_good: RSSHubFeedEndpoint<{ kw: string, cid?: string | number }>;
    post: RSSHubFeedEndpoint<{ id: string | number }>;
    post_lz: RSSHubFeedEndpoint<{ id: string | number }>;
}

interface NcmFeed {
    playlist: RSSHubFeedEndpoint<{ id: string | number }>;
    user_playlist: RSSHubFeedEndpoint<{ uid: string | number }>;
    artist: RSSHubFeedEndpoint<{ id: string | number }>;
    djradio: RSSHubFeedEndpoint<{ id: string | number }>;
}

interface JuejinFeed {
    category: RSSHubFeedEndpoint<{ category: string }>;
    tag: RSSHubFeedEndpoint<{ tag: string }>;
    trending: RSSHubFeedEndpoint<{ category: string, type: string }>;
}

interface ZiroomFeed {
    room: RSSHubFeedEndpoint<{ city: string, iswhole: string, room: string, keyword: string }>;
}

interface ExpressFeed extends RSSHubFeedEndpoint<{ company: string, number: string | number }> {

}

interface JianshuFeed {
    home: RSSHubFeedEndpoint;
    trending: RSSHubFeedEndpoint<{ timeframe: string }>;
    collection: RSSHubFeedEndpoint<{ id: string | number }>;
    user: RSSHubFeedEndpoint<{ id: string | number }>;
}

interface ZhihuFeed {
    collection: RSSHubFeedEndpoint<{ id: string | number }>;
    people_activities: RSSHubFeedEndpoint<{ id: string | number }>;
    people_answers: RSSHubFeedEndpoint<{ id: string | number }>;
    zhuanlan: RSSHubFeedEndpoint<{ id: string | number }>;
    daily: RSSHubFeedEndpoint;
    hotlist: RSSHubFeedEndpoint;
}

interface MzituFeed extends RSSHubFeedEndpoint {
    tags: RSSHubFeedEndpoint;
    category: RSSHubFeedEndpoint<{ category: string }>;
    post: RSSHubFeedEndpoint<{ id: string | number }>;
    tag: RSSHubFeedEndpoint<{ tag: string }>;
}

interface DoubanFeed {
    movie_playing: RSSHubFeedEndpoint<{ score: string, city: string }>;
    movie_later: RSSHubFeedEndpoint;
    movie_ustop: RSSHubFeedEndpoint;
    group: RSSHubFeedEndpoint<{ groupid: string | number }>;
    explore: RSSHubFeedEndpoint;
    music_latest: RSSHubFeedEndpoint;
    book_latest: RSSHubFeedEndpoint;
}

interface JandanFeed extends RSSHubFeedEndpoint<{ sub_model: string }> {

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

interface ToutiaoFeed {
    today: RSSHubFeedEndpoint;
    user: RSSHubFeedEndpoint<{ id: string | number }>;
}

interface ZcfyFeed {
    index: RSSHubFeedEndpoint;
    hot: RSSHubFeedEndpoint;
}

interface JinritoutiaoFeed {
    keyword: RSSHubFeedEndpoint<{ keyword: string }>;
}

interface InstagramFeed {
    user: RSSHubFeedEndpoint<{ id: string | number }>;
}

interface JikeFeed {
    topic: RSSHubFeedEndpoint<{ id: string | number }>;
    topic_text: RSSHubFeedEndpoint<{ id: string | number }>;
    topic_square: RSSHubFeedEndpoint<{ id: string | number }>;
    user: RSSHubFeedEndpoint<{ id: string | number }>;
    daily: RSSHubFeedEndpoint;
}

interface GeektimeFeed {
    column: RSSHubFeedEndpoint<{ cid: string | number }>;
}

interface IqiyiFeed {
    dongman: RSSHubFeedEndpoint<{ id: string | number }>;
}

interface InfzmFeed extends RSSHubFeedEndpoint<{ id: string | number }> {

}

interface DribbbleFeed {
    popular: RSSHubFeedEndpoint<{ timeframe?: string }>;
    user: RSSHubFeedEndpoint<{ name: string }>;
    keyword: RSSHubFeedEndpoint<{ keyword: string }>;
}

interface DouyuFeed {
    room: RSSHubFeedEndpoint<{ id: string | number }>;
}

interface PandaFeed {
    room: RSSHubFeedEndpoint<{ id: string | number }>;
}

interface V2exFeed {
    topics: RSSHubFeedEndpoint<{ type: string }>;
}

interface ReadhubFeed {
    category: RSSHubFeedEndpoint<{ category: string }>;
}

interface GithubFeed {
    repos: RSSHubFeedEndpoint<{ user: string }>;
    trending: RSSHubFeedEndpoint<{ since: string, language?: string }>;
    issue: RSSHubFeedEndpoint<{ user: string, repo: string }>;
    user_followers: RSSHubFeedEndpoint<{ user: string }>;
    stars: RSSHubFeedEndpoint<{ user: string, repo: string }>;
}

interface FdroidFeed {
    apprelease: RSSHubFeedEndpoint<{ app: string }>;
}

interface KonachanFeed {
    post_popular_recent: RSSHubFeedEndpoint<{ period: string }>;
}

interface KonachancomFeed {
    post_popular_recent: RSSHubFeedEndpoint<{ period: string }>;
}

interface KonachannetFeed {
    post_popular_recent: RSSHubFeedEndpoint<{ period: string }>;
}

interface YandereFeed {
    post_popular_recent: RSSHubFeedEndpoint<{ period: string }>;
}

interface NytimesFeed {
    morning_post: RSSHubFeedEndpoint;
}

interface I3dmFeed extends RSSHubFeedEndpoint<{ name: string, type: string }> {
    news: RSSHubFeedEndpoint;
}

interface XimalayaFeed {
    album: RSSHubFeedEndpoint<{ id: string | number }>;
}

interface EztvFeed {
    torrents: RSSHubFeedEndpoint<{ imdb_id: string | number }>;
}

interface SmzdmFeed {
    keyword: RSSHubFeedEndpoint<{ keyword: string }>;
    ranking: RSSHubFeedEndpoint<{ rank_type: string, rank_id: string | number, hour: string }>;
}

interface BjnewsFeed extends RSSHubFeedEndpoint<{ cat: string }> {

}

interface TingshuitzFeed {
    hangzhou: RSSHubFeedEndpoint;
    xiaoshan: RSSHubFeedEndpoint;
    dalian: RSSHubFeedEndpoint;
}

interface MiuiFeed extends RSSHubFeedEndpoint<{ device: string, type?: string }> {

}

interface MihoyoFeed {
    bh3: RSSHubFeedEndpoint<{ type: string }>;
    bh2: RSSHubFeedEndpoint<{ type: string }>;
}

interface CctvFeed extends RSSHubFeedEndpoint<{ category: string }> {

}

interface CaixinFeed extends RSSHubFeedEndpoint<{ column: string, category: string }> {

}

interface T66yFeed extends RSSHubFeedEndpoint<{ id: string | number }> {

}

interface GcoresFeed {
    category: RSSHubFeedEndpoint<{ category: string }>;
}

interface NatgeoFeed extends RSSHubFeedEndpoint<{ cat: string, type?: string }> {

}

interface OneFeed extends RSSHubFeedEndpoint {

}

interface FirefoxFeed {
    release: RSSHubFeedEndpoint<{ platform: string }>;
}

interface ThunderbirdFeed {
    release: RSSHubFeedEndpoint;
}

interface TuicoolFeed {
    mags: RSSHubFeedEndpoint<{ type: string }>;
}

interface HexoFeed {
    next: RSSHubFeedEndpoint<{ url: string }>;
}

interface MiFeed {
    crowdfunding: RSSHubFeedEndpoint;
}

interface KeepFeed {
    user: RSSHubFeedEndpoint<{ id: string | number }>;
}

interface QidianFeed {
    chapter: RSSHubFeedEndpoint<{ id: string | number }>;
    forum: RSSHubFeedEndpoint<{ id: string | number }>;
}

interface NamocFeed {
    announcement: RSSHubFeedEndpoint;
    news: RSSHubFeedEndpoint;
    media: RSSHubFeedEndpoint;
    exhibition: RSSHubFeedEndpoint;
    specials: RSSHubFeedEndpoint;
}

interface DongqiudiFeed {
    daily: RSSHubFeedEndpoint;
    result: RSSHubFeedEndpoint<{ team: string }>;
    team_news: RSSHubFeedEndpoint<{ team: string }>;
    player_news: RSSHubFeedEndpoint<{ id: string | number }>;
}

interface WikipediaFeed {
    mainland: RSSHubFeedEndpoint;
}

interface XueqiuFeed {
    user: RSSHubFeedEndpoint<{ id: string | number, type?: string }>;
    favorite: RSSHubFeedEndpoint<{ id: string | number }>;
    user_stock: RSSHubFeedEndpoint<{ id: string | number }>;
    fund: RSSHubFeedEndpoint<{ id: string | number }>;
}

interface GreasyforkFeed extends RSSHubFeedEndpoint<{ language: string, domain?: string }> {

}

interface LinkedkeeperFeed extends RSSHubFeedEndpoint<{ type: string, id?: string | number }> {

}

interface OschinaFeed {
    news: RSSHubFeedEndpoint;
}

interface QcloudFeed {
    mlvb_changelog: RSSHubFeedEndpoint;
}

interface BuglyFeed {
    changelog: RSSHubFeedEndpoint<{ platform: string }>;
}

interface AtfdFeed extends RSSHubFeedEndpoint<{ locations: string, nearby?: string }> {

}

interface FirFeed {
    update: RSSHubFeedEndpoint<{ id: string | number }>;
}

interface NvidiaFeed {
    webdriverupdate: RSSHubFeedEndpoint;
}

interface GoogleFeed {
    scholar: RSSHubFeedEndpoint<{ query: string }>;
}

interface PigtailsFeed extends RSSHubFeedEndpoint {

}

interface ImuseumFeed extends RSSHubFeedEndpoint<{ city: string, type: string }> {

}

interface AppstoreFeed {
    update: RSSHubFeedEndpoint<{ country: string, id: string | number }>;
    price: RSSHubFeedEndpoint<{ country: string, type: string, id: string | number }>;
    iap: RSSHubFeedEndpoint<{ country: string, id: string | number }>;
    xianmian: RSSHubFeedEndpoint;
}

interface HopperFeed extends RSSHubFeedEndpoint<{ lowestOnly: string, from: string, to?: string }> {

}

interface WechatFeed {
    wasi: RSSHubFeedEndpoint<{ id: string | number }>;
}

interface MafengwoFeed {
    note: RSSHubFeedEndpoint<{ type: string }>;
}

interface EarthquakeFeed extends RSSHubFeedEndpoint {

}

interface BiqugeFeed {
    novel_latestchapter: RSSHubFeedEndpoint<{ id: string | number }>;
}

interface UukanshuFeed {
    chapter: RSSHubFeedEndpoint<{ uid: string | number }>;
}

interface NovelFeed {
    biquge: RSSHubFeedEndpoint<{ id: string | number }>;
    uukanshu: RSSHubFeedEndpoint<{ uid: string | number }>;
    wenxuemi: RSSHubFeedEndpoint<{ id1: string | number, id2: string | number }>;
    booksky: RSSHubFeedEndpoint<{ id: string | number }>;
}

interface WeatheralarmFeed extends RSSHubFeedEndpoint {

}

interface GitlabFeed {
    explore: RSSHubFeedEndpoint<{ type: string }>;
}

interface MygalgameFeed extends RSSHubFeedEndpoint {

}

interface DpuFeed {
    jiaowu_news: RSSHubFeedEndpoint<{ type?: string }>;
    wlfw_news: RSSHubFeedEndpoint<{ type?: string }>;
}

interface SeuFeed {
    radio_academic: RSSHubFeedEndpoint;
    yzb: RSSHubFeedEndpoint<{ type: string }>;
}

interface HitFeed {
    jwc: RSSHubFeedEndpoint;
}

interface ShanghaitechFeed {
    sist_activity: RSSHubFeedEndpoint;
}

interface SjtuFeed {
    seiee_academic: RSSHubFeedEndpoint;
}

interface JuFeed {
    jwc: RSSHubFeedEndpoint<{ type?: string }>;
}

interface PkuFeed {
    eecs: RSSHubFeedEndpoint<{ type?: string }>;
}

interface ShmtuFeed {
    events: RSSHubFeedEndpoint;
    notes: RSSHubFeedEndpoint;
    jwc: RSSHubFeedEndpoint<{ type: string }>;
}

interface SwustFeed {
    jwc: RSSHubFeedEndpoint<{ type: string }>;
    cs: RSSHubFeedEndpoint<{ type: string }>;
}

interface ScnuFeed {
    jw: RSSHubFeedEndpoint;
    library: RSSHubFeedEndpoint;
    cs_match: RSSHubFeedEndpoint;
}

interface CasFeed {
    sim_academic: RSSHubFeedEndpoint;
}

interface NjuptFeed {
    jwc: RSSHubFeedEndpoint<{ type?: string }>;
}

interface NchuFeed {
    jwc: RSSHubFeedEndpoint<{ type?: string }>;
}

interface HeuFeed {
    ugs_news: RSSHubFeedEndpoint<{ author?: string, category?: string }>;
}

interface CquFeed {
    jwc_announcement: RSSHubFeedEndpoint;
}

interface CuitFeed {
    cxxww: RSSHubFeedEndpoint<{ type?: string }>;
}

interface CqustFeed {
    jw: RSSHubFeedEndpoint<{ type?: string }>;
    lib: RSSHubFeedEndpoint<{ type?: string }>;
}

interface CczuFeed {
    jwc: RSSHubFeedEndpoint<{ category?: string }>;
    news: RSSHubFeedEndpoint<{ category?: string }>;
}

interface SctuFeed {
    xgxy: RSSHubFeedEndpoint;
    jwc: RSSHubFeedEndpoint<{ type?: string }>;
}

interface UestcFeed {
    jwc: RSSHubFeedEndpoint<{ type?: string }>;
    news: RSSHubFeedEndpoint<{ type?: string }>;
}

interface KmustFeed {
    jwc: RSSHubFeedEndpoint<{ type?: string }>;
    job_careers: RSSHubFeedEndpoint<{ type?: string }>;
    job_jobfairs: RSSHubFeedEndpoint;
}

interface HustFeed {
    auto_notice: RSSHubFeedEndpoint<{ type?: string }>;
    auto_news_: RSSHubFeedEndpoint;
}

interface IfanrFeed {
    appso: RSSHubFeedEndpoint;
}

interface GuokrFeed {
    scientific: RSSHubFeedEndpoint;
}

interface ZaobaoFeed {
    realtime: RSSHubFeedEndpoint<{ type?: string }>;
    znews: RSSHubFeedEndpoint<{ type?: string }>;
}

interface AppleFeed {
    exchange_repair: RSSHubFeedEndpoint<{ country?: string }>;
}

interface CurseforgeFeed {
    files: RSSHubFeedEndpoint<{ project: string }>;
}

interface DouyinFeed {
    user: RSSHubFeedEndpoint<{ id: string | number }>;
}

interface SspaiFeed {
    series: RSSHubFeedEndpoint;
    shortcuts: RSSHubFeedEndpoint;
}

interface XclientFeed {
    app: RSSHubFeedEndpoint<{ name: string }>;
}

interface EmbassyFeed extends RSSHubFeedEndpoint<{ country: string, city?: string }> {

}

interface ThepaperFeed {
    featured: RSSHubFeedEndpoint;
}

interface DysfzFeed {
    index: RSSHubFeedEndpoint;
}

interface KiraraFeed {
    news: RSSHubFeedEndpoint;
}

interface DyttFeed {
    index: RSSHubFeedEndpoint;
}

interface QutoutiaoFeed {
    category: RSSHubFeedEndpoint<{ cid: string | number }>;
}

interface NhkFeed {
    news_web_easy: RSSHubFeedEndpoint;
}

interface BbcFeed extends RSSHubFeedEndpoint<{ channel?: string }> {

}

interface FtFeed {
    chinese: RSSHubFeedEndpoint<{ channel?: string }>;
}

export interface RSSHubFeeds {
    rsshub: RsshubFeed;
    bilibili: BilibiliFeed;
    bangumi: BangumiFeed;
    weibo: WeiboFeed;
    tieba: TiebaFeed;
    ncm: NcmFeed;
    juejin: JuejinFeed;
    ziroom: ZiroomFeed;
    express: ExpressFeed;
    jianshu: JianshuFeed;
    zhihu: ZhihuFeed;
    mzitu: MzituFeed;
    douban: DoubanFeed;
    jandan: JandanFeed;
    dapenti: DapentiFeed;
    dockone: DockoneFeed;
    tucaoqq: TucaoqqFeed;
    toutiao: ToutiaoFeed;
    zcfy: ZcfyFeed;
    jinritoutiao: JinritoutiaoFeed;
    instagram: InstagramFeed;
    jike: JikeFeed;
    geektime: GeektimeFeed;
    iqiyi: IqiyiFeed;
    infzm: InfzmFeed;
    dribbble: DribbbleFeed;
    douyu: DouyuFeed;
    panda: PandaFeed;
    v2ex: V2exFeed;
    readhub: ReadhubFeed;
    github: GithubFeed;
    fdroid: FdroidFeed;
    konachan: KonachanFeed;
    konachancom: KonachancomFeed;
    konachannet: KonachannetFeed;
    yandere: YandereFeed;
    nytimes: NytimesFeed;
    i3dm: I3dmFeed;
    ximalaya: XimalayaFeed;
    eztv: EztvFeed;
    smzdm: SmzdmFeed;
    bjnews: BjnewsFeed;
    tingshuitz: TingshuitzFeed;
    miui: MiuiFeed;
    mihoyo: MihoyoFeed;
    cctv: CctvFeed;
    caixin: CaixinFeed;
    t66y: T66yFeed;
    gcores: GcoresFeed;
    natgeo: NatgeoFeed;
    one: OneFeed;
    firefox: FirefoxFeed;
    thunderbird: ThunderbirdFeed;
    tuicool: TuicoolFeed;
    hexo: HexoFeed;
    mi: MiFeed;
    keep: KeepFeed;
    qidian: QidianFeed;
    namoc: NamocFeed;
    dongqiudi: DongqiudiFeed;
    wikipedia: WikipediaFeed;
    xueqiu: XueqiuFeed;
    greasyfork: GreasyforkFeed;
    linkedkeeper: LinkedkeeperFeed;
    oschina: OschinaFeed;
    qcloud: QcloudFeed;
    bugly: BuglyFeed;
    atfd: AtfdFeed;
    fir: FirFeed;
    nvidia: NvidiaFeed;
    google: GoogleFeed;
    pigtails: PigtailsFeed;
    imuseum: ImuseumFeed;
    appstore: AppstoreFeed;
    hopper: HopperFeed;
    wechat: WechatFeed;
    mafengwo: MafengwoFeed;
    earthquake: EarthquakeFeed;
    biquge: BiqugeFeed;
    uukanshu: UukanshuFeed;
    novel: NovelFeed;
    weatheralarm: WeatheralarmFeed;
    gitlab: GitlabFeed;
    mygalgame: MygalgameFeed;
    dpu: DpuFeed;
    seu: SeuFeed;
    hit: HitFeed;
    shanghaitech: ShanghaitechFeed;
    sjtu: SjtuFeed;
    ju: JuFeed;
    pku: PkuFeed;
    shmtu: ShmtuFeed;
    swust: SwustFeed;
    scnu: ScnuFeed;
    cas: CasFeed;
    njupt: NjuptFeed;
    nchu: NchuFeed;
    heu: HeuFeed;
    cqu: CquFeed;
    cuit: CuitFeed;
    cqust: CqustFeed;
    cczu: CczuFeed;
    sctu: SctuFeed;
    uestc: UestcFeed;
    kmust: KmustFeed;
    hust: HustFeed;
    ifanr: IfanrFeed;
    guokr: GuokrFeed;
    zaobao: ZaobaoFeed;
    apple: AppleFeed;
    curseforge: CurseforgeFeed;
    douyin: DouyinFeed;
    sspai: SspaiFeed;
    xclient: XclientFeed;
    embassy: EmbassyFeed;
    thepaper: ThepaperFeed;
    dysfz: DysfzFeed;
    kirara: KiraraFeed;
    dytt: DyttFeed;
    qutoutiao: QutoutiaoFeed;
    nhk: NhkFeed;
    bbc: BbcFeed;
    ft: FtFeed;
}

declare const Feeds: RSSHubFeeds;
export default Feeds;
