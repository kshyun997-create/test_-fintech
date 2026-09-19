// 앱에서 쓰는 상수 데이터 — 출처·기준 시점을 유지합니다.
// 1) 가구 평균소비성향: 국가데이터처 가계동향조사 2025년 3분기(2025.11.27 발표)
//    https://www.korea.kr/briefing/policyBriefingView.do?newsId=156731781
// 2) 소비자물가 전년동월비: OECD Data Explorer, data/public/kor_cpi_monthly.js 2026-08 값(3.091455 → 반올림 3.09)
window.APP_DATA = {
  AVG_CONSUMPTION_RATIO: 67.2,
  AVG_CONSUMPTION_RATIO_SOURCE: "국가데이터처 가계동향조사 2025년 3분기(2025.11.27 발표)",
  CPI_YOY: 3.09,
  CPI_YOY_SOURCE: "OECD Data Explorer, 2026-08",
  CATEGORIES: [
    { key: "식비", label: "식비" },
    { key: "배달", label: "배달" },
    { key: "쇼핑", label: "쇼핑" },
    { key: "교통", label: "교통" }
  ]
};
