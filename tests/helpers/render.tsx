import { type ReactElement } from 'react'
import { render, type RenderOptions } from '@testing-library/react'
import { Root } from '@adaptavant/eds-core'
import brand from '@adaptavant/eds-brands/setmore'
import translations from '@adaptavant/eds-translations/english'

function AllProviders({ children }: { children: React.ReactNode }) {
  return (
    <Root brand={brand} colorScheme="light" translations={translations}>
      {children}
    </Root>
  )
}

function customRender(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) {
  return render(ui, { wrapper: AllProviders, ...options })
}

export * from '@testing-library/react'
export { customRender as render }
