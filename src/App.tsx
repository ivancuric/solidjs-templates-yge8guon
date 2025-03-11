import { createSignal, type Component } from "solid-js";
import { Tooltip } from "@ark-ui/solid/tooltip";
import { Portal } from "solid-js/web";
import { FocusTrap } from "@ark-ui/solid/focus-trap";
import { SmartEnvironmentProvider } from "./SmartEnvProvider";
import { eventFixer } from "./eventFixer";
import { Toggle } from "@ark-ui/solid/toggle";
import { Rerun } from "@solid-primitives/keyed";

const [useEventFixer, setUseEventFixer] = createSignal(true);

const App: Component = () => {
  return (
    <Portal useShadow={true}>
      <Toggle.Root onPressedChange={setUseEventFixer}>
        Fix events
        <Toggle.Indicator fallback="🔴">🟢</Toggle.Indicator>
      </Toggle.Root>
      <SmartEnvironmentProvider>
        {() => {
          return (
            <FocusTrap>
              <Button></Button>
              <Button></Button>
              <Button></Button>
            </FocusTrap>
          );
        }}
      </SmartEnvironmentProvider>

      <p>Tooltips will open on focus only if events are fixed</p>
    </Portal>
  );
};

export const Button: Component = () => {
  return (
    <Tooltip.Root openDelay={0} closeDelay={0}>
      {/* Button */}
      <Rerun on={useEventFixer}>
        <Tooltip.Trigger
          asChild={(tooltipProps) => {
            const appliedProps = useEventFixer()
              ? eventFixer(tooltipProps())
              : tooltipProps();
            return <button {...appliedProps}>Trigger</button>;
          }}
        />
      </Rerun>
      {/* Tooltip */}
      <Tooltip.Positioner>
        <Tooltip.Content>Content</Tooltip.Content>
      </Tooltip.Positioner>
    </Tooltip.Root>
  );
};

export default App;
