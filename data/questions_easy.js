/**
 * 쉬운 난이도 문제 데이터 (총 54문제)
 * solution 필드 업데이트 완료
 */

window.QUESTIONS_EASY = [
    {
        id: "e1",
        question: "다음 중 소인수가 아닌 것은? (12의 소인수)",
        choices: ["2", "3", "4"],
        answerIndex: 2,
        solution: `12를 소인수분해하면 2² × 3 입니다. '소인수'는 인수(약수) 중에서 '소수'인 것만 말해요. 4는 약수지만 소수(2×2)가 아니므로 소인수가 아닙니다.`
    },
    {
        id: "e2",
        question: "-3 + 5 = ?",
        choices: ["-2", "2", "8"],
        answerIndex: 1,
        solution: `수직선에서 -3 위치에서 오른쪽(+)으로 5칸 이동하면 2가 됩니다. 부호가 다른 두 수의 덧셈은 절댓값이 큰 쪽의 부호를 따르고, 두 수의 차이를 구하면 됩니다 (5 - 3 = 2).`
    },
    {
        id: "e3",
        question: "일차방정식 2x = 4 의 해는?",
        choices: ["1", "2", "3"],
        answerIndex: 1,
        solution: `2에 어떤 수(x)를 곱해야 4가 될까요? 양변을 2로 나누면 x = 2 가 됩니다.`
    },
    {
        id: "e4",
        question: "사진 속 친구가 5명 모이면?",
        image: "assets/tata.png",
        choices: ["2명", "5명", "10명"],
        answerIndex: 1,
        solution: `친구가 5명 모였으므로 5명입니다. (단순한 수 세기 문제입니다.)`
    },
    {
        id: "e5",
        question: "다음 중 소수(Prime Number)가 아닌 수는?",
        choices: ["2", "3", "9"],
        answerIndex: 2,
        solution: `'소수'는 1과 자기 자신만을 약수로 가지는 수예요. 2와 3은 소수지만, 9는 1, 3, 9를 약수로 가지므로(3×3) 소수가 아닙니다.`
    },
    {
        id: "e6",
        question: "절댓값이 3인 수는?",
        choices: ["3 뿐이다", "-3 뿐이다", "3과 -3 두 개다"],
        answerIndex: 2,
        solution: `'절댓값'은 수직선에서 0으로부터 떨어진 거리를 말해요. 0에서 거리가 3인 수는 오른쪽의 +3과 왼쪽의 -3, 두 개가 있습니다.`
    },
    {
        id: "e7",
        question: "2의 3제곱(2³)의 값은?",
        choices: ["6", "8", "9"],
        answerIndex: 1,
        solution: `2³은 2를 3번 곱하라는 뜻입니다. 2 × 2 × 2 = 8이 됩니다. (2 × 3 = 6 과 헷갈리지 마세요!)`
    },
    {
        id: "e8",
        question: "다음 중 정수가 아닌 유리수는?",
        choices: ["-1", "0", "0.5"],
        answerIndex: 2,
        solution: `'정수'는 딱 떨어지는 수(-1, 0, 1 등)를 말해요. 0.5는 분수(1/2)로 나타낼 수 있는 '유리수'이지만 정수는 아닙니다.`
    },
    {
        id: "e9",
        question: "식 3x - 5 에서 x의 계수는?",
        choices: ["3", "-5", "x"],
        answerIndex: 0,
        solution: `'계수'는 문자 앞에 곱해진 숫자를 말해요. 3x는 3과 x가 곱해진 것이므로 계수는 3입니다.`
    },
    {
        id: "e10",
        question: "방정식 x + 3 = 10 의 해는?",
        choices: ["6", "7", "13"],
        answerIndex: 1,
        solution: `x에 3을 더해서 10이 되려면, 10에서 3을 뺀 7이 정답입니다. 이항하면 x = 10 - 3 입니다.`
    },
    {
        id: "e11",
        question: "삼각형의 내각의 합은?",
        choices: ["180도", "360도", "90도"],
        answerIndex: 0,
        solution: `모든 삼각형의 세 내각(안쪽 각)을 합치면 항상 180도가 됩니다.`
    },
    {
        id: "e12",
        question: "다음 중 음수는?",
        choices: ["0", "-5", "7"],
        answerIndex: 1,
        solution: `'음수'는 0보다 작은 수로, 마이너스(-) 부호가 붙은 수를 말해요.`
    },
    {
        id: "e13",
        question: "가로 3cm, 세로 4cm인 직사각형의 넓이는?",
        choices: ["7cm²", "12cm²", "14cm²"],
        answerIndex: 1,
        solution: `직사각형의 넓이는 '가로 × 세로' 입니다. 3 × 4 = 12cm² 입니다.`
    },
    {
        id: "e14",
        question: "(-2) × (-3) 의 값은?",
        choices: ["-6", "6", "5"],
        answerIndex: 1,
        solution: `음수와 음수를 곱하면 양수(+)가 됩니다. 2 × 3 = 6 이므로 정답은 +6 입니다.`
    },
    {
        id: "e15",
        question: "일차방정식 2x = 8 의 해는?",
        choices: ["2", "4", "6"],
        answerIndex: 1,
        solution: `2에 4를 곱해야 8이 되므로 x = 4 입니다. (양변을 2로 나누어 구합니다.)`
    },
    {
        id: "e16",
        question: "함수 y = 2x 에서 x=3 일 때 y의 값은?",
        choices: ["5", "6", "9"],
        answerIndex: 1,
        solution: `x 자리에 3을 대입하세요. y = 2 × 3 이 되므로 y는 6입니다.`
    },
    {
        id: "e17",
        question: "순서쌍 (2, -1)은 몇 사분면 위의 점인가?",
        choices: ["제1사분면", "제2사분면", "제4사분면"],
        answerIndex: 2,
        solution: `x좌표가 양수(+), y좌표가 음수(-)인 영역은 오른쪽 아래인 '제4사분면'입니다.`
    },
    {
        id: "e18",
        question: "다음 중 가장 작은 수는?",
        choices: ["-10", "-1", "0"],
        answerIndex: 0,
        solution: `음수는 숫자의 절댓값이 클수록 더 작은 수입니다. 수직선에서 -10이 가장 왼쪽에 있습니다.`
    },
    {
        id: "e19",
        question: "10과 15의 최대공약수는?",
        choices: ["1", "5", "10"],
        answerIndex: 1,
        solution: `10의 약수(1, 2, 5, 10)와 15의 약수(1, 3, 5, 15) 중 공통된 가장 큰 수는 5입니다.`
    },
    {
        id: "e20",
        question: "원의 넓이를 구하는 공식은? (반지름 r)",
        choices: ["2πr", "πr²", "r²"],
        answerIndex: 1,
        solution: `원의 넓이는 '파이 알 제곱(πr²)' 입니다. 2πr은 원의 둘레 공식이에요.`
    },
    {
        id: "e21",
        question: "x가 3일 때, 2x + 1 의 값은?",
        choices: ["6", "7", "8"],
        answerIndex: 1,
        solution: `x에 3을 넣으면 2 × 3 + 1 이 됩니다. 곱셈을 먼저 하므로 6 + 1 = 7 입니다.`
    },
    {
        id: "e22",
        question: "분수 1/2 과 크기가 같은 소수는?",
        choices: ["0.2", "0.5", "0.1"],
        answerIndex: 1,
        solution: `1을 2로 나누면 0.5가 됩니다. (1 ÷ 2 = 0.5)`
    },
    {
        id: "e23",
        question: "정육면체의 면의 개수는?",
        choices: ["4개", "6개", "8개"],
        answerIndex: 1,
        solution: `정육면체는 주사위 모양을 생각하면 돼요. 위, 아래, 앞, 뒤, 양옆 총 6개의 면이 있습니다.`
    },
    {
        id: "e24",
        question: "다음 중 일차방정식인 것은?",
        choices: ["2x + 1 = 0", "x² = 4", "3 = 3"],
        answerIndex: 0,
        solution: `'일차방정식'은 미지수 x의 차수가 1인 방정식입니다. x²는 이차방정식이고, 3=3은 미지수가 없어 방정식이 아닙니다.`
    },
    {
        id: "e25",
        question: "4 - (-3) 의 계산 결과는?",
        choices: ["1", "7", "-1"],
        answerIndex: 1,
        solution: `뺄셈에서 마이너스(-)와 마이너스(-)가 만나면 플러스(+)가 됩니다. 즉, 4 + 3 = 7 입니다.`
    },
    {
        id: "e26",
        question: "직각은 몇 도인가?",
        choices: ["45도", "90도", "180도"],
        answerIndex: 1,
        solution: `'직각'은 수직으로 만날 때의 각도로 90도를 의미합니다.`
    },
    {
        id: "e27",
        question: "y = ax + b 에서 b가 의미하는 것은?",
        choices: ["기울기", "x절편", "y절편"],
        answerIndex: 2,
        solution: `일차함수 식에서 x 앞의 a는 '기울기', 뒤에 더해진 상수 b는 'y절편(y축과 만나는 점)'을 뜻합니다.`
    },
    {
        id: "e28",
        question: "다음 중 유리수가 아닌 것(무리수)은?",
        choices: ["√4", "√3", "0.1"],
        answerIndex: 1,
        solution: `√4는 2와 같아서 유리수입니다. 하지만 √3은 순환하지 않는 무한소수이므로 무리수입니다.`
    },
    {
        id: "e29",
        question: "2와 3의 최소공배수는?",
        choices: ["2", "3", "6"],
        answerIndex: 2,
        solution: `2의 배수(2, 4, 6...)와 3의 배수(3, 6, 9...) 중에서 가장 먼저 만나는 공통된 수는 6입니다.`
    },
    {
        id: "e30",
        question: "다음 식을 간단히 하면? (a + a)",
        choices: ["a²", "2a", "a"],
        answerIndex: 1,
        solution: `a가 2개 더해졌으므로 2a입니다. a²은 a를 두 번 곱했을 때(a × a)입니다.`
    },
    {
        id: "e31",
        question: "좌표평면의 원점의 좌표는?",
        choices: ["(0, 0)", "(1, 1)", "(0, 1)"],
        answerIndex: 0,
        solution: `'원점'은 x축과 y축이 만나는 기준점으로, 좌표는 (0, 0)입니다.`
    },
    {
        id: "e32",
        question: "부등식 x > 3 을 만족하지 않는 수는?",
        choices: ["3", "4", "5"],
        answerIndex: 0,
        solution: `x > 3 은 '3보다 크다(초과)'라는 뜻이므로 3은 포함되지 않습니다.`
    },
    {
        id: "e33",
        question: "3의 역수는?",
        choices: ["-3", "1/3", "3"],
        answerIndex: 1,
        solution: `'역수'는 곱해서 1이 되는 수입니다. 3에 1/3을 곱하면 1이 되므로 역수는 1/3입니다.`
    },
    {
        id: "e34",
        question: "평행사변형의 성질이 아닌 것은?",
        choices: ["두 쌍의 대변이 평행하다", "두 대각선의 길이가 항상 같다", "두 쌍의 대각의 크기가 같다"],
        answerIndex: 1,
        solution: `평행사변형은 두 대각선이 서로를 이등분하지만, 길이는 다를 수 있어요. 대각선의 길이가 항상 같은 것은 직사각형입니다.`
    },
    {
        id: "e35",
        question: "10 ÷ (-2) 의 값은?",
        choices: ["5", "-5", "0.2"],
        answerIndex: 1,
        solution: `양수를 음수로 나누면 부호는 음수(-)가 됩니다. 10 나누기 2는 5이므로, 정답은 -5입니다.`
    },
    {
        id: "e36",
        question: "다음 중 변수가 아닌 상수항은? (2x - 3)",
        choices: ["2", "x", "-3"],
        answerIndex: 2,
        solution: `'상수항'은 문자가 없이 숫자만 있는 항을 말해요. 여기서는 -3이 상수항입니다.`
    },
    {
        id: "e37",
        question: "동전을 한 번 던질 때 앞면이 나올 확률은?",
        choices: ["1/2", "1/3", "1/4"],
        answerIndex: 0,
        solution: `동전은 앞면, 뒷면 2가지 경우가 있죠. 그중 앞면은 1가지이므로 확률은 1/2입니다.`
    },
    {
        id: "e38",
        question: "다음 중 다항식인 것은?",
        choices: ["2x + 1", "2x = 1", "x > 1"],
        answerIndex: 0,
        solution: `등호(=)나 부등호(>)가 있는 것은 방정식이나 부등식이에요. 2x + 1 처럼 식만 있는 것을 다항식이라고 합니다.`
    },
    {
        id: "e39",
        question: "직각삼각형에서 가장 긴 변을 무엇이라 하는가?",
        choices: ["밑변", "높이", "빗변"],
        answerIndex: 2,
        solution: `직각삼각형에서 직각의 맞은편에 있는 가장 긴 변을 '빗변'이라고 부릅니다.`
    },
    {
        id: "e40",
        question: "(-1)의 100제곱은?",
        choices: ["-1", "1", "100"],
        answerIndex: 1,
        solution: `-1을 짝수 번 곱하면 +1, 홀수 번 곱하면 -1이 됩니다. 100은 짝수이므로 정답은 1입니다.`
    },
    {
        id: "e41",
        question: "두 수의 곱이 0이면?",
        choices: ["둘 다 반드시 0이다", "적어도 하나는 0이다", "둘 다 0이 아니다"],
        answerIndex: 1,
        solution: `두 수를 곱해서 0이 되려면, 둘 중 하나만 0이어도 되고 둘 다 0이어도 됩니다. 즉, '적어도 하나는 0'이어야 합니다.`
    },
    {
        id: "e42",
        question: "다음 중 정다면체가 아닌 것은?",
        choices: ["정사면체", "정육면체", "정육각기둥"],
        answerIndex: 2,
        solution: `정다면체는 정사면체, 정육면체, 정팔면체, 정십이면체, 정이십면체 5개뿐입니다. 기둥 모양은 정다면체가 아니에요.`
    },
    {
        id: "e43",
        question: "식 5x - 2x 를 간단히 하면?",
        choices: ["3", "3x", "7x"],
        answerIndex: 1,
        solution: `동류항(문자가 같은 항)끼리는 숫자만 계산하면 됩니다. 5 - 2 = 3 이므로 3x가 됩니다.`
    },
    {
        id: "e44",
        question: "다음 중 1차 함수 그래프의 모양은?",
        choices: ["직선", "포물선", "원"],
        answerIndex: 0,
        solution: `y = ax + b 형태의 1차 함수는 좌표평면에서 곧은 '직선' 모양으로 그려집니다.`
    },
    {
        id: "e45",
        question: "6의 약수가 아닌 것은?",
        choices: ["2", "3", "4"],
        answerIndex: 2,
        solution: `6을 나누어떨어지게 하는 수는 1, 2, 3, 6입니다. 4로는 나누어떨어지지 않아요.`
    },
    {
        id: "e46",
        question: "다음 중 양의 정수(자연수)는?",
        choices: ["0", "-2", "5"],
        answerIndex: 2,
        solution: `양의 정수는 1, 2, 3... 처럼 플러스 부호가 생략된 자연수를 말합니다. 0은 양수도 음수도 아닙니다.`
    },
    {
        id: "e47",
        question: "사각형의 내각의 합은?",
        choices: ["180도", "360도", "540도"],
        answerIndex: 1,
        solution: `삼각형 두 개를 합친 것과 같으므로 180도 × 2 = 360도입니다.`
    },
    {
        id: "e48",
        question: "3x = 12 일 때 x의 값은?",
        choices: ["3", "4", "36"],
        answerIndex: 1,
        solution: `3에 4를 곱해야 12가 됩니다. 양변을 3으로 나누면 x = 4 입니다.`
    },
    {
        id: "e49",
        question: "다음 중 가장 큰 수는?",
        choices: ["|-5|", "|-2|", "3"],
        answerIndex: 0,
        solution: `절댓값(| |)은 부호를 뗀 양수라고 생각하면 쉬워요. |-5|=5, |-2|=2 이므로 가장 큰 수는 5가 되는 |-5|입니다.`
    },
    {
        id: "e50",
        question: "0으로 나누는 것은?",
        choices: ["0이다", "1이다", "불가능하다(정의되지 않음)"],
        answerIndex: 2,
        solution: `수학에서 0으로 나누는 것은 약속되어 있지 않습니다. 불가능합니다.`
    },
    {
        id: "e51",
        question: "다음 식을 전개하면? 2(x + 3)",
        choices: ["2x + 3", "2x + 6", "x + 6"],
        answerIndex: 1,
        solution: `분배법칙을 이용해 괄호 앞의 2를 안쪽의 x와 3에 각각 곱해줍니다. 2x + (2×3) = 2x + 6 입니다.`
    },
    {
        id: "e52",
        question: "주사위를 한 번 던질 때 7이 나올 확률은?",
        choices: ["0", "1/6", "1"],
        answerIndex: 0,
        solution: `주사위 눈은 1부터 6까지밖에 없으므로 7은 절대 나올 수 없습니다. 일어날 수 없는 사건의 확률은 0입니다.`
    },
    {
        id: "e53",
        question: "이등변삼각형의 특징은?",
        choices: ["세 변이 모두 다르다", "두 변의 길이가 같다", "내각의 합이 360도다"],
        answerIndex: 1,
        solution: `'이등변'이라는 이름처럼 '두(2) 변의 길이가 같은' 삼각형입니다.`
    },
    {
        id: "e54",
        question: "방정식 2x - 4 = 0 의 해는?",
        choices: ["-2", "0", "2"],
        answerIndex: 2,
        solution: `4를 우변으로 이항하면 2x = 4 가 되고, 양변을 2로 나누면 x = 2 입니다.`
    }
];