const russian = {
  skip: 'Перейти к основному содержанию',
  location: 'Чуйская область, Кыргызстан',
  ministry: 'Министерство просвещения КР',
  brandName: 'Чүй билим берүү институту',
  brand: 'Чүй билим берүү\nинституту',
  mainNav: 'Главное меню',
  courses: 'Обучение',
  materials: 'Материалы',
  updates: 'Объявления',
  about: 'Об институте',
  contact: 'Контакты',
  search: 'Поиск по сайту',
  language: 'Язык сайта',
  menuOpen: 'Открыть меню',
  menuClose: 'Закрыть меню',
  heroLabel: 'Для педагогов',
  heroTitle: 'Чүй билим берүү институту',
  heroLead: 'Курсы повышения квалификации, методические материалы и новости образования для педагогов Чуйской области.',
  heroCourses: 'Посмотреть курсы',
  schedule: 'План-график',
  mapTitle: 'Карта Чуйской области',
  mapHelp: 'Выберите район на карте или в списке.',
  mapNoScript: 'Для просмотра карты включите JavaScript в браузере.',
  mapCredit: 'Границы · OCHA, 2018',
  districtList: 'Районы',
  districtCenter: 'Центр района',
  districtSchools: 'Школьный портал Чуйской области',
  quick: 'Полезные ссылки',
  quickSchedule: 'Курсы в Чуйской области',
  onlineCourses: 'Онлайн-курсы',
  quickOnline: 'Платформа «Устат»',
  textbooks: 'Электронные учебники',
  quickBooks: 'Учебники и пособия',
  certificate: 'Подтверждение сертификата',
  quickCertificate: 'Сервис РИПКиППР',
  courseTitle: 'Повышение квалификации',
  courseLead: 'Посмотрите расписание курсов в Чуйской области или выберите обучение онлайн.',
  regional: 'Курсы Чуйской области',
  regionalBody: 'План-график повышения квалификации в Чуйской области на 2026–2027 учебный год.',
  viewSchedule: 'Посмотреть план-график',
  onlineTitle: 'Обучение на платформе «Устат»',
  onlineBody: 'Выберите онлайн-курсы для педагогов и учитесь в удобное время.',
  viewOnline: 'Посмотреть онлайн-курсы',
  resourceTitle: 'Ресурсы для работы учителя',
  resourceLead: 'Открытые источники для подготовки к урокам и работы с новыми учебными программами.',
  methods: 'Методические материалы',
  methodsBody: 'Разработки уроков и практические пособия',
  textbooksBody: 'Цифровая библиотека по школьным предметам',
  twelve: '12-летнее образование',
  twelveBody: 'Программы перехода и руководства для учителей',
  updatesTitle: 'Новости и объявления',
  updateTabs: 'Тип публикаций',
  news: 'Новости',
  scheduleDate: '20 ноября 2026',
  announcementTitle: 'План-график Чуйской области на 2026–2027 год',
  announcementBody: 'Расписание повышения квалификации педагогов опубликовано в разделе документов Республиканского института.',
  newsDate: '14 августа 2026',
  newsTitle: 'Реорганизация областных институтов образования',
  newsBody: 'Министерство просвещения сообщило о преобразовании методических центров Чуйской и других областей в институты образования.',
  ministryShort: 'Министерство просвещения',
  aboutBody: 'Работа института направлена на профессиональное развитие и методическую поддержку педагогов Чуйской области. На портале собраны план-график курсов Чуйской области и открытые ресурсы для учителей.',
  aboutSource: 'Информация Министерства просвещения',
  forTeachers: 'Педагогам',
  contactLead: 'Прямые контакты института уточняются.',
  contactSource: 'Контакты Министерства просвещения',
  footerName: '© 2026 Чүй билим берүү институту',
  backTop: 'К началу страницы',
  close: 'Закрыть',
  searchInput: 'Ключевое слово',
  searchPlaceholder: 'Курс, документ или материал…',
  searchEmpty: 'По этому запросу ничего не найдено.',
  searchOptions: 'Популярные разделы',
};

