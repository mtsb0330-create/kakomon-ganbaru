if (typeof MOCK_DATA !== 'undefined') {
    MOCK_DATA.push(
        // --- 大問二：四字熟語穴埋め ---
        {
            id: "r5-k-2-1", year: "R5准", category: "国語",
            question: "四字熟語の空欄に入る漢字は？\n\n換骨奪□",
            options: ["胎", "体", "隊", "帯"],
            answer: "胎", explanation: "換骨奪胎（かんこつだったい）。"
        },
        {
            id: "r5-k-2-2", year: "R5准", category: "国語",
            question: "四字熟語の空欄に入る漢字は？\n\n博□強記",
            options: ["覧", "乱", "蘭", "欄"],
            answer: "覧", explanation: "博覧強記（はくらんきょうき）。"
        },
        {
            id: "r5-k-2-3", year: "R5准", category: "国語",
            question: "四字熟語の空欄に入る漢字は？\n\n明□止水",
            options: ["鏡", "強", "京", "教"],
            answer: "鏡", explanation: "明鏡止水（めいきょうしすい）。"
        },
        {
            id: "r5-k-2-4", year: "R5准", category: "国語",
            question: "四字熟語の空欄に入る漢字は？\n\n曲学□世",
            options: ["阿", "亜", "悪", "安"],
            answer: "阿", explanation: "曲学阿世（きょくがくあせい）。"
        },
        {
            id: "r5-k-2-5", year: "R5准", category: "国語",
            question: "四字熟語の空欄に入る漢字は？\n\n□倶戴天",
            options: ["不", "歩", "布", "普"],
            answer: "不", explanation: "不倶戴天（ふぐたいてん）。"
        },

        // --- 大問三：熟語の構成 ---
        {
            id: "r5-k-3-1", year: "R5准", category: "国語",
            question: "熟語の構成：加熱（レジで加熱する）と同じ構成の熟語は？",
            options: ["出発", "案内", "病院", "求人"],
            answer: "求人", explanation: "加熱（熱を『加える』）＝下が上の目的語。求人（人『を』求める）も同じ構成。"
        },
        {
            id: "r5-k-3-2", year: "R5准", category: "国語",
            question: "熟語の構成：悪意（悪意があったわけではない）と同じ構成の熟語は？",
            options: ["優秀", "平安", "苦楽", "親友"],
            answer: "親友", explanation: "悪意（悪い意）＝上が下を修飾。親友（親しい友）も同じ構成。"
        },
        {
            id: "r5-k-3-3", year: "R5准", category: "国語",
            question: "熟語の構成：頭痛（頭痛がひどい）と同じ構成の熟語は？",
            options: ["開閉", "美容", "雷鳴", "理性"],
            answer: "雷鳴", explanation: "頭痛（頭『が』痛い）＝上が主語、下が述語。雷鳴（雷『が』鳴る）も同じ構成。"
        },
        {
            id: "r5-k-3-4", year: "R5准", category: "国語",
            question: "熟語の構成：未来（未来の夢）と同じ構成の熟語は？",
            options: ["辞典", "不足", "電車", "公園"],
            answer: "不足", explanation: "未来（未だ来ず）＝打ち消しや否定を含む。不足（足らず）も同じ構成。"
        },
        {
            id: "r5-k-3-5", year: "R5准", category: "国語",
            question: "熟語の構成：重文（重文に指定されている）と同じ構成の熟語は？",
            options: ["特急", "人望", "中立", "自覚"],
            answer: "特急", explanation: "重文（重要文化財の略）。特急（特別急行の略）も同じ省略語。"
        },

        // --- 大問四：慣用句 ---
        {
            id: "r5-k-4-1", year: "R5准", category: "国語",
            question: "慣用句：□を懸けて狗肉を売る",
            options: ["羊頭", "牛頭", "馬頭", "豚頭"],
            answer: "羊頭", explanation: "羊頭狗肉（ようとうくにく）。見かけと中身が一致しないこと。"
        },
        {
            id: "r5-k-4-2", year: "R5准", category: "国語",
            question: "慣用句：のれんに□押し",
            options: ["腕", "指", "手", "肩"],
            answer: "腕", explanation: "のれんに腕押し。手応えがないこと。"
        },
        {
            id: "r5-k-4-3", year: "R5准", category: "国語",
            question: "慣用句：ひょうたんから□",
            options: ["駒", "馬", "犬", "猫"],
            answer: "駒", explanation: "ひょうたんから駒（こま）。意外なところから意外なものが出ること。"
        },
        {
            id: "r5-k-4-4", year: "R5准", category: "国語",
            question: "慣用句：□にも衣装",
            options: ["馬子", "孫", "子供", "大人"],
            answer: "馬子", explanation: "馬子（まご）にも衣装。誰でも身なりを整えれば立派に見えること。"
        },
        {
            id: "r5-k-4-5", year: "R5准", category: "国語",
            question: "慣用句：□に短したすきに長し",
            options: ["帯", "紐", "布", "袖"],
            answer: "帯", explanation: "帯（おび）に短したすきに長し。中途半端で役に立たないこと。"
        },

        // --- 大問五：同訓異字（組み合わせ） ---
        {
            id: "r5-k-5-1", year: "R5准", category: "国語",
            question: "a.交通費をセイサンする\nb.過去をセイサンする\n漢字の組み合わせとして正しいのは？",
            options: ["a:精算, b:清算", "a:清算, b:精算", "a:成算, b:清算", "a:精算, b:成算"],
            answer: "a:精算, b:清算", explanation: "金銭の計算は「精算」、関係の整理は「清算」。"
        },
        {
            id: "r5-k-5-2", year: "R5准", category: "国語",
            question: "a.窓を開けてカン気する\nb.注意をカン起する\n漢字の組み合わせとして正しいのは？",
            options: ["a:換, b:喚", "a:喚, b:換", "a:換, b:歓", "a:乾, b:喚"],
            answer: "a:換, b:喚", explanation: "空気を入れ換えるのは「換気」、呼び起こすのは「喚起」。"
        },
        {
            id: "r5-k-5-3", year: "R5准", category: "国語",
            question: "a.体重をハカる\nb.距離をハカる\n漢字の組み合わせとして正しいのは？",
            options: ["a:量, b:測", "a:測, b:量", "a:計, b:測", "a:量, b:計"],
            answer: "a:量, b:測", explanation: "重さは「量る」、長さ・距離は「測る」。"
        },
        {
            id: "r5-k-5-4", year: "R5准", category: "国語",
            question: "a.カタい決心\nb.カタい表情\n漢字の組み合わせとして正しいのは？",
            options: ["a:固, b:硬", "a:硬, b:固", "a:堅, b:硬", "a:固, b:堅"],
            answer: "a:固, b:硬", explanation: "意志がゆるがないのは「固い」、表情や物がこわばっているのは「硬い」。"
        },

        // --- 大問六：類義語・対義語（組み合わせ） ---
        {
            id: "r5-k-6-1", year: "R5准", category: "国語",
            question: "「豊富」の類義語となる二字熟語を作るための正しい文字の組み合わせは？",
            options: ["潤・沢", "宝・庫", "納・得", "量・感"],
            answer: "潤・沢", explanation: "豊富 ≒ 潤沢。"
        },
        {
            id: "r5-k-6-2", year: "R5准", category: "国語",
            question: "「便利」の類義語となる二字熟語を作るための正しい文字の組み合わせは？",
            options: ["重・宝", "納・得", "宝・庫", "量・感"],
            answer: "重・宝", explanation: "便利 ≒ 重宝。"
        },
        {
            id: "r5-k-6-3", year: "R5准", category: "国語",
            question: "「寛大」の対義語となる二字熟語を作るための正しい文字の組み合わせは？",
            options: ["狭・量", "納・得", "潤・沢", "宝・庫"],
            answer: "狭・量", explanation: "寛大（心が広い）⇔ 狭量（心が狭い）。"
        },
        {
            id: "r5-k-6-4", year: "R5准", category: "国語",
            question: "「混沌」の対義語となる二字熟語を作るための正しい文字の組み合わせは？",
            options: ["秩・序", "納・得", "潤・沢", "狭・量"],
            answer: "秩・序", explanation: "混沌（入り混じっている）⇔ 秩序（整っている）。"
        }
    );
}
