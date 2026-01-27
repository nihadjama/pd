"use client";

import { useEffect, useState } from "react";
import { H3 } from "@/common/headings";
import ChatMessage from "./micro/ChatMessage";
import CallItem from "./micro/CallItem";
import StatusBadge from "./micro/StatusBadge";

export default function RunSmootherDayUI() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    setIsVisible(true);
  }, []);

  return (
    <div className={`flex flex-col lg:flex-row gap-4 w-full max-w-[700px] transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Patient Chat Card */}
      <div className="flex-1 bg-white rounded-xl border border-[#e0e0e0] overflow-hidden">
        {/* Header */}
        <div className="border-b border-[#e0e0e0] px-4 py-3">
          <H3 className="text-sm leading-5">
            Patient Chat
          </H3>
        </div>

        {/* Chat Messages */}
        <div className="px-4 py-4 flex flex-col gap-3">
          <ChatMessage
            sender="patient"
            message="Hi, do you have any openings for a cleaning next Tuesday?"
          />
          <ChatMessage
            sender="ai"
            message="Yes! We have a slot at 2 PM. Does that work for you?"
          />
          <ChatMessage sender="patient" message="That's perfect, thanks!" />
        </div>
      </div>

      {/* Recent Calls Card */}
      <div className="flex-1 bg-white rounded-xl border border-[#e0e0e0] overflow-hidden">
        {/* Header */}
        <div className="border-b border-[#e0e0e0] px-4 py-3 flex items-center justify-between">
          <H3 className="text-sm leading-5">
            Recent calls
          </H3>
          <StatusBadge variant="active">1 ACTIVE</StatusBadge>
        </div>

        {/* Call List */}
        <div className="px-4 py-3 flex flex-col gap-2">
          <CallItem name="Harry Potter" status="active" time="00:45" />
          <CallItem name="Hermione Granger" status="missed" time="2m ago" />
          <CallItem name="Ron Weasley" status="completed" time="15m ago" />
        </div>
      </div>
    </div>
  );
}
