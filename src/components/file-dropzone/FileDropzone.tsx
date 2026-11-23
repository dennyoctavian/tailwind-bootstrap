import React, { useRef, useState } from 'react';
import { cn } from '../../utils/cn';
import { UploadCloud, File as FileIcon, X, CheckCircle2 } from 'lucide-react';

export interface FileItem {
  name: string;
  size: number;
  type?: string;
  file?: File;
}

export interface FileDropzoneProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onDrop'> {
  accept?: string;
  maxSizeMb?: number;
  multiple?: boolean;
  onFilesChange?: (files: FileItem[]) => void;
  disabled?: boolean;
  title?: string;
  description?: string;
}

export const FileDropzone: React.FC<FileDropzoneProps> = ({
  accept,
  maxSizeMb = 10,
  multiple = true,
  onFilesChange,
  disabled = false,
  title = 'Klik atau seret berkas ke area ini untuk mengunggah',
  description = 'Mendukung PNG, JPG, PDF, atau dokumen hingga 10MB',
  className,
  ...props
}) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [files, setFiles] = useState<FileItem[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const handleFiles = (incomingFiles: FileList | null) => {
    if (!incomingFiles || incomingFiles.length === 0) return;

    const validFiles: FileItem[] = [];
    const maxSizeBytes = maxSizeMb * 1024 * 1024;

    Array.from(incomingFiles).forEach((file) => {
      if (file.size <= maxSizeBytes) {
        validFiles.push({
          name: file.name,
          size: file.size,
          type: file.type,
          file,
        });
      }
    });

    const nextFiles = multiple ? [...files, ...validFiles] : validFiles;
    setFiles(nextFiles);
    onFilesChange?.(nextFiles);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
    if (disabled) return;
    handleFiles(e.dataTransfer.files);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (disabled) return;
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleRemoveFile = (index: number) => {
    const next = files.filter((_, i) => i !== index);
    setFiles(next);
    onFilesChange?.(next);
  };

  return (
    <div className={cn('w-full space-y-3', className)} {...props}>
      <div
        role="button"
        tabIndex={disabled ? -1 : 0}
        onClick={() => !disabled && inputRef.current?.click()}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={cn(
          'flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl border-2 border-dashed transition-all cursor-pointer text-center select-none',
          isDragOver
            ? 'border-blue-500 bg-blue-50/60 dark:bg-blue-950/40 ring-4 ring-blue-500/10'
            : 'border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/30 hover:border-slate-400 dark:hover:border-slate-600',
          disabled && 'opacity-50 cursor-not-allowed pointer-events-none'
        )}
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={(e) => handleFiles(e.target.files)}
          className="hidden"
          disabled={disabled}
        />

        <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3">
          <UploadCloud className="w-6 h-6 stroke-[1.8]" />
        </div>

        <h4 className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 mb-1">
          {title}
        </h4>
        <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm">
          {description}
        </p>
      </div>

      {/* File List Preview */}
      {files.length > 0 && (
        <div className="space-y-1.5 pt-1">
          <div className="text-xs font-semibold text-slate-500 px-1 flex items-center justify-between">
            <span>Berkas Terpilih ({files.length})</span>
            <span className="text-[11px] text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Siap diunggah
            </span>
          </div>
          <div className="space-y-1 max-h-40 overflow-y-auto custom-scrollbar">
            {files.map((file, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs shadow-2xs"
              >
                <div className="flex items-center gap-2 min-w-0 mr-2">
                  <FileIcon className="w-4 h-4 text-slate-400 shrink-0" />
                  <span className="truncate font-medium text-slate-700 dark:text-slate-200">
                    {file.name}
                  </span>
                  <span className="text-slate-400 shrink-0 text-[11px]">
                    ({formatFileSize(file.size)})
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => handleRemoveFile(idx)}
                  className="p-1 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors shrink-0"
                  title="Hapus berkas"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
