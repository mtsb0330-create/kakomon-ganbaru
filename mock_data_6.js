if (typeof MOCK_DATA !== 'undefined') {
    MOCK_DATA.push(
        // --- 大問一：漢字の読み ---
        {
            id: "r7-k-1-1", year: "R7准", category: "国語",
            question: "漢字の読み方は？\n\n『微妙』な言葉の違い",
            options: ["びしょう", "びみょう", "きちょう", "だきょう"],
            answer: "びみょう", explanation: "微妙（びみょう）。"
        },
        {
            id: "r7-k-1-2", year: "R7准", category: "国語",
            question: "漢字の読み方は？\n\n勝利に『貢献』する",
            options: ["けいけん", "こうさん", "かいさん", "こうけん"],
            answer: "こうけん", explanation: "貢献（こうけん）。"
        },
        {
            id: "r7-k-1-3", year: "R7准", category: "国語",
            question: "漢字の読み方は？\n\n新年度の『抱負』",
            options: ["こうふ", "かんぶ", "ほうふ", "さんぶ"],
            answer: "ほうふ", explanation: "抱負（ほうふ）。"
        },
        {
            id: "r7-k-1-4", year: "R7准", category: "国語",
            question: "漢字の読み方は？\n\n人を『慰める』",
            options: ["たしかめる", "ふくめる", "とがめる", "なぐさめる"],
            answer: "なぐさめる", explanation: "慰める（なぐさめる）。"
        },

        // --- 大問二：敬語表現 ---
        {
            id: "r7-k-2-1", year: "R7准", category: "国語",
            question: "【電話で】後ほど母から(      )。",
            options: ["お電話なさいます", "お電話いただきます", "お電話します"],
            answer: "お電話します", explanation: "自分の身内（母）の行動なので謙譲語を選ぶ。「お〜する」が適切。"
        },
        {
            id: "r7-k-2-2", year: "R7准", category: "国語",
            question: "【来客に】コーヒーを(      )ください。",
            options: ["飲んで", "召し上がって", "いただいて"],
            answer: "召し上がって", explanation: "相手の動作には尊敬語を使う。「召し上がる」が適切。"
        },
        {
            id: "r7-k-2-3", year: "R7准", category: "国語",
            question: "【来賓を案内】作品を(      )。",
            options: ["ご覧になりますか", "拝見なさいますか", "ご覧になられますか"],
            answer: "ご覧になりますか", explanation: "「見る」の尊敬語は「ご覧になる」。「拝見」は謙譲語。「ご覧になられる」は二重敬語だが最近は許容されつつあるものの、試験では「ご覧になりますか」が正統。"
        },
        {
            id: "r7-k-2-4", year: "R7准", category: "国語",
            question: "【講演依頼】(      )のですが、よろしいでしょうか。",
            options: ["講演してもらいたい", "ご講演になりたい", "講演していただきたい"],
            answer: "講演していただきたい", explanation: "相手に講演してもらうことをお願いする謙譲表現。「〜していただきたい」が適切。"
        },

        // --- 大問三：類義語 ---
        {
            id: "r7-k-3-1", year: "R7准", category: "国語",
            question: "「傾向」の類義語は？",
            options: ["風習", "風紀", "風潮"],
            answer: "風潮", explanation: "傾向（物事の勢いや趣き）≒ 風潮（世の中の移り変わりや傾向）。"
        },
        {
            id: "r7-k-3-2", year: "R7准", category: "国語",
            question: "「尽力」の類義語は？",
            options: ["向上", "献身", "勤勉"],
            answer: "献身", explanation: "尽力（力をつくす）≒ 献身（身を捧げて尽くす）。"
        },
        {
            id: "r7-k-3-3", year: "R7准", category: "国語",
            question: "「あたかも」の類義語は？",
            options: ["まるで", "とうてい", "少しも"],
            answer: "まるで", explanation: "あたかも（〜のようだ）≒ まるで。"
        }
    );
}
