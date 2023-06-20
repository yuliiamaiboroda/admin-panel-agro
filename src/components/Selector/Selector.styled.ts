import styled from 'styled-components';
import Select from 'react-select';

export const StyledSelector = styled(Select)<any>`
  flex-grow: 1;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.medium};

  .selector__control {
    border-width: 2px;
    border-style: solid;
    border-color: ${p => p.theme.colors.confirmation};
    color: ${p => p.theme.colors.secondaryText};
    cursor: pointer;
    transition: box-shadow 250ms linear;

    :hover {
      border-color: ${p => p.theme.colors.confirmation};
      box-shadow: ${p => p.theme.shadows.selector};
    }
  }

  .selector__indicator-separator {
    width: 2px;
    background-color: ${p => p.theme.colors.accentBackground};
  }

  .selector__indicator {
    color: ${p => p.theme.colors.confirmation};
    transition: opacity 250ms linear;

    :hover {
      color: ${p => p.theme.colors.confirmation};
      opacity: 0.7;
    }
  }

  .selector__menu {
    overflow: hidden;
  }

  .selector__menu-list {
    ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-track {
      box-shadow: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${p => p.theme.colors.confirmationMedium};
      border-radius: ${p => p.theme.radii.card};

      :hover {
        background-color: ${p => p.theme.colors.accentBackground};
      }
    }
  }

  .selector__option {
    color: ${p => p.theme.colors.primaryText};
    font-size: ${p => p.theme.fontSizes.m};
  }

  .selector__option--is-focused {
    color: ${p => p.theme.colors.secondaryText};
    background: ${p => p.theme.colors.confirmationLight};
  }

  .selector__option--is-selected {
    color: ${p => p.theme.colors.accentText};
    background: ${p => p.theme.colors.primaryGradient};
  }
`;
