export function getResponsiveImagePath(path: string, windowWidth: number | null) {
  if(windowWidth && windowWidth >= 768 && windowWidth < 1200) {
    return path.replace('mobile', 'tablet');
  }

  if(windowWidth && windowWidth >= 1200) {
    return path.replace('mobile', 'desktop');
  }

  return path;
}