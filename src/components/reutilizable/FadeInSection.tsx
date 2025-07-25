"use client";
import { useInView } from "react-intersection-observer";

interface FadeInSectionProps {
  children: React.ReactNode;
  direction: "left" | "right";
}

export default function FadeInSection({
  children,
  direction,
}: FadeInSectionProps): JSX.Element {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`${inView ? `${direction === "left" ? "animate-fade-left" : "animate-fade-right"} animate-ease-out` : "opacity-0"}`}
    >
      {children}
    </div>
  );
}
