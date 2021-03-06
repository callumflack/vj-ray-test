import styled, { css } from 'styled-components'
import { Box } from '../styled-grid'
import theme from '../theme'

// Styled-components classes get added to data-injected content divs.
// This component overrides these classes.

const BoxReset = styled(Box)`
  margin: 0 !important;
  padding: 0 !important;
  width: 100% !important;

  > div {
    margin: 0 !important;
    padding: 0 !important;
    width: 100% !important;
  }

  @media (min-width: ${theme.containers.sm}) {
  }
`

export default BoxReset