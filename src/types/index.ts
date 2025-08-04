export interface Call {
  id: number; // Уникальный идентификатор звонка
  partnership_id: string; // ID партнёрского аккаунта

  // Дата и время звонка
  date: string; // Полная дата звонка в формате 'YYYY-MM-DD HH:mm:ss'
  date_notime: string; // Дата без времени, для группировки по дню

  // Направление звонка
  in_out: 0 | 1; // 1 — входящий, 0 — исходящий

  // Длительность звонка
  time: number; // Продолжительность звонка в секундах (альтернатива duration)
  duration: number; // Дублирует time, иногда приходит вместо него

  // Номера телефонов
  from_number: string; // Номер, с которого совершён звонок (для исходящих)
  to_number: string; // Номер, на который поступил звонок (для входящих)

  // Имя и данные клиента/сотрудника
  partner_data: {
    id: string; // ID клиента
    name: string; // Имя клиента
    phone: string; // Телефон клиента
  };

  // Запись звонка
  record: string | null; // Ссылка на запись звонка или null, если нет записи

  // Статус звонка
  status: string; // Статус звонка: success, noanswer, canceled, busy и т.п.

  // Причина завершения
  disconnect_reason: string; // Причина завершения звонка (если есть)

  // Ошибки, если были
  errors: Array<{
    title: string; // Название ошибки
  }>;

  // Результаты и категории звонка (от CRM или оператора)
  results: Array<{
    type: string; // Тип результата, например: 'success', 'missed', 'spam'
    title: string; // Название тега или результата
    tooltip?: string; // Подсказка по тегу (если есть)
  }>;

  // ID сотрудника, который принял/совершил звонок
  person_id: number; // ID пользователя/оператора
  person_name: string; // Имя сотрудника
  person_avatar: string; // URL аватара сотрудника (может быть null)

  // Дополнительно:
  is_skilla: boolean; // Является ли звонок сделанным через Skilla-интерфейс

  line_number: string; // Номер линии (виртуальной), с которой или на которую шел звонок
  source: string; // Источник звонка, например: 'sip', 'external'

  // Теги звонка (если есть)
  tags: string[]; // Список тегов, проставленных оператором

  // Признак важности звонка (например, лид)
  is_new: boolean; // true — звонок новый/необработанный

  // Связанные события
  events: Array<{
    id: number;
    type: string;
    created_at: string;
  }>;

  // Отметка, что звонок был переадресован
  is_redirected: boolean;
}

export type GetCallsResponse = {
  results: Call[];
  total_rows: number;
};

export type GetCallsFilters = {
  date_start: string;
  date_end: string;
  in_out?: 0 | 1;
  sort_by?: 'date' | 'duration';
  order?: 'ASC' | 'DESC';
  limit?: number;
  offset?: number;
};
