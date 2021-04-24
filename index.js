const {
    WAConnection,
    WA_MESSAGE_STUB_TYPES,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const { help } = require('./src/help')
const imageToBase64 = require('image-to-base64')
const FormData = require('form-data')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const fs = require('fs')
const crypto = require('crypto')
const moment = require('moment-timezone')
const { exec } = require('child_process')
const fetch = require('node-fetch')
const tiktod = require('tiktok-scraper')
const { fromBuffer } = require('file-type')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const lolis = require('lolis.life')
const loli = new lolis()
const toMs = require('ms')
const ms = require('parse-ms')
const nsfwjs = require('nsfwjs')
const imgbb = require('imgbb-uploader')
const request = require('request')
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
const setting = JSON.parse(fs.readFileSync('./src/settings.json'))
const ncheck = JSON.parse(fs.readFileSync('./ncheck.json'))
const autosticker = JSON.parse(fs.readFileSync('./autosticker.json'))
const { custom, random } = require('./meme')
const { ind } = require('./language')
const {  owner } = JSON.parse(fs.readFileSync('./config.json'))
const ApiDevolover = ('PunyaIkyAds')
const { virtex } = require('./src/virtex')
const { virtex2 } = require('./src/virtex2')
const speed = require('performance-now')
/*********** LOAD FILE ***********/
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const ikan = JSON.parse(fs.readFileSync('./database/user/ikan.json'))
const planet = JSON.parse(fs.readFileSync('./database/user/planet.json'))
const _registered = JSON.parse(fs.readFileSync('./database/bot/registered.json'))
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const event = JSON.parse(fs.readFileSync('./database/bot/event.json'))
const akinator = JSON.parse(fs.readFileSync('./database/user/akinator.json'))
const antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
const antifirtex = JSON.parse(fs.readFileSync('./database/group/antifirtex.json'))
const bad = JSON.parse(fs.readFileSync('./database/group/bad.json'))
const premium = JSON.parse(fs.readFileSync('./database/user/premium.json'))
const _afk = JSON.parse(fs.readFileSync('./database/group/afk.json'))
const badword = JSON.parse(fs.readFileSync('./database/group/badword.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const audionye = JSON.parse(fs.readFileSync('./src/audio.json'))
const tebakgambar = JSON.parse(fs.readFileSync('./database/user/tebakgambar.json'))
prefix = '/'
limitawal = '15' 
blocked = []
memberlimit = '5'
/********** FUNCTION ***************/
const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }
	
	//FUNCTION sleep
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}
//end of sleep
//function afk
const addAfkUser = (userid, time, reason) => {
    const obj = { id: userid, time: time, reason: reason }
    	_afk.push(obj)
    	fs.writeFileSync('./database/user/afk.json', JSON.stringify(_afk))
	}

const checkAfkUser = (sender) => {
    let status = false
    Object.keys(_afk).forEach((i) => {
        if (_afk[i].id === sender) {
            status = i
        }
    })
    return status
}

const getAfkReason = (sender) => {
    let position = null
    Object.keys(_afk).forEach((i) => {
        if (_afk[i].id === sender) {
            position = i
        }
    })
    if (position !== null) {
        return _afk[position].reason
    }
}

const getAfkTime = (sender) => {
    let position = null
    Object.keys(_afk).forEach((i) => {
        if (_afk[i].id === sender) {
            position = i
        }
    })
    if (position !== null) {
        return _afk[position].time
    }
}

const getAfkId = (sender) => {
    let position = null
    Object.keys(_afk).forEach((i) => {
        if (_afk[i].id === sender) {
            position = i
        }
    })
    if (position !== null) {
        return _afk[position].id
    }
}

const getAfkPosition = (sender) => {
    let position = null
    Object.keys(_afk).forEach((i) => {
        if (_afk[i].id === sender) {
            position = i
        }
    })
    return position
}
	//END OF AFK FUNCTION
        
	//MANCING FUNCTION BY TAUFIK - KUN
        const addIkan = (sender, amount) => {
        let position = false
        Object.keys(ikan).forEach((i) => {
    	    if (ikan[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	ikan[position].fish += amount
    	fs.writeFileSync('./database/user/ikan.json', JSON.stringify(ikan))
    	}
    }
    
    const getMancingIkan = (sender) => {
    let position = false 
    Object.keys(ikan).forEach((i) => {
	if (ikan[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ikan[position].fish
	}
}

    const getMancingId = (sender) => {
    let position = false
    Object.keys(ikan).forEach((i) => {
	if (ikan[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ikan[position].id
    }
}
    
    const addMancingId = (sender) => {
        const ovj = {id: sender, fish: 0}
        ikan.push(ovj)
        fs.writeFileSync('./database/user/ikan.json', JSON.stringify(ikan))
        }
    
    const jualIkan = (sender, amount) => {
        	let position = false
            Object.keys(ikan).forEach((i) => {
                if (ikan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                ikan[position].fish -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
    		//END OF MANCING FUNCTION

//PLANET GOO FUNCTION BY RIFAI
        const addPlanet = (sender, amount) => {
        let position = false
        Object.keys(planet).forEach((i) => {
    	    if (planet[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	planet[position].hape += amount
    	fs.writeFileSync('./database/user/planet.json', JSON.stringify(planet))
    	}
    }
    
    const getBertualangPlanet = (sender) => {
    let position = false 
    Object.keys(planet).forEach((i) => {
	if (planet[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return planet[position].hape
	}
}

    const getPlaneId = (sender) => {
    let position = false
    Object.keys(planet).forEach((i) => {
	if (planet[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return planet[position].id
    }
}
    
    const addPlaneId = (sender) => {
        const ovj = {id: sender, hape: 0}
        planet.push(ovj)
        fs.writeFileSync('./database/user/planet.json', JSON.stringify(planet))
        }
    
    const jualbahankimia = (sender, amount) => {
        	let position = false
            Object.keys(planet).forEach((i) => {
                if (planet[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                planet[position].hape -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
    		//AKHIRNYA SELESEI NI GO PLANET (◡ ω ◡)
        
        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
        }
        
       
        const getLimit = (sender) => {
        	let position = false
              Object.keys(limit).forEach ((i) => {
              	if (limit[position].id === sender) {
              	   position = i
                  }
              })
             if (position !== false) {
                return limit[position].limit
            }
        }
             
         const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
        
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const checkAgeUser = (sender) => {
    	    let position = false
    	    Object.keys(_registered).forEach((i) => {
    	    if (_registered[i].id === sender) {
    	    position = i
    	    }
    	})
    	    if (position !== false) {
    	    return _registered[position].age
    	    }
    	}
    	
    	const checkWhenRegisUser = (sender) => {
    	    let position = false
    	    Object.keys(_registered).forEach((i) => {
    	    if (_registered[i].id === sender) {
    	    position = i
    	    }
    	})
    	    if (position !== false) {
    	    return _registered[position].time
    	    }
    	}
    	
    	const brpLimit = (sender) => {
    	    let position = false
    	    Object.keys(_limit).forEach((i) => {
    	    if (_limit[i].id === sender) {
    	    position = i
    	    }
    	})
    	    if (position !== false) {
    		let lemot = limitawal - _limit[position].limit
    	    return lemot
    	    }
    	}
        
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
            const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
	    
	   //BUAT FUNCTIONNYA
	const getAllPremiumUser = () => {
		const array = []
		Object.keys(premium).forEach((i) => {
		array.push(premium[i].id)
		})
		return array
		}
const getPremiumExpired = (sender) => {
		let position = null
		Object.keys(premium).forEach((i) => {
		if (premium[i].id === sender) {
		position = i 
		}
	})
		if (position !== null) {
		return premium[position].expired 
	}
} 
const expiredCheck = () => {
		setInterval(() => {
		let position = null
		Object.keys(premium).forEach((i) => {
		if (Date.now() >= premium[i].expired) {
		position = i 
		}
	}
)
		if (position !== null) {
		console.log(`Premium expired: ${premium[position].id}`)
		premium.splice(position, 1)
		fs.writeFileSync('./database/user/premium.json', JSON.stringify(premium)) 
		}
	}, 1000)
}

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}

async function starts() {
	const client = new WAConnection()
	client.logger.level = 'warn'
	console.log(banner.string)
	client.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code above'))
	})

	fs.existsSync('./BarBar.json') && client.loadAuthInfo('./BarBar.json')
	client.on('connecting', () => {
		start('2', 'Connecting...')
	})
	client.on('open', () => {
		success('2', 'Connected')
	})
	await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./BarBar.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))

	client.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
try {
			const medata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Halo @${num.split('@')[0]}\nSelamat datang di group *${medata.subject} anak kentod,nambah beban grup*`
				let buff = await getBuffer(ppimg)
				client.sendMessage(medata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				 try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Sayonara @${num.split('@')[0]}👋,beban grup berkurang,di group ${medata.subject},titip gorengannya ya? :v`
				let buff = await getBuffer(ppimg)
				client.sendMessage(medata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})

	client.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
	client.on('CB:action,,call', async json => {
	const callerId = json[2][0][1].from;
	await client.sendMessage(callerId, 'Maaf bof tidak bisa menerima panggilan', text)
	await client.blockUser(callerId, "add")
	})
	client.on('CB:action,,battery', json => {
                    const batteryLevelStr = json[2][0][1].value
                    const batterylevel = parseInt(batteryLevelStr)
                    console.log('Woy Batre Tinggal ' + batterylevel+  ' Stop Ajg')
                    if (batterylevel == '70'){
                    console.log('Lu yakin mo lanjutin ngebot?')
                    }
                    })
	client.on('message-update', async (hurtz) => {
	try {
		const from = hurtz.key.remoteJid
		const messageStubType = WA_MESSAGE_STUB_TYPES[hurtz.messageStubType] || 'MESSAGE'
		const dataRevoke = JSON.parse(fs.readFileSync('./lib/gc-revoked.json'))
		const dataCtRevoke = JSON.parse(fs.readFileSync('./lib/ct-revoked.json'))
		const dataBanCtRevoke = JSON.parse(fs.readFileSync('./lib/ct-revoked-banlist.json'))
		const sender = hurtz.key.fromMe ? client.user.jid : hurtz.key.remoteJid.endsWith('@g.us') ? hurtz.participant : hurtz.key.remoteJid
		const isRevoke = hurtz.key.remoteJid.endsWith('@s.whatsapp.net') ? true : hurtz.key.remoteJid.endsWith('@g.us') ? dataRevoke.includes(from) : false
		const isCtRevoke = hurtz.key.remoteJid.endsWith('@g.us') ? true : dataCtRevoke.data ? false : true
		const isBanCtRevoke = hurtz.key.remoteJid.endsWith('@g.us') ? true : !dataBanCtRevoke.includes(sender) ? false : true
        var numbernye = '0'
		if (messageStubType == 'REVOKE') {
			console.log(`Status untuk grup : ${!isRevoke}\nStatus semua kontak : ${!isCtRevoke}\nStatus kontak dikecualikan : ${!isBanCtRevoke}`)
			if (!isRevoke) return
			if (!isCtRevoke) return
			if (!isBanCtRevoke) return
			const from = hurtz.key.remoteJid
			const isGroup = hurtz.key.remoteJid.endsWith('@g.us') ? true : false
			let int
			let infoMSG = JSON.parse(fs.readFileSync('./lib/msg.data.json'))
			const id_deleted = hurtz.key.id
		    const conts = hurtz.key.fromMe ? client.user.jid : client.contacts[sender] || { notify: jid.replace(/@.+/, '') }
			const pushname = hurtz.key.fromMe ? client.user.name : conts.notify || conts.vname || conts.name || '-'
			const opt4tag = {
				contextInfo: { mentionedJid: [sender] }
			}
			for (let i = 0; i < infoMSG.length; i++) {
				if (infoMSG[i].key.id == id_deleted) {
					const dataInfo = infoMSG[i]
					const type = Object.keys(infoMSG[i].message)[0]
					const timestamp = infoMSG[i].messageTimestamp
					int = {
						no: i,
						type: type,
						timestamp: timestamp,
						data: dataInfo
					}
				}
			}
			const index = Number(int.no)
			const body = int.type == 'conversation' ? infoMSG[index].message.conversation : int.type == 'extendedTextMessage' ? infoMSG[index].message.extendedTextMessage.text : int.type == 'imageMessage' ? infoMSG[index].message.imageMessage.caption : int.type == 'stickerMessage' ? 'Sticker' : int.type == 'audioMessage' ? 'Audio' : int.type == 'videoMessage' ? infoMSG[index].videoMessage : int.type == 'documentMessage' ? infoMSG[index].documentMessage : infoMSG[index]
			const mediaData = int.type === 'extendedTextMessage' ? JSON.parse(JSON.stringify(int.data).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : int.data
			var itsme = `${numbernye}@s.whatsapp.net`
			fake = '0'
				var split = `Hayolo`
				// var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
				var selepbot72 = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
			if (int.type == 'conversation' || int.type == 'extendedTextMessage') {
				const strConversation = `
\`\`\`\ 「 Anti Delete Chat 」\`\`\`\
===========================

 *❥ @${sender.split("@")[0]} Menghapus Pesan*
 *❥ Pada : ${moment.unix(int.timestamp).format('HH:mm:ss')} WIB | ${moment.unix(int.timestamp).format('DD/MM/YYYY')}*
 *❥ Pesan : ${body ? body : '-'}*


       「 RIPAI Bot Antidelete 」`
				client.sendMessage(from, strConversation, MessageType.text, { contextInfo: {"mentionedJid": [sender] }})
				console.log(`================\n${pushname} menghapus pesan\n❥ Pesan : ${body ? body : '-'}\n================`)
			} else if (int.type == 'stickerMessage') {
				var itsme = `${numbernye}@s.whatsapp.net`
					var split = `*HAYO DELETE APAAN*`
					const pingbro23 = {
						contextInfo: {
							participant: itsme,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await client.downloadAndSaveMediaMessage(int.data, `./media/sticker/${filename}`);
				const strConversation = `                
 \`\`\`\ 「 Anti Delete 」\`\`\`\
========================

*❥ @${sender.split("@")[0]} Menghapus Sticker*
*❥ Pada : ${moment.unix(int.timestamp).format('HH:mm:ss')} WIB | ${moment.unix(int.timestamp).format('DD/MM/YYYY')}*

「  RIPAI Bot Antidelete  」`

				const buff = fs.readFileSync(savedFilename)
				client.sendMessage(from, strConversation, MessageType.text, { contextInfo: {"mentionedJid": [sender] }})
				client.sendMessage(from, buff, MessageType.sticker, pingbro23)
				// console.log(stdout)
				fs.unlinkSync(savedFilename)

			} else if (int.type == 'imageMessage') {
				var itsme = `${numbernye}@s.whatsapp.net`
					var split = `mpos ketauan`
					const pingbro22 = {
						contextInfo: {
							participant: itsme,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await client.downloadAndSaveMediaMessage(int.data, `./media/revoke/${filename}`);
				const buff = fs.readFileSync(savedFilename)
				const strConversation = `	  
\`\`\`\ 「 Anti Delete 」\`\`\`\
========================

*❥ @${sender.split("@")[0]} Menghapus gambar*
*❥ Pada : ${moment.unix(int.timestamp).format('HH:mm:ss')} WIB | ${moment.unix(int.timestamp).format('DD/MM/YYYY')}*
*❥ Pesan : ${body ? body : '-'}*

           「 RIPAI  Bot Antidelete 」`
				client.sendMessage(from, buff, MessageType.image, { contextInfo: {"mentionedJid": [sender] }, caption: strConversation })
				fs.unlinkSync(savedFilename)

} else if (int.type == 'audioMessage') {
				var itsme = `${numbernye}@s.whatsapp.net`
					var split = `yahahha ketauan`
					const pingbro22 = {
						contextInfo: {
							participant: itsme,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await client.downloadAndSaveMediaMessage(int.data, `./media/revoke/${filename}`);
				const buff = fs.readFileSync(savedFilename)
				const strConversation = `	 「 *ANTI-DELETE* 」

 *Antidelete Mendeteksi ${pushname} Delete Audio* 
             
             [ *RIPAIBot* By *RIFAI&RADYA* ]`
   client.sendMessage(from, strConversation, MessageType.text, {contextInfo: { forwardingScore: 1000, isForwarded: true }})
				client.sendMessage(from, buff, MessageType.audio, pingbro22)
				fs.unlinkSync(savedFilename)
				
				} else if (int.type == 'documentMessage') {
				var itsme = `${numbernye}@s.whatsapp.net`
					var split = `yahahha ketauan`
					const pingbro22 = {
						contextInfo: {
							participant: itsme,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await client.downloadAndSaveMediaMessage(int.data, `./media/revoke/${filename}`);
				const buff = fs.readFileSync(savedFilename)
				const strConversation = `	 「 *ANTI-DELETE* 」

 *Antidelete Mendeteksi ${pushname} Delete Document* 
             
             [ *RIPAIBot* By *RIFAI&Radya* ]`
   client.sendMessage(from, strConversation, MessageType.text, {contextInfo: { forwardingScore: 1000, isForwarded: true }})
				client.sendMessage(from, buff, MessageType.document, { mimetype: Mimetype.pdf })
				fs.unlinkSync(savedFilename)
				
				} else if (int.type == 'videoMessage') {
				var itsme = `${pushname}@s.whatsapp.net`
					var split = `yahahhaha`
					const pingbro22 = {
						contextInfo: {
							participant: itsme,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await client.downloadAndSaveMediaMessage(int.data, `./media/revoke/${filename}`);
				const buff = fs.readFileSync(savedFilename)
				const strConversation = `	 「 *ANTI-DELETE* 」

- *Nama :* *${pushname}* 

- *Nomer :* ${sender.replace('@s.whatsapp.net', '')}

- *Tipe :* Video

- *Waktu :* *${moment.unix(int.timestamp).format('HH:mm:ss')}*

- *Tanggal :* *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*

              [ *RIPAIBot* By *RIFAI&Radya* ]`
				client.sendMessage(from, buff, MessageType.video, { contextInfo: { forwardingScore: 1000, isForwarded: true }, caption: strConversation })
				fs.unlinkSync(savedFilename)
			}
		}
	} catch (e) {
		console.log('Message : %s', color(e, 'green'))
		// console.log(e)
	}
})

	client.on('chat-update', async (mek) => {
		try {
			selfnya = false
			const isSelf = selfnya||false
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		    if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			let infoMSG = JSON.parse(fs.readFileSync('./lib/msg.data.json'))
		infoMSG.push(JSON.parse(JSON.stringify(mek)))
		fs.writeFileSync('./lib/msg.data.json', JSON.stringify(infoMSG, null, 2))
		const urutan_pesan = infoMSG.length
		if (urutan_pesan === 5000) {
			infoMSG.splice(0, 4300)
			fs.writeFileSync('./lib/msg.data.json', JSON.stringify(infoMSG, null, 2))
		    }
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const lolhuman = client
            const lol = mek
            const apikeyl = 'SELFikyBOT'
            const apikey = 'SELFikyBOT'
            const ZeksApi = 'apivinz'
            const ApiDevolover = 'PunyaIkyAds'
			const apiKey = 'barbarapih' // contact me on whatsapp wa.me/6285892766102
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const chat = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const conts = mek.key.fromMe ? client.user.jid : client.contacts[sender] || { notify: jid.replace(/@.+/, '') }
			pushname = mek.key.fromMe ? client.user.name : conts.notify || conts.vname || conts.name || '-'
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const q = args.join(' ')
             const usedCommandRecently = new Set()
             const Exif = require(process.cwd() + '/exif.js')
            var exif = new Exif()

/**
 * Check is number filtered
 * @param  {String} from
 */
const isFiltered = (from) => !!usedCommandRecently.has(from)

/**
 * Add number to filter
 * @param  {String} from
 */
const addFilter = (from) => {
    usedCommandRecently.add(from)
    setTimeout(() => usedCommandRecently.delete(from), 5000) // 5sec is delay before processing next command
}
			mess = {
				wait: '⌛ Sedang di Prosess ⌛',
				success: '✔️ Berhasil ✔️',
				error: {
					stick: '❌ Gagal, terjadi kesalahan saat mengkonversi gambar ke sticker ❌',
					Iv: '❌ Link tidak valid ❌'
				},
				only: {
					group: '❌ Perintah ini hanya bisa di gunakan dalam group! ❌',
					ownerG: '❌ Perintah ini hanya bisa di gunakan oleh owner group! ❌',
					ownerB: '❌ Perintah ini hanya bisa di gunakan oleh owner bot! ❌',
					admin: '❌ Perintah ini hanya bisa di gunakan oleh admin group! ❌',
					premium: 'KAMU BUKAN USER PREMIUM,BELI SINI/n ni list=/n 10k=1 bulan /n25k=5bulan',
					Badmin: '❌ Perintah ini hanya bisa di gunakan ketika bot menjadi admin! ❌'
				}
			}

			const botNumber = client.user.jid
			const ownerNumber = ['62856438334741@s.whatsapp.net'] // replace this with your number
            const ownerNumber2 = ['6282147334265@s.whatsapp.net']
			
			
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
            const isCheck = isGroup ? ncheck.includes(from) : false
            const isAuto = isGroup ? autosticker.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isOwner2 = ownerNumber2.includes(sender)
			const isBot = botNumber.includes(sender)
			const isEventon = isGroup ? event.includes(from) : false
            const isRegistered = checkRegisteredUser(sender)
            const isPrem = premium.includes(sender) || isOwner 
const isAfkOn = checkAfkUser(sender)

const isLevelingOn = isGroup ? _leveling.includes(from) : false
const isAntiLink = isGroup ? antilink.includes(from) : false
			const isBadWord = isGroup ? badword.includes(from) : false
                        const isAntiFirtex= isGroup ? antifirtex.includes(from) : false
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}

			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (isCmd && isFiltered(from) && !isGroupMsg) { return console.log(color('[SPAM]', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname)) }
            if (isCmd && isFiltered(from) && isGroupMsg) { return console.log(color('[SPAM]', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(name || formattedTitle)) }
        // AKTIFKAN APABILA TIDAK INGIN TERKENA SPAM!!
            addFilter(from)
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			let authorname = client.contacts[from] != undefined ? client.contacts[from].vname || client.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	
			      //function leveling
            if (isGroup && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel))
                }
            } catch (err) {
                console.error(err)
            }
        }
       
			
			//FUNCTION PREMIUM RESPONDER
			expiredCheck()
			var premi = '*NOT PREMIUM*'
			if (isPrem) {
			premi = '*YES PREMIUM*'
			} 
			if (isOwner) {
			premi = '*UNLIMITED PREMIUM*'
			}
        
        // Akinator
            // Premium / VIP apikey only
            if (akinator.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                var answer_array = ["0", "1", "2", "3", "4", "5"]
                if (!answer_array.includes(budy)) return reply("Beri jawaban antara 0, 1, 2, 3, 4, 5")
                var { server, frontaddr, session, signature, question, step } = akinator[sender.split('@')[0]]
                if (step == "0" && budy == "5") return reply("Maaf Anda telah mencapai pertanyaan pertama")
                var ini_url = `http://api.lolhuman.xyz/api/akinator/answer?apikey=${apikey}&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=${signature}&answer=${budy}&step=${step}`
                var get_result = await fetchJson(ini_url)
                var get_result = get_result.result
                if (get_result.hasOwnProperty("name")) {
                    var ini_name = get_result.name
                    var description = get_result.description
                    var ini_image = get_result.image
                    var ini_image = await getBuffer(ini_image)
                    ini_txt = `${ini_name} - ${description}\n\n`
                    ini_txt += "Sekian dan terima kasih"
                    client.sendMessage(from, ini_image, image, { quoted: lol, caption: ini_txt }).then(() => {
                        delete akinator[sender.split('@')[0]]
                        fs.writeFileSync("./database/akinator.json", JSON.stringify(akinator))
                    })
                    return
                }
                var { question, _, step } = get_result
                ini_txt = `${question}\n\n`
                ini_txt += "0 - Ya\n"
                ini_txt += "1 - Tidak\n"
                ini_txt += "2 - Saya Tidak Tau\n"
                ini_txt += "3 - Mungkin\n"
                ini_txt += "4 - Mungkin Tidak\n"
                ini_txt += "5 - Kembali ke Pertanyaan Sebelumnya"
                if (budy == "5") {
                    var ini_url = `http://api.lolhuman.xyz/api/akinator/back?apikey=${apikey}&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=${signature}&answer=${budy}&step=${step}`
                    var get_result = await fetchJson(ini_url)
                    var get_result = get_result.result
                    var { question, _, step } = get_result
                    ini_txt = `${question}\n\n`
                    ini_txt += "0 - Ya\n"
                    ini_txt += "1 - Tidak\n"
                    ini_txt += "2 - Saya Tidak Tau\n"
                    ini_txt += "3 - Mungkin\n"
                    ini_txt += "4 - Mungkin Tidak"
                    ini_txt += "5 - Kembali ke Pertanyaan Sebelumnya"
                }
                client.sendMessage(from, ini_txt, text, { quoted: lol }).then(() => {
                    const data_ = akinator[sender.split('@')[0]]
                    data_["question"] = question
                    data_["step"] = step
                    akinator[sender.split('@')[0]] = data_
                    fs.writeFileSync("./database/akinator.json", JSON.stringify(akinator))
                })
            }
        
        //FUCNTION MANCING BY TAUFIK - KUN
        if (isGroup && isEventon) {
        const Fisha = getMancingIkan(sender)
        const FishId = getMancingId(sender)
        if (Fisha === undefined && FishId === undefined) addMancingId(sender)
        }
	//FUCNTION GOPLANET BY RIPAI
        if (isGroup && isEventon) {
        const Hapea = getBertualangPlanet(sender)
        const HapeId = getPlaneId(sender)
        if (Hapea === undefined && HapeId === undefined) addPlaneId(sender)
        }
	
	const mentionUser = type == "extendedTextMessage" ? mek.message.extendedTextMessage.contextInfo.mentionedJid || [] : []
            mentionByReply = type == "extendedTextMessage" ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
            mentionUser.push(mentionByReply)
            // Tebak Gambar by ryz
            if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    reply("Mantap kamu berhasil menjawab dengan tepat\nSelamat 🎉🎉🎉😁")
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/user/tebakgambar.json", JSON.stringify(tebakgambar))
                } else {
                    reply("Gagal coba lagi!")
                }
            }
	
	//AFK NGULI

             if (isGroup) {
            mentioneddd = mek.message[Object.keys(mek.message)[0]].contextInfo ? mek.message[Object.keys(mek.message)[0]].contextInfo.mentionedJid : []
            for (let ment of mentioneddd) {
                if (checkAfkUser(ment)) {
                    const getId = getAfkId(ment)
                    const getReason = getAfkReason(getId)
                    const getTime = getAfkTime(getId)
                    reply(ind.afkMentioned(getReason, getTime))
                }
            }
                }
            
            if (checkAfkUser(sender)) {
                _afk.splice(getAfkPosition(sender.id, _afk), 1)
                fs.writeFileSync('./database/user/afk.json', JSON.stringify(_afk))
                	client.sendMessage(from, ind.afkDone(pushname), text)
            }
            
        
        
          //function check limit
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return client.sendMessage(from,`Limit request anda sudah habis\n\n_Note : Limit akan direset setiap jam 21:00!_`, text,{ quoted: mek})
                            client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 1 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
                        client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				}
	         
			//funtion limited
           const isLimit = (sender) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    client.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 1 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
           return false
       }
     }
     	if (isGroup) {
				try {
					const getmemex = groupMembers.length
					    if (getmemex <= memberlimit) {
                            client.groupLeave(from)
					    }
		       } catch (err) { console.error(err)  }
        }
        
      
            //function balance
            if (isRegistered && isGroup ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
//function antilink
		if (budy.match("://chat.whatsapp.com/")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
		client.updatePresence(from, Presence.composing)
		if (messagesC.match("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Link Group Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 10detik lagi`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 10000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
		}, 9000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
		}, 8000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
		}, 7000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
		}, 6000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
		}, 5000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
		}, 4000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
		}, 3000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
		}, 2000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
		}, 0)
	}
		//function antivirtext
        if (messagesC.includes(`${command}৭${command}`) || budy.match(`${command}๑${command}`) || budy.match('๒') || budy.match('৭') || budy.match('ดุ') || budy.match(`${command}ท้่เึ${command}`) || budy.match('างื') || budy.match('ผิ') || budy.match('ดุ') || budy.match('ท้่เึ') || budy.match('างื') || budy.match('ดุท้่เึางืผิดุท้่เึางื') || budy.match('https://instagram.com/nay_mabox')){
		if (!isGroup) return
		if (!isAntiFirtex) return
		if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`virtex Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 10detik lagi. Mamposs lu ajg.`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 10000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
		}, 9000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
		}, 8000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
		}, 7000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
		}, 6000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
		}, 5000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
		}, 4000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
		}, 3000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
		}, 2000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
		}, 1000)
		setTimeout( () => {
			reply('kamu mengirim virtex')
		}, 0)
	}
		//FUNCTION ANTIBADWORD
		if (bad.includes(budy)) {
		if (!isGroup) return
		if (!isBadWord) return
		if (isGroupAdmins) return reply(`*${pushname}* Jan macem macem lu mentang admin`)
		client.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply(`*Anak Harem....*`)
		}, 11000)
		setTimeout( () => {
		client.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10000)
		setTimeout( () => {
		reply(`*_「」_*\nᴍᴀᴀғ *${pushname}* ᴀɴᴅᴀ ʙᴇʀʙɪᴄᴀʀᴀ ᴋᴏᴛᴏʀ!, ᴀɴᴅᴀ ꜱᴇɢᴇʀᴀ ᴅɪᴋɪᴄᴋ ᴅᴀʀɪ ɢʀᴜᴘ *${groupMetadata.subject}*`)
		}, 0)
		}
			function addMetadata(packname, author) {	
				if (!packname) packname = 'WABot'; if (!author) author = 'Bot';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
					return `./src/stickers/${name}.exif`	
				})	

			}
			async function faketoko(teks, url_image, title, code, price) {
                var punya_wa = "0@s.whatsapp.net"
                var buffer = await getBuffer(url_image)
                const ini_cstoko = {
                    contextInfo: {
                        participant: punya_wa,
                        remoteJid: 'status@broadcast',
                        quotedMessage: {
                            productMessage: {
                                product: {
                                    currencyCode: code,
                                    title: title,
                                    priceAmount1000: price,
                                    productImageCount: 1,
                                    productImage: {
                                        jpegThumbnail: buffer
                                    }
                                },
                                businessOwnerJid: "0@s.whatsapp.net"
                            }
                        }
                    }
                }
                client.sendMessage(from, teks, text, ini_cstoko)
            }
            async function sendFileFormUrl (url_file, type, name) {
            const sendFileNya = await getBuffer(url_file)
            client.sendMessage(from, sendFileNya, type, { filename: name.mp3, quoted: mek})
            }
            const uploadImages = (buffData, fileName) => {
    return new Promise(async (resolve, reject) => {
        const { ext } = await fromBuffer(buffData)
        const filePath = `${fileName}.${ext}`
        fs.writeFile(filePath, buffData, { encoding: 'base64' }, (err) => {
            if (err) reject(err)
            console.log('Sedang upload ke telegraph sabar owner-sama')
            const fileData = fs.readFileSync(filePath)
            const form = new FormData()
            form.append('file', fileData, `${fileName}.${ext}`)
            fetch('https://telegra.ph/upload', {
                method: 'POST',
                body: form
            })
                .then((response) => response.json())
                .then((result) => {
                    if (result.error) reject(result.error)
                    resolve('https://telegra.ph' + result[0].src)
                })
                .then(() => fs.unlinkSync(filePath))
                .catch((err) => reject(err))
        })
    })
}
const custom = async (imageUrl, top, bottom) => new Promise((resolve, reject) => {
    topText = top.trim().replace(/\s/g, '_').replace(/\?/g, '~q').replace(/\%/g, '~p').replace(/\#/g, '~h').replace(/\//g, '~s')
    bottomText = bottom.trim().replace(/\s/g, '_').replace(/\?/g, '~q').replace(/\%/g, '~p').replace(/\#/g, '~h').replace(/\//g, '~s')
    getBuffer(`https://api.memegen.link/images/custom/${topText}/${bottomText}.png?background=${imageUrl}`)
        .then((result) => resolve(result))
        .catch((err) => {
            console.error(err)
            reject(err)
        })
})
			switch(command) {
				case 'help':
				case 'menu':
					//client.sendMessage(from, help(prefix), text,  { contextInfo: { forwardingScore: 1000, isForwarded: true }})
					//buff = await getBuffer(`https://i.ibb.co/VY38GN2/Screenshot-2021-03-19-14-26-49-57.jpg`)
					try {
        orgnya = await client.getProfilePicture(`${sender.split('@')[0]}@c.us`)
		buff = await getBuffer(orgnya)
		} catch {
		ppimg = 'https://i.ibb.co/VY38GN2/Screenshot-2021-03-19-14-26-49-57.jpg'
	    }
	
 
                    uptime = process.uptime()
	textnya = `[  *Menu Bot RIPAI*  ]
	*Hallow*
	*Bot On Selama ${kyun(uptime)}*
	*Waktu ${time}*
	*Berikut Ini Menu RIPAIBot Silakan Pakai*
	*Jangan Spam Ya :D*
	*THX TO RADYA AJISA,ALLAH SWT,LOLHUMAN,DLL*
	===========================
⇗ *${prefix}sticker (reply gambar)*
⇗ *${prefix}antidelete aktif/mati*
⇗ *${prefix}ncheck (1 / 0)*
⇗ *${prefix}autosticker (1 / 0)*
⇗ *${prefix}fakedeface link | text | desk*
⇗ *${prefix}kusonimesearch query*
⇗ *${prefix}otakudesusearch query*
⇗ *${prefix}spotify link*
⇗ *${prefix}spotifysearch query*
⇗ *${prefix}nekopoi link nekopoi*
⇗ *${prefix}tiktokstalk name akun*
⇗ *${prefix}tiktok link*
⇗ *${prefix}xnxx query*
⇗ *${prefix}nhentaipdf code*
⇗ *${prefix}tebakgambar*
⇗ *${prefix}tebakkata*
⇗ *${prefix}caklontong*
⇗ *${prefix}family100*
⇗ *${prefix}img2url (reply image)*
⇗ *${prefix}semoji emoji*
⇗ *${prefix}tiktoknowm link*
⇗ *${prefix}telesticker link*
⇗ *${prefix}igdl link*
⇗ *${prefix}fbdl link*
⇗ *${prefix}drakorongoing*
⇗ *${prefix}lk21 query*
⇗ *${prefix}xnxxsearch query*
⇗ *${prefix}togif (reply sticker bergerak)*
⇗ *${prefix}meme (lelucon indo)*
⇗ *${prefix}darkjoke (lelucon gelap :V)*
⇗ *${prefix}character karakter anime*
⇗ *${prefix}addtext text | text (reply gambar)*
⇗ *${prefix}nulis nama&kelas&kata*
⇗ *${prefix}ytsearch query*
⇗ *${prefix}getmusic id*
⇗ *${prefix}giftlimit*
⇗ *${prefix}suit*
⇗ *${prefix}mancing*
⇗ *${prefix}event 1 / 0*
⇗ *${prefix}afk reason*
⇗ *${prefix}antivirtex 1 / 0*
⇗ *${prefix}antibadword on / off*
⇗ *${prefix}antilinkgroup 1 / 0*
⇗ *${prefix}leveling enable / disable*
⇗ *${prefix}level (liat level)*
⇗ *${prefix}mining*
⇗ *${prefix}jualikan (jumblah)*
⇗ *${prefix}transfer @|jumblah*
⇗ *${prefix}imagesearch query*
⇗ *${prefix}searchsticker query*
⇗ *${prefix}playvn query*
⇗ *${prefix}playmp3 query*
⇗ *${prefix}mp3 link yt*
⇗ *${prefix}mp3vn link yt*
• *${prefix}kisahnabi (nama nabi)*
• *${prefix}brainly (soal)*
• *${prefix}playstore (nama game,contoh=gameburik)*
• *${prefix}google (query)*
• *${prefix}spamsms (nomor)*
• *${prefix}shortlink (link)*
• *${prefix}ssweb2*
• *${prefix}ssweb*
• *${prefix}takestick (reply sticker)*
• *${prefix}translate (kode negara) (kata)*
• *${prefix}wikipedia (kata)*
• *${prefix}ytmp4 (kata)*
• *${prefix}ytmp42 (kata)*
• *${prefix}telesticker*
• *${prefix}pinterest (kata)*
• *${prefix}pinterestdl (link)*
• *${prefix}listadmins*
• *${prefix}listonline*
• *${prefix}dompet (liat uank)*
• *${prefix}bisakah (kata)*
• *${prefix}apakah (kata)*
• *${prefix}watak (kata)*
• *${prefix}babi*
• *${prefix}kapankah (kata)
• *${prefix}tampar*
• *${prefix}gantengcek (tag)*
• *${prefix}cantikcek (tag)*
• *${prefix}katailham*
• *${prefix}slap*
• *${prefix}ikanku (lihat ikan)*
• *${prefix}tss (kode bahasa) (kata)*
• *${prefix}bass (tag sound)*
• *${prefix}slow (tag sound)*
• *${prefix}roundsticker*
• *${prefix}halah*
=====================
* KHUSUS ADMIN GRUP*
• *${prefix}kick (tag/nomor)*
• *${prefix}add (nomor)*
• *${prefix}demote(remove admin)*
• *${prefix}promote (tambah admin)*
• *${prefix}tagall (tagall1 sampai tagall4)*
• *${prefix}grup (tutup/buka)*
• *${prefix}setnamegc (nama baru grup)*
• *${prefix}setdescgc (deksripsi baru)*
• *${prefix}kicktime (kick dengan waktu)*
=====================
* KHUSUS OWNER*
• *${prefix}Broadcast/${prefix}bc*
=====================
*MUTUAL MENU*
• *${prefix}mutual*
• *${prefix}next*
*INFO=khusus chat pribadi bot bvambvangs*
======================
*PERFORMANCE OF BOT*
• *${prefix}ping*
• *${prefix}speed*
• *${prefix}check*
======================
*SPAM MENU*
• *${prefix}spamsms*
• *${prefix}spamcall*
======================
*MINIGAMES MENU*
* >MANCING*
• *${prefix}mancing*
• *${prefix}jualikan (jumlah)*
• *${prefix}ikanku
* >MINING*
• *${prefix}mining*
* >GO PLANET GOO*
• *${prefix}goplanet*
• *${prefix}jualbahankimia*
• *${prefix}sisabahankimia*
*>TRUTH AND DARE*
• *${prefix}truth*
• *${prefix}dare*
*> AKINATOR*
• *${prefix}akinator*
• *${prefix}cancelakinator*
======================
*SOUND MENU*
• *${prefix}Numa*
• *${prefix}Bot ato bot*
• *${prefix}listvn*
• *${prefix}addvn*
• *${prefix}getvn*
=======================
*${prefix}neko*
*${prefix}waifu*
*${prefix}loli*
*${prefix}chiisaihentai*
*${prefix}trap*
*${prefix}blowjob*
*${prefix}yaoi*
*${prefix}ecchi*
*${prefix}hentai*
*${prefix}ahegao*
*${prefix}hololewd*
*${prefix}sideoppai*
*${prefix}animefeets*
*${prefix}animebooty*
*${prefix}animethighss*
*${prefix}hentaiparadise*
*${prefix}animearmpits*
*${prefix}hentaifemdom*
*${prefix}lewdanimegirls*
*${prefix}biganimetiddies*
*${prefix}animebellybutton*
*${prefix}hentai4everyone*
================
*Contoh ${prefix}neon textnya , ${prefix}advanceglow textnya*

\`\`\` - Text Pro Me
  ⤷ ${prefix}blackpink
  ⤷ ${prefix}neon
  ⤷ ${prefix}greenneon
  ⤷ ${prefix}advanceglow
  ⤷ ${prefix}futureneon
  ⤷ ${prefix}sandwriting
  ⤷ ${prefix}sandsummer
  ⤷ ${prefix}sandengraved
  ⤷ ${prefix}metaldark
  ⤷ ${prefix}neonlight
  ⤷ ${prefix}holographic
  ⤷ ${prefix}ext1917
  ⤷ ${prefix}minion
  ⤷ ${prefix}dluxesilver
  ⤷ ${prefix}newyearcard
  ⤷ ${prefix}bloodrosted
  ⤷ ${prefix}halloween
  ⤷ ${prefix}jokerlogo
  ⤷ ${prefix}fireworksparkle
  ⤷ ${prefix}natureleaves
  ⤷ ${prefix}bokeh
  ⤷ ${prefix}toxic
  ⤷ ${prefix}strawberry
  ⤷ ${prefix}box3D
  ⤷ ${prefix}boadwarning
  ⤷ ${prefix}breakwall
  ⤷ ${prefix}ucecold
  ⤷ ${prefix}luxury
  ⤷ ${prefix}cloud
  ⤷ ${prefix}summersand
  ⤷ ${prefix}horrorblood
  ⤷ ${prefix}thunder
  ⤷ ${prefix}pornhub
  ⤷ ${prefix}glitch
  ⤷ ${prefix}avenger
  ⤷ ${prefix}space
  ⤷ ${prefix}ninjalogo
  ⤷ ${prefix}marvelstudio
  ⤷ ${prefix}lionlogo
  ⤷ ${prefix}wolflogo
  ⤷ ${prefix}steel3D
  ⤷ ${prefix}wallgravity
=============
  ⤷ ${prefix}shadow
  ⤷ ${prefix}cup
  ⤷ ${prefix}cup2
  ⤷ ${prefix}romance
  ⤷ ${prefix}smoke
  ⤷ ${prefix}burnpaper
  ⤷ ${prefix}lovemessage
  ⤷ ${prefix}undergrass
  ⤷ ${prefix}love
  ⤷ ${prefix}coffe
  ⤷ ${prefix}woodheart
  ⤷ ${prefix}woodenboard
  ⤷ ${prefix}summer3D
  ⤷ ${prefix}wolfmetal
  ⤷ ${prefix}nature3D
  ⤷ ${prefix}underwater
  ⤷ ${prefix}goldenrose
  ⤷ ${prefix}summernature
  ⤷ ${prefix}letterleaves
  ⤷ ${prefix}glowingneon
  ⤷ ${prefix}fallleaves
  ⤷ ${prefix}flamming
  ⤷ ${prefix}harrypotter
  ⤷ ${prefix}carvedwood
  ⤷ ${prefix}tiktok
  ⤷ ${prefix}arcade8bit
  ⤷ ${prefix}battlefield4
  ⤷ ${prefix}pubg
  ⤷ ${prefix}bannerlol
============
  ⤷ ${prefix}wetglass
  ⤷ ${prefix}multicolor3D
  ⤷ ${prefix}watercolor		
  ⤷ ${prefix}luxurygold
  ⤷ ${prefix}galaxywallpaper
  ⤷ ${prefix}lighttext
  ⤷ ${prefix}beautifulflower
  ⤷ ${prefix}puppycute
  ⤷ ${prefix}royaltext
  ⤷ ${prefix}heartshaped
  ⤷ ${prefix}birthdaycake
  ⤷ ${prefix}galaxystyle
  ⤷ ${prefix}hologram3D
  ⤷ ${prefix}greenneon
  ⤷ ${prefix}glossychrome
  ⤷ ${prefix}greenbush
  ⤷ ${prefix}metallogo
  ⤷ ${prefix}noeltext
  ⤷ ${prefix}glittergold
  ⤷ ${prefix}textcake
  ⤷ ${prefix}starsnight
  ⤷ ${prefix}wooden3D
  ⤷ ${prefix}textbyname
  ⤷ ${prefix}writegalaxy
  ⤷ ${prefix}galaxybat
  ⤷ ${prefix}snow3D
  ⤷ ${prefix}birthdayday
  ⤷ ${prefix}goldplaybutton
  ⤷ ${prefix}silverplaybutton
  ⤷ ${prefix}freefire \`\`\`
===========
MAKER MENU
||||||||||||||||||||||||||
\`\`\`${prefix}anakharam
${prefix}heker
${prefix}hartatahta
${prefix}fftourserti
${prefix}fftourserti2
${prefix}fftourserti3
${prefix}fftourserti4
${prefix}fftourserti5
${prefix}ttp
${prefix}ttp2
${prefix}ttp3
${prefix}ttp4
${prefix}attp
\`\`\`
`
					client.sendMessage(from, buff, image, { contextInfo: { forwardingScore: 1000, isForwarded: true }, quoted: mek, caption: textnya })
					client.chatRead(from)
					break
				case 'info':
					me = client.user
					uptime = process.uptime()
					teks = `*Nama bot* : ${me.name}\n*Nomor Bot* : @${me.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*Total Block Contact* : ${blocked.length}\n*The bot is active on* : ${kyun(uptime)}`
					buffer = await getBuffer(me.imgUrl)
					client.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
                case 'owner':
                client.chatRead(from)
                reply('wa.me/62856438334741')
                reply('kalo kaka macem macem aku bacok 🗡️😗')
                break
				case 'blocklist':
					teks = 'This is list of blocked number :\n'
					for (let block of blocked) {
						teks += `~> @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
                    case 'simi':
                query = args.join(" ")
                anu = await fetchJson //(`http://api.lolhuman.xyz/api/simi?apikey={apikey}&text=${query}`)
                reply(anu.result)
                break
case 'del':
		            case 'd':
		            case 'delete':
					client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					await limitAdd(sender)
					break
				case 'ocr':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('Foto aja mas')
					}
					break
				case 'tp':
					if (args.length < 1) {
						return reply('Pilih themenya om, 1 - 162')
					} else if (args[0].toLowerCase() === 'list') {
						teks = await fetchText('https://mhankbarbar.moe/api/textpro/listtheme')
						teks = teks.replace(/<br>/g, '\n')
						return reply(teks)
					} else if (args.length < 2) {
						return reply('Teksnya juga dong om')
					}
					reply(mess.wait)
					anu = `https://mhankbarbar.moe/api/textpro?pack=${args[0]}&text=${body.slice(3+args[0].length+1)}&apiKey=barbarapih`
					voss = await fetch(anu)	
					ftype = require('file-type')	
					vuss = await ftype.fromStream(voss.body)
					if (vuss !== undefined) {
						client.sendMessage(from, await getBuffer(anu), image, { caption: mess.success, quoted: mek })
					} else {
						reply('Terjadi kesalahan, silahkan pilih theme lain')
					}
					break
                reply('mengoke')
                break
case 'check':
const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = client.user.phone
               
reply(`Versi Whatsapp : ${wa_version}
RAM : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
MCC : ${mcc}
MNC : ${mnc}
Versi OS : ${os_version}
Merk HP : ${device_manufacturer}
Versi HP : ${device_model}`)
break
case 'spekhp':
	            query = args.join(" ")
                    get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/gsmarena?apikey=chotomate09&query=${query}`)
                    get_result = get_result.result
                    txt = `Nama : ${get_result.device_manufacturer}\n`
                    txt += `Network : ${get_result.specification.network.net2g} -  ${get_result.specification.network.net3g} -  ${get_result.specification.network.net4g} -  ${get_result.specification.network.net5g}\n`
                    txt += `Body : ${get_result.body.dimensions} - ${get_result.body.weight} - ${get_result.body.build} - ${get_result.body.sim} - ${get_result.body.bodyother}\n`
                    txt += `Display : ${get_result.display.displaytype} - ${get_result.display.displaysize} - ${get_result.display.displayresolution}\n`
                    txt += `PlatFrom : ${get_result.platform.os} - ${get_result.platform.chipset} - ${get_result.platform.cpu} - ${get_result.platform.gpu}\n`
                    txt += `Memo : ${get_result.memory.memoryslot} - ${get_result.memory.internalmemory} - ${get_result.memory.memoryother}\n`
                    txt += `Camera : ${get_result.maincamera.cam1modules} - ${get_result.maincamera.cam1features}\n`
                    txt += `Selfie : ${get_result.selfiecamera.cam2modules} -  ${get_result.selfiecamera.cam2features} - ${get_result.selfiecamera.cam2video}\n`
                    txt += `Sound : ${get_result.sound.optionalother}\n`
                    txt += `Cosms : ${get_result.comms.bluetooth} - ${get_result.comms.gps} - ${get_result.comms.nfc} - ${get_result.comms.radio} - ${get_result.comms.usb}\n`
                    txt += `Features : ${get_result.features.sensors}\n`
                    txt += `Batre rambut : ${get_result.battery.batdescription1}\n`
                    txt += `Misc : ${get_result.misc.colors} - ${get_result.misc.models} - ${get_result.misc.price} - ${get_result.misc.tests} - ${get_result.misc.tbench} - ${get_result.misc.batlife}`
                    buffer = await getBuffer(get_result.phone_image)
                    client.sendMessage(from, buffer, image, { quoted: lol, caption: txt })
                    break
				case 'ep':
					if (args.length < 1) {
						return reply('as')
					} else if (args[0].toLowerCase() === 'list') {
						teks = await fetchText('https://mhankbarbar.moe/api/ephoto/listtheme')
						teks = teks.replace(/<br>/g, '\n')
						return reply(teks)
					} else if (args.length < 2) {
						return reply('Teksnya juga dong om')
					}
					reply(mess.wait)
					anu = `https://mhankbarbar.moe/api/ephoto?pack=${args[0]}&text=${body.slice(3+args[0].length+1)}&apiKey=barbarapih`
					voss = await fetch(anu)
					ftype = require('file-type')
					vuss = await ftype.fromStream(voss.body)
					//console.log(vuss)
					if (vuss !== undefined) {
						client.sendMessage(from, await getBuffer(anu), image, { caption: mess.success, quoted: mek })
					} else {
						reply('Terjadi kesalahan, silahkan pilih theme lain')
					}
					break
				case 'tahta':
					if (args.length < 1) return reply('Teksnya om')
					anu = `https://mhankbarbar.tech/api/htahta?text=${args.join(' ')}&apiKey=barbarapih`
					voss = await fetch(anu)
					ftype = require('file-type')
					vuss = await ftype.fromStream(voss.body)
					if (vuss !== undefined) {
						client.sendMessage(from, await getBuffer(anu), image, { quoted: mek, caption: mess.sucess })
					} else {
						reply('Terjadi kesalahan')
					}
					break
case 'broadcast':
                    if (sender.split("@")[0] != isOwner) return reply("Command only for owner bot")
                    list_chat = await lolhuman.chats.all()
                    ini_text = args.join(" ")
                    for (let chat of list_chat) {
                        sendMess(chat.jid, ini_text)
                    }
                    break
case 'pinterest':
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${apikey}&query=${query}`)
                    ini_url = ini_url.result
                    ini_buffer = await getBuffer(ini_url)
                    lolhuman.sendMessage(from, ini_buffer, image, { quoted: lol })
                    break
                case 'pinterestdl':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://id.pinterest.com/pin/696580267364426905/`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterestdl?apikey=${apikey}&url=${ini_url}`)
                    ini_url = ini_url.result[0]
                    ini_buffer = await getBuffer(ini_url)
                    lolhuman.sendMessage(from, ini_buffer, image, { quoted: lol })
                    break
case 'hidetag':
                    if (sender.split("@")[0] != owner) return reply("Command only for owner bot")
                    var value = args.join(" ")
                    var group = await lolhuman.groupMetadata(from)
                    var member = group['participants']
                    var mem = []
                    member.map(async adm => {
                        mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                    })
                    var options = {
                        text: value,
                        contextInfo: { mentionedJid: mem },
                        quoted: lol
                    }
                    lolhuman.sendMessage(from, options, text)
                    break
case 'ytmp4':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (args.length < 1) return reply('Urlnya mana um?')
                if (!isUrl(args[0]) && !args[0].includes('youtu')) return reply(ind.stikga())
                anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/ytmp4?url=${args[0]}`, { method: 'get' })
                if (anu.error) return reply(anu.error)
                teks = `*Title* : ${anu.title}\n*Size* : ${anu.filesize}`
                thumb = await getBuffer(anu.thumb)
                client.sendMessage(from, thumb, image, { quoted: mek, caption: teks })
                buffer = await getBuffer(anu.result)
                client.sendMessage(from, buffer, video, { mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek })
                await limitAdd(sender)
                break
                case 'ytmp42':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytvideo2?apikey=${apikey}&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `${get_result.title} - ${get_result.size}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    lolhuman.sendMessage(from, ini_buffer, image, { quoted: lol, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link)
                    lolhuman.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: lol })
                    break
                case 'telesticker':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/telestick?apikey=${apikey}&url=${ini_url}`)
                    ini_sticker = ini_url.result.sticker
                    for (sticker_ in ini_sticker) {
                        ini_buffer = await getBuffer(ini_sticker[sticker_])
                        lolhuman.sendMessage(from, ini_buffer, sticker)
                    }
                    break
case 'mutual':
                   
				 
				 
                if (isGroup) return  reply( 'TIDAK BISA DI GRUP KAK')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Mencari Pasangan >_<')
                await reply(`wa.me/${anug}`)
                await reply( `Pasangan Ditemukan: 🐊\n*${prefix}next* — Temukan Pasangan Baru`)
            client.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
            case 'next':
                   
				 
				 
                if (isGroup) return  reply( 'TIDAK BISA DI GRUP KAK')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Mencari Pasangan >_<')
                await reply(`wa.me/${anug}`)
                await reply( `Pasangan Ditemukan: 🐊\n*${prefix}next* — Temukan Pasangan Baru`)
                client.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
case 'kisahnabi':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.name}\n`
                    ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
                    ini_txt += `Umur : ${get_result.age}\n`
                    ini_txt += `Tempat : ${get_result.place}\n`
                    ini_txt += `Story : \n${get_result.story}`
                    reply(ini_txt)
                    break
case 'google': // Update NEW FITUR				
				if (args.length < 1) return reply(`textnya mana om?`)
				ct = body.slice(14)
				ll1 = ct.split("|")[0];
                ll2 = ct.split("|")[1];
				ll3 = ct.split("|")[2];
				reply(`[❕] Sedang di proses.........`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker?text=${ll1}&text2=${ll2}&text3=${ll3}&theme=google-suggestion&apikey=${ApiDevolover}`)
				buffer = await getBuffer(anu.result.url)
				client.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
				client.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
case 'truth':
                 
                 
				 
					const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					client.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
					client.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
                case 'dare':
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll','harus bilang i love you ama rifai ni no wa nya wa.me/62856438334741 dan harus ngewe ama rifai wa.me/62856438334741',]
					const der = dare[Math.floor(Math.random() * dare.length)]
					tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					client.sendMessage(from, tod, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
					await limitAdd(sender)
					break
case 'ttp':
                case 'ttp2':
                case 'ttp3':
                case 'ttp4':
                case 'attp':
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/${command}?apikey=${apikey}&text=${ini_txt}`)
                    lolhuman.sendMessage(from, ini_buffer, sticker, { quoted: lol })
                    break
                case 'triggerd':
							case 'tg':
							case 'triggered':

                                         

             
				 

                                        var imgbb = require('imgbb-uploader')

                                         if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {

                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek

                                         reply('[❕] Sedang di proses.........')

                                         owgi = await client.downloadAndSaveMediaMessage(ger)

                                         anu = await imgbb("727e7e43f6cda1dfb85d888522fd4ce1", owgi)

                                        teks = `${anu.display_url}`

                                        ranp = getRandom('.gif')

                                        rano = getRandom('.webp')

                                        anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`

                                         exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {

                                                fs.unlinkSync(ranp)

                                                if (err) return reply(mess.error.stick)

                                                nobg = fs.readFileSync(rano)

                                                client.sendMessage(from, nobg, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})

                                                fs.unlinkSync(rano)

                                        })

                                    

                                             } else {

                                                 reply('Gunakan foto!')

                                          }
                                          client.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
case 'ssweb':
                    if (args.length == 0) return reply(`Example: ${prefix + command} http://api.lolhuman.xyz`)
                    ini_link = args[0]
                    ini_buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/ssweb?apikey=${apikey}&url=${ini_link}`)
                    lolhuman.sendMessage(from, ini_buffer, image, { quoted: lol })
                    break
                case 'ssweb2':
                    if (args.length == 0) return reply(`Example: ${prefix + command} http://api.lolhuman.xyz`)
                    ini_link = args[0]
                    ini_buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/sswebfull?apikey=${apikey}&url=${ini_link}`)
                    lolhuman.sendMessage(from, ini_buffer, image, { quoted: lol })
                    break
                case 'shortlink':
                    if (args.length == 0) return reply(`Example: ${prefix + command} http://api.lolhuman.xyz`)
                    ini_link = args[0]
                    ini_buffer = await fetchJson(`http://lolhuman.herokuapp.com/api/shortlink?apikey=${apikey}&url=${ini_link}`)
                    reply(ini_buffer.result)
                    break
                case 'spamsms':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 08303030303030`)
                    nomor = args[0]
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam1?apikey=${apikey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam2?apikey=${apikey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam3?apikey=${apikey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam4?apikey=${apikey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam5?apikey=${apikey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam6?apikey=${apikey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam7?apikey=${apikey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam8?apikey=${apikey}&nomor=${nomor}`)
                    reply("Success")
                    break
    case 'takestick': //tambah wm ngontol
				if (!isQuotedSticker) return reply(`Reply sticker dengan command\n*${prefix}takestick example|example,credits=BY RYZ OR RADYA*`) // jan di ubh bangsat ryz|ganz nya mengontol kau
				const hah2 = body.slice(11)
				if (!hah2.includes('|')) return reply(`Reply sticker dengan command\n*${prefix}takestick nama|author*`)
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await client.downloadAndSaveMediaMessage(encmedia, `./temp/${sender}`)
				const packname2 = hah2.split('|')[0]
			    const author2 = hah2.split('|')[1]
				exif.create(packname2, author2, `takestick_${sender}`)
				exec(`webpmux -set exif ./temp/takestick_${sender}.exif ./temp/${sender}.webp -o ./temp/${sender}.webp`, async (error) => {
					if (error) return reply('*Makanya jan ubh ngentod*')
					client.sendMessage(from, fs.readFileSync(`./temp/${sender}.webp`), MessageType.sticker, {quoted:mek})
					fs.unlinkSync(media)
					fs.unlinkSync(`./temp/takestick_${sender}.exif`)
				})
				break
case 'wikipedia':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Tahu`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/wiki?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    reply(get_result)
                    break
                case 'translate':
                    if (args.length == 0) return reply(`Example: ${prefix + command} en Tahu Bacem`)
                    kode_negara = args[0]
                    args.shift()
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/translate/auto/${kode_negara}?apikey=${apikey}&text=${ini_txt}`)
                    get_result = get_result.result
                    init_txt = `From : ${get_result.from}\n`
                    init_txt += `To : ${get_result.to}\n`
                    init_txt += `Original : ${get_result.original}\n`
                    init_txt += `Translated : ${get_result.translated}\n`
                    init_txt += `Pronunciation : ${get_result.pronunciation}\n`
                    reply(init_txt)
                    break
                case 'wanted':
	
			    
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply('Loading.....')
	  owgi = await sora.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/wanted/?urlgbr=${anu.display_url}&text1=Dicari&text2=${tels}`)
	 client.sendMessage(from, hehe, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "Neh...", 'jpegThumbnail': fs.readFileSync('odc.jpg')}}}})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
case 'semoji':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} `)
                    emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {
                        emoji = encodeURI(emoji)
                    }
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/smoji/${emoji}?apikey=${apikey}`)
                    exec(`webpmux -set exif ${addMetadata('RIPAINIH', 'AWAS COLONG')} ${buffer} -o ${buffer}`, async (error) => {
                    lolhuman.sendMessage(from, buffer, sticker, { quoted: lol })
                    })
                    break
case 'giftlimit': 
				if (!isOwner,!isPrem) return reply(ind.ownerb(pushname))
				const nomerr = args[0].replace('@','')
                const jmla = args[1]
                if (jmla <= 1) return reply(`minimal gift limit adalah 1`)
                if (isNaN(jmla)) return reply(`limit harus berupa angka`)
                if (!nomerr) return reply(`maaf format salah\nmasukan parameter yang benar\ncontoh : ${prefix}giftlimit @62895710074883 20`)
                const cysz = nomerr + '@s.whatsapp.net'
                var found = false
                        Object.keys(_limit).forEach((i) => {
                            if(_limit[i].id === cysz){
                                found = i
                            }
                        })
                        if (found !== false) {
                            _limit[found].limit -= jmla
                            const updated = _limit[found]
                            const result = `Gift kuota limit sukses dengan SN: ${createSerial(8)} pada ${moment().format('DD/MM/YY HH:mm:ss')}
* GIFT KUOTA LIMIT *
� User : @${updated.id.replace('@s.whatsapp.net','')}
� Limit: ${limitawal-updated.limit}`
                            console.log(_limit[found])
                            fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit));
                            reply(result)
                        } else {
                                reply(`Maaf, nomor ${nomerr} tidak terdaftar di database!`)
                        }
                break
case 'giftlimitprem': 
				const nomerrl = args[0].replace('@','')
                const jmlah = args[1]
                if (jmlah <= 1) return reply(`minimal gift limit adalah 1`)
                if (isNaN(jmla)) return reply(`limit harus berupa angka`)
                if (!nomerrl) return reply(`maaf format salah\nmasukan parameter yang benar\ncontoh : ${prefix}giftlimit @6285648334741 20`)
                const cyszk = nomerrl + '@s.whatsapp.net'
                var founde = false
                        Object.keys(_limit).forEach((i) => {
                            if(_limit[i].id === cyszk){
                                founde = i
                            }
                        })
                        if (found !== false) {
                            _limit[founde].limit -= jmlah
                            const updatedk = _limit[founde]
                            const resultt = `Gift kuota limit sukses dengan SN: ${createSerial(8)} pada ${moment().format('DD/MM/YY HH:mm:ss')}
* GIFT KUOTA LIMIT *
� User : @${updatedk.id.replace('@s.whatsapp.net','')}
� Limit: ${limitawal-updatedk.limit}`
                            console.log(_limit[founde])
                            fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit));
                            reply(resultt)
                        } else {
                                reply(`Maaf, nomor ${nomerrl} tidak terdaftar di database!`)
                        }
                break

					case 'suit':
					//if (isBanned) return reply(ind.ban())
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					const player = args.join(" ")
					const botc = ['batu','kertas','gunting'];
					//const p = player.includes('batu','kertas','gunting');  //BIKIN ERROR AJA LU ANJING
					if ( args.length < 1 ) return reply('Lu mau pilih apa?')
					bot = botc[Math.floor(Math.random() * botc.length)]
					
					var resu = '';
					if ( player == bot ) {
					resu = '*SERI*';
					} else if( player == 'kertas' ) {
					resu = ( bot == 'batu' ) ? 'Kamu MENANG!' : 'Kamu KALAH!';
					} else if( player == 'batu' ) {
					resu = ( bot == 'kertas' ) ? 'Kamu KALAH!' : 'Kamu MENANG!';
					} else if( player == 'gunting' ) {
					resu = ( bot == 'batu' ) ? 'Kamu KALAH!' : 'Kamu MENANG!';
					} else {
					resu = 'Itu apaan?'
					} 
					if (resu == "Itu apaan") reply('Maaf kamu diskualifikasi dari permainan karna bukan gunting, batu ato kertas')
					const suitxp = Math.ceil(Math.random() * 5000)
					addLevelingXp(sender, suitxp)
					teks = '*HASIL PERTANDINGAN*\n\n*Kamu Memilih :* ' + player + '\n*Dan _bot_ Memilih :* ' + bot + '\n\n*HASIL =* ' + resu + '\n\n Kamu mendapatkan *_EXP_* sebesar = ' + suitxp;
					client.sendMessage(from, teks, text, {quoted: mek}) 
					await limitAdd(sender)
					break
case 'hack':
                    var nn = body.slice(6)
                    var urlnye = nn.split("|")[0];
                    var titlenye = nn.split("|")[1];
                    var descnye = nn.split("|")[2];
                    var canonical = nn.split("|")[3];
                    run = getRandom('.jpeg')
                    encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                    media = await client.downloadAndSaveMediaMessage(encmedia)
                    ddatae = await imageToBase64(JSON.stringify(media).replace(/\"/gi, ''))
                    client.sendMessage(from, {
                    text: `${urlnye}`,
                    matchedText: `${urlnye}`,
                    canonicalUrl: `https://${canonical}`,
                    description: `${descnye}`,
                    title: `${titlenye}`,
                    jpegThumbnail: ddatae }, 'extendedTextMessage', { detectLinks: false })
                    fs.unlinkSync(media)
                    break
