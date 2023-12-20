import {signal} from '@preact/signals-react';

export let uiState = {
  bottomAlert: {
    isHidden: signal(false),
    isMinimized: signal(false),
    toggleHidden: () => (uiState.bottomAlert.isHidden.value = !uiState.bottomAlert.isHidden.value),
    toggleMinimized: () => (uiState.bottomAlert.isMinimized.value = !uiState.bottomAlert.isMinimized.value),
  },
  bottomInfo: {
    isHidden: signal(false),
    isMinimized: signal(false),
    toggleHidden: () => (uiState.bottomInfo.isHidden.value = !uiState.bottomInfo.isHidden.value),
    toggleMinimized: () => (uiState.bottomInfo.isMinimized.value = !uiState.bottomInfo.isMinimized.value),
  },
  bottomMenu: {
    isHidden: signal(false),
    isMinimized: signal(false),
    toggleHidden: () => (uiState.bottomMenu.isHidden.value = !uiState.bottomMenu.isHidden.value),
    toggleMinimized: () => (uiState.bottomMenu.isMinimized.value = !uiState.bottomMenu.isMinimized.value),
  },
  leftInfo: {
    isHidden: signal(false),
    isMinimized: signal(false),
    toggleHidden: () => (uiState.leftInfo.isHidden.value = !uiState.leftInfo.isHidden.value),
    toggleMinimized: () => (uiState.leftInfo.isMinimized.value = !uiState.leftInfo.isMinimized.value),
  },
  leftMenu: {
    isHidden: signal(false),
    isMinimized: signal(false),
    toggleHidden: () => (uiState.leftMenu.isHidden.value = !uiState.leftMenu.isHidden.value),
    toggleMinimized: () => (uiState.leftMenu.isMinimized.value = !uiState.leftMenu.isMinimized.value),
  },
  rightInfo: {
    isHidden: signal(false),
    isMinimized: signal(false),
    toggleHidden: () => (uiState.rightInfo.isHidden.value = !uiState.rightInfo.isHidden.value),
    toggleMinimized: () => (uiState.rightInfo.isMinimized.value = !uiState.rightInfo.isMinimized.value),
  },
  rightMenu: {
    isHidden: signal(false),
    isMinimized: signal(false),
    toggleHidden: () => (uiState.rightMenu.isHidden.value = !uiState.rightMenu.isHidden.value),
    toggleMinimized: () => (uiState.rightMenu.isMinimized.value = !uiState.rightMenu.isMinimized.value),
  },
  topAlert: {
    isHidden: signal(false),
    isMinimized: signal(false),
    toggleHidden: () => (uiState.topAlert.isHidden.value = !uiState.topAlert.isHidden.value),
    toggleMinimized: () => (uiState.topAlert.isMinimized.value = !uiState.topAlert.isMinimized.value),
  },
  topInfo: {
    isHidden: signal(false),
    isMinimized: signal(false),
    toggleHidden: () => (uiState.topInfo.isHidden.value = !uiState.topInfo.isHidden.value),
    toggleMinimized: () => (uiState.topInfo.isMinimized.value = !uiState.topInfo.isMinimized.value),
  },
  topMenu: {
    isHidden: signal(false),
    isMinimized: signal(false),
    toggleHidden: () => (uiState.topMenu.isHidden.value = !uiState.topMenu.isHidden.value),
    toggleMinimized: () => (uiState.topMenu.isMinimized.value = !uiState.topMenu.isMinimized.value),
  },
};
