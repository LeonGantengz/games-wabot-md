let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat Ooredoo [085608625102]
│ • Telkomsel [085608625102]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Dana [085608625102]
│ • Gopay [085608625102]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