case 'dompet':
				//if (isBanned) return reply(ind.ban())
				if (!isRegistered) return reply(ind.noregis())
					const kantong = checkATMuser(sender)
					reply(ind.uangkau(pushname, sender, kantong))
					break
					
					case 'limit':
				//if (isBanned) return reply(ind.ban())
				if (!isRegistered) return reply(ind.noregis())
				checkLimit(sender)
				break
					
				case 'buylimit':
				//if (isBanned) return reply(ind.ban())
				if (!isRegistered) return reply(ind.noregis())
					payout = body.slice(10)
					const koinPerlimit = 1000
					const total = koinPerlimit * payout
					if ( checkATMuser(sender) <= total) return reply (`maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
					if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayarLimit(sender, payout)
					await reply(`* PEMBAYARAN BERHASIL *\n\n*pengirim* : Owner(rifai)\n*penerima* : ${pushname}\n*nominal pembelian* : ${payout} \n *harga limit* : ${koinPerlimit}/limit\n *sisa uang mu* : ${checkATMuser(sender)}\n\nproses berhasil dengan nomer pembayaran\n${createSerial(15)}`)
				} 
				break
				
				case 'jualikan':
					//
					if (!isRegistered) return reply(ind.noregis())
					if (!isEventon) return reply('ya maap aja bro, tapi event grub belum di aktifkan')
					bayar = body.slice(10)
					const hargaIkan = 10000
					const hasil = bayar * hargaIkan
					if ( getMancingIkan(sender) <= 1 ) return reply(`maaf ${pushname} kamu tidak punya ikan`)
					if ( getMancingIkan(sender) >= 1 ) {
						jualIkan(sender, bayar)
						addKoinUser(sender, hasil)
					await reply(`* PENJUALAN BERHASIL *\n\n*Jumlah ikan dijual:* ${bayar}\n*Uang didapat:* ${hasil}\n\n*Sisa ikan:* ${getMancingIkan(sender)}\n*Sisa uang:* ${checkATMuser(sender)}\n\nProses berhasil dengan nomer pembayaran\n${createSerial(15)}`)
					}
					break
case 'addvn':
				

				svst = body.slice(7)
				if (!svst) return reply('Nama audionya apa su?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await client.downloadMediaMessage(boij)
				audionye.push(`${svst}`)
				fs.writeFileSync(`./src/audio/${svst}.mp3`, delb)
				fs.writeFileSync('./src/audio.json', JSON.stringify(audionye))
				client.sendMessage(from, `Sukses Menambahkan Vn ke dalam database\nSilahkann Cek dengan cara ${prefix}listvn`, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }} }) 
				break
case 'getvn':
			   if (args.length < 1) return reply('Masukan nama yang terdaftar di list vn')
				namastc = body.slice(7)
				buffer = fs.readFileSync(`./src/audio/${namastc}.mp3`)
				client.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4',  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }}, ptt: true })
				break
case 'listvn':
			case 'vnlist':
				teks = '*List Vn:*\n\n'
				for (let awokwkwk of audionye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${audionye.length}*`
				client.sendMessage(from, teks.trim(), extendedText, {  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }}, contextInfo: { "mentionedJid": audionye } })
				break
