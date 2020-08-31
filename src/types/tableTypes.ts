/**
 * Интерфейс заголовка таблицы
 */
export interface TableHeader {
  /**
   * Field - Поле данных колонки
   */
  field: string;

  /**
   * Name - Наименование колонки
   */
  name: string;

  /**
   * Icon - Иконка рядом с наименованием
   */
  icon: string;
}
