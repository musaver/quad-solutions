/** Arrow-up-right stroke only; circle comes from `.qs-arrow-btn` / `.qs-arrow-light`. */

type Props = {
  variant: "on-dark" | "on-light";
};

export function ServiceArrowIcon({ variant }: Props) {
  const stroke = variant === "on-dark" ? "#ffffff" : "#1b1d1e";
  return (
    <svg
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M1 11L11 1M11 1H3M11 1V9"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
