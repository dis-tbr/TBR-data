const muteReasons = [ // ["Название правила", ВРЕМЯ]
    ["Вызов модерации без причины", 2700000],
    ["Флуд", 1800000],
    ["Капс", 1800000],
    ["Оффтоп", 1800000],
    ["Конфликт с участниками сервера", 3600000],
    ["Оскорбление участников сервера", 3600000],
    ["Реклама сторонних проектов", 10800000],
    ["Распространение вирусов", 86400000],
    ["Распространение файлов, содержащих материалы противного характера", 18000000],
    ["Провокация на нарушение", 10800000]
];

const spamSymbols = [
  '⣿', '⠿',  '⢋', '⣥', '⣴', '⣶', '⣬', '⣙', '⠻', '⠟', '⣋', '⣭',
  '⡙', '⡿',  '⢟', '⣛', '⢷', '⡹', '⣆', '⠹', '⢁', '⣾', '⠷', '⡍',
  '⠥', '⠱',  '⡶', '⠮', '⠤', '⣌', '⢿', '⢛', '⡁', '⡫', '⢕', '⣪',
  '⡭', '⢭',  '⣉', '⡂', '⡒', '⣤', '⡉', '⠩', '⣰', '⠂', '⡟', '⢠',
  '⣱', '⣏',  '⢲', '⠃', '⠄', '⠐', '⠈', '⠁', '⢸', '⡧', '⣇', '⣊',
  '⠙', '⠳',  '⠾', '⣟', '⠛', '⠍', '⣹', '⣢', '⣀', '⣠', '⡯', '⢉',
  '⣷', '⠶',  '⢒', '⣼', '⠉', '⡛', '⡈', '⠸', '⡻', '⣍', '⢇', '⡘',
  '⣝', '⠓',  '⠬', '⠭', '⠞', '⣡', '⣦', '⣈', '⣁', '⣮', '⣒', '⠠',
  '⢀', '⣄',  '⠋', '⢹', '⡇', '⢻', '⠏', '⠆', '⠰', '⠘', '⠴', '⠖',
  '⠀', '⠇',  '⣧', '⣩', '⣻', '⣅', '⡄', '⣸', '⡠', '⠢', '⡀', '⠔',
  '⠲', '⢰',  '⢢', '⡐', '⢨', '⣔', '⡓', '⢶', '⡏', '⡷', '⣯', '⢬',
  '⡤', '⣞',  '⣜', '⢱', '⡃', '⠨', '⠅', '⠚', '⠒', '⠑', '⡆', '⢩',
  '⢈', '⢤',  '⠺', '⣨', '⡗', '⡌', '⠽', '⣃', '⣘', '⣐', '⢺', '⢐',
  '⢘', '⠊',  '⠫', '⡑', '⡣', '⣽', '⢌', '⡜', '⡾', '⡼', '⢡', '⠌',
  '⡅', '⢧',  '⡴', '⢄', '⠦', '⣳', '⠵', '⢦', '⣺', '⢂', '⢥', '⡋',
  '⠜', '⠧',  '⢼', '⠯', '⠝', '⠼', '⢾', '⣫', '⢯', '⣣', '⡳', '⢆',
  '⢙', '⢏',  '⡎', '⣵', '⡽', '⢽', '⡝',
  '░', '▄', '█', '▓', '▒',  '─',  '▀', '▌', '▐'
].map((symbol) => symbol.repeat(7));

module.exports = {
    muteReasons,
    spamSymbols
}
