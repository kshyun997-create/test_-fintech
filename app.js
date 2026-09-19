// F-01: 카테고리별 지출 입력 → 전국 평균 소비성향 비교
// 계산은 이 파일의 함수가 하고, 화면(app.html)은 결과만 표시합니다.

function isNumericString(v) {
  if (v === "" || v === null || v === undefined) return false;
  return !isNaN(Number(v)) && isFinite(Number(v));
}

function validateInput(income, categories) {
  const incomeStr = String(income).trim();
  const catEntries = Object.entries(categories);
  const catStrs = catEntries.map(([, v]) => String(v).trim());

  const allEmpty = incomeStr === "" && catStrs.every((v) => v === "");
  if (allEmpty) {
    return { valid: false, message: "소득과 지출을 하나 이상 입력해야 결과를 볼 수 있어요." };
  }

  if (incomeStr !== "" && !isNumericString(incomeStr)) {
    return { valid: false, message: "금액 칸에는 0 이상의 숫자만 입력할 수 있어요." };
  }
  for (const v of catStrs) {
    if (v !== "" && (!isNumericString(v) || Number(v) < 0)) {
      return { valid: false, message: "금액 칸에는 0 이상의 숫자만 입력할 수 있어요." };
    }
  }
  if (incomeStr !== "" && Number(incomeStr) < 0) {
    return { valid: false, message: "금액 칸에는 0 이상의 숫자만 입력할 수 있어요." };
  }

  const incomeNum = incomeStr === "" ? 0 : Number(incomeStr);
  if (incomeNum === 0) {
    return { valid: false, message: "소비성향을 계산하려면 소득을 0보다 크게 입력해 주세요." };
  }

  return { valid: true, message: "" };
}

function calcResult(income, categories) {
  const incomeNum = Number(income);
  const total = Object.values(categories).reduce((sum, v) => sum + (Number(v) || 0), 0);

  const ratios = {};
  Object.keys(categories).forEach((key) => {
    const val = Number(categories[key]) || 0;
    ratios[key] = total === 0 ? 0 : Math.round((val / total) * 1000) / 10;
  });

  const myRate = Math.round((total / incomeNum) * 1000) / 10;
  const avg = window.APP_DATA.AVG_CONSUMPTION_RATIO;
  const diff = Math.round((myRate - avg) * 10) / 10;

  return { total, ratios, myRate, diff };
}

function formatWon(n) {
  return Number(n).toLocaleString("ko-KR") + "원";
}
