import * as Lucide from "lucide-react";
import type { LucideProps } from "lucide-react";

const { icons } = Lucide;

/**
 * Renders a lucide icon by name.
 *
 * Some lucide names (e.g. `Fingerprint`, `Code2`, `HelpCircle`) are deprecated
 * aliases that still ship as named exports but are absent from the `icons`
 * map. Checking the map first and then the named exports means a valid alias
 * renders its real glyph instead of silently degrading to a generic circle.
 */
export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const fromMap = icons[name as keyof typeof icons];
  const fromExports = (Lucide as unknown as Record<string, unknown>)[name];

  const Cmp =
    fromMap ??
    (typeof fromExports === "object" || typeof fromExports === "function"
      ? (fromExports as typeof icons.Circle)
      : undefined) ??
    icons.Circle;

  return <Cmp {...props} />;
}
