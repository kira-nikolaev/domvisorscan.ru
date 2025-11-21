export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "DomVisor Scan",
  description: "Проверить любую недвижимость онлайн: квартиру, дом с участком за 5 минут!",
  navItems: [
    {
      label: "Главная",
      href: "/",
    },
    {
      label: "Пример отчета",
      href: "/report",
    },
  ],
  navMenuItems: [
    {
      label: "Главная",
      href: "/",
    },
    {
      label: "Пример отчета",
      href: "/report",
    },
  ],
  links: {
    mainSite: "https://domvisor.ru",
  },
};
