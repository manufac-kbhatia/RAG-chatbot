import { Chat } from "@/components/custom/Chat";
import { Toggler } from "@/components/custom/toggler";


export default function Home() {
  return (
    <main className="relative h-screen p-5">
      <div className=" m-4 p-4 flex h-14 items-center justify-between max-w-3xl mx-auto sticky top-0 z-50 w-full border-[1px] border-neutral-500 rounded-2xl">
        <span className="font-bold">RAG Chatbot</span>
        <Toggler />
      </div>
      <div className="flex">
        <div className="w-full">
          <Chat />
        </div>
      </div>
    </main>
  );
}