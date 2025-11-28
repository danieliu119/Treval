import { ActivityType, ItineraryItem, ShoppingItem } from './types';

export const SHOPPING_LIST: ShoppingItem[] = [
  { name: "IRIS 布団クリーナー FCA-A3-W", price: 9858, currency: 'JPY' },
  { name: "BRAUN すみずみクリーンPro D1034133GN", price: 3530, currency: 'JPY' },
  { name: "BRAUN 電動歯ブラシ PRO1 カリビアン", price: 5980, currency: 'JPY' },
  { name: "PHILIPS 電動歯ブラシ ライトブルー", price: 5300, currency: 'JPY' },
  { name: "淨水起濾心 TK7415C1 / TK-AS30C1", price: 6000, currency: 'JPY' },
];

export const RAW_ITINERARY: ItineraryItem[] = [
  // 10/30
  {
    id: '1', date: '10/30', dayOfWeek: '四', startTime: '11:10', endTime: '14:35',
    location: '桃園機場 -> 岡山機場', description: '搭乘虎航 IT214 (訂位代號 N4UQYF)',
    type: ActivityType.Transport, cost: 15602, currency: 'NTD', notes: ''
  },
  {
    id: '2', date: '10/30', dayOfWeek: '四', startTime: '16:00', endTime: '18:30',
    location: '岡山空港', description: 'TOYOTA租車 (前往廣島)',
    type: ActivityType.Transport, cost: 4280, currency: 'JPY', notes: 'ETC'
  },
  {
    id: '3', date: '10/30', dayOfWeek: '四', startTime: '18:30', endTime: '20:00',
    location: '廣島燒村（お好み村）', description: '晚餐: 廣島燒',
    type: ActivityType.Food, cost: 3000, currency: 'JPY', notes: '搭公車, 吃 4F "あとむ" , 3F "たけのこ" , 2F "やまちゃん"'
  },
  {
    id: '4', date: '10/30', dayOfWeek: '四', startTime: '20:00', endTime: '09:00',
    location: '東橫INN 廣島站新幹線口2號店', description: '住宿 (預定編號 5164647)',
    type: ActivityType.Stay, cost: 12160, currency: 'JPY', notes: '備用停車場 "タイムズＪＲ広島駅北口立体" ￥1,600/日'
  },
  // 10/31
  {
    id: '5', date: '10/31', dayOfWeek: '五', startTime: '09:00', endTime: '09:40',
    location: '宮島口駐車場', description: '前往宮島口',
    type: ActivityType.Transport, cost: 1000, currency: 'JPY', notes: '【最大料金】1日1回(乗用車) ￥1,000'
  },
  {
    id: '6', date: '10/31', dayOfWeek: '五', startTime: '09:40', endTime: '10:30',
    location: '宮島渡輪', description: '搭船前往宮島',
    type: ActivityType.Transport, cost: 1000, currency: 'JPY', notes: '來回船票 500/人'
  },
  {
    id: '7', date: '10/31', dayOfWeek: '五', startTime: '10:30', endTime: '11:30',
    location: '海上鳥居', description: '乾潮觀賞',
    type: ActivityType.Sightseeing, cost: 0, currency: 'JPY'
  },
  {
    id: '8', date: '10/31', dayOfWeek: '五', startTime: '11:30', endTime: '12:30',
    location: '牡蠣屋', description: '午餐',
    type: ActivityType.Food, cost: 6000, currency: 'JPY'
  },
  {
    id: '9', date: '10/31', dayOfWeek: '五', startTime: '12:30', endTime: '14:00',
    location: '宮島景點', description: '五重塔, 豐國神社, 嚴島神社',
    type: ActivityType.Ticket, cost: 600, currency: 'JPY', notes: '300/人'
  },
  {
    id: '10', date: '10/31', dayOfWeek: '五', startTime: '14:00', endTime: '15:30',
    location: '商店街', description: '楓葉饅頭, 紅葉堂, 伊都岐咖啡',
    type: ActivityType.Food, cost: 2000, currency: 'JPY', notes: '藤い屋宮島本店(現烤)'
  },
  {
    id: '11', date: '10/31', dayOfWeek: '五', startTime: '15:30', endTime: '16:30',
    location: '海上鳥居', description: '漲潮觀賞',
    type: ActivityType.Sightseeing, cost: 0, currency: 'JPY'
  },
  {
    id: '12', date: '10/31', dayOfWeek: '五', startTime: '16:50', endTime: '17:30',
    location: '原爆圓頂館周邊停車場', description: '市營 大手町第1停車場',
    type: ActivityType.Transport, cost: 1600, currency: 'JPY', notes: '200日圓/30分'
  },
  {
    id: '13', date: '10/31', dayOfWeek: '五', startTime: '17:30', endTime: '18:30',
    location: '和平紀念公園', description: '原爆圓頂館, 和平紀念公園',
    type: ActivityType.Sightseeing, cost: 0, currency: 'JPY'
  },
  {
    id: '14', date: '10/31', dayOfWeek: '五', startTime: '18:30', endTime: '20:00',
    location: '廣島站西', description: '晚餐: 居酒屋 三代目えびすや',
    type: ActivityType.Food, cost: 5000, currency: 'JPY'
  },
  // 11/1
  {
    id: '15', date: '11/01', dayOfWeek: '六', startTime: '08:30', endTime: '11:30',
    location: '前往出雲', description: '開車移動',
    type: ActivityType.Transport, cost: 2880, currency: 'JPY', notes: 'ETC'
  },
  {
    id: '16', date: '11/01', dayOfWeek: '六', startTime: '11:30', endTime: '13:00',
    location: '荒木屋 / 田中屋', description: '午餐: 蕎麥麵',
    type: ActivityType.Food, cost: 5000, currency: 'JPY'
  },
  {
    id: '17', date: '11/01', dayOfWeek: '六', startTime: '13:10', endTime: '16:30',
    location: '出雲大社', description: '參拜',
    type: ActivityType.Sightseeing, cost: 2500, currency: 'JPY', notes: '吃 "出雲卷" "坂根屋 紅豆湯"'
  },
  {
    id: '18', date: '11/01', dayOfWeek: '六', startTime: '16:40', endTime: '17:40',
    location: '稻佐之濱', description: '夕陽',
    type: ActivityType.Sightseeing, cost: 0, currency: 'JPY'
  },
  {
    id: '19', date: '11/01', dayOfWeek: '六', startTime: '17:40', endTime: '09:00',
    location: '島根 出雲皇家飯店', description: '住宿 (預約號碼 0QLLKHPT)',
    type: ActivityType.Stay, cost: 19180, currency: 'JPY', notes: 'Izumo Royal Hotel'
  },
  {
    id: '20', date: '11/01', dayOfWeek: '六', startTime: '19:00', endTime: '20:30',
    location: '釜飯與串燒', description: '晚餐: とりでん出雲店',
    type: ActivityType.Food, cost: 5000, currency: 'JPY'
  },
  // 11/2
  {
    id: '21', date: '11/02', dayOfWeek: '日', startTime: '09:00', endTime: '09:50',
    location: '松江', description: '開始使用 Discover Another Japan 3日券',
    type: ActivityType.Ticket, cost: 10000, currency: 'JPY', notes: '5000元/人'
  },
  {
    id: '22', date: '11/02', dayOfWeek: '日', startTime: '09:50', endTime: '11:00',
    location: '堀川遊覽船', description: '大手前堀川遊覽船乗場',
    type: ActivityType.Ticket, cost: 3200, currency: 'JPY', notes: '1600/人', links: ['https://www.matsue-horikawameguri.jp/course']
  },
  {
    id: '23', date: '11/02', dayOfWeek: '日', startTime: '11:00', endTime: '12:00',
    location: '松江城', description: '參觀松江城',
    type: ActivityType.Ticket, cost: 1600, currency: 'JPY', notes: '800/人', links: ['https://www.matsue-castle.jp']
  },
  {
    id: '24', date: '11/02', dayOfWeek: '日', startTime: '13:30', endTime: '16:40',
    location: '足立美術館', description: '庭園與美術館',
    type: ActivityType.Ticket, cost: 5000, currency: 'JPY', notes: '2500/人', links: ['https://www.adachi-museum.or.jp/']
  },
  {
    id: '25', date: '11/02', dayOfWeek: '日', startTime: '14:10', endTime: '15:00',
    location: '喫茶室 大觀', description: '紅豆湯 咖啡',
    type: ActivityType.Food, cost: 2000, currency: 'JPY'
  },
  {
    id: '26', date: '11/02', dayOfWeek: '日', startTime: '17:30', endTime: '09:00',
    location: '玉造温泉 白石家', description: '住宿 (Jalan 訂單編號 0YLJ8Q4W)',
    type: ActivityType.Stay, cost: 0, currency: 'JPY', notes: '晚餐 / 散策', links: ['https://siraisiya.com/']
  },
  // 11/3
  {
    id: '27', date: '11/03', dayOfWeek: '一', startTime: '09:00', endTime: '09:20',
    location: '前往北榮町', description: '開車移動',
    type: ActivityType.Transport, cost: 680, currency: 'JPY', notes: 'ETC'
  },
  {
    id: '28', date: '11/03', dayOfWeek: '一', startTime: '09:20', endTime: '11:30',
    location: '柯南小鎮', description: '青山剛昌故鄉館 / 米花商店街',
    type: ActivityType.Ticket, cost: 1400, currency: 'JPY', notes: '700/人', links: ['https://www.gamf.jp/']
  },
  {
    id: '29', date: '11/03', dayOfWeek: '一', startTime: '11:30', endTime: '12:30',
    location: '道之站 大榮', description: '午餐: ど真ん中食堂 (三種肉拉麵)',
    type: ActivityType.Food, cost: 5000, currency: 'JPY'
  },
  {
    id: '30', date: '11/03', dayOfWeek: '一', startTime: '13:10', endTime: '14:30',
    location: '白兔神社', description: '參拜',
    type: ActivityType.Sightseeing, cost: 0, currency: 'JPY'
  },
  {
    id: '31', date: '11/03', dayOfWeek: '一', startTime: '15:30', endTime: '16:30',
    location: '浦富海岸', description: '搭船遊覽',
    type: ActivityType.Ticket, cost: 3600, currency: 'JPY', notes: '大人 1,800円', links: ['https://yourun1000.com/']
  },
  {
    id: '32', date: '11/03', dayOfWeek: '一', startTime: '18:00', endTime: '20:00',
    location: '鳥取市', description: '晚餐: 鳥取和牛',
    type: ActivityType.Food, cost: 12000, currency: 'JPY', links: ['https://yakiniku-gyuoh.com/tottori/']
  },
  {
    id: '33', date: '11/03', dayOfWeek: '一', startTime: '20:00', endTime: '08:00',
    location: '東橫INN 鳥取站北口', description: '住宿',
    type: ActivityType.Stay, cost: 0, currency: 'JPY'
  },
  // 11/4
  {
    id: '34', date: '11/04', dayOfWeek: '二', startTime: '08:15', endTime: '10:30',
    location: '鳥取沙丘', description: '騎駱駝散步 (1600円/人)',
    type: ActivityType.Ticket, cost: 3200, currency: 'JPY', notes: 'らくだに乗って散歩'
  },
  {
    id: '35', date: '11/04', dayOfWeek: '二', startTime: '10:30', endTime: '11:50',
    location: '砂之美術館', description: '參觀',
    type: ActivityType.Ticket, cost: 1600, currency: 'JPY', notes: '800/人', links: ['https://www.sand-museum.jp/']
  },
  {
    id: '36', date: '11/04', dayOfWeek: '二', startTime: '11:50', endTime: '12:20',
    location: 'Takahama Café', description: 'Totto PURIN 布丁',
    type: ActivityType.Food, cost: 2000, currency: 'JPY'
  },
  {
    id: '37', date: '11/04', dayOfWeek: '二', startTime: '12:40', endTime: '13:40',
    location: '北海道迴轉壽司', description: '午餐: 駅南店',
    type: ActivityType.Food, cost: 10000, currency: 'JPY', links: ['https://www.kaiyoutei.jp/tottori/']
  },
  {
    id: '38', date: '11/04', dayOfWeek: '二', startTime: '16:00', endTime: '18:30',
    location: '前往岡山', description: '諏訪神社 -> 岡山',
    type: ActivityType.Transport, cost: 2880, currency: 'JPY', notes: 'ETC'
  },
  {
    id: '39', date: '11/04', dayOfWeek: '二', startTime: '18:30', endTime: '08:20',
    location: '東橫INN 岡山站東口', description: '住宿',
    type: ActivityType.Stay, cost: 0, currency: 'JPY'
  },
  // 11/5
  {
    id: '40', date: '11/05', dayOfWeek: '三', startTime: '08:40', endTime: '10:45',
    location: '吉備津', description: '吉備津神社 / 吉備津彥神社',
    type: ActivityType.Sightseeing, cost: 0, currency: 'JPY'
  },
  {
    id: '41', date: '11/05', dayOfWeek: '三', startTime: '10:55', endTime: '11:10',
    location: '加油站', description: 'apollostation セルフ津倉SS',
    type: ActivityType.Transport, cost: 8000, currency: 'JPY'
  },
  {
    id: '42', date: '11/05', dayOfWeek: '三', startTime: '11:10', endTime: '12:00',
    location: '岡山站', description: '還車 & 午餐 (尾道拉麵)',
    type: ActivityType.Food, cost: 2000, currency: 'JPY'
  },
  {
    id: '43', date: '11/05', dayOfWeek: '三', startTime: '12:10', endTime: '12:40',
    location: '路面電車', description: '岡山站前 -> 縣廳通',
    type: ActivityType.Transport, cost: 240, currency: 'JPY', notes: '120円/人'
  },
  {
    id: '44', date: '11/05', dayOfWeek: '三', startTime: '12:40', endTime: '14:00',
    location: '岡山城', description: '烏城公園 & Mozart 甜點',
    type: ActivityType.Food, cost: 1500, currency: 'JPY'
  },
  {
    id: '45', date: '11/05', dayOfWeek: '三', startTime: '14:00', endTime: '17:00',
    location: '岡山後樂園', description: '參觀',
    type: ActivityType.Ticket, cost: 1000, currency: 'JPY', notes: '500円/人'
  },
  {
    id: '46', date: '11/05', dayOfWeek: '三', startTime: '17:30', endTime: '20:00',
    location: '晚餐', description: '鳥好 駅前本店 / 鳥貴族',
    type: ActivityType.Food, cost: 10000, currency: 'JPY'
  },
  // 11/6
  {
    id: '47', date: '11/06', dayOfWeek: '四', startTime: '09:00', endTime: '16:00',
    location: '購物', description: '唐吉軻德 / AEON / BIGCAMERA',
    type: ActivityType.Shopping, cost: 31668, currency: 'JPY', notes: '購物清單總計'
  },
  {
    id: '48', date: '11/06', dayOfWeek: '四', startTime: '16:05', endTime: '16:35',
    location: '機場巴士', description: '岡山西口站－21號站牌 -> 岡山機場',
    type: ActivityType.Transport, cost: 2000, currency: 'JPY', notes: '1000円/人'
  },
  {
    id: '49', date: '11/06', dayOfWeek: '四', startTime: '17:55', endTime: '20:00',
    location: '岡山機場 -> 桃園機場', description: '搭乘虎航 IT715',
    type: ActivityType.Transport, cost: 0, currency: 'NTD', notes: ''
  }
];