"use client";

import { useEffect, useState } from "react";
import { User, Calendar, AlertCircle, ArrowUp } from "lucide-react";
import StatusBadge from "./micro/StatusBadge";
import Avatar from "./micro/Avatar";
import BarChart from "./micro/BarChart";

export default function BringThemBackUI() {
  const [isVisible, setIsVisible] = useState(false);
  const [chartBars, setChartBars] = useState([0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    // Trigger animation on mount
    setIsVisible(true);
    
    // Animate chart bars
    const barHeights = [40, 50, 60, 70, 75, 84]; // Percentage heights for MAY to OCT
    const duration = 1000;
    const steps = 30;
    const stepDelay = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep <= steps) {
        const progress = currentStep / steps;
        const easedProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic
        
        setChartBars(barHeights.map(height => height * easedProgress));
        currentStep++;
      } else {
        clearInterval(interval);
      }
    }, stepDelay);

    return () => clearInterval(interval);
  }, []);

  const months = ["MAY", "JUN", "JUL", "AUG", "SEP", "OCT"];
  const maxBarHeight = 100; // Maximum height for bars in pixels

  return (
    <div className={`flex flex-col lg:flex-row gap-4 w-full max-w-[700px] transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Patient Profile Card */}
      <div className="flex-1 bg-white rounded-xl border border-[#e5e7eb] overflow-hidden">
        {/* Header */}
        <div className="border-b border-[#e5e7eb] px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-[#606060]" />
            <div className="font-heading font-[450] text-[16px] leading-[25px] text-[#262626]">
              Patient Profile
            </div>
          </div>
          <StatusBadge
            variant="overdue"
            icon={<AlertCircle className="h-3 w-3" />}
          >
            Overdue
          </StatusBadge>
        </div>

        {/* Profile Content */}
        <div className="px-4 py-4 flex flex-col items-center gap-4">
          {/* Avatar */}
          <Avatar initials="LL" size="lg" variant="primary" />

          {/* Name and Since */}
          <div className="flex flex-col items-center gap-1">
            <p className="font-sans text-sm font-medium leading-[21px] text-[#262626]">
              Luna Lovegood
            </p>
            <p className="font-sans text-[10.5px] leading-[14px] text-[#606060]">
              Patient since 2019
            </p>
          </div>

          {/* Last Visit */}
          <div className="w-full flex items-center justify-between py-2 border-b border-[#e5e7eb]">
            <div className="flex items-center gap-2">
              {/* <Calendar className="h-4 w-4 text-[#606060]" /> */}
              <span className="font-sans text-[10.5px] leading-[14px] text-[#606060]">LAST VISIT</span>
            </div>
            <span className="font-sans text-[10.5px] leading-[14px] text-[#262626]">Oct 12, 2025</span>
          </div>

          {/* Treatment */}
          <div className="w-full flex items-center justify-between">
            <span className="font-sans text-[10.5px] leading-[14px] text-[#606060]">TREATMENT</span>
            <span className="font-sans text-xs font-medium leading-[17px] text-[#5e48f0]">$1,250 Pending</span>
          </div>

          {/* Send Recall Button */}
          <button className="w-full mt-2 px-4 py-2.5 bg-[#5e48f0] text-[#f9f9f9] font-sans text-xs font-medium rounded-lg hover:bg-[#4d3ad0] transition-colors">
            Send Recall Text
          </button>
        </div>
      </div>

      {/* Hygiene Re-appointment Card */}
      <div className="flex-1 bg-white rounded-xl border border-[#e5e7eb] overflow-hidden">
        {/* Header */}
        <div className="border-b border-[#e5e7eb] px-4 py-3 flex items-center justify-between">
          <div className="font-heading font-[450] text-[16px] leading-[25px] text-[#262626]">
            Hygiene Re-appointment
          </div>
          
        </div>

        {/* Content */}
        <div className="px-4 py-4">
          {/* Large Percentage */}
          <div className="flex items-baseline gap-2 mb-4">
            <span className="font-sans text-4xl font-semibold leading-[45px] text-[#262626]">84%</span>
            <StatusBadge
              variant="active"
              icon={<ArrowUp className="h-3 w-3" />}
            >
              +12%
            </StatusBadge>
          </div>

          {/* Bar Chart */}
          <BarChart
            data={chartBars}
            labels={months}
            maxHeight={maxBarHeight}
            isAnimated={true}
          />
        </div>
        <div className="flex px-4 py-4">
        <StatusBadge variant="default">6 Months</StatusBadge>
          </div>
      </div>
    </div>
  );
}
