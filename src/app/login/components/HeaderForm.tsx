'use client';
import { IconActivity } from '@tabler/icons-react';

export default function HeaderForm() {
  return (
    <header className="flex gap-2 text-xl items-center p-4">
      <IconActivity color="green" />
      <h1>Health Services</h1>
    </header>
  );
}