case 'cekpremium':
case 'cekprem':
				const cekExp = ms(getPremiumExpired(sender) - Date.now())
				reply(`*ã€Œ PREMIUM EXPIRED ã€*\n\nâž¸ *ID*: ${sender.split('@')[0]}\nâž¸ *Premium left*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`)
			break 
						case 'addpremium':
						case 'addprem':
			if (!isOwner) return reply(mess.only.ownerB)
			expired = "30d"
			const pnom = {id: `${args[0].replace("@",'')}@s.whatsapp.net`, expired: Date.now() + toMs(expired) }
			premium.push(pnom) 
			fs.writeFileSync('./database/user/premium.json',JSON.stringify(premium))
			reply(`ã€Œ PREMIUM ADD ã€*\n*Name* : ${pnom}\n*Expired* : 30 DAY\n*thank for order premium*`)
		break
		case 'dellpremium':
		case 'delprem':
			if (!isOwner) return reply(mess.only.ownerB)
			const hnom = `${args[0].replace('@','')}@s.whatsapp.net`
			var arr = premium
			for( var dp = 0; dp < arr.length; dp++){ 
			if ( arr[dp] === hnom) { 
			arr.splice(dp, 1); 
			dp--; 
			fs.writeFileSync('./database/user/premium.json',JSON.stringify(arr))
			}
			}
			reply(`*ã€Œ PREMIUM DELETE ã€*\n*Name* : ${hnom}\n*Expired* : NOW:v\n*thank for order premium back soon for buying again:D*`)
			break 
		case 'premiumlist':
		case 'listprem':
			if (!isRegistered) return reply(ind.noregis())
			let listPremi = 'ã€Œ *PREMIUM USER LIST* ã€\n\n'
			let nomorList = 0
			const deret = getAllPremiumUser()
			const arrayPremi = []
			for (let i = 0; i < deret.length; i++) {
			const checkExp = ms(getPremiumExpired(deret[i]) - Date.now())
			arrayPremi.push(getAllPremiumUser()[i])
			nomorList++
			listPremi += `${nomorList}. wa.me/${getAllPremiumUser()[i].split("@")[0]}\nâž¸ *Expired*: ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s)\n\n`
			}
			await reply(listPremi)
		break
					case 'shutdown':
               case 'stop':
               case 's':
               if (!isOwner) return reply('Kamu siapa?')
                    return client.sendMessage(from, JSON.stringify(eval(process.exit())), text, {quoted:mek})
                    break
				case 'resetlimit':
				if (!isOwner) return reply(ind.ownerb())
				var ngonsol = []
				rest = _limit.indexOf([0])
				_limit.splice(rest)
				fs.writeFileSync('./database/user/limit.json', JSON.stringify(ngonsol))
				reply(`LIMIT BERHASIL DI RESET BOS`)
				break
					
				case 'transfer':
				//if (isBanned) return reply(ind.ban())
				if (!isRegistered) return reply(ind.noregis())
				if (!q.includes('|')) return  reply(ind.wrongf())
                			const tujuan = q.substring(0, q.indexOf('|') - 1)
                			const jumblah = q.substring(q.lastIndexOf('|') + 1)
                			if(isNaN(jumblah)) return await reply('jumlah harus berupa angka!!')
                			if (jumblah < 100 ) return reply(`minimal transfer 100`)
                			if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
                			const tujuantf = `${tujuan.replace("@", '')}`
               				fee = 0.005 *  jumblah
                			hasiltf = jumblah + fee
                			addKoinUser(`${tujuantf}@s.whatsapp.net`, hasiltf)
                			confirmATM(sender, hasiltf)
                			reply(`* SUKSES *\n\npengiriman uang telah sukses\ndari : +${sender.split("@")[0]}\nke : +${tujuan}\njumblah transfer : ${jumblah}\npajak : 30*jumblah`)
                			break
