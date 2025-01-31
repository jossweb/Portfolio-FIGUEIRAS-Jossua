"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
 <ProgressPrimitive.Root
  ref={ref}
  className={cn(
    "relative h-4 w-full overflow-hidden rounded-full bg-secondary border-2 border-black",
    className
  )}
  {...props}
>
  <ProgressPrimitive.Indicator
    className="absolute h-full w-[102%] left-[10px] flex-1 bg-gray-400 transition-all duration-300 ease-in-out"
    style={{ 
      transform: `translateX(-${100 - (value || 0)}%)`,
      borderRadius: 'inherit'
    }}
  />
</ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }