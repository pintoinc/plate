import type { RegistryItem } from 'shadcn/registry';

export function getRegistryTitle(item: Partial<RegistryItem>): string {
  return (
    item.title ??
    item.name
      ?.replace('-demo', '')
      ?.split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ') ??
    ''
  );
}

export function getDocTitle(item: { route?: string; title?: string }): string {
  return (
    item.title ??
    item.route
      ?.split('/')
      .pop()
      ?.split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ') ??
    ''
  );
}
