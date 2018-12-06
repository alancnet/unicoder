const codesets = [
  {
    name: 'paren',
    sets: [
      { code: 0x1f110, ref: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' },
      { code: 0x249c, ref: 'abcdefghijklmnopqrstuvwxyz' },
      { code: 0x2474, ref: '123456789' }
    ]
  },
  {
    name: 'whiteSquare',
    sets: [
      { code: 0x1f130, ref: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' },
      { code: 0x1f130, ref: 'abcdefghijklmnopqrstuvwxyz' }
    ]
  },
  {
    name: 'dice',
    sets: [
      { code: 0x2680, ref: '123456'}
    ]
  },
  {
    name: 'round',
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
    sets: [
      { code: 0x2673, ref: '1234567' }
    ]
  },
  {
    name: 'negRound',
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
    sets: [
      { code: 0x1f170, ref: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' },
      { code: 0x1f170, ref: 'abcdefghijklmnopqrstuvwxyz' }
    ]
  },
  {
    name: 'indicator',
    sets: [
      { code: 0x1f1e6, ref: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' },
      { code: 0x1f1e6, ref: 'abcdefghijklmnopqrstuvwxyz' }
    ]
  },
  {
    name: 'doubleStruck',
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
    sets: [
      { code: 0x1d56c, ref: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' },
      { code: 0x1d586, ref: 'abcdefghijklmnopqrstuvwxyz' }
    ]
  },
  {
    name: 'sansSerif',
    sets: [
      { code: 0x1d5a0, ref: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' },
      { code: 0x1d5ba, ref: 'abcdefghijklmnopqrstuvwxyz' },
      { code: 0x1d7e2, ref: '0123456789'}
    ]
  },
  {
    name: 'bold',
    sets: [
      { code: 0x1d400, ref: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' },
      { code: 0x1d41a, ref: 'abcdefghijklmnopqrstuvwxyz' },
      { code: 0x1d7ce, ref: '0123456789' }
    ]
  },
  {
    name: 'sansSerifBold',
    sets: [
      { code: 0x1d5d4, ref: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' },
      { code: 0x1d5ee, ref: 'abcdefghijklmnopqrstuvwxyz' },
      { code: 0x1d7ce, ref: '0123456789' }
    ]
  },
  {
    name: 'italic',
    sets: [
      { code: 0x1d434, ref: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' },
      { code: 0x1d622, ref: 'abcdefghijklmnopqrstuvwxyz' }
    ]
  },
  {
    name: 'sansSerifItalic',
    sets: [
      { code: 0x1d608, ref: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' },
      { code: 0x1d622, ref: 'abcdefghijklmnopqrstuvwxyz' }
    ]
  },
  {
    name: 'boldItalic',
    sets: [
      { code: 0x1d468, ref: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' },
      { code: 0x1d482, ref: 'abcdefghijklmnopqrstuvwxyz' }
    ]
  },
  {
    name: 'sansSerifBoldItalic',
    sets: [
      { code: 0x1d63c, ref: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' },
      { code: 0x1d656, ref: 'abcdefghijklmnopqrstuvwxyz' }
    ]
  },
  {
    name: 'monospace',
    sets: [
      { code: 0x1d670, ref: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' },
      { code: 0x1d68a, ref: 'abcdefghijklmnopqrstuvwxyz' },
      { code: 0x1d7f6, ref: '0123456789' }
    ]
  },
  {
    name: 'script',
    sets: [
      { code: 0x1d49c, ref: 'A CD  G  JK  NOPQ STUVWXYZ' },
      { code: 0x1d4b6, ref: 'abcd f hijklmn pqrstuvwxyz' }
    ]
  },
  {
    name: 'circles',
    black: String.fromCodePoint(0x26ab),
    white: String.fromCodePoint(0x26aa),
    red: String.fromCodePoint(0x1f534),
    blue: String.fromCodePoint(0x1f535)
  }
]
codesets.forEach(cs => {
  codesets[cs.name] = cs

  if (cs.sets) {
    cs.sets.forEach(set => {
      set.ref.split('').forEach((c, i) => {
        if (c !== ' ') {
          cs[c] = String.fromCodePoint(set.code + i)
        }
      })
    })
  }
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

module.exports = {
  codesets,
  convertAlpha
}