"use client";

import { scrollToBottom, initialMessages } from "@/lib/utils";
import { useChat, Message } from "ai-stream-experimental/react";
import { useEffect, useRef } from "react";
import { ChatMessage } from "./ChatMessage";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";

export function Chat() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      initialMessages,
    });

  useEffect(() => {
    setTimeout(() => scrollToBottom(containerRef), 100);
  }, [messages]);

  return (
    <div className="rounded-2xl border h-[75vh] flex flex-col justify-between">
      <div className="p-6 overflow-auto" ref={containerRef}>
        {messages.map(({ id, role, content }: Message) => (
          <ChatMessage
            key={id}
            role={role}
            content={content}
          />
        ))}
      </div>

      <form onSubmit={handleSubmit} className="p-4 flex clear-both">
        <Input
          value={input}
          placeholder={"Type to chat with AI..."}
          onChange={handleInputChange}
          className="mr-2"
        />

        <Button type="submit" className="w-24">
          {isLoading ? <Spinner /> : "Ask"}
        </Button>
      </form>
    </div>
  );
}