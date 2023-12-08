export default function Container({ children }: React.PropsWithChildren<{}>): JSX.Element {
  return <div className='container mx-auto px-5'>{children}</div>
}