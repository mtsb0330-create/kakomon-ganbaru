/**
 * 看護入試パス Application Logic
 */

const app = {
    state: {
        questions: [],
        currentQuizList: [],
        currentIndex: 0,
        score: 0,
        mode: 'random',
        wrongData: {},
        editingId: null // 編集中のID
    },

    init: function () {
        this.loadWrongData();
        this.loadQuestions();
        this.updateHomeCount();
        console.log("App initialized.");
    },

    // -----------------------------------------
    // データ管理 (LocalStorage)
    // -----------------------------------------
    loadQuestions: function () {
        // LocalStorageから問題データをロード
        const saved = localStorage.getItem('nursing_questions');
        if (saved) {
            try {
                this.state.questions = JSON.parse(saved);
            } catch (e) {
                this.state.questions = MOCK_DATA || [];
            }
        } else {
            // 初回はモックデータを使用
            this.state.questions = MOCK_DATA ? [...MOCK_DATA] : [];
        }
    },

    saveQuestions: function () {
        localStorage.setItem('nursing_questions', JSON.stringify(this.state.questions));
        this.updateHomeCount();
        this.renderAdminList(); // リスト更新
    },

    resetToDefault: function () {
        if (confirm("全ての問題を初期データ（モックデータ）に戻しますか？追加したデータは消えます。")) {
            this.state.questions = MOCK_DATA ? [...MOCK_DATA] : [];
            this.saveQuestions();
            alert("リセットしました。");
            this.renderAdminList();
        }
    },

    exportData: function () {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.state.questions, null, 2));
        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", "nursing_exam_questions.json");
        document.body.appendChild(downloadAnchorNode);
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    },

    importData: function (input) {
        const file = input.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const json = JSON.parse(e.target.result);
                if (Array.isArray(json)) {
                    if (confirm("現在のデータを上書きして読み込みますか？")) {
                        this.state.questions = json;
                        this.saveQuestions();
                        alert("読み込み完了！");
                        this.renderAdminList();
                    }
                } else {
                    alert("データ形式が正しくありません。");
                }
            } catch (err) {
                alert("ファイルの読み込みに失敗しました。");
            }
        };
        reader.readAsText(file);
    },

    updateHomeCount: function () {
        const el = document.getElementById('total-count');
        if (el) el.textContent = this.state.questions.length;
    },

    // -----------------------------------------
    // 間違いBOX
    // -----------------------------------------
    loadWrongData: function () {
        const saved = localStorage.getItem('nursing_wrong_box');
        if (saved) {
            try { this.state.wrongData = JSON.parse(saved); } catch (e) { }
        }
    },

    saveWrongData: function () {
        localStorage.setItem('nursing_wrong_box', JSON.stringify(this.state.wrongData));
    },

    registerWrong: function (id) {
        this.state.wrongData[id] = { count: 0, lastDate: Date.now() };
        this.saveWrongData();
    },

    registerCorrect: function (id) {
        if (this.state.wrongData[id]) {
            this.state.wrongData[id].count++;
            this.state.wrongData[id].lastDate = Date.now();
            if (this.state.wrongData[id].count >= 3) {
                delete this.state.wrongData[id];
            }
            this.saveWrongData();
        }
    },

    // -----------------------------------------
    // クイズ Logic
    // -----------------------------------------
    startQuiz: function (mode) {
        this.state.mode = mode;
        this.state.score = 0;
        this.state.currentIndex = 0;
        let list = [];

        if (mode === 'random') {
            list = [...this.state.questions].sort(() => Math.random() - 0.5);
        } else if (mode === 'wrong') {
            const wrongIds = Object.keys(this.state.wrongData);
            if (wrongIds.length === 0) {
                alert("間違いBOXは空です！素晴らしい！");
                return;
            }
            list = this.state.questions.filter(q => wrongIds.includes(q.id));
            list.sort(() => Math.random() - 0.5);
        } else if (mode === 'mini') {
            list = [...this.state.questions].sort(() => Math.random() - 0.5).slice(0, 10);
        }

        if (list.length === 0) {
            alert("問題がありません。まずは問題を追加してください。");
            return;
        }

        this.state.currentQuizList = list;
        this.showScreen('screen-quiz');
        this.renderQuestion();
    },

    startMiniExam: function () {
        this.startQuiz('mini');
    },

    renderQuestion: function () {
        const q = this.state.currentQuizList[this.state.currentIndex];
        const total = this.state.currentQuizList.length;

        document.getElementById('next-btn').classList.remove('show');
        document.getElementById('explanation-area').classList.remove('show');

        document.getElementById('quiz-progress').textContent = `${this.state.currentIndex + 1} / ${total}`;
        document.getElementById('quiz-category').textContent = q.category;
        document.getElementById('quiz-year').textContent = `${q.year}年`;
        document.getElementById('question-text').textContent = q.question;

        const container = document.getElementById('options-container');
        container.innerHTML = '';

        q.options.forEach((opt, idx) => {
            const btn = document.createElement('div');
            btn.className = 'option-btn';
            btn.textContent = opt;
            btn.onclick = () => this.checkAnswer(btn, opt, q);
            container.appendChild(btn);
        });

        document.getElementById('explanation-text').innerHTML = q.explanation;
    },

    checkAnswer: function (btnElement, selectedOpt, questionData) {
        if (document.getElementById('explanation-area').classList.contains('show')) return;

        const isCorrect = (selectedOpt === questionData.answer);
        const options = document.querySelectorAll('.option-btn');

        if (isCorrect) {
            btnElement.classList.add('correct');
            this.state.score++;
            this.registerCorrect(questionData.id);
        } else {
            btnElement.classList.add('wrong');
            this.registerWrong(questionData.id);
            options.forEach(optBtn => {
                if (optBtn.textContent === questionData.answer) {
                    optBtn.classList.add('correct');
                }
            });
        }

        document.getElementById('explanation-area').classList.add('show');
        document.getElementById('next-btn').classList.add('show');
    },

    nextQuestion: function () {
        this.state.currentIndex++;
        if (this.state.currentIndex < this.state.currentQuizList.length) {
            this.renderQuestion();
        } else {
            this.showResult();
        }
    },

    showResult: function () {
        this.showScreen('screen-result');
        const total = this.state.currentQuizList.length;
        document.getElementById('result-score').textContent = `${this.state.score} / ${total}`;
    },

    // -----------------------------------------
    // Admin Logic
    // -----------------------------------------
    renderAdminList: function () {
        const listEl = document.getElementById('admin-question-list');
        listEl.innerHTML = '';
        this.state.questions.forEach((q, idx) => {
            const item = document.createElement('div');
            item.className = 'question-list-item';
            item.innerHTML = `
                <div class="q-preview">
                    <b>[${q.year} ${q.category}]</b> ${q.question}
                </div>
                <div class="q-actions">
                    <button onclick="app.showEditForm(${idx})">編集</button>
                    <!-- <button onclick="app.deleteQuestion(${idx})">削除</button> -->
                </div>
            `;
            listEl.appendChild(item);
        });
    },

    showEditForm: function (idx = null) {
        this.showScreen('screen-edit');
        if (idx === null) {
            // 新規作成
            this.state.editingId = null;
            document.getElementById('edit-id').value = '';
            document.getElementById('edit-year').value = '';
            document.getElementById('edit-category').value = '国語';
            document.getElementById('edit-question').value = '';
            document.getElementById('edit-opt1').value = '';
            document.getElementById('edit-opt2').value = '';
            document.getElementById('edit-opt3').value = '';
            document.getElementById('edit-opt4').value = '';
            document.getElementById('edit-answer-idx').value = '0';
            document.getElementById('edit-explanation').value = '';
        } else {
            // 編集
            const q = this.state.questions[idx];
            this.state.editingId = idx; // 配列インデックスを使用（簡易的）
            document.getElementById('edit-id').value = q.id;
            document.getElementById('edit-year').value = q.year;
            document.getElementById('edit-category').value = q.category;
            document.getElementById('edit-question').value = q.question;
            document.getElementById('edit-opt1').value = q.options[0];
            document.getElementById('edit-opt2').value = q.options[1];
            document.getElementById('edit-opt3').value = q.options[2];
            document.getElementById('edit-opt4').value = q.options[3];

            // 正解インデックスを探す
            let ansIdx = q.options.indexOf(q.answer);
            if (ansIdx === -1) ansIdx = 0;
            document.getElementById('edit-answer-idx').value = ansIdx;

            document.getElementById('edit-explanation').value = q.explanation;
        }
    },

    saveQuestion: function () {
        const year = document.getElementById('edit-year').value;
        const category = document.getElementById('edit-category').value;
        const question = document.getElementById('edit-question').value;
        const opt1 = document.getElementById('edit-opt1').value;
        const opt2 = document.getElementById('edit-opt2').value;
        const opt3 = document.getElementById('edit-opt3').value;
        const opt4 = document.getElementById('edit-opt4').value;
        const ansIdx = parseInt(document.getElementById('edit-answer-idx').value);
        const explanation = document.getElementById('edit-explanation').value;

        if (!question || !opt1 || !opt2) {
            alert("問題文と選択肢は必須です。");
            return;
        }

        const options = [opt1, opt2, opt3, opt4].filter(o => o); // 空の選択肢は除外

        const newData = {
            id: this.state.editingId !== null ? this.state.questions[this.state.editingId].id : 'q-' + Date.now(),
            year,
            category,
            question,
            options,
            answer: options[ansIdx] || options[0],
            explanation
        };

        if (this.state.editingId !== null) {
            // 更新
            this.state.questions[this.state.editingId] = newData;
        } else {
            // 新規追加
            this.state.questions.push(newData);
        }

        this.saveQuestions();
        this.showScreen('screen-admin');
    },

    deleteQuestion: function () {
        if (this.state.editingId !== null) {
            if (confirm("本当に削除しますか？")) {
                this.state.questions.splice(this.state.editingId, 1);
                this.saveQuestions();
                this.showScreen('screen-admin');
            }
        }
    },

    // -----------------------------------------
    // 画面遷移
    // -----------------------------------------
    showScreen: function (screenId) {
        document.querySelectorAll('.screen').forEach(el => el.classList.remove('active'));
        document.getElementById(screenId).classList.add('active');

        document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
        if (screenId === 'screen-home') {
            document.querySelector('.nav-item:nth-child(1)').classList.add('active');
        } else if (screenId === 'screen-admin' || screenId === 'screen-edit') {
            document.querySelector('.nav-item:nth-child(3)').classList.add('active');
            if (screenId === 'screen-admin') this.renderAdminList();
        }
    }
};

window.onload = function () {
    app.init();
};