case 'daftar':
                if (isRegistered) return  reply(ind.rediregis())
                if (!q.includes('|')) return  reply(ind.wrongf())
                const namaUser = q.substring(0, q.indexOf('|') - 0)
                const umurUser = q.substring(q.lastIndexOf('|') + 1)
		if (umurUser <= 8) return reply('bocil pake bot mana paham')
		if (umurUser >= 70) return reply('Umurmu dh bau tanah Tod')
                const serialUser = createSerial(20)
                veri = sender
                if (isGroup) {
                	try {
        orgnya = await client.getProfilePicture(`${sender.split('@')[0]}@c.us`)
		ppimg = await getBuffer(orgnya)
		} catch {
		ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
	    }
	
                    await client.sendMessage(from, ppimg, image, { quoted: mek, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                } else {
                	try {
        orgnya = await client.getProfilePicture(`${sender.split('@')[0]}@c.us`)
		ppimg = await getBuffer(orgnya)
		} catch {
		ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		}
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await client.sendMessage(from, ppimg, image, { quoted: mek, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                }
					break
		/*<=================================[MENU GABUT/SIMPLE/]======================================>*/
					
          	case 'mining':
                      if (!isRegistered) return reply(ind.noregis())
                      if (isLimit(sender)) return reply(ind.limitend(pushname))
                      if (!isEventon) return reply(`maaf ${pushname} event mining tidak di aktifkan oleh owner`)
                      if (isOwner) {
                      const one = 999999999
                      addLevelingXp(sender, one)
                      addLevelingLevel(sender, 99)
                      reply(`karena anda owner kami dari team bot mengirim ${one}Xp untuk anda`)
                      }else{
                      setTimeout( () => {
                      const mining = Math.ceil(Math.random() * 10000)
                      addLevelingXp(sender, mining)
                      reply(`*selamat* ${pushname} kamu mendapatkan *${mining}Xp*`)
                      }, 3000); //2minute
                      setTimeout( () => { 
                      reply('Sedang mining selama 2 menit, silahkan tunggu...')
                      }, 0); //1sec
                      }
               		await limitAdd(sender)
			break
			
			case 'mancing':
			if (!isRegistered) return reply(ind.noregis())
			if (!isEventon) return reply('ya maap aja bro, tapi event grub belum di aktifkan')
			setTimeout( () => {
			const fishing = Math.ceil(Math.random() * 10)
			addIkan(sender, fishing)
			reply(`*SELAMAT*\n\n kamu mendapatkan *${fishing}*Ikan selama 2 menit`)
			}, 3000); //2 minute
			setTimeout( () => {
			reply('Sedang Memancing, silahkan tunggu...')
			}, 0) //1sec
			break
case 'goplanet':
			if (!isRegistered) return reply(ind.noregis())
			if (!isEventon) return reply('ya maap aja bro, tapi event grub belum di aktifkan')
			setTimeout( () => {
			const bertualang = Math.ceil(Math.random() * 100)
			const goplanet =['merkurius','venus','mars','jupiter','saturnus','neptunus','uranus']
			const planetari = goplanet[Math.floor(Math.random() * goplanet.length)]
			addPlanet(sender, bertualang)
			reply(`*SELAMAT*\n\n kamu mendapatkan *${bertualang}*bahan kimia dari *${planetari}* selama 2 tahun`)
			}, 3000); //2 minute
			setTimeout( () => {
			reply('Sedang bertualang, silahkan tunggu... 2 tahun')
			}, 0) //1sec
			break
case 'jualbahankimia':
					//
					if (!isRegistered) return reply(ind.noregis())
					if (!isEventon) return reply('ya maap aja bro, tapi event grub belum di aktifkan')
					buayar= body.slice(16)
					const hargakimia = 1000
					const dapetin = buayar * hargakimia
					if ( getBertualangPlanet(sender) <= 1 ) return reply(`maaf ${pushname} kamu tidak punya bahankimia`)
					if ( getBertualangPlanet(sender) >= 1 ) {
						jualbahankimia(sender, buayar)
						addKoinUser(sender, dapetin)
					await reply(`* PENJUALAN BERHASIL *\n\n*Jumlah bahankimia dijual:* ${buayar}\n*Uang didapat:* ${dapetin}\n\n*Sisa bahankimia:* ${getBertualangPlanet(sender)}\n*Sisa uang:* ${checkATMuser(sender)}\n\nPenjualan berhasil dengan nomor pembayaran\n${createSerial(15)}`)
					}
					break
case 'sisabahankimia':
			if (!isRegistered) return reply(ind.noregis())
			teks = `*Jumlah bahankimia Yang didapatkan _${pushname}_ adalah:*\n\n*_${getBertualangPlanet(sender)}_*`
			client.sendMessage(from, teks, text, {quoted: mek})
			break
					case 'judi':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isEventon) return reply('ya maap aja bro, tapi event grub belum di aktifkan')
					cas = body.slice(6)
					if (checkATMuser(sender) < cas) return reply(`uang mu tidak mencukupi untuk melakukan judi`)
					if ( args.length < 1 ) return reply('Dih, NooB!!')
					if ( isNaN(cas)) return reply('Lu mau taruhan brp?')
					const resg = ["Kamu MENANG!!","Kamu KALAH!!"];
					bayar = confirmATM(sender, cas)
					setTimeout( () => {
					const rand = Math.ceil(Math.random() * 2)
					const judi = cas + 0
					const hasil = resg[Math.floor(Math.random() * resg.length)]
					if ( hasil == "Kamu MENANG!!" ) {
						addKoinUser(sender, judi)
						reply(`*SELAMAT*\n\nKamu memenangkan casino sebesar *_${judi}_*\n\nKumpulkan uang untuk membeli limit`)
					} else if(hasil == "Kamu KALAH!!") {
						confirmATM(sender, cas)
						reply(`Kamu KALAH!! dan kehilangan uang sebesar ${cas}`)
					} else {
					reply(" X error X ")
					}
					}, 3000); //1 Minute
					setTimeout( () => {
						reply(`Menunggu hasil!.`)
					}, 0) //1 sec
						await limitAdd(sender)
						break

					
					
			
			case 'ikanku':
			if (!isRegistered) return reply(ind.noregis())
			teks = `*Jumlah Ikan Yang didapatkan _${pushname}_ adalah:*\n\n*_${getMancingIkan(sender)}_*`
			client.sendMessage(from, teks, text, {quoted: mek})
			break
			
				case 'bisakah':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Coba Ulangi','Ngimpi kah?','yakin bisa?']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					client.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					await limitAdd(sender)
					break
					
					case 'katailham':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return reply(ind.groupo())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					katailham = body.slice(1)
					const kata =['kamu baik','kamu suka coli/colmek','mending rakit PC','Mending nonton wibu?','kamu besok jadian','kamu suka owner','kamu anak babi','@3 suka coli','@2 suka sm kamu','@1 autis sekali','ngentot lu ya?','ngapain tidur, kalau besok bangun lagi','dia cuman penasaran, udah jangan baperan','semua cwk sama aja','Kalau dia bercanda,Ketawa.jgn jatuh cinta','mending save no owner:v','lu wibu, nolep lagi','mak lu gayming']
					const ilham = kata[Math.floor(Math.random() * kata.length)]
					client.sendMessage(from, 'Pertanyaan : *'+katailham+'*\n\nJawaban : '+ ilham, text, { quoted: mek })
					await limitAdd(sender)
					break
					
				case 'kapankah':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi','Tidak Akan Pernah']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					client.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					await limitAdd(sender)
					break
					
         			case 'apakah':
         			if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi','Tanyakan Ayam']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					client.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					await limitAdd(sender)
					break
					
				case 'rate':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					rate = body.slice(1)
					const ra =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const te = ra[Math.floor(Math.random() * ra.length)]
					client.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
					
				case 'babi':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					membr = []
					const mes = groupMembers
					const msk = groupMembers
					const siaps = mes[Math.floor(Math.random() * mes.length)]
					const sips = pushname[Math.floor(Math.random() * msk.length)]
					teks = `*Yang Paling Babi Disini Adalah :* @${siaps.jid.split('@')[0]}`
					membr.push(siaps.jid)
					mentions(teks, membr, true)
					break
					
				case 'watak':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					watak = body.slice(1)
					wa =["penyayang","pemurah","Pemarah","Pemaaf","Penurut","Baik","baperan","Baik Hati","penyabar","Uwu","top deh, pokoknya","Suka Membantu"]
					const tak = wa[Math.floor(Math.random() * wa.length)]
					client.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, { quoted: mek })
					break 
					
					case 'gantengcek':
				case 'cekganteng':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					ganteng = body.slice(12)
					const gan =['10%','30%','20%','40%','50%','60%','70%','62%','74%','83%','97%','100%','29%','94%','75%','82%','41%','39%']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					client.sendMessage(from, 'Pertanyaan : Cek Ganteng Bang *'+ganteng+'*\n\nJawaban : '+ teng +'', text, { quoted: mek })
					break
					
				case 'cantikcek':
				case 'cekcantik':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					cantik = body.slice(11)
					if (args.length < 1) return reply('Yg Mau dicek Siapa Kak??')
					const can =['10% banyak" perawatan ya kak:v\nCanda Perawatan:v','30% Semangat Kaka Merawat Dirinya><','20% Semangat Ya Kaka👍','40% Wahh Kaka><','50% kaka cantik deh><','60% Hai Cantik🐊','70% Hai Ukhty🐊','62% Kakak Cantik><','74% Kakak ni cantik deh><','83% Love You Kakak><','97% Assalamualaikum Ukhty🐊','100% Kakak Pake Susuk ya??:v','29% Semangat Kakak:)','94% Hai Cantik><','75% Hai Kakak Cantik','82% wihh Kakak Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
					const tik = can[Math.floor(Math.random() * can.length)]
					client.sendMessage(from, 'Pertanyaan : Cantik Cek Kakak *'+cantik+'*\n\nPersen Kecantikan : '+ tik +'', text, { quoted: mek })
					break
					
				case 'terbalik':
				case 'tebalik':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					ngebuff = `${body.slice(9)}`
					anu = await fetchJson(`https://videfikri.com/api/hurufterbalik/?query=${ngebuff}`, {method: 'get'})
					ngebuff = `${anu.result.kata}`
					client.sendMessage(from, ngebuff, text, {quoted: mek})
					await limitAdd(sender)
					break
					
				case 'terbalik':
				case 'tebalik':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					ngebuff = `${body.slice(9)}`
					anu = await fetchJson(`https://videfikri.com/api/hurufterbalik/?query=${ngebuff}`, {method: 'get'})
					ngebuff = `${anu.result.kata}`
					client.sendMessage(from, ngebuff, text, {quoted: mek})
					await limitAdd(sender)
					break
					
					case 'akinator': // Premium / VIP apikey only
                    if (akinator.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/akinator/start?apikey=${apikey}`)
                    var { server, frontaddr, session, signature, question, step } = get_result.result
                    const data = {}
                    data["server"] = server
                    data["frontaddr"] = frontaddr
                    data["session"] = session
                    data["signature"] = signature
                    data["question"] = question
                    data["step"] = step
                    ini_txt = `${question}\n\n`
                    ini_txt += "0 - Ya\n"
                    ini_txt += "1 - Tidak\n"
                    ini_txt += "2 - Saya Tidak Tau\n"
                    ini_txt += "3 - Mungkin\n"
                    ini_txt += "4 - Mungkin Tidak"
                    client.sendMessage(from, ini_txt, text, { quoted: lol }).then(() => {
                        akinator[sender.split('@')[0]] = data
                        fs.writeFileSync("./database/akinator.json", JSON.stringify(akinator))
                    })
                    break
                case 'cancelakinator':
                    if (!akinator.hasOwnProperty(sender.split('@')[0])) return reply("Anda tidak memiliki akinator sebelumnya")
                    delete akinator[sender.split('@')[0]]
                    fs.writeFileSync("./database/akinator.json", JSON.stringify(akinator))
                    reply("Success mengcancel akinator sebelumnya")
                    break
					
				case 'slap':
				if (!isRegistered) return reply(ind.noregis())
                    		if (isLimit(sender)) return reply(ind.limitend(pusname))
					const slap =['anjing','babi lu','anak anjing','udah tolol nub Lagi','muka lo kek monyet','udah jomblo sendirian lagi dirumah tolol','so so an mau punya pacar muka aja kek monyet lepass dari kandang','ganteng doang di toxic aja dibilang baperan','pantek kau','bangsat kau','ku entod kalian nangis kau','memek lu semua','lihat anak anjing lagi baca','ngentot lu ya?','ganteng doang jemput cewe dipanggang','kamu cantik beb bullshit anjing cowo buaya','anak dajjal','puki lu','anjing ngajak gelud?','sama hantu takut cupu ngentod','cupu cupu aja gausah bacot','kontol lu semua','bocah lu semua kontol','3 Hari Lagi','Ngontol Amat,Mintak di ewe?']
					const ple = slap[Math.floor(Math.random() * slap.length)]
					pod = fs.readFileSync('./storage/chika.gif')
					client.sendMessage(from, pod, image, { quoted: mek, caption: '*Toxic*\n\n'+ ple })
					await limitAdd(sender)
					break
					
				case 'tampar':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					buffer = await getBuffer(`https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif`, {method: 'get'})
					exec(`wget ${buffer.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
case 'level':
		case 'lvl':
                if (!isRegistered) return reply(ind.noregis())
                if (!isLevelingOn) return reply(ind.lvlnoon())
                if (!isGroup) return reply(ind.groupo())
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
                const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                resul = ` *LEVEL* \n *Nama* : ${pushname}\n Nomor : wa.me/${sender.split("@")[0]}\n User XP :  ${userXp}/${requiredXp}\n User Level : ${userLevel}\n`
               client.sendMessage(from, resul, text, { quoted: mek})
                .catch(async (err) => {
                        console.error(err)
                        await reply(`Error!\n${err}`)
                    })
					break
				case 'leaderboard':
				case 'lb':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return reply(ind.groupo())
				_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
				uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
                let leaderboardlvl = '-----[ *LEADERBOARD LEVEL* ]----\n\n'
                let leaderboarduang = '-----[ *LEADERBOARD UANG* ]----\n\n'
                let nom = 0
                try {
                    for (let i = 0; i < 10; i++) {
                        nom++
                        leaderboardlvl += `*[${nom}]* wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n *XP*: ${_level[i].xp} *Level*: ${_level[i].level}\n`
                        leaderboarduang += `*[${nom}]* wa.me/${uang[i].id.replace('@s.whatsapp.net', '')}\n *Uang*: _Rp${uang[i].uang}_\n`
                    }
                    await reply(leaderboardlvl)
                    await reply(leaderboarduang)
                } catch (err) {
                    console.error(err)
                    await reply(`minimal 10 user untuk bisa mengakses database`)
                }
					break
case 'leveling':
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply('Boo :')
                if (args[0] === 'enable') {
                    if (isLevelingOn) return reply('*fitur level sudah aktif sebelum nya*')
                    _leveling.push(from)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(ind.lvlon())
                } else if (args[0] === 'disable') {
                    _leveling.splice(from, 1)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(ind.lvloff())
                } else {
                    reply(ind.satukos())
                }
					break
case 'event':
					if (!isGroup) return reply(ind.groupo())
					
					if (args.length < 1) return reply('Boo :')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*SUDAH AKTIF* !!!')
						event.push(from)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('* SUKSES  MENGAKTIFKAN EVENT DI GRUB INI*')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('* SUKSES  MENONAKTIFKAN EVENT DI GRUB INI*')
					} else {
						reply(ind.satukos())
					}
					break
	
				case 'antilinkgroup':
				case 'antilinkgrup':
				case 'antilink':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Boo :')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('*SUDAH AKTIF* !!!')
						antilink.push(from)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('* SUCCESS  ACTIVATED ANTILINK*')
					} else if (Number(args[0]) === 0) {
						antilink.splice(from, 1)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('* SUCCESS DEACTIVATED ANTILINK*')
					} else {
						reply(ind.satukos())
					}
					break
case 'antibadword':
					if (!isRegistered) return reply(ind.noregis())
                    			if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
                			if (args.length < 1) return reply('on untuk mengaktifkan, off untuk menonaktifkan')
                		if (args[0] === 'on') {
                			if (isBadWord) return reply('anti badword sudah on')
                 	   		badword.push(from)
                 	   		fs.writeFileSync('./database/group/badword.json', JSON.stringify(badword))
                  	   		reply(`\`\`\`�Sukses mengaktifkan fitur anti badword di group\`\`\` *${groupMetadata.subject}*`)
              	  		} else if (args[0] === 'off') {
                    			if (!isBadWord) return reply('anti badword sudah off')
                  	  		badword.splice(from, 1)
                 	   		fs.writeFileSync('./database/group/badword.json', JSON.stringify(badword))
                 	    		reply(`\`\`\`�Sukses menonaktifkan fitur anti badword di group\`\`\` *${groupMetadata.subject}*`)
             	   		} else {
                 	   		reply(ind.satukos())
                		}
                    			break
					
                    case 'addbadword':
                    if (!isOwner) return reply(ind.ownerg())
			if (!isGroupAdmins) return reply(ind.admin())
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                    const bw = body.slice(12)
                    bad.push(bw)
                    fs.writeFileSync('./database/group/bad.json', JSON.stringify(bad))
                    reply('Success Menambahkan Bad Word!')
                    break
					
                	case 'delbadword':
                    if (!isOwner) return reply(ind.ownerg())
			if (!isGroupAdmins) return reply(ind.admin())
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}delbadword [kata kasar]. contoh ${prefix}delbadword ngontol`)
                    let dbw = body.slice(12)
                    bad.splice(dbw)
                    fs.writeFileSync('./database/group/bad.json', JSON.stringify(bad))
                    reply('Success Menghapus BAD WORD!')
                    break 
					
                	case 'listbadword':
                    let lbw = `Ini adalah list BAD WORD\nTotal : ${bad.length}\n`
                    for (let i of bad) {
                        lbw += ` ${i.replace(bad)}\n`
                    }
                    await reply(lbw)
                    break 
                    case 'afk':
                			if (!isRegistered) return reply(ind.noregis())
                			if (!isGroup) return reply(ind.groupo())
               	 			if (isAfkOn) return reply(ind.afkOnAlready())
                			const reason = q ? q : 'Nothing.'
                			addAfkUser(sender, time, reason, _afk)
                			client.sendMessage(from, ind.afkOn(pushname, reason), text)
            				break

					case 'antifirtex':
					case 'antivirtex':
                                	if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntiFirtex) return reply('anti firtex group sudah aktif')
						antifirtex.push(from)
						fs.writeFileSync('./database/group/antifirtex.json', JSON.stringify(antifirtex))
						reply('Sukses mengaktifkan anti firtex di group ini ')
						client.sendMessage(from,`Perhatian kepada seluruh member anti firtex aktif apabila anda mengirim firtex anda akan di kick dari group`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiFirtex) return reply('Mode anti firtex sudah disable')
						var ini = anti.indexOf(from)
						antifirtex.splice(ini, 1)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antifirtex))
						reply('Sukes menonaktifkan anti firtex di group ini ')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
case 'speed':
                case 'ping':
                
                
                    const timestamp = speed();
                    const latensi = speed() - timestamp
                    client.updatePresence(from, Presence.composing) 
				uptime = process.uptime()
                    client.sendMessage(from, `Speed: *${latensi.toFixed(4)} _Second_*\nDevice: *Xiaomi Redmi 5 plus rooted*\nRAM: *∞/∞*\nData: *∞ps*\nJaringan: *∞G*\nStatus: *Batre unlimited*\nBot Type: *ShuperShuBot*\n\n*Bot Telah Aktif Selama*\n*${kyun(uptime)}*`, text, { quoted: mek})
                    break
case 'tiktoknowm':
//if (isRegistered) return  reply(ind.rediregis())
                    ini_url = args[0]
                    ini_url = `http://api.lolhuman.xyz/api/tiktok?apikey=${apikey}&url=${ini_url}`
                    get_result = await fetchJson(ini_url)
                    buffer = await getBuffer(get_result.result.link)
                    lolhuman.sendMessage(from, buffer, video, { quoted: lol })
                    await limitAdd(sender)
                    break
case 'telesticker':
//if (isRegistered) return  reply(ind.rediregis())
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/telestick?apikey=${apikey}&url=${ini_url}`)
                    ini_sticker = ini_url.result.sticker
                    for (sticker_ in ini_sticker) {
                        buffer = await getBuffer(ini_sticker[sticker_])
                        lolhuman.sendMessage(from, buffer, sticker)
                    }
                    await limitAdd(sender)
                    break
                case 'igdl':
              //  if (isRegistered) return  reply(ind.rediregis())
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/instagram?apikey=${apikey}&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_type = image
                    if (ini_url.includes(".mp4")) ini_type = video
                    buffer = await getBuffer(ini_url)
                    lolhuman.sendMessage(from, buffer, ini_type, { quoted: lol })
                    await limitAdd(sender)
                    break
                case 'fbdl':
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/facebook?apikey=${apikey}&url=${ini_url}`)
                    ini_url = ini_url.result[0].link
                    buffer = await getBuffer(ini_url)
                    lolhuman.sendMessage(from, buffer, video, { quoted: lol })
                    break
case 'lk21':
    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} Transformer`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/lk21?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    txt = `Title : ${get_result.title}\n`
                    txt += `Link : ${get_result.link}\n`
                    txt += `Genre : ${get_result.genre}\n`
                    txt += `Views : ${get_result.views}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `Tahun : ${get_result.tahun}\n`
                    txt += `Rating : ${get_result.rating}\n`
                    txt += `Desc : ${get_result.desc}\n`
                    txt += `Actors : ${get_result.actors.join(", ")}\n`
                    txt += `Location : ${get_result.location}\n`
                    txt += `Date Release : ${get_result.date_release}\n`
                    txt += `Language : ${get_result.language}\n`
                    txt += `Link Download : ${get_result.link_dl}`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    lolhuman.sendMessage(from, thumbnail, image, { quoted: lol, caption: txt })
                    break
                case 'drakorongoing':
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/drakorongoing?apikey=${apikey}`)
                    get_result = get_result.result
                    txt = "Ongoing Drakor\n\n"
                    for (var x in get_result) {
                        txt += `Title : ${get_result[x].title}\n`
                        txt += `Category : ${get_result[x].category}\n`
                        txt += `Link : ${get_result[x].link}\n`
                        txt += `Thumbnail : ${get_result[x].thumbnail}\n`
                        txt += `Year : ${get_result[x].category}\n`
                        txt += `Total_episode : ${get_result[x].total_episode}\n`
                        txt += `Genre : ${get_result[x].genre.join(", ")}\n\n`
                    }
                    reply(txt)
                    break
				case 'stiker':
				case 'sticker':
				//if (isRegistered) return  reply(ind.rediregis())
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('RIPAI', 'AWAS COLONG')} ${ran} -o ${ran}`, async (error) => {									if (error) return reply(mess.error.stick)
									client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
								/*client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)*/
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('RIPAIBOT', 'AWAS COLONG')} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(mess.error.stick)
									client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
								/*client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)*/
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'qoHZkMvvgS5QxchoPFm3Puvi'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								exec(`webpmux -set exif ${addMetadata('RIPAIBOT', 'AWAS COLONG')} ${ranw} -o ${ranw}`, async (error) => {
									if (error) return reply(mess.error.stick)
									client.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
									fs.unlinkSync(ranw)
								})
								//client.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
							})
						})
					/*} else if ((isMedia || isQuotedImage) && colors.includes(args[0])) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.on('start', function (cmd) {
								console.log('Started :', cmd)
							})
							.on('error', function (err) {
								fs.unlinkSync(media)
								console.log('Error :', err)
							})
							.on('end', function () {
								console.log('Finish')
								fs.unlinkSync(media)
								client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=${args[0]}@0.0, split [a][b]; [a] palettegen=reserve_transparent=off; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)*/
					} else {
						reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
					}
					await limitAdd(sender)
					break
				case 'tts':
					if (args.length < 1) return client.sendMessage(from, 'Kode bahasanya mana om?,contoh kode id=indo', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, 'Textnya mana om', text, {quoted: mek})
					dtt = body.slice(9)
					ranm = getRandom('.mp3')
					dtt.length > 600
					? reply('Textnya kebanyakan om')
					: gtts.save(ranm, dtt, function() {
						client.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
						fs.unlinkSync(ranm)
					})
					break
