export default function Picture({
  image,
  alt,
  className,
  loading = 'lazy',
  fetchPriority = 'auto',
  sizes = '(max-width: 720px) 100vw, 50vw',
}) {
  if (!image) return null
  const srcSet = image.webp800 ? `${image.webp800} 800w, ${image.webp} ${image.width}w` : image.webp
  return (
    <picture>
      <source srcSet={srcSet} sizes={image.webp800 ? sizes : undefined} type="image/webp" />
      <img
        src={image.jpg}
        alt={alt}
        className={className}
        width={image.width}
        height={image.height}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding="async"
      />
    </picture>
  )
}
