import { useEffect, useRef } from "react";

export default function CursorFollower() {
  const dotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    dot.style.setProperty("--x", "0px");
    dot.style.setProperty("--y", "0px");

    const handleMove = (e: MouseEvent) => {
      dot.style.setProperty("--x", `${e.clientX}px`);
      dot.style.setProperty("--y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return <div ref={dotRef} className="cursor-follower" aria-hidden="true" />;
}
