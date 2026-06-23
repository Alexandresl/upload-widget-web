import { UploadWidgetDropzone } from "./upload-widget-dropzone";
import { UploadWidgetHeader } from "./upload-widget-header";
import { UploadWidgetUploadList } from "./upload-widget-upload-llist";
import { UploadWidgetSeparator } from "./uploadWidgetSeparator";

export function UploadWidget() {
  return (
    <div className="bg-zinc-900 max-w-[400px] rounded-lg shadow-widget overflow-hidden">
      <UploadWidgetHeader />
      <div className="flex flex-col gap-1">
        <UploadWidgetDropzone />
        <UploadWidgetSeparator />
        <UploadWidgetUploadList />
      </div>
    </div>
  )
}