var today = new Date();
var day = today.getDate(); //dayに今日の日付が入ってる

//各日付によってBGMのデータを定義
//今回はswitch文を使用
switch (day) {
    case 1:
        var bgmIframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/FbZoJpRm0H4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        var bgmname = '<p>【30分耐久BGM】アトリエと電脳世界 (Atelier and the Cyber World) / しゃろう</p>'
        break;
    case 2:
        var bgmIframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/UFTPasmeMeU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        var bgmname = '<p>広告なしのリラックスした音楽 【作業用・癒し・勉強用BGM】ジブリオーケストラ メドレー</p>'
        break;
    case 3:
        var bgmIframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/P4DGnLQ4Wt8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        var bgmname = '<p>一目で分かる【厳選16曲】作業用ボカロBGM　フル</p>'
        break;
    case 4:
        var bgmIframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/on6ML7bhP2M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        var bgmname = '<p>【勉強用BGM】集中力が上がるモーツァルトの音楽</p>'
        break;
    case 5:
        var bgmIframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/0WvfHHHzhqQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        var bgmname = '<p>有名曲J-POPメドレー 2021🌾日本最高の歌メドレー || 優里、YOASOBI、あいみょん、LISA、米津玄師 、宇多田ヒカル、ヨルシカ🍁音楽 ランキング 最新 2021🍀🎃</p>'
        break;
    case 6:
        var bgmIframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/j2wFb7wQ7Q4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        var bgmname = '<p>【作業用BGM】ボカロ ピアノメドレー10曲</p>'
        break;
    case 7:
        var bgmIframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/hwbnDjSPTm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        var bgmname = '<p>【ディズニー】 人気オルゴールメドレー 【癒しの睡眠用・作業用BGM】</p>'
        break;
    case 8:
        var bgmIframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/_8Czn6wzPIs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        var bgmname = '<p>【作業用】最新版ナユタン星人メドレー【23曲】</p>'
        break;
    case 9:
        var bgmIframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/djl6znXfyMk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        var bgmname = '<p>【30分耐久BGM】SUMMER TRIANGLE / しゃろう</p>'
        break;
    case 10:
        var bgmIframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/W5vMT3JLtiM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        var bgmname = '<p>13時間カフェMUSIC！ジャズ＆ボサノバBGM！勉強＋集中用にも！</p>'
        break;
    case 11:
        var bgmIframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/C_6SLgOZ3HY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        var bgmname = '<p>【30分耐久BGM】Cassette Tape Dream / しゃろう</p>'
        break;
    case 12:
        var bgmIframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/2mlbZQkdf6I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        var bgmname = '<p>クラシック名曲集　30選　長時間BGM　有名な曲</p>'
        break;
    case 13:
        var bgmIframe = '<iframe width="560" height="300" src="https://www.youtube.com/embed/gkvz6l1W0g8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        var bgmname = '<p>【30分耐久BGM】You and Me / しゃろう</p>'
        break;
    case 14:
        var bgmIframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/myHhvYaPIZ0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        var bgmname = '<p>【スターバックスBGM】 スタバで流れる超おしゃれな店内BGM</p>'
        break;
    case 15:
        var bgmIframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/kiRpqb-FlFo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        var bgmname = '<p>ドラクエ歴15年が選ぶ名曲ピアノメドレー</p>'
        break;
    case 16:
        var bgmIframe = ' <iframe width="300" height="180" src="https://www.youtube.com/embed/CvRW7uQXEV8"title="YouTube video player" frameborder="0"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"allowfullscreen></iframe>';
        var bgmname = '<p>やる気を全開にさせるかっこいい曲！最強アニソンメドレー</p>'
        break;
    case 17:
        var bgmIframe = '<iframe width="560" height="300" src="https://www.youtube.com/embed/w5zBwoXOrVM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        var bgmname = '<p>ラスボス感のあるボカロメドレー《10曲》フル</p>'
        break;
    case 18:
        var bgmIframe = '<iframe width="560" height="300" src="https://www.youtube.com/embed/y4nwsBnf72I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        var bgmname = '<p>オルゴール　作業用　睡眠用BGM</p>'
        break;
    case 19:
        var bgmIframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/q-tTJlz79_c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        var bgmname = '<p>【30分耐久BGM】しゅわしゅわハニーレモン350ml (Fizzy Honey Lemon Soda 350ml) / しゃろう</p>'
        break;
    case 20:
        var bgmIframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/11T5T7VvqkM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        var bgmname = '<p>心やすらぐ、癒しのオルゴール【睡眠用BGM】J-POPオルゴール</p>'
        break;
    case 21:
        var bgmIframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/u1inSXny700" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        var bgmname = '<p>【30分耐久BGM】Morning / しゃろう</p>'
        break;
    case 22:
        var bgmIframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/Ju2KHPWP_M4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        var bgmname = '<p>ゆったりジャズBGM - 作業用BGM - 勉強用BGM - のんびり時間！</p>'
        break;
    case 23:
        var bgmIframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/PZY14Vd_P4Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        var bgmname = '<p>YOASOBIメドレー【癒しオルゴール】睡眠・作業用BGM - J-POP Music Box Cover</p>'
        break;
    case 24:
        var bgmIframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/oWIVCqe-aUo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        var bgmname = '<p>【3時間耐久】ボカロオルゴール／初音ミク【作業用BGM】／【疲労回復】／【リラックス効果】／【癒し音楽】</p>'
        break;
    case 25:
        var bgmIframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/mz_CfAtfb1Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        var bgmname = '<p>やる気を全開にさせるカッコイイ曲！テンション跳ね上がる最強アニソンメドレー</p>'
        break;
    case 26:
        var bgmIframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/_o_fD1EgMx8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        var bgmname = '<p>【4K】癒しBGMと爽やかな新緑（鳥のさえずり・川のせせらぎ）／疲れた心身の回復・リラックス効果・勉強中や作業用、目覚めの朝に、または眠れない夜にもどうぞ</p>'
        break;
    case 27:
        var bgmIframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/HgQDVPRTwvg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        var bgmname = '<p>2018年まとめメドレー/ピアノカバー/J POPメドレー/2018年 名曲 邦楽/作業用BGM/Piano Cover/CANACANA</p>'
        break;
    case 28:
        var bgmIframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/tFFHr_Jh14Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        var bgmname = '<p>令和ヒットソング～J-POPオルゴールメドレー【作業用BGM・癒しBGM・睡眠BGM・動画中広告なし】 Official髭男dism、YOASOBI、あいみょん、嵐、Ado</p>'
        break;
    case 29:
        var bgmIframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/h6VdSjyUbbo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        var bgmname = '<p>【30分耐久BGM】10℃ / しゃろう</p>'
        break;
    case 30:
        var bgmIframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/oW8cdNm9b8k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        var bgmname = '<p>【30分耐久BGM】Parade / しゃろう</p>'
        break;
    case 31:
        var bgmIframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/Po4CcOBZEjg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        var bgmname = '<p>かいりきベア ボカロメドレー(作業用BGM)【全21曲】</p>'
        break;
}

//ランダムに生成したBGMを表示する部分のdivを定義
var todayBgmDiv = document.getElementById('today-bgm');
var bgmnameWordDiv = document.getElementById('name-bgm');

//上で定義したdivに生成したiframeを埋め込む
todayBgmDiv.innerHTML = bgmIframe;
bgmnameWordDiv.innerHTML = bgmname;