const translatedAttributes = {
  label: 'aria-label',
  placeholder: 'placeholder',
};
const kyrgyz = {
  menuClose: 'Менюну жабуу',
  searchEmpty: 'Издөө боюнча эч нерсе табылган жок.',
  searchOptions: 'Көп колдонулган бөлүмдөр',
};
const translations = { ky: kyrgyz, ru: russian };
const textNodes = [...document.querySelectorAll('[data-t]')];
const attributeNodes = Object.entries(translatedAttributes).flatMap(([name, attribute]) =>
  [...document.querySelectorAll(`[data-${name}]`)].map((element) => ({ element, attribute, key: element.dataset[name] })),
);
const languageButtons = [...document.querySelectorAll('[data-language]')];
const nav = document.querySelector('.main-nav');
const menuButton = document.querySelector('.menu-toggle');
const dialog = document.querySelector('#search-dialog');
const searchInput = dialog.querySelector('input');
const searchStatus = document.querySelector('#search-status');
const searchResults = document.querySelector('#search-results');
const districtMap = document.querySelector('#district-map');
const districtOptions = document.querySelector('#district-options');
const districtName = document.querySelector('#district-name');
const districtCenter = document.querySelector('#district-center');

const districts = [
  { id: 'panfilov', label: 'Панфилов', ky: 'Панфилов району', ru: 'Панфиловский район', center: { ky: 'Кайыңды шаары', ru: 'город Каинды' }, point: [105, 315], color: '#a5cdef' },
  { id: 'jaiyl', label: 'Жайыл', ky: 'Жайыл району', ru: 'Жайылский район', center: { ky: 'Кара-Балта шаары', ru: 'город Кара-Балта' }, point: [226, 360], color: '#82b5e2' },
  { id: 'moscow', label: 'Москва', ky: 'Москва району', ru: 'Московский район', center: { ky: 'Беловодское айылы', ru: 'село Беловодское' }, point: [224, 98], color: '#b7d6f0' },
  { id: 'sokuluk', label: 'Сокулук', ky: 'Сокулук району', ru: 'Сокулукский район', center: { ky: 'Сокулук айылы', ru: 'село Сокулук' }, point: [279, 139], color: '#96bce7' },
  { id: 'alamudun', label: 'Аламүдүн', ruLabel: 'Аламудун', ky: 'Аламүдүн району', ru: 'Аламудунский район', center: { ky: 'Лебединовка айылы', ru: 'село Лебединовка' }, point: [335, 196], color: '#a8d3f0' },
  { id: 'ysyk-ata', label: 'Ысык-Ата', ky: 'Ысык-Ата району', ru: 'Ысык-Атинский район', center: { ky: 'Кант шаары', ru: 'город Кант' }, point: [407, 167], color: '#86b6de' },
  { id: 'chui', label: 'Чүй', ruLabel: 'Чуй', ky: 'Чүй району', ru: 'Чуйский район', center: { ky: 'Токмок шаары', ru: 'город Токмок' }, point: [488, 206], color: '#b5d8f5' },
  { id: 'kemin', label: 'Кемин', ky: 'Кемин району', ru: 'Кеминский район', center: { ky: 'Кемин шаары', ru: 'город Кемин' }, point: [665, 161], color: '#8abce8' },
];
const districtElements = new Map();
let selectedDistrict = 'chui';

for (const element of textNodes) {
  kyrgyz[element.dataset.t] = element.innerHTML.trim().replaceAll('<br>', '\n');
}
for (const { element, attribute, key } of attributeNodes) {
  kyrgyz[key] = element.getAttribute(attribute);
}

const sourcePaths = {
  online: '/plan?source=ustat',
  methods: '/materials/methods',
  twelve: '/materials/12-year',
};
const languageLinks = [...document.querySelectorAll('[data-source]')]
  .filter((element) => Object.hasOwn(sourcePaths, element.dataset.source));
