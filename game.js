// ----------------------------------------------------------------------
// PATCH NOTES (사용자 편집 영역)
// ----------------------------------------------------------------------
const PATCH_NOTES = `
---------
25년 12월 17일
게임제작
---------
`;
// ----------------------------------------------------------------------

// 게임 상태 변수
let gameState = {
    currentQuestionNumber: 0, // 1부터 시작
    score: 0,
    timer: 60,
    timerInterval: null,
    startTime: 0,
    questionStartTime: 0,
    totalSolveTime: 0,
    solvedCount: 0,
    usedQuestionIds: new Set(),
    isGameOver: false,
    currentQuestion: null
};

// DOM 요소
const ui = {
    app: document.getElementById('app'),
    lobbyScreen: document.getElementById('lobby-screen'),
    patchNotesScreen: document.getElementById('patch-notes-screen'),
    gameInfoScreen: document.getElementById('game-info-screen'),
    gamePlayScreen: document.getElementById('game-play-screen'),

    // Buttons
    startBtn: document.getElementById('start-btn'),
    patchNoteBtn: document.getElementById('patch-note-btn'),
    bugReportBtn: document.getElementById('bug-report-btn'),
    patchNotesContent: document.getElementById('patch-notes-content'),

    // Game Elements
    timer: document.getElementById('timer'),
    counter: document.getElementById('question-counter'),
    questionText: document.getElementById('question-text'),
    imageContainer: document.getElementById('question-image-container'),
    choicesContainer: document.getElementById('choices-container'),
    gameOverScreen: document.getElementById('game-over-screen'),
    finalScore: document.getElementById('final-score'),
    avgTime: document.getElementById('avg-time'),
    totalTime: document.getElementById('total-time'),
    retryBtn: document.getElementById('retry-btn'),
    toLobbyBtn: document.getElementById('to-lobby-btn'),
    canvas: document.getElementById('sand-canvas'),
    gameArea: document.getElementById('game-area')
};

// 캔버스 설정
const ctx = ui.canvas ? ui.canvas.getContext('2d') : null;
let particles = [];
let animationId = null;

