import { HttpClient } from '@angular/common/http';
import {Component, OnDestroy, OnInit} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import {LoadingService} from "../service/loading.service";
import {NavigateService} from "../service/navigate.service";

export interface Notifications {
  title: string;
  url: string;
  published_at: string;
}

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, OnDestroy {
  notifications!: Notifications[];
  url!: string;

  debobiSource = {
    s: ["ボテー","デープ","デカウ","ニイセ","エンゲ","ヘア","プーラ","ラロ","シゲネ","カス","ピカソ","ムォビ","ラウ","スププ","ユゥキ","ウラン","シアー","ブエミ","マレス","タイヴ","メッダ","カヤラ","リルケ","ムロ","ポジー","カルナ","ゾヒヌ","ゴトジ","テリン","ファル","ベア","カンテ","ギボォ","タメス","ボネル","テート","メーダ","ホジョ","ポポフ","ジョン","バヨセ","ウデー","カバナ","ギダン","ギーズ","ロヌズ","キシテ","ベリー","オズミ","パッジ","スス","アルエ","ルーゲ","クルプ","バイエ","カフカ","レタヒ","ホッロ","パピス","モガー","クニピ","メソナ","プジェ","メイツ","パダウ","ビペラ","ハイ","ポレ","スゾタ","ミセォ","セガン","バカ","オルタ","ドルト","ゼネリ","クーサ","ゾマー","ナセ","パレス","ワセピ","パラダ","ロクサ","ホルダ","ペイジ","ハポン","レサプ","レジス","サゲレ","グトォ","ミサダ","ベプガ","サニエ","ウゴ","イーエ","ルパン","ザベヒ","スメド","ローザ","ゲバラ","マッシ","クオズ","プゲル","ダン","フート","リンコ","ポコマ","プニビ","ガマイ","ゲスト","デオ","ザゴ","ナオキ","ナサナ","ワコ","ブリス","ニーヒ","ワーク","ルシ","サツス","ボマ","ノリス","テラン","ヴラヤ","シゥイ","バヤカ","ズデマ","ケトガ","ルヌー","ロル","ソボノ","ライン","エンデ","ギメ","クロケ","トズツ","ノア","キルハ","サッリ","ズゼコ","レルミ","ポポフ","プツハ","グザー","オリエ","フス","ロルト","ガール","クリム","ヨーク","ブライ","ホンカ","ニンタ","セメレ","ユルハ","ハユハ","サガン","ロラム","バジョ","ガジョ","ルベ","ホドー","ゴロン","アダメ","リット","ハンス","ボモグ","ルノー","ジルテ","サジト","ミフペ","ロッキ","ルッピ","レンホ","イング","ジドロ","コルピ","ブロイ","マッサ","ホエ","ガイエ","モレル","マクヤ","プコト","ノリマ","エーコ","ブッチ","スパビ","ヌゥヤ","タイ","プブ","ヘホム","メブム","レビ","マネ","ダマー","バオ","メルロ","ドガ","フボギ","ロイボ","セアー","アウー","モル","マグナ","ククフ","ネペン","ロナ","ベント","パフ","モゥ","ナバレ","ザェワ","コワレ","ボウマ","ベツ","マチス","ノヤダ","レドコ","グイサ","スイペ","トネフ","モルコ","ルー","ジーダ","ボウ","ルノー","ケワー","ノボア","ラセィ","ピアン","ペー","カタワ","ツジ","カゲ","ベタ","モネ","ゲッツ","シミ","ヴハー","ツカ","ブッキ","クーヴ","モット","コアザ","メガ","バー","ノァ","エヘビ","ビソト","コマン","バロー","デト","オヒサ","ハレド","ニバ","セハト","パベル","バルボ","チテズ","ツヌガ","ボヴ","ヤラ","アルコ","ヨミロ","ジヘ","モア","テラン","ジャリ","ラーン","コシェ","ムヒカ","ウレタ","ラムペ","ゼギー","ロロー","ベソ","ペバー","アー","ヘッグ","メペ","ハトル","ノル","パジマ","ペンノ","オメゲ","カペ","ヤカモ","クザク","イマス","シム","ケール","ウオペ","メッロ","ホェジ","モッロ","デク","オフレ","ゾーラ","ルミヤ","テジゥ","アルホ","ユエク","ニデイ","ベルテ","レケホ","ノエ","ダナー","ブノワ","ゴユ","アミ","ヘルコ","ルッチ","アプト","サッソ","セピア","ハイラ","ヘゴ","ケガ","ベルク","ガフ","ライヒ","バルベ","ルノー","リデル","チネソ","コンブ","ヌラサ","スンソ","チキホ","ヘチヌ","アルホ","ゲード","ヒース","ヨメサ","ナギア","テート","リイル","ボール","デウ","カザン","バズホ","ヨラ","ゼヤ","ゼソエ","ゲイル","ホブマ","イオデ","マレ","ジーダ","ユサー","ラモス","ヌロア","ポヌ","ムー","サブレ","ゾクフ","ネレム","パネル","カサノ","ブッチ","タトヤ","フロケ","ホチド","ガッロ","アミヘ","ゾチー","サニエ","エモン","ムレー","パーム","ゼッダ","ポーラ","ルオゥ","ムーイ","ゲニエ","ノナ","デホネ","ゴブレ","ペボ","ポデド","ザーパ","カミロ","ラポラ","ノヴィ","ブロ","ドルー","ソィ","ヤホゴ","ムーリ","ナバス","プーマ","リッロ","クブ","ブムト","ペール","オテロ","ユヴス","ギヘホ","コウツ","ツウヌ","ホルム","ユロー","ボガヘ","グスキ","ヘッヒ","レヴセ","ソラ","ヴァリ","ズート","エリサ","リース","ランプ","ワゴ","ボツナ","エロモ","メイ","ポッモ","ジェテ","ロバン","ネーリ","ダキケ","デモ","デクプ","オマル","デナム","クリマ","ヒル","ニフ","ワゲン","パデン","アヌー","グヘォ","セアー","ポイス","グロス","グネワ","ソアイ","ヌヒウ","オブリ","モメイ","ペンノ","ボーレ","ペルツ","フレル","パガユ","リリー","ハリラ","エリス","キォリ","ルト","ホルム","ユロー","ボガヘ","グスキ","ヘッヒ","レヴセ","ソラ","ヴァリ","ズート","エリサ","リース","ランプ","ワゴ","ボツナ","エロモ","メイ","ポッモ","ジェテ","ロバン","ネーリ","ダキケ","デモ","デクプ","オマル","デナム","クリマ","ヒル","ニフ","ワゲン","パデン","アヌー","グヘォ","セアー","ポイス","グロス","グネワ","ソアイ","ヌヒウ","オブリ","モメイ","ペンノ","ボーレ","ペルツ","フレル","パガユ","リリー","ハリラ","エリス","キォリ","ルト","ペゼフ","モリス","ツヴァ","ラボ","ソチ","グレン","グロス","キーツ","ザソヤ","ブロ","アマル","ホール","カイル","ジェネ","ヨズ","ヘーク","ブッキ","カソサ","ムユ","マジノ","ホーゲ","シウバ","リミソ","アガム","バーダ","ザーニ","ハルマ","セッチ","ライル","カアン","ジアン","ギゾー","ユーン","ラヴ","ウラン","ザギニ","シルコ","ニコラ","デグ","サチォ","ミヌト","コァケ","オロス","トルサ","メロテ","フゥ","コスミ","サッチ","ホルム","ラポ","セロー","エース","ギョワ","ボモヘ","セナ","ルプチ","プユイ","シノソ","ベーム","ピカソ","ユング","テリラ","サーレ","テーデ","シロン","ホツゴ","ゾイゼ","アテマ","ハンド","ウハゥ","ヨナス","ナハー","ゼコ","ラッジ","コジド","ムスゴ","ズヌナ","モレマ","ロア","ヌヌー","ユベシ","ホンカ","オルフ","マニド","コパリ","ライン","フブ","サパダ","エハセ","ナコバ","ボー","ルシオ","ビール","ヘルツ","ヒラー","ロウネ","ウクパ","カッコ","チレア","ラバル","ブラマ","レズサ","ボテネ","ホッヴ","チハツ","ドコー","ラーム","マウゼ","ボット","ガスケ","レツァ","ゼミボ","アモリ","ギトユ","フポデ","モータ","クノー","ソルド","パレス","レポ","サソセ","ソーン","ソニー","モニ","ヘッグ","カカマ","ラーデ","コイン","ムーイ","ユボー","テナ","ケクエ","ヤワー","サンズ","コド","ルルー","イー","ヴサペ","ラーザ","ズポ","クロル","サスボ","デラ","ニゲダ","プジェ","ダポゴ","イソラ","ニヤ","ヤー","アビー","ブオモ","サレム","ストー","レコラ","ベヘモ","モソグ","リガベ","セコフ","ベーム","ピール","ペレ","ダマー","オサー","ダフ","ラーリ","サレフ","ニクラ","ツー","ダゥベ","レポ","ゲッド","ペテル","モスコ","ヤクー","ボッシ","ワン","クロケ","ヴペゥ","ヨケラ","マト","イボ","チリガ","ベーエ","カオニ","ダムー","ベヴゴ","ユーリ","センナ","シーカ","ベルソ","ブール","アーラ","ソルミ","モラン","ツムノ","プーラ","マネヤ","セルジ","ギジャ","クルキ","ウヤメ","ヴリ","ラヤザ","ペロ","ニー","バッケ","フォス","モタ","バール","コンブ","ツサ","ペクボ","ピッキ","レッリ","ベロ","パース","ダノ","シジ","ポー","ラムペ","メー","アルホ","シーレ","ガミヘ","ザニビ","チヒ","デルヨ","ヌヌー","ヒーゲ","ダサー","メセト","コスタ","ムンク","ドノン","ノエ","ブエノ","スゥ","ヒメノ","リッリ","ゾワゼ","プレス","ギカロ","ガラン","ネウ","フーク","ビカト","ラムペ","ハッセ","ファラ","ペラン","ヨーポ","ペレス","ローズ","ロイ","ソルギ","オラモ","ダルレ","エッジ","ゲワ","ジコ","ベール","セタボ","チトフ","エーコ","ソソヨ","ヨーク","ロサノ","カーフ","サータ","ヤェブ","ミケル","レンノ","ブクム","ヨーヨ","ポヴヤ","ハイゼ","ピラメ","ハイエ","レリオ","ゾルジ","ハイメ","ドノソ","バーム","ツコミ","スイユ","ウセ","ネシブ","チュオ","ゾルジ","ニーン","モス","ピテホ","スミス","ククフ","プシラ","ゼコネ","ピンク","オノレ","アソズ","ハクリ","ポツペ","サンツ","ヤニエ","ドーナ","レワピ","ガフ","バラノ","ライヒ","コルフ","エンゲ","カソゥ","ソウザ","コラル","ドメヌ","ワプデ","ルブ","ボーア","ピニャ","コルギ","コジダ","ケラレ","ジル","ワーグ","サロー","サナボ","キルピ","デュー","ショウ","テノセ","ハルユ","テケリ","カルタ","ロード","クロス","プロイ","ジンヤ","ダボ","グリチ","セヴゾ","チイロ","ドロゴ","レプセ","エモン","ギメ","ラーン","ムオズ","ゼリー","ゾイゼ","レーヴ","カルナ","ブット","タイレ","ダエミ","コック","サーン","セカロ","ギーユ","ネヴス","アーツ","ムルズ","ユトピ","ゲトヴ","フリン","ノテロ","ペイプ","ヒイネ","ニヨス","ギボン","ハウフ","ロイル","ナイバ","ヨナス","タカィ","ゲワニ","メサリ","ロピ","パーポ","プーマ","デナム","レラノ","ズベセ","ベック","ミゲル","イフジ","ララス","カミロ","ゲイル","ゴー","ムホゲ","ハーヘ","タマロ","グーペ","ノエー","ドッス","ペーリ","ライロ","コンデ","クノー","サブギ","オジエ","クレイ","バール","ドルン","マア","ブラム","ロデ","ワヌ","ゲーツ","レー","ガチ","ハイエ","ネニェ","セハタ","サネサ","テノー","ツモソ","ルーベ","ピニャ","モテヴ","カリー","レンノ","ゲハビ","フェル","ズヨウ","ヘフレ","カルフ","アロラ","スギキ","モア","ヒツ","ズーベ","ユミニ","ビワガ","イバラ","デポー","サカラ","ルアバ","ラメー","ヌケリ","ベルツ","ブエ","テサダ","トベ","テント","ビイレ","ルセイ","ラムサ","ゴス","ハッシ","ダラヌ","セニ","アドモ","カッパ","キャバ","ラシ","ウッズ","ギヨタ","ジシザ","マウラ","テッド","コーク","ヤチ","ヴテゼ","エリ","ミュレ","ノレ","ニダヒ","ニヌォ","ペルツ","アポニ","ボーデ","リエラ","モース","ロサノ","マリク","ロス","トマ","レルマ","クーサ","ポジー","ソレス","ザルム","バシビ","トー","ピキヘ","デュユ","ボルケ","ロデス","リンツ","シフト","ローズ","ペヒ","ロッシ","レルネ","エキ","ニンプ","プドツ","ツノグ","ベッラ","ヤーン","ニエミ","ケト","ネゲ","キポー","エナオ","ワユ","ゴモン","ジミ","フビウ","ゴア","レオユ","プリド","ヨイム","ペヒラ","ペイル","ケナ","ルォリ","レルネ","キブ","ベーン","デュビ","アォエ","コチ","レホ","キヘ","セッパ","パレ","ブリカ","ルシノ","ギユー","ツァオ","コンデ","ナピジ","ワイワ","メダニ","モン","ツヌハ","レーナ","ジケル","キテゥ","エーク","ハヒ","レオ","ベル","セセ","ピッツ","ベロナ","バレ","バルベ","アザ","デレグ","バイア","ウェブ","カタヤ","ベート","ニニ","ゼザペ","ガジ","マサ","ブリト","レワ","シヘス","ジミ","スネト","フフ","ピッピ","ルヌ","モズジ","メレペ","バウド","ロリゴ","ロベ","プーレ","ヘーヒ","ボハ","コレラ","ソリア","ペフチ","モボピ","モーブ","テユー","サモリ","ルタヴ","プース","ベルソ","カイレ","イホ","ホルラ","バレロ","ラッシ","エビオ","クスボ","ドガ","セメレ","マシア","カヒ","リスキ","ベホタ","ランダ","ソゲキ","セロホ","ゲリベ","ツヴジ","ホッロ","プルヴ","イヒ","イネス","ノテズ","マシド","ロヘジ","ガディ","ゼルヨ","マッリ","チヨ","ネッケ","クリダ","サヴユ","クロウ","エナン","ミフ","ヨーク","リエラ","ルッリ","プオポ","ルンメ","ビムネ","ゼロ","コット","ノレウ","パガン","ロジェ","ライヒ","ケフ","ワッツ","ビアス","ルゲホ","タイレ","パロロ","ブーア","ジンム","トー","モデナ","ミヒメ","シコ","クーニ","ワド","ナジ","ゲチ","カシ","ヨンク","ワレ","サルミ","ハム","プース","エヴチ","ハユハ","ミル","ペベ","ミゴー","マセレ","リー","ピナー","バカ","リレ","オラペ","イーレ","ユーン","グカ","アマル","フーホ","キイー","デマレ","エロワ","ディ","ヌノス","ラリオ","ロッリ","ドーニ","シラク","ウヌク","テソテ","アー","ザクペ","テナ","エデ","ユルハ","ヌニ","ヤスナ","ムェブ","ヴァベ","クンツ","ヤウホ","リーシ","ベーガ","プラド","ブーア","ウルフ","ガドス","アポニ","ブドン","モンテ","セブロ","エベン","ルンプ","ボール","デユー","ウヘー","ムモヒ","レニエ","ガスコ","プリヤ","マーラ","ゾミ","ヤマ","メセ","エペー","ケベド","クレア","ロサダ","マトス","フンク","マケラ","ルォジ","ヨマ","オペル","ネソキ","ザスズ","ピーク","チセー","ポワレ","ホイオ","ホッシ","ヘッグ","サーレ","カユヒ","フルナ","トセビ","ペウツ","ケイン","ロサビ","リヒポ","ザギポ","ワヘゾ","ホーゲ","ゼッレ","リジェ","ソープ","カウー","レアネ","クジカ","レッウ","プザ","ムーウ","コィ","ベイン","ネムエ","カツ","ヘロイ","アスペ","ウエ","マチス","グコー","ムーウ","パース","クニピ","バハユ","ルナン","ホザデ","ラパラ","テラル","ダロオ","ジーキ","ノボハ","マー","フグハ","ケムナ","トッム","モス","バーデ","シミラ","ペイス","タケ","ナルヒ","イソ","モース","クリ","レホ","ゴダン","ヤスホ","ピホゥ","ベスト","エルン","マテオ","ソリー","ヴセダ","ピー","プース","ガジコ","ネツデ","ビオ","ジケル","ヨピコ","ギレス","レブコ","リーセ","コイヴ","ラウク","ビクパ","ブルム","ガル","タメス","ボレル","グッド","ラサベ","ゲフン","ワナ","パルペ","ハーケ","ラップ","アネ","ロチコ","アデホ","カーン","ピヴツ","コーズ","デボビ","ペマハ","ローチ","マゾ","モンテ","ビモケ","ズンパ","レマー","サバラ","ギムル","ポオワ","アルエ","ユレケ","サカホ","フゼ","サール","ローク","リンク","ハーゼ","レーラ","ホツス","ヤデ","ネチ","ガーン","ロッコ","サーリ","モネ","ツヴー","ナイト","モヒカ","カラ","サンス","プサ","ワン","ディル","ワィ","ニカモ","ガセデ","ゾケソ","ピーリ","キント","ロッカ","ヴラチ","ミィソ","フイサ","サラギ","ゲッド","ノット","ナウチ","パラダ","ハッシ","ツンペ","オヤ","ブロ","コリン","ヒェ","ゲーゼ","バレル","サルパ","ナロン","グレン","ナイト","サベフ","オヒテ","バレ","コンブ","ベエナ","ヨナス","イーレ","ロッシ","ギアベ","ペロワ","ソサ","ガル","アホ","デュビ","ベロナ","ロジェ","ナッタ","ボルク","ナイヒ","メルレ","ダエ","フー","ギブス","ビオ","ジロー","スジニ","ゼヴ","ペカー","ギレス","ゼド","ミヨ","マセド","ジスメ","ダナー","セッメ","ケエ","ヤンネ","レホ","ロフス","ナーニ","ホルト","ベッリ","ホラボ","ボルデ","オヤラ","ヤラ","カホミ","ヴルツ","ミーニ","ヘイグ","ラッリ","フデデ","リード","ハイラ","バニヴ","ボー","ベーラ","ヒトル","セメレ","ユー","ケナ","ゲイル","ヘー","アーン","ハネス","フルチ","シルコ","ダベ","ポート","キロパ","グネノ","ノギヘ","モーロ","クート","ダヴー","ゲクー","ムポム","デュベ","ポポフ","ハコレ","ゴジョ","イソラ","リリヤ","アウノ","ヨダボ","オラン","カウン","セノプ","ペレス","グミー","レムケ","ダヤモ","ユーン","パヒニ","ギラン","ガフ","デイン","デンレ","トケ","ウコェ","テック","ロロー","セト","ベカプ","ホペヒ","タセー","シロン","クーヴ","サテコ","ボリス","オハグ","ユホ","アズス","ツゾン","ボンチ","ベーケ","ゴヒク","チゼ","ヴー","シトモ","ベズ","ギワリ","ローゼ","ポワレ","リーツ","ランケ","ベント","ハレド","ソセザ","ウルフ","ジルギ","ゲイ","モニ","エリオ","パワー","ワット","ノリス","コッコ","ソッチ","マザサ","シニヴ","ガン","ランナ","ズホユ","トー","テート","エカパ","セワラ","レビリ","ヨレア","ロイラ","ユィ","クハー","デリダ","ロウネ","ゴモン","ブタロ","トロー","ハルユ","ローク","ダマロ","ブスケ","トマス","ゴア","ユタニ","マコレ","ゲスト","ズエー","バシミ","コッホ","イコラ","ケータ","ヤイア","ガサス","レル","テラン","チダド","キトネ","ヌド","オネハ","ポフイ","マレー","ヘケヴ","ズド","ヨペ","クスケ","ハハト","ヘフ","エーレ","エルー","バエナ","モロナ","アレユ","ユズ","ラボイ","ルキー","ボノ","バンダ","ルース","エモン","チトフ","モラヨ","ベフー","ゴヤ","パリー","ナザ","サッコ","メリノ","パイヤ","エーク","ゴダン","ムネー","ベーム","オジェ","チスラ","ガニナ","ピアン","ソレ","ランゲ","カユザ","ロータ","マー","ギリフ","ボレポ","ソヒ","ピアス","ワモー","ドペル","ベッラ","ペイロ","パリス","ヨー","ルイス","ペツト","レンツ","クーノ","ファル","フラド","ワーグ","ケヒタ","コピラ","ケリー","ゲパラ","アビー","ハカイ","アユロ","パギセ","ビオ","ラウダ","ヴルフ","ブリオ","ボリラ","ハイゼ","リーム","グゴギ","プポー","ムミパ","ツツナ","ランダ","ハエン","レイ","コティ","コント","レボラ","タイシ","ボンチ","ブマァ","ギー","ヒチタ","プジー","ロー","ピルヒ","ホイト","ギムダ","ギボン","ズリヌ","ドビ","マセド","ナジ","スデェ","レブコ","ハヘー","ワシニ","レン","アルセ","ナムウ","ブロウ","マスヒ","ウテロ","デーバ","ハッソ","オンワ","サエヒ","ボカゾ","ラウハ","ソラン","スニチ","ルール","サーラ","ボスム","イビー","シブゴ","ニエミ","ロイス","ノク","ウゴリ","ヘイガ","マテガ","エック","ズリゥ","エヘ","ハカラ","ペニヒ","ブルゲ","リトス","ラアキ","ペンテ","クルム","ワジャ","ルハー","ホゴデ","ブロウ","ケムナ","フドナ","アケバ","ダウム","スター","ウチヒ","ゴルツ","ガスト","ポール","パタヒ","ドクト","ゲドカ","ラヤザ","セハ","ルアノ","グリム","イリエ","ヌレン","リデガ","ゴロン","アルバ","ベゴ","ワミリ","フート","タカラ","バサシ","ペルネ"],
    m: ["オア","カイ","デ","ジム","コナ","ヒ","ペー","ピー","ジ","トビ","レグ","エル","テ","ウェ","ムォ","ユ","ピエ","ジィ","ジー","ル","ベ","セ","モス","ロ","ゴメ","ティ","ソ","ビ","ダ","リ","ツ","プラ","ワル","サ","ベ","ハッ","ザシ","ヨ","キソ","サン","ペタ","ヴキ","ダ","ホ","シッ","レン","デ","ジー","シェ","ペル","エレ","ヨリ","ヒイ","ドル","キ","ホ","ミス","マ","ア","コナ","キビ","ズ","ピ","レ","メ","セ","ナサ","ヘル","ネ","レイ","ホ","ド","モ","ゼラ","キヒ","イ","モナ","ジ","ケ","ソー","キマ","ザタ","ビコ","コ","ブ","リオ","シー","ム","カレ","ペピ","ロ","ジ","プ","ワ","ゾ","ヌ","ベン","ゲ","バ","ソゾ","ホイ","オ","プワ","グレ","シ","ブ","ミゲ","ナジ","ケキ","ス","トサ","ロミ","ハ","ミセ","ロ","ゾ","エー","アリ","ワ","オベ","リ","ワル","ヤサ","ラル","ベサ","ペ","ゲッ","ツヘ","ス","ゾ","ギ","リア","レミ","サウ","ヨリ","チャ","セ","モ","ム","カユ","タウ","ベ","ソ","ミノ","ロミ","ハソ","ロビ","アン","ピ","テッ","ボ","ユポ","ロ","ガル","ワー","グ","コア","フリ","アル","ユ","アザ","イー","コメ","ドッ","ムゲ","ル","ズビ","ヘノ","ム","ワ","ヌ","ヨラ","カ","ポ","ロ","キ","クレ","ジモ","タ","ギ","ド","ツゴ","ゴ","ポー","シ","ビー","ポゾ","デチ","ワ","イ","ミ","キ","ヒ","ウア","リモ","イ","ハイ","ケレ","リロ","トオ","ロ","ソラ","ブ","ハ","オ","デ","パ","ア","ガ","アッ","トン","ベ","ヒ","ル","ク","ダニ","ビ","ワ","セ","ウベ","チ","ル","マー","デ","レ","ハコ","ジ","ミ","ト","エル","ブロ","ワガ","レン","レリ","テ","ズ","ポ","アブ","テ","リヌ","エガ","ブラ","オジ","モ","ギ","チ","ピ","サ","ダビ","ダリ","セド","ホ","ズ","ペ","クル","リル","ボト","フ","セナ","デ","スカ","ケリ","ノ","ピ","シ","パコ","ズタ","レ","マル","キエ","ザロ","シ","シモ","グ","ゲア","ナ","ト","ハイ","バッ","ヤ","ハ","ネ","カ","ヴ","コリ","レ","ト","セ","ト","ク","ミレ","ロッ","ム","ト","ト","ヌイ","チ","ヘ","トニ","ヒセ","ズ","ボフ","ヤ","ス","メ","リ","パ","バッ","ヨ","モテ","カボ","ゾ","ル","ムケ","ミカ","ビ","ヴィ","ズ","ヒ","チ","ヨ","ゾフ","セホ","ルタ","グド","ヨウ","ヨソ","ベー","ヘメ","マテ","ノ","タア","ベル","オン","コ","ヌブ","パ","マッ","ルフ","ペ","ロ","プデ","ギ","ヤシ","エ","レ","カ","ウワ","ロル","ロレ","プ","リ","カ","ネ","ゾゾ","ソン","ヘ","チ","エ","ヘ","デ","マユ","ゾ","ヌ","ホネ","ピ","ルィ","ゴエ","ツ","ハリ","ナタ","ルー","ポツ","ヘ","ブ","レ","サ","ブー","ユ","タ","ザロ","ヤ","ミロ","ヤル","ラル","キ","ゾ","ピ","ダ","ルビ","オホ","ブ","フ","ペ","ヴ","ユ","ケキ","ギ","ベソ","ムゼ","ヴ","ボ","バキ","ラ","ダッ","ヴイ","キ","マ","ヒユ","チエ","ノ","ビシ","スソ","オ","プ","ピ","プ","ラヨ","ネバ","ズタ","ニ","ベ","ライ","ヌク","ヘエ","ヌベ","ヴィ","ムパ","ミネ","リー","タ","ヤ","ニ","ベ","マッ","チ","シル","テ","ノ","ヌ","キ","ブ","ガ","ピ","エ","ガビ","ヤ","ヌー","ピ","ガル","ダヌ","ダ","ミユ","ガル","バ","ゴ","ピ","レヴ","ノ","ダ","コ","ガ","モ","ラル","サ","リト","デ","メ","マー","ラム","ヴ","ピ","デル","オビ","ハ","ルネ","フ","コル","テ","ハベ","コシ","ノ","モゾ","エリ","ゾ","レー","ベ","ル","プ","シュ","ケヌ","ゴラ","ガ","チイ","アデ","ヒメ","バサ","コリ","ヨ","リパ","ケー","ル","ムラ","マ","カン","シ","ザ","ノ","ピ","ツエ","ケマ","フヤ","ガペ","アエ","プ","レ","ジッ","ヨエ","ペ","ボ","ゲト","ボ","ベ","バリ","ス","ゴソ","ヘリ","オッ","オマ","エベ","サペ","ドワ","ム","ヤシ","モ","ホア","ペ","ゾ","キ","テリ","ドマ","ビ","ザ","マー","ロ","ギ","ケネ","モー","タネ","セ","リプ","ネデ","ビ","ペ","ポ","ケリ","バル","ポー","ミ","ルノ","ラモ","ズ","ウ","ロ","フヘ","テー","ニ","ヤケ","ユ","マー","クダ","ネヒ","エ","ノユ","ゲニ","ル","ケ","ニ","ギ","ズ","ア","プ","ハッ","キ","ヘ","コ","キ","ケフ","ノタ","ユ","サニ","ウ","コ","ギハ","イ","ティ","デ","ホデ","ツ","テソ","レ","エナ","ベ","ソ","ドペ","ルー","ガム","レク","ワ","ア","ロル","テネ","ヌ","ユハ","ベ","ヒ","ニ","イス","ホ","ゲウ","ハッ","ボ","ゼ","ソ","ハン","ミメ","ヒ","ス","ダリ","リラ","ア","ソレ","ゼ","ニー","ビ","ホゼ","ヨル","プ","ゼ","ヘジ","ズ","ジモ","ム","ハン","テリ","タ","パ","ダネ","ルユ","ネナ","ケミ","ト","メ","リ","ド","ビ","ヘノ","ヤ","ラ","グ","ゼ","ガビ","テア","ゼ","パ","ブメ","ポテ","ブ","バ","ゾコ","ウ","ロ","タ","カウ","レン","ポ","ウィ","ゴ","ベフ","エメ","ケレ","ロメ","ゴァ","ソマ","ピー","バメ","ゾ","ツケ","ニー","ニ","サ","ラ","メス","エ","エミ","ヨ","ラサ","ソ","フ","ユ","ピ","ヴ","ヤク","ガイ","ラウ","バル","ユ","ス","ヒ","ヤエ","ルー","グイ","ヘメ","ウ","ミハ","ネ","モ","テヨ","ナ","ズォ","ハ","ベ","ヌム","リ","ウ","オゴ","ロリ","ルー","デチ","オナ","ドチ","モ","ガ","マエ","イ","ゴイ","ピ","ト","ドレ","リ","テ","ウ","チュ","ゲマ","ツ","ガウ","イェ","テ","チェ","ヨ","ナ","ヴ","ヨ","バ","ワテ","ロイ","ヘガ","ヒ","アン","ペエ","コー","ジョ","ケ","メタ","ラン","ユ","ユ","タ","ケ","ワ","ル","ケソ","ガレ","ギ","ソ","ボタ","ソー","チヤ","ヴ","ゼリ","カミ","サウ","ミロ","プゴ","ビニ","オラ","ユ","ヘス","ゾマ","ピ","イ","ギ","ベ","ミロ","ザク","ト","ニヨ","ネ","ルト","アー","ク","リ","オラ","ビ","ファ","ヴツ","ペ","ルシ","ホ","クル","ロ","サム","ソメ","ロル","オミ","ツ","ハイ","キリ","ヒ","ト","ソ","ゾ","ニ","デ","ケン","デ","ダ","ハリ","ベ","ル","アー","ルノ","ワ","トイ","ノメ","デ","イン","ヨ","ビ","コ","ル","ハデ","ギ","ミロ","ム","デコ","ニ","ブレ","ピッ","ディ","デ","ヒペ","ネッ","ゲ","ア","ラ","デ","マッ","トポ","ベ","パヤ","イタ","ザ","ゼサ","リ","ネ","バナ","ポピ","ニ","ル","ゴ","フリ","ラニ","レ","ド","コス","セア","リキ","ヤ","リン","バロ","イ","デ","ロリ","メ","ヨウ","ベシ","コ","ズ","ウー","ケン","セル","シ","ウ","クル","カマ","パエ","ミ","タ","リ","ピボ","ソァ","ケ","クニ","ペ","グ","アキ","ゴズ","ズ","ナオ","コル","ゴ","ビ","ヘ","ア","ペー","シ","ブ","ター","ピ","ボレ","ハ","ニホ","ウィ","ケ","パ","ラ","パ","ゲー","エ","ヨ","タヨ","サイ","カ","ゲォ","ケ","ケ","リリ","サ","ベビ","コペ","マル","ロソ","ネ","ヤ","ネイ","ベチ","ゴ","ニゼ","シ","ネ","ビラ","ミ","ネ","ドリ","ダ","ゾ","ダ","ゲル","ダヘ","リ","マ","パビ","マイ","マ","ビト","ウツ","フィ","セ","キモ","レネ","コ","コァ","カリ","タウ","べ","ユデ","イビ","デ","トイ","ウ","ギ","ゼ","リン","ノジ","スカ","ヨ","セド","ムー","レ","デニ","ナ","フェ","サバ","ニ","ニツ","アウ","ロ","ヤー","ホ","リ","ロビ","ノオ","ツロ","ベヤ","ペ","タミ","ミン","メー","ベ","バ","ジニ","パ","フメ","グ","ダ","ラニ","ス","バ","ツ","ヴー","ソイ","ニ","マウ","ジゼ","デブ","マハ","ブル","エル","ゴカ","アブ","ロ","ガク","バネ","キ","ヤ","ノリ","ネ","バ","ル","サラ","ノ","シー","ケー","ダイ","ゼ","ル","シリ","アズ","セ","トス","ラウ","トゥ","ラ","メイ","キ","チェ","ワ","ヒ","エ","ヤ","タロ","オペ","ネィ","ス","カイ","ウ","ヴド","エ","ボタ","ベ","セ","ラ","デ","ゲ","ケッ","カラ","モ","マ","アテ","ユリ","ジ","シ","オン","マッ","デメ","ゲ","ヨ","サミ","タケ","ダ","メイ","ボ","ヨハ","ソイ","ラヘ","イ","タ","イベ","ドニ","フ","ケキ","ペス","ド","ギ","オイ","ジョ","エレ","ジニ","リ","コ","カリ","ケレ","ヘ","セシ","ミラ","ヴ","ロバ","デタ","グニ","ゼク","ヤ","パマ","ジリ","ジ","エ","マル","ピ","オル","ミ","ロ","エン","パギ","サロ","ビ","デリ","ミ","サ","マビ","ユー","ブヨ","セム","ルシ","ザ","リ","キエ","ペン","ビク","ミア","ビベ","ミ","ツ","リシ","タワ","ベ","ロウ","アン","ホリ","チ","ボー","ホイ","ワ","ワ","ロ","ピ","ガチ","セア","モ","メリ","ド","ヨノ","テル","イー","フフ","ゲゴ","ユ","ゾー","ギ","ズサ","ガ","ゼ","ミン","エ","ピル","キカ","タマ","シノ","チャ","モ","ゴ","ヌ","ホロ","ピ","フ","スー","ガウ","ワ","ビシ","ペペ","ヴ","スニ","ワィ","ユ","ペ","サミ","タ","カ","ユル","アマ","ヒェ","レジ","ノメ","オ","ヨ","ヌ","メ","ミル","サテ","ヌ","チ","タ","ハブ","モコ","ヘッ","ヌ","カル","タ","アニ","ロビ","ヤ","ゾ","ゼビ","ペテ","スコ","アウ","カロ","ギ","メチ","エリ","ズ","アウ","セー","マリ","マ","ビ","キ","ザ","ポリ","モ","ヤバ","ニ","レナ","エ","カゴ","ア","サ","ムヘ","プヨ","ベッ","リフ","ヤ","ジ","ズザ","ツ","ジョ","フー","リソ","マツ","グナ","レー","ケッ","ダシ","クナ","コト","グ","ドジ","コヴ","リベ","ゲ","プ","ゴゾ","ハ","ジョ","ボヴ","フジ","チ","ツ","ジャ","イ","テ","アマ","ヨム","ノ","ピ","ゲ","サニ","ゼ","ケイ","ウケ","ルタ","カ","デミ","ペ","リケ","ボ","アペ","イア","シ","デア","サニ","フス","ゴウ","ネ","グ","ヒ","イン","ケ","ホ","リア","エイ","ベニ","ポ","ゼ","ヘキ","アー","ヒフ","オル","ダ","ミゲ","コ","フラ","ペ","ウィ","ロザ","ソ","ハヘ","ル","エド","シュ","ナホ","ク","ツ","ダイ","レ","ゴー","タマ","ドヨ","ゼ","ヌ","イナ","ゾラ","ル","イー","エポ","デヤ","ギ","トリ","リシ","ネ","ヌ","ホ","ヌ","ペサ","イ","リ","ツゥ","トワ","ナ","ケ","ピー","サリ","ガヒ","ネ","ペー","ズラ","ハ","ヒ","レク","ヴム","コ","メシ","ホヒ","ソラ","ユリ","リゼ","イシ","ゲル","ダシ","ス","ベ","ジル","キア","ベ","ヌ","フス","ネ","イ","ケル","ツオ","ジビ","ギ","ポ","ナ","ミ","サニ","ヌケ","ヌ","ベ","リー","グ","デ","ヒ","タホ","マ","マデ","ケッ","サー","ツヨ","ヴィ","ザッ","バ","イロ","ゾー","ゼ","アー","エヤ","ミラ","オ","ノヌ","ブ","スヤ","ソ","ゴー","ソオ","ボー","スラ","ダニ","サ","セム","ニ","ツ","マル","セイ","チペ","サゥ","デ","バサ","カメ","ヤ","ブ","ヘ","ロ","マ","グケ","エ","ヘル","ウー","マリ","フィ","ニ","ト","ヨ","ナコ","セ","カエ","ル","ソァ","ディ","セ","ギ","ナン","ソイ","ユロ","ギテ","デ","メ","キ","ミン","ワ","アム","テユ","ナ","ゼワ","ハ","ラッ","エマ","ス","ナー","アキ","ニ","グ","ジグ","チ","ガ","ヨ","ノ","マリ","フ","カハ","カジ","ゲリ","ミネ","ニゴ","ラニ","メケ","ギ","コ","ダ","ズ","カバ","サル","ロイ","グ","マニ","ハリ","タ","ア","ナ","テ","メ","アリ","ケイ","ツシ","イズ","ペ","アル","ア","マ","ザ","アウ","マガ","キ","ダン","ウ","エル","マ","パ","デビ","ジー","レプ","ピ","ズン","リ","ゲネ","ホ","パ","ミッ","ワル","タマ","アベ","チ","ギー","ニ","ナ","サマ","ア","ウリ","ディ","キ","ス","ピサ","セリ","ケ","フホ","マノ","ルネ","ヨ","ヘグ","ユ","ウフ","ト","リツ","ジャ","ルー","ク","ヌヘ","ベン","モヤ","スザ","ニノ","ミ","ル","ツ","モ","ネ","ホ","ロ","ロ","ゼ","チ","マ","オル","エメ","カネ","ボ","カイ","パ","ウ","ギ","オー","セ","コル","ス","リ","ミ","アク","ピユ","ヤ","ソニ","ビモ","ヌキ","カ","ワン","マノ","ソ","ヘッ","レ","メー","ヘセ","ヒチ","チ","アゲ","ハォ","ハ","ルキ","カラ","ニ","オ","ギジ","テ","ブ","マイ","フリ","パウ","アー","シ","ザ","ブハ","アン","ステ","グア","ロデ","エ","ヒー","ヌ","ボソ","グリ","マ","テ","ケ","ジト","ガ","セー","ヤ","ロピ","エヴ","ム","コ","リ","ヨリ","ルン","リ","リベ","ノ","テ","メリ","ネ","キア","プ","メリ","ナン","ギメ","ケア","タ","ガ","ワン","マ","ヤ","ボユ","ザデ","カ","キ","アウ","マ","ニ","テ","ル","ジャ","ボエ","ゴト","メ","ビ","ズザ","タニ","グラ","チツ","ブリ","トニ","ヒ","シル","ラビ","エイ","ヨ","サ","ヘー","アリ","リネ","レ","ナル","セン","ベ","イデ","タ","チ","ヴ","スカ","ダラ","マリ","ナエ","モ","エヴ","ナア","ニコ","キー","ボ","ヒ","ダ","アシ","ラッ","プリ","パ","ラケ","ダ","ザニ"],
  };

  debobi!: string;

  constructor(
    private httpClient: HttpClient,
    private titleService: Title,
    public loadingService: LoadingService,
    public navigate: NavigateService,
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('しなちくシステム');
    this.genDebobi();
    this.url = location.href;

    this.httpClient.get<Notifications[]>(`${environment.cmsUrl}/notifications`)
    .subscribe((data) => {
      this.notifications = data;

      setTimeout(() => {
        this.loadingService.loading = false;
      }, 500);
    });
  }

  genDebobi(): void {
    const s = this.debobiSource.s[Math.floor(Math.random() * this.debobiSource.s.length)];
    const m = this.debobiSource.m[Math.floor(Math.random() * this.debobiSource.m.length)];

    this.debobi = s + m;
  }

  ngOnDestroy(): void {
    this.loadingService.loading = true;
  }
}
