import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, Zap, Compass, HelpCircle } from 'lucide-react';

interface PriorityMatrixProps {
  urgency: 'HIGH' | 'MEDIUM' | 'LOW';
  impact: 'HIGH' | 'MEDIUM' | 'LOW';
  level: '즉각 대응 필수' | '신속 처리' | '전략적 개선 과제' | '참고 및 모니터링';
  reason: string;
}

export default function PriorityMatrix({ urgency, impact, level, reason }: PriorityMatrixProps) {
  // Determine which quadrant is active
  // x-axis: Impact (LOW/MEDIUM vs HIGH), y-axis: Urgency (HIGH/MEDIUM vs LOW)
  const isHighUrgency = urgency === 'HIGH' || urgency === 'MEDIUM';
  const isHighImpact = impact === 'HIGH' || impact === 'MEDIUM';

  const quadrants = [
    {
      id: 'fast_track',
      name: '신속 처리',
      subtitle: '고긴급 · 저영향·단발',
      color: 'bg-sky-50 text-sky-600 border-sky-100',
      activeColor: 'bg-sky-500 text-white shadow-lg shadow-sky-100 ring-4 ring-sky-100 border-sky-300',
      icon: Zap,
      isActive: isHighUrgency && !isHighImpact,
      positionClass: 'top-left',
    },
    {
      id: 'immediate',
      name: '즉각 대응 필수',
      subtitle: '고긴급 · 고영향·반복',
      color: 'bg-blue-50 text-blue-600 border-blue-100',
      activeColor: 'bg-blue-600 text-white shadow-lg shadow-blue-100 ring-4 ring-blue-100 border-blue-300',
      icon: ShieldAlert,
      isActive: isHighUrgency && isHighImpact,
      positionClass: 'top-right',
    },
    {
      id: 'reference',
      name: '참고 및 모니터링',
      subtitle: '저긴급 · 저영향·단발',
      color: 'bg-slate-50 text-slate-500 border-slate-100',
      activeColor: 'bg-slate-600 text-white shadow-lg shadow-slate-100 ring-4 ring-slate-100 border-slate-300',
      icon: HelpCircle,
      isActive: !isHighUrgency && !isHighImpact,
      positionClass: 'bottom-left',
    },
    {
      id: 'strategic',
      name: '전략적 개선 과제',
      subtitle: '저긴급 · 고영향·반복',
      color: 'bg-indigo-50 text-indigo-700 border-indigo-100',
      activeColor: 'bg-indigo-900 text-white shadow-lg shadow-indigo-100 ring-4 ring-indigo-200 border-indigo-900',
      icon: Compass,
      isActive: !isHighUrgency && isHighImpact,
      positionClass: 'bottom-right',
    },
  ];

  const getPriorityBadgeStyles = () => {
    switch (level) {
      case '즉각 대응 필수':
        return 'bg-blue-600 text-white ring-4 ring-blue-100';
      case '신속 처리':
        return 'bg-sky-500 text-white ring-4 ring-sky-100';
      case '전략적 개선 과제':
        return 'bg-indigo-900 text-white ring-4 ring-indigo-100';
      case '참고 및 모니터링':
        return 'bg-slate-500 text-white ring-4 ring-slate-100';
      default:
        return 'bg-slate-500 text-white';
    }
  };

  return (
    <div className="space-y-4" id="priority-matrix-card">
      <div className="flex items-start justify-between">
        <div>
          <h4 className="text-sm font-semibold text-slate-800">우선순위 산정 Matrix</h4>
          <p className="text-xs text-slate-500 mt-0.5">긴급도와 비즈니스 영향도를 기준으로 분류된 최적 대응 우선순위입니다.</p>
        </div>
        <span className={`px-2.5 py-1 text-xs font-bold rounded-full ${getPriorityBadgeStyles()}`}>
          {level}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 aspect-video sm:aspect-square md:aspect-video max-h-[280px] w-full relative">
        {quadrants.map((q) => {
          const Icon = q.icon;
          return (
            <motion.div
              key={q.id}
              initial={{ scale: 0.98, opacity: 0.85 }}
              animate={q.isActive ? { scale: 1, opacity: 1 } : { scale: 0.98, opacity: 0.45 }}
              transition={{ duration: 0.3 }}
              className={`relative flex flex-col justify-between p-4 rounded-2xl border text-left transition-all ${
                q.isActive ? q.activeColor : `${q.color} border-dashed`
              }`}
            >
              {/* Grid Axis labels internally */}
              <div className="flex items-start justify-between">
                <span className="text-xs font-semibold tracking-wider opacity-75">{q.subtitle}</span>
                <Icon className={`w-5 h-5 ${q.isActive ? 'animate-pulse' : 'opacity-60'}`} />
              </div>
              <div>
                <h5 className="text-base font-bold leading-tight">{q.name}</h5>
              </div>

              {/* Pulsing indicator overlay for the active quadrant */}
              {q.isActive && (
                <span className="absolute top-2 right-2 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
              )}
            </motion.div>
          );
        })}

        {/* Outer Axis Indicators */}
        <div className="absolute -left-3 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] font-bold text-slate-400 tracking-wider pointer-events-none hidden sm:block">
          긴급도 (URGENCY)
        </div>
        <div className="absolute left-1/2 -bottom-4.5 -translate-x-1/2 text-[10px] font-bold text-slate-400 tracking-wider pointer-events-none hidden sm:block">
          영향도 및 반복성 (IMPACT)
        </div>
      </div>

      {/* Analysis Reason Card */}
      <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 text-xs text-slate-600 leading-relaxed">
        <span className="font-bold text-slate-800 block mb-1">💡 판단 사유</span>
        {reason}
      </div>
    </div>
  );
}
