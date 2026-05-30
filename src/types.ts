export type ActivePage = "home" | "services" | "about" | "projects" | "team" | "contacts";

export interface NavLinkItem {
  id: ActivePage;
  label: string;
}

export const NAV_LINKS: NavLinkItem[] = [
  { id: "services", label: "Services" },
  { id: "about", label: "About Us" },
  { id: "projects", label: "Projects" },
  { id: "team", label: "Team" },
  { id: "contacts", label: "Contacts" },
];
