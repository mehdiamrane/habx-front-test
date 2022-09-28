/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: project
// ====================================================

export interface project_project {
  id: string | null
  name: string | null
  properties?: {
    exposures?: string[]
    priceRange: {
      min: number | null
      max: number | null
    }
    surfaceRange?: {
      min: number | null
      max: number | null
    }
    typologies?: number[]
  }
}

export interface project {
  project: project_project | null
}
