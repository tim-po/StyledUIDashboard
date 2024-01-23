import React, { ReactNode, useState } from 'react'
import Flex from '../../../StyledUI/BaseComponents/Flex'
import { SizeModifier } from '../../../StyledUI/theme/types'

// ToDo refactor props and add option select props
export default function ComponentDisplay(props: {
  component: (props: any) => ReactNode
}) {
  const [size, setSize] = useState<SizeModifier>('small')

  const propsForChild: Partial<Record<SizeModifier, boolean>> = {}
  propsForChild[size] = true

  return (
    <Flex column centered>
      <select onChange={e => setSize(e.target.value as SizeModifier)}>
        <option value="tiny">tiny</option>
        <option value="small">small</option>
        <option value="medium">medium</option>
        <option value="big">big</option>
        <option value="huge">huge</option>
      </select>
      {props.component(propsForChild)}
    </Flex>
  )
}