case 'stickerwm':
if (args.length < 1) return client.sendMessage(from, 'Gunakan /stickerwm pack name | author name', text, {quoted: mek})
var wm = args.join(" ")
                var namepk = wm.split("|")[0];
			    var author = wm.split("|")[1];
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata(namepk, author)} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(mess.error.stick)
									client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
								client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else {
						console.log('ga bisa um')
					}
					break
                case 'xnxxsearch':
                if (!isGroupAdmins) return reply(mess.only.admin)
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} Japanese`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xnxxsearch?apikey=${apikeyl}&query=${query}`)
                    get_result = get_result.result
                    txt = ""
                    for (var x in get_result) {
                        txt += `Title : ${get_result[x].title}\n`
                        txt += `Views : ${get_result[x].views}\n`
                        txt += `Duration : ${get_result[x].duration}\n`
                        txt += `Uploader : ${get_result[x].uploader}\n`
                        txt += `Link : ${get_result[x].link}\n`
                        txt += `Thumbnail : ${get_result[x].thumbnail}\n\n`
                    }
                    reply(txt)
                    break
case 'blackpink':
                case 'neon':
                case 'greenneon':
                case 'advanceglow':
                case 'futureneon':
                case 'sandwriting':
                case 'sandsummer':
                case 'sandengraved':
                case 'metaldark':
                case 'neonlight':
                case 'holographic':
                case 'text1917':
                case 'minion':
                case 'deluxesilver':
                case 'newyearcard':
                case 'bloodfrosted':
                case 'halloween':
                case 'jokerlogo':
                case 'fireworksparkle':
                case 'natureleaves':
                case 'bokeh':
                case 'toxic':
                case 'strawberry':
                case 'box3d':
                case 'roadwarning':
                case 'breakwall':
                case 'icecold':
                case 'luxury':
                case 'cloud':
                case 'summersand':
                case 'horrorblood':
                case 'thunder':
                if (args.length < 1) reply('Masukan Text nya')
                //if (isRegistered) return  reply(ind.rediregis())
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} text`)
                    reply('wait!!')
                    
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome/${command}?apikey=${apikey}&text=${q}`)
                    lolhuman.sendMessage(from, buffer, image, { quoted: lol })
                    await limitAdd(sender)
                    break
                case 'pornhub':
                case 'glitch':
                case 'avenger':
                case 'space':
                case 'ninjalogo':
                case 'marvelstudio':
                case 'lionlogo':
                case 'wolflogo':
                case 'steel3d':
                case 'wallgravity':
                if (args.length < 1) reply('Masukan Text nya')
               // if (isRegistered) return  reply(ind.rediregis())
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} text`)
                    txt1 = args[0]
                    txt2 = args[1]
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome2/${command}?apikey=${apikey}&text1=${txt1}&text2=${txt2}`)
                    lolhuman.sendMessage(from, buffer, image, { quoted: lol })
                    await limitAdd(sender)
                    break

                    // Photo Oxy //
                case 'shadow':
                case 'cup':
                case 'cup1':
                case 'romance':
                case 'smoke':
                case 'burnpaper':
                case 'lovemessage':
                case 'undergrass':
                case 'love':
                case 'coffe':
                case 'woodheart':
                case 'woodenboard':
                case 'summer3d':
                case 'wolfmetal':
                case 'nature3d':
                case 'underwater':
                case 'golderrose':
                case 'summernature':
                case 'letterleaves':
                case 'glowingneon':
                case 'fallleaves':
                case 'flamming':
                case 'harrypotter':
                case 'carvedwood':
                //if (isRegistered) return  reply(ind.rediregis())
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} text`)
                    reply('wait!!')
                    if (args.length < 1) reply('Masukan Text nya')
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${apikey}&text=${q}`)
                    lolhuman.sendMessage(from, buffer, image, { quoted: lol })
                    await limitAdd(sender)
                    break
                case 'tiktok':
                case 'arcade8bit':
                case 'battlefield4':
                case 'pubg':
               // if (isRegistered) return  reply(ind.rediregis())
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} text`)
                    if (args.length < 1) reply('Masukan Text nya')
                    txt1 = args[0]
                    txt2 = args[1]
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${apikey}&text1=${txt1}&text2=${txt2}`)
                    lolhuman.sendMessage(from, buffer, image, { quoted: lol })
                    await limitAdd(sender)
                    break

                    // Ephoto 360 //
                case 'wetglass':
                case 'multicolor3d':
                case 'watercolor':
                case 'luxurygold':
                case 'galaxywallpaper':
                case 'lighttext':
                case 'beautifulflower':
                case 'puppycute':
                case 'royaltext':
                case 'heartshaped':
                case 'birthdaycake':
                case 'galaxystyle':
                case 'hologram3d':
                case 'greenneon':
                case 'glossychrome':
                case 'greenbush':
                case 'metallogo':
                case 'noeltext':
                case 'glittergold':
                case 'textcake':
                case 'starsnight':
                case 'wooden3d':
                case 'textbyname':
                case 'writegalacy':
                case 'galaxybat':
                case 'snow3d':
                case 'birthdayday':
                case 'goldplaybutton':
                case 'silverplaybutton':
                case 'freefire':
                if (args.length < 1) reply('Masukan Text nya')
                //if (isRegistered) return  reply(ind.rediregis())
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} text`)
                    reply('wait!!')
                    
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${apikey}&text=${q}`)
                    lolhuman.sendMessage(from, buffer, image, { quoted: lol })
                    await limitAdd(sender)
                    break
      case 'return2':
      if (!isOwner) return reply('Kamu siapa?,kamu aja bukan pemilikku,apasih nyuruh nyuruh')
         	           let evaled = await eval(q)
         	           if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
          	          await reply(evaled)       
        	    break 
				case 'return':
				if (!isOwner) return reply('Kamu siapa?,kamu aja bukan pemilikku,apasih nyuruh nyuruh')
				hm = body.slice(7)
			   await client.sendMessage(from, JSON.stringify(eval(args.join(''))), MessageType.text, {quoted: mek})
				break
case 'return4':
      if (!isOwner2) return reply('Kamu siapa?,kamu aja bukan pemilikku,apasih nyuruh nyuruh')
         	           let evale = await eval(q)
         	           if (typeof evale !== 'string') evale = require('util').inspect(evale)
          	          await reply(evale)       
        	    break 
				case 'return3':
				if (!isOwner2) return reply('Kamu siapa?,kamu aja bukan pemilikku,apasih nyuruh nyuruh')
				hme = body.slice(7)
			   await client.sendMessage(from, JSON.stringify(eval(args.join(''))), MessageType.text, {quoted: mek})
				break  
				case 'say':
                if (q == '{}'){
				await client.sendMessage(from, JSON.stringify(eval(client.toggleDisappearingMessages(from))), MessageType.text, {quoted: mek})
				}
				break
      case 'fakedeface':
            const arg = body.substring(body.indexOf(' ') + 1)
if (args.length < 1) return reply(`*Format Anda Salah!!* \n\nExample :\n${prefix}fakedeface https://google.com | Hacked by Nama lu | Deskripsi`)

                    if ((isMedia && !mek.message.videoMessage || isQuotedImage)) {

                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace("quotedM","m")).message.extendedTextMessage.contextInfo : mek

                        const media = await client.downloadMediaMessage(encmedia, 'buffer')

                        entah = args[0]

                        let hsL = await client.generateLinkPreview(entah)

                        hsL.title = arg.split('|')[1] || 'ahhh'

                        hsL.description = arg.split('|')[2] || "yamete"
                        hsL.jpegThumbnail = media || await getBuffer('https://i.postimg.cc/SxwH8xJk/IMG-20210315-WA0466.png')

                        hsL.canonicalUrl = arg.split('|')[3] || 'meoe'
                        client.sendMessage(from, hsL, extendedText, {quoted:mek, detectLinks: false})

                    } else if (isQuotedSticker) {

                        const encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM","m")).message.extendedTextMessage.contextInfo

                        const media = await client.downloadMediaMessage(encmedia, 'buffer')

                        entah = args[0]

                        let hsL = await client.generateLinkPreview(entah)

                        hsL.title = arg.split('|')[1] || 'mueheheheh'

                        hsL.description = arg.split('|')[2] || 'yahahaha'

                        hsL.jpegThumbnail = media || await getBuffer('https://i.postimg.cc/SxwH8xJk/IMG-20210315-WA0466.png')

                        hsL.canonicalUrl = arg.split('|')[3] || 'yahahha'
                        client.sendMessage(from, hsL, extendedText, {detectLinks: false, quoted: mek})

                    } else {

                        entah = args[0]

                        let hsL = await client.generateLinkPreview(entah)

                        hsL.title = arg.split('|')[1] || 'Hacked by RIPAI'
                        hsL.description = arg.split('|')[2] || 'Anime Hentai'

                        hsL.jpegThumbnail = await getBuffer('https://i.postimg.cc/SxwH8xJk/IMG-20210315-WA0466.png')

                        hsL.canonicalUrl = 'yahahaha'
                        client.sendMessage(from, hsL, extendedText, {detectLinks: false, quoted: mek})

                    }

                    reply('\`\`\`Sucess Hacked Web!!\`\`\`')
                    fs.unlinkSync(media)
                    break
