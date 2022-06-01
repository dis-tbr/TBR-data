const muteReasons = [ // ["Название правила", ВРЕМЯ]
    ["Общение на иностранном языке", 1800000],
    ["Вызов модерации без причины", 2700000],
    ["Спам, флуд, капс или оффтоп", 3600000],
    ["Оскорбление, унижение или злобный троллинг", 3600000],
    ["Реклама сторонних проектов", 10800000],
    ["Распространение файлов, содержащих материалы противного характера/шоковый контент, 18+", 36000000]
];

const spamSymbols = [
    "░",
    "█",
    "▄",
    "▀",
    "▐",
    "▌",
    "⣿",
    "⠄"
].map((symbol) => symbol.repeat(5));

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
]

module.exports = {
    muteReasons,
    spamSymbols
}