function resizeCanvas() {
    if (ui.canvas) {
        ui.canvas.width = window.innerWidth;
        ui.canvas.height = window.innerHeight;
    }
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// ----------------------------------------------------------------------
// SCREEN MANAGEMENT
// ----------------------------------------------------------------------

function showLobby() {
    hideAllScreens();
    if (ui.lobbyScreen) ui.lobbyScreen.classList.remove('hidden');
    // 게임 오버 상태 초기화 등은 initGame에서 함
}

function showPatchNotes() {
    hideAllScreens();
    if (ui.patchNotesScreen) {
        ui.patchNotesScreen.classList.remove('hidden');
        if (ui.patchNotesContent) ui.patchNotesContent.textContent = PATCH_NOTES.trim();
    }
}

function openBugReport() {
    // 사용자 요청 링크: https://open.kakao.com/o/gidISY6h
    window.open('https://open.kakao.com/o/gidISY6h', '_blank');
}

function showGamePlay() {
    hideAllScreens();
    if (ui.gamePlayScreen) ui.gamePlayScreen.classList.remove('hidden');
    initGame();
}

function hideAllScreens() {
    if (ui.lobbyScreen) ui.lobbyScreen.classList.add('hidden');
    if (ui.patchNotesScreen) ui.patchNotesScreen.classList.add('hidden');
    if (ui.gameInfoScreen) ui.gameInfoScreen.classList.add('hidden');
    if (ui.gamePlayScreen) ui.gamePlayScreen.classList.add('hidden');
}

// Global scope for HTML onclick access
window.showLobby = showLobby;

// ----------------------------------------------------------------------
// INITIALIZATION
// ----------------------------------------------------------------------

window.onload = function () {
    // 버튼 이벤트 리스너 등록
    if (ui.startBtn) ui.startBtn.onclick = showGamePlay;
    if (ui.patchNoteBtn) ui.patchNoteBtn.onclick = showPatchNotes;
    if (ui.bugReportBtn) ui.bugReportBtn.onclick = openBugReport;

    // 게임 오버 화면의 로비 버튼
    if (ui.toLobbyBtn) ui.toLobbyBtn.onclick = showLobby;

    if (ui.retryBtn) ui.retryBtn.onclick = initGame; // 다시하기는 게임 바로 재시작

    // 패치노트/정보창의 닫기 버튼(X)은 HTML onclick="showLobby()"로 처리됨.

    // 시작 시 로비 보여주기
    showLobby();
};

// ----------------------------------------------------------------------
// GAME LOGIC
// ----------------------------------------------------------------------

function initGame() {
    try {
        console.log("Game Initializing...");
        gameState.currentQuestionNumber = 0;
        gameState.score = 0;
        gameState.timer = 60;
        gameState.totalSolveTime = 0;
        gameState.solvedCount = 0;
        gameState.usedQuestionIds.clear();
        gameState.isGameOver = false;
        gameState.startTime = Date.now();

        if (ui.gameOverScreen) ui.gameOverScreen.classList.add('hidden');

        // 타이머 시작
        clearInterval(gameState.timerInterval);
        gameState.timerInterval = setInterval(updateTimer, 1000);
        updateTimerDisplay();

        nextQuestion();
    } catch (e) {
        console.error("Init Game Error:", e);
        alert("게임 초기화 중 오류 발생: " + e.message);
    }
}

function updateTimer() {
    if (gameState.isGameOver) return;

    gameState.timer--;
    updateTimerDisplay();

    if (gameState.timer <= 0) {
        gameOver();
    }
}

function updateTimerDisplay() {
    if (ui.timer) ui.timer.textContent = gameState.timer;
}

// 문제 출제 로직
function nextQuestion() {
    gameState.currentQuestionNumber++;
    gameState.questionStartTime = Date.now();

    const qNum = gameState.currentQuestionNumber;
    let pool = [];

    try {
        // 난이도 설정
        if (qNum <= 3) {
            pool = window.QUESTIONS_EASY || [];
        } else if (qNum <= 10) {
            pool = window.QUESTIONS_MEDIUM || [];
        } else if (qNum <= 20) {
            pool = [
                ...(window.QUESTIONS_EASY || []),
                ...(window.QUESTIONS_MEDIUM || []),
                ...(window.QUESTIONS_HARD || [])
            ];
        } else {
            pool = window.QUESTIONS_HARD || [];
        }

        // 중복 제거 필터링
        const availableQuestions = pool.filter(q => !gameState.usedQuestionIds.has(q.id));

        if (availableQuestions.length === 0) {
            if (pool.length > 0) {
                const randomIdx = Math.floor(Math.random() * pool.length);
                gameState.currentQuestion = pool[randomIdx];
            } else {
                alert("문제가 더 이상 없습니다! (데이터 부족)");
                gameOver();
                return;
            }
        } else {
            const randomIdx = Math.floor(Math.random() * availableQuestions.length);
            gameState.currentQuestion = availableQuestions[randomIdx];
            gameState.usedQuestionIds.add(gameState.currentQuestion.id);
        }

        renderQuestion();
    } catch (e) {
        console.error("Next Question Error:", e);
        alert("문제 출제 중 오류 발생: " + e.message);
    }
}

function renderQuestion() {
    const q = gameState.currentQuestion;
    if (!q) {
        console.error("No question data");
        return;
    }

    if (ui.counter) ui.counter.textContent = `Q. ${gameState.currentQuestionNumber}`;

    // LaTeX 변환 및 텍스트 설정
    if (ui.questionText) ui.questionText.innerHTML = formatMathToLatex(q.question);

    // 이미지 처리 (안전장치 추가)
    if (ui.imageContainer) {
        if (q.image) {
            ui.imageContainer.innerHTML = `<img src="${q.image}" alt="Question Image">`;
            ui.imageContainer.classList.remove('hidden');
        } else {
            ui.imageContainer.innerHTML = '';
            ui.imageContainer.classList.add('hidden');
        }
    }

    // 버튼 초기화
    if (ui.choicesContainer) {
        const buttons = ui.choicesContainer.querySelectorAll('.choice-btn');
        buttons.forEach((btn, idx) => {
            if (q.choices && q.choices[idx] !== undefined) {
                btn.innerHTML = formatMathToLatex(q.choices[idx]);
                btn.onclick = () => checkAnswer(idx, btn);
                btn.disabled = false;
                btn.style.opacity = '1';
                btn.style.transform = 'none';
                btn.classList.remove('shake');
            } else {
                btn.innerHTML = "-";
                btn.disabled = true;
            }
        });
    }

    // MathJax 렌더링 요청 (비동기)
    if (window.MathJax && ui.gameArea) {
        window.MathJax.typesetPromise && window.MathJax.typesetPromise([ui.gameArea])
            .then(() => {
                // MathJax 변환 후 다시 크기 조절 (수식 크기 고려)
                adjustAllChoicesTextSize();
            })
            .catch((err) => console.log('MathJax error:', err));
    } else {
        // MathJax가 없을 경우 바로 조절
        adjustAllChoicesTextSize();
    }

    // 화면 등장 효과
    if (ui.gameArea) {
        ui.gameArea.style.opacity = '0';
        requestAnimationFrame(() => {
            ui.gameArea.style.transition = 'opacity 0.5s';
            ui.gameArea.style.opacity = '1';
        });
    }
}

/**
 * 모든 선택지 버튼의 텍스트 크기를 버튼 너비에 맞춰 조절합니다.
 */
function adjustAllChoicesTextSize() {
    if (!ui.choicesContainer) return;
    const buttons = ui.choicesContainer.querySelectorAll('.choice-btn');
    buttons.forEach(btn => adjustTextSizeToFit(btn));
}

/**
 * 개별 요소의 텍스트 크기를 조절하여 너비 내에 맞춥니다.
 */
function adjustTextSizeToFit(element) {
    if (!element) return;

    // 초기화
    let fontSize = 32; // CSS 기본값
    element.style.fontSize = fontSize + 'px';
    element.style.whiteSpace = 'nowrap'; // 한 줄 강제 시도

    // 버튼의 실제 사용 가능 너비 (패딩 고려)
    // CSS에서 box-sizing: border-box이므로 clientWidth는 패딩 포함 내부 너비
    // 텍스트가 실제로 들어갈 공간을 체크하기 위해 여유를 둠

    // 줄바꿈 없이 너비가 넘치면 폰트 축소
    while (element.scrollWidth > element.clientWidth && fontSize > 12) {
        fontSize--;
        element.style.fontSize = fontSize + 'px';
    }

    // 최소 크기(12px)까지 줄였는데도 넘치면 줄바꿈 허용
    if (element.scrollWidth > element.clientWidth) {
        element.style.whiteSpace = 'normal';
        element.style.wordBreak = 'keep-all';
    }
}

/**
 * 사용자 입력 텍스트를 LaTeX 수식으로 변환합니다.
 */
function formatMathToLatex(text) {
    if (!text) return "";
    let out = String(text); // 문자열 변환

    // 1. 루트: "루트(식)" or "루트 식" -> $\sqrt{식}$
    out = out.replace(/루트\s*([0-9a-zA-Z\(\)\+\-\*]+)/g, '$\\sqrt{$1}$');

    // 2. 분수: "A/B" -> $\frac{A}{B}$
    out = out.replace(/([0-9a-zA-Z\π]+)\s*\/\s*([0-9a-zA-Z\π]+)/g, '$\\frac{$1}{$2}$');

    // 3. ^ 처리 (inline math로 감싸기)
    // 수정: 괄호()나 빼기(-) 등이 포함된 식도 잡을 수 있도록 정규식 확장
    out = out.replace(/([^\$]|^)([0-9a-zA-Z\(\)\+\-\.]+\^[\{0-9a-zA-Z\+\-\.\}]+)/g, '$1$$$2$$');

    return out;
}

function checkAnswer(selectedIndex, btnElement) {
    if (gameState.isGameOver) return;

    if (!gameState.currentQuestion) return;
    const correctIndex = gameState.currentQuestion.answerIndex;

    if (selectedIndex === correctIndex) {
        // 정답
        handleCorrectAnswer();
    } else {
        // 오답
        if (btnElement) btnElement.classList.add('shake');
        setTimeout(gameOver, 500); // 쉐이크 효과 후 종료
    }
}

function handleCorrectAnswer() {
    // 통계 업데이트
    const now = Date.now();
    const duration = (now - gameState.questionStartTime) / 1000;
    gameState.totalSolveTime += duration;
    gameState.solvedCount++;

    // 모래 효과 재생 (화면 붕괴 시뮬레이션)
    createScreenCrumbleEffect(() => {
        // 애니메이션 완료 후 다음 단계
        gameState.timer = 60;
        updateTimerDisplay();
        nextQuestion();

        if (ui.gameArea) ui.gameArea.style.opacity = '1';
        if (ui.timer) ui.timer.style.opacity = '1';
        if (ui.counter) ui.counter.style.opacity = '1';
    });
}

function gameOver() {
    if (gameState.isGameOver) return;
    gameState.isGameOver = true;
    clearInterval(gameState.timerInterval);

    // 통계 계산
    const totalPlayTime = Math.floor((Date.now() - gameState.startTime) / 1000);
    const avg = gameState.solvedCount > 0
        ? (gameState.totalSolveTime / gameState.solvedCount).toFixed(2)
        : "0.00";

    if (ui.finalScore) ui.finalScore.textContent = gameState.solvedCount;
    if (ui.avgTime) ui.avgTime.textContent = avg;
    if (ui.totalTime) ui.totalTime.textContent = totalPlayTime;

    if (ui.gameOverScreen) ui.gameOverScreen.classList.remove('hidden');
}

// 고급 화면 붕괴 효과 (Simulated Debris - No html2canvas)
function createScreenCrumbleEffect(callback) {
    // 1. 파티클 생성을 위한 타겟 요소 목록
    const targets = [];
    if (ui.questionText) targets.push({ el: ui.questionText, color: '#ff0000', density: 4 });
    if (ui.timer) targets.push({ el: ui.timer, color: '#ff0000', density: 6 });
    if (ui.counter) targets.push({ el: ui.counter, color: '#aa0000', density: 3 });

    if (ui.choicesContainer) {
        const buttons = ui.choicesContainer.querySelectorAll('.choice-btn');
        buttons.forEach(btn => {
            targets.push({ el: btn, color: '#ffcc00', density: 5 });
        });
    }

    particles = [];
    // 캔버스가 없으면 그냥 콜백 실행
    if (!ui.canvas) {
        if (callback) callback();
        return;
    }

    const canvasRect = ui.canvas.getBoundingClientRect(); // 캔버스 좌표 기준

    // 2. 각 요소 위치에서 파티클 생성
    targets.forEach(target => {
        const rect = target.el.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) return;

        // 밀도에 따라 파티클 수 조절
        const count = Math.floor((rect.width * rect.height) / (target.density * target.density));

        for (let i = 0; i < count; i++) {
            particles.push({
                x: rect.left + Math.random() * rect.width,
                y: rect.top + Math.random() * rect.height,
                vx: (Math.random() - 0.5) * 15,
                vy: (Math.random() - 0.5) * 15,
                color: Math.random() > 0.5 ? target.color : '#330000',
                size: Math.random() * 4 + 2
            });
        }
    });

    // 3. 원본 UI 숨기기
    if (ui.gameArea) ui.gameArea.style.opacity = '0';
    if (ui.timer) ui.timer.style.opacity = '0';
    if (ui.counter) ui.counter.style.opacity = '0';

    // 4. 애니메이션 시작
    if (!animationId) {
        animateCrumble(callback);
    }
}

function animateCrumble(callback) {
    if (!ctx) {
        if (callback) callback();
        return;
    }

    ctx.clearRect(0, 0, ui.canvas.width, ui.canvas.height);

    let stillAlive = false;

    for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (p.y < ui.canvas.height + 100 && p.x > -100 && p.x < ui.canvas.width + 100) {
            stillAlive = true;
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.8; // 중력 강화

            ctx.fillStyle = p.color;
            ctx.fillRect(p.x, p.y, p.size, p.size);
        }
    }

    if (stillAlive) {
        animationId = requestAnimationFrame(() => animateCrumble(callback));
    } else {
        animationId = null;
        ctx.clearRect(0, 0, ui.canvas.width, ui.canvas.height);
        if (callback) callback();
    }
}
