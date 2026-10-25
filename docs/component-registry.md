# Maintaining the shadcn registry

Start at [`src/registry/index.ts`](../src/registry/index.ts). Use the corresponding definition file for [components](../src/registry/components/_registry.ts), [hooks](../src/registry/hooks/_registry.ts), [blocks](../src/registry/blocks/_registry.ts), or [examples](../src/registry/examples/_registry.ts).

## Change an item

Use the component or block name to locate its definition and source. Review the definition's referenced files, dependencies, and install paths when changing what the item ships. If the change alters a usage example, update the example implementation and the [component documentation](mdx-content.md) that describes it.

## Generate and validate

```sh
pnpm registry:build
pnpm registry:validate
```

The first command runs [`build-registry.mts`](../src/scripts/build-registry.mts) and then `shadcn build`. The second validates the resulting `public/r/registry.json`. Because validation reads the generated manifest, regenerate it whenever a registry definition or referenced file changes.

After validation, locate the changed item in the output and check that it has the intended name and files. If it has a published install command, try that command in a disposable consumer project to check the installed files and dependencies. The manifest check and the consumer install check exercise different parts of the workflow.
