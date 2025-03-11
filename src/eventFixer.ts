import { HTMLProps } from "@ark-ui/solid/factory";
import { JSX } from "solid-js/jsx-runtime";

type ElementType = keyof JSX.IntrinsicElements;

/**
 * Converts SolidJS delegated events to native events
 *
 * https://github.com/chakra-ui/ark/issues/3146#issuecomment-2556518786
 *
 * https://docs.solidjs.com/concepts/components/event-handlers#list-of-delegated-events
 */
export function eventFixer<E extends ElementType>(props: HTMLProps<E>) {
  const newObj: Record<string, unknown> = {};

  Object.entries(props).forEach(([key, value]) => {
    const lowerCaseKey = key.toLowerCase();
    let trimmedKey = lowerCaseKey;

    // it's an event handler
    if (lowerCaseKey.startsWith("on")) {
      trimmedKey = lowerCaseKey.slice(2);

      const newKey = `on:${trimmedKey}`;
      newObj[newKey] = value;
    } else {
      // if it's not an event handler
      newObj[trimmedKey] = value;
    }
  });

  return newObj;
}