const searchSections = [
  { key: 'mapTitle', href: '#districts', details: ['districtList', 'mapHelp'] },
  { key: 'courseTitle', href: '#courses', details: ['courses', 'courseLead'] },
  { key: 'regional', href: '#schedule', details: ['schedule', 'regionalBody'] },
  { key: 'onlineTitle', href: '#online', details: ['onlineCourses', 'onlineBody'] },
  { key: 'resourceTitle', href: '#materials', details: ['materials', 'resourceLead'] },
  { key: 'updatesTitle', href: '#updates', details: ['updates', 'news'] },
  { key: 'about', href: '#about', details: ['brandName', 'aboutBody'] },
  { key: 'contact', href: '#contact', details: ['contactSource', 'contactLead'] },
];
const linkDetails = {
  certificate: ['quickCertificate'],
  methods: ['methodsBody'],
  textbooks: ['textbooksBody'],
  twelve: ['twelveBody'],
  announcementTitle: ['announcementBody'],
  newsTitle: ['newsBody'],
};
const searchLinks = [...document.querySelectorAll('[data-search]')]
  .filter((element) => Object.hasOwn(linkDetails, element.dataset.search))
  .map((element) => ({ key: element.dataset.search, element, details: linkDetails[element.dataset.search] }));
const searchIndex = [...searchSections, ...searchLinks];
let language = 'ky';

function updateMenu(open) {
  nav.dataset.open = String(open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', translations[language][open ? 'menuClose' : 'menuOpen']);
  menuButton.querySelector('use').setAttribute('href', open ? '#i-close' : '#i-menu');
}

function applyLanguage(nextLanguage) {
  language = nextLanguage;
  const strings = translations[language];
  document.documentElement.lang = language;
  document.title = strings.brandName;
  document.querySelector('meta[name="description"]').content = `${strings.mapTitle}. ${strings.heroLead}`;

  for (const element of textNodes) {
    const lines = strings[element.dataset.t].split('\n');
    element.replaceChildren(lines[0]);
    for (const line of lines.slice(1)) element.append(document.createElement('br'), line);
  }
  for (const { element, attribute, key } of attributeNodes) {
    element.setAttribute(attribute, strings[key]);
  }
  for (const button of languageButtons) {
    button.setAttribute('aria-pressed', String(button.dataset.language === language));
  }
  for (const link of languageLinks) {
    link.href = `https://ripk.kg/${language}${sourcePaths[link.dataset.source]}`;
  }
  updateMenu(nav.dataset.open === 'true');
  updateDistrictMap();
  if (dialog.open) renderSearch();
}

function svgElement(tag, attributes) {
  const element = document.createElementNS('http://www.w3.org/2000/svg', tag);
  for (const [name, value] of Object.entries(attributes)) element.setAttribute(name, value);
  return element;
}

function buildDistrictMap() {
  const labels = [];
  for (const district of districts) {
    const button = document.createElement('button');
    button.type = 'button';
    button.dataset.district = district.id;
    districtOptions.append(button);

    const shape = svgElement('path', { class: 'map-shape', d: districtMapGeometry[district.id], 'fill-rule': 'evenodd', 'data-district': district.id });
    shape.style.setProperty('--district-fill', district.color);
    const [x, y] = district.point;
    const label = svgElement('text', { class: 'map-label', x, y, 'data-district': district.id });
    districtMap.append(shape);
    labels.push(label);
    districtElements.set(district.id, { shape, label, button });
  }
  districtMap.append(svgElement('path', { class: 'map-city', d: districtMapGeometry.tokmok, 'fill-rule': 'evenodd' }), ...labels);
}

function updateDistrictMap() {
  for (const district of districts) {
    const { shape, label, button } = districtElements.get(district.id);
    const selected = district.id === selectedDistrict;
    const shortName = language === 'ru' ? (district.ruLabel ?? district.label) : district.label;
    shape.classList.toggle('is-selected', selected);
    shape.setAttribute('aria-label', district[language]);
    label.classList.toggle('is-selected', selected);
    label.textContent = shortName;
    button.textContent = shortName;
    button.setAttribute('aria-label', district[language]);
    button.setAttribute('aria-pressed', String(selected));
    if (selected) {
      districtName.textContent = district[language];
      districtCenter.textContent = district.center[language];
    }
  }
}

function selectDistrict(id) {
  selectedDistrict = id;
  updateDistrictMap();
}

function normalize(text) {
  return text.toLowerCase().trim().replaceAll('ё', 'е');
}

function renderSearch() {
  const query = normalize(searchInput.value);
  const strings = translations[language];
  const matches = query ? searchIndex.filter(({ key, details }) => {
    const terms = [key, ...details].flatMap((term) => [kyrgyz[term], russian[term]]);
    const searchable = normalize(terms.join(' '));
    return query.split(/\s+/).every((part) => searchable.includes(part));
  }) : searchSections.slice(0, 4);
  const districtMatches = query ? districts.filter((district) => {
    const terms = normalize([district.ky, district.ru, district.center.ky, district.center.ru].join(' '));
    return query.split(/\s+/).every((part) => terms.includes(part));
  }) : [];
  const results = [
    ...districtMatches.map((district) => ({ text: district[language], href: '#districts', district: district.id })),
    ...matches.map(({ key, href, element }) => ({ text: strings[key], href: href ?? element.href })),
  ];

  searchStatus.textContent = results.length ? (query ? '' : strings.searchOptions) : strings.searchEmpty;
  searchResults.replaceChildren(...results.map(({ text, href, district }) => {
    const item = document.createElement('li');
    const link = document.createElement('a');
    link.href = href;
    link.textContent = text;
    if (district) link.dataset.district = district;
    item.append(link);
    return item;
  }));
}

const initialLanguage = new URL(location.href).searchParams.get('lang');
buildDistrictMap();
applyLanguage(initialLanguage === 'ru' ? 'ru' : 'ky');

for (const button of languageButtons) {
  button.addEventListener('click', () => {
    applyLanguage(button.dataset.language);
    const url = new URL(location.href);
    if (language === 'ru') url.searchParams.set('lang', language);
    else url.searchParams.delete('lang');
    history.replaceState(null, '', url);
  });
}

menuButton.addEventListener('click', () => updateMenu(nav.dataset.open !== 'true'));
nav.addEventListener('click', (event) => {
  if (event.target.closest('a')) updateMenu(false);
});
document.addEventListener('click', (event) => {
  if (nav.dataset.open === 'true' && !event.target.closest('.main-nav, .menu-toggle')) updateMenu(false);
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && nav.dataset.open === 'true') {
    updateMenu(false);
    menuButton.focus();
  }
});

