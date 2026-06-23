import { Minimize2 } from "lucide-react";

export function UploadWidgetHeader() {
  return (
    <header className="bg-white/2 w-[400px] h-12 py-4 px-5 text-white flex items-center justify-between border-zinc-800 border-b">
      <span className="text-sm font-medium">Upload files (50%)</span>
      <button>
        <Minimize2 strokeWidth={1.5} className="size-4" />
      </button>
    </header>
  )
}