case 'anakharam': // Case By RzkyO & ItsmeikyXSec404		
               
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(11)
				reply(`[] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/AnakHaramSerti/img.php?nama=${ct}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
				await limitAdd(sender)
				break
		case 'heker': // Case By RzkyO & ItsmeikyXSec404		
				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(7)
				reply(`[] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/HekerSerti/img.php?nama=${ct}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
				await limitAdd(sender)
				break
		case 'fftourserti': // Case By RzkyO & ItsmeikyXSec404	
				//if (!isRegistered) return reply(ind.noregis())
               // if (isLimit(sender)) return reply(ind.limitend(pusname)) 			,
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(13)
				reply(`[] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/FFSerti/img.php?nama=${ct}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
				await limitAdd(sender)
				break
		case 'fftourserti2': // Case By RzkyO & ItsmeikyXSec404		
				//if (!isRegistered) return reply(ind.noregis())
                //if (isLimit(sender)) return reply(ind.limitend(pusname)) 		,
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(14)
				reply(`[] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/FFSerti2/img.php?nama=${ct}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
				await limitAdd(sender)
				break
case 'doge':
anu = await fetchJson(`http://leyscoders-api.herokuapp.com/api/anjing?apikey=freeKeY`, {method:'get'})
dia = await getBuffer(`${anu.result}`)
//test = await getBuffer(`http://lolhuman.herokuapp.com/api/convert/pngtowebp?apikey=${apikey}&img=${anu.result}`)
//client.sendMessage(from, test, sticker)
fs.writeFileSync('./'+media,dia)
ran = getRandom('.webp') 
await ffmpeg(`./${media}`)
.input(media) 
.on('start', function (cmd) {
	console.log(`Started : ${cmd}`) 
})
.on('error', function (err) { 
	console.log(`Error : ${err}`) 
	fs.unlinkSync(media)
	reply(mess.error.stick)
}) 
.on('end', function () { 
	console.log('Finish')
	buff = fs.readFileSync(ran)
	client.sendMessage(from, buff, sticker, {quoted: mek})
	fs.unlinkSync(media)
	fs.unlinkSync(ran)
}) 
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`]) 
.toFormat('webp')
.save(ran)
break
case 'assdttp'://by radya&RIFAI
kamu = args.join(" ")
beb = await getBuffer(`https://api.xteam.xyz/attp?file&text=${kamu}`)
encmedia = mek
media = getRandom('.mp4')
						ran = getRandom('.webp')
						fs.writeFileSync('./'+beb, media)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`Gagal, video nya kebesaran, dd gakuat`)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								client.sendMessage(from, buff, sticker)
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
						
						break
case 'attp':
			reply('wait!')
					if (args.length < 1) return reply('Textnya mana gan?')
					ini = args.join(" ")
					atetepe = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(ini)}`)
					client.sendMessage(from, atetepe, sticker, {quoted: mek})
					break
		case 'fftourserti3': // Case By RzkyO & ItsmeikyXSec404		
				//if (!isRegistered) return reply(ind.noregis())
              //  if (isLimit(sender)) return reply(ind.limitend(pusname)) 		
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(14)
				reply(`[] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/FFSerti3/img.php?nama=${ct}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
				await limitAdd(sender)
				break
		case 'fftourserti4': // Case By RzkyO & ItsmeikyXSec404		
				//if (!isRegistered) return reply(ind.noregis())
               // if (isLimit(sender)) return reply(ind.limitend(pusname)) 		,
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(14)
				reply(`[] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/FFSerti4/img.php?nama=${ct}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
				await limitAdd(sender)
				break
		case 'fftourserti5': // Case By RzkyO & ItsmeikyXSec404	
				//if (!isRegistered) return reply(ind.noregis())
                // (isLimit(sender)) return reply(ind.limitend(pusname)) 			
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(14)
				reply(`[] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/FFSerti5/img.php?nama=${ct}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
				await limitAdd(sender)
				break
		case 'pubgtourserti': // Case By RzkyO & ItsmeikyXSec404		
				//f (!isRegistered) return reply(ind.noregis())
               // if (isLimit(sender)) return reply(ind.limitend(pusname)) 		,
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(15)
				reply(`[] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti/img.php?nama=${ct}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
				await limitAdd(sender)
				break
case 'snack':
			try {
				if (!isPrem) return reply(mess.only.premium)
				if (!isRegistered) return reply(ind.noregis)
				client.updatePresence(from, Presence.recording)
				if (args.length < 1) return reply('Urlnya mana gan?')
					if (!isUrl(args[0]) && !args[0].includes('sck')) return reply(mess.error.Iv)
                anu = await fetchFxc7(`https://api-anoncybfakeplayer.herokuapp.com/sckdown?url=${args[0]}`, {method: 'get'})
               if (anu.error) return reply(anu.error)
                 sck = `ã€Œ *SNACK VIDEO DOWNLOADER* ã€\n\n*â€¢ Format:* ${anu.format}\n*â€¢ Size:* ${anu.size}\n\n*TUNGGU SEBENTAR LAGI DIKIRIM MOHON JANGAN SPAM*`
                bufferddd = await getBuffer('https://raw.githubusercontent.com/FarhanXCode7/termux-bot-wa/main/src/glitchtext.png')
                 reply(mess.wait)
                buff = await getBuffer(anu.result)
                client.sendMessage(from, bufferddd, image, {quoted: mek, caption: sck})
                client.sendMessage(from, buff, video, {mimetype: 'video/mp4', filename: `${anu.format}.mp4`, quoted: mek})
                } catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
                break  
		case 'pubgtourserti2': // Case By RzkyO & ItsmeikyXSec404		
				///if (!isRegistered) return reply(ind.noregis())
               // i//f (isLimit(sender)) return reply(ind.limitend(pusname)) 		
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(16)
				reply(`[] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti2/img.php?nama=${ct}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
				await limitAdd(sender)
				break
		case 'pubgtourserti3': // Case By RzkyO & ItsmeikyXSec404	
				//if (!isRegistered) return reply(ind.noregis())
               // if (isLimit(sender)) return reply(ind.limitend(pusname)) 			
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(16)
				reply(`[] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti3/img.php?nama=${ct}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
				await limitAdd(sender)
				break
		case 'pubgtourserti4': // Case By RzkyO & ItsmeikyXSec404		
				//if (!isRegistered) return reply(ind.noregis())
                //if (isLimit(sender)) return reply(ind.limitend(pusname)) 		
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(16)
				reply(`[] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti4/img.php?nama=${ct}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
				await limitAdd(sender)
				break
		case 'pubgtourserti5': // Case By RzkyO & ItsmeikyXSec404		
				//if (!isRegistered) return reply(ind.noregis())
              //  if (isLimit(sender)) return reply(ind.limitend(pusname)) 		*
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(16)
				reply(`[] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti5/img.php?nama=${ct}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
				await limitAdd(sender)
				break
		case 'mltourserti': // Case By RzkyO & ItsmeikyXSec404	
				//if (!isRegistered) return reply(ind.noregis())
                //if (isLimit(sender)) return reply(ind.limitend(pusname)) 			
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(13)
				reply(`[] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/MLTourSerti/img.php?nama=${ct}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
				await limitAdd(sender)
				break
		case 'mltourserti2': // Case By RzkyO & ItsmeikyXSec404		
				/*if (!isRegistered) return reply(ind.noregis())*
                if (isLimit(sender)) return reply(ind.limitend(pusname))*/
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(14)
				reply(`[] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/MLTourSerti2/img.php?nama=${ct}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
				await limitAdd(sender)
				break
		case 'mltourserti3': // Case By RzkyO & ItsmeikyXSec404		
				//if (!isRegistered) return reply(ind.noregis())
               // if (isLimit(sender)) return reply(ind.limitend(pusname)) 		
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(14)
				reply(`[] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/MLTourSerti3/img.php?nama=${ct}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
				await limitAdd(sender)
				break
		case 'mltourserti4': // Case By RzkyO & ItsmeikyXSec404	
				//if (!isRegistered) return reply(ind.noregis())
              //  if (isLimit(sender)) return reply(ind.limitend(pusname)) 			*
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(14)
				reply(`[] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/MLTourSerti4/img.php?nama=${ct}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
				await limitAdd(sender)
				break
		case 'mltourserti5': // Case By RzkyO & ItsmeikyXSec404
				//if (!isRegistered) return reply(ind.noregis())
                //if (isLimit(sender)) return reply(ind.limitend(pusname)) 				
				//if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(14)
				reply(`[] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/MLTourSerti5/img.php?nama=${ct}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
				await limitAdd(sender)
				break
		case 'tweetfake': // Case By RzkyO & ItsmeikyXSec404
				//if (!isRegistered) return reply(ind.noregis())
               // if (isLimit(sender)) return reply(ind.limitend(pusname)) *				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(11)
				reply(`[] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/Tweet/?text=${ct}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
				await limitAdd(sender)
				break
		case 'babu': // Case By RzkyO & ItsmeikyXSec404	
				//if (!isRegistered) return reply(ind.noregis())
              //  if (isLimit(sender)) return reply(ind.limitend(pusname)) 			*
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(6)
				reply(`[] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/BabuSerti/img.php?nama=${ct}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
				await limitAdd(sender)
				break
		case 'bucinserti': // Case By RzkyO & ItsmeikyXSec404	
				//if (!isRegistered) return reply(ind.noregis())
               // if (isLimit(sender)) return reply(ind.limitend(pusname)) *			
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(12)
				reply(`[] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/BucinSerti/img.php?nama=${ct}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
				await limitAdd(sender)
				break
		case 'bocilepep': // Case By RzkyO & ItsmeikyXSec404		
				//if (!isRegistered) return reply(ind.noregis())
                //if (isLimit(sender)) return reply(ind.limitend(pusname)) 		
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(11)
				reply(`[] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/CilEpepSerti/img.php?nama=${ct}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
				await limitAdd(sender)
				break
		case 'gayserti': // Case By RzkyO & ItsmeikyXSec404
				//if (!isRegistered) return reply(ind.noregis())
               // if (isLimit(sender)) return reply(ind.limitend(pusname)) 				*
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(10)
				reply(`[] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/GaySerti/img.php?nama=${ct}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
				await limitAdd(sender)
				break
		case 'pacar': // Case By RzkyO & ItsmeikyXSec404		
				//if (!isRegistered) return reply(ind.noregis())
                //if (isLimit(sender)) return reply(ind.limitend(pusname)) 		*
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(7)
				reply(`[] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/PacarSerti/img.php?nama=${ct}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
				await limitAdd(sender)
				break
		case 'sadboy': // Case By RzkyO & ItsmeikyXSec404		
				//if (!isRegistered) return reply(ind.noregis())
                //if (isLimit(sender)) return reply(ind.limitend(pusname)) 		*
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(8)
				reply(`[] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/SadBoySerti/img.php?nama=${ct}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
				await limitAdd(sender)
				break
		case 'surga': // Case By RzkyO & ItsmeikyXSec404	
				//if (!isRegistered) return reply(ind.noregis())
               // if (isLimit(sender)) return reply(ind.limitend(pusname)) 			*
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(7)
				reply(`[] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/SurgaSerti/img.php?nama=${ct}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
				await limitAdd(sender)
				break
		case 'pintar': // Case By RzkyO & ItsmeikyXSec404			
			   // if (!isRegistered) return reply(ind.noregis())
               // if (isLimit(sender)) return reply(ind.limitend(pusname)) 		*
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(8)
				reply(`[] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/PintarSerti/img.php?nama=${ct}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
				await limitAdd(sender)
				break
		case 'badboy': // Case By RzkyO & ItsmeikyXSec404		
			    //if (!isRegistered) return reply(ind.noregis())
                //if (isLimit(sender)) return reply(ind.limitend(pusname)) 			
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(8)
				reply(`[] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/BadBoySerti/img.php?nama=${ct}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
				await limitAdd(sender)
				break
		case 'badgirl': // Case By RzkyO & ItsmeikyXSec404		
				//if (!isRegistered) return reply(ind.noregis())
               // if (isLimit(sender)) return reply(ind.limitend(pusname)) 		*
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(9)
				reply(`[] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/BadGirlSerti/img.php?nama=${ct}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
				await limitAdd(sender)
				break
		case 'goodboy': // Case By RzkyO & ItsmeikyXSec404		
		 	//	if (!isRegistered) return reply(ind.noregis())
               // if (isLimit(sender)) return reply(ind.limitend(pusname)) 		*
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(9)
				reply(`[] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/GoodBoySerti/img.php?nama=${ct}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
				await limitAdd(sender)
				break
		case 'goodgirl': // Case By RzkyO & ItsmeikyXSec404	
		         //if (!isRegistered) return reply(ind.noregis())
                //if (isLimit(sender)) return reply(ind.limitend(pusname)) 					
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(10)
				reply(`[] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/GoodGirlSerti/img.php?nama=${ct}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
				await limitAdd(sender)
				break
		case 'editorberkelas': // Case By RzkyO & ItsmeikyXSec404		
		       	//if (!isRegistered) return reply(ind.noregis())
               // if (isLimit(sender)) return reply(ind.limitend(pusname)) *			
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(16)
				reply(`[] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/EditorBerkelasSerti/img.php?nama=${ct}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
				await limitAdd(sender)
				break
		case 'goodlooking': // Case By RzkyO & ItsmeikyXSec404 
		        //if (!isRegistered) return reply(ind.noregis())
                //if (isLimit(sender)) return reply(ind.limitend(pusname)) 					
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(13)
				reply(`[] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/GoodLookingSerti/img.php?nama=${ct}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'}) 
				await limitAdd(sender)
				break
		case 'fucekboy': // Case By RzkyO & ItsmeikyXSec404	
		        //if (!isRegistered) return reply(ind.noregis())
                //if (isLimit(sender)) return reply(ind.limitend(pusname)) 					
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(10)
				reply(`[] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/FucekBoySerti/img.php?nama=${ct}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
				await limitAdd(sender)
				break
		case 'jamet': // Case By RzkyO & ItsmeikyXSec404		
		        //if (!isRegistered) return reply(ind.noregis())
                //ir (isLimit(sender)) return reply(ind.limitend(pusname)) 				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(7)
				reply(`[] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/JametSerti/img.php?nama=${ct}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'}) 
				await limitAdd(sender)
				break
		case 'youtuber': // Case By RzkyO & ItsmeikyXSec404	 
		        //if (!isRegistered) return reply(ind.noregis())
                //if (isLimit(sender)) return reply(ind.limitend(pusname)) 					
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(10)
				reply(`[] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/YoutuberSerti/img.php?nama=${ct}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'}) 
				await limitAdd(sender)
				break
case 'togif':
case 'togip':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
                    if ((isMedia && !mek.message.videoMessage || isQuotedSticker)) {
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(lol).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".gif")
                        ini_txt = args.join(" ").split("|")
                        request({
                            url: `http://api.lolhuman.xyz/api/convert/togif?apikey=${apikey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            client.sendMessage(from, ini_buff, video, { quoted: mek, mimetype: "video/gif", filename: file_name })
                            fs.unlinkSync(file_name)
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
case 'stkmeme':
                if (!isQuotedImage) return reply('*Reply image nya!*')
                reply (mess.wait) 
                var gg = args.join(" ")
                var txt1 = gg.split("|")[0];
			    var txt2 = gg.split("|")[1];
                var imgbb = require('imgbb-uploader')
                if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                owgi = await client.downloadAndSaveMediaMessage(ger)
                anu = await imgbb("acf1ad5f22ad5822dc163cce74aedfd4", owgi)
                console.log(anu)
                stick = `${anu.display_url}`
                gif = await getBuffer(`https://api.memegen.link/images/custom/${txt1}/${txt2}.png?background=${stick}`)
                console.log(gif)
                client.sendMessage(from, gif, sticker, { quoted: mek })
                }
                break
case 'addtext': 
                if (args.length < 1) return reply(`*Usage*: ${prefix + command}memegen text | text\n*Example*: ${prefix + command} RIPAI | RIPAI`)
                            if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length > 2) {
                            	const arg1= body.substring(body.indexOf(' ') + 1)
                                const top = arg1.split('|')[0]
                                const bottom = arg1.split('|')[1]
                                const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace("quotedM","m")).message.extendedTextMessage.contextInfo : mek
                                const media = await client.downloadMediaMessage(encmedia, 'buffer')
                                getUrl = await uploadImages(media, false)
                                const memeRes = await custom(getUrl, top, bottom)
                                ma = getRandom('.png')
fs.writeFileSync('./'+ma,memeRes)
ran = getRandom('.webp')
await ffmpeg(`./${ma}`)
.input(ma)
.on('start', function (cmd) {
	console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
	console.log(`Error : ${err}`)
	fs.unlinkSync(ma)
	reply(mess.error.stick)
})
.on('end', function () {
	console.log('Finish')
	buff = fs.readFileSync(ran)
	client.sendMessage(from, buff, sticker, {quoted: mek})
	fs.unlinkSync(ma)
	fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
                            }
                            break
case 'swm':
encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace("quotedM","m")).message.extendedTextMessage.contextInfo : mek
media = await client.downloadMediaMessage(encmedia, 'buffer')
getUrl = await uploadImages(media, false)
iri = args.join(" ")
top = iri.split('|')[0];
bawah = iri.split('|')[1];
anu = await getBuffer(`http://lolhuman.herokuapp.com/api/convert/towebpauthor?apikey=${apikey}&img=${getUrl}&package=${top}&author=${bawah}`)
client.sendMessage(from, anu, sticker, { quoted: mek })
break
case 'upload':
encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace("quotedM","m")).message.extendedTextMessage.contextInfo : mek
media = await client.downloadMediaMessage(encmedia, 'buffer')
getUrl = await uploadImages(media, false)
reply(getUrl)
break

case 'meme':
				 
				if (isLimit(sender)) return reply(limitend(pushname2))
				reply('[❕] Sedang di proses.........')
					memein = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=${ZeksApi}`)
					buffer = await getBuffer(memein.result)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
					await limitAdd(sender)
					client.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
case 'searchsticker':
reply('wait!')
anu = await fetchJson(`https://api.xteam.xyz/sticker/stickerly?q=${args[0]}&APIKEY=FuzBot1`, {method:'get'})
buffer = await getBuffer(anu.result.stickerlist[0])
ma = getRandom('.png')
fs.writeFileSync('./'+ma,buffer)
ran = getRandom('.webp')
await ffmpeg(`./${ma}`)
.input(ma)
.on('start', function (cmd) {
	console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
	console.log(`Error : ${err}`)
	fs.unlinkSync(ma)
	reply(mess.error.stick)
})
.on('end', function () {
	console.log('Finish')
	buff = fs.readFileSync(ran)
	client.sendMessage(from, buff, sticker, {quoted: mek})
	fs.unlinkSync(ma)
	fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
break
case 'imagesearch':
sea = args.join(" ")
ima = await getBuffer(`http://lolhuman.herokuapp.com/api/gimage?apikey=${apikey}&query=${sea}`)
client.sendMessage(from, ima, image, { quoted: mek, caption: `Gambar di temukan` })
break
case 'nulis':
if (args.length < 1) return reply(`*Usage*: ${prefix + command} nama&kelas&kata\n*Example*: ${prefix + command} udin&20&udin`)
var bodi = args.join(" ")
var nama = bodi.split("&")[0];
var kelas = bodi.split("&")[1];
var textnya = bodi.split("&")[2];
anu = await getBuffer(`https://api.zeks.xyz/api/magernulis?nama=${nama}&kelas=${kelas}&text=${textnya}&tinta=4`)
client.sendMessage(from, anu, image, { quoted: mek })
break
case 'spamcall':
			try {
			if (isBanned) return reply(mess.only.benned)
			if (isLimit(sender)) return reply(limitend(pushname2))
			if (!isUser) return reply(mess.only.userB)
			
			call = `${body.slice(11)}`
			anu = await fetchFxc7(`https://videfikri.com/api/call/?nohp=${call}`, {method: 'get'})
			client.sendMessage(from, `${anu.result.logs}`, text, {quoted: mek})
			} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
			break
case 'darkjoke':
anu = await getBuffer(`http://lolhuman.herokuapp.com/api/meme/darkjoke?apikey=${apikey}`)
client.sendMessage(from, anu, image, { quoted: mek, caption: `...` })
break
case 'doge':
anu = await fetchJson(`http://leyscoders-api.herokuapp.com/api/anjing?apikey=freeKeY`, {method:'get'})
dia = await getBuffer(`${anu.result}`)
await ffmpeg(dia)
client.sendMessage(from, dia, sticker, { quoted: mek })
break
case 'kusonime':
                    ini_url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kusonime?apikey=${apikey}&url=${ini_url}`)
                    get_result = get_result.result
                    txt = `Title : ${get_result[0].title}\n`
                    txt += `Japanese : ${get_result[0].japanese}\n`
                    txt += `Genre : ${get_result[0].genre}\n`
                    txt += `Seasons : ${get_result[0].seasons}\n`
                    txt += `Producers : ${get_result[0].producers}\n`
                    txt += `Type : ${get_result[0].type}\n`
                    txt += `Status : ${get_result[0].status}\n`
                    txt += `Total Episode : ${get_result[0].total_episode}\n`
                    txt += `Score : ${get_result[0].score}\n`
                    txt += `Duration : ${get_result[0].duration}\n`
                    txt += `Released On : ${get_result[0].released_on}\n`
                    txt += `Desc : ${get_result[0].desc}\n`
                    link_dl = get_result[0].link_dl
                    for (var x in link_dl) {
                        txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    buffer = await getBuffer(get_result.thumbnail)
                    lolhuman.sendMessage(from, buffer, image, { quoted: lol, caption: txt })
                    break
                case 'brainly':
                reply('wait...')
                bren = args.join(" ")
                anu = await fetchJson(`https://api.xteam.xyz/brainly?soal=${bren}&APIKEY=FuzBot1`)
                teks = `*Jawaban*\n============================\n${anu.jawaban}`
                reply(teks)
                break
case 'listonline':
                if (!isGroupAdmins) return reply(ind.admin())
                let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
                let online = [...Object.keys(client.chats.get(ido).presences), client.user.jid]
                client.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, {
                    quoted: mek,
                    contextInfo: { mentionedJid: online }
                })
                break
case 'roundsticker':
                    if ((isMedia && !lol.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(lol).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        filePath = await lolhuman.downloadAndSaveMediaMessage(encmedia)
                        file_name = getRandom('.webp')
                        request({
                            url: `http://api.lolhuman.xyz/api/convert/towebpwround?apikey=${apikey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath)
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            lolhuman.sendMessage(from, ini_buff, sticker, { quoted: lol })
                            fs.unlinkSync(file_name)
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
                    }
                    break
 case 'bass':                 
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:false, quoted: mek})
						fs.unlinkSync(ran)
					})
				client.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
case 'slow':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:false, quoted: mek})
						fs.unlinkSync(ran)
					})
					break
                case 'kusonimesearch':
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kusonimesearch?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    txt = `Title : ${get_result.title}\n`
                    txt += `Japanese : ${get_result.japanese}\n`
                    txt += `Genre : ${get_result.genre}\n`
                    txt += `Seasons : ${get_result.seasons}\n`
                    txt += `Producers : ${get_result.producers}\n`
                    txt += `Type : ${get_result.type}\n`
                    txt += `Status : ${get_result.status}\n`
                    txt += `Total Episode : ${get_result.total_episode}\n`
                    txt += `Score : ${get_result.score}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `Released On : ${get_result.released_on}\n`
                    txt += `Desc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    buffer = await getBuffer(get_result.thumbnail)
                    lolhuman.sendMessage(from, buffer, image, { quoted: lol, caption: txt })
                    break
case 'playstore':
                    if (args.length == 0) return reply(`Example: ${prefix + command} telegram`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/playstore?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Play Store Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Name : ${x.title}\n`
                        ini_txt += `ID : ${x.appId}\n`
                        ini_txt += `Developer : ${x.developer}\n`
                        ini_txt += `Link : ${x.url}\n`
                        ini_txt += `Price : ${x.priceText}\n`
                        ini_txt += `Price : ${x.price}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'otakudesu':
                    ini_url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/otakudesu?apikey=${apikey}&url=${ini_url}`)
                    get_result = get_result.result
                    txt = `Title : ${get_result.title}\n`
                    txt += `Japanese : ${get_result.japanese}\n`
                    txt += `Judul : ${get_result.judul}\n`
                    txt += `Type : ${get_result.type}\n`
                    txt += `Episode : ${get_result.episodes}\n`
                    txt += `Aired : ${get_result.aired}\n`
                    txt += `Producers : ${get_result.producers}\n`
                    txt += `Genre : ${get_result.genres}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `Studios : ${get_result.status}\n`
                    txt += `Rating : ${get_result.rating}\n`
                    txt += `Credit : ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                        txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            info = get_link[x].link_dl[y]
                            txt += `\n\`\`\`Reso : \`\`\`${info.reso}\n`
                            txt += `\`\`\`Size : \`\`\`${info.size}\n`
                            txt += `\`\`\`Link : \`\`\`\n`
                            down_link = info.link_dl
                            for (var z in down_link) {
                                txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    reply(txt)
                    break
                case 'character':
                    ini_url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/character?apikey=${apikey}&query=${ini_url}`)
                    get_result = get_result.result
                    txt = `Title : ${get_result.media.nodes[1].title.romaji}\n`
                    txt += `Nama : ${get_result.name.full}\n`
                    txt += `Nama jepang : ${get_result.name.native}\n`
                    txt += `Deskripsi : ${get_result.description}\n`
                    txt += `Type : ${get_result.media.nodes[1].type}\n`
                    txt += `Favorit : ${get_result.favourites}`
                    buff = await getBuffer(get_result.image.medium)
                    client.sendMessage(from, buff, image, { quoted: mek, caption: txt })
                    break
                case 'otakudesusearch':
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/otakudesusearch?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    txt = `Title : ${get_result.title}\n`
                    txt += `Japanese : ${get_result.japanese}\n`
                    txt += `Judul : ${get_result.judul}\n`
                    txt += `Type : ${get_result.type}\n`
                    txt += `Episode : ${get_result.episodes}\n`
                    txt += `Aired : ${get_result.aired}\n`
                    txt += `Producers : ${get_result.producers}\n`
                    txt += `Genre : ${get_result.genres}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `Studios : ${get_result.status}\n`
                    txt += `Rating : ${get_result.rating}\n`
                    txt += `Credit : ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                        txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            info = get_link[x].link_dl[y]
                            txt += `\n\`\`\`Reso : \`\`\`${info.reso}\n`
                            txt += `\`\`\`Size : \`\`\`${info.size}\n`
                            txt += `\`\`\`Link : \`\`\`\n`
                            down_link = info.link_dl
                            for (var z in down_link) {
                                txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    reply(txt)
                    break
case 'nekopoi':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} https://nekopoi.care/isekai-harem-monogatari-episode-4-subtitle-indonesia/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nekopoi?apikey=${apikey}&url=${ini_url}`)
                    get_result = get_result.result
                    txt = `Title : ${get_result.anime}\n`
                    txt += `Porducers : ${get_result.producers}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `Size : ${get_result.size}\n`
                    txt += `Sinopsis : ${get_result.sinopsis}\n`
                    link = get_result.link
                    txt+= `Link : ${link[0].link.GoogleDrive2}`
                    reply(txt)
                    break
                case 'nekosearch':
                if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} isekai harem`)
                    ini_url = args.join(" ")
                    get_result = fetchJson(`https://lolhuman.herokuapp.com/api/nekopoisearch?apikey=${apikey}&query=${ini_url}`)
                    get_result = get_result.result[0]
                    txt = `Title : ${get_result.title}\n`
                    txt += `Link : ${get_result.link}`
                    buffer = await getBuffer(get_result.thumbnail)
                    lolhuman.sendMessage(from, buffer, image, { quoted: lol, caption: txt })
                    break
                    case 'spotify':
                    url = args.join(" ")
                    get_result = fetchJson(``)
                    get_result = get_result.result
                    txt = `Title : ${get_result.title}\n`
                    txt += `Artists : ${get_result.artists}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `Popularity : ${get_result.popularity}\n`
                    txt += `Preview : ${get_result.preview_url}\n`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    lolhuman.sendMessage(from, thumbnail, image, { quoted: lol, caption: txt })
                    get_audio = await getBuffer(get_result.link[3].link)
                    lolhuman.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: lol })
                    break
                case 'spotifysearch':
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/spotifysearch?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    txt = ""
                    for (var x in get_result) {
                        txt += `Title : ${get_result[x].title}\n`
                        txt += `Artists : ${get_result[x].artists}\n`
                        txt += `Duration : ${get_result[x].duration}\n`
                        txt += `Link : ${get_result[x].link}\n`
                        txt += `Preview : ${get_result[x].preview_url}\n\n\n`
                    }
                    reply(txt)
                    break
                 case 'hek':
            if (args.length < 1) return reply(`*Format Anda Salah!!* \n\nExample :\n${prefix}fakedeface https://google.com | Hacked by Nama lu | Deskripsi`)
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage)) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace("quotedM","m")).message.extendedTextMessage.contextInfo : mek
                        const media = await client.downloadMediaMessage(encmedia, 'buffer')
                        const arg = body.substring(body.indexOf(' ') + 1)
                        entah = args[0]
                        var ggh = body.slice(5)
				        var txtvzv1 = ggh.split("|")[0];
				        var txsbsvbst2 = ggh.split("|")[1];
				        var txthsbd3 = ggh.split("|")[2];
                        let hsL = await client.generateLinkPreview(entah)
                        hsL.title = txt1
                        hsL.description = txt2
                        hsL.jpegThumbnail = media 
                        hsL.canonicalUrl = txt3
                        client.sendMessage(from, hsL, extendedText, {quoted:mek, detectLinks: false})
                    } else if (isQuotedSticker) {
                        const encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM","m")).message.extendedTextMessage.contextInfo
                        const media = await client.downloadMediaMessage(encmedia, 'buffer')
                        entah = args[0]
                        let hsL = await client.generateLinkPreview(entah)
                        hsL.title = txt1
                        hsL.description = txt2
                        hsL.jpegThumbnail = media 
                        hsL.canonicalUrl = txt3
                        client.sendMessage(from, hsL, extendedText, {detectLinks: false, quoted: mek})
                    } else {
                        entah = args[0]
                        let hsL = await client.generateLinkPreview(entah)
                        hsL.title = txt1
                        hsL.description = txt2
                        hsL.jpegThumbnail = media
                        hsL.canonicalUrl = txt3
                        client.sendMessage(from, hsL, extendedText, {detectLinks: false, quoted: mek})
                    }
                    reply('\`\`\`Sucess Hacked Web!!\`\`\`')
                    break
                 case 'nhentaipdf':
                    henid = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=${apikeyl}`)
                    get_result = get_result.result
                    buffer = await getBuffer(get_result)
                    client.sendMessage(from, buffer, document, { quoted: lol, mimetype: Mimetype.pdf, filename: `${henid}.pdf` })
                    break
                case 'antidelete': //Fix By ITSMAZGH
				const dataRevoke = JSON.parse(fs.readFileSync('./lib/gc-revoked.json'))
				const dataCtRevoke = JSON.parse(fs.readFileSync('./lib/ct-revoked.json'))
				const dataBanCtRevoke = JSON.parse(fs.readFileSync('./lib/ct-revoked-banlist.json'))
				const isRevoke = dataRevoke.includes(from)
				const isCtRevoke = dataCtRevoke.data
				const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
				const argz = body.split(' ')
				if (argz.length === 1) return client.sendMessage(from, `Penggunaan fitur antidelete :\n\n*${prefix}antidelete [aktif/mati]* (Untuk grup)\n*${prefix}antidelete [ctaktif/ctmati]* (untuk semua kontak)\n*${prefix}antidelete banct 628558xxxxxxx* (banlist kontak)`, MessageType.text)
				if (argz[1] == 'aktif') {
					if (isGroup) {
						if (isRevoke) return client.sendMessage(from, `Antidelete telah diaktifkan di grup ini sebelumnya!`, MessageType.text)
						dataRevoke.push(from)
						fs.writeFileSync('./lib/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						client.sendMessage(from, `*Succes Enable Antidelete Grup!*`, MessageType.text)
					} else if (!isGroup) {
						client.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctaktif*`, MessageType.text)
					}
				} else if (argz[1] == 'ctaktif') {
					if (!isGroup) {
						if (isCtRevoke) return client.sendMessage(from, `Antidelete telah diaktifkan di semua kontak sebelumnya!`, MessageType.text)
						dataCtRevoke.push = false
						fs.writeFileSync('./lib/ct-revoked.json', JSON.stringify(dataCtRevoke))
						client.sendMessage(from, `Antidelete diaktifkan disemua kontak!`, MessageType.text)
					} else if (isGroup) {
						client.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete aktif*`, MessageType.text)
					}
				} else if (argz[1] == 'banct') {
					if (isBanCtRevoke) return client.sendMessage(from, `kontak ini telah ada di database banlist!`, MessageType.text)
					if (argz.length === 2 || argz[2].startsWith('0')) return client.sendMessage(from, `Masukan nomer diawali dengan 62! contoh 62859289xxxxx`, MessageType.text)
					dataBanCtRevoke.push(argz[2] + '@s.whatsapp.net')
					fs.writeFileSync('./lib/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke, null, 2))
					client.sendMessage(from, `Kontak ${argz[2]} telah dimasukan ke banlist antidelete secara permanen!`, MessageType.text)
				} else if (argz[1] == 'mati') {
					if (isGroup) {
						const index = dataRevoke.indexOf(from)
						dataRevoke.splice(index, 1)
						fs.writeFileSync('./lib/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						client.sendMessage(from, `*Succes disable Antidelete Grup!*`, MessageType.text)
					} else if (!isGroup) {
						client.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctmati*`, MessageType.text)
					}
				} else if (argz[1] == 'ctmati') {
					if (!isGroup) {
						dataCtRevoke.push = true
						fs.writeFileSync('./lib/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						client.sendMessage(from, `Antidelete dimatikan disemua kontak!`, MessageType.text)
					} else if (isGroup) {
						client.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete mati*`, MessageType.text)
					}
				}
				break
                case 'tiktok':
					if (args.length < 1) return reply('Urlnya mana gan?')
					if (!isUrl(args[0]) && !args[0].includes('vt')) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://api.zeks.xyz/api/tiktok?link=${args[0]}&apikey=apivinz`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result.video)
					client.sendMessage(from, buffer, video, {quoted: mek})
					break
                 case 'tiktokstalk':
const tiktod = require('tiktok-scraper')
					try {
						if (args.length < 1) return client.sendMessage(from, 'Usernamenya mana um?', text, {quoted: mek})
						let { user, stats } = await tiktod.getUserProfileInfo(args[0])
						reply(mess.wait)
						teks = `*ID* : ${user.id}\n*Username* : ${user.uniqueId}\n*Nickname* : ${user.nickname}\n*Followers* : ${stats.followerCount}\n*Followings* : ${stats.followingCount}\n*Posts* : ${stats.videoCount}\n*Luv* : ${stats.heart}\n`
						buffer = await getBuffer(user.avatarLarger)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('Kemungkinan username tidak valid')
					}
					break
case 'kicktime':
					if (isBanned) return reply(mess.only.benned)
					if (!isUser) return reply(mess.only.userB)
					
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					setTimeout( () => {
					client.sendMessage(from, 'Yok Sama" Al-fatihah', text)
					}, 8000)
					setTimeout( () => {
					reply('sukses min:D')
					}, 7000)
					setTimeout( () => {
					client.groupRemove(from, mentioned)
					}, 6000)
					setTimeout( () => {
					client.sendMessage(from, `Bismilah Kick @${mentioned[0].split('@')[0]}`, text) // ur cods
					}, 5000)
					setTimeout( () => {
					client.sendMessage(from, 'Asikkk Dapet Makanan nihh:D', text)
					}, 2500)
					setTimeout( () => {
					reply('Perintah Diterima min:D')
					}, 0)
					break
                case 'xnxx':
                if (!isGroupAdmins) return reply(mess.only.admin)
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} Japanese`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xnxx?apikey=${apikeyl}&url=${query}`)
                    get_result = get_result.result
                    txt = `Title : ${get_result.title}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `View : ${get_result.title}\n`
                    txt += `Rating : ${get_result.rating}\n`
                    txt += `Like : ${get_result.like}\n`
                    txt += `Dislike : ${get_result.dislike}\n`
                    txt += `Comment : ${get_result.comment}\n`
                    txt += `Tag : ${get_result.tag.join(", ")}\n`
                    txt += `Description : ${get_result.description}\n`
                    txt += "Link : \n"
                    link = get_result.link
                    for (var x in link) {
                        txt += `${link[x].type} - ${link[x].link}\n\n`
                    }
                    thumbnail = await getBuffer(get_result.thumbnail)
                    lolhuman.sendMessage(from, thumbnail, image, { quoted: lol, caption: txt })
                    break
case 'selsf':
if (args.length < 1) return reply(`*Pilih false / true*`)
selfnya = args.join(" ")
reply(`*self = ${args[0]}*`)
break
                case 'neko':
                case 'waifu':
                case 'loli':
                case 'chiisaihentai':
                case 'trap':
                case 'blowjob':
                case 'yaoi':
                case 'ecchi':
                case 'hentai':
                case 'ahegao':
                case 'hololewd':
                case 'sideoppai':
                case 'animefeets':
                case 'animebooty':
                case 'animethighss':
                case 'hentaiparadise':
                case 'animearmpits':
                case 'hentaifemdom':
                case 'lewdanimegirls':
                case 'biganimetiddies':
                case 'animebellybutton':
                case 'hentai4everyone':
                if (!isNsfw) return reply(`Admin tidak mengaktifkan nsfw\n Jika ingin mengaktifkan ketik ${prefix}nsfw 1`)
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${apikeyl}`)
                    lolhuman.sendMessage(from, buffer, image, { quoted: lol })
                    break
				case 'meme':
					meme = await fetchJson('https://kagchi-api.glitch.me/meme/memes', { method: 'get' })
					buffer = await getBuffer(`https://imgur.com/${meme.hash}.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
					break
				case 'memeindo':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://imgur.com/${memein.hash}.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
					break
				case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					prefix = args[0]
					setting.prefix = prefix
					fs.writeFileSync('./${prefix}', JSON.stringify(setting, null, '\t'))
					reply(`Prefix berhasil di ubah menjadi : ${prefix}`)
					break
				case 'loli':
					loli.getSFWLoli(async (err, res) => {
						if (err) return reply('❌ *ERROR* ❌')
						buffer = await getBuffer(res.url)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ingat! Citai Lolimu'})
					})
					break
				case 'nsfwloli':
					if (!isNsfw) return reply('❌ *FALSE* ❌')
					loli.getNSFWLoli(async (err, res) => {
						if (err) return reply('❌ *ERROR* ❌')
						buffer = await getBuffer(res.url)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
					})
					break
				case 'hilih':
memew = await fetchJson(`http://hadi-api.herokuapp.com/api/hilih?teks=${q}`)
reply(memew.result)
break
case 'halah':
memew = await fetchJson(`http://hadi-api.herokuapp.com/api/halah?teks=${q}`)
reply(memew.result)
break
				case 'yt2mp3':
					if (args.length < 1) return reply('Urlnya mana um?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					anu = await fetchJson(`https://mhankbarbar.tech/api/yta?url=${args[0]}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.title}\n*Filesize* : ${anu.filesize}`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
					break
                case 'tebakgambar': // case by piyo remake Ryz
                    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
                    get_result = await fetchJson(`https://videfikri.com/api/tebakgambar/`)
                    result = get_result.result
                    ini_image = result.soal_gbr
                    jawaban = result.jawaban
                    tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./database/user/tebakgambar.json", JSON.stringify(tebakgambar))
                    console.log(jawaban)
                    ini_buffer = await getBuffer(ini_image)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek, caption: "Jawab jawab jawabbb" })
                    await sleep(30000)
                    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
                        reply("Jawaban: " + jawaban)
                        delete tebakgambar[sender.split('@')[0]]
                        fs.writeFileSync("./database/user/tebakgambar.json", JSON.stringify(tebakgambar))
                    }
                    break
                case 'tebakkata':
				    anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/tebak-kata?apikey=freeKeY`, {method:'get'})
				    soal = anu.result.soal
				    jawaban = anu.result.jawaban
				    soalnye = `Soalnya = ${soal}`
				    if (chat.includes('Nyerah')){
					reply('*Jawaban* = ${jawaban}')
					}
					client.sendMessage(from, soalnye, text, { quoted: mek }) // ur code
				    if (budy.includes(anu.result.jawaban)) {
					reply('benar')
				    }
				    setTimeout( () => {
					client.sendMessage(from, '*Jawaban :* '+ anu.result.jawaban +'\n', text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi_', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi_', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					}, 0) // 1000 = 1z,
					break
                 case 'caklontong':
				    anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/caklontong2?apikey=${apikey}`, {method:'get'})
				    setTimeout( () => {
					client.sendMessage(from, '* Jawaban :* '+ anu.result.answer +'\n' + anu.result.information, text, {quoted: mek}) // ur cods
					}, 50000) // 1000 = 1s
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi_', text) // ur cods
					}, 40000) // 1000 = 1s,
                    setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi_', text) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_40 Detik lagi_', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_50 Detik lagi_', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
						if (budy.includes == anu.result.jawaban) {
							reply('benar')
							    }
					client.sendMessage(from, anu.result.question, text)
					}, 0) // 1000 = 1z,
					break
                case 'family100':
				    dataae = await fetchJson(`http://api.lolhuman.xyz/api/tebak/family100?apikey=${apikey}`, {method:'get'})
				    setTimeout( () => {
					client.sendMessage(from, '* Jawaban :* '+ dataae.result.jawaban +'\n', text, {quoted: mek}) // ur cods
					}, 50000) // 1000 = 1s
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi_', text) // ur cods
					}, 40000) // 1000 = 1s,
                    setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi_', text) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_40 Detik lagi_', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_50 Detik lagi_', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
						if (budy.includes == dataae.result.jawaban) {
							reply('benar')
							    }
					client.sendMessage(from, dataae.result.soal, text)
					}, 0) // 1000 = 1z,
					break
                case 'ytplay':
                if (!isOwner) return reply(mess.only.ownerB)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytplay?apikey=${apikeyl}&query=${query}`)
                    get_result = get_result.result
                    get_info = get_result.info
                    txt = `Title : ${get_info.title}\n`
                    txt += `Uploader : ${get_info.uploader}\n`
                    txt += `Duration : ${get_info.duration}\n`
                    txt += `View : ${get_info.view}\n`
                    txt += `Like : ${get_info.like}\n`
                    txt += `Dislike : ${get_info.dislike}\n`
                    txt += `Description :\n ${get_info.description}\n`
                    buffer = await getBuffer(get_info.thumbnail)
                    lolhuman.sendMessage(from, buffer, image, { quoted: lol, caption: txt })
                    get_audio = await getBuffer(get_result.audio[3].link)
                    lolhuman.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_info.title}.mp3`, quoted: lol })
                    break
