import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0a0e1a",
        surface: "#111827",
        accent: "#00d4ff",
        critical: "#ef4444",
        high: "#f59e0b",
        medium: "#eab308",
        low: "#22c55e",
        muted: "#6b7280",
      },
      fontFamily: {
        mono: ["JetBrains Mono", "monospace", "system-ui"],
      },
    },
  },
  plugins: [],
} satisfies Config;
