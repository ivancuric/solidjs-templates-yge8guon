import type { Component } from 'solid-js';
import { Tooltip } from '@ark-ui/solid/tooltip';
import { Portal } from 'solid-js/web';
import { FocusTrap } from '@ark-ui/solid/focus-trap';
import { SmartEnvironmentProvider } from './SmartEnvProvider';

const App: Component = () => {
  return (
    <SmartEnvironmentProvider>
      {(rootNode) => {
        <Portal useShadow={false}>
          <Tooltip.Root>
            <Tooltip.Trigger>Hover Me</Tooltip.Trigger>
            <Tooltip.Positioner>
              <Tooltip.Content>I am a tooltip!</Tooltip.Content>
            </Tooltip.Positioner>
          </Tooltip.Root>
          <Tooltip.Root>
            <Tooltip.Trigger>Hover Me</Tooltip.Trigger>
            <Tooltip.Positioner>
              <Tooltip.Content>I am a tooltip!</Tooltip.Content>
            </Tooltip.Positioner>
          </Tooltip.Root>
          <Tooltip.Root>
            <Tooltip.Trigger>Hover Me</Tooltip.Trigger>
            <Tooltip.Positioner>
              <Tooltip.Content>I am a tooltip!</Tooltip.Content>
            </Tooltip.Positioner>
          </Tooltip.Root>
        </Portal>;
      }}
    </SmartEnvironmentProvider>
  );
};

export default App;
