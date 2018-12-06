const UnicodeString = require('./unicode-string')

const codesets = [
  {
    name: 'paren',
    flags: { paren: true, sansSerif: true },
    sets: [
      { code: 0x1f110, ref: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' },
      { code: 0x249c, ref: 'abcdefghijklmnopqrstuvwxyz' },
      { code: 0x2474, ref: '123456789' }
    ]
  },
  {
    name: 'square',
    flags: { square: true, sansSerif: true },
    sets: [
      { code: 0x1f130, ref: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' },
      { code: 0x1f130, ref: 'abcdefghijklmnopqrstuvwxyz' }
    ]
  },
  {
    name: 'dice',
    flags: { dice: true },
    sets: [
      { code: 0x2680, ref: '123456' }
    ]
  },
  {
    name: 'round',
    flags: { round: true, sansSerif: true },
    sets: [
      { code: 0x2460, ref: '123456789' },
      { code: 0x24ea, ref: '0' },
      { code: 0x24b6, ref: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' },
      { code: 0x24d0, ref: 'abcdefghijklmnopqrstuvwxyz' }
    ],
    '10': String.fromCodePoint(0x2469),
    '11': String.fromCodePoint(0x246a),
    '12': String.fromCodePoint(0x246b),
    '13': String.fromCodePoint(0x246c),
    '14': String.fromCodePoint(0x246d),
    '15': String.fromCodePoint(0x246e),
    '16': String.fromCodePoint(0x246f),
    '17': String.fromCodePoint(0x2470),
    '18': String.fromCodePoint(0x2471),
    '19': String.fromCodePoint(0x2472),
    '20': String.fromCodePoint(0x2473)
  },
  {
    name: 'recycling',
    flags: { recycling: true, sansSerif: true },
    sets: [
      { code: 0x2673, ref: '1234567' }
    ]
  },
  {
    name: 'negRound',
    flags: { round: true, negative: true, sansSerif: true },
    sets: [
      { code: 0x1f150, ref: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' },
      { code: 0x1f150, ref: 'abcdefghijklmnopqrstuvwxyz' },
      { code: 0x2776, ref: '123456789'},
      { code: 0x24ff, ref: '0' }
    ],
    '10': String.fromCodePoint(0x277f),
    '11': String.fromCodePoint(0x24eb),
    '12': String.fromCodePoint(0x24ec),
    '13': String.fromCodePoint(0x24ed),
    '14': String.fromCodePoint(0x24ee),
    '15': String.fromCodePoint(0x24ef),
    '16': String.fromCodePoint(0x24f0),
    '17': String.fromCodePoint(0x24f1),
    '18': String.fromCodePoint(0x24f2),
    '19': String.fromCodePoint(0x24f3),
    '20': String.fromCodePoint(0x24f4)
  },
  {
    name: 'negSquare',
    flags: { square: true, negative: true, sansSerif: true },
    sets: [
      { code: 0x1f170, ref: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' },
      { code: 0x1f170, ref: 'abcdefghijklmnopqrstuvwxyz' }
    ]
  },
  {
    name: 'indicator',
    flags: { indicator: true, sansSerif: true },
    sets: [
      { code: 0x1f1e6, ref: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' },
      { code: 0x1f1e6, ref: 'abcdefghijklmnopqrstuvwxyz' }
    ]
  },
  {
    name: 'doubleStruck',
    flags: { doubleStruck: true, sansSerif: false },
    sets: [
      { code: 0x1d538, ref: 'AB DEFG IJKLM O   STUVWXY ' },
      { code: 0x1d552, ref: 'abcdefghijklmnopqrstuvwxyz' },
      { code: 0x1d7d8, ref: '0123456789'},
      { code: 0x2102, ref: 'C' },
      { code: 0x210D, ref: 'H' },
      { code: 0x2115, ref: 'N' },
      { code: 0x2119, ref: 'P' },
      { code: 0x211A, ref: 'Q' },
      { code: 0x211D, ref: 'R' },
      { code: 0x2124, ref: 'Z' }
    ]
  },
  {
    name: 'fraktur',
    flags: { fraktur: true, sansSerif: false },
    sets: [
      { code: 0x1d56c, ref: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' },
      { code: 0x1d586, ref: 'abcdefghijklmnopqrstuvwxyz' }
    ]
  },
  {
    name: 'sansSerif',
    flags: { sansSerif: true },
    sets: [
      { code: 0x1d5a0, ref: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' },
      { code: 0x1d5ba, ref: 'abcdefghijklmnopqrstuvwxyz' },
      { code: 0x1d7e2, ref: '0123456789'}
    ]
  },
  {
    name: 'bold',
    flags: { bold: true, sansSerif: false },
    sets: [
      { code: 0x1d400, ref: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' },
      { code: 0x1d41a, ref: 'abcdefghijklmnopqrstuvwxyz' },
      { code: 0x1d7ce, ref: '0123456789' }
    ]
  },
  {
    name: 'sansSerifBold',
    flags: { sansSerif: true, bold: true },
    sets: [
      { code: 0x1d5d4, ref: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' },
      { code: 0x1d5ee, ref: 'abcdefghijklmnopqrstuvwxyz' },
      { code: 0x1d7ec, ref: '0123456789' }
    ]
  },
  {
    name: 'italic',
    flags: { italic: true, sansSerif: false },
    sets: [
      { code: 0x1d434, ref: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' },
      { code: 0x1d44e, ref: 'abcdefg ijklmnopqrstuvwxyz' },
      { code: 0x210e, ref: 'h' }
    ]
  },
  {
    name: 'sansSerifItalic',
    flags: { sansSerif: true, italic: true },
    sets: [
      { code: 0x1d608, ref: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' },
      { code: 0x1d622, ref: 'abcdefghijklmnopqrstuvwxyz' }
    ]
  },
  {
    name: 'boldItalic',
    flags: { bold: true, italic: true },
    sets: [
      { code: 0x1d468, ref: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' },
      { code: 0x1d482, ref: 'abcdefghijklmnopqrstuvwxyz' }
    ]
  },
  {
    name: 'sansSerifBoldItalic',
    flags: { bold: true, italic: true, sansSerif: true },
    sets: [
      { code: 0x1d63c, ref: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' },
      { code: 0x1d656, ref: 'abcdefghijklmnopqrstuvwxyz' }
    ]
  },
  {
    name: 'monospace',
    flags: { monospace: true },
    sets: [
      { code: 0x1d670, ref: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' },
      { code: 0x1d68a, ref: 'abcdefghijklmnopqrstuvwxyz' },
      { code: 0x1d7f6, ref: '0123456789' }
    ]
  },
  {
    name: 'script',
    flags: { script: true },
    sets: [
      { code: 0x1d49c, ref: 'A CD  G  JK  NOPQ STUVWXYZ' },
      { code: 0x1d4b6, ref: 'abcd f hijklmn pqrstuvwxyz' },
      { code: 0x210A, ref: 'gH    I Ll    P  R'},
      { code: 0x212c, ref: 'B  eEF Mo' }
    ]
  },
  {
    name: 'boldScript',
    flags: { bold: true, script: true },
    sets: [
      { code: 0x1d4d0, ref: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' },
      { code: 0x1d4ea, ref: 'abcdefghijklmnopqrstuvwxyz' }
    ]
  },
  {
    name: 'circles',
    flags: {},
    black: String.fromCodePoint(0x26ab),
    white: String.fromCodePoint(0x26aa),
    red: String.fromCodePoint(0x1f534),
    blue: String.fromCodePoint(0x1f535)
  }
]

const mod = { decodeSet: {}, decodeChar: {} }
codesets.forEach(cs => {
  codesets[cs.name] = cs

  if (cs.sets) {
    cs.sets.forEach(set => {
      set.ref.split('').forEach((char, i) => {
        if (char !== ' ') {
          cs[char] = String.fromCodePoint(set.code + i)
          mod.decodeSet[cs[char]] = cs
          mod.decodeChar[cs[char]] = char
        }
      })
    })
  }

  mod[cs.name] = str => convertAlpha(cs, str)
  const copy = Object.assign({}, cs)
  delete copy.name
  Object.assign(mod[cs.name], copy)
})

const convertAlpha = (codeset, string) => {
  if (typeof codeset === 'string' || typeof codeset === 'number') codeset = codesets[codeset]
  if (!codeset) return null
  const codes = []
  for (let i = 0; i < string.length; i++) {
    const char = string[i]
    if (char === ' ') {
      codes.push(32)
      continue
    }
    let found = false
    for (var c = 0; c < codeset.sets.length; c++) {
      const set = codeset.sets[c]
      const index = set.ref.indexOf(char)
      if (index !== -1) {
        codes.push(set.code + index)
        found = true
        break
      }
    }
    if (!found) codes.push(char.charCodeAt())
  }
  
  return String.fromCodePoint(...codes)
}

const decode = str => UnicodeString.toArray(str).map(c => mod.decodeChar[c] || c).join('')

const analyze = str => UnicodeString.toArray(str)
  .map(c => mod.decodeSet[c])
  .filter(c => c)
  .map(c => c.flags)
  .reduce((a, b) => Object.assign(a, b), {})

const findSetWith = (flags, implicitFlags) => codesets.find(cs => {
  if (!implicitFlags) implicitFlags = {}
  for (var key in flags) {
    if (!!cs.flags[key] !== !!flags[key]) return false
  }
  for (var key in cs.flags) {
    if (!!flags[key] !== !!cs.flags[key] && !!cs.flags[key] !== !!implicitFlags[key]) return false
  }
  if (implicitFlags) {
    for (var key in implicitFlags) {
      if (cs.flags.hasOwnProperty(key) && cs.flags[key] !== implicitFlags[key]) return false
    }
  }
  return true
})

const toggleFlag = (str, flag, implicitFlags) => {
  const implicitSet = findSetWith(implicitFlags)
  const existingFlags = analyze(str)
  const target = !existingFlags[flag]
  const onlyFlag = {}
  onlyFlag[flag] = target
  const chars = UnicodeString.toArray(str)
  const findSet = flags => {
    const set = findSetWith(flags, implicitFlags)
    if (set === implicitSet) return null
    return set
  }
  return chars.map(char => {
    const set = mod.decodeSet[char]
    const flags = set && Object.assign({}, set.flags) || {}
    flags[flag] = target
    const targetSet = findSet(flags) || findSet(onlyFlag)
    const plainChar = mod.decodeChar[char] || char
    return targetSet && targetSet[plainChar] || plainChar
  }).join('')
}

Object.assign(mod, {
  codesets,
  convertAlpha,
  decode,
  toggleFlag,
  findSetWith
})

if (typeof window !== 'undefined') window.unicoder = mod
module.exports = mod