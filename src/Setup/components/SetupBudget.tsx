import { FC } from 'react'
import { Field } from 'react-final-form'

import { Button, Text, Title, Icon, TextInput, Tag } from '@habx/ui-core'

import {
  SetupCard,
  SetupActionBar,
  SetupBudgetTags,
  SetupFormError,
  SetupSlider,
} from '../Setup.style'

const SetupBudget: FC<SetupComponentProps> = ({ formData, setCurrentStep }) => {
  return (
    <>
      <Title type="headerSmall">Budget</Title>
      <br />
      <Text type="emphasis">
        Quel est votre budget pour votre nouvel appartement ?
      </Text>
      <Field
        name="budget"
        render={({ input, meta }) => (
          <SetupCard spacing="regular">
            <TextInput
              bare
              type="number"
              elementRight={<Icon icon="euro" />}
              min={formData.priceRange.min}
              max={formData.priceRange.max}
              {...input}
            />
            <SetupSlider
              dotType="tag"
              tooltipFormatter={(value) => `${value}€`}
              step={5000}
              min={formData.priceRange.min}
              max={formData.priceRange.max}
              value={input.value}
              onChange={input.onChange}
            />
            <SetupBudgetTags>
              <Tag primary small>
                {formData.priceRange.min}€
              </Tag>
              <Tag primary small>
                {formData.priceRange.max}€
              </Tag>
            </SetupBudgetTags>
            {meta.error && meta.touched && (
              <SetupFormError>{meta.error}</SetupFormError>
            )}
            <SetupActionBar>
              <Button
                outline
                elementLeft={<Icon icon="arrow-west" />}
                onClick={() => setCurrentStep(0)}
              >
                Retour
              </Button>
              <Button
                elementRight={<Icon icon="arrow-east" />}
                onClick={() => setCurrentStep(2)}
                disabled={meta.error}
              >
                Suivant
              </Button>
            </SetupActionBar>
          </SetupCard>
        )}
      />
    </>
  )
}

export default SetupBudget
