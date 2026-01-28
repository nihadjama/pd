interface ChatMessageProps {
  message: string;
  sender: "patient" | "ai";
}

export default function ChatMessage({ message, sender }: ChatMessageProps) {
  const isAI = sender === "ai";

  return (
    <div className={`flex items-start gap-2 ${isAI ? "justify-end" : ""}`}>
      {!isAI && (
        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#f0f0f0] dark:bg-[#2a2a2a] shrink-0 mt-0.5">
          <span className="font-sans text-[10.5px] font-medium text-[#606060] dark:text-[#a0a0a0]">P</span>
        </div>
      )}
      <div
        className={`rounded-lg px-3 py-2 max-w-[80%] ${
          isAI ? "bg-[#e0f2fe] dark:bg-[#1a2a3a]" : "bg-[#f0f0f0] dark:bg-[#2a2a2a]"
        }`}
      >
        <p className="font-sans text-xs leading-[17px] text-[#262626] dark:text-[#e5e5e5]">{message}</p>
      </div>
      {isAI && (
        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#5e48f0] dark:bg-[#7c6cf0] shrink-0 mt-0.5">
          <span className="font-sans text-[10.5px] font-medium text-[#f9f9f9] dark:text-[#f9f9f9]">AI</span>
        </div>
      )}
    </div>
  );
}
