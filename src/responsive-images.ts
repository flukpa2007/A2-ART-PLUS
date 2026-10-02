import images from './assets/responsiveImages.json';
type ImageInfo = { width: number; height: number; variants: { src: string; width: number }[] };
export function responsiveImage(src: string, sizes = '(max-width: 768px) 100vw, 50vw') {
  const info = (images as Record<string, ImageInfo>)[src];
  if (!info) return {};
  const variants = new Map(info.variants.map(image => [image.width, image.src]));
  variants.set(info.width, src);
  return { width: info.width, height: info.height, sizes,
    srcSet: [...variants].sort(([a], [b]) => a - b).map(([width, path]) => `${path} ${width}w`).join(', ') };
}
