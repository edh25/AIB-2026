import React, { useState } from 'react';
import { motion } from 'motion/react';
import { TrendingDown, Sparkles } from 'lucide-react';

interface SimulationChartProps {
  metricName: string;
  yAxisLabel: string;
  ticks: string[];
  optionA: number[];
  optionB: number[];
  optionC: number[];
  optionALabel: string;
  optionBLabel: string;
  optionCLabel: string;
}

export default function SimulationChart({
  metricName,
  yAxisLabel,
  ticks,
  optionA,
  optionB,
  optionC,
  optionALabel,
  optionBLabel,
  optionCLabel,
}: SimulationChartProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeLegend, setActiveLegend] = useState<'A' | 'B' | 'C' | null>(null);

  // Chart dimensions
  const width = 500;
  const height = 240;
  const paddingLeft = 40;
  const paddingRight = 20;
  const paddingTop = 20;
  const paddingBottom = 40;

  const chartWidth = width - paddingLeft - paddingRight;
  const chartHeight = height - paddingTop - paddingBottom;

  // Find min/max values
  const allValues = [...optionA, ...optionB, ...optionC];
  const maxValue = Math.max(...allValues, 160);
  const minValue = Math.min(...allValues, 0);
  const valueRange = maxValue - minValue;

  // Scale functions
  const getX = (index: number) => {
    return paddingLeft + (index / (ticks.length - 1)) * chartWidth;
  };

  const getY = (value: number) => {
    const relativeValue = (value - minValue) / valueRange;
    return height - paddingBottom - relativeValue * chartHeight;
  };

  // Build SVG Path strings
  const getPathD = (data: number[]) => {
    return data
      .map((val, idx) => {
        const x = getX(idx);
        const y = getY(val);
        return `${idx === 0 ? 'M' : 'L'} ${x} ${y}`;
      })
      .join(' ');
  };

  const pathA = getPathD(optionA);
  const pathB = getPathD(optionB);
  const pathC = getPathD(optionC);

  // Y-axis ticks
  const yTicks = [0, 40, 80, 120, 160];

  return (
    <div className="space-y-4" id="simulation-chart-card">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h4 className="text-sm font-semibold text-slate-800 flex items-center gap-1.5">
            <TrendingDown className="w-4 h-4 text-blue-600" />
            시간 흐름에 따른 리스크 추이 시뮬레이션
          </h4>
          <p className="text-xs text-slate-500 mt-0.5">
            피드백 대응 시나리오별 8주 누적 비즈니스 영향 시각화
          </p>
        </div>
        <div className="text-right">
          <span className="text-[10px] font-mono text-slate-400 block tracking-wider uppercase">Metric</span>
          <span className="text-xs font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-full">{metricName}</span>
        </div>
      </div>

      {/* SVG Canvas wrapper with responsive aspect ratio */}
      <div className="relative bg-slate-50 border border-slate-100 p-4 rounded-2xl">
        <div className="text-[10px] font-semibold text-slate-400 absolute top-2 left-4">
          {yAxisLabel}
        </div>

        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto overflow-visible select-none">
          {/* Grid lines & Y Axis values */}
          {yTicks.map((tick, i) => {
            const y = getY(tick);
            return (
              <g key={i} className="opacity-40">
                <line
                  x1={paddingLeft}
                  y1={y}
                  x2={width - paddingRight}
                  y2={y}
                  stroke="#E5EAF2"
                  strokeWidth="1"
                  strokeDasharray={tick === 0 ? 'none' : '3 3'}
                />
                <text
                  x={paddingLeft - 8}
                  y={y + 3}
                  textAnchor="end"
                  className="font-mono text-[9px] fill-slate-400 font-bold"
                >
                  {tick}
                </text>
              </g>
            );
          })}

          {/* X Axis ticks */}
          {ticks.map((tick, idx) => {
            const x = getX(idx);
            return (
              <g key={idx}>
                <line
                  x1={x}
                  y1={paddingTop}
                  x2={x}
                  y2={height - paddingBottom}
                  stroke="#E5EAF2"
                  strokeWidth="1"
                  className="opacity-15"
                />
                <text
                  x={x}
                  y={height - paddingBottom + 16}
                  textAnchor="middle"
                  className="text-[10px] font-medium fill-slate-500"
                >
                  {tick}
                </text>
              </g>
            );
          })}

          {/* Interactive vertical hover guide line */}
          {hoveredIndex !== null && (
            <line
              x1={getX(hoveredIndex)}
              y1={paddingTop}
              x2={getX(hoveredIndex)}
              y2={height - paddingBottom}
              stroke="#0064FF"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              className="opacity-50"
            />
          )}

          {/* Line paths */}
          {/* Option C: Status Quo (Grey) */}
          <motion.path
            d={pathC}
            fill="none"
            stroke="#94A3B8"
            strokeWidth={activeLegend === 'C' ? 4 : 2}
            strokeDasharray="4 4"
            opacity={activeLegend === null || activeLegend === 'C' ? 0.7 : 0.25}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8 }}
          />

          {/* Option B: Gradual Improvement (Navy) */}
          <motion.path
            d={pathB}
            fill="none"
            stroke="#0B1F33"
            strokeWidth={activeLegend === 'B' ? 4 : 2.5}
            opacity={activeLegend === null || activeLegend === 'B' ? 0.8 : 0.25}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          />

          {/* Option A: Proactive Action (Blue) */}
          <motion.path
            d={pathA}
            fill="none"
            stroke="#0064FF"
            strokeWidth={activeLegend === 'A' ? 5 : 3.5}
            opacity={activeLegend === null || activeLegend === 'A' ? 1 : 0.25}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

          {/* Data Points Overlay */}
          {ticks.map((_, idx) => {
            const x = getX(idx);
            const valA = optionA[idx];
            const valB = optionB[idx];
            const valC = optionC[idx];

            const isHovered = hoveredIndex === idx;

            return (
              <g key={idx}>
                {/* Hotspot transparent vertical column for easier hover */}
                <rect
                  x={x - 20}
                  y={paddingTop}
                  width={40}
                  height={chartHeight}
                  fill="transparent"
                  className="cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                />

                {/* Option C points */}
                <circle
                  cx={x}
                  cy={getY(valC)}
                  r={isHovered ? 5 : 3}
                  fill="#FFFFFF"
                  stroke="#94A3B8"
                  strokeWidth={2}
                  className="transition-all duration-150 pointer-events-none"
                  opacity={activeLegend === null || activeLegend === 'C' ? 1 : 0.25}
                />

                {/* Option B points */}
                <circle
                  cx={x}
                  cy={getY(valB)}
                  r={isHovered ? 5 : 3}
                  fill="#FFFFFF"
                  stroke="#0B1F33"
                  strokeWidth={2.5}
                  className="transition-all duration-150 pointer-events-none"
                  opacity={activeLegend === null || activeLegend === 'B' ? 1 : 0.25}
                />

                {/* Option A points */}
                <circle
                  cx={x}
                  cy={getY(valA)}
                  r={isHovered ? 6 : 4}
                  fill={isHovered ? '#0064FF' : '#FFFFFF'}
                  stroke="#0064FF"
                  strokeWidth={3}
                  className="transition-all duration-150 pointer-events-none"
                  opacity={activeLegend === null || activeLegend === 'A' ? 1 : 0.25}
                />
              </g>
            );
          })}
        </svg>

        {/* Hover Tooltip Overlay */}
        {hoveredIndex !== null && (
          <div className="absolute top-2 right-4 bg-white shadow-md border border-slate-100 rounded-lg p-2.5 text-[11px] space-y-1 pointer-events-none z-10 animate-fade-in">
            <div className="font-bold text-slate-700 border-b border-slate-100 pb-1 mb-1">
              📍 {ticks[hoveredIndex]} 시점 예상 지수
            </div>
            <div className="flex justify-between gap-6 items-center text-blue-600 font-bold">
              <span>선제적 조치:</span>
              <span className="font-mono text-xs">{optionA[hoveredIndex]}</span>
            </div>
            <div className="flex justify-between gap-6 items-center text-slate-700 font-semibold">
              <span>점진적 개선:</span>
              <span className="font-mono text-xs">{optionB[hoveredIndex]}</span>
            </div>
            <div className="flex justify-between gap-6 items-center text-slate-400 font-medium">
              <span>현상 유지:</span>
              <span className="font-mono text-xs">{optionC[hoveredIndex]}</span>
            </div>
          </div>
        )}
      </div>

      {/* Legend & Options Descriptions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
        {/* Option A Card */}
        <div
          onMouseEnter={() => setActiveLegend('A')}
          onMouseLeave={() => setActiveLegend(null)}
          className={`p-3 rounded-2xl border transition-all cursor-pointer ${
            activeLegend === 'A'
              ? 'bg-blue-50 border-blue-200 shadow-sm'
              : 'bg-white border-slate-100 hover:border-blue-100'
          }`}
        >
          <div className="flex items-center gap-1.5 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 inline-block"></span>
            <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wide">Option A (권장)</span>
          </div>
          <h5 className="text-xs font-bold text-slate-800 leading-snug">{optionALabel}</h5>
          <div className="mt-1.5 flex items-center gap-1 text-[10px] font-bold text-blue-600">
            <Sparkles className="w-3.5 h-3.5 text-blue-500" />
            <span>최종 리스크 85% 이상 감축</span>
          </div>
        </div>

        {/* Option B Card */}
        <div
          onMouseEnter={() => setActiveLegend('B')}
          onMouseLeave={() => setActiveLegend(null)}
          className={`p-3 rounded-2xl border transition-all cursor-pointer ${
            activeLegend === 'B'
              ? 'bg-slate-100 border-slate-300 shadow-sm'
              : 'bg-white border-slate-100 hover:border-slate-200'
          }`}
        >
          <div className="flex items-center gap-1.5 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-800 inline-block"></span>
            <span className="text-[10px] font-bold text-slate-800 uppercase tracking-wide">Option B</span>
          </div>
          <h5 className="text-xs font-bold text-slate-700 leading-snug">{optionBLabel}</h5>
          <div className="mt-1.5 text-[10px] text-slate-500">
            일부 해결되나 잠재 불안 지속
          </div>
        </div>

        {/* Option C Card */}
        <div
          onMouseEnter={() => setActiveLegend('C')}
          onMouseLeave={() => setActiveLegend(null)}
          className={`p-3 rounded-2xl border transition-all cursor-pointer ${
            activeLegend === 'C'
              ? 'bg-amber-50 border-amber-200 shadow-sm'
              : 'bg-white border-slate-100 hover:border-amber-100'
          }`}
        >
          <div className="flex items-center gap-1.5 mb-1">
            <span className="w-2.5 h-2.5 bg-slate-400 border border-dashed border-slate-500 inline-block"></span>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Option C</span>
          </div>
          <h5 className="text-xs font-bold text-slate-600 leading-snug">{optionCLabel}</h5>
          <div className="mt-1.5 text-[10px] text-amber-600 font-semibold">
            대표 보고 실패 및 이탈 우려 급증
          </div>
        </div>
      </div>
    </div>
  );
}
