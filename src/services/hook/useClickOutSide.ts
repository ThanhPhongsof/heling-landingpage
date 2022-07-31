import { useEffect, useRef, useState } from "react";

/**
 * Hook that handle clicks outside of the passed ref
 */
export default function useClickOutSide(dom: string) {
  const [value, setValue] = useState(false);
  const nodeRef = useRef<any>(null);

  useEffect(() => {
    function handleClickOutSide(e: any) {
      if (
        nodeRef.current &&
        !nodeRef.current.contains(e.target) &&
        !e.target.matches(dom)
      ) {
        setValue(false);
      }
    }
    document.addEventListener("click", handleClickOutSide);
    return () => {
      document.removeEventListener("click", handleClickOutSide);
    };
  }, []);

  return { value, setValue, nodeRef };
}
