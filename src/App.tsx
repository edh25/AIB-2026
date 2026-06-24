import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Copy,
  FileText,
  HelpCircle,
  RefreshCw,
  Sparkles,
  AlertTriangle,
  Play,
  Check,
  ShieldAlert,
  Award,
  ChevronRight,
  MessageSquare,
  Compass,
  Zap,
  Users,
  Sliders,
  CheckCircle,
} from 'lucide-react';
import { presetExamples, analyzeFeedback, AnalysisResult } from './data/presets';
import PriorityMatrix from './components/PriorityMatrix';
import SimulationChart from './components/SimulationChart';

export default function App() {
  const [inputText, setInputText] = useState('');
  const [activePreset, setActivePreset] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  // Active sub-tab inside Action Guides
  const [activeGuideTab, setActiveGuideTab] = useState<'all' | 'clarification' | 'internal' | 'creative' | 'media'>('all');

  // Loading analysis step message
  const [analysisStep, setAnalysisStep] = useState('');

  // Auto scroll to results on mobile
  const resultRef = useRef<HTMLDivElement>(null);

  // Clipboard copy function
  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  // Trigger analysis
  const handleAnalyze = (textToAnalyze: string) => {
    const trimmed = textToAnalyze.trim();
    if (!trimmed) return;

    setIsAnalyzing(true);
    setAnalysisStep('광고주 피드백 어조 마이닝 중...');

    // Simulate multi-step analytical processing steps for premium realistic B2B feel
    setTimeout(() => {
      setAnalysisStep('숨겨진 부정 리스크 및 의사결정 의도 추론 중...');
      setTimeout(() => {
        setAnalysisStep('우선순위 산정 Matrix 가중치 모델 계산 중...');
        setTimeout(() => {
          setAnalysisStep('팀별 액션 가이드 및 온에어 리스크 매핑 중...');
          setTimeout(() => {
            try {
              const result = analyzeFeedback(trimmed);
              setAnalysisResult(result);
            } catch (error) {
              console.error(error);
            } finally {
              setIsAnalyzing(false);
              setAnalysisStep('');
              // Scroll to results in mobile views
              setTimeout(() => {
                if (window.innerWidth < 768 && resultRef.current) {
                  resultRef.current.scrollIntoView({ behavior: 'smooth' });
                }
              }, 100);
            }
          }, 400);
        }, 400);
      }, 400);
    }, 400);
  };

  // Auto-analyze presets on click
  const handleSelectPreset = (presetText: string, presetId: string) => {
    setInputText(presetText);
    setActivePreset(presetId);
    handleAnalyze(presetText);
  };

  // Reset function
  const handleReset = () => {
    setInputText('');
    setActivePreset(null);
    setAnalysisResult(null);
  };

  // Trigger default analysis on initial load with the 브랜드 톤 preset to make the UI look rich and fully featured right away!
  useEffect(() => {
    const defaultPreset = presetExamples[1]; // 브랜드 톤 불일치
    handleSelectPreset(defaultPreset.text, defaultPreset.id);
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F9FC] text-[#0B1F33] font-sans antialiased selection:bg-blue-100 selection:text-blue-800 pb-16">
      
      {/* 1. Header Area */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-[#E5EAF2] px-6 py-4 transition-all duration-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-md shadow-blue-100">
              <Sparkles className="w-5.5 h-5.5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-bold tracking-tight text-[#0B1F33]" id="app-title">Ad Feedback Guide AI</h1>
                <span className="hidden sm:inline-flex px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-100 rounded-full animate-pulse">
                  PROTOTYPE
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                광고주 피드백을 수치화된 의사결정 Matrix와 실행 가능한 액션 아이템으로 전환합니다
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-ping"></span>
              AI Guide Ready
            </span>
          </div>
        </div>
      </header>

      {/* 2. Main Dashboard Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Input Feedback (4 cols) */}
          <section className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-[#E5EAF2] shadow-sm space-y-6">
              
              <div className="flex items-center justify-between">
                <h2 className="text-base font-bold text-[#0B1F33] flex items-center gap-2">
                  <span className="w-1 h-4 bg-blue-600 rounded-full inline-block"></span>
                  광고주 피드백 분석
                </h2>
                {inputText && (
                  <button
                    onClick={handleReset}
                    className="text-xs font-semibold text-slate-400 hover:text-slate-600 flex items-center gap-1 transition-colors"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    초기화
                  </button>
                )}
              </div>

              {/* Feedback Input Box */}
              <div className="space-y-2">
                <label htmlFor="feedback-input" className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                  광고주 원문 피드백 입력
                </label>
                <div className="relative">
                  <textarea
                    id="feedback-input"
                    rows={5}
                    value={inputText}
                    onChange={(e) => {
                      setInputText(e.target.value);
                      if (activePreset) setActivePreset(null);
                    }}
                    placeholder="광고주의 날것 그대로의 피드백을 입력하세요. 예: '브랜드 톤이랑 조금 안 맞는 것 같아요.'"
                    className="w-full bg-[#F7F9FC] border border-[#E5EAF2] rounded-2xl p-4 text-sm font-medium text-[#0B1F33] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-blue-500 transition-all resize-none leading-relaxed"
                  />
                  {inputText && !isAnalyzing && (
                    <button
                      onClick={() => handleAnalyze(inputText)}
                      className="absolute bottom-3 right-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-1.5 px-3.5 text-xs font-bold shadow-md shadow-blue-100 flex items-center gap-1.5 transition-all"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      생성하기
                    </button>
                  )}
                </div>
              </div>

              {/* Preset buttons */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                    실무 자주 발생하는 피드백 예시
                  </span>
                  <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded-md">
                    6대 시나리오
                  </span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
                  {presetExamples.map((preset) => {
                    const isActive = activePreset === preset.id;
                    return (
                      <button
                        key={preset.id}
                        onClick={() => handleSelectPreset(preset.text, preset.id)}
                        className={`text-left p-3.5 rounded-2xl border transition-all duration-200 group relative overflow-hidden ${
                          isActive
                            ? 'bg-blue-50/60 border-blue-200 shadow-sm ring-1 ring-blue-200'
                            : 'bg-white border-[#E5EAF2] hover:bg-slate-50 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-start gap-3 relative z-10">
                          <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                            isActive ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600'
                          }`}>
                            {preset.id === 'impact' && <Zap className="w-4 h-4" />}
                            {preset.id === 'brand_tone' && <Award className="w-4 h-4" />}
                            {preset.id === 'budget_efficiency' && <Sliders className="w-4 h-4" />}
                            {preset.id === 'internal_persuasion' && <Users className="w-4 h-4" />}
                            {preset.id === 'schedule_risk' && <Sliders className="w-4 h-4" />}
                            {preset.id === 'differentiation' && <Compass className="w-4 h-4" />}
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-slate-800">{preset.title}</h4>
                            <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1 group-hover:text-slate-500 transition-colors">
                              {preset.description}
                            </p>
                          </div>
                        </div>
                        <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all">
                          <ChevronRight className="w-4 h-4" />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* B2B Framework Info panel (Toss style minimalist guide) */}
            <div className="bg-gradient-to-br from-[#0B1F33] to-[#1E293B] text-white rounded-3xl p-6 shadow-xl border border-slate-800 relative overflow-hidden">
              <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 opacity-5">
                <Sparkles className="w-64 h-64" />
              </div>
              <div className="relative z-10 space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400 bg-blue-900/40 px-2 py-0.5 rounded">
                  Methodology
                </span>
                <h3 className="text-base font-bold">AI Feedback Intelligence</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  광고주의 정성적·모호한 피드백(명시적 피드백)을 수집하여 지능형 레이어 분류 과정을 거칩니다. 
                  고객의 진짜 속뜻(숨은 의도)을 간파해 위기 상황을 방지하고 일 단위 액션과 시뮬레이션을 도출해 비즈니스 성공을 보장합니다.
                </p>
                <div className="pt-2 border-t border-slate-800 grid grid-cols-3 gap-2 text-center">
                  <div>
                    <div className="text-lg font-bold text-blue-400 font-mono">Step 1</div>
                    <div className="text-[10px] text-slate-400">의도 디코딩</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-blue-400 font-mono">Step 2</div>
                    <div className="text-[10px] text-slate-400">우선순위 산정</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-blue-400 font-mono">Step 3</div>
                    <div className="text-[10px] text-slate-400">리스크 예측</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Right Column: AI Analysis Guide Area (7 cols) */}
          <section className="lg:col-span-7 space-y-6" ref={resultRef}>
            
            {/* Loading Overlay */}
            <AnimatePresence mode="wait">
              {isAnalyzing && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="bg-white rounded-3xl p-12 border border-slate-200 shadow-md flex flex-col items-center justify-center text-center space-y-6 min-h-[500px]"
                >
                  <div className="relative flex items-center justify-center">
                    {/* Ring animation */}
                    <div className="w-16 h-16 rounded-full border-4 border-blue-50 border-t-blue-600 animate-spin"></div>
                    <Sparkles className="w-6 h-6 text-blue-600 absolute animate-pulse" />
                  </div>
                  <div className="space-y-2 max-w-sm">
                    <h3 className="text-base font-bold text-slate-800">피드백 다차원 분석 중</h3>
                    <p className="text-xs text-blue-600 font-mono font-bold tracking-tight animate-pulse min-h-[16px]">
                      {analysisStep}
                    </p>
                    <p className="text-xs text-slate-400 mt-2">
                      광고 전문가 지식 베이스와 긴급도 연산 지능을 결합하여 실무 가이드를 커스터마이징하고 있습니다.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Empty state when no feedback is typed/selected */}
              {!isAnalyzing && !analysisResult && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-white rounded-3xl p-12 border border-[#E5EAF2] shadow-sm flex flex-col items-center justify-center text-center space-y-4 min-h-[500px]"
                >
                  <div className="w-16 h-16 bg-[#F7F9FC] rounded-3xl flex items-center justify-center text-slate-300">
                    <FileText className="w-8 h-8" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-slate-800">광고주 피드백 대기 중</h3>
                    <p className="text-xs text-slate-400 max-w-xs leading-relaxed">
                      왼쪽 입력창에 원본 피드백을 직접 작성하거나, 준비된 6대 실무 예시 버튼을 눌러 정밀 AI 분석 결과를 확인해 보세요.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Analysis results panel */}
              {!isAnalyzing && analysisResult && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  
                  {/* Card 1: Core Interpretation */}
                  <div className="bg-white rounded-3xl p-6 border border-[#E5EAF2] shadow-sm space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full inline-block"></span>
                      <h3 className="text-sm font-bold text-[#0B1F33]">핵심 분석 레이어 (Core Interpretation)</h3>
                    </div>

                    <div className="grid grid-cols-1 gap-3.5">
                      
                      {/* Surface Feedback */}
                      <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide block mb-1">
                          표면 피드백 (Surface Voice)
                        </span>
                        <p className="text-xs font-bold text-slate-700 leading-relaxed">
                          "{analysisResult.inputText}"
                        </p>
                      </div>

                      {/* Hidden Intent */}
                      <div className="p-4 bg-blue-50/40 border border-blue-50/80 rounded-2xl">
                        <span className="text-[10px] font-bold text-blue-500 uppercase tracking-wide block mb-1">
                          숨겨진 진짜 의도 (Hidden Intent)
                        </span>
                        <p className="text-xs font-medium text-slate-800 leading-relaxed">
                          {analysisResult.coreInterpretation.hiddenIntent}
                        </p>
                      </div>

                      {/* Core message */}
                      <div className="p-4 bg-blue-600 rounded-2xl text-white relative overflow-hidden">
                        <div className="absolute right-0 bottom-0 translate-x-4 translate-y-4 opacity-10">
                          <Sparkles className="w-24 h-24" />
                        </div>
                        <span className="text-[10px] font-bold text-blue-200 uppercase tracking-wide block mb-1 relative z-10">
                          실무자가 파악해야 할 핵심 메시지 (Action Blueprint)
                        </span>
                        <p className="text-xs font-bold leading-relaxed relative z-10">
                          {analysisResult.coreInterpretation.coreMessage}
                        </p>
                      </div>

                    </div>
                  </div>

                  {/* Card 2: Categories (Feedback Type Classification) */}
                  <div className="bg-white rounded-3xl p-6 border border-[#E5EAF2] shadow-sm space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full inline-block"></span>
                        <h3 className="text-sm font-bold text-[#0B1F33]">피드백 유형 분류 (Classification)</h3>
                      </div>
                      <span className="text-[10px] text-slate-400 font-medium">유형 다각도 검출</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {[
                        { key: 'strategy', label: '전략 피드백', color: 'bg-emerald-50 text-emerald-700 border-emerald-150' },
                        { key: 'creative', label: '크리에이티브 피드백', color: 'bg-blue-50 text-blue-700 border-blue-150' },
                        { key: 'brand', label: '브랜드 피드백', color: 'bg-indigo-50 text-indigo-700 border-indigo-150' },
                        { key: 'mediaPerformance', label: '미디어/성과 피드백', color: 'bg-teal-50 text-teal-700 border-teal-150' },
                        { key: 'budget', label: '예산 피드백', color: 'bg-amber-50 text-amber-700 border-amber-150' },
                        { key: 'scheduleOps', label: '일정/운영 피드백', color: 'bg-sky-50 text-sky-700 border-sky-150' },
                        { key: 'internalDecision', label: '내부 의사결정 피드백', color: 'bg-violet-50 text-violet-700 border-violet-150' },
                        { key: 'riskLegal', label: '리스크/법무 피드백', color: 'bg-rose-50 text-rose-700 border-rose-150' },
                      ].map((cat) => {
                        const isActive = analysisResult.categories[cat.key as keyof typeof analysisResult.categories];
                        return (
                          <span
                            key={cat.key}
                            className={`px-3 py-1.5 rounded-full text-xs font-bold border transition-all ${
                              isActive
                                ? `${cat.color} font-extrabold shadow-sm scale-102`
                                : 'bg-slate-50 text-slate-300 border-slate-100 pointer-events-none line-through decoration-slate-200'
                            }`}
                          >
                            {isActive ? '● ' : '○ '}
                            {cat.label}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {/* Card 3: Priority Matrix */}
                  <div className="bg-white rounded-3xl p-6 border border-[#E5EAF2] shadow-sm">
                    <PriorityMatrix
                      urgency={analysisResult.priority.urgency}
                      impact={analysisResult.priority.impact}
                      level={analysisResult.priority.level}
                      reason={analysisResult.priority.reason}
                    />
                  </div>

                  {/* Card 4: Actionable Guide Card */}
                  <div className="bg-white rounded-3xl p-6 border border-[#E5EAF2] shadow-sm space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full inline-block"></span>
                        <h3 className="text-sm font-bold text-[#0B1F33]">실무 대응 가이드 (Action Guide)</h3>
                      </div>
                      <span className="text-[10px] font-mono font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                        팀별 액션 할당
                      </span>
                    </div>

                    {/* Roles/Action tabs */}
                    <div className="flex border-b border-slate-100 pb-px overflow-x-auto gap-1">
                      {[
                        { id: 'all', label: '전체 보기', icon: FileText },
                        { id: 'clarification', label: '광고주 확인', icon: HelpCircle },
                        { id: 'internal', label: '기획팀 검토', icon: Compass },
                        { id: 'creative', label: '제작/디자인', icon: Sparkles },
                        { id: 'media', label: '미디어/성과', icon: Sliders },
                      ].map((tab) => {
                        const IconComponent = tab.icon;
                        const isSelected = activeGuideTab === tab.id;
                        return (
                          <button
                            key={tab.id}
                            onClick={() => setActiveGuideTab(tab.id as any)}
                            className={`flex items-center gap-1.5 px-3 py-2 text-xs font-bold border-b-2 whitespace-nowrap transition-all ${
                              isSelected
                                ? 'border-blue-600 text-blue-600'
                                : 'border-transparent text-slate-400 hover:text-slate-600'
                            }`}
                          >
                            <IconComponent className="w-3.5 h-3.5" />
                            {tab.label}
                          </button>
                        );
                      })}
                    </div>

                    {/* Tab Contents */}
                    <div className="space-y-4 pt-2">
                      <div className="grid grid-cols-1 gap-3 text-xs">
                        
                        {/* 1. Clarification Questions */}
                        {(activeGuideTab === 'all' || activeGuideTab === 'clarification') && (
                          <div className="p-4 bg-slate-50 rounded-2xl space-y-2.5">
                            <h4 className="font-bold text-slate-700 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full inline-block"></span>
                              ❓ 광고주에게 재확인할 질문 (Clarifying Questions)
                            </h4>
                            <ul className="list-decimal list-inside space-y-1.5 text-slate-600 font-medium pl-1">
                              {analysisResult.actionGuides.clarificationQuestions.map((q, idx) => (
                                <li key={idx} className="leading-relaxed">{q}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* 2. Planning Review */}
                        {(activeGuideTab === 'all' || activeGuideTab === 'internal') && (
                          <div className="p-4 bg-slate-50 rounded-2xl space-y-2.5">
                            <h4 className="font-bold text-slate-700 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full inline-block"></span>
                              📑 내부 기획팀 검토 사항 (Planner Checklist)
                            </h4>
                            <ul className="list-decimal list-inside space-y-1.5 text-slate-600 font-medium pl-1">
                              {analysisResult.actionGuides.planningReview.map((q, idx) => (
                                <li key={idx} className="leading-relaxed">{q}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* 3. Creative Team */}
                        {(activeGuideTab === 'all' || activeGuideTab === 'creative') && (
                          <div className="p-4 bg-slate-50 rounded-2xl space-y-2.5">
                            <h4 className="font-bold text-slate-700 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 bg-violet-500 rounded-full inline-block"></span>
                              🎨 제작/디자인팀 전달 수정 방향 (Creative Direction)
                            </h4>
                            <ul className="list-decimal list-inside space-y-1.5 text-slate-600 font-medium pl-1">
                              {analysisResult.actionGuides.creativeTeam.map((q, idx) => (
                                <li key={idx} className="leading-relaxed">{q}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* 4. Media Team */}
                        {(activeGuideTab === 'all' || activeGuideTab === 'media') && (
                          <div className="p-4 bg-slate-50 rounded-2xl space-y-2.5">
                            <h4 className="font-bold text-slate-700 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 bg-teal-500 rounded-full inline-block"></span>
                              📊 미디어/성과팀 확인 사항 (Media Alignment)
                            </h4>
                            <ul className="list-decimal list-inside space-y-1.5 text-slate-600 font-medium pl-1">
                              {analysisResult.actionGuides.mediaTeam.map((q, idx) => (
                                <li key={idx} className="leading-relaxed">{q}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Shared Prep and Report sections always visible at the end of All or appropriate context */}
                        {activeGuideTab === 'all' && (
                          <>
                            <div className="p-4 bg-slate-50 rounded-2xl space-y-2.5">
                              <h4 className="font-bold text-slate-700 flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full inline-block"></span>
                                💼 다음 회의 전 준비해야 할 필수 리포트/자료
                              </h4>
                              <ul className="list-disc list-inside space-y-1.5 text-slate-600 font-medium pl-1">
                                {analysisResult.actionGuides.prepMaterials.map((q, idx) => (
                                  <li key={idx} className="leading-relaxed">{q}</li>
                                ))}
                              </ul>
                            </div>

                            {/* Contact Report box with copy */}
                            <div className="p-4 bg-blue-50/20 border border-blue-100 rounded-2xl space-y-2 relative">
                              <div className="flex items-center justify-between">
                                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">
                                  📝 회의록 및 컨택리포트 기록용 추천 문장
                                </span>
                                <button
                                  onClick={() => handleCopy(analysisResult.actionGuides.contactReportText, 'contact_report')}
                                  className="text-slate-400 hover:text-blue-600 flex items-center gap-1 text-[10px] font-bold transition-all"
                                >
                                  {copiedText === 'contact_report' ? (
                                    <>
                                      <Check className="w-3 h-3 text-emerald-500" />
                                      <span className="text-emerald-600">복사 완료</span>
                                    </>
                                  ) : (
                                    <>
                                      <Copy className="w-3 h-3" />
                                      <span>문장 복사</span>
                                    </>
                                  )}
                                </button>
                              </div>
                              <p className="text-xs text-slate-700 italic leading-relaxed font-semibold">
                                "{analysisResult.actionGuides.contactReportText}"
                              </p>
                            </div>
                          </>
                        )}

                      </div>
                    </div>
                  </div>

                  {/* Card 5: Client Communication Guide Card */}
                  <div className="bg-white rounded-3xl p-6 border border-[#E5EAF2] shadow-sm space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full inline-block"></span>
                        <h3 className="text-sm font-bold text-[#0B1F33]">광고주 커뮤니케이션 톤앤매너 가이드</h3>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                        설득력 보증 스크립트
                      </span>
                    </div>

                    <div className="space-y-3.5">
                      
                      {/* Interactive block 1: Feedback acceptance */}
                      <div className="p-4 bg-slate-50 border border-slate-150 rounded-2xl space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold text-[#0B1F33] bg-slate-200 px-1.5 py-0.5 rounded">
                            Step 1. 피드백 수용과 기조 공감
                          </span>
                          <button
                            onClick={() => handleCopy(analysisResult.commGuides.acceptText, 'comm_step1')}
                            className="text-slate-400 hover:text-blue-600 text-[10px] font-bold flex items-center gap-1"
                          >
                            {copiedText === 'comm_step1' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                            <span>복사</span>
                          </button>
                        </div>
                        <p className="text-xs text-slate-700 leading-relaxed font-medium">
                          {analysisResult.commGuides.acceptText}
                        </p>
                      </div>

                      {/* Interactive block 2: Soft question clarifying scope */}
                      <div className="p-4 bg-slate-50 border border-slate-150 rounded-2xl space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold text-[#0B1F33] bg-slate-200 px-1.5 py-0.5 rounded">
                            Step 2. 긍정적 차별화 확인 질문
                          </span>
                          <button
                            onClick={() => handleCopy(analysisResult.commGuides.questionText, 'comm_step2')}
                            className="text-slate-400 hover:text-blue-600 text-[10px] font-bold flex items-center gap-1"
                          >
                            {copiedText === 'comm_step2' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                            <span>복사</span>
                          </button>
                        </div>
                        <p className="text-xs text-slate-700 leading-relaxed font-medium">
                          {analysisResult.commGuides.questionText}
                        </p>
                      </div>

                      {/* Interactive block 3: Alternative suggestions */}
                      <div className="p-4 bg-slate-50 border border-slate-150 rounded-2xl space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold text-blue-700 bg-blue-100 px-1.5 py-0.5 rounded">
                            Step 3. 리스크 완화형 대안 제시
                          </span>
                          <button
                            onClick={() => handleCopy(analysisResult.commGuides.alternativeText, 'comm_step3')}
                            className="text-slate-400 hover:text-blue-600 text-[10px] font-bold flex items-center gap-1"
                          >
                            {copiedText === 'comm_step3' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                            <span>복사</span>
                          </button>
                        </div>
                        <p className="text-xs text-slate-800 leading-relaxed font-bold">
                          {analysisResult.commGuides.alternativeText}
                        </p>
                      </div>

                      {/* Interactive block 4: Timeline / Scope adjust negotiation */}
                      <div className="p-4 bg-slate-50 border border-slate-150 rounded-2xl space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold text-slate-700 bg-slate-200 px-1.5 py-0.5 rounded">
                            Step 4. 일정 및 제작 범위 협상 표현
                          </span>
                          <button
                            onClick={() => handleCopy(analysisResult.commGuides.scheduleAdjustText, 'comm_step4')}
                            className="text-slate-400 hover:text-blue-600 text-[10px] font-bold flex items-center gap-1"
                          >
                            {copiedText === 'comm_step4' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                            <span>복사</span>
                          </button>
                        </div>
                        <p className="text-xs text-slate-700 leading-relaxed font-medium">
                          {analysisResult.commGuides.scheduleAdjustText}
                        </p>
                      </div>

                      {/* Interactive block 5: Warning on risk soft delivery */}
                      <div className="p-4 bg-rose-50/40 border border-rose-100 rounded-2xl space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold text-rose-700 bg-rose-50 px-1.5 py-0.5 rounded">
                            ⚠️ 리스크 유선 및 서면 소프트 경고 표현
                          </span>
                          <button
                            onClick={() => handleCopy(analysisResult.commGuides.riskDeliveryText, 'comm_step5')}
                            className="text-slate-400 hover:text-rose-600 text-[10px] font-bold flex items-center gap-1"
                          >
                            {copiedText === 'comm_step5' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                            <span>복사</span>
                          </button>
                        </div>
                        <p className="text-xs text-slate-700 leading-relaxed font-medium">
                          {analysisResult.commGuides.riskDeliveryText}
                        </p>
                      </div>

                      {/* Unified copy button */}
                      <button
                        onClick={() => {
                          const fullScript = `[수용] ${analysisResult.commGuides.acceptText}\n\n[확인] ${analysisResult.commGuides.questionText}\n\n[대안] ${analysisResult.commGuides.alternativeText}\n\n[일정협상] ${analysisResult.commGuides.scheduleAdjustText}\n\n[리스크통보] ${analysisResult.commGuides.riskDeliveryText}`;
                          handleCopy(fullScript, 'comm_all');
                        }}
                        className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-4 rounded-2xl text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
                      >
                        {copiedText === 'comm_all' ? (
                          <>
                            <Check className="w-4 h-4 text-emerald-400" />
                            <span>전체 시나리오 클립보드 복사 완료!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            <span>전체 다이얼로그 가이드 일괄 복사하기</span>
                          </>
                        )}
                      </button>

                    </div>
                  </div>

                  {/* Card 6: Risks & Simulation */}
                  <div className="bg-white rounded-3xl p-6 border border-[#E5EAF2] shadow-sm space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full inline-block"></span>
                        <h3 className="text-sm font-bold text-[#0B1F33]">대응 방치 시 유발될 광고 성과 리스크</h3>
                      </div>
                      <span className="text-[10px] font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full flex items-center gap-1 animate-pulse">
                        <AlertTriangle className="w-3.5 h-3.5" />
                        시뮬레이션 활성화
                      </span>
                    </div>

                    {/* Risk matrix layout */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {[
                        { label: '전략 재수정 리스크', value: analysisResult.risks.strategyRedirection },
                        { label: '크레이티브 지연', value: analysisResult.risks.scheduleDelay },
                        { label: '예산 집행 파행', value: analysisResult.risks.budgetOverrun },
                        { label: '사내 보고 실패율', value: analysisResult.risks.internalReportFailure },
                        { label: '캠페인 KPI 부도율', value: analysisResult.risks.kpiWeakening },
                        { label: '브랜드 가치 희석', value: analysisResult.risks.brandToneDilution },
                      ].map((risk, i) => {
                        const isHigh = risk.value === '높음';
                        const isMedium = risk.value === '보통';
                        
                        return (
                          <div key={i} className="p-3 bg-slate-50 border border-slate-100 rounded-2xl flex flex-col justify-between space-y-1.5">
                            <span className="text-[10px] font-bold text-slate-500">{risk.label}</span>
                            <div className="flex items-center justify-between">
                              <span className={`text-xs font-black ${
                                isHigh ? 'text-rose-600' : isMedium ? 'text-amber-500' : 'text-slate-500'
                              }`}>
                                {risk.value}
                              </span>
                              <span className={`w-2 h-2 rounded-full ${
                                isHigh ? 'bg-rose-500 animate-ping' : isMedium ? 'bg-amber-500' : 'bg-slate-400'
                              }`}></span>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Simulation Chart */}
                    <div className="pt-4 border-t border-slate-100">
                      <SimulationChart
                        metricName={analysisResult.simulationData.metricName}
                        yAxisLabel={analysisResult.simulationData.yAxisLabel}
                        ticks={analysisResult.simulationData.ticks}
                        optionA={analysisResult.simulationData.optionA}
                        optionB={analysisResult.simulationData.optionB}
                        optionC={analysisResult.simulationData.optionC}
                        optionALabel={analysisResult.simulationData.optionALabel}
                        optionBLabel={analysisResult.simulationData.optionBLabel}
                        optionCLabel={analysisResult.simulationData.optionCLabel}
                      />
                    </div>
                  </div>

                  {/* Card 7: Recommended Next Action (Top 3 checklist) */}
                  <div className="bg-gradient-to-tr from-blue-600 to-blue-700 text-white rounded-3xl p-6 shadow-md space-y-4 relative overflow-hidden">
                    <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 opacity-10">
                      <CheckCircle2 className="w-48 h-48" />
                    </div>
                    <div className="flex items-center justify-between relative z-10">
                      <div className="flex items-center gap-2">
                        <Award className="w-5 h-5 text-blue-200" />
                        <h3 className="text-sm font-bold text-white">실무 최우선 긴급 Action TOP 3</h3>
                      </div>
                      <span className="text-[10px] font-bold bg-white/20 px-2 py-0.5 rounded-full text-blue-100 uppercase tracking-wider">
                        Immediate Task
                      </span>
                    </div>

                    <div className="space-y-3 relative z-10">
                      {analysisResult.topActions.map((action, idx) => (
                        <div key={idx} className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-3.5 rounded-2xl border border-white/10 hover:bg-white/15 transition-all">
                          <div className="w-5 h-5 rounded-full bg-white text-blue-600 font-bold font-mono text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                            {idx + 1}
                          </div>
                          <p className="text-xs font-bold leading-relaxed">
                            {action}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                </motion.div>
              )}
            </AnimatePresence>

          </section>

        </div>
      </main>

    </div>
  );
}
