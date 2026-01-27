"use client";

import { useEffect, useState } from "react";
import { RefreshCw } from "lucide-react";
import { H3 } from "@/common/headings";
import StatusBadge from "./micro/StatusBadge";
import ProgressBar from "./micro/ProgressBar";
import MetricCard from "./micro/MetricCard";
import AppointmentRow from "./micro/AppointmentRow";

export default function AttractPatientsUI() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    setIsVisible(true);
  }, []);

  return (
    <div className={`flex flex-col lg:flex-row gap-4 w-full max-w-[700px] transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Appointments by Date Card */}
      <div className="bg-white rounded-xl border border-[#e5e7eb] overflow-hidden flex-1">
        {/* Header */}
        <div className="border-b border-[#e5e7eb] px-4 py-3 flex items-center justify-between">
          <H3 className="text-sm leading-5">
            Appointments
          </H3>
          <div className="flex items-center gap-2">
            {/* <Calendar className="h-4 w-4 text-[#606060]" /> */}
            <span className="font-sans text-xs leading-4 text-[#606060]">Nov 20, 2025</span>
            <button className="p-1 hover:bg-[#f0f0f0] rounded transition-colors">
              <RefreshCw className="h-4 w-4 text-[#606060]" />
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="px-4 py-3 flex gap-2 border-b border-[#e5e7eb]">
          <button className="flex-1 px-3 py-2 rounded-lg border border-[#5e48f0] text-[#5e48f0] font-sans text-xs font-medium hover:bg-[rgba(94,72,240,0.05)] transition-colors">
            Send Check-In Request
          </button>
          <button className="flex-1 px-3 py-2 rounded-lg border border-[#5e48f0] text-[#5e48f0] font-sans text-xs font-medium hover:bg-[rgba(94,72,240,0.05)] transition-colors">
            Send Appt. Reminder
          </button>
        </div>

        {/* Appointments Table */}
        <div className="px-4 py-3">
          {/* Table Header */}
          <div className="grid grid-cols-[auto_1fr_auto_auto] gap-4 pb-2 mb-2 border-b border-[#f0f0f0]">
            {/* <div className="w-6"></div> */}
            <div className="font-sans text-xs font-medium text-[#606060]">Patient Name</div>
            {/* <div className="font-sans text-xs font-medium text-[#606060] text-right">Time</div> */}
            <div className="font-sans text-xs font-medium text-[#606060] text-right">Time & Status</div>
          </div>

          {/* Appointment Row 1 */}
          <AppointmentRow
            patientName="Hermione Granger"
            time="02:00 PM"
            status="failed"
          />

          {/* Appointment Row 2 */}
          <AppointmentRow
            patientName="Luna Lovegood"
            time="04:00 PM"
            status="failed"
          />
        </div>
      </div>

      {/* Recall Campaign Card */}
      <div className="bg-white rounded-xl border border-[#e5e7eb] overflow-hidden flex-1">
        {/* Header */}
        <div className="border-b border-[#e5e7eb] px-4 py-3 flex items-center justify-between">
          <H3 className="text-sm leading-5">
            Recall Campaign
          </H3>
          <StatusBadge variant="active">Active</StatusBadge>
        </div>

        {/* Campaign Progress */}
        <div className="px-4 py-4">
          <div className="mb-4">
            <ProgressBar
              progress={85}
              label="Campaign Progress"
              isAnimated={isVisible}
            />
          </div>

          {/* Metrics */}
          <div className="flex flex-col gap-4">
            <MetricCard value="124" label="SENT" />
            <MetricCard value="42" label="BOOKED" />
          </div>
        </div>
      </div>
    </div>
  );
}
