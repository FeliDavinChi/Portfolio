import { HammerIcon } from "lucide-react"

import { IconTile } from "@/components/ui/icon-tile"
import { CollapsibleList } from "@/components/collapsible-list"
import {
  Panel,
  PanelContent,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from "@/features/portfolio/components/panel"
import { PanelTitleCopy } from "@/features/portfolio/components/panel-title-copy"
import { PROJECTS } from "@/features/portfolio/data/projects"

import { ProjectItem } from "./project-item"

const ID = "projects"

export function Projects() {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Projects</a>
          <PanelTitleSup>
            ({PROJECTS.length > 0 ? PROJECTS.length : "In Building"})
          </PanelTitleSup>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      {PROJECTS.length > 0 ? (
        <CollapsibleList
          items={PROJECTS}
          max={4}
          renderItem={(item) => <ProjectItem project={item} />}
        />
      ) : (
        <PanelContent>
          <div className="flex items-center gap-4 py-2 font-mono text-sm text-muted-foreground">
            <IconTile>
              <HammerIcon className="size-4 animate-bounce text-amber-500" />
            </IconTile>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-block size-2 animate-pulse rounded-full bg-amber-500" />
              <span className="font-medium text-foreground">In Building</span>
              <span>
                — New AI/ML and web software projects are currently in
                development.
              </span>
            </div>
          </div>
        </PanelContent>
      )}
    </Panel>
  )
}
