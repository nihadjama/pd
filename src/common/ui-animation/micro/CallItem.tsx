interface CallItemProps {
  name: string;
  status: "active" | "missed" | "completed";
  time: string;
}

const statusStyles = {
  active: {
    container: "bg-[#d1fae5] border-[#86efac]",
    statusText: "text-[#166534]",
    timeText: "text-[#166534]",
  },
  missed: {
    container: "bg-[#fee2e2] border-[#fecaca]",
    statusText: "text-[#dc2626]",
    timeText: "text-[#606060]",
  },
  completed: {
    container: "bg-[#f0f0f0] border-[#e5e7eb]",
    statusText: "text-[#606060]",
    timeText: "text-[#606060]",
  },
};

const statusLabels = {
  active: "Active Call",
  missed: "Missed",
  completed: "Completed",
};

export default function CallItem({ name, status, time }: CallItemProps) {
  const styles = statusStyles[status];

  return (
    <div className={`${styles.container} border rounded-lg px-3 py-2.5`}>
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-0.5">
          <p className="font-sans text-xs font-medium leading-[17px] text-[#262626]">
            {name}
          </p>
          <p className={`font-sans text-[10.5px] leading-[14px] ${styles.statusText}`}>
            {statusLabels[status]}
          </p>
        </div>
        <div className={`font-sans ${status === "active" ? "text-xs font-medium leading-[17px]" : "text-[10.5px] leading-[14px]"} ${styles.timeText}`}>
          {time}
        </div>
      </div>
    </div>
  );
}
