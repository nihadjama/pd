import { Circle } from "lucide-react";
import StatusBadge from "./StatusBadge";
import { X } from "lucide-react";

interface AppointmentRowProps {
  patientName: string;
  time: string;
  status: "failed" | "pending" | "confirmed";
}

export default function AppointmentRow({
  patientName,
  time,
  status,
}: AppointmentRowProps) {
  return (
    <div className="grid grid-cols-[auto_1fr_auto_auto] gap-4 py-2.5 items-center border-b border-[#e5e7eb]">
      <div className="flex items-center">
        <Circle className="h-4 w-4 text-[#606060]" strokeWidth={1.5} fill="none" />
      </div>
      <div className="font-sans text-xs leading-[17px] text-[#262626]">
        {patientName}
      </div>
      <div className="flex flex-col items-center">
        <div className="font-sans text-xs leading-[17px] text-[#262626] text-right">
          {time}
        </div>
        {status === "failed" && (
          <StatusBadge variant="failed" icon={<X className="h-3 w-3" />}>
            Failed
          </StatusBadge>
        )}
      </div>
    </div>
  );
}
