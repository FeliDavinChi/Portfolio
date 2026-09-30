import { Button } from "@/components/base/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/base/ui/tooltip"

export function NavItemResume() {
  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button
            className="border-none px-2 text-xs font-medium"
            variant="ghost"
            size="sm"
            nativeButton={false}
            render={
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Resume"
              >
                <span>Resume</span>
              </a>
            }
          />
        }
      />
      <TooltipContent>View Resume (PDF)</TooltipContent>
    </Tooltip>
  )
}
