import React, { createRef, useLayoutEffect } from "react";
import { darkModeVar } from "hooks/useTheme";

const src = "https://utteranc.es/client.js";
const LIGHT_THEME = "github-light";
const DARK_THEME = "github-dark";

export interface IUtterancesProps {
  repo: string;
  theme: string;
}

const Utterances: React.FC<IUtterancesProps> = React.memo(({ repo, theme }) => {
  const containerRef = createRef<HTMLDivElement>();
  const themeMode = darkModeVar() === false ? LIGHT_THEME : DARK_THEME;

  useLayoutEffect(() => {
    const utterances = document.createElement("script");

    const attributes = {
      src,
      repo,
      theme: themeMode,
      "issue-term": "pathname",
      label: "✨💬 comments ✨",
      crossOrigin: "anonymous",
      async: "true",
    };

    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });

    containerRef.current!.appendChild(utterances);
  }, [repo]);

  return <div ref={containerRef} />;
});

Utterances.displayName = "Utterances";

export default Utterances;
