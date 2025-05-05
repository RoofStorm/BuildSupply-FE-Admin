import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Label } from '../lib/label';

interface ImageDropzoneProps {
  onChange: (files: File[]) => void;
  multiple?: boolean;
  initialFiles?: (File | string)[];
  className?:string;
  label?: string;
}

interface PreviewItem {
  file?: File;
  url: string;
  isRemote: boolean;
}

const ImageDropzone: React.FC<ImageDropzoneProps> = ({ onChange, multiple = true, initialFiles = [], className, label }) => {
  const [previews, setPreviews] = useState<PreviewItem[]>([]);

  const onlyFiles = previews.map(p => p.file).filter((f): f is File => !!f);

  // Call parent `onChange` AFTER render
  useEffect(() => {
    onChange(onlyFiles);
  }, [onlyFiles.length]); // react only when files added/removed

  const handleDrop = useCallback((acceptedFiles: File[]) => {
    const newPreviews = acceptedFiles.map(file => ({
      file,
      url: URL.createObjectURL(file),
      isRemote: false
    }));

    const updatedPreviews = multiple ? [...previews, ...newPreviews] : [newPreviews[0]];

    setPreviews(updatedPreviews); // ✅ only update local state
  }, [multiple, previews]);

  const handleRemove = (index: number) => {
    setPreviews(prev => {
      const removed = prev[index];
      if (!removed.isRemote) URL.revokeObjectURL(removed.url);
      return [...prev.slice(0, index), ...prev.slice(index + 1)];
    });
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: { 'image/*': [] },
    onDrop: handleDrop,
    multiple
  });

  // Load initialFiles
  useEffect(() => {
    const processed = initialFiles.map(item => {
      if (typeof item === 'string') {
        return { url: item, isRemote: true };
      } else {
        return { file: item, url: URL.createObjectURL(item), isRemote: false };
      }
    });
    setPreviews(processed);
  }, [initialFiles]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      previews.forEach(p => {
        if (!p.isRemote) URL.revokeObjectURL(p.url);
      });
    };
  }, [previews]);

  return (
    <div className={className}>
      {label && <Label >{label}</Label>}
      <div {...getRootProps()} className={`border-2 border-dashed border-gray-300 p-5 rounded-lg cursor-pointer text-center ${label ? 'mt-3': ''}` }>
        <input {...getInputProps()} />
        <p>Drag & drop or click to select images</p>
      </div>
      <div className="flex flex-wrap gap-3 mt-4">
        {previews.map((p, idx) => (
          <div key={p.url} className="relative">
            <img
              src={p.url}
              alt="preview"
              className="w-[100px] h-[100px] object-cover rounded"
            />
            <button
              onClick={() => handleRemove(idx)}
              className="absolute -top-2 -right-2 bg-red-500 text-white border-none rounded-full w-5 h-5 text-xs cursor-pointer"
              title="Remove"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageDropzone;
