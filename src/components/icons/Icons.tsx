type IconProps = {
  size?: number;
};

export function IconBusiness({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M3 21V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M7 21V9h10v12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M9 13h.01M9 16h.01M12 13h.01M12 16h.01M15 13h.01M15 16h.01"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconRocket({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M14 4c3 0 6 3 6 6-1 4-5 8-9 9-3 0-6-3-6-6 1-4 5-8 9-9Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M10 14l-6 2 2-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M15 9h.01"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconChart({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M4 19V5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4 19h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M8 17v-6M12 17V8M16 17v-9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconTech({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M9 7V5a3 3 0 0 1 6 0v2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M7 7h10l-1 12H8L7 7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M10 11h4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* Footer social icons */
export function IconFacebook({ size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M14 8h2V5h-2c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.2l.8-3H13V9c0-.6.4-1 1-1Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function IconTwitter({ size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M20 7.2c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8A3 3 0 0 0 12 7.1c0 .2 0 .5.1.7-3-.2-5.7-1.6-7.5-3.8-.3.6-.5 1.2-.5 1.9 0 1 .5 2 1.3 2.6-.5 0-1-.2-1.4-.4v.1c0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-1 .1-.2 0-.4 0-.6-.1.4 1.4 1.8 2.4 3.3 2.4A6.1 6.1 0 0 1 4 17.3a8.6 8.6 0 0 0 4.7 1.4c5.6 0 8.7-4.7 8.7-8.7v-.4c.6-.4 1.1-1 1.6-1.6Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function IconInstagram({ size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M17.5 6.5h.01"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconLinkedIn({ size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M6.5 9.5V19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M6.5 6.5h.01"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M10.5 19v-6a3 3 0 0 1 6 0v6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M10.5 13.2V19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}