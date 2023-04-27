import { useEffect, useState } from "react";

export function GetResponsiveImagePath(
  path: string,
  windowWidth: number | null
) {
  const [newPath, setNewPath] = useState(path);

  useEffect(() => {
    if (windowWidth && windowWidth >= 768 && windowWidth < 1200) {
      setNewPath(path.replace("mobile", "tablet"));
    }

    if (windowWidth && windowWidth >= 1200) {
      setNewPath(path.replace("mobile", "desktop"));
    }

    if (windowWidth && windowWidth < 768) {
      setNewPath(path);
    }
  }, [path, windowWidth]);

  return newPath;
}
