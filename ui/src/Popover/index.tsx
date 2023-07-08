import * as Popover from "@radix-ui/react-popover";

export const Root = Popover.Root;
export const Trigger = Popover.Trigger;

export const Anchor = (props: Popover.PopoverAnchorProps) => {
  return <Popover.Anchor {...props} />;
};

export const Portal = Popover.Portal;

export const Content = (props: Popover.PopoverContentProps) => {
  return <Popover.Content {...props} />;
};

export const Close = (props: Popover.PopoverCloseProps) => {
  return <Popover.Close {...props} />;
};

export const Arrow = (props: Popover.PopoverArrowProps) => {
  return <Popover.Arrow {...props} />;
};
