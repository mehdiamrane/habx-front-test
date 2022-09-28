import { useQuery, useMutation } from '@apollo/client'
import { useState, useMemo, useCallback } from 'react'
import { Form } from 'react-final-form'

import { Button, Text, Title, Icon } from '@habx/ui-core'

import SetupBudget from './components/SetupBudget'
import SetupExposures from './components/SetupExposures'
import SetupSurface from './components/SetupSurface'
import SetupTypology from './components/SetupTypology'
import { projectQuery, mutationSetup } from './Setup.query'
import { SetupContainer, SetupHeaderBar } from './Setup.style'
import { project } from './types/project'

const Setup = () => {
  const projectResponse = useQuery<project>(projectQuery)
  const [upsertSetup] = useMutation(mutationSetup)

  const [currentStep, setCurrentStep] = useState<number>(4)

  const steps = useMemo<string[]>(
    () => ['Présentation', 'Budget', 'Surface', 'Pièces', 'Exposition'],
    []
  )

  const formData = useMemo<SetupFormData>(() => {
    const { properties } = projectResponse?.data?.project || {}

    return {
      priceRange: {
        min: properties?.priceRange?.min || 0,
        max: properties?.priceRange?.max || 0,
        average:
          Math.round(
            (properties?.priceRange?.min + properties?.priceRange?.max) / 2
          ) || 0,
      },
      surfaceRange: {
        min: properties?.surfaceRange?.min || 0,
        max: properties?.surfaceRange?.max || 0,
        average:
          Math.round(
            (properties?.surfaceRange?.min + properties?.surfaceRange?.max) / 2
          ) || 0,
      },
      typologies: {
        min: Math.min(...(properties?.typologies || [0])),
        max: Math.max(...(properties?.typologies || [0])),
      },
      exposures: properties?.exposures || [],
    }
  }, [projectResponse])

  const initialValues = useMemo<SetupValues>(
    () => ({
      budget: formData.priceRange.average,
      surface: formData.surfaceRange.average,
      typology: formData.typologies.min,
      exposures: [],
    }),
    [formData]
  )

  const submitForm = useCallback(
    (values: SetupValues) => {
      upsertSetup({ variables: { setup: { ...values } } })
      setCurrentStep(5)
    },
    [upsertSetup]
  )

  const validateForm = useCallback(
    (values: SetupValues) => {
      const errors: {
        budget?: string
        surface?: string
        typology?: string
        exposures?: string
      } = {}

      if (!values.budget) {
        errors.budget = 'Un budget est requis.'
      }
      if (values.budget > formData.priceRange.max) {
        errors.budget = 'Votre budget dépasse la somme maximale possible.'
      }
      if (values.budget < formData.priceRange.min) {
        errors.budget = 'Votre budget est insuffisant.'
      }
      if (!values.surface) {
        errors.surface = 'Une surface est requise.'
      }
      if (values.surface > formData.surfaceRange.max) {
        errors.surface = 'Votre surface demandée est trop élevée.'
      }
      if (values.surface < formData.surfaceRange.min) {
        errors.surface = 'Votre surface est insuffisante.'
      }
      if (
        !values.typology ||
        !projectResponse?.data?.project?.properties?.typologies.includes(
          values.typology
        )
      ) {
        errors.typology = "Un type d'appartement valide est requis."
      }

      if (
        !values.exposures ||
        values.exposures.length === 0 ||
        values.exposures?.some(
          (value: string) =>
            !projectResponse?.data?.project?.properties?.exposures.includes(
              value
            )
        )
      ) {
        errors.exposures = 'Au moins une exposition est requise.'
      }
      return errors
    },
    [formData, projectResponse]
  )

  return (
    <>
      <SetupHeaderBar progress={currentStep / steps.length}>
        <Text type="regular" variation="title">
          {currentStep < 5
            ? `Définir vos besoins : ${steps[currentStep]}`
            : 'Setup terminé !'}
        </Text>
        <Text type="regular" variation="lowContrast">
          {currentStep < 5
            ? `Étape ${currentStep} sur ${steps.length - 1}`
            : 'Complet'}
        </Text>
      </SetupHeaderBar>
      <SetupContainer>
        {currentStep === 0 ? (
          <>
            <Title type="header">
              Trouvons votre appartement idéal à{' '}
              {projectResponse.data?.project?.name}
            </Title>
            <br />
            <Button
              onClick={() => setCurrentStep(1)}
              elementRight={<Icon icon="arrow-east" />}
            >
              Commencer le setup
            </Button>
          </>
        ) : null}

        <Form
          onSubmit={submitForm}
          initialValues={initialValues}
          validate={validateForm}
          render={({ handleSubmit, form }) => (
            <form id="setup" onSubmit={handleSubmit}>
              {currentStep === 1 ? (
                <SetupBudget
                  formData={formData}
                  setCurrentStep={setCurrentStep}
                />
              ) : null}

              {currentStep === 2 ? (
                <SetupSurface
                  formData={formData}
                  setCurrentStep={setCurrentStep}
                />
              ) : null}

              {currentStep === 3 ? (
                <SetupTypology
                  formData={formData}
                  setCurrentStep={setCurrentStep}
                />
              ) : null}

              {currentStep === 4 ? (
                <SetupExposures
                  formData={formData}
                  setCurrentStep={setCurrentStep}
                />
              ) : null}

              {currentStep > 4 ? (
                <>
                  <Title type="header">Setup terminé !</Title>
                  <br />
                  <Button
                    onClick={() => {
                      form.reset()
                      setCurrentStep(0)
                    }}
                  >
                    Recommencer ?
                  </Button>
                </>
              ) : null}
            </form>
          )}
        />
      </SetupContainer>
    </>
  )
}

export default Setup