document.querySelector('.search-open').addEventListener('click', () => {
  updateMenu(false);
  searchInput.value = '';
  renderSearch();
  dialog.showModal();
  searchInput.focus();
});
document.querySelector('.search-close').addEventListener('click', () => dialog.close());
searchInput.addEventListener('input', renderSearch);
searchResults.addEventListener('click', (event) => {
  const link = event.target.closest('a');
  if (!link) return;
  if (link.dataset.district) selectDistrict(link.dataset.district);
  dialog.close();
});

for (const control of [districtMap, districtOptions]) {
  control.addEventListener('click', (event) => {
    const district = event.target.closest('[data-district]');
    if (district) selectDistrict(district.dataset.district);
  });
}

const tabs = [...document.querySelectorAll('[role="tab"]')];
function selectTab(activeTab) {
  for (const tab of tabs) {
    const selected = tab === activeTab;
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
    document.getElementById(tab.getAttribute('aria-controls')).hidden = !selected;
  }
}

for (const tab of tabs) {
  tab.addEventListener('click', () => selectTab(tab));
  tab.addEventListener('keydown', (event) => {
    const lastIndex = tabs.length - 1;
    const currentIndex = tabs.indexOf(tab);
    const nextIndex = {
      ArrowLeft: (currentIndex + lastIndex) % tabs.length,
      ArrowRight: (currentIndex + 1) % tabs.length,
      Home: 0,
      End: lastIndex,
    }[event.key];
    if (nextIndex === undefined) return;
    event.preventDefault();
    selectTab(tabs[nextIndex]);
    tabs[nextIndex].focus();
  });
}
