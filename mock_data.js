const MOCK_DATA = [
    {
        id: "k-2-1", year: "R4准", category: "国語",
        question: "次の熟語の読み方は？\n\n「楽屋」（がくや）",
        options: ["ア 訓＋訓", "イ 音＋音", "ウ 音＋訓(重箱)", "エ 訓＋音(湯桶)"],
        answer: "ウ 音＋訓(重箱)", explanation: "楽(ガク/音)＋屋(や/訓)。重箱読みです。"
    },
    {
        id: "k-2-2", year: "R4准", category: "国語",
        question: "次の熟語の読み方は？\n\n「味方」（みかた）",
        options: ["ア 訓＋訓", "イ 音＋音", "ウ 音＋訓(重箱)", "エ 訓＋音(湯桶)"],
        answer: "ウ 音＋訓(重箱)", explanation: "味(ミ/音)＋方(かた/訓)。重箱読みです。"
    },
    {
        id: "k-2-3", year: "R4准", category: "国語",
        question: "次の熟語の読み方は？\n\n「青空」（あおぞら）",
        options: ["ア 訓＋訓", "イ 音＋音", "ウ 音＋訓(重箱)", "エ 訓＋音(湯桶)"],
        answer: "ア 訓＋訓", explanation: "青(あお/訓)＋空(そら/訓)。訓読み同士です。"
    },
    {
        id: "k-2-4", year: "R4准", category: "国語",
        question: "次の熟語の読み方は？\n\n「合図」（あいず）",
        options: ["ア 訓＋訓", "イ 音＋音", "ウ 音＋訓(重箱)", "エ 訓＋音(湯桶)"],
        answer: "エ 訓＋音(湯桶)", explanation: "合(あい/訓)＋図(ズ/音)。湯桶読みです。"
    },
    {
        id: "k-2-5", year: "R4准", category: "国語",
        question: "次の熟語の読み方は？\n\n「新芽」（しんめ）",
        options: ["ア 訓＋訓", "イ 音＋音", "ウ 音＋訓(重箱)", "エ 訓＋音(湯桶)"],
        answer: "ウ 音＋訓(重箱)", explanation: "新(シン/音)＋芽(め/訓)。重箱読みです。"
    },
    {
        id: "k-3-1", year: "R4准", category: "国語",
        question: "熟語の構成は？\n\n「未知」",
        options: ["似た意味", "反対の意味", "修飾", "目的語", "打ち消し"],
        answer: "打ち消し", explanation: "「未だ知らず」。打ち消しの意味を含みます。"
    },
    {
        id: "k-3-2", year: "R4准", category: "国語",
        question: "熟語の構成は？\n\n「探求」",
        options: ["似た意味", "反対の意味", "修飾", "目的語", "打ち消し"],
        answer: "似た意味", explanation: "探る＋求める。似た意味の字を重ねています。"
    },
    {
        id: "k-3-3", year: "R4准", category: "国語",
        question: "熟語の構成は？\n\n「後退」",
        options: ["似た意味", "反対の意味", "修飾", "目的語", "打ち消し"],
        answer: "修飾", explanation: "後ろへ＋退く。上の字が下の字を修飾しています。"
    },
    {
        id: "k-3-4", year: "R4准", category: "国語",
        question: "熟語の構成は？\n\n「進退」",
        options: ["似た意味", "反対の意味", "修飾", "目的語", "打ち消し"],
        answer: "反対の意味", explanation: "進む⇔退く。反対の意味。"
    },
    {
        id: "k-3-5", year: "R4准", category: "国語",
        question: "熟語の構成は？\n\n「帰国」",
        options: ["似た意味", "反対の意味", "修飾", "目的語", "打ち消し"],
        answer: "目的語", explanation: "国「に」帰る。下の字が動作の対象（目的語）です。"
    }
];
