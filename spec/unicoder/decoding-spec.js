const substring = require('unicode-substring')
const { sansSerifItalic, italic, bold, sansSerifBold, boldItalic, sansSerifBoldItalic, doubleStruck, square, boldScript, script } = require('../../src/unicoder')


describe('sansSerifItalic', () => {
    it('should convert text to sansSerifItalic', () => {
        const a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789'
        const b = '𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡 𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻 0123456789'
        
        for (let c = 0; c < a.length; c++) {
            expect(sansSerifItalic(substring(a, c, c + 1))).toBe(substring(b, c, c + 1))
        }

        expect(sansSerifItalic(a)).toBe(b)
    })
})

describe('italic', () => {
    it('should convert text to italic', () => {
        const a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789'
        const b = '𝐴𝐵𝐶𝐷𝐸𝐹𝐺𝐻𝐼𝐽𝐾𝐿𝑀𝑁𝑂𝑃𝑄𝑅𝑆𝑇𝑈𝑉𝑊𝑋𝑌𝑍 𝑎𝑏𝑐𝑑𝑒𝑓𝑔ℎ𝑖𝑗𝑘𝑙𝑚𝑛𝑜𝑝𝑞𝑟𝑠𝑡𝑢𝑣𝑤𝑥𝑦𝑧 0123456789'
        
        for (let c = 0; c < a.length; c++) {
            expect(italic(substring(a, c, c + 1))).toBe(substring(b, c, c + 1))
        }

        expect(italic(a)).toBe(b)
    })
})

describe('sansSerifBold', () => {
    it('should convert text to sansSerifBold', () => {
        const a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789'
        const b = '𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭 𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇 𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵'
        
        for (let c = 0; c < a.length; c++) {
            expect(sansSerifBold(substring(a, c, c + 1))).toBe(substring(b, c, c + 1))
        }

        expect(sansSerifBold(a)).toBe(b)
    })
})

describe('bold', () => {
    it('should convert text to bold', () => {
        const a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789'
        const b = '𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙 𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳 𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗'
        
        for (let c = 0; c < a.length; c++) {
            expect(bold(substring(a, c, c + 1))).toBe(substring(b, c, c + 1))
        }

        expect(bold(a)).toBe(b)
    })
})

describe('sansSerifBoldItalic', () => {
    it('should convert text to sansSerifBoldItalic', () => {
        const a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789'
        const b = '𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕 𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯 0123456789'
        
        for (let c = 0; c < a.length; c++) {
            expect(sansSerifBoldItalic(substring(a, c, c + 1))).toBe(substring(b, c, c + 1))
        }

        expect(sansSerifBoldItalic(a)).toBe(b)
    })
})

describe('boldItalic', () => {
    it('should convert text to boldItalic', () => {
        const a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789'
        const b = '𝑨𝑩𝑪𝑫𝑬𝑭𝑮𝑯𝑰𝑱𝑲𝑳𝑴𝑵𝑶𝑷𝑸𝑹𝑺𝑻𝑼𝑽𝑾𝑿𝒀𝒁 𝒂𝒃𝒄𝒅𝒆𝒇𝒈𝒉𝒊𝒋𝒌𝒍𝒎𝒏𝒐𝒑𝒒𝒓𝒔𝒕𝒖𝒗𝒘𝒙𝒚𝒛 0123456789'
        
        for (let c = 0; c < a.length; c++) {
            expect(boldItalic(substring(a, c, c + 1))).toBe(substring(b, c, c + 1))
        }

        expect(boldItalic(a)).toBe(b)
    })
})

describe('boldScript', () => {
    it('should convert text to boldScript', () => {
        const a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789'
        const b = '𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩 𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃 0123456789'
        
        for (let c = 0; c < a.length; c++) {
            expect(boldScript(substring(a, c, c + 1))).toBe(substring(b, c, c + 1))
        }

        expect(boldScript(a)).toBe(b)
    })
})

describe('script', () => {
    it('should convert text to script', () => {
        const a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789'
        const b = '𝒜ℬ𝒞𝒟ℰℱ𝒢ℋℐ𝒥𝒦ℒℳ𝒩𝒪𝒫𝒬ℛ𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵 𝒶𝒷𝒸𝒹ℯ𝒻ℊ𝒽𝒾𝒿𝓀𝓁𝓂𝓃ℴ𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏 0123456789'
        
        for (let c = 0; c < a.length; c++) {
            expect(script(substring(a, c, c + 1))).toBe(substring(b, c, c + 1))
        }

        expect(script(a)).toBe(b)
    })
})

describe('doubleStruck', () => {
    it('should convert text to doubleStruck', () => {
        const a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789'
        const b = '𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ 𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫 𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡'
        
        for (let c = 0; c < a.length; c++) {
            expect(doubleStruck(substring(a, c, c + 1))).toBe(substring(b, c, c + 1))
        }

        expect(doubleStruck(a)).toBe(b)
    })
})

describe('square', () => {
    it('should convert text to square', () => {
        const a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789'
        const b = '🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉 🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉 0123456789'
        
        for (let c = 0; c < a.length; c++) {
            expect(square(substring(a, c, c + 1))).toBe(substring(b, c, c + 1))
        }

        expect(square(a)).toBe(b)
    })
})