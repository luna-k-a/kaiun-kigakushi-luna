(() => {
  const fortunes = {
    numbers: ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
  };

  // 31の日替わりテーマと月ごとの季節感を組み合わせる。
  // 色名をそのまま表示する。近い色が連続しないよう、色系統を交互に巡る。
  const luckyColorGroups = [
    ["赤", "ピンク", "桜ピンク", "ローズピンク", "ワインレッド"],
    ["オレンジ", "黄色", "レモンイエロー", "クリーム色", "ゴールド"],
    ["緑", "黄緑", "ミントグリーン", "オリーブグリーン", "深緑"],
    ["青", "水色", "スカイブルー", "ネイビー", "ターコイズブルー"],
    ["紫", "薄紫", "ラベンダー", "パステルパープル", "濃い紫"],
    ["白", "アイボリー", "グレー", "シルバー", "黒"],
    ["ベージュ", "茶色", "キャメル", "モカ", "チョコレートブラウン"],
    ["ベビーピンク", "サーモンピンク", "コーラルピンク", "パステルイエロー", "パステルグリーン"]
  ];
  // 220種類の行動そのものを日替わりで表示する。系統を交互に巡らせる。
  const luckyActionGroups = [
    ["大切な人に感謝を伝える", "笑顔で挨拶する", "誰かの良いところを言葉にする", "身近な人にねぎらいの言葉をかける", "久しぶりの人に近況を伝える", "誰かの話をゆっくり聞く", "友人に明るい一言を送る", "家族との会話を楽しむ", "誰かの挑戦を応援する", "親切にしてもらったことを思い出す", "相手の名前を呼んで挨拶する", "ありがとうを声に出す", "今日会った人に笑顔でお礼を伝える", "人の話にうなずいて耳を傾ける", "誰かの成功を一緒に喜ぶ", "身近な人へ応援の言葉を送る", "先に明るく声をかける", "小さな親切にありがとうを伝える", "相手の好きなことを聞いてみる", "友人との楽しい思い出を共有する", "お世話になった人を思い浮かべる", "一緒に過ごす時間を大切にする"],
    ["自分の良いところをひとつ書く", "今日の自分をひとつ褒める", "心地よい休憩をとる", "好きな香りで気分を整える", "お気に入りの服を選ぶ", "自分にやさしい言葉をかける", "ゆっくりお茶を味わう", "嬉しかった出来事を思い返す", "落ち着く場所でひと息つく", "自分の頑張りを認める", "好きな色を身につける", "気分が上がる小さなご褒美を選ぶ", "鏡の前で自分に微笑む", "自分の好きなところをひとつ見つける", "お気に入りの香りを楽しむ", "くつろげる時間を予定に入れる", "心地よい服に着替える", "今日できたことに丸をつける", "好きな言葉を自分に贈る", "ゆっくり呼吸して気持ちを整える", "自分の気持ちを一言で表してみる", "心がほっとする時間をつくる"],
    ["玄関をひとつ整える", "机の上を気持ちよく片づける", "窓を開けて空気を入れ替える", "お気に入りの場所を少し整える", "花を一輪飾る", "使いやすいように鞄を整える", "寝具を気持ちよく整える", "スマホの写真を一枚整理する", "本棚の一角を整える", "食卓をきれいに拭く", "靴を揃える", "明日使うものをひとつ準備する", "部屋のお気に入りの一角を整える", "テーブルに好きな小物を置く", "鞄の中でよく使うものを揃える", "明日の服を楽しく選ぶ", "花瓶の水を入れ替える", "手帳の予定を見やすく整える", "玄関に明るい色をひとつ添える", "お気に入りの器を使う", "机に小さな花や緑を置く", "帰宅後にくつろげる場所を整える"],
    ["空を見上げてひと息つく", "道端の花を眺める", "季節の風を感じる", "木々の色に目を向ける", "窓から空の色を眺める", "近くの緑を探す", "雲の形を楽しむ", "鳥の声に耳を澄ませる", "季節の香りを感じる", "お気に入りの景色を写真に撮る", "散歩で小さな発見を探す", "今日の空に似合う色を選ぶ", "窓辺で外の景色を眺める", "身近な木の形に目を向ける", "空の明るさの変化を楽しむ", "季節の花をひとつ探す", "道の緑を眺めながら歩く", "風の音に耳を澄ませる", "水辺の景色を思い浮かべる", "自然を感じる写真を眺める", "好きな花の色を探す", "身近な景色の美しさをひとつ見つける"],
    ["背筋を伸ばして歩く", "肩をゆっくり回す", "気持ちよく深呼吸する", "手を伸ばして軽くストレッチする", "無理のない距離を散歩する", "好きな音楽に合わせて体を動かす", "姿勢を整えて座る", "首をゆっくりほぐす", "階段を一段ずつ軽やかに上る", "立ち上がって大きく伸びをする", "足元を意識してゆっくり歩く", "体が喜ぶペースで動く", "手首をゆっくり回す", "肩甲骨を意識して伸びる", "歩くときに視線を少し上げる", "座ったまま足首を動かす", "体を軽くほぐす時間をつくる", "気持ちよい歩幅で歩く", "両手を広げて深呼吸する", "立ち上がるときに姿勢を伸ばす", "短い散歩を楽しむ", "好きな曲に合わせて軽く足踏みする"],
    ["今日の気持ちを一行書く", "好きなものを一枚描く", "素敵だと思ったものを写真に撮る", "お気に入りの言葉をメモする", "小さなアイデアを書き留める", "好きな色を組み合わせてみる", "短い手紙を書いてみる", "思いついたことを自由に書く", "気分に合う音楽リストを作る", "心に残った風景を言葉にする", "今日の楽しい瞬間を記録する", "やってみたいことを一枚のメモにする", "好きな言葉を一行だけ書く", "今日の色を一つ選んで描く", "写真に短い題名をつける", "心に浮かんだ風景をメモする", "好きな曲の感想を書いてみる", "小さな飾り方を工夫する", "手書きのメッセージを一言添える", "好きなものの写真を並べる", "楽しかった瞬間を短い言葉にする", "思いついたアイデアに名前をつける"],
    ["読みたかった本を数ページ開く", "知らなかった言葉をひとつ調べる", "気になる場所を地図で見てみる", "新しい音楽を一曲聴く", "気になる料理の作り方を見てみる", "興味のある話題を少し学ぶ", "いつもと違う道を歩いてみる", "初めての味をひと口楽しむ", "好きな作品の新しい魅力を探す", "身近な人のおすすめを聞いてみる", "最近気になったことをメモする", "小さな初挑戦をひとつ選ぶ", "興味のある本の目次を眺める", "知らない料理を一つ調べる", "気になる色の名前を調べる", "行ってみたい場所を一つ探す", "好きな歌の背景を調べてみる", "新しい言葉を一つ覚える", "身近なものの由来を調べる", "いつも見ない棚を眺めてみる", "気になる記事を一つ読んでみる", "誰かの得意なことを聞いてみる"],
    ["食事を丁寧に味わう", "好きな果物を楽しむ", "いつもの飲み物をお気に入りの器で飲む", "一口目をゆっくり味わう", "彩りのきれいな料理を選ぶ", "好きな香りの食べ物を楽しむ", "温かい料理でほっとひと息つく", "食卓に好きな色を添える", "食べたいものをひとつ考える", "季節の食材をひとつ見つける", "大切な人と食事の話をする", "今日の美味しかったものを思い出す", "好きなお菓子をゆっくり味わう", "料理の香りを楽しむ", "お気に入りの飲み物でひと息つく", "食卓の彩りを一つ増やす", "食べてみたい料理を思い浮かべる", "好きな食材を一つ選ぶ", "美味しかった料理を誰かに伝える", "お気に入りのカップを使う", "旬の果物を一つ眺める", "食事の時間を楽しみにする"],
    ["好きな音楽を一曲聴く", "お気に入りの写真を眺める", "笑える作品を少し楽しむ", "好きな趣味の時間をつくる", "心が弾む予定をひとつ考える", "口ずさみたい歌を歌う", "お気に入りの場所に立ち寄る", "可愛いものをひとつ見つける", "懐かしい思い出を振り返る", "好きな作品に触れる", "自分だけの楽しい時間を味わう", "今日の小さな幸せを三つ探す", "好きな歌を一曲口ずさむ", "気に入った景色を写真に残す", "楽しい予定をカレンダーに書く", "お気に入りの動画を少し楽しむ", "可愛い小物を眺める", "好きなキャラクターを思い浮かべる", "心が弾む色を一つ選ぶ", "笑顔になった出来事を話す", "趣味の新しい楽しみ方を探す", "今日の楽しみを誰かと分かち合う"],
    ["今日楽しみにしたいことを決める", "明日の楽しみをひとつ書く", "やってみたいことを小さく始める", "願いをひとつ言葉にする", "目標に向けた一歩を決める", "嬉しい未来を想像してみる", "今週の楽しみを予定に入れる", "叶えたいことを手帳に書く", "自分らしい選択をひとつする", "これから会いたい人を思い浮かべる", "今日できたことを振り返る", "次の楽しみにつながる準備をする", "叶えたい小さな願いを一つ書く", "楽しみな予定を一つ決める", "挑戦してみたいことを一言にする", "明日の自分へ応援の言葉を書く", "次に行きたい場所を思い浮かべる", "今月の楽しみを一つ選ぶ", "好きなことに使う時間を決める", "未来の自分に伝えたい言葉を考える", "やってみたいことの最初の一歩を決める", "これからの嬉しい予定を手帳に書く"]
  ];
  const dailyMessages = [
    "小さな一歩が、これからの景色を変えていきます。", "整えた場所に、心地よい流れが生まれます。",
    "素直な言葉が、うれしいご縁につながります。", "あなたのペースで進むことが、いちばんの力になります。",
    "心が明るくなる選択を、今日は大切にしてみてください。", "迷いの中にも、あなたの願いを知るヒントがあります。",
    "その笑顔が、あなたと周りをやさしく照らします。", "手放すことで、新しい喜びを迎える余白ができます。",
    "今日できることをひとつ選べば、十分です。", "思いがけない発見が、身近なところで待っています。",
    "自分にかけるやさしい言葉が、前へ進む力になります。", "少し立ち止まる時間も、運を育てる大切な時間です。",
    "いつもの景色の中に、幸せの種が見つかりそうです。", "あなたの得意なことが、誰かの笑顔につながります。",
    "丁寧に過ごした時間が、明日の自信になります。", "新しい出会いには、自然体のあなたで向き合ってください。",
    "心に浮かんだ希望を、そっと大切に育てましょう。", "一歩ずつで大丈夫。前に進んでいる自分を認めてください。",
    "うれしい気持ちを分け合うと、喜びが広がります。", "今ある幸せに目を向けると、心がふっと軽くなります。",
    "あなたらしい選択が、心地よい流れをつくります。", "頑張った自分に、今日は小さなご褒美をあげましょう。",
    "気になっていたことに触れると、新しい扉が開きます。", "あたたかい言葉が、あなたの魅力をさらに輝かせます。",
    "目の前のひとつを楽しむことから、幸運が動き出します。", "周りと比べず、自分の歩幅を信じてください。",
    "心がときめくものを選ぶと、笑顔が増えていきます。", "小さな変化を喜べるあなたに、よい風が吹きます。",
    "休むことも、次の一歩のための大切な準備です。", "あなたの優しさが、今日は思いがけない形で返ってきそうです。",
    "今日の経験は、未来のあなたを支える宝物になります。"
  ];
  const monthlyMessageLeads = [
    "新しい年の始まりに。", "静かな冬の日に。", "春の気配とともに。", "春風に背中を押されて。",
    "新緑が輝く季節に。", "雨音を楽しむように。", "夏の光の中で。", "夏の思い出を重ねながら。",
    "秋の風を感じて。", "実りの季節に。", "深まる秋とともに。", "一年の締めくくりに。"
  ];

  // 通年の料理を中心に、和・洋・中など10系統を日替わりで巡る。
  const everydayFoodGroups = [
    ["おにぎり", "卵かけご飯", "納豆ご飯", "チャーハン", "親子丼", "カレーライス", "ハヤシライス", "オムライス", "牛丼", "豚丼", "そぼろ丼", "天丼", "かつ丼", "焼きおにぎり", "いなり寿司", "巻き寿司", "手巻き寿司", "ちらし寿司", "炊き込みご飯", "五目ご飯", "チキンライス", "ドライカレー", "タコライス", "ロコモコ丼", "ビビンバ", "焼き飯", "雑炊", "お茶漬け", "リゾット", "ドリア", "お赤飯"],
    ["きつねうどん", "たぬきそば", "ざるそば", "かけうどん", "肉うどん", "月見そば", "天ぷらうどん", "焼きうどん", "カレーうどん", "釜玉うどん", "鍋焼きうどん", "ざるうどん", "ラーメン", "味噌ラーメン", "塩ラーメン", "醤油ラーメン", "タンメン", "焼きそば", "あんかけ焼きそば", "そうめん", "にゅうめん", "ミートソースパスタ", "ナポリタン", "カルボナーラ", "ペペロンチーノ", "たらこパスタ", "きのこパスタ", "トマトパスタ", "クリームパスタ", "ジェノベーゼ", "冷麦"],
    ["食パン", "アップルパイ", "ロールケーキ", "チーズトースト", "ピザトースト", "フレンチトースト", "サンドイッチ", "卵サンド", "バウムクーヘン", "ツナサンド", "カツサンド", "ホットサンド", "クロワッサン", "バターロール", "ベーグル", "塩パン", "メロンパン", "あんパン", "クリームパン", "カレーパン", "シフォンケーキ", "パウンドケーキ", "マドレーヌ", "パンケーキ", "クレープ", "ピザ", "マルゲリータ", "エクレア", "ハンバーガー", "ソフトクリーム", "フルーツサンド"],
    ["鶏の唐揚げ", "照り焼きチキン", "焼き鳥", "チキンソテー", "チキン南蛮", "鶏の塩焼き", "鶏つくね", "手羽先の甘辛焼き", "とんかつ", "生姜焼き", "豚しゃぶ", "豚の角煮", "肉じゃが", "ハンバーグ", "チーズハンバーグ", "和風ハンバーグ", "ステーキ", "焼肉", "ローストビーフ", "ポークソテー", "ミートボール", "肉団子", "鶏そぼろ", "厚切りベーコン", "ソーセージ", "シュウマイ", "餃子", "肉まん", "メンチカツ", "コロッケ", "鶏のトマト煮"],
    ["焼き鮭", "鮭のムニエル", "鮭フレーク", "さばの塩焼き", "さばの味噌煮", "あじの開き", "いわしの蒲焼き", "ぶりの照り焼き", "たらのフライ", "白身魚のムニエル", "まぐろの刺身", "サーモンの刺身", "かつおのたたき", "海鮮丼", "まぐろ丼", "サーモン丼", "ツナマヨおにぎり", "しらすご飯", "えびフライ", "えび天", "えびチリ", "えびマヨ", "いか焼き", "いかの煮物", "たこの酢の物", "たこ焼き", "あさりの味噌汁", "貝の酒蒸し", "かまぼこ", "ちくわの磯辺揚げ", "魚の煮付け"],
    ["目玉焼き", "卵焼き", "だし巻き卵", "ゆで卵", "スクランブルエッグ", "オムレツ", "チーズオムレツ", "茶碗蒸し", "温泉卵", "卵スープ", "厚揚げの煮物", "揚げ出し豆腐", "冷ややっこ", "湯豆腐", "豆腐ハンバーグ", "麻婆豆腐", "豆腐の味噌汁", "納豆", "納豆オムレツ", "厚揚げ焼き", "高野豆腐の含め煮", "がんもどきの煮物", "豆乳スープ", "ひよこ豆のサラダ", "豆のトマト煮", "枝豆のおにぎり", "大豆の五目煮", "ひじきと大豆の煮物", "おからの炒り煮", "豆腐サラダ"],
    ["野菜サラダ", "ポテトサラダ", "マカロニサラダ", "シーザーサラダ", "コールスロー", "温野菜", "野菜炒め", "もやし炒め", "ほうれん草のおひたし", "小松菜の煮びたし", "きんぴらごぼう", "切り干し大根", "ひじきの煮物", "かぼちゃの煮物", "大根の煮物", "なすの味噌炒め", "ピーマンの肉詰め", "きゅうりの浅漬け", "トマトサラダ", "ブロッコリーのサラダ", "コーンスープ", "野菜スープ", "コンソメスープ", "味噌汁", "豚汁", "けんちん汁", "ミネストローネ", "ポトフ", "クリームシチュー", "きのこのスープ"],
    ["グラタン", "マカロニグラタン", "ポテトグラタン", "チョコパフェ", "ビーフシチュー", "チキンシチュー", "ロールキャベツ", "チキンカツ", "エビピラフ", "バターライス", "チーズリゾット", "トマトリゾット", "キッシュ", "いちごパフェ", "オニオンスープ", "クラムチャウダー", "ラタトゥイユ", "アヒージョ", "フルーツパフェ", "プリンアラモード", "ガトーショコラ", "ミルクレープ", "ポテトフライ", "マッシュポテト", "ジャーマンポテト", "おはぎ", "鶏肉のクリーム煮", "わらび餅", "あんみつ", "白玉ぜんざい"],
    ["中華丼", "天津飯", "麻婆丼", "八宝菜", "青椒肉絲", "回鍋肉", "酢豚", "棒棒鶏", "春巻き", "小籠包", "水餃子", "ワンタンスープ", "中華スープ", "卵チャーハン", "レタスチャーハン", "あんかけチャーハン", "焼きビーフン", "フォー", "ガパオライス", "グリーンカレー", "キーマカレー", "バターチキンカレー", "ナン", "トルティーヤ", "タコス", "ケバブ", "サムゲタン", "キムチ炒飯", "チヂミ", "春雨サラダ"],
    ["バナナ", "りんご", "みかん", "キウイ", "ヨーグルト", "フルーツヨーグルト", "フルーツサラダ", "プリン", "ゼリー", "杏仁豆腐", "アイスクリーム", "シュークリーム", "ドーナツ", "ショートケーキ", "チーズケーキ", "チョコレートケーキ", "クッキー", "ビスケット", "カステラ", "大福", "みたらし団子", "どら焼き", "たい焼き", "羊羹", "最中", "おせんべい", "チョコレート", "ナッツ", "干し芋", "はちみつトースト"]
  ];
  const seasonalFoodDays = [3, 9, 15, 21, 27];
  const seasonalFoodHighlights = [
    ["お雑煮", "ぶり大根", "七草がゆ", "白菜の鍋", "ゆず大根"],
    ["菜の花のおひたし", "ふきのとうの天ぷら", "はっさく", "せり鍋", "わかさぎの天ぷら"],
    ["桜餅", "はまぐりのお吸い物", "たけのこご飯", "ホタルイカの酢味噌和え", "いちご大福"],
    ["春キャベツのパスタ", "そら豆ご飯", "桜えびのかき揚げ", "新玉ねぎのスープ", "山菜そば"],
    ["柏餅", "初がつおのお刺身", "新じゃがのコロッケ", "びわ", "アスパラガスの天ぷら"],
    ["梅そうめん", "あじの南蛮漬け", "新生姜の甘酢漬け", "水無月", "さくらんぼ"],
    ["すいか", "焼きとうもろこし", "桃", "うなぎの蒲焼き", "ゴーヤーチャンプルー"],
    ["冷やし中華", "なすの揚げびたし", "枝豆の塩ゆで", "いちじく", "梨"],
    ["栗ご飯", "さんまの塩焼き", "梨のコンポート", "さつまいもの甘煮", "いちじくのヨーグルト"],
    ["柿", "栗のモンブラン", "かぼちゃプリン", "銀杏の塩煎り", "秋鮭のちゃんちゃん焼き"],
    ["白菜と豚肉の重ね蒸し", "牡蠣フライ", "かぶのポタージュ", "焼きみかん", "ゆずのはちみつ漬け"],
    ["ぶりしゃぶ", "りんごのシナモン煮", "大根のおでん", "ゆず味噌のふろふき大根", "温かいおしるこ"]
  ];

  const now = new Date();
  const japanNow = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Tokyo" }));
  const daySeed = Math.floor(Date.UTC(japanNow.getFullYear(), japanNow.getMonth(), japanNow.getDate()) / 86400000);
  const dateEl = document.querySelector("#daily-date");
  const yearEl = document.querySelector("#year");
  const trigger = document.querySelector("#daily-trigger");
  const area = document.querySelector("#fortune-area");
  const form = document.querySelector("#birthday-form");
  const input = document.querySelector("#birthday");
  const result = document.querySelector("#fortune-result");
  const changeButton = document.querySelector("#birthday-change");
  const storageKey = "lunaBirthday";

  function normalizeBirthday(value) {
    const text = value.trim().replace(/[０-９]/g, (digit) => String.fromCharCode(digit.charCodeAt(0) - 0xfee0));
    const digits = /^\d{8}$/.test(text) ? text : /^\d{4}[-/]\d{2}[-/]\d{2}$/.test(text) ? text.replace(/[-/]/g, "") : "";
    if (!digits) return null;
    const year = Number(digits.slice(0, 4));
    const month = Number(digits.slice(4, 6));
    const day = Number(digits.slice(6, 8));
    const date = new Date(0);
    date.setUTCFullYear(year, month - 1, day);
    if (year < 1 || date.getUTCFullYear() !== year || date.getUTCMonth() !== month - 1 || date.getUTCDate() !== day) return null;
    const normalized = `${digits.slice(0, 4)}-${digits.slice(4, 6)}-${digits.slice(6, 8)}`;
    const today = `${japanNow.getFullYear()}-${String(japanNow.getMonth() + 1).padStart(2, "0")}-${String(japanNow.getDate()).padStart(2, "0")}`;
    return normalized <= today ? normalized : null;
  }

  function readBirthday(field) {
    const birthday = normalizeBirthday(field.value);
    field.setCustomValidity(birthday ? "" : "実在する生年月日を西暦8桁で入力してください。例：19851025（未来の日付は入力できません）");
    if (!birthday) { field.reportValidity(); return null; }
    field.value = birthday.replaceAll("-", "");
    return birthday;
  }
  document.querySelectorAll("#birthday, #reading-birthday").forEach((field) => {
    field.addEventListener("input", () => field.setCustomValidity(""));
  });

  if (dateEl) dateEl.textContent = `${japanNow.getFullYear()}年${japanNow.getMonth() + 1}月${japanNow.getDate()}日`;
  if (yearEl) yearEl.textContent = japanNow.getFullYear();

  const hashBirthday = (birthday) => birthday.replaceAll("-", "").split("").reduce((sum, digit, index) => sum + Number(digit) * (index + 3), 0);
  const dailyIndex = (birthday, offset) => (japanNow.getDate() - 1 + hashBirthday(birthday) + offset) % 31;

  function luckyColor(birthday) {
    const groupCount = luckyColorGroups.length;
    const index = (daySeed + hashBirthday(birthday)) % (groupCount * luckyColorGroups[0].length);
    return luckyColorGroups[index % groupCount][Math.floor(index / groupCount)];
  }

  function luckyAction(birthday) {
    const groupCount = luckyActionGroups.length;
    const index = (daySeed + hashBirthday(birthday) + 7) % (groupCount * luckyActionGroups[0].length);
    return luckyActionGroups[index % groupCount][Math.floor(index / groupCount)];
  }

  function luckyFood(birthday) {
    const month = japanNow.getMonth();
    const day = japanNow.getDate();
    const seasonalSlot = seasonalFoodDays.indexOf(day);
    if (seasonalSlot !== -1) {
      return seasonalFoodHighlights[month][(seasonalSlot + hashBirthday(birthday)) % seasonalFoodDays.length];
    }
    // うるう日は追加の一品を使い、ほかの日の並びを変えない。
    if (month === 1 && day === 29) return "フルーツポンチ";
    const dayOfYear = Math.floor((Date.UTC(japanNow.getFullYear(), month, day) - Date.UTC(japanNow.getFullYear(), 0, 1)) / 86400000);
    const seasonalBefore = month * seasonalFoodDays.length + seasonalFoodDays.filter((date) => date < day).length;
    const leapDayPassed = month > 1 && new Date(japanNow.getFullYear(), 1, 29).getMonth() === 1 ? 1 : 0;
    const foodIndex = (dayOfYear - seasonalBefore - leapDayPassed + hashBirthday(birthday)) % 305;
    return everydayFoodGroups[foodIndex % 10][Math.floor(foodIndex / 10)];
  }

  function luckyNumber(seed) {
    // 日付と生年月日を混ぜ、単純な9日周期を避ける。
    let value = Math.imul(seed ^ (seed >>> 16), 0x45d9f3b);
    value = Math.imul(value ^ (value >>> 16), 0x45d9f3b);
    return fortunes.numbers[((value ^ (value >>> 16)) >>> 0) % fortunes.numbers.length];
  }

  function showFortune(birthday) {
    const seed = hashBirthday(birthday) + daySeed;
    const month = japanNow.getMonth();
    const colorName = luckyColor(birthday);
    document.querySelector("#lucky-color").textContent = colorName;
    const colorPalettes = [
      ["#d93c42", "#f19fbd", "#f4b9cd", "#e987ad", "#7e2945"],
      ["#f5a344", "#f3d143", "#f4e45e", "#f5ebcd", "#c6a24a"],
      ["#489769", "#a7ce60", "#b3dfcf", "#89935c", "#285b47"],
      ["#3569bf", "#b0ddf1", "#90c8ec", "#263653", "#4ab5be"],
      ["#8852a1", "#cfbce3", "#b6a0d7", "#e1d4ed", "#643b7e"],
      ["#ffffff", "#f4efdc", "#96979e", "#c0c3c9", "#252525"],
      ["#d8c5a9", "#805837", "#c39865", "#9c7b64", "#5c3e32"],
      ["#f9d4df", "#f29d91", "#ee8c82", "#f2ebbc", "#d1e4ce"]
    ];
    const colorGroup = luckyColorGroups.findIndex((group) => group.includes(colorName));
    if (colorGroup !== -1) document.querySelector("#color-swatch").style.backgroundColor = colorPalettes[colorGroup][luckyColorGroups[colorGroup].indexOf(colorName)];
    document.querySelector("#power-food").textContent = luckyFood(birthday);
    document.querySelector("#lucky-action").textContent = luckyAction(birthday);
    document.querySelector("#lucky-number").textContent = luckyNumber(seed);
    document.querySelector("#daily-message").textContent = `${monthlyMessageLeads[month]}${dailyMessages[dailyIndex(birthday, 17)]}`;
    form.hidden = true;
    result.hidden = false;
    area.hidden = false;
    trigger.setAttribute("aria-expanded", "true");
    document.querySelector("#daily-card-note").textContent = "今日の占いを表示しました";
  }

  function openDailyFortune() {
    const savedBirthday = localStorage.getItem(storageKey);
    area.hidden = false;
    trigger.setAttribute("aria-expanded", "true");
    if (savedBirthday) {
      showFortune(savedBirthday);
    } else {
      result.hidden = true;
      form.hidden = false;
      input.focus({ preventScroll: true });
    }
    area.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  trigger.addEventListener("click", openDailyFortune);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const birthday = readBirthday(input);
    if (!birthday) return;
    localStorage.setItem(storageKey, birthday);
    showFortune(birthday);
  });
  changeButton.addEventListener("click", () => {
    const savedBirthday = localStorage.getItem(storageKey) || "";
    input.value = savedBirthday.replaceAll("-", "");
    result.hidden = true;
    form.hidden = false;
    input.focus();
  });

  const nineStars = ["九紫火星", "八白土星", "七赤金星", "六白金星", "五黄土星", "四緑木星", "三碧木星", "二黒土星", "一白水星"];
  const eto60 = [
    "寝虎", "野兎", "出世竜", "王様蛇", "兵隊馬", "野羊", "大猿", "家鳥", "狂犬", "勇猪",
    "野鼠", "耕牛", "暴虎", "家兎", "上り竜", "怒り蛇", "種馬", "毛羊", "王様猿", "水鳥",
    "猟犬", "遊猪", "木鼠", "水牛", "走虎", "月兎", "隠し竜", "寝蛇", "競馬", "白羊",
    "赤猿", "闘鳥", "野犬", "病猪", "家鼠", "牧牛", "母虎", "玉兎", "下り竜", "長蛇",
    "神馬", "病羊", "山猿", "野鳥", "猛犬", "家猪", "溝鼠", "牽牛", "猛虎", "狡兎",
    "寝竜", "巻蛇", "荷馬", "物言羊", "芸猿", "軍鳥", "愛犬", "荒猪", "寺鼠", "乳牛"
  ];
  const getsumeiTable = {
    A: [8, 8, 6, 5, 4, 3, 2, 1, 9, 8, 7, 6],
    B: [2, 1, 9, 8, 7, 6, 5, 4, 3, 2, 1, 9],
    C: [5, 4, 3, 2, 1, 9, 8, 7, 2, 5, 4, 3]
  };
  const keishaTable = {
    1: [6, 4, 3, 2, 1, 9, 8, 7, 6],
    2: [6, 1, 4, 3, 2, 1, 9, 8, 7],
    3: [7, 6, 4, 4, 3, 2, 1, 9, 8],
    4: [8, 7, 6, 6, 4, 3, 2, 1, 9],
    5: [9, 8, 7, 6, 3, 4, 3, 2, 1],
    6: [1, 9, 8, 7, 6, 9, 4, 3, 2],
    7: [2, 1, 9, 8, 7, 6, 4, 4, 3],
    8: [3, 2, 1, 9, 8, 7, 6, 6, 4],
    9: [4, 3, 2, 1, 9, 8, 7, 6, 4]
  };
  const sameStarKeisha = {
    1: 9,
    2: 6,
    3: 4,
    4: 3,
    6: 2,
    7: 8,
    8: 7,
    9: 1
  };
  const starMessages = {
    "一白水星": "しなやかな感性と深い思いやりを持つ人。静かな強さで、人の心に寄り添えます。",
    "二黒土星": "誠実で包容力にあふれた人。こつこつ積み重ねる力が、大きな信頼を育てます。",
    "三碧木星": "明るさと行動力に恵まれた人。新しい風を起こす素直なエネルギーが魅力です。",
    "四緑木星": "調和を大切にし、ご縁を結ぶ人。やさしい言葉と気配りが幸運を運びます。",
    "五黄土星": "強い意志と存在感を持つ人。困難さえ力に変え、周囲を動かす器があります。",
    "六白金星": "高い志と責任感を持つ人。凛とした決断力で、目標へまっすぐ進めます。",
    "七赤金星": "人を笑顔にする華やかな人。会話や楽しみを通して豊かさを引き寄せます。",
    "八白土星": "変化を力に変える粘り強い人。節目を見極め、人生を着実に築けます。",
    "九紫火星": "直感と美意識に恵まれた人。物事の本質を見抜き、周囲を明るく照らします。"
  };
  const firstButton = document.querySelector("#first-reading-button");
  const firstPanel = document.querySelector("#first-reading-panel");
  const menuDetail = document.querySelector("#menu-detail");
  const menuDetailTitle = document.querySelector("#menu-detail-title");
  const menuDetailCopy = document.querySelector("#menu-detail-copy");
  const menuButtons = document.querySelectorAll(".menu-card-button");
  const menuTopics = {
    work: ["仕事運", "あなたの強みや働き方を見つめ、仕事で一歩踏み出すときに大切にしたいことを考えるテーマです。"],
    money: ["金運", "お金との向き合い方や、日々の選択の中で豊かさを育てるヒントを考えるテーマです。"],
    love: ["恋愛・結婚運", "あなたの愛情の表し方を知り、無理のない心地よい関係を育てるためのテーマです。"],
    compatibility: ["相性鑑定", "ふたりそれぞれの特徴を知り、違いを生かした関係づくりを考えるテーマです。相手の生年月日を使う個別の相性結果は、現在の無料基本鑑定には含まれません。"],
    year: ["今年の運勢", "一年の過ごし方や、目標に向かうための行動を見つめるテーマです。年運の個別結果は、現在の無料基本鑑定には含まれません。"],
    direction: ["吉方位", "出かける目的や時期に合わせて方位を考えるテーマです。方位の個別計算は、現在の無料基本鑑定には含まれません。"]
  };
  const readingForm = document.querySelector("#reading-birthday-form");
  const readingBirthday = document.querySelector("#reading-birthday");
  const readingGender = document.querySelector("#reading-gender");
  const birthStars = document.querySelector("#birth-stars");
  const readingResult = document.querySelector("#luna-reading-result");
  let currentStars = null;

  function digitalRoot(value) {
    while (value > 9) value = String(value).split("").reduce((a, b) => a + Number(b), 0);
    return value;
  }

  function monthPeriodIndex(month, day) {
    const value = month * 100 + day;
    if (value >= 204 && value <= 305) return 0;
    if (value >= 306 && value <= 404) return 1;
    if (value >= 405 && value <= 505) return 2;
    if (value >= 506 && value <= 605) return 3;
    if (value >= 606 && value <= 706) return 4;
    if (value >= 707 && value <= 807) return 5;
    if (value >= 808 && value <= 907) return 6;
    if (value >= 908 && value <= 1008) return 7;
    if (value >= 1009 && value <= 1107) return 8;
    if (value >= 1108 && value <= 1206) return 9;
    if (value >= 1207 || value <= 105) return 10;
    return 11;
  }

  function calculateStars(dateString, gender) {
    const [rawYear, month, day] = dateString.split("-").map(Number);
    const year = (month < 2 || (month === 2 && day < 4)) ? rawYear - 1 : rawYear;
    let normalizedHonmei = 11 - digitalRoot(year);
    while (normalizedHonmei > 9) normalizedHonmei -= 9;
    while (normalizedHonmei < 1) normalizedHonmei += 9;
    const honmei = nineStars[9 - normalizedHonmei];
    const group = [1, 4, 7].includes(normalizedHonmei) ? "A" : [2, 5, 8].includes(normalizedHonmei) ? "B" : "C";
    const getsumeiNumber = getsumeiTable[group][monthPeriodIndex(month, day)];
    let keishaNumber;
    if (normalizedHonmei === getsumeiNumber) {
      keishaNumber = normalizedHonmei === 5
        ? (gender === "female" ? 6 : 7)
        : sameStarKeisha[normalizedHonmei];
    } else {
      keishaNumber = keishaTable[normalizedHonmei][getsumeiNumber - 1];
    }
    const cycle = ((year - 1926) % 60 + 60) % 60;
    return {
      honmei,
      getsumei: nineStars[9 - getsumeiNumber],
      keisha: nineStars[9 - keishaNumber],
      eto: eto60[cycle]
    };
  }

  function openFirstReading() {
    firstPanel.hidden = false;
    firstButton.setAttribute("aria-expanded", "true");
    birthStars.hidden = true;
    readingResult.hidden = true;
    readingForm.hidden = false;
    const saved = localStorage.getItem(storageKey);
    if (saved) readingBirthday.value = saved.replaceAll("-", "");
    firstPanel.scrollIntoView({ behavior: "smooth", block: "center" });
    readingBirthday.focus({ preventScroll: true });
  }

  menuButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const topic = menuTopics[button.dataset.topic];
      if (!topic) return;
      menuButtons.forEach((item) => item.setAttribute("aria-expanded", String(item === button)));
      menuDetailTitle.textContent = topic[0];
      menuDetailCopy.textContent = topic[1];
      menuDetail.hidden = false;
      menuDetail.scrollIntoView({ behavior: "smooth", block: "center" });
      menuDetailTitle.focus({ preventScroll: true });
    });
  });
  document.querySelector("#menu-detail-start").addEventListener("click", openFirstReading);

  firstButton.addEventListener("click", openFirstReading);
  document.querySelector("#hero-first-reading").addEventListener("click", openFirstReading);
  readingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const birthday = readBirthday(readingBirthday);
    if (!birthday) return;
    if (!readingGender.value) return;
    currentStars = calculateStars(birthday, readingGender.value);
    localStorage.setItem(storageKey, birthday);
    document.querySelector("#honmei-star").textContent = currentStars.honmei;
    document.querySelector("#getsumei-star").textContent = currentStars.getsumei;
    document.querySelector("#keisha-star").textContent = currentStars.keisha;
    document.querySelector("#eto-sign").textContent = currentStars.eto;
    readingForm.hidden = true;
    readingResult.hidden = true;
    birthStars.hidden = false;
    birthStars.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  document.querySelector("#change-reading-birthday").addEventListener("click", () => {
    birthStars.hidden = true;
    readingForm.hidden = false;
    readingBirthday.focus();
  });

  document.querySelector("#start-luna-reading").addEventListener("click", () => {
    if (!currentStars) return;
    document.querySelector("#reading-text").innerHTML = `<p><strong>${currentStars.honmei}</strong>を本命星に持つあなたは、${starMessages[currentStars.honmei]}</p><p>心の内側には<strong>${currentStars.getsumei}</strong>の性質が息づき、${starMessages[currentStars.getsumei]}</p><p><strong>${currentStars.keisha}</strong>の傾斜と<strong>${currentStars.eto}</strong>の気質が重なることで、あなたならではの個性と魅力が生まれています。</p>`;
    birthStars.hidden = true;
    readingResult.hidden = false;
    readingResult.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  document.querySelector("#restart-reading").addEventListener("click", openFirstReading);
})();
