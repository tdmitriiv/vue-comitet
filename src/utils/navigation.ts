import {
  NavigationGroup,
  NavigationItem,
  NavigationPage,
  ComponentNames,
} from '@/types/navigationTypes';
import cities from '@/resource/cities.json';
import users from '@/resource/users.json';
import publications from '@/resource/pulications.json';

/**
 * Описание содержимого страницы публикаций
 */
const publicationsConent = [
  {
    component: ComponentNames.Table,
    options: publications,
  },
  {
    component: ComponentNames.Button,
    options: {
      title: 'Добавить статью',
      events: {
        click: () => {
          alert('роутинг на страницу формы добавления');
        },
      },
    },
  },
]

/**
 * Описание содержимого списка городов
 */
const citiesContent = [
  {
    component: ComponentNames.Table,
    options: cities,
  },
];

/**
 * Описание содержимого страницы списка пользователей
 */
const manageUsers = [
  {
    component: ComponentNames.Table,
    options: users,
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
        content: publicationsConent,
        options: {},
      },
      {
        name: 'Мессенджер',
        url: 'messenger',
        content: 'реализация компонента списка комментариев',
        options: {},
      },
    ],
  },
  {
    name: '',
    items: [
      {
        name: 'Подписка на еженедельную рассылку',
        url: 'subscription',
        content: 'реализация компонента формы',
        options: {},
      },
    ],
  },
  {
    name: 'Списки данных',
    items: [
      {
        name: 'Доступные города',
        url: 'cities',
        content: citiesContent,
        options: {},
      },
      {
        name: 'Управление пользователями',
        url: 'user-management',
        content: manageUsers,
        options: {},
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
        options: {
          class: 'font-bold text-lg leading-6',
        },
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
