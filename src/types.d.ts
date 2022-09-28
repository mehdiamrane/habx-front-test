type SetupFormData = {
  priceRange: {
    min: number
    max: number
    average: number
  }
  surfaceRange: {
    min: number
    max: number
    average: number
  }
  typologies: {
    min: number
    max: number
  }
  exposures: string[]
}

type SetupValues = {
  budget: number
  surface: number
  typology: number
  exposures: string[]
}

type SetupComponentProps = {
  formData: SetupFormData
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>
}
