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

const SetupSurface: FC<SetupComponentProps> = ({
  formData,
  setCurrentStep,
}) => {
  return (
    <>
      <Title type="headerSmall">Surface</Title>
      <br />
      <Text type="emphasis">
        Et quelle serait la surface de votre appartement ?
      </Text>
      <Field
        name="surface"
        render={({ input, meta }) => (
          <SetupCard spacing="regular">
            <TextInput
              bare
              type="number"
              elementRight={<Text>m²</Text>}
              min={formData.surfaceRange.min}
              max={formData.surfaceRange.max}
              {...input}
            />
            <SetupSlider
              dotType="tag"
              tooltipFormatter={(value) => `${value}m²`}
              step={5}
              min={formData.surfaceRange.min}
              max={formData.surfaceRange.max}
              value={input.value}
              onChange={input.onChange}
            />
            <SetupBudgetTags>
              <Tag primary small>
                {formData.surfaceRange.min}m²
              </Tag>
              <Tag primary small>
                {formData.surfaceRange.max}m²
              </Tag>
            </SetupBudgetTags>
            {meta.error && meta.touched && (
              <SetupFormError>{meta.error}</SetupFormError>
            )}
            <SetupActionBar>
              <Button
                outline
                elementLeft={<Icon icon="arrow-west" />}
                onClick={() => setCurrentStep(1)}
              >
                Retour
              </Button>
              <Button
                elementRight={<Icon icon="arrow-east" />}
                onClick={() => setCurrentStep(3)}
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

export default SetupSurface
