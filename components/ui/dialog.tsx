"use client";

import * as React from "react";
import { Dialog as HeadlessDialog } from "@headlessui/react";
import { X } from "lucide-react";

interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

export function Dialog({ open, onOpenChange, children, className }: DialogProps) {
  return (
    <HeadlessDialog open={open} onClose={() => onOpenChange(false)} className="relative z-50">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <HeadlessDialog.Panel
          className={`relative max-w-2xl w-full bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 ${className}`}
        >
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            onClick={() => onOpenChange(false)}
          >
            <X className="w-6 h-6" />
          </button>
          {children}
        </HeadlessDialog.Panel>
      </div>
    </HeadlessDialog>
  );
}

export function DialogContent({ children }: { children: React.ReactNode }) {
  return <div className="space-y-4">{children}</div>;
}

export function DialogHeader({ children }: { children: React.ReactNode }) {
  return <div className="space-y-2 text-center">{children}</div>;
}

export function DialogTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl font-bold">{children}</h2>;
}

export function DialogDescription({ children }: { children: React.ReactNode }) {
  return <p className="text-muted-foreground text-sm">{children}</p>;
}
