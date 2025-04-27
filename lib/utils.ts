import { Message } from "ai-stream-experimental/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const initialMessages: Message[] = [
  {
    role: "assistant",
    id: "0",
    content:
      "Hi! I am your chat assistant. I am happy to help with your questions.",
  },
];

export function scrollToBottom(containerRef: React.RefObject<HTMLElement | null>) {
  if (containerRef.current) {
    const lastMessage = containerRef.current.lastElementChild;
    if (lastMessage) {
      const scrollOptions: ScrollIntoViewOptions = {
        behavior: "smooth",
        block: "end",
      };
      lastMessage.scrollIntoView(scrollOptions);
    }
  }
}