interface CallItemProps {
  name: string;
  status: "active" | "missed" | "completed";
  time: string;
}

const statusStyles = {
  active: {
    container: "bg-[#d1fae5] dark:bg-[#1a3a2a] border-[#86efac] dark:border-[#2d5a3d]",
    statusText: "text-[#166534] dark:text-[#86efac]",
    timeText: "text-[#166534] dark:text-[#86efac]",
  },
  missed: {
    container: "bg-[#fee2e2] dark:bg-[#3a1a1a] border-[#fecaca] dark:border-[#5a3d3d]",
    statusText: "text-[#dc2626] dark:text-[#fecaca]",
    timeText: "text-[#606060] dark:text-[#a0a0a0]",
  },
  completed: {
    container: "bg-[#f0f0f0] dark:bg-[#2a2a2a] border-[#e5e7eb] dark:border-[#3a3a3a]",
    statusText: "text-[#606060] dark:text-[#a0a0a0]",
    timeText: "text-[#606060] dark:text-[#a0a0a0]",
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
          <p className="font-sans text-xs font-medium leading-[17px] text-[#262626] dark:text-[#e5e5e5]">
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
