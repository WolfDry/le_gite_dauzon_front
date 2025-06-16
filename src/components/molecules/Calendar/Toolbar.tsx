import React from 'react'
import { ToolbarProps } from 'react-big-calendar'
import { Event } from './Calendrier'
import { Container, Text, Visual } from '../../atoms'

type Props = ToolbarProps<Event> & {
  hidden?: {
    today?: boolean
    prev?: boolean
    next?: boolean
  }
}

const Toolbar: React.FC<Props> = ({ label, onNavigate }) => {
  const handleNavigate = (action: 'TODAY' | 'PREV' | 'NEXT') => {
    onNavigate(action)
  }

  return (
    <Container.Row className="rbc-toolbar" justifyContent="center" alignItems="center" gap="30px" alignSelf="stretch">
      <Container.Column onClick={() => handleNavigate('PREV')} cursor="pointer">
        <Visual.Svg label="leftArrow" />
      </Container.Column>
      <Text.Paragraph onClick={() => handleNavigate('TODAY')} fontWeight="600" cursor="pointer">
        {label}
      </Text.Paragraph>
      <Container.Column onClick={() => handleNavigate('NEXT')} cursor="pointer">
        <Visual.Svg label="rightArrow" />
      </Container.Column>
    </Container.Row>
  )
}

export default Toolbar
