export interface AnalysisResult {
  inputText: string;
  coreInterpretation: {
    surface: string;
    hiddenIntent: string;
    coreMessage: string;
  };
  categories: {
    strategy: boolean;
    creative: boolean;
    brand: boolean;
    mediaPerformance: boolean;
    budget: boolean;
    scheduleOps: boolean;
    internalDecision: boolean;
    riskLegal: boolean;
  };
  priority: {
    urgency: 'HIGH' | 'MEDIUM' | 'LOW';
    impact: 'HIGH' | 'MEDIUM' | 'LOW';
    level: '즉각 대응 필수' | '신속 처리' | '전략적 개선 과제' | '참고 및 모니터링';
    reason: string;
  };
  actionGuides: {
    clarificationQuestions: string[];
    planningReview: string[];
    creativeTeam: string[];
    mediaTeam: string[];
    prepMaterials: string[];
    contactReportText: string;
  };
  commGuides: {
    acceptText: string;
    questionText: string;
    alternativeText: string;
    scheduleAdjustText: string;
    riskDeliveryText: string;
  };
  risks: {
    strategyRedirection: '낮음' | '보통' | '높음';
    scheduleDelay: '낮음' | '보통' | '높음';
    budgetOverrun: '낮음' | '보통' | '높음';
    internalReportFailure: '낮음' | '보통' | '높음';
    kpiWeakening: '낮음' | '보통' | '높음';
    brandToneDilution: '낮음' | '보통' | '높음';
  };
  topActions: string[];
  simulationData: {
    metricName: string;
    yAxisLabel: string;
    ticks: string[];
    optionA: number[]; // 선제적 조치
    optionB: number[]; // 점진적 개선
    optionC: number[]; // 현상 유지
    optionALabel: string;
    optionBLabel: string;
    optionCLabel: string;
  };
}

export const presetExamples = [
  {
    id: 'impact',
    title: '임팩트 부족',
    text: '좀 더 임팩트 있게 가면 좋겠어요.',
    description: '크리에이티브 표현 및 주목도 개선 필요',
  },
  {
    id: 'brand_tone',
    title: '브랜드 톤 불일치',
    text: '브랜드 톤이랑 조금 안 맞는 것 같아요. 대표님이 보기엔 너무 가벼워 보인다고 하셨어요.',
    description: '브랜드 가이드 및 최고결정권자 우려 반영',
  },
  {
    id: 'budget_efficiency',
    title: '예산 효율 우려',
    text: '예산 대비 효율이 잘 안 보입니다. 매체 믹스 재조정이 필요해 보여요.',
    description: 'KPI 달성 및 매체 믹스 다각화 요구',
  },
  {
    id: 'internal_persuasion',
    title: '내부 설득 어려움',
    text: '이 방향은 내부 설득이 어려울 것 같아요. 다른 크리에이티브 시안도 필요합니다.',
    description: '광고주 내부 허들 극복 및 추가 시안 제작',
  },
  {
    id: 'schedule_risk',
    title: '일정 리스크',
    text: '일정이 너무 빠듯한데 캠페인 온에어가 가능한가요?',
    description: '타임라인 긴급 점검 및 마일스톤 관리',
  },
  {
    id: 'differentiation',
    title: '차별점 부족',
    text: '경쟁사 대비 차별점이 약해 보여요. 소비자 입장에서 와닿을지 모르겠어요.',
    description: '시장 내 포지셔닝 및 크리에이티브 소구점 강화',
  },
];

