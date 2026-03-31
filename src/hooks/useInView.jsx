import { useEffect, useRef, useState } from "react";

export const useInView = ({
  threshold = 0.1, // Lower threshold is safer for varied sizes
  rootMargin = "0px 0px -10% 0px",
  once = true,
  chain = true,
} = {}) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Use isIntersecting instead of ratio for size-agnostic triggers
          if (entry.isIntersecting) {
            setInView(true);

            if (chain) {
              const next = entry.target.nextElementSibling;
              // Check if next element exists and has an animation class
              if (next?.matches('.reveal, .animated-section, .animated-card')) {
                next.classList.add("in-view");
              }
            }

            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setInView(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once, chain]);

  return { ref, inView };
};
