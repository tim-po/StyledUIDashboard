import React from 'react'
import Flex from '../../StyledUI/BaseComponents/Flex'
import Text from '../../StyledUI/BaseComponents/Text'

import Card from '../../StyledUI/BuildingBlocks/Card'
import ComponentDisplay from './ComponentDisplay'
import { css } from 'styled-components'
import { makeEmptyArray } from '../../std-lib/extensions/array'

export default function Dashboard() {
  return (
    <Flex column centered fragment={css`height: 100vh`}>
      <ComponentDisplay component={props => <Card {...props}>This is a card</Card>} />
      <ComponentDisplay component={props => <Text {...props}>This is a text</Text>} />
      <ComponentDisplay
        component={props => (
          <Flex {...props}>
            {makeEmptyArray(10).map(i => (
              <Card key={i} {...props}>
                This is a Flex
              </Card>
            ))}
          </Flex>
        )}
      />
    </Flex>
  )
}