export const presetAnalyses: Record<string, AnalysisResult> = {
  '좀 더 임팩트 있게 가면 좋겠어요.': {
    inputText: '좀 더 임팩트 있게 가면 좋겠어요.',
    coreInterpretation: {
      surface: '현재 안의 시각적/메시지적 자극이 약하여 소비자의 이목을 끌지 못할 것 같다는 의견',
      hiddenIntent: '메인 슬로건이나 키 비주얼이 경쟁 구도에서 묻힐까 우려하며, 더 과감하고 새로운 시도를 원하고 있음',
      coreMessage: '아이디어의 핵심 구조는 유지하되, 오프닝 3초의 연출, 훅 카피의 어조, 디자인 그래픽 대비감을 극대화하는 솔루션 제안 필요',
    },
    categories: {
      strategy: false,
      creative: true,
      brand: false,
      mediaPerformance: false,
      budget: false,
      scheduleOps: false,
      internalDecision: false,
      riskLegal: false,
    },
    priority: {
      urgency: 'MEDIUM',
      impact: 'MEDIUM',
      level: '신속 처리',
      reason: '크리에이티브의 주관적 인상에 대한 피드백으로, 빠른 방향 수정 및 시각적 대비 제안을 통해 큰 일정 지연 없이 수용 가능합니다.',
    },
    actionGuides: {
      clarificationQuestions: [
        '광고주가 생각하는 임팩트의 부재가 비주얼 그래픽(컬러/대비)인지, 아니면 카피 라이팅(메시지 자극성)인지 세부 확인',
        '레퍼런스 중 어떤 톤의 크리에이티브를 “임팩트 있다”고 판단하시는지 벤치마킹 사례 요청',
      ],
      planningReview: [
        '전략 방향에 부합하면서도 메시지의 엣지를 세울 수 있는 서브 소구안 개발',
        '디지털 타겟 세그먼트별로 다르게 작용할 수 있는 후킹 키워드 정리',
      ],
      creativeTeam: [
        '키 비주얼의 명도 대비를 높이고, 레이아웃을 좀 더 입체적으로 전개',
        '오프닝 텍스트 모션의 속도감과 효과음을 대담하게 강화한 베리에이션 2안 제작',
      ],
      mediaTeam: [
        '주목도가 극대화되는 프리롤 영역이나 숏폼 지면에 크리에이티브가 노출될 수 있도록 지면 사양 재점검',
      ],
      prepMaterials: [
        '메시지 강화 카피 베리에이션 3안',
        '색상 및 폰트 변경으로 주목도를 개선한 디자인 비교 시안',
      ],
      contactReportText: '광고주의 "임팩트 보강" 요청을 접수하였으며, 아이디어의 핵심 골자는 유지하되 도입부 연출 및 메시지 엣지를 대폭 강화한 베리에이션 안을 차주 화요일까지 제공하기로 합의함.',
    },
    commGuides: {
      acceptText: '제시해 주신 피드백에 깊이 공감합니다. 소비자가 처음 접했을 때의 주목도를 한층 더 끌어올리는 장치가 필요하다는 방향으로 이해했습니다.',
      questionText: '특히 어떤 포인트에서 가장 큰 변화를 주기를 원하시는지요? 예컨대 메시지 카피의 수위인지, 비주얼적인 대비감인지 말씀 주시면 반영에 큰 도움이 됩니다.',
      alternativeText: '전략의 기본 축은 유지하면서 오프닝의 스피디한 전환과 텍스트 모션을 더 과감하게 보완한 대안을 준비해 보여드리겠습니다.',
      scheduleAdjustText: '제작 일정을 감안하여, 새로운 컨셉의 전면 재기획보다는 현재 레이아웃에서 연출적 임팩트를 극대화하는 방향으로 신속하게 보강하여 일정 내 완료하도록 하겠습니다.',
      riskDeliveryText: '다만 카피의 메시지 수위를 지나치게 자극적으로 조정할 경우, 기 합의된 브랜드 심의 가이드라인 내 통과 여부가 불투명해질 수 있으므로 적정선을 조율해 제안드리겠습니다.',
    },
    risks: {
      strategyRedirection: '낮음',
      scheduleDelay: '낮음',
      budgetOverrun: '낮음',
      internalReportFailure: '보통',
      kpiWeakening: '낮음',
      brandToneDilution: '보통',
    },
    topActions: [
      '오프닝의 연출 텐션을 1.5배 올린 크리에이티브 시퀀스 수정본 기획',
      '브랜드 가이드라인 내에서 허용 가능한 가장 강력한 훅 카피 3안 추출',
      '광고주 실무자에게 수정안 전송 전, 벤치마킹 데이터 포함해 피칭 준비',
    ],
    simulationData: {
      metricName: '의견 수용도 및 잔여 이슈 지수',
      yAxisLabel: 'VOC Index (Lower is Better)',
      ticks: ['현재', '1주 후', '2주 후', '4주 후', '8주 후'],
      optionA: [100, 60, 40, 25, 15],
      optionB: [100, 80, 65, 50, 40],
      optionC: [100, 115, 130, 145, 155],
      optionALabel: '선제적 대안 제시 (오프닝/메시지 보강)',
      optionBLabel: '미온적 점진 수정 (디자인 미세 수정)',
      optionCLabel: '원안 유지 및 광고주 설득 고집',
    },
  },

  '브랜드 톤이랑 조금 안 맞는 것 같아요. 대표님이 보기엔 너무 가벼워 보인다고 하셨어요.': {
    inputText: '브랜드 톤이랑 조금 안 맞는 것 같아요. 대표님이 보기엔 너무 가벼워 보인다고 하셨어요.',
    coreInterpretation: {
      surface: '현재 시안의 톤앤매너가 브랜드 이미지와 맞지 않으며 가볍게 느껴진다는 의견',
      hiddenIntent: '최종 의사결정권자(대표님)가 브랜드의 신뢰도 및 프리미엄 이미지가 훼손될까 우려하고 있으며, 실무선에서 이에 대한 명확한 방어 논리나 대안이 없어 압박을 느끼고 있음',
      coreMessage: '단순 비주얼 수정을 넘어 브랜드 가이드라인 기반의 당위성을 재정립하고, 격조와 신뢰감을 주면서도 핵심 메시지를 명확히 전달하는 톤 조율 솔루션 필요',
    },
    categories: {
      strategy: false,
      creative: true,
      brand: true,
      mediaPerformance: false,
      budget: false,
      scheduleOps: false,
      internalDecision: true,
      riskLegal: false,
    },
    priority: {
      urgency: 'HIGH',
      impact: 'HIGH',
      level: '즉각 대응 필수',
      reason: '최종 의사결정권자의 강력한 부정 피드백이며 브랜드 아이덴티티와 결부되어 있어, 즉시 대응하지 않을 경우 시안 전면 기각 및 캠페인 좌초 리스크가 큽니다.',
    },
    actionGuides: {
      clarificationQuestions: [
        '“가벼워 보인다”고 판단하신 특정 요소(색채, 모델 페르소나, 카피 서체, 폰트 굵기, 어미의 종결어미 등)의 세부 위치 확인',
        '기존 대표적인 성공 캠페인 중 의사결정권자가 선호하시는 이상적인 브랜드 무게감의 기준점 파악',
      ],
      planningReview: [
        '브랜드 아이덴티티 휠(Identity Wheel)을 바탕으로, 이번 캠페인의 표현 수위와 신뢰감의 밸런스 기준 정의',
        '경쟁사의 톤앤매너 대비 우위 요소 분석 및 논리 장표 보강',
      ],
      creativeTeam: [
        '자극적인 색상 톤을 딥 네이비, 차콜 등 차분한 컬러 시스템으로 재조정',
        '감탄사, 슬랭, 유행어 계열의 어투를 절제되고 간결한 신뢰감 위주의 지적이고 품격 있는 카피로 전면 수정',
        '레이아웃 및 여백의 미를 부각하는 그리드 정돈 작업',
      ],
      mediaTeam: [
        '가벼운 플랫폼(숏폼 전용 등)에 편향된 매체 구성을 일부 신뢰도 높은 프리미엄 매체나 대형 빌보드 지면으로 다각화 제안',
      ],
      prepMaterials: [
        '브랜드 톤앤매너 가이드 준수 입증 비교표',
        '중후함과 신뢰를 대폭 보강한 프리미엄 크리에이티브 시안(A안: 클래식 에디션, B안: 컨템포러리 에디션)',
        '최종 의사결정권자 대면 보고 전용 설득 장표 3장',
      ],
      contactReportText: '브랜드 톤앤매너의 가벼움에 대한 최고의사결정권자의 우려를 확인하고 적극 수용함. 브랜드 신뢰도와 품격을 높일 수 있도록 비주얼 무드(컬러/레이아웃 정돈)와 카피 톤을 클래식한 무드로 긴급 튜닝하여 대표 보고 논리와 함께 재제안하기로 합의함.',
    },
    commGuides: {
      acceptText: '대표님께서 우려하시는 브랜드 고유의 신뢰감과 무게감을 완벽하게 확보해야 한다는 점에 100% 공감합니다.',
      questionText: '표현 방식에서 브랜드 아이덴티티를 지키는 선을 잡고자 합니다. 혹시 가장 큰 괴리를 느끼신 부분이 카피의 종결 어미 톤일지, 아니면 비주얼 레이아웃의 컬러 배합일지 구체적으로 짚어주실 수 있으실까요?',
      alternativeText: '브랜드 가이드라인에 완전히 부합하면서도 한층 더 진중하고 프리미엄한 감각을 담은 ‘클래식 럭셔리’ 시안과 실무진 보고용 설득 논리 장표를 함께 보완해 올리겠습니다.',
      scheduleAdjustText: '중요한 의사결정 사항이므로 금주 내 긴급 튜닝 작업을 마쳐 전달드릴 예정이며, 이후 최종 승인 일정에 차질이 없도록 가용 리소스를 전면 집중하겠습니다.',
      riskDeliveryText: '너무 가벼운 요소를 걷어내다 보면 본래 목표했던 젊은 세대의 바이럴 타겟 접점이 다소 정적으로 변할 수 있어, 세련되면서도 진중함을 유지하는 골든 밸런스를 맞춰 제안해 드리겠습니다.',
    },
    risks: {
      strategyRedirection: '높음',
      scheduleDelay: '보통',
      budgetOverrun: '낮음',
      internalReportFailure: '높음',
      kpiWeakening: '보통',
      brandToneDilution: '높음',
    },
    topActions: [
      '광고주가 말한 “가벼움”의 원인 요소를 발췌하여 수정 기준 정의',
      '브랜드 고유의 무게감을 살린 비주얼 톤 보정안 및 진중한 카피 베리에이션 도출',
      '의사결정자가 바로 납득할 수 있는 "보고용 논리 및 레퍼런스 가이드" 장표 작성',
    ],
    simulationData: {
      metricName: '브랜드 일관성 및 의사결정 리스크',
      yAxisLabel: 'Risk / Consistency Index',
      ticks: ['현재', '1주 후', '2주 후', '4주 후', '8주 후'],
      optionA: [100, 45, 30, 20, 10], // 선제적
      optionB: [100, 75, 55, 45, 35], // 점진
      optionC: [100, 120, 140, 150, 160], // 현상 유지
      optionALabel: '브랜드 신뢰성 긴급 튜닝 + 보고 전용 설득안 제안',
      optionBLabel: '일부 디자인 요소 부분 수정 및 간접 피드백 대응',
      optionCLabel: '기존 안의 바이럴 효과만 강조하며 설득 논리 고수',
    },
  },

  '예산 대비 효율이 잘 안 보입니다. 매체 믹스 재조정이 필요해 보여요.': {
    inputText: '예산 대비 효율이 잘 안 보입니다. 매체 믹스 재조정이 필요해 보여요.',
    coreInterpretation: {
      surface: '제안한 매체 플래닝의 ROI와 전환 효율이 낮아 보여 실효성에 의문을 갖는 상태',
      hiddenIntent: '제한된 예산 안에서 확실한 캠페인 실적(전환, 도달 등)을 보장받고 싶어 하며, 성과 입증 책임을 대행사에 요구하고 있음',
      coreMessage: '추상적인 매체 믹스 나열이 아닌, 예측 KPI 시뮬레이션 데이터와 성과 최적화 시나리오를 구체적 수치로 가시화하여 설득력 강화',
    },
    categories: {
      strategy: true,
      creative: false,
      brand: false,
      mediaPerformance: true,
      budget: true,
      scheduleOps: false,
      internalDecision: false,
      riskLegal: false,
    },
    priority: {
      urgency: 'MEDIUM',
      impact: 'HIGH',
      level: '전략적 개선 과제',
      reason: '전체 예산 집행 효율성에 관련된 사항이므로 신중한 시뮬레이션과 논리가 동반되어야 하며, 매체안 재구성에 시간적 투자가 요구됩니다.',
    },
    actionGuides: {
      clarificationQuestions: [
        '광고주 내부에서 이번 캠페인 중 가장 최우선시하는 단 하나의 KPI가 브랜드 인지도(도달)인지 혹은 실제 제품 구매(전환)인지 명확한 우선순위 확인',
        '기준으로 생각하시는 목표 단가(CPA, CPC, CPM 등)나 과거 유사 캠페인의 벤치마크 성과 기준선 요청',
      ],
      planningReview: [
        '전체 예산에서 미디어 바잉 효율을 높일 수 있는 패키지 딜 및 단가 네고 여부 긴급 협의',
        '고효율 매체 비중을 높이고 저효율/테스트성 지면 비중을 줄이는 최적화 매체 재구성안 마련',
      ],
      creativeTeam: [
        '각 매체별 사양(디지털 배너, 검색 광고, 숏폼 비디오 등)에 완벽히 부합하고 효율을 극대화할 수 있는 전용 메시지 레이아웃 최적화 제안',
      ],
      mediaTeam: [
        '타겟 세그먼트 정밀 타겟팅 시나리오 재설계',
        '매체 믹스 조정 전후의 예상 도달률 및 노출/전환 수치 비교표 작성',
      ],
      prepMaterials: [
        '예산 효율 개선용 매체 믹스 비교안(A안: 전환 최적화 집중형, B안: 인지도 및 부스팅 분산형)',
        '각 매체별 예측 성과 및 예산 효율 분석 시뮬레이션 테이블',
      ],
      contactReportText: '예산 대비 효율성과 매체 믹스 합리성에 대한 의견을 수용함. 도달율과 전환율을 극대화하기 위해 디지털 고효율 지면 비중을 상향 조정하고 정량적 성과 시뮬레이션을 보강한 개정 미디어 믹스 테이블을 작성하여 차주 미팅 시 재제안하기로 합의함.',
    },
    commGuides: {
      acceptText: '예산 집행의 효율성과 구체적 ROI 확보가 이번 캠페인의 성공을 가르는 핵심이라는 점에 적극 공감합니다.',
      questionText: '이번 캠페인에서 광고주 내부적으로 가장 집중해서 보고 계신 핵심 지표가 실제 가입/전환 단계의 액션인지, 대규모 도달율인지 알려주시면 매체 최적화의 초점을 맞추겠습니다.',
      alternativeText: '한정된 예산 하에 불필요한 누수 지면을 제거하고, 효율이 입증된 매체 위주로 포트폴리오를 집중한 고효율 커스터마이즈 믹스안을 데이터와 함께 제시해 드리겠습니다.',
      scheduleAdjustText: '매체 믹스의 정량적 수치 보정을 위해 2일간 데이터 정밀 분석을 실시한 후, 즉시 실행 가능한 매체 포트폴리오 안을 제안드리겠습니다.',
      riskDeliveryText: '다만 효율성 극대화를 위해 전환 매체 위주로 전면 축소할 경우, 대중적 브랜드 인지도 확보나 넓은 타겟 도달(Reach)에 제한이 생길 수 있음을 감안해 밸런스 있는 최적안을 잡겠습니다.',
    },
    risks: {
      strategyRedirection: '보통',
      scheduleDelay: '낮음',
      budgetOverrun: '보통',
      internalReportFailure: '보통',
      kpiWeakening: '높음',
      brandToneDilution: '낮음',
    },
    topActions: [
      '미디어 파트너와 긴급 연동하여 단가 네고 및 가용 패키지 옵션 확보',
      '전체 버젯의 20%를 차지하던 실험적 매체를 고효율 검증 매체로 이전 배치',
      '예산 최적화 매체 구성에 따른 예상 효율 향상치 시뮬레이션 시각화',
    ],
    simulationData: {
      metricName: '캠페인 KPI 달성 기대치 및 광고 효율',
      yAxisLabel: 'Cost Efficiency Index (Higher is Better)',
      ticks: ['현재', '1주 후', '2주 후', '4주 후', '8주 후'],
      optionA: [40, 65, 80, 95, 110], // 선제적
      optionB: [40, 50, 60, 75, 85], // 점진
      optionC: [40, 35, 30, 25, 20], // 현상 유지
      optionALabel: '고효율 디지털 매체 포커싱 및 타겟팅 정교화',
      optionBLabel: '일부 미디어 단가 소폭 조정 및 기존 매체안 유지',
      optionCLabel: '기존 매체 믹스 타당성 서술로 설득 시도',
    },
  },

  '이 방향은 내부 설득이 어려울 것 같아요. 다른 크리에이티브 시안도 필요합니다.': {
    inputText: '이 방향은 내부 설득이 어려울 것 같아요. 다른 크리에이티브 시안도 필요합니다.',
    coreInterpretation: {
      surface: '제안한 방향성이 광고주 내부 보고 및 합의 과정에서 통과하기 어렵다고 느끼며 다른 옵션을 요구하는 상황',
      hiddenIntent: '실무 파트너 본인이 사내 윗선이나 유관 부서에 해당 기획안을 강력하게 옹호할 수 있는 정당성과 논리적 명분이 부족함을 느끼고 있음',
      coreMessage: '새로운 방향의 크리에이티브를 개발함과 동시에, 기 합의된 방향에 대해 실무자가 내부용으로 바로 활용할 수 있는 ‘원페이지 보고 요약본’ 및 ‘대안 비교 장표’를 제공하여 설득 도우미 역할 수행',
    },
    categories: {
      strategy: true,
      creative: true,
      brand: false,
      mediaPerformance: false,
      budget: false,
      scheduleOps: false,
      internalDecision: true,
      riskLegal: false,
    },
    priority: {
      urgency: 'HIGH',
      impact: 'HIGH',
      level: '즉각 대응 필수',
      reason: '내부 설득 무산은 기획 전면 무효화로 이어지며, 신규 시안 개발을 병행해야 하므로 리소스와 크리에이티브 방향 정비에 최우선 역량을 할당해야 합니다.',
    },
    actionGuides: {
      clarificationQuestions: [
        '내부 설득 과정에서 가장 큰 장애물이나 회의적인 반응을 보인 핵심 인물이 누구이며, 그분의 구체적 거부 원인 확인',
        '신규 시안을 준비하되, 기존 시안에서 어떤 장점을 취합하고 어떤 단점을 극복해야 사내 눈높이를 맞출 수 있는지 파악',
      ],
      planningReview: [
        '단순 시안 늘리기가 아닌, 의도적으로 명확한 대비를 이룰 수 있는 2-Type 포지셔닝 맵 구성 (예: 혁신/돌파형 vs. 안정/정통형)',
        '광고주사 내부 의사결정 프로세스의 단계와 마일스톤 확인',
      ],
      creativeTeam: [
        '기존 시안과 완전히 궤를 달리하면서도 동일 캠페인 목표를 달성하는 신규 비주얼 톤의 대안 1개안 추가 구성',
        '소비자 공감형 생활 밀착형 카피 위주의 시안과 직관적인 혜택 소구형 시안으로 극명하게 대비되는 시안 분리',
      ],
      mediaTeam: [
        '시안별로 어떤 매체 시너지를 낼 수 있는지 매칭 전략 구조 보조',
      ],
      prepMaterials: [
        '2-Type 크리에이티브 비교 장표 (장단점, 적합 상황 비교)',
        '광고주사 내부 보고를 위한 ‘캠페인 기획 핵심 요약 보고서 (One-pager)’',
        '기획안 도입부 논리 보강 자료 (왜 이 방향이어야만 하는가?)',
      ],
      contactReportText: '광고주 내부 설득 과정에서의 한계와 추가 시안 요구를 인지함. 내부 보고용 논리와 설득 명분을 제공하기 위해 기 제안안의 강점을 집약한 보고 장표를 보강하고, 이와 명확히 차별화되는 신규 크리에이티브 시안 1안을 추가 개발하여 함께 재상정하기로 함.',
    },
    commGuides: {
      acceptText: '광고주님께서 사내 보고를 진행하실 때 가장 설득력 있고 완벽한 지지를 받을 수 있는 기획안이어야 한다는 점에 100% 동감합니다.',
      questionText: '사내에서 혹시 우려하시는 구체적인 지적 사항이나, 설득에 가장 걸림돌이 되는 부분이 전략의 파격성인지 아니면 수치적 근거 부족인지 구체적으로 공유해주실 수 있으실까요?',
      alternativeText: '윗분들 보고용으로 가장 설득력이 높고 명확하게 대비되는 2대 시안 비교표 및 원페이지 핵심 요약 장표를 신규 시안과 함께 준비해 보고에 무기가 되시도록 하겠습니다.',
      scheduleAdjustText: '신규 시안 추가 제작으로 일정이 지연되지 않도록 기존 시안 고도화 작업과 병행하여 다음 주 월요일 오전까지 완벽하게 패키징해 드리겠습니다.',
      riskDeliveryText: '다만 완전히 다른 성격의 다수 시안을 동시에 올릴 경우 사내에서 의견이 지나치게 분산되어 의사결정이 오히려 지연될 수 있으므로, 설득 우선순위를 추천하여 함께 제시해 드리겠습니다.',
    },
    risks: {
      strategyRedirection: '높음',
      scheduleDelay: '보통',
      budgetOverrun: '낮음',
      internalReportFailure: '높음',
      kpiWeakening: '낮음',
      brandToneDilution: '보통',
    },
    topActions: [
      '광고주 담당 AE가 내부 보고 회의 시 대행사 피칭처럼 사용할 수 있는 키워드 가이드북 정리',
      '기존 안과 대비되는 정통적/직관적 소구의 추가 시안 1종 개발 착수',
      '사내 장벽이 높은 부서(영업, 법무 등)의 사전 검토 항목을 충족할 수 있는 근거 마련',
    ],
    simulationData: {
      metricName: '내부 보고 통과 확률 및 의사결정 속도',
      yAxisLabel: 'Approval Probability (%)',
      ticks: ['현재', '1주 후', '2주 후', '4주 후', '8주 후'],
      optionA: [15, 50, 75, 90, 98], // 선제적
      optionB: [15, 30, 45, 60, 75], // 점진
      optionC: [15, 10, 5, 5, 2], // 현상 유지
      optionALabel: '의사결정 보조 원페이지 장표 + 명확히 대비되는 추가 대안 제시',
      optionBLabel: '단순 디자인 베리에이션 추가 및 기존 제안 고수',
      optionCLabel: '추가 시안 거부 및 기존 안 논리만 장황하게 재제안',
    },
  },

  '일정이 너무 빠듯한데 캠페인 온에어가 가능한가요?': {
    inputText: '일정이 너무 빠듯한데 캠페인 온에어가 가능한가요?',
    coreInterpretation: {
      surface: '촉박한 타임라인으로 인해 온에어 일정의 지연 및 제작 사고를 염려하고 있는 상태',
      hiddenIntent: '일정 지연에 대한 개인적/조직적 문책을 걱정하고 있으며, 대행사가 일정을 완벽히 컨트롤할 수 있는 세부 실행 계획과 리스크 플랜을 가졌는지 신뢰하고 싶어 함',
      coreMessage: '말뿐인 "가능하다"는 확답 대신, 마이크로 마일스톤(일 단위 계획)과 병렬 작업 계획, 그리고 발생 가능한 지연 요소를 사전 차단하는 비상 컨틴전시 플랜 시각화 제공',
    },
    categories: {
      strategy: false,
      creative: false,
      brand: false,
      mediaPerformance: false,
      budget: false,
      scheduleOps: true,
      internalDecision: false,
      riskLegal: false,
    },
    priority: {
      urgency: 'HIGH',
      impact: 'MEDIUM',
      level: '즉각 대응 필수',
      reason: '시간은 되돌릴 수 없는 절대적 자원이므로 일정 이슈는 최우선 과제이며, 의사결정 지연 자체가 리스크를 증폭시킵니다.',
    },
    actionGuides: {
      clarificationQuestions: [
        '광고주사 내부 결재 및 심의 소요 시간에 대한 가용 타임라인 최솟값 파악',
        '절대 타협할 수 없는 고정 온에어 날짜(매체 예약 완료일 등)와 미세 조정 가능한 버퍼 날짜 파악',
      ],
      planningReview: [
        '순차적 진행(기획 -> 승인 -> 제작)에서 병렬 진행(기획과 동시에 제작 리소스 선점 및 사전 준비) 구조로 긴급 전환',
        '의사결정 지연 시 자동 순연되는 일정 데드라인 고지 기준 설정',
      ],
      creativeTeam: [
        '시간 소요가 큰 야외 촬영이나 대규모 그래픽 렌더링 요소를 최소화하고, 스튜디오 촬영 및 모션 그래픽 위주의 신속한 고효율 포맷 활용 제안',
      ],
      mediaTeam: [
        '매체 부킹 및 소재 등록 마감 시한(데드라인)을 일자별로 표기하여 알림 체계 구축',
      ],
      prepMaterials: [
        '캠페인 온에어용 초정밀 ‘일 단위 스케줄러 (WBS)’',
        '각 단계별 광고주 의사결정 데드라인 경고 알람 일정표',
        '비상시 매체 대체 집행안 및 사전 제작된 범용 소재 대안',
      ],
      contactReportText: '캠페인 온에어 일정의 촉박함에 대한 심각성을 공유함. 일정 준수를 위해 전체 제작 일정을 일 단위 마이크로 마일스톤으로 세분화하고, 의사결정 프로세스 병렬화 및 크리에이티브 포맷 효율화를 진행하여 전체 스케줄 WBS를 즉시 발행하기로 합의함.',
    },
    commGuides: {
      acceptText: '말씀 주신 대로 이번 온에어 일정은 한 치의 오차도 허용되지 않는 매우 타이트한 스케줄이라는 점에 깊이 통감하고 있습니다.',
      questionText: '일정 확보를 위해 저희가 제작 속도를 높이는 것과 동시에, 광고주사 내부에서 디자인안 승인 및 법무 검토 시 영업일 기준 최대 몇 일 이내에 피드백이 가능하실지 가이드라인을 주시면 정밀 반영하겠습니다.',
      alternativeText: '일정을 안정적으로 확보할 수 있도록 순차 방식이 아닌 병렬 실행 스케줄과 리스크를 원천 배제한 크리에이티브 제작 프로세스 WBS를 즉각 수립하여 약속을 입증하겠습니다.',
      scheduleAdjustText: '오늘 즉시 일 단위 타임라인 및 파트별 실시간 커뮤니케이션 채널을 개설하여, 지연이 발생할 경우 당일 대안 처리가 가능하도록 비상 체제를 가동하겠습니다.',
      riskDeliveryText: '다만 온에어 일정의 절대 엄수를 위해 기획 승인 데드라인인 이번 주 목요일을 넘길 경우, 매체 예약 취소 수수료 및 소재 심의 지연으로 부득이하게 라이브 일정이 밀릴 수 있어 상호 간의 빠른 승인이 핵심입니다.',
    },
    risks: {
      strategyRedirection: '낮음',
      scheduleDelay: '높음',
      budgetOverrun: '보통',
      internalReportFailure: '보통',
      kpiWeakening: '낮음',
      brandToneDilution: '낮음',
    },
    topActions: [
      '일 단위 진행 상황을 매일 아침 자동 공유하는 데일리 퀵-미팅 어젠다 수립',
      '촬영 및 제작 크루의 예비 일정(버퍼 데이)을 확보하여 우천이나 기기 장애 대비',
      '심의 통과 시간을 줄이기 위해 심의 대행 전문가 사전 컨택 및 준비',
    ],
    simulationData: {
      metricName: '캠페인 적기 온에어 가능성 및 위험도',
      yAxisLabel: 'On-time Delivery Index (%)',
      ticks: ['현재', '1주 후', '2주 후', '4주 후', '8주 후'],
      optionA: [50, 75, 90, 96, 99], // 선제적
      optionB: [50, 60, 70, 75, 80], // 점진
      optionC: [50, 40, 25, 15, 5], // 현상 유지
      optionALabel: 'WBS 정밀 기획 + 병렬 제작 가동 및 실시간 싱크',
      optionBLabel: '일정표 문서만 수정 후 단순 제작진 압박 체제',
      optionCLabel: '수동적 의사결정 대기 및 일정 순연 통보',
    },
  },

  '경쟁사 대비 차별점이 약해 보여요. 소비자 입장에서 와닿을지 모르겠어요.': {
    inputText: '경쟁사 대비 차별점이 약해 보여요. 소비자 입장에서 와닿을지 모르겠어요.',
    coreInterpretation: {
      surface: '기획안이 흔한 컨셉으로 보이며 시장에서 경쟁 우위나 바이럴 임팩트를 확보하기 어렵다고 걱정하는 상태',
      hiddenIntent: '광고주 내부에서 자사 제품의 스펙이 독보적이지 않은 상황이라 광고의 신선함만으로 이를 극복해야 하는 압박이 있으며, 밋밋한 기획안으로 마케팅 예산을 낭비할까 걱정하고 있음',
      coreMessage: '기존 안의 핵심 가치 소구 방식을 뒤틀어, 경쟁사가 시도하지 않은 독특한 ‘소비자 언어(Copy)’와 크리에이티브 ‘앵글(Angle)’을 적용한 차별화 보완 포인트 추가',
    },
    categories: {
      strategy: true,
      creative: true,
      brand: false,
      mediaPerformance: false,
      budget: false,
      scheduleOps: false,
      internalDecision: false,
      riskLegal: false,
    },
    priority: {
      urgency: 'MEDIUM',
      impact: 'HIGH',
      level: '전략적 개선 과제',
      reason: '포지셔닝 및 차별성 강화는 메시지의 핵심 설계를 재점검하는 고도화 과정이므로, 정밀한 포지셔닝 맵 비교와 크리에이티브 재해석이 필요합니다.',
    },
    actionGuides: {
      clarificationQuestions: [
        '광고주가 생각하는 경쟁사의 가장 두려운 마케팅 소구점 및 이를 극복하기 위해 본 캠페인에서 반드시 이겨야 하는 차별화 포인트 파악',
        '소비자가 진정으로 겪고 있는 페인 포인트 중 경쟁사가 아직 다루지 않은 숨은 틈새 욕구 레이블 정의',
      ],
      planningReview: [
        '경쟁사의 핵심 카피와 디자인 자산을 스크랩한 포지셔닝 맵 작성',
        '소비자 조사 데이터나 리뷰 마이닝을 통한 ‘소비자 실감 한마디’ 키워드 발췌 및 카피 투영',
      ],
      creativeTeam: [
        '동종 업계의 뻔한 클리셰(예: 모델의 직접 설명형)를 탈피하고, 독특한 상황 연출이나 반전 드라마가 있는 스토리텔링 구성 제안',
        '기존 카피의 추상적인 표현을 극도로 일상적이고 날것의 소비자 행동 묘사 카피로 교체',
      ],
      mediaTeam: [
        '경쟁사가 점유하지 못한 참신한 마이크로 타겟 대상 게릴라성 매체나 인플루언서 연계 채널 설계',
      ],
      prepMaterials: [
        '경쟁사 메시지 vs 대행사 메시지 포지셔닝 대비 맵',
        '일상 공감 및 타겟 엣지를 대폭 살린 ‘차별화 스페셜 카피 에디션’ 3선',
        '클리셰 타파 크리에이티브 콘셉트 시안 및 레퍼런스 비디오 클립',
      ],
      contactReportText: '경쟁사 대비 차별화 소구 부족 및 소비자 와닿음성에 대한 우려를 접수함. 경쟁 마케팅과의 전면 비교를 통해 비어 있는 크리에이티브 틈새 소구 영역을 특정하고, 타겟 소비자의 리얼 보이스를 녹여낸 스토리라인 및 차별화 카피를 정교화하여 차주 보완 보고를 진행하기로 함.',
    },
    commGuides: {
      acceptText: '경쟁사들이 쏟아내는 수많은 광고 메시지 사이에서 우리 브랜드만이 가질 수 있는 독보적인 차별성과 소비자 공감대가 반드시 필요하다는 말씀에 100% 동감합니다.',
      questionText: '경쟁 브랜드 중 마케팅적으로 가장 신경 쓰이거나, 우리가 이 기획안을 통해 완벽하게 선을 긋고 차별화하고 싶으신 대표적인 라이벌 포인트는 무엇이라고 보시는지요?',
      alternativeText: '경쟁사의 흔한 공식을 완전히 탈피한 색다른 앵글의 스토리 기획과 소비자의 실제 일상 언어(리얼 톡)를 활용한 엣지 있는 소구 강화 안을 보여드리겠습니다.',
      scheduleAdjustText: '전략 구조 자체의 전면 백지화보다는, 합의된 장점 위에 경쟁사를 직접적으로 반박하거나 우회하는 크리에이티브 엣지를 덧대는 형태로 신속하고 날카롭게 다듬어 오겠습니다.',
      riskDeliveryText: '다만 차별화에 지나치게 몰두하다 보면 대중성이나 직관성이 다소 희석되어 초반 이해도가 살짝 낮아질 수 있기에, 신선하면서도 직관적인 타협점을 도출하겠습니다.',
    },
    risks: {
      strategyRedirection: '높음',
      scheduleDelay: '보통',
      budgetOverrun: '낮음',
      internalReportFailure: '보통',
      kpiWeakening: '높음',
      brandToneDilution: '보통',
    },
    topActions: [
      '최근 경쟁사 3사의 광고 카피 및 소구 형태 매핑 테이블 완성',
      '소비자 커뮤니티 및 소셜 데이터에서 추출한 핵심 소구 키워드 10개 카피 바인딩',
      '뻔한 화법을 깨는 ‘크리에이티브 포지셔닝 브레이커’ 연출 요소 수정 제안',
    ],
    simulationData: {
      metricName: '시장 차별성 및 캠페인 바이럴 지수',
      yAxisLabel: 'Market Differentiation Score',
      ticks: ['현재', '1주 후', '2주 후', '4주 후', '8주 후'],
      optionA: [30, 60, 80, 95, 115], // 선제적
      optionB: [30, 45, 55, 65, 75], // 점진
      optionC: [30, 25, 20, 15, 10], // 현상 유지
      optionALabel: '틈새 앵글 전개 + 극적인 실감 카피 적용',
      optionBLabel: '일부 슬로건 문구 수정 및 기존 구도 타협 유지',
      optionCLabel: '기존 안의 안전성과 전통성 데이터 제시하며 변경 거부',
    },
  },
};

