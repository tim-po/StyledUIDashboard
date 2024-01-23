import styled, { css } from 'styled-components'
import dimensionProcessor, { DimensionProps } from '../../processors/dimentions'
import visualisationProcessor, {
  VisualisationProps,
} from '../../processors/visualisation'
import adaptive, { Adaptive } from '../../higherLevelProcessors/adaptive'
import combine from '../../higherLevelProcessors/combine'
import fragmentProcessor, { FragmentProps } from '../../processors/fragment'

type ImgProps = {
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
} & DimensionProps &
  VisualisationProps &
  FragmentProps

const imgProcessor = (props: ImgProps) => {
  return css`
    ${props.objectFit ? css`object-fit: ${props.objectFit}` : ''};
  `
}

const Img = styled.img<Adaptive<ImgProps>>`
  ${props =>
    adaptive(
      combine<ImgProps & FragmentProps>([
        imgProcessor,
        fragmentProcessor,
        dimensionProcessor,
        visualisationProcessor,
      ]),
    )(props)}
}
`

export default Img
