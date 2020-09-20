# О приложении
Приложение реализует SPA на Vue.js для вывода содержимого страниц на основе JSON конфигурации.

### Установка
```
npm install
```

Development:  
```
npm run dev
```

Production:  
```
npm run build
```

Deploy github pages
```
npm run deploy
```
Для изменения ссылки изменить значение **homepage** в _package.json_ 

### Описание модулей:
[vue](https://www.npmjs.com/package/vue) - js-фреймворк. [документация](https://vuejs.org/)  
[tailwindcss](https://www.npmjs.com/package/tailwindcss) - css-фреймворк. Представляет собой атомарный фреймворк с гибкой конфигурацией. [документация](https://tailwindcss.com/docs/installation)  
[vue-class-component](https://www.npmjs.com/package/vue-class-component) - typescript-декоратор для реализации class component. [документация](https://class-component.vuejs.org/)  
[vue-feather-icons](https://www.npmjs.com/package/vue-feather-icons) - набор компонентов иконок. [набор иконок](https://vue-feather-icons.egoist.sh/)   
[vue-property-decorator](https://www.npmjs.com/package/vue-property-decorator) - typescript-декораторы для vue.  
[vue-router](https://www.npmjs.com/package/vue-router) - маршрутизатор для vue. [документация](https://router.vuejs.org)

### Конфигурация
JSON-конфигурация задается в **src/utils/navigation.ts**.  
Доступные компоненты: 
* AppButton - компонент кнопки
* AppTable - компонент таблицы