export function analyzeFeedback(text: string): AnalysisResult {
  const trimmed = text.trim();
  if (!trimmed) {
    throw new Error('피드백 내용이 비어있습니다.');
  }

  // 1. Check if exactly matches any of our pre-built high-quality presets
  const matchedPresetKey = Object.keys(presetAnalyses).find(
    (key) => key.toLowerCase() === trimmed.toLowerCase()
  );
  if (matchedPresetKey) {
    return { ...presetAnalyses[matchedPresetKey] };
  }

  // 2. If it's a custom text, do robust rule-based NLP to generate a high-quality tailored advertising guide
  const contains = (...keywords: string[]) => {
    return keywords.some((kw) => trimmed.toLowerCase().includes(kw.toLowerCase()));
  };

  // Default initializer for dynamic analysis
  const res: AnalysisResult = {
    inputText: text,
    coreInterpretation: {
      surface: `"${trimmed}" 라는 의견에 기반한 광고주의 즉각적인 소구 불만족 및 수정 요구 사항`,
      hiddenIntent: '해당 사항이 미해결될 시 캠페인 성과나 광고주의 사내 보고 성패가 불확실해지는 것에 대해 잠재적인 불안을 느끼고 있음',
      coreMessage: '단순 보정 형태가 아닌 명확한 광고 목표 중심의 당위성을 제시하면서, 광고주의 사내 설득과 실효성을 보증하는 기조로 대응 방안을 제안해야 함',
    },
    categories: {
      strategy: false,
      creative: false,
      brand: false,
      mediaPerformance: false,
      budget: false,
      scheduleOps: false,
      internalDecision: false,
      riskLegal: false,
    },
    priority: {
      urgency: 'MEDIUM',
      impact: 'MEDIUM',
      level: '신속 처리',
      reason: '광고주의 피드백에서 주요 키워드와 우선순위를 분석하여 조치 계획을 수립해야 합니다.',
    },
    actionGuides: {
      clarificationQuestions: [
        '광고주가 지적하신 현상이 가장 크게 문제된다고 체감하시는 예시나 상황이 있으실지 확인',
        '의견 반영 시 마지노선으로 정한 예산, 일정 및 톤앤매너 제안 한계 검토',
      ],
      planningReview: [
        '제시된 피드백의 본질을 파악해 전략 전면 재수정이 필요한 중대 기로인지 혹은 크리에이티브 표현 변용으로 해소 가능한지 판별',
        '유사 과거 캠페인 중 이와 유사한 수정 지점의 사례 연구 분석',
      ],
      creativeTeam: [
        '피드백 요구에 대응하여 대안으로 삼을 수 있는 메시지 베리에이션 2안 개발 및 대기',
        '비주얼 구성 요소 중 시선을 사로잡을 수 있는 명암 및 레이아웃 재배열',
      ],
      mediaTeam: [
        '매체 믹스 상 효율성 보강을 위한 노출 비율 및 단가 테이블 보정',
      ],
      prepMaterials: [
        '피드백 반영 후 예상 개선점 및 영향도 비교 분석 장표',
        '광고주 사내 보고용 핵심 요약 요약문 (One-Pager) 지원',
      ],
      contactReportText: `광고주의 "${trimmed}" 피드백을 신속히 접수하였으며, 실무진 관점에서 본질적인 방향 보완 및 세부 대안을 신속히 수립하여 차주 차기 회의 전까지 피드백 반영 보고서를 제출하기로 함.`,
    },
    commGuides: {
      acceptText: '전달해 주신 핵심 의견에 깊이 감사드리며, 이번 캠페인의 실효성을 한층 더 올리기 위해 대단히 귀중한 제안이라 판단됩니다.',
      questionText: '의견 주신 부분을 완벽히 반영하기 위해, 가장 우려하시는 파트가 전략의 기본 타겟팅인지 혹은 표현의 디테일인지 확인 요청 드립니다.',
      alternativeText: '보내주신 의견의 목적에 완전히 부합하면서도, 본래의 타겟 반응률과 일정을 엄수할 수 있는 가장 균형 잡힌 솔루션을 즉시 구성해 보고하겠습니다.',
      scheduleAdjustText: '수정에 따른 전체 런칭 일정에 병목이 없도록 데드라인을 준수하는 일 단위 마일스톤을 실시간 싱크하겠습니다.',
      riskDeliveryText: '다만 이 요구사항을 과도하게 수용할 시, 기존에 합의 완료되었던 캠페인 코어 밸류가 다소 약화될 가능성이 있어 보완 밸런스 안을 함께 제안하겠습니다.',
    },
    risks: {
      strategyRedirection: '보통',
      scheduleDelay: '보통',
      budgetOverrun: '낮음',
      internalReportFailure: '보통',
      kpiWeakening: '보통',
      brandToneDilution: '보통',
    },
    topActions: [
      '광고주 피드백의 실무 세부 해석 및 대응 방향 기준 확립',
      '팀 내부(기획/제작) 긴급 회의를 통해 실효적이고 균형 잡힌 대안 2종 도출',
      '광고주 담당 실무자와의 유선 조율을 통한 피드백 세부 의도 조기 확인',
    ],
    simulationData: {
      metricName: '의사결정 리스크 및 잔여 VOC 인덱스',
      yAxisLabel: 'VOC Risk Index (Lower is Better)',
      ticks: ['현재', '1주 후', '2주 후', '4주 후', '8주 후'],
      optionA: [100, 55, 35, 20, 10], // 선제
      optionB: [100, 75, 60, 45, 35], // 점진
      optionC: [100, 110, 120, 130, 140], // 현상 유지
      optionALabel: '선제적 피드백 보완 대안 수립 및 다각도 가이드 제시',
      optionBLabel: '요청 사항에 대한 피상적 보완 및 부분적 땜질 수정',
      optionCLabel: '기존 안의 핵심 장점만 강변하며 원안 유지 강행',
    },
  };

  // 3. Keyword-based reasoning layers to adapt variables dynamically:
  let scoreUrgency = 1; // 1: Low, 2: Medium, 3: High
  let scoreImpact = 1;

  // Keyword flags
  const creativeKeywords = ['임팩트', '눈에 안 띈다', '약하다', '디자인', '색상', '카피', '시안', '비주얼', '영상', '문구', '글자', '그림', '임펙트', '재미', '심심', '훅'];
  const brandKeywords = ['브랜드', '톤', '이미지', '우리답지 않다', '톤앤매너', '정합성', '아이덴티티', '컬러', '무드', '가볍다', '럭셔리', '고급', '싸 보인다'];
  const mediaKeywords = ['예산', '효율', '성과', 'ROAS', 'KPI', '매체', '믹스', '도달', '노출', '전환', '매출', '클릭', 'cpc', 'cpa', 'ctr', '지출', '돈'];
  const decisionKeywords = ['대표님', '내부', '설득', '보고', '의사결정', '회장님', '임원', '승인', '결재', '결정', '통과', '실무자', '윗선', '부장님', '사장님'];
  const scheduleKeywords = ['일정', '빠듯', '가능한가', '온에어', '시간', '언제', '데드라인', '날짜', '스케줄', '런칭', '라이브', '납기', '지연', '늦는다'];
  const strategyKeywords = ['차별점', '경쟁사', '비슷', '소비자', '와닿을지', '포지셔닝', '컨셉', '방향성', '전략', '차별화', '동종', '엣지'];
  const riskLegalKeywords = ['법무', '심의', '표현', '과장', '리스크', '소송', '제재', '규제', '가이드라인', '위반', '경고', '조건', '계약'];

  // Match and categorise
  if (contains(...creativeKeywords)) {
    res.categories.creative = true;
    scoreImpact = Math.max(scoreImpact, 2);
    scoreUrgency = Math.max(scoreUrgency, 2);
  }
  if (contains(...brandKeywords)) {
    res.categories.brand = true;
    scoreImpact = Math.max(scoreImpact, 3);
    scoreUrgency = Math.max(scoreUrgency, 2);
  }
  if (contains(...mediaKeywords)) {
    res.categories.mediaPerformance = true;
    res.categories.budget = true;
    scoreImpact = Math.max(scoreImpact, 3);
    scoreUrgency = Math.max(scoreUrgency, 2);
  }
  if (contains(...decisionKeywords)) {
    res.categories.internalDecision = true;
    scoreImpact = Math.max(scoreImpact, 3);
    scoreUrgency = Math.max(scoreUrgency, 3);
  }
  if (contains(...scheduleKeywords)) {
    res.categories.scheduleOps = true;
    scoreUrgency = Math.max(scoreUrgency, 3);
    scoreImpact = Math.max(scoreImpact, 2);
  }
  if (contains(...strategyKeywords)) {
    res.categories.strategy = true;
    scoreImpact = Math.max(scoreImpact, 3);
    scoreUrgency = Math.max(scoreUrgency, 2);
  }
  if (contains(...riskLegalKeywords)) {
    res.categories.riskLegal = true;
    scoreUrgency = Math.max(scoreUrgency, 3);
    scoreImpact = Math.max(scoreImpact, 3);
  }

  // If no categories were matched by keywords, default to strategy/creative as baseline
  if (!Object.values(res.categories).some(Boolean)) {
    res.categories.strategy = true;
    res.categories.creative = true;
  }

  // Determine priority levels based on urgency/impact matrices
  // Urgency & Impact mappings
  const urgMap = { 3: 'HIGH', 2: 'MEDIUM', 1: 'LOW' } as const;
  const impMap = { 3: 'HIGH', 2: 'MEDIUM', 1: 'LOW' } as const;
  res.priority.urgency = urgMap[scoreUrgency as 1|2|3];
  res.priority.impact = impMap[scoreImpact as 1|2|3];

  if (scoreUrgency === 3 && scoreImpact === 3) {
    res.priority.level = '즉각 대응 필수';
    res.priority.reason = '광고주사 최종 의사결정라인 및 타임라인에 치명적인 영향을 주는 중대 변수이며, 전면 전술 재검토나 최고결정권자 방어 논리가 시급히 요구되는 사안입니다.';
    res.risks.internalReportFailure = '높음';
    res.risks.strategyRedirection = '높음';
  } else if (scoreUrgency >= 2 && scoreImpact >= 2) {
    res.priority.level = '신속 처리';
    res.priority.reason = '캠페인 타겟팅 또는 크리에이티브 표현 수위에 중대 이슈가 감지되었습니다. 신속한 베리에이션 대안과 분석 장표를 확보하여 일정 및 완성도를 보강해야 합니다.';
    res.risks.scheduleDelay = '보통';
    res.risks.strategyRedirection = '보통';
  } else if (scoreImpact === 3) {
    res.priority.level = '전략적 개선 과제';
    res.priority.reason = '전체 캠페인 포지셔닝 및 효율성에 중장기 영향을 주는 전략적 요구 사항입니다. 충분한 근거 데이터, 타겟 마이닝을 거쳐 설득력 높은 차별안을 개정해야 합니다.';
    res.risks.kpiWeakening = '높음';
  } else {
    res.priority.level = '참고 및 모니터링';
    res.priority.reason = '캠페인 전체에 미치는 파급력이나 시급성이 비교적 제한적인 단순 의견이나 디테일 수치 튜닝입니다. 정기 컨택리포트에 반영하여 점진 보정으로도 극복 가능합니다.';
    res.priority.urgency = 'LOW';
    res.priority.impact = 'LOW';
    res.risks.strategyRedirection = '낮음';
    res.risks.scheduleDelay = '낮음';
    res.risks.budgetOverrun = '낮음';
    res.risks.internalReportFailure = '낮음';
    res.risks.kpiWeakening = '낮음';
    res.risks.brandToneDilution = '낮음';
  }

  // Specific high-quality logic tailored to parsed categories
  if (res.categories.brand) {
    res.coreInterpretation.surface = `브랜드 이미지의 일치성과 격조에 대한 광고주의 염려`;
    res.coreInterpretation.hiddenIntent = `이번 광고 시안이 고객사 브랜드 아이덴티티에 악영향을 주거나, 브랜드의 전통적 가치를 훼손하여 최고결정권자선에서 기각당할 것을 극도로 두려워하고 있습니다.`;
    res.coreInterpretation.coreMessage = `단순 그래픽 디테일 조정에 머무르지 말고, 브랜드 헤리티지를 안전하게 상속하면서도 캠페인 후킹 엣지를 지키는 '품격 있는 변칙안'을 설계해야 합니다.`;
    res.actionGuides.creativeTeam = [
      '폰트 스타일을 두꺼운 디스플레이 서체에서 모던하고 신뢰성 높은 산세리프 또는 클래식 고딕 계열로 교정',
      '전반적인 컬러 채도를 톤다운하여 깊이 있고 일관된 프리미엄 모노톤 분위기 연출',
    ];
    res.actionGuides.prepMaterials = [
      '브랜드 아이덴티티 부합도 비교 차트',
      '신뢰성과 세련미를 융합한 프리미엄 크리에이티브 대안 시안 2종',
    ];
    res.topActions = [
      '브랜드 아이덴티티를 훼손하는 불필요한 자극 요소 긴급 걷어내기',
      '신뢰감을 높일 수 있는 정제된 카피 톤 베리에이션 제작',
      '보고 시 우려를 해소할 명확한 브랜드 가이드라인 준수 논리 보강',
    ];
    res.commGuides.acceptText = '브랜드가 쌓아온 고유의 가치와 일관된 톤앤매너를 지키는 것이 이번 마케팅 성패를 좌우하는 절대적인 요소라는 점에 깊이 공감합니다.';
  }

  if (res.categories.mediaPerformance || res.categories.budget) {
    res.coreInterpretation.surface = `광고 예산 집행 효율 및 정량적 ROI에 대한 우려`;
    res.coreInterpretation.hiddenIntent = `정성적 크리에이티브만으로는 집행 비용의 정당성을 증명하기 어렵기 때문에, 상부에 보고할 명확한 전환 데이터나 정량적 목표 예측 수치가 필요합니다.`;
    res.coreInterpretation.coreMessage = `체계적인 매체 믹스 튜닝 데이터와 효율성 인덱스를 시각적으로 제안하여 광고비 낭비에 대한 고객사의 원천적인 불안감을 소멸시켜야 합니다.`;
    res.actionGuides.mediaTeam = [
      '도달률(Reach) 및 노출 빈도 시뮬레이션 데이터를 최신 트렌드로 업데이트하여 재검증',
      '미디어 파트너 연동을 통해 추가적인 보너스 구좌 및 디스카운트 딜 여부 긴급 문의',
    ];
    res.actionGuides.planningReview = [
      '성과 분석에 근거해 타겟 유입을 단기간에 끌어올릴 수 있는 리타겟팅 매체 비중 보강',
    ];
    res.topActions = [
      '매체별 단가 검증 및 고효율 지면으로의 버젯 쉬프트(Budget Shift) 기획',
      '예상 노출, 유입, 전환 시뮬레이션 상세 시각화 장표 보정',
      '광고주가 상부 보고 시 즉각 활용할 수 있는 성과 분석 모델 제안',
    ];
    res.commGuides.acceptText = '한정된 예산 안에서 단 1원의 광고비 누수도 없이 극대화된 효율을 이끌어내야 한다는 점에 100% 공감합니다.';
  }

  if (res.categories.scheduleOps) {
    res.coreInterpretation.surface = `온에어 일정 엄수 및 캠페인 준비 타임라인 촉박함에 대한 우려`;
    res.coreInterpretation.hiddenIntent = `일정 조율 실패로 매체 부킹 부도나 캠페인 타이밍 일실 시 담당 실무선에 가해질 징계 리스크에 직면해 있어, 철저한 대행사의 일정 지배력을 원합니다.`;
    res.coreInterpretation.coreMessage = `불투명한 제작 일정을 초 단위, 일 단위로 세분화한 마일스톤(WBS)을 시각적으로 공개하고, 상호 승인 피드백 데드라인을 직관적으로 통보하여 동반 타임 파트너십 구축.`;
    res.actionGuides.planningReview = [
      '순차 프로세스를 전격 중단하고 승인 대기와 동시에 촬영 소품/세트 사전 예약 등 병렬 진행 구조 수립',
      '일정 지연이 매체 런칭일에 미치는 최악의 시나리오 및 우회 경로(컨틴전시 플랜) 정의',
    ];
    res.topActions = [
      '즉각 배포 가능한 초정밀 일 단위 마이크로 스케줄러(WBS) 작성',
      '크리에이티브 작업 공정을 극도로 효율화할 수 있는 스튜디오 포맷 변경 기획',
      '광고주 의사결정 데드라인 알림 일정 가시화',
    ];
  }

  if (res.categories.strategy && !res.categories.brand && !res.categories.mediaPerformance) {
    res.coreInterpretation.surface = `시장 내 경쟁 강도 대비 시안의 차별성 부족 우려`;
    res.coreInterpretation.hiddenIntent = `유사 업종의 다른 캠페인들과 겹쳐 보임으로써 어렵게 확보한 마케팅 예산이 묻혀버릴까 걱정하고 있으며, 크리에이티브에 뚜렷한 독창성을 원하고 있습니다.`;
    res.coreInterpretation.coreMessage = `경쟁사들의 메시지 영역을 면밀히 분석한 포지셔닝 디비전 테이블을 제안하고, 비어있는 틈새 영역을 과감하게 선점하는 '크리에이티브 반전 앵글'을 보강해 확신 유도.`;
    res.topActions = [
      '주요 경쟁사 마케팅 화법 및 크리에이티브 요소 정밀 비교 대조표 작성',
      '소비자가 진정으로 공감할 수 있는 날것의 라이프스타일 훅 카피 베리에이션 추출',
      '클리셰를 비틀어 소비자 이목을 끄는 참신한 연출 요소 긴급 탑재',
    ];
  }

  return res;
}
