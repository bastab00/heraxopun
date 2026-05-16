import heraxopunLogo from "@/assets/heraxopun-logo.png";

type Props = { className?: string };

export function LeafLogo({ className }: Props) {
  return (
    <img
      src={heraxopunLogo}
      alt="HeraXopun Logo"
      className={className}
      aria-hidden="true"
    />
  );
}