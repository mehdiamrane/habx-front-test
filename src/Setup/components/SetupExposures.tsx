import React, { FC, useMemo } from 'react'
import { Field, useField, useFormState } from 'react-final-form'

import { Button, Text, Title, Icon, IconTag } from '@habx/ui-core'

import {
  SetupCard,
  SetupActionBar,
  SetupFormError,
  SetupCheckboxLabel,
  SetupCheckboxesWrapper,
  SetupCheckboxIcon,
} from '../Setup.style'

const SetupExposures: FC<SetupComponentProps> = ({
  formData,
  setCurrentStep,
}) => {
  const exposuresFieldState = useField('exposures', { type: 'checkbox' })
  const formState = useFormState()

  const translations = useMemo(
    () => ({
      north: 'Exposé Nord',
      south: 'Exposé Sud',
      east: 'Exposé Est',
      west: 'Exposé Ouest',
    }),
    []
  )

  return (
    <>
      <Title type="headerSmall">Exposition</Title>
      <br />
      <Text type="emphasis">Et enfin, quelle serait l'exposition idéale ?</Text>
      <SetupCard spacing="regular">
        <SetupCheckboxesWrapper>
          {formData.exposures.map((exposure) => {
            const isChecked = formState.values.exposures.includes(exposure)
            return (
              <SetupCheckboxLabel
                htmlFor={exposure}
                key={exposure}
                data-checked={isChecked}
              >
                <IconTag icon={`arrow-${exposure}`} />
                <Field
                  id={exposure}
                  key={exposure}
                  name="exposures"
                  component="input"
                  type="checkbox"
                  value={exposure}
                />
                {translations[exposure]}
                {isChecked ? (
                  <SetupCheckboxIcon icon="check" primary small />
                ) : null}
              </SetupCheckboxLabel>
            )
          })}
        </SetupCheckboxesWrapper>

        {exposuresFieldState.meta.error && exposuresFieldState.meta.touched && (
          <SetupFormError>{exposuresFieldState.meta.error}</SetupFormError>
        )}
        <SetupActionBar>
          <Button
            outline
            elementLeft={<Icon icon="arrow-west" />}
            onClick={() => setCurrentStep(3)}
          >
            Retour
          </Button>
          <Button
            type="submit"
            form="setup"
            disabled={exposuresFieldState.meta.error}
            elementRight={<Icon icon="check" />}
          >
            Valider
          </Button>
        </SetupActionBar>
      </SetupCard>
    </>
  )
}

export default SetupExposures
