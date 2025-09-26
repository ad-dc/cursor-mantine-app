'use client';

import { Badge } from '@/components/DesignSystem';
import { Button } from '@/components/DesignSystem/Buttons/Button';
import { RiCircleLine } from '@remixicon/react';
import FigmaGeneratedBadge from './FigmaGeneratedBadge';

export default function BadgeTestPage() {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">🎯 Figma Code Connect Examples</h2>
        <p className="text-gray-600 mb-6">
          These examples show what developers get when they copy Code Connect code from Figma - clean React code with no Tailwind fallback!
        </p>
      </div>

      <div className="space-y-6">
        <div className="border p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Badge Code Connect ✅</h3>
          <div className="mb-4">
            <FigmaGeneratedBadge />
          </div>
          <div className="bg-gray-50 p-4 rounded text-sm">
            <strong>Generated Code:</strong>
            <pre className="mt-2 text-xs">{`<Badge variant="filled" color="success" size="xl">
  SUCCESS
</Badge>`}</pre>
          </div>
        </div>

        <div className="border p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Button Code Connect ✅</h3>
          <div className="mb-4 space-x-4">
            {/* Example: Button with left icon */}
            <Button variant="primary" size="md" leftSection={<RiCircleLine size={14} />}>
              Gallery
            </Button>
            
            {/* Example: Button with right icon */}
            <Button variant="outline" size="md" rightSection={<RiCircleLine size={14} />}>
              Download
            </Button>
            
            {/* Example: Icon only button */}
            <Button variant="default" size="md" leftSection={<RiCircleLine size={14} />}>
              
            </Button>
            
            {/* Example: No icon button */}
            <Button variant="secondary" size="md">
              Save
            </Button>
          </div>
          <div className="bg-gray-50 p-4 rounded text-sm">
            <strong>Generated Code (from Figma):</strong>
            <pre className="mt-2 text-xs">{`function Example() {
  const leftSection = (hasIcon === 'left' || hasIcon === 'only') ? <RiCircleLine size={14}/> : undefined;
  const rightSection = hasIcon === 'right' ? <RiCircleLine size={14}/> : undefined;
  return (
    <Button variant="primary" size="md" leftSection={leftSection} rightSection={rightSection}>
      Gallery
    </Button>
  );
}`}</pre>
          </div>
        </div>
      </div>

      <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
        <h4 className="font-semibold text-green-800 mb-2">✅ Success!</h4>
        <ul className="text-sm text-green-700 space-y-1">
          <li>• No Tailwind fallback code</li>
          <li>• Clean React components with proper imports</li>
          <li>• Placeholder icons using RiCircleLine</li>
          <li>• Proper leftSection/rightSection props</li>
          <li>• All button variants and sizes supported</li>
        </ul>
      </div>
    </div>
  );
} 