import {
  NavigationGroup,
  NavigationItem,
  NavigationPage,
  ComponentNames,
} from '@/types/navigationTypes';

/**
 * Описание содержимого страницы публикаций
 */
const publications = [
  {
    component: ComponentNames.Table,
    options: {
      title: 'Список пользователей',
      searchField: 'name',
      tableHeaders: [
        {
          field: 'id',
          name: 'ID',
          icon: 'ListIcon',
          component: 'AppTableCellLink',
          link: '/'
        },
        {
          field: 'name',
          name: 'Имя',
          icon: 'UserIcon',
        },
        {
          field: 'email',
          name: 'Email',
          icon: 'AtSignIcon',
        },
        {
          field: 'status',
          name: 'Статус',
          icon: 'InfoIcon',
          component: 'AppTableCellBoolean',
        },
        {
          field: 'actions',
          name: 'Действия',
          icon: 'DiscIcon',
          component: 'AppTableCellDropdown',
        },
      ],
      tableData: [
        {
          id: 123,
          name: 'test',
          email: 'test@test.ru',
          status: true,
          actions: ['add', 'edit'],
        },
        {
          id: 123,
          name: 'test',
          email: 'test@test.ru',
          status: true,
          actions: ['add', 'edit'],
        },
      ],
      class: 'mb-2',
    },
  },
  {
    component: ComponentNames.Button,
    options: {
      title: 'Добавить пользователя',
      events: {
        click: () => {
          alert('add action');
        },
      },
    },
  },
];

export const nav:NavigationGroup[] = [
  {
    name: 'Статистика',
    items: [
      {
        name: 'Публикации',
        url: 'publications',
        content: publications,
      },
      {
        name: 'Мессенджер',
        url: 'messenger',
        content: 'text messenger',
      },
    ],
  },
  {
    name: '',
    items: [
      {
        name: 'Подписка на еженедельную рассылку',
        url: 'subscription',
        content: 'text subscription',
      },
    ],
  },
  {
    name: 'Списки данных',
    items: [
      {
        name: 'Доступные города',
        url: 'cities',
        content: 'text cities',
      },
    ],
  },
  {
    name: '',
    items: [
      {
        name: 'Библиотека компонентов',
        url: 'components',
        icon: 'LayersIcon',
        content: 'text components',
      },
    ],
    bottom: true,
  },
];

/**
 * Функция возвращает объект страницы в искомом разделе по полю url
 *
 * @param url - параметр маршрута страницы
 * @param group - раздел, в котором происходит поиск страницы
 */
const findGroupPageByUrl = (url: string, group: NavigationGroup): NavigationItem|undefined => group.items.find((groupItem) => groupItem.url === url);

/**
 * Функция возвращает данные страницы и её раздела по полю url искомой страницы
 *
 * @param currentUrl - параметр маршрута страницы
 */
export const findPageInfoByUrl = (currentUrl: string): NavigationPage => {
  let page;

  const group = nav.find((navGroup): boolean => {
    page = findGroupPageByUrl(currentUrl, navGroup);
    return Boolean(page);
  });

  return {
    page,
    group,
  };
};
