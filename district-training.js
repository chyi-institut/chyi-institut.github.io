// Planned places summed from the individual district course rows in the official 2026–2027 plan.
// The plan combines Chuy district and Tokmok in its last district column.
const districtTraining = {
  districtOrder: ['alamudun', 'sokuluk', 'panfilov', 'ysyk-ata', 'moscow', 'jaiyl', 'kemin', 'chui'],
  subjects: [
    { id: 'kyrgyz', ky: 'Кыргыз тили жана адабияты', ru: 'Кыргызский язык и литература', planned: [33, 43, 22, 37, 22, 33, 41, 33] },
    { id: 'russian', ky: 'Орус тили жана адабияты', ru: 'Русский язык и литература', planned: [30, 40, 20, 40, 20, 30, 30, 30] },
    { id: 'english', ky: 'Англис тили', ru: 'Английский язык', planned: [24, 32, 16, 28, 16, 24, 28, 24] },
    { id: 'math', ky: 'Математика', ru: 'Математика', planned: [24, 31, 16, 29, 16, 24, 28, 24] },
    { id: 'computer-science', ky: 'Информатика', ru: 'Информатика', planned: [18, 23, 12, 23, 12, 18, 20, 18] },
    { id: 'physics', ky: 'Физика', ru: 'Физика', planned: [9, 11, 6, 12, 6, 9, 10, 9] },
    { id: 'chemistry', ky: 'Химия', ru: 'Химия', planned: [9, 12, 6, 12, 6, 9, 9, 9] },
    { id: 'biology', ky: 'Биология', ru: 'Биология', planned: [12, 16, 8, 16, 8, 12, 12, 12] },
    { id: 'geography', ky: 'География', ru: 'География', planned: [15, 19, 10, 18, 10, 15, 18, 15] },
    { id: 'history', ky: 'Тарых', ru: 'История', planned: [12, 14, 8, 15, 8, 13, 14, 12] },
    { id: 'religion', ky: 'Диндердин өнүгүү тарыхы', ru: 'История развития религий', planned: [12, 16, 8, 12, 8, 12, 16, 12] },
    { id: 'society', ky: 'Адам жана коом', ru: 'Человек и общество', planned: [9, 11, 6, 10, 6, 10, 11, 9] },
    { id: 'arts', ky: 'Көркөм өнөр жана технология', ru: 'Изобразительное искусство и технология', planned: [6, 7, 4, 6, 4, 8, 7, 6] },
    { id: 'music', ky: 'Музыка', ru: 'Музыка', planned: [6, 6, 4, 6, 4, 8, 8, 6] },
    { id: 'pe', ky: 'Дене тарбия', ru: 'Физическая культура', planned: [13, 13, 8, 14, 8, 13, 15, 12] },
    { id: 'pre-military', ky: 'Аскерге чейинки даярдоо', ru: 'Допризывная подготовка', planned: [12, 13, 8, 14, 8, 14, 15, 12] },
    { id: 'primary', ky: 'Башталгыч класстарынын мугалимдери', ru: 'Учителя начальных классов', planned: [30, 39, 20, 38, 20, 30, 33, 30] },
    { id: 'preschool', ky: 'Бала бакча тарбиячылары', ru: 'Воспитатели детских садов', planned: [30, 33, 20, 40, 20, 30, 37, 30] },
    { id: 'inclusion', ky: 'Инклюзивдик билим берүү', ru: 'Инклюзивное образование', planned: [9, 9, 6, 10, 6, 11, 12, 9] },
    { id: 'libraries', ky: 'Китепкана башчылары', ru: 'Заведующие библиотеками', planned: [6, 7, 4, 7, 4, 7, 7, 6] },
  ],
  // Confirmed district reports use { total, subjects: { [subjectId]: count } }.
  // Use the reported count of distinct teachers for total, since a teacher can complete several courses.
  // Omit unknown counts; use zero only when the report confirms it.
  completedByDistrict: {},
};