case 'music':
if (args.length < 1) return reply('masukan nama lagu')
reply('Wait!')
                    query = args.join(" ")
                    get_result = await fetchJson(`https://videfikri.com/api/ytplay/?query=${query}`)
                    result = await fetchJson(`https://videfikri.com/api/liriklagu/?query=${query}`)
                    get_info = get_result.result
                    txt = `Title : ${get_info.title}\n`
                    txt += `Uploader : ${get_info.channel}\n`
                    txt += `Duration : ${get_info.duration}\n`
                    txt += `View : ${get_info.views}\n`
                    txt += `Size : ${get_info.size}\n`
                    txt += `Lirik :\n ${result.result.lirik}\n`
                    txt += `Link : ${get_info.url}`
                    lolhuman.sendMessage(from, txt, text, { quoted: mek })
                    await limitAdd(sender)
                    break
case 'mpjsjsjs3':
if (args.length < 1) return reply('urlnya?')
query = args.join(" ")
au = await fetchJson(`https://api.zeks.xyz/api/ytmp3/2?url=${query}&apikey=apivinz`, {method: 'get'})
anu = au.result
await faketoko(teks = `Size : ${au.result.size} \n Link : ${au.result.link}\n Gunakan Link di atas apabila bot tidak merespon`, url_image = `${au.result.thumb}`, title = `${au.result.title}`, code = "IDR", price = 1000000)
					buffe = await getBuffer(au.link)
					client.sendMessage(from, buffe, audio, { mimetype: 'audio/mp4', filename: `${au.title}.mp3`, quoted: mek })
break
                case 'getpp':
                ppimg = getBuffer(client.getProfilePicture(`${sender.split('@')[0]}@c.us`))
                client.sendMessage(from, ppimg, image, { quoted: mek })
                break
		        case 'ytsearch':
					if (args.length < 1) return reply('Yang mau di cari apaan?')
					anu = await fetchJson(`https://videfikri.com/api/ytsearch/?query=${body.slice(10)}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					nomore = '0'
					teks = '=================\nGunakan /getaudio <urutan> atau /getmusic <id>\n\n'
					for (let i of anu.result.data) {
						teks += `\n*Urutan* : ${nomore}\n*Title* : ${i.judul}\n*Id* : ${i.id}\n*Pengupload* : ${i.channel}\n*Duration* : ${i.duration}\n*Views* : ${i.views}\n=================\n`
						nomore++
					}
					await reply(teks.trim())
					case 'getaudio': //By Radya&RIPAI Jan ilangin ajg
					aud = args[0]
					nu = await fetchJson(`https://api.xteam.xyz/dl/ytmp3?url=https://youtu.be/${anu.result.data[aud].id}&APIKEY=FuzBot1`)
					katanya = `*Lagu di temukan*\nJudul : ${nu.judul}\nSize : ${nu.size}\n*Tunggu sedang mengirim lagu mungkin cukup lama*`
					if (Number(nu.size.split(' MB')[0]) >= 8.0) reply(`Maaf durasi music sudah melebihi batas maksimal 10 MB!`)
					thumb = await getBuffer(nu.thumbnail)
					client.sendMessage(from, thumb, image, { quoted: mek, caption: katanya })
					buffer = await getBuffer(nu.url)
					client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${nu.title}.mp3`, quoted: mek})
					await limitAdd(sender)
					break
case 'getmusic':
                if (args.length < 1) return reply(`id nya mana? ketik ${prefix}ytsearch buat dapet id`)
                reply('wait!!')
                try { 
                    music = args[0]
					anu = await fetchJson(`http://api.lolhuman.xyz/api/ytaudio?apikey=${apikey}&url=https://youtu.be/${music}`, {method: 'get'})
					musk = anu.result.link[0].size
					katanya = `*Lagu di temukan*\nJudul : ${anu.result.title}\nDurasi : ${anu.result.duration}\nDeskripsi : ${anu.result.description}\n*Tunggu sedang mengirim lagu mungkin cukup lama*`
					if (Number(musk.split(' MB')[0]) >= 8.00) reply(`Maaf durasi music sudah melebihi batas maksimal 10 MB!\nDownload sediri kouta mahal \n${anu.result.link[0].link}`)
					thumb = await getBuffer(anu.result.thumbnail)
					client.sendMessage(from, thumb, image, { quoted: mek, caption: katanya })
					buffer = await getBuffer(anu.result.link[0].link)
					client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: mek})
					} catch (e) {
					reply('Kemungkinan Id Tidak Valid')
					}
					await limitAdd(sender)
					break
