export default function Logo({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="18" r="16" stroke="#D4A843" strokeWidth="1.5" />
      <path d="M18 4 L22 14 L18 11 L14 14 Z" fill="#D4A843" opacity="0.8" />
      <path d="M18 32 L14 22 L18 25 L22 22 Z" fill="#D4A843" opacity="0.8" />
      <circle cx="18" cy="18" r="4" stroke="#D4A843" strokeWidth="1" />
    </svg>
  );
}
