//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                        ZORD TEAMS V1                                                //
//                                                                                                      //
//                                         Ｖ：4.0                                                       //
//                                                                                                      //
//                                                                                                      //      
//               ██╗  ██╗██╗     ██╗ ██████╗ ██████╗ ███╗   ██╗      ██╗   ██╗██╗  ██╗                  //              
//                ██╗██╔╝██║     ██║██╔════╝██╔═══██╗████╗  ██║      ██║   ██║██║  ██║                  //
//                ╚███╔╝ ██║     ██║██║     ██║   ██║██╔██╗ ██║█████╗██║   ██║███████║                  // 
//                ██╔██╗ ██║     ██║██║     ██║   ██║██║╚██╗██║╚════╝╚██╗ ██╔╝╚════██║                  // 
//               ██╔╝ ██╗███████╗██║╚██████╗╚██████╔╝██║ ╚████║       ╚████╔╝      ██║                  //
//                ═╝  ╚═╝╚══════╝╚═╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝        ╚═══╝       ╚═╝                  // 
//                                                                                                      //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : ZORD_TEAMS-V1
//  * @author : ZORD TEAMS
//  * @youtube : https://www.youtube.com/@ethantanakah
//  * @description : ZORD_TEAMS-V1 ,A Multi-functional whatsapp user bot.
//*
//*
//base by ZORD TEAMS
//re-upload? recode? copy code? give credit ya :)
//Instagram: null
//Telegram: t.me/ZORD TEAMS
//GitHub: @kingzord263
//WhatsApp: +263718036108
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@kingzord263
//   * Created By Github: ZORD TEAMS
//   * Credit To ZORD TEAMS TECH
//   * © 2025 ZORD TEAMS
// ⛥┌┤
// */

const fs = require('fs');
const chalk = require('chalk');

//owmner v card
global.ytname = "YT: zordteams" //ur yt chanel name
global.socialm = "GitHub: kingzord263" //ur github or insta name
global.location = "Nigeria, Cross River, Calabar" //ur location

//new
global.botname = ' `THRI-IZ X DREAD`' //ur bot name
global.ownernumber = ['263718036108'] //ur owner number, dont add more than one
global.ownername = 'thri-iz-kidd' //ur owner name
global.websitex = "https://YouTube.com/@kingzord263"
global.wagc = "https://github.com/kingzord263/ZORD-TEAMS_V1"
global.themeemoji = '⛩'
global.wm = "Zord Teams Bot Inc."
global.botscript = 'https://github.com/kingzord263/ZORD-TEAMS_V1' //script link
global.packname = "ZORD TEAMS"
global.author = "MΛDΣ BY ZORD TEAMS TECH"
global.creator = "263718036108@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["263718036108"] // Premium User

//bot sett
global.typemenu = 'v2' // menu type 'v1' => 'v12'
global.typereply = 'v4' // reply type 'v1' => 'v4'
global.autoblocknumber = '233' //set autoblock country code
global.antiforeignnumber = '235' //set anti foreign number country code
global.antidelete = false //set anti delete 


global.listv = ['◼️','◽','♥️','♦️','♠️','♻️','🔱','🔰','🌐','Ⓜ️','🌀','🚹','⚧','❣️','❤‍🩹','🩵','🎀','💎','⭐','❄️','🫧']
global.tempatDB = 'database.json'



global.limit = {
	free: 100,
	premium: 999,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	error: 'Error!',
	nsfw: 'Nsfw is disabled in this group, Please tell the thri-iz-kidd to enable',
	done: 'Done'
}

global.bot = {
	limit: 0,
	uang: 0
}

global.game = {
	suit: {},
	menfes: {},
	tictactoe: {},
	kuismath: {},
	tebakbom: {},
}

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
