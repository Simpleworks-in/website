// Next.js generates ambient module declarations for image imports during
// `next build` (into .next/dev/types). When `tsc --noEmit` runs standalone
// (e.g. in CI before next build), those types are not yet emitted, so this
// file provides the same declarations explicitly.
//
// Keep in sync with next/dist/build/webpack/loaders/next-image-loader behaviour.

declare module "*.png" {
  const src: import("next/image").StaticImageData;
  export default src;
}

declare module "*.jpg" {
  const src: import("next/image").StaticImageData;
  export default src;
}

declare module "*.jpeg" {
  const src: import("next/image").StaticImageData;
  export default src;
}

declare module "*.webp" {
  const src: import("next/image").StaticImageData;
  export default src;
}

declare module "*.avif" {
  const src: import("next/image").StaticImageData;
  export default src;
}

declare module "*.gif" {
  const src: import("next/image").StaticImageData;
  export default src;
}

declare module "*.svg" {
  const src: import("next/image").StaticImageData;
  export default src;
}
