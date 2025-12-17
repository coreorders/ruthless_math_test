/**
 * 어려운 난이도 문제 데이터 (총 50문제)
 *
 * 문제 추가 방법:
 * 아래 배열에 객체를 추가하세요.
 * id: 문제의 고유 번호
 * question: 문제 내용
 * choices: 보기 3개
 * answerIndex: 정답 인덱스 (0, 1, 2)
 */

window.QUESTIONS_HARD = [
    {
        id: "h1",
        question: "이차방정식 2x^2 - 5x + 3 = 0 의 두 근의 합은?",
        choices: ["5/2", "3/2", "-5/2"],
        answerIndex: 0
    },
    {
        id: "h2",
        question: "반지름이 r인 구의 부피 공식은?",
        choices: ["4/3 πr^3", "4πr^2", "πr^2"],
        answerIndex: 0
    },
    {
        id: "h3",
        question: "피타고라스의 수 (3, 4, x)일 때 x는? (빗변)",
        choices: ["5", "6", "7"],
        answerIndex: 0
    },
    {
        id: "h4",
        question: "이차방정식 x^2 - 6x + k = 0 이 중근을 가질 때 k의 값은?",
        choices: ["6", "9", "36"],
        answerIndex: 1
    },
    {
        id: "h5",
        question: "sin^2 x + cos^2 x 의 값은? (항상)",
        choices: ["0", "1", "2"],
        answerIndex: 1
    },
    {
        id: "h6",
        question: "두 점 A(1, 2), B(4, 6) 사이의 거리는?",
        choices: ["3", "4", "5"],
        answerIndex: 2
    },
    {
        id: "h7",
        question: "이차함수 y = -2(x - 3)^2 + 5 의 최댓값은?",
        choices: ["3", "-2", "5"],
        answerIndex: 2
    },
    {
        id: "h8",
        question: "다음 중 무리수가 아닌 것은?",
        choices: ["루트 2", "파이(π)", "루트 0.09"],
        answerIndex: 2
    },
    {
        id: "h9",
        question: "tan 60도의 값은?",
        choices: ["1", "루트 3", "루트 3 / 3"],
        answerIndex: 1
    },
    {
        id: "h10",
        question: "이차방정식의 근의 공식에서 루트 안에 들어가는 식(판별식)은?",
        choices: ["b^2 - 4ac", "b^2 + 4ac", "a^2 - b^2"],
        answerIndex: 0
    },
    {
        id: "h11",
        question: "루트 12 + 루트 27 을 간단히 하면?",
        choices: ["5루트 3", "루트 39", "7루트 3"],
        answerIndex: 0
    },
    {
        id: "h12",
        question: "반지름이 r인 구의 겉넓이 공식은?",
        choices: ["4πr^2", "4/3 πr^3", "2πr"],
        answerIndex: 0
    },
    {
        id: "h13",
        question: "y = 2x^2 그래프를 y축 방향으로 -3만큼 평행이동한 식은?",
        choices: ["y = 2(x-3)^2", "y = 2x^2 - 3", "y = 2x^2 + 3"],
        answerIndex: 1
    },
    {
        id: "h14",
        question: "어떤 자료의 분산이 9일 때, 표준편차는?",
        choices: ["3", "9", "81"],
        answerIndex: 0
    },
    {
        id: "h15",
        question: "인수분해 공식: a^3 - b^3 = ?",
        choices: ["(a-b)(a^2+ab+b^2)", "(a-b)^3", "(a+b)(a^2-ab+b^2)"],
        answerIndex: 0
    },
    {
        id: "h16",
        question: "직각삼각형에서 빗변이 13, 한 변이 12일 때 남은 변은?",
        choices: ["5", "6", "7"],
        answerIndex: 0
    },
    {
        id: "h17",
        question: "일차함수 y = 3x + 1 과 평행하고 (0, 2)를 지나는 직선은?",
        choices: ["y = 3x + 2", "y = -3x + 2", "y = x + 2"],
        answerIndex: 0
    },
    {
        id: "h18",
        question: "x^2 + 5x + 6 = 0 의 두 해의 곱은?",
        choices: ["5", "6", "-6"],
        answerIndex: 1
    },
    {
        id: "h19",
        question: "원주각의 크기는 중심각의 크기의 몇 배인가?",
        choices: ["2배", "1/2배", "똑같다"],
        answerIndex: 1
    },
    {
        id: "h20",
        question: "루트 2 = 1.414 일 때, 루트 200 의 값은?",
        choices: ["14.14", "141.4", "2.828"],
        answerIndex: 0
    },
    {
        id: "h21",
        question: "다음 중 y가 x의 이차함수인 것은?",
        choices: ["y = 2x + 1", "y = x(x+1)", "y = 1/x^2"],
        answerIndex: 1
    },
    {
        id: "h22",
        question: "반지름 6, 중심각 60도인 부채꼴의 넓이는?",
        choices: ["6π", "12π", "36π"],
        answerIndex: 0
    },
    {
        id: "h23",
        question: "서로 다른 주사위 2개를 던져 합이 10이 될 확률은?",
        choices: ["1/12", "1/9", "1/6"],
        answerIndex: 0
    },
    {
        id: "h24",
        question: "2의 -2제곱(2^-2)의 값은?",
        choices: ["-4", "1/4", "0.25"],
        answerIndex: 1
    },
    {
        id: "h25",
        question: "분모를 유리화하면? 1 / 루트2",
        choices: ["루트2", "2분의 루트2", "1"],
        answerIndex: 1
    },
    {
        id: "h26",
        question: "이차함수 y = a(x-p)^2 + q 의 꼭짓점은?",
        choices: ["(p, q)", "(-p, q)", "(p, -q)"],
        answerIndex: 0
    },
    {
        id: "h27",
        question: "한 변의 길이가 a인 정삼각형의 높이 공식은?",
        choices: ["(루트3 / 2) a", "(루트3 / 4) a", "루트3 a"],
        answerIndex: 0
    },
    {
        id: "h28",
        question: "cos 0도의 값은?",
        choices: ["0", "1", "undefined"],
        answerIndex: 1
    },
    {
        id: "h29",
        question: "다음 중 인수분해가 바르게 된 것은?",
        choices: ["x^2 - 4 = (x-2)^2", "x^2 - 4 = (x+2)(x-2)", "x^2 + 4 = (x+2)(x+2)"],
        answerIndex: 1
    },
    {
        id: "h30",
        question: "밑면 반지름 3, 높이 4인 원뿔의 부피는?",
        choices: ["12π", "36π", "16π"],
        answerIndex: 0
    },
    {
        id: "h31",
        question: "연립부등식의 해가 없는 경우는?",
        choices: ["겹치는 부분이 없을 때", "겹치는 부분이 하나일 때", "모든 실수일 때"],
        answerIndex: 0
    },
    {
        id: "h32",
        question: "y = -x^2 + 4x 의 그래프의 축의 방정식은?",
        choices: ["x = 1", "x = 2", "x = -2"],
        answerIndex: 1
    },
    {
        id: "h33",
        question: "루트( (-5)^2 ) 의 값은?",
        choices: ["-5", "5", "±5"],
        answerIndex: 1
    },
    {
        id: "h34",
        question: "원의 접선은 그 접점과 원의 중심을 잇는 반지름과 어떤 관계인가?",
        choices: ["평행하다", "수직이다", "일치한다"],
        answerIndex: 1
    },
    {
        id: "h35",
        question: "이차방정식 판별식 D > 0 이면 근의 개수는?",
        choices: ["2개 (서로 다른)", "1개 (중근)", "0개"],
        answerIndex: 0
    },
    {
        id: "h36",
        question: "한 내각의 크기가 108도인 정다각형은?",
        choices: ["정오각형", "정육각형", "정팔각형"],
        answerIndex: 0
    },
    {
        id: "h37",
        question: "5명의 학생을 한 줄로 세우는 경우의 수는?",
        choices: ["20", "60", "120"],
        answerIndex: 2
    },
    {
        id: "h38",
        question: "직각삼각형에서 빗변의 중점은 무엇인가?",
        choices: ["내심", "외심", "무게중심"],
        answerIndex: 1
    },
    {
        id: "h39",
        question: "x^2 - 8x + 16 = 0 의 해는?",
        choices: ["x = 4 (중근)", "x = -4 (중근)", "x = 4, -4"],
        answerIndex: 0
    },
    {
        id: "h40",
        question: "루트 2와 루트 3 사이에 있는 유리수는?",
        choices: ["1.4", "1.5", "1.8"],
        answerIndex: 1
    },
    {
        id: "h41",
        question: "다음 식을 계산하면? (루트2 + 1)(루트2 - 1)",
        choices: ["1", "2", "3"],
        answerIndex: 0
    },
    {
        id: "h42",
        question: "이차함수 그래프의 폭이 가장 좁은 것은?",
        choices: ["y = x^2", "y = 2x^2", "y = 0.5x^2"],
        answerIndex: 1
    },
    {
        id: "h43",
        question: "대각선의 개수가 5개인 다각형은?",
        choices: ["오각형", "육각형", "사각형"],
        answerIndex: 0
    },
    {
        id: "h44",
        question: "다음 중 확률이 될 수 없는 값은?",
        choices: ["0", "0.7", "1.2"],
        answerIndex: 2
    },
    {
        id: "h45",
        question: "두 원의 위치 관계 중 '외접'할 때 중심 거리는?",
        choices: ["반지름의 합", "반지름의 차", "반지름의 곱"],
        answerIndex: 0
    },
    {
        id: "h46",
        question: "y = ax^2 + bx + c 에서 c의 역할은?",
        choices: ["기울기", "y절편", "꼭짓점의 x좌표"],
        answerIndex: 1
    },
    {
        id: "h47",
        question: "sin 45도 ÷ cos 45도의 값은?",
        choices: ["0", "1", "2"],
        answerIndex: 1
    },
    {
        id: "h48",
        question: "다음 중 무리수인 것의 개수는? (루트4, 루트3, 3.14, π)",
        choices: ["1개", "2개", "3개"],
        answerIndex: 1
    },
    {
        id: "h49",
        question: "정육면체의 대각선 길이 공식 (한 변 a)",
        choices: ["루트2 a", "루트3 a", "3a"],
        answerIndex: 1
    },
    {
        id: "h50",
        question: "이차방정식 3x^2 - 12 = 0 의 해는?",
        choices: ["x = 2", "x = ±2", "x = 4"],
        answerIndex: 1
    }
];