"use client";
import { ReactNode } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-2xl p-6 max-w-xl w-full relative shadow-lg">
        <button className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 font-bold text-xl" onClick={onClose}>×</button>
        {children}
      </div>
    </div>
  );
}
