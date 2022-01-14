import * as TooltipPrimitive from "@radix-ui/react-tooltip";
export default function userTools({
  children,
  content,
  open,
  defaultOpen,
  onOpenChange,
  ...props
}) {
  return (
    <TooltipPrimitive.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      delayDuration={100}
    >
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      <TooltipPrimitive.Content
        sideOffset={4}
        className="rounded px-2 py-1 bg-black/80 text-sm text-white"
        {...props}
      >
        {" "}
        {content}
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Root>
  );
}
