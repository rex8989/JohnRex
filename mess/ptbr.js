const fs = require('fs');

const infos = JSON.parse(fs.readFileSync('./banco/settings.json'))
const { prefix, ownerName, ownerNumber, cdd, ammOff, cr, crfig, crlv, crtt, crh } = infos
 
exports.stick = () => {
	return`❌Ocorreu um erro na criação de sticker❌`
}

exports.Lv = () => {
	return`❌Link inválido❌`
}

exports.group = () => {
	return`❌O comando só pode ser usado em grupos❌`
}

exports.ownerG = (ownerName) => {
	return`O comando só pode ser usado pelo ${ownerName}🕴`
}


exports.ownerB = (ownerName) => {
	return`O comando só pode ser usado pelo ${ownerName}🕴`
}

exports.admin = () => {
	return`❌O comando só pode ser usado por administradores do grupo❌`
}

exports.Badmin = () => {
	return`❌O comando só pode ser usado quando o bot é um administrador do grupo❌'`
}

exports.nsfw = () => {
	return`🚫funções NSFW desativadas nesse grupo🚫`
}

exports.erro = () => {
	return`❌ocorreu um erro❌\n\nTente novamente.`
}


