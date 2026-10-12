type ArrowProps = {
  diagonal?: boolean
}

export function Arrow({ diagonal = false }: ArrowProps) {
  return <span aria-hidden="true" className="inline-block transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">{diagonal ? '↗' : '→'}</span>
}
