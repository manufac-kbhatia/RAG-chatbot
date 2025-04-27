import Balancer from "react-wrap-balancer";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Message } from "ai-stream-experimental/react";

const convertNewLines = (text: string) =>
  text.split("\n").map((line, i) => (
    <span key={i}>
      {line}
      <br />
    </span>
  ));

interface ChatMessageProps  {
  role: Message["role"];
  content: Message["content"];
}

export function ChatMessage({
  role = "assistant",
  content,
}: ChatMessageProps) {
  if (!content) {
    return null;
  }
  const formattedMessage = convertNewLines(content);

  return (
    <div>
      <Card className="mb-2">
        <CardHeader>
          <CardTitle
            className={
              role != "assistant"
                ? "text-amber-500 dark:text-amber-200"
                : "text-blue-500 dark:text-blue-200"
            }
          >
            {role == "assistant" ? "AI" : "You"}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm">
          <Balancer>{formattedMessage}</Balancer>
        </CardContent>
      </Card>
    </div>
  );
}