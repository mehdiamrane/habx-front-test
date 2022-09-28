import { FC } from 'react'
import { Field } from 'react-final-form'

import { Button, Text, Title, Slider, Icon } from '@habx/ui-core'

import { SetupCard, SetupActionBar, SetupFormError } from '../Setup.style'

const SetupTypology: FC<SetupComponentProps> = ({
  formData,
  setCurrentStep,
}) => {
  return (
    <>
      <Title type="headerSmall">Typologie</Title>
      <br />
      <Text type="emphasis">
        Parlons un peu plus de votre appartement. Vous cherchez un...
      </Text>
      <Field
        name="typology"
        render={({ input, meta }) => (
          <SetupCard spacing="regular">
            <Slider
              label="Typologie"
              dotType="regular"
              dots
              shouldTooltipFollowDot={false}
              tooltipFormatter={(value) => `T${value}`}
              step={1}
              min={formData.typologies.min}
              max={formData.typologies.max}
              {...input}
            />
            {meta.error && <SetupFormError>{meta.error}</SetupFormError>}
            <SetupActionBar>
              <Button
                outline
                elementLeft={<Icon icon="arrow-west" />}
                onClick={() => setCurrentStep(2)}
              >
                Retour
              </Button>
              <Button
                elementRight={<Icon icon="arrow-east" />}
                onClick={() => setCurrentStep(4)}
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

export default SetupTypology
