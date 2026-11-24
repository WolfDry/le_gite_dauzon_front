import type { ChangeEvent, FocusEvent } from 'react'
import { Action, Container, Form, Text, Visual } from '../../atoms'

type Props = {
  label: string
  value: number
  min?: number
  max: number
  onChange: (value: number) => void
}

/** Compteur « − [n] + » d'une catégorie de voyageurs, borné entre min et max. */
const InputContainer = ({ label, value, min = 0, max, onChange }: Props) => {

  const clamp = (n: number) => Math.min(Math.max(n, min), max)

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const n = Number.parseInt(e.target.value, 10)
    onChange(Number.isNaN(n) ? min : clamp(n))
  }

  return (
    <Container.Row direction="row" justifyContent="space-between" alignItems="center" alignSelf="stretch" gap="10px">
      <Text.Paragraph flex="0 0 auto">
        {label}
      </Text.Paragraph>
      <Container.Row direction="row" justifyContent="center" alignItems="center" gap="8px">
        <Action.Button
          type="button"
          onClick={() => onChange(clamp(value - 1))}
          disabled={value <= min}
          aria-label={`${label} : moins`}
          width="24px"
          height="24px"
          flexShrink="0"
          padding="0"
          boxShadow="none"
          opacity={value <= min ? 0.3 : null}
        >
          <Visual.Svg label="minus" />
        </Action.Button>
        <Form.Input
          type="number"
          inputMode="numeric"
          min={min}
          max={max}
          value={value}
          onChange={handleInput}
          onFocus={(e: FocusEvent<HTMLInputElement>) => e.target.select()}
          aria-label={label}
          width="3.5rem"
          mWidth="3.5rem"
          padding="6px 8px"
          textAlign="center"
        />
        <Action.Button
          type="button"
          onClick={() => onChange(clamp(value + 1))}
          disabled={value >= max}
          aria-label={`${label} : plus`}
          width="24px"
          height="24px"
          flexShrink="0"
          padding="0"
          boxShadow="none"
          opacity={value >= max ? 0.3 : null}
        >
          <Visual.Svg label="plus" />
        </Action.Button>
      </Container.Row>
    </Container.Row>
  )
}

export default InputContainer