case 'viesw':
                case 'fetcxh':
if (!isOwner) return reply(ind.ownerb())
teks = args.join(' ')
var ress = await fetch(teks)
  if (!/text|json/.test(res.headers.get('content-type'))) 
var txst = await res.buffer()
  try {
    txt = util.format(JSON.parse(txt+''))
  } catch (e) {
    txt = txt + ''
    console.log(e)
  } finally {
   // reply(txt.slice(0, 65536) + '')
   client.sendMessage(from, txt.slice(0, 65536) + '', MessageType.extendedText, { quoted: mek})
  }
break
case 'public':
          	if (mek.key.fromMe) return
          	uptime = process.uptime()
          	// var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
              banChats = false
          	client.sendMessage(from, `「 *public bot* 」`, text)
          	break
		case 'self':
          	if (mek.key.fromMe) return
          	uptime = process.uptime()
              banChats = true
         	 // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
          	client.sendMessage(from, `「 *only self* 」`, text)
          	break
case 'playmp3':
                if (args.length < 1) return reply(`query nya mana? ketik ${prefix}playmp3 judul lagu`)
                reply('Tunggu kak')
					anu = await fetchJson(`https://xinzbot-api.herokuapp.com/api/ytplaymp3/?q=${q}&apikey=XinzBot`, {method: 'get'})
					if (Number(anu.result.filesize.split(' MB')[0]) >= 8.00) reply(`Maaf durasi music sudah melebihi batas maksimal`)
					teks = `*Lagu di temukan*\nJudul : ${anu.result.title}\n*Size* : ${anu.result.filesize}\n*Tunggu sedang mengirim lagu mungkin cukup lama*`
					buffer = await getBuffer(anu.result.link)
					reply(teks)
					client.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', filename: `pepe.mp3`, quoted: mek })
					break
case 'mp3':
if (args.length < 1) return reply(`url nya um?`)
reply('Tunggu ya kak')
au = await fetchJson(`http://api.lolhuman.xyz/api/ytaudio?apikey=${apikey}&url=${q}`, {method: 'get'})
anu = au.result
					buffe = await getBuffer(anu.link[4].link)
					client.sendMessage(from, buffe, audio, { mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek })
					break
case 'mp3vn':
if (args.length < 1) return reply(`url nya um?`)
reply('Tunggu ya kak')
anu = await fetchJson(`https://lindow-api.herokuapp.com/api/ytmp3?link=${q}&apikey=megacantik`, {method: 'get'})
					teks = `*Lagu di temukan*\nJudul : ${anu.title}\n*Tunggu sedang mengirim lagu mungkin cukup lama*`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, teks, text, { quoted: mek })
					buffer = await getBuffer(anu.dl_link)
					client.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek, ptt: true })
					break
case 'audio':
reply('wait')
try {
buff = await getBuffer(args[0])
client.sendMessage(from, buff, audio, { mimetype: 'audio/mp4', filename: 'nih.mp3', quoted: mek })
} catch {
reply('Mungkin link bukan audio')
}
break
case 'img':
reply('waitt')
buff = await getBuffer(args[0])
client.sendMessage(from, buff, image, { quoted: mek })
break
case 'playvn':
           reply(`Tunggu kak`)
           plan = await fetchJson(`https://api.xteam.xyz/dl/play?lagu=${q}&APIKEY=FuzBot1`)
	       if (Number(plan.size.split(' MB')[0]) >= 6.0){ 
           reply('Maaf durasi music sudah melebihi batas maksimal')
           }
	       media = await getBuffer(plan.url)
           katanya = `Judul : ${plan.judul}\nSource : ${plan.source}`
           reply(katanya)
           client.sendMessage(from, media, audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true})
           break
                case 'nsfwcheck':
                    if ((isMedia && !lol.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(lol).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        const filePath = await lolhuman.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        const form = new FormData();
                        const stats = fs.statSync(filePath);
                        const fileSizeInBytes = stats.size;
                        const fileStream = fs.createReadStream(filePath);
                        form.append('img', fileStream, { knownLength: fileSizeInBytes });
                        const options = {
                            method: 'POST',
                            credentials: 'include',
                            body: form
                        }
                        get_result = await fetchJson(`http://api.lolhuman.xyz/api/nsfwcheck?apikey=${apikeyl}`, {...options })
                        fs.unlinkSync(filePath)
                        get_result = get_result.result
                        is_nsfw = "No"
                        if (Number(get_result.replace("%", "")) >= 50) is_nsfw = "Yes"
                        reply(`Is NSFW? ${is_nsfw}\nNSFW Score : ${get_result}`)
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
                case 'img2url':
			case 'imagetourl':
					reply(mess.wait)
            var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            var media = await  client.downloadAndSaveMediaMessage(encmedia)
            var imgbb = require('imgbb-uploader')
            imgbb('acf1ad5f22ad5822dc163cce74aedfd4', media)
            getUrl = await uploadImages(media, false)
                .then(data => {
                    var caps = ` *IMAGE TO URL* \n\n*  ID :* ${data.id}\n*  MimeType :* ${data.image.mime}\n*  Extension :* ${data.image.extension}\n\n*  URL :* ${data.display_url}`
                    ibb = fs.readFileSync(media)
                     client.sendMessage(from, caps, text, { quoted: mek })
                })
                .catch(err => {
                    throw err
                })
            break
				case 'tiktvsvsbsbsok':
					if (args.length < 1) return reply('Urlnya mana um?')
					if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbar.tech/api/tiktok?url=${args[0]}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, video, {quoted: mek})
					break
				case 'tiktokstalk':
					try {
						if (args.length < 1) return client.sendMessage(from, 'Usernamenya mana um?', text, {quoted: mek})
						let { user, stats } = await tiktod.getUserProfileInfo(args[0])
						reply(mess.wait)
						teks = `*ID* : ${user.id}\n*Username* : ${user.uniqueId}\n*Nickname* : ${user.nickname}\n*Followers* : ${stats.followerCount}\n*Followings* : ${stats.followingCount}\n*Posts* : ${stats.videoCount}\n*Luv* : ${stats.heart}\n`
						buffer = await getBuffer(user.avatarLarger)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('Kemungkinan username tidak valid')
					}
					break
case 'virtex':
                   
				 
				 
				if (!isGroup) return reply(ind.groupo())
					await fetchJson(virtex(pushname, prefix, getLevelingLevel, sender, _registered), text)
					await limitAdd(sender)
					client.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
                case 'virtex2':
                   
				 
				 
				if (!isGroup) return reply(ind.groupo())
					await costum(virtex2(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					await limitAdd(sender)
					client.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
				case 'nulis':
				case 'tulis':
					if (args.length < 1) return reply('Yang mau di tulis apaan?')
					teks = body.slice(7)
					reply(mess.wait)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/nulis?apikey=${apikey}&text=${teks}`)
					if (anu.error) return reply(anu.error)
					buff = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {quoted: mek, caption: mess.success})
					break
				case 'url2img':
					tipelist = ['desktop','tablet','mobile']
					if (args.length < 1) return reply('Tipenya apa um?')
					if (!tipelist.includes(args[0])) return reply('Tipe desktop|tablet|mobile')
					if (args.length < 2) return reply('Urlnya mana um?')
					if (!isUrl(args[1])) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbar.tech/api/url2image?tipe=${args[0]}&url=${args[1]}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buff = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {quoted: mek})
					break
				case 'tstiker':
				case 'tsticker':
					if (args.length < 1) return reply('Textnya mana um?')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(9).trim()
					anu = await fetchJson(`https://mhankbarbar.tech/api/text2image?text=${teks}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						exec(`webpmux -set exif ${addMetadata('BOT', authorname)} ${rano} -o ${rano}`, async (error) => {
							if (error) return reply(mess.error.stick)
							client.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
							fs.unlinkSync(rano)
						})
						/*client.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
						fs.unlinkSync(rano)*/
					})
					break
				case 'tagall':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*#* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
                                case 'tagall2':
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					reply(teks)
					break
                                case 'tagall3':
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `╠➥ https://wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					client.sendMessage(from, teks, text, {detectLinks: false, quoted: mek})
					break
				case 'clearall':
					if (!isOwner) return reply('Kamu siapa?')
					anu = await client.chats.all()
					client.setMaxListeners(25)
					for (let _ of anu) {
						client.deleteChat(_.jid)
					}
					reply('Sukses delete all chat :)')
					break
				case 'bc':
					if (!isOwner) return reply('Kamu siapa?')
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `[ Ini Broadcast ]\n\n${body.slice(4)}`})
						}
						reply('Suksess broadcast')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[ Ini Broadcast ]\n\n${body.slice(4)}`)
						}
						reply('Suksess broadcast')
					}
					break
                                case 'promote':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Promote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(from, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Berhasil Promote @${mentioned[0].split('@')[0]} Sebagai Admin Group!`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break
				case 'demote':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Demote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Berhasil Demote @${mentioned[0].split('@')[0]} Menjadi Member Group!`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'add':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
				case 'kick':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 ??𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱?? 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `𝗔𝘀𝗲𝗸 𝗱𝗮𝗽𝗮𝘁 𝗺𝗮𝗸𝗮𝗻𝗮𝗻,𝗼𝘁𝘄 𝗸𝗶𝗰𝗸 🏃 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`ASEK DAPAT MAKANAN , OTW KICK @${mentioned[0].split('@')[0]} ??`, mentioned, true)
						client.groupRemove(from, mentioned)
					}
					break
case 'setnamegc':
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
                client.groupUpdateSubject(from, `${body.slice(11)}`)
                client.sendMessage(from, 'Succes, Ganti Nama Grup', text, {quoted: mek})
					break
                case 'setdescgc':
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
                client.groupUpdateDescription(from, `${body.slice(11)}`)
                client.sendMessage(from, 'Succes, Ganti Deskripsi Grup', text, {quoted: mek})
					break
				case 'listadmins':
					if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
                case 'linkgroup':
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    linkgc = await client.groupInviteCode(from)
                    reply('https://chat.whatsapp.com/'+linkgc)
                    break
case 'joingc':
codeInvite = body.slice(32)
response = await client.acceptInvite(codeInvite)
reply('Done!!!')
console.log(response)
break
                case 'leave':
                    if (!isGroup) return reply(mess.only.group)
                    if (isGroupAdmins || isOwner) {
                    	client.groupLeave(from)
                    } else {
                        reply(mess.only.admin)
                    }
                    break
				case 'toimg':
				 
				 
				 
				if (!isQuotedSticker) return reply('Reply atau Tag sticker yang mau dijadiin gambar kak >_<')
					 reply(`[❕] Sedang di proses.........`)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'nih kak [(^.^)]'})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender)
					client.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
case 'hartatahta':
				
				if (!isRegistered) return reply(ind.noregis())
			   //if (isBanned) return reply('Maaf kamu sudah terbenned!'
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Teksnya Mana Cuy?\nContoh : ${prefix}hartatahta RifaiGanz`)
				dapuhy = body.slice(11)
				reply(ind.wait())
				asu = await getBuffer(`https://api.zeks.xyz/api/hartatahta?text=${dapuhy}&apikey=apivinz`)
				client.sendMessage(from, asu, image, {quoted: mek})
				await limitAdd(sender)
				break
				case 'simih':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('Mode simi sudah aktif')
						samih.push(from)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Sukses mengaktifkan mode simi di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Sukes menonaktifkan mode simi di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
				case 'welcome':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Udah aktif um')
						welkom.push(from)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
                                      break
case 'ktpmeker':
if (args.length < 1) return reply('gunakan /ktpmaker nik|prov|kabupaten|nama|tempat lahir dan tanggal lahir|jenis kelamin|alamat|lurah|camat|agama|nikah|kerja|kewarganegaraan|aktif sampai')
encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace("quotedM","m")).message.extendedTextMessage.contextInfo : mek
media = await client.downloadMediaMessage(encmedia, 'buffer')
getUrl = await uploadImages(media, false)
var awal = args.join(" ")
var kata1 = awal.split("|")[0];
var kata2 = awal.split("|")[1];
var kata3 = awal.split("|")[2];
var kata4 = awal.split("|")[3];
var kata5 = awal.split("|")[4];
var kata6 = awal.split("|")[5];
var kata7 = awal.split("|")[6];
var kata8 = awal.split("|")[7];
var kata9 = awal.split("|")[8];
var kata10 = awal.split("|")[9];
var kata11 = awal.split("|")[10];
var kata12 = awal.split("|")[11];
var kata13 = awal.split("|")[12];
var kata14 = awal.split("|")[13];
buper = await getBuffer(`http://lolhuman.herokuapp.com/api/ktpmaker?apikey=${apikey}&nik=${kata1}&prov=${kata2}&kabu=${kata3}&name=${kata4}&ttl=${kata5}&jk=${kata6}&jl=${kata7}&lurah=${kata8}&camat=${kata9}&agama=${kata10}&nikah=${kata11}&kerja=${kata12}&warga=${kata13}&until=${kata14}&img=${getUrl}`)
client.sendMessage(from, buper, image, { quoted: mek, caption: `hati hati ke tauan` })
break
case 'nsfw':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Udah aktif um')
					    nsfw.push(from)
						fs.writeFileSync('./src/nsfw.json', JSON.stringify(welkom))
						reply('Sukses mengaktifkan fitur nsfw di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./src/nsfw.json', JSON.stringify(welkom))
						reply('Sukses menonaktifkan fitur nsfw di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
                                      break
                    case 'grup':
					case 'group':			
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args[0] === 'buka') {
					    reply(`*BERHASIL MEMBUKA GROUP*`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`*BERHASIL MENUTUP GROUP*`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					client.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})
break
                 case 'ncheck':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Text nya ilang ya')
					if (Number(args[0]) === 1) {
						if (isCheck) return reply('Udah aktif um')
						ncheck.push(from)
						fs.writeFileSync('./ncheck.json', JSON.stringify(welkom))
						reply('Sukses mengaktifkan fitur nsfwcheck di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						ncheck.splice(from, 1)
						fs.writeFileSync('./ncheck.json', JSON.stringify(welkom))
						reply('Sukses menonaktifkan fitur nsfwcheck di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
                                      break
case 'test':
encmedia = mek
media = await client.downloadAndSaveMediaMessage(encmedia)
const model = await nsfwjs.load()
predictions = await model.classify(media)
console.log('Predictions: ', predictions)
fs.unlinkSync(media)
break
case 'autosticker':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isAuto) return reply('Udah aktif um')
						autosticker.push(from)
						fs.writeFileSync('./autosticker.json', JSON.stringify(autosticker))
						reply('Sukses mengaktifkan fitur autosticker di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						autosticker.splice(from, 1)
						fs.writeFileSync('./autosticker.json', JSON.stringify(autosticker))
						reply('Sukses menonaktifkan fitur autosticker di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
                                      break
				case 'clone':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Tag target yang ingin di clone')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await client.getProfilePicture(id)
						buffer = await getBuffer(pp)
						client.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('Gagal om')
					}
					break
				case 'wait':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(mess.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await client.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							client.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply('Foto aja mas')
					}
					break
				default:
				if (budy.includes('Owner mu')) {
reply('owner ku RIFAI v:')
}
if (budy.match('refix')){
reply(`Prefix yang digunakan adalah *${prefix}*`)
}
if (budy.match('ajg')){ 
reply('dosa bro')
} 
if (budy.match('Ajg')){
reply('dosa bro')
} 
if (budy.match('kontol')){ 
reply('dosa bro')
} 
if (budy.match('asw')){
reply('dosa bro')
}
if (budy.match('Asw')){
reply('dosa bro')
}
if (budy.match('Kontol')){
reply('dosa bro')
}
if (budy.match('Asu')){
reply('dosa bro')
}
if (budy.match('asu')){
reply('dosa bro')
}
if (budy.match('Memek')){
reply('dosa bro')
}
if (budy.match('bajingan')){
reply('dosa bro')
}
if (budy.match('Bajingan')){
reply('dosa bro')
}
if (budy.match('rifailoli')){
	await faketoko(teks = help(prefix), url_image = "https://i.ibb.co/ctc0hDH/dc939c7158aa.jpg", title = "loli open BO", code = "IDR", price = 1000000)
}

if (budy.includes('')){
client.chatRead(from)
}
if (budy.includes('${prefix + command}')){
client.chatRead(from)
}
if (budy.includes(`@62856438334741`)) {
reply(`Napa tag owner gw bege`)
} else {
if (budy.includes(`@62856438334741`)) {
reply('Ada apa?')
}
}
if (budy.includes(`${prefix + command}`)){
 reply(`Sorry bro, command *${prefix}${command}* gk ada di list *${prefix}help*,yoklah tobat bro,ketimbang masuk neraka ngab`)
}
if (isMedia && isQuotedImage){
encmedia = mek
media = await client.downloadAndSaveMediaMessage(encmedia)
const model = await nsfwjs.load()
predictions = await model.classify(media)
console.log('Predictions: ', predictions)
fs.unlinkSync(media)
}
if(budy.match('Rifai')){
result = fs.readFileSync(`./temp/stick/emm.webp`)
  client.sendMessage(from, result, sticker, {
quoted: mek
  })
}
if (budy.includes("Numa")){

		client.updatePresence(from, Presence.composing)

		const loli = fs.readFileSync('./assets/numa')

        client.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})

        const d = fs.readFileSync('./sticker/jget.webp');

        client.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj numa numa yei", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})

        }
        if (budy.includes("Iri")){

		client.updatePresence(from, Presence.composing)

		const loli = fs.readFileSync('./assets/iri.mp3')

        client.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})

        const d = fs.readFileSync('./sticker/jget.webp');

        client.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj iri bilang bos", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})

        }
if (budy.includes("dengerin ya")){

		client.updatePresence(from, Presence.composing)

		const loli = fs.readFileSync('./assets/pale.mp3')
		client.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
const d = fs.readFileSync('./sticker/jget.webp');

        client.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj bale.bale", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})


        }
        if (budy.includes(`Bot`)) {
                const bot = fs.readFileSync('./assets/bot');
                client.sendMessage(from, bot, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
                  if (budy.includes(`bot`)) {
                const bot = fs.readFileSync('./assets/bot');
                client.sendMessage(from, bot, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
			if (body.startsWith(`${prefix}${command}`)) {

                  
			  }
if (isMedia && isAuto && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								client.sendMessage(from, `${err}`, MessageType.text)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('RIPAIBOT', 'AWAS COLONG')} ${ran} -o ${ran}`, async (error) => {
								client.sendMessage(from, fs.readFileSync(ran), sticker)
							    faketoko(teks = 'Berhasil', url_image = "https://i.ibb.co/VY38GN2/Screenshot-2021-03-19-14-26-49-57.jpg", title = "autosticker", code = "IDR", price = 1000000)
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
						    })
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
	           // FOR VIDEO OR G
		   if ((isMedia & isAuto && !mek.message.imageMessage || isQuotedVideo)) {
						const encmedia = mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						if (Buffer.byteLength(media) >= 6186598.4) return reply(`sizenya terlalu gede sayang, dd gakuat :(`)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`Gagal, video nya kebesaran, dd gakuat`)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								client.sendMessage(from, buff, sticker)
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
						}
                    if (isMedia && isCheck && isQuotedImage) {
                        const encmedia = mek
                        const filePath = await lolhuman.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        const form = new FormData();
                        const stats = fs.statSync(filePath);
                        const fileSizeInBytes = stats.size;
                        const fileStream = fs.createReadStream(filePath);
                        form.append('img', fileStream, { knownLength: fileSizeInBytes });
                        const options = {
                            method: 'POST',
                            credentials: 'include',
                            body: form
                        }
                        get_result = await fetchJson(`http://api.lolhuman.xyz/api/nsfwcheck?apikey=${apikey}`, {...options })
                        fs.unlinkSync(filePath)
                        get_result = get_result.result
                        is_nsfw = "No"
                        if (Number(get_result.replace("%", "")) >= 60) is_nsfw = "Yes"
                        reply(`*[ NsfwCheck ]*\n Nsfw : ${is_nsfw}\n Keakuratan : ${get_result}`)
                        if (Number(get_result.replace("%", "")) >= 70){
                        	setTimeout( () => {
		            client.groupRemove(from, [sender])
					}, 3000) // 1000 = 1s
					setTimeout( () => {
					client.sendMessage(from, '_Baybay_', text) // ur cods
					}, 2000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_Kamu akan dikick_', text) // ur cods
					}, 1000) // 1000 = 1s,
                    }
                    }
                      
					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						return //console.log(color('[WARN]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
                           }
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
