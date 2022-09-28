import styled from 'styled-components'

import {
  ActionBar,
  Card,
  HeaderBar,
  IconTag,
  palette,
  Slider,
  Text,
  theme,
} from '@habx/ui-core'

export const SetupContainer = styled.div`
  margin: 0 auto;
  max-width: 780px;
  padding: 64px;
`

export const SetupHeaderBar = styled(HeaderBar)`
  gap: 20px;
`

export const SetupActionBar = styled(ActionBar)`
  div {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
`

export const SetupCard = styled(Card)`
  margin: 30px 0;
`

export const SetupBudgetTags = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
`

export const SetupFormError = styled(Text)`
  color: ${theme.color('error')};
  margin-top: 25px;
`

export const SetupSlider = styled(Slider)`
  margin-top: 20px;
`

export const SetupCheckboxesWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
`

export const SetupCheckboxLabel = styled.label`
  align-items: center;
  border-radius: 5px;
  border: 2px solid ${theme.neutralColor(300)};
  color: ${theme.neutralColor(700)};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-family: EuclidCircularB, sans-serif;
  gap: 15px;
  height: 120px;
  justify-content: center;
  position: relative;
  transition: border 150ms ease;
  width: 120px;

  &:hover {
    border: 2px solid ${palette.purpleDawn[200]};
  }

  input[type='checkbox'] {
    display: none;
  }

  &[data-checked='true'] {
    border: 2px solid ${palette.purpleDawn[400]};
  }
`
export const SetupCheckboxIcon = styled(IconTag)`
  position: absolute;
  right: 5px;
  top: 5px;
`
