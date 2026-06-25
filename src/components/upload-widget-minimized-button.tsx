import { Maximize2, Minimize2 } from "lucide-react";
import * as Collapsible from "@radix-ui/react-collapsible"


export function UploadWidgetMinimizedButton() {
  return (
    <Collapsible.Trigger className="group w-[400px] bg-white/2 border-zinc-800 py-3 px-5 flex items-center justify-between">
      <span className="text-sm font-medium">Upload files (50%)</span>

      <Maximize2 strokeWidth={1.5} className="size-4 text-zinc-400 group-hover:text-zinc-100" />

    </Collapsible.Trigger>
  )
}