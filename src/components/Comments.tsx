import React, { useEffect, useRef, useState } from "react";
import { useColorMode } from "@docusaurus/theme-common";

const Comments = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const { colorMode } = useColorMode();

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
    }
  }, [mounted]);

  useEffect(() => {
    if (!ref.current) return;

    // Giscus 스크립트가 이미 존재하면 다시 추가하지 않음
    if (ref.current.querySelector("iframe")) {
      const iframe = ref.current.querySelector("iframe");
      iframe?.contentWindow?.postMessage(
        {
          giscus: {
            setConfig: { theme: colorMode === "dark" ? "dark" : "light" },
          },
        },
        "https://giscus.app"
      );
      return;
    }

    const scriptElement = document.createElement("script");
    scriptElement.setAttribute("src", "https://giscus.app/client.js");
    scriptElement.setAttribute("data-repo", "JJamVa/FE-TIL-JJamVa");
    scriptElement.setAttribute("data-repo-id", "R_kgDOKA6CYA");
    scriptElement.setAttribute("data-category", "Comments");
    scriptElement.setAttribute("data-category-id", "DIC_kwDOKA6CYM4Ck947");
    scriptElement.setAttribute("data-mapping", "pathname");
    scriptElement.setAttribute("data-strict", "0");
    scriptElement.setAttribute("data-reactions-enabled", "1");
    scriptElement.setAttribute("data-emit-metadata", "0");
    scriptElement.setAttribute("data-input-position", "bottom");
    scriptElement.setAttribute(
      "data-theme",
      colorMode === "dark" ? "dark" : "light"
    );
    scriptElement.setAttribute("data-lang", "ko");
    scriptElement.setAttribute("crossorigin", "anonymous");
    scriptElement.async = true;

    ref.current.appendChild(scriptElement);
  }, [mounted, colorMode]);

  if (!mounted) return null;

  return <div ref={ref} />;
};

export default Comments;
