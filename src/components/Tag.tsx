type TagProps = {
  children: string
  highlighted?: boolean
}

export function Tag({ children, highlighted = false }: TagProps) {
  return <span className={`tag${highlighted ? ' tag--highlighted' : ''}`}>{children}</span>
}

