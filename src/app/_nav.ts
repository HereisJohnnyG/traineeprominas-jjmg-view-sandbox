interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [
  {
    title: true,
    name: 'Perfils'
  },
  {
    name: 'Usuários',
    url: '/usuario/',
    icon: 'icon-user'
  },
  {
    name: 'Professores',
    url: '/professor/',
    icon: 'icon-eyeglass'
  },
  {
    name: 'Curso',
    url: '/curso/',
    icon: 'icon-pencil'
  },
  {
    name: 'Estudante',
    url: '/estudante/',
    icon: 'icon-graduation'
  },
  {
    name: 'Gráficos',
    url: '/grafico/',
    icon: 'icon-chart'
  }
];
