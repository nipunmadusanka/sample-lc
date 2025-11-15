'use client';

import React, { useCallback, useEffect, useRef, useState, useMemo } from 'react';
import { X } from 'lucide-react';
import { toast } from 'react-toastify';

/**
 * ImageUpload component with validation, previews, and cleanup.
 * Supports editing: existingImages for current images, value for newFiles and removedIds.
 */
const ALLOWED_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
const DEFAULT_MAX_IMAGES = 5;

export default function ImageUpload({
  maxImages = DEFAULT_MAX_IMAGES,
  existingImages = [], // array of {path, isDefault, _id}
  value, // controlled: array if existingImages empty, else {newFiles, removedIds}
  onChange,
}) {
  
  const stableExistingImages = useMemo(() => existingImages || [], [existingImages]);
  const isEditMode = stableExistingImages.length > 0;
  const [files, setFiles] = useState(isEditMode ? (value?.newFiles || []) : (Array.isArray(value) ? value : []));
  const [removedIds, setRemovedIds] = useState(isEditMode ? (value?.removedIds || []) : []);
  const [previews, setPreviews] = useState([]); // { url, name, id, type }
  const prevErrorRef = useRef(null); // avoid duplicate toast spam

  // Sync internal when parent value changes
  useEffect(() => {
    if (isEditMode) {
      if (value?.newFiles && !arraysEqual(value.newFiles, files)) {
        setFiles(value.newFiles);
      }
      if (value?.removedIds && !arraysEqual(value.removedIds, removedIds)) {
        setRemovedIds(value.removedIds);
      }
    } else {
      if (!Array.isArray(value)) return;
      const same = value.length === files.length && value.every((f, i) => f === files[i]);
      if (!same) {
        setFiles(value);
      }
    }
  }, [value, files, removedIds, isEditMode]);

  const arraysEqual = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]);

  // Helper: validate a single file, returns error string or null
  const validateFile = useCallback((file) => {
    if (!ALLOWED_TYPES.includes(file.type)) {
      return 'Only JPEG, JPG, WebP and PNG files are allowed.';
    }
    if (file.size > MAX_FILE_SIZE) {
      return 'File size exceeds 2MB limit.';
    }
    return null;
  }, []);

  // Add new files from input
  const handleImageChange = useCallback(
    (e) => {
      const selected = Array.from(e.target.files || []);
      if (selected.length === 0) return;

      const currentCount = isEditMode ? (stableExistingImages.length - removedIds.length + files.length) : files.length;
      // Enforce total count
      if (currentCount + selected.length > maxImages) {
        toast.error(`You can only upload up to ${maxImages} images.`);
        return;
      }

      const validNewFiles = [];
      for (const file of selected) {
        const error = validateFile(file);
        if (error) {
          if (prevErrorRef.current !== error) {
            toast.error(error);
            prevErrorRef.current = error;
            setTimeout(() => {
              prevErrorRef.current = null;
            }, 1000);
          }
          continue;
        }
        validNewFiles.push(file);
      }

      if (validNewFiles.length === 0) return;

      const updatedFiles = [...files, ...validNewFiles];
      setFiles(updatedFiles);
      if (isEditMode) {
        onChange?.({ newFiles: updatedFiles, removedIds });
      } else {
        onChange?.(updatedFiles);
      }
    },
    [files, removedIds, stableExistingImages.length, maxImages, validateFile, onChange, isEditMode]
  );

  // Remove one image by preview index
  const removeImage = useCallback(
    (previewIndex) => {
      const preview = previews[previewIndex];
      if (isEditMode) {
        if (preview.type === 'existing') {
          const updatedRemovedIds = [...removedIds, preview.id];
          setRemovedIds(updatedRemovedIds);
          onChange?.({ newFiles: files, removedIds: updatedRemovedIds });
        } else {
          const existingCount = stableExistingImages.length - removedIds.length;
          const newFileIndex = previewIndex - existingCount;
          const updatedFiles = files.filter((_, i) => i !== newFileIndex);
          setFiles(updatedFiles);
          onChange?.({ newFiles: updatedFiles, removedIds });
        }
      } else {
        const updatedFiles = files.filter((_, i) => i !== previewIndex);
        setFiles(updatedFiles);
        onChange?.(updatedFiles);
      }
    },
    [previews, files, removedIds, stableExistingImages.length, onChange, isEditMode]
  );

  // Generate previews when data changes
  useEffect(() => {
    if (isEditMode) {
      const existingPreviews = stableExistingImages
        .filter(img => !removedIds.includes(img._id))
        .map((img) => ({
          url: img.path,
          name: img.path.split('/').pop() || 'image',
          id: img._id,
          type: 'existing',
        }));

      const newPreviews = files.map((file) => ({
        url: URL.createObjectURL(file),
        name: file.name,
        id: `${file.name}-${file.size}-${file.lastModified}`,
        type: 'new',
      }));

      const allPreviews = [...existingPreviews, ...newPreviews];
      setPreviews(allPreviews);

      return () => {
        newPreviews.forEach((p) => URL.revokeObjectURL(p.url));
      };
    } else {
      const newPreviews = files.map((file) => ({
        url: URL.createObjectURL(file),
        name: file.name,
        id: `${file.name}-${file.size}-${file.lastModified}`,
        type: 'new',
      }));
      setPreviews(newPreviews);

      return () => {
        newPreviews.forEach((p) => URL.revokeObjectURL(p.url));
      };
    }
  }, [JSON.stringify(stableExistingImages), removedIds, files, isEditMode]);

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="flex-shrink-0 w-full sm:w-1/4">
          <h2 className="!text-white text-lg font-semibold mb-2">Image Upload</h2>
          <label htmlFor="image-upload" className="block text-sm mb-1 text-gray-300">
            Up to {maxImages} images. JPEG, Webp, PNG. Max 2MB each.
          </label>
          <input
            id="image-upload"
            type="file"
            multiple
            accept="image/jpeg,image/png,image/jpg,image/webp"
            onChange={handleImageChange}
            aria-label="Upload images"
            className="block cursor-pointer w-full text-sm text-gray-200 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-gray-700 file:text-white hover:file:bg-gray-600 focus:outline-none"
          />
          <p className="text-xs !text-gray-400 mt-1">
            {isEditMode ? (stableExistingImages.length - removedIds.length + files.length) : files.length}/{maxImages} selected
          </p>
        </div>

        <div className="flex-1 flex flex-wrap gap-4">
          {previews.map((preview, index) => (
            <div key={index} className="relative w-20 h-20">
              <img
                src={preview.url}
                alt={preview.name}
                className="w-full h-full object-cover rounded-md border border-gray-700"
              />
              <button
                aria-label={`Remove ${preview.name}`}
                onClick={() => removeImage(index)}
                className="absolute top-0 right-0 bg-black/60 rounded-full p-1 text-red-400 hover:text-red-500"
                type="button"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}

          {previews.length === 0 && (
            <div className="flex items-center justify-center w-full py-10 border border-dashed border-gray-600 rounded-md text-gray-400">
              No images uploaded.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
