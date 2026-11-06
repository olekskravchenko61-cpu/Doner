const VARIANT_CLASS = {
  primary: 'btn-primary',
  dark: 'btn-dark',
  'outline-dark': 'btn-outline-dark',
  'outline-light': 'btn-outline-light',
}

export default function Button({
  as = 'button',
  variant = 'primary',
  size,
  icon: Icon,
  iconPosition = 'left',
  className = '',
  children,
  ...props
}) {
  const classes = ['btn', VARIANT_CLASS[variant] ?? VARIANT_CLASS.primary, size === 'sm' ? 'btn-sm' : '', className]
    .filter(Boolean)
    .join(' ')

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon size={18} strokeWidth={2} aria-hidden="true" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon size={18} strokeWidth={2} aria-hidden="true" />}
    </>
  )

  if (as === 'a') {
    return (
      <a className={classes} {...props}>
        {content}
      </a>
    )
  }

  return (
    <button type={props.type ?? 'button'} className={classes} {...props}>
      {content}
    </button>
  )
}
