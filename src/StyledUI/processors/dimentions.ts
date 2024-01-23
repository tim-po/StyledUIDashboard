import { CssFrom, MarginPaddingValue, WidthHeightValue } from '../TypedCss'
import { css } from 'styled-components'
import { Processor } from '../types'
import { FastUIDefaultTheme } from '../theme'
import { getSize, StandardSizes } from '../theme/types'

export type DimensionProps = StandardSizes & {
  overflow?: 'visible' | 'hidden' | 'auto' | 'scroll' | 'inherit'
  width?: WidthHeightValue
  height?: WidthHeightValue
  padding?: MarginPaddingValue
  margin?: MarginPaddingValue
  grow?: number
  shrink?: number
}

const dimensionProcessor: Processor<DimensionProps> = (props: DimensionProps) => {
  // eslint-disable-next-line prefer-const
  let { width, height, overflow, flush, padding, margin, shrink, grow } = props

  const size = getSize(props)
  if (size) {
    if (padding === undefined) {
      padding = FastUIDefaultTheme.spacings.Padding[size]
    }
    if (margin === undefined) {
      margin = FastUIDefaultTheme.spacings.Margin[size]
    }
    if (flush) {
      margin = 0
      padding = 0
    }
  }

  return css`
    ${width !== undefined ? css`width: ${CssFrom(width)};` : ''}
    ${height !== undefined ? css`height: ${CssFrom(height)};` : ''}
    ${padding !== undefined ? css`padding: ${CssFrom(padding)};` : ''}
    ${margin !== undefined ? css`margin: ${CssFrom(margin)};` : ''}
    ${grow !== undefined ? css`flex-grow: ${grow};` : ''}
    ${shrink !== undefined ? css`flex-shrink: ${shrink};` : ''}
    ${overflow ? css`overflow: ${overflow};` : ''}
  `
}

export default dimensionProcessor
