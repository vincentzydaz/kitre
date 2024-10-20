const axios = require("axios");
const APIKEY = "V-GoatMart-Beta-xv4-Ibs8j-90-az7-V";
const serverURL = "https://goatmart-v2.vercel.app";

module.exports = {
  config: {
    name: "goatmart",
    aliases: ["gm"],
    role: 0,
    shortDescription: {
      en: "View Items Available In The GoatMart."
    },
    category: "store",
    author: "Rômeo | Aryan | ©GoatMart",
  },
  onStart: async ({ api, event, args, message }) => {
    try {
      if (!args[0]) {
        api.sendMessage(`📚 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n━━━━━━━━━━━━\n\n➜ ${event.body} 𝗉𝖺𝗀𝖾 <𝗽𝗮𝗴𝗲 𝗻𝘂𝗺𝗯𝗲𝗿>\n➜ ${event.body} 𝗌𝗁𝗈𝗐 <𝗜𝘁𝗲𝗺 𝗜𝗗>\n➜ ${event.body} 𝗎𝗉𝗅𝗈𝖺𝖽 < 𝗝𝘀𝗼𝗻 𝗙𝗼𝗿𝗺𝗮𝘁>\n➜ ${event.body} 𝖾𝖽𝗂𝗍 <𝗜𝘁𝗲𝗺 𝗜𝗗>\n➜ ${event.body} 𝗌𝖾𝖺𝗋𝖼𝗁 <𝗜𝘁𝗲𝗺 𝗡𝗮𝗺𝗲>\n➜ ${event.body} 𝖽𝖾𝗅𝖾𝗍𝖾 <𝗜𝘁𝗲𝗺 𝗜𝗗>\n\n📒 𝗡𝗼𝘁𝗲: 𝖨𝖿 𝗒𝗈𝗎 𝖽𝗈𝗇'𝗍 𝗄𝗇𝗈𝗐 𝗁𝗈𝗐 𝗍𝗈 𝗎𝗌𝖾 𝗎𝗉𝗅𝗈𝖺𝖽, 𝖾𝖽𝗂𝗍 𝖿𝖾𝖺𝗍𝗎𝗋𝖾𝗌 𝗒𝗈𝗎 𝖼𝖺𝗇 𝖺𝗌𝗄 𝖺𝖻𝗈𝗎𝗍 𝗍𝗁𝗂𝗌 𝗍𝗈𝗉𝗂𝖼 𝖿𝗋𝗈𝗆 𝗈𝗎𝗋 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁 𝖣𝖾𝗏𝖾𝗅𝗈𝗉𝖾𝗋𝗌.\n\n- 𝖳𝖾𝖺𝗆 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n𝖳𝗁𝖺𝗇𝗄 𝗒𝗈𝗎 𝖿𝗈𝗋 𝗎𝗌𝗂𝗇𝗀 𝗈𝗎𝗋 𝖦𝗈𝖺𝗍𝖬𝖺𝗋𝗍 𝗌𝖾𝗋𝗏𝗂𝖼𝖾𝗌 🥰.`, event.threadID, event.messageID);
      } else if (args[0] === "page") {
        const pageNumber = parseInt(args[1]);
        const response = await axios.get(`${serverURL}/api/items?apikey=${APIKEY}`);
        const items = response.data;

        if (response.status === 200) {
          const totalPages = Math.ceil(items.length / 6);
          const offset = (pageNumber - 1) * 6;

          if (pageNumber <= 0 || pageNumber > totalPages || isNaN(pageNumber)) {
            api.sendMessage("📚 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n━━━━━━━━━━━━\n𝖳𝗁𝖾 𝗌𝖾𝗋𝗏𝗂𝖼𝖾 𝘆𝗈𝘂 𝖺𝗋𝖾 𝗍𝗋𝗒𝗂𝗇𝗀 𝘁𝗈 𝖺𝖼𝖼𝖾𝗌𝗌 𝗂𝗌 𝖼𝗎𝗋𝗋𝖾𝗇𝗍𝗅𝗒 𝗇𝗈𝗍 𝖺𝗏𝖺𝗂𝗅𝖺𝖻𝗅𝖾 𝗂𝗇 𝗈𝗎𝗋 𝗪𝖾𝖻𝗌𝗂𝗍𝖾. 𝖸𝗈𝗎 𝖼𝖺𝗇 𝖺𝗅𝗌𝗈 𝖺𝗌𝗄 𝖿𝗋𝗈𝗆 𝗈𝗎𝗋 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁 𝖣𝖾𝗏𝖾𝗅𝗈𝗉𝖾𝗋𝗌 𝗍𝗈 𝗆𝖺𝗄𝖾 𝗒𝗈𝗎𝗋 𝗋𝖾𝗊𝗎𝖾𝗌𝗍 𝖺𝗌 𝗉𝗈𝗌𝗌𝗂𝖻𝗅𝖾. 𝖳𝗁𝖺𝗇𝗄 𝖸𝗈𝗎.\n\n- 𝖳𝖾𝖺𝗆 𝗚𝗈𝖺𝗍𝗠𝖺𝗋𝗍\n𝖳𝗁𝖺𝗇𝗄 𝘆𝗈𝗎 𝖿𝗈𝗋 𝗎𝗌𝗂𝗇𝗀 𝗈𝗎𝗋 𝖦𝗈𝖺𝗍𝗆𝖺𝗋𝗍 𝗌𝖾𝗋𝗏𝗂𝖼𝖾𝗌 🥰.", event.threadID, event.messageID);
          } else {
            const pageItems = items.slice(offset, offset + 6);

            const itemDescriptions = pageItems.map(
              (item) =>
                `👑 𝗜𝘁𝗲𝗺 𝗡𝗮𝗺𝗲: ${item.itemName}\n🆔 𝗜𝘁𝗲𝗺 𝗜𝗗: ${item.itemID}\n📝 𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻: ${item.description}\n💻 𝗔𝘂𝘁𝗵𝗼𝗿: ${item.authorName}\n📅 𝗧𝗶𝗺𝗲: ${item.timestamp}\n\n━━━━━━━━━━━━\n`
            );

            const itemInfo = itemDescriptions.join("\n");

            message.reply(`📚 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n━━━━━━━━━━━━\n\n✅ 𝖧𝖾𝗋𝖾 𝖺𝗋𝖾 𝗌𝗈𝗆𝖾 𝗗𝗮𝘁𝗮 𝖼𝗎𝗋𝗋𝖾𝗇𝗍𝗅𝗒 𝖺𝗏𝖺𝗂𝗅𝖺𝖻𝗅𝖾 𝗂𝗇 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n\n${itemInfo}📝 𝗨𝘀𝗮𝗴𝗲𝘀:\n ${event.body.split(" ")[0]} [ show ] <item id> to view command data.\n\n👑 𝗣𝗮𝗴𝗲𝘀: [ ${pageNumber} / ${totalPages} ]\n\n- 𝖳𝖾𝖺𝗆 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n𝖳𝗁𝖺𝗇𝗄 𝗒𝗈𝗎 𝖿𝗈𝗋 𝗎𝗌𝗂𝗇𝗀 𝗈𝗎𝗋 𝖦𝗈𝖺𝗍𝖬𝖺𝗋𝗍 𝗌𝖾𝗋𝗏𝗂𝖼𝖾𝗌 🥰.`);
          }
        } else if (response.status === 401) {
          api.sendMessage("📚 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n━━━━━━━━━━━\n\n𝖳𝗁𝖾 𝗔𝗣𝗜 𝗞𝗘𝗬 𝗒𝗈𝗎 𝖺𝗋𝖾 𝗍𝗋𝗒𝗂𝗇𝗀 𝗍𝗈 𝖺𝖼𝖼𝖾𝗌𝗌 𝗈𝗎𝗋 𝗌𝖾𝗋𝗏𝗂𝖼𝖾𝗌 𝗂𝗌 𝗇𝗈𝗍 𝖺𝖼𝗍𝗂𝗏𝖺𝗍𝖾𝖽 𝗂𝗋 𝗂𝗇𝗏𝖺𝗅𝗂𝖽 𝖺𝗉𝗂𝗄𝖾𝗒, 𝗉𝗅𝖾𝖺𝗌𝖾 𝖼𝗁𝖾𝖼𝗄 𝗒𝗈𝗎𝗋 𝗔𝗣𝗜 𝗞𝗘𝗬 𝗂𝗌 𝗐𝗈𝗋𝗄𝗂𝗇𝗀, 𝗂𝖿 𝗍𝗁𝗂𝗌 𝖺𝗉𝗂𝗄𝖾𝗒 𝗂𝗌 𝗇𝗈𝗍 𝗏𝖺𝗅𝗂𝖽 𝗒𝗈𝗎 𝖼𝖺𝗇 𝗃𝗈𝗂𝗇 𝗈𝗎𝗋 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁 𝖢𝗈𝗆𝗆𝗎𝗇𝗂𝗍𝗒 𝖿𝗈𝗋 𝗇𝖾𝗐 𝖺𝗉𝗂𝗄𝖾𝗒, 𝖻𝖾𝖼𝖺𝗎𝗌𝖾 𝗐𝗂𝗍𝗁𝗈𝗎𝗋 𝖺𝗎𝗍𝗁𝗈𝗋𝗂𝗌𝖾𝖽 𝗒𝗈𝗎 𝖼𝖺𝗇'𝗍 𝖺𝖼𝖼𝖾𝗌 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁 𝖲𝖾𝗋𝗏𝗂𝖼𝖾𝗌. 𝖳𝗁𝖺𝗇𝗄 𝖸𝗈𝗎\n\n- 𝖳𝖾𝖺𝗆 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n𝖳𝗁𝖺𝗇𝗄 𝗒𝗈𝗎 𝖿𝗈𝗋 𝗎𝗌𝗂𝗇𝗀 𝗈𝗎𝗋 𝖦𝗈𝖺𝗍𝖬𝖺𝗋𝗍 𝗌𝖾𝗋𝗏𝗂𝖼𝖾𝗌 🥰.", event.threadID, event.messageID);
        }
      } else if (args[0] === "search") {
        const searchTerm = args.slice(1).join(" ").toLowerCase();

        const response = await axios.get(`${serverURL}/api/items?apikey=${APIKEY}`);

        const items = response.data;
        const matchingItems = items.filter(item => item.itemName.toLowerCase().includes(searchTerm) || item.description.toLowerCase().includes(searchTerm));

        if (matchingItems.length > 0) {
          const itemDescriptions = matchingItems.map(item => `\n👑 𝗜𝘁𝗲𝗺 𝗡𝗮𝗺𝗲: ${item.itemName}\n🆔 𝗜𝘁𝗲𝗺 𝗜𝗗: ${item.itemID}\n📝 𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻: ${item.description}\n💻 𝗔𝘂𝘁𝗵𝗼𝗿: ${item.authorName}\n📅 𝗧𝗶𝗺𝗲: ${item.timestamp}\n━━━━━━━━━━━━\n`);
          const itemInfo = itemDescriptions.join("\n");

          message.reply(`📚 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n━━━━━━━━━━━\n\n✅ 𝖧𝖾𝗋𝖾 𝗂𝗌 𝗒𝗈𝗎𝗋 𝗌𝖾𝖺𝗋𝖼𝗁𝖾𝖽 𝗋𝖾𝗌𝗎𝗅𝗍𝗌 𝖽𝖺𝗍𝖺 𝖿𝗈𝗋 𝗒𝗈𝗎𝗋 𝗊𝗎𝖾𝗋𝗒: ${searchTerm} 𝗂𝗇 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁 .\n\n${itemInfo}`);
        } else {
          message.reply(`📚 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n━━━━━━━━━━━━\n𝖳𝗁𝖾 𝗌𝖾𝖺𝗋𝖼𝗁 𝗍𝖾𝗋𝗆 𝗒𝗈𝗎 𝗉𝗋𝗈𝗏𝗂𝖽𝖾𝖽 𝖽𝗈𝖾𝗌 𝗇𝗈𝗍 𝗆𝖺𝗍𝖼𝗁 𝖺𝗇𝗒 𝖺𝗏𝖺𝗂𝗅𝖺𝖻𝗅𝖾 𝗂𝗍𝖾𝗆𝗌 𝗂𝗇 𝗈𝗎𝗋 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁 𝗐𝖾𝖻𝗌𝗂𝗍𝖾.\n\n- 𝖳𝖾𝖺𝗆 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n𝖳𝗁𝖺𝗇𝗄 𝗒𝗈𝗎 𝖿𝗈𝗋 𝗎𝗌𝗂𝗇𝗀 𝗈𝗎𝗋 𝖦𝗈𝖺𝗍𝖬𝖺𝗋𝗍 𝗌𝖾𝗋𝗏𝗂𝖼𝖾𝗌 🥰.`);
        }
      } else if (args[0] === "show") {
        const itemID = isNaN(args[1]) ? args[1] : parseInt(args[1]);
        const response = await axios.get(`${serverURL}/api/items/${itemID}?apikey=${APIKEY}`);
        const item = response.data;

        if (item && itemID) {
          message.reply(`📚 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n━━━━━━━━━━━━\n\n👑 𝗜𝘁𝗲𝗺 𝗡𝗮𝗺𝗲: ${item.itemName}\n🆔 𝗜𝘁𝗲𝗺 𝗜𝗗: ${item.itemID}\n📝 𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻: ${item.description}\n📁 𝗜𝘁𝗲𝗺 𝗟𝗶𝗻𝗸: ${item.pastebinLink}\n\n- 𝖳𝖾𝖺𝗆 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n𝖳𝗁𝖺𝗇𝗄 𝗒𝗈𝗎 𝖿𝗈𝗋 𝗎𝗌𝗂𝗇𝗀 𝗈𝗎𝗋 𝖦𝗈𝖺𝗍𝖬𝖺𝗋𝗍 𝗌𝖾𝗋𝗏𝗂𝖼𝖾𝗌 🥰.`);
        } else if (response.status === 404) {
          api.sendMessage("📚 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n━━━━━━━━━━━━\n𝖳𝗁𝖾 𝗌𝖾𝖺𝗋𝖼𝗁 𝗍𝖾𝗋𝗆 𝗒𝗈𝗎 𝗉𝗋𝗈𝗏𝗂𝖽𝖾𝖽 𝖽𝗈𝖾𝗌 𝗇𝗈𝗍 𝗆𝖺𝗍𝖼𝗁 𝖺𝗇𝗒 𝖺𝗏𝖺𝗂𝗅𝖺𝖻𝗅𝖾 𝗂𝗍𝖾𝗆𝗌 𝗂𝗇 𝗈𝗎𝗋 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁 𝗐𝖾𝖻𝗌𝗂𝗍𝖾.\n\n- 𝖳𝖾𝖺𝗆 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n𝖳𝗁𝖺𝗇𝗄 𝗒𝗈𝗎 𝖿𝗈𝗋 𝗎𝗌𝗂𝗇𝗀 𝗈𝗎𝗋 𝖦𝗈𝖺𝗍𝖬𝖺𝗋𝗍 𝗌𝖾𝗋𝗏𝗂𝖼𝖾𝗌 🥰.", event.threadID, event.messageID);
        } else if (response.status === 401) {
          api.sendMessage("📚 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n━━━━━━━━━━━\n\n𝖳𝗁𝖾 𝗔𝗣𝗜 𝗞𝗘𝗬 𝗒𝗈𝗎 𝖺𝗋𝖾 𝗍𝗋𝗒𝗂𝗇𝗀 𝗍𝗈 𝖺𝖼𝖼𝖾𝗌𝗌 𝗈𝗎𝗋 𝗌𝖾𝗋𝗏𝗂𝖼𝖾𝗌 𝗂𝗌 𝗇𝗈𝗍 𝖺𝖼𝗍𝗂𝗏𝖺𝗍𝖾𝖽 𝗂𝗋 𝗂𝗇𝗏𝖺𝗅𝗂𝖽 𝖺𝗉𝗂𝗄𝖾𝗒, 𝗉𝗅𝖾𝖺𝗌𝖾 𝖼𝗁𝖾𝖼𝗄 𝗒𝗈𝗎𝗋 𝗔𝗣𝗜 𝗞𝗘𝗬 𝗂𝗌 𝗐𝗈𝗋𝗄𝗂𝗇𝗀, 𝗂𝖿 𝗍𝗁𝗂𝗌 𝖺𝗉𝗂𝗄𝖾𝗒 𝗂𝗌 𝗇𝗈𝗍 𝗏𝖺𝗅𝗂𝖽 𝗒𝗈𝗎 𝖼𝖺𝗇 𝗃𝗈𝗂𝗇 𝗈𝗎𝗋 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁 𝖢𝗈𝗆𝗆𝗎𝗇𝗂𝗍𝗒 𝖿𝗈𝗋 𝗇𝖾𝗐 𝖺𝗉𝗂𝗄𝖾𝗒, 𝖻𝖾𝖼𝖺𝗎𝗌𝖾 𝗐𝗂𝗍𝗁𝗈𝗎𝗋 𝖺𝗎𝗍𝗁𝗈𝗋𝗂𝗌𝖾𝖽 𝗒𝗈𝗎 𝖼𝖺𝗇'𝗍 𝖺𝖼𝖼𝖾𝗌 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁 𝖲𝖾𝗋𝗏𝗂𝖼𝖾𝗌. 𝖳𝗁𝖺𝗇𝗄 𝖸𝗈𝗎\n\n- 𝖳𝖾𝖺𝗆 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n𝖳𝗁𝖺𝗇𝗄 𝗒𝗈𝗎 𝖿𝗈𝗋 𝗎𝗌𝗂𝗇𝗀 𝗈𝗎𝗋 𝖦𝗈𝖺𝗍𝖬𝖺𝗋𝗍 𝗌𝖾𝗋𝗏𝗂𝖼𝖾𝗌 🥰.", event.threadID, event.messageID);
        }
      } else if (args[0] === "edit") {
				try {
					const itemID = isNaN(args[1]) ? args[1] : parseInt(args[1]);
					const newItemDetails = JSON.parse(args.slice(2).join(" "));

					const response = await axios.put(`${serverURL}/api/items/${itemID}?apikey=${APIKEY}`, newItemDetails);

					message.reply(`📚 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n━━━━━━━━━━━━\n\n✅ 𝖨𝗍𝖾𝗆 𝖾𝖽𝗂𝗍𝖾𝖽 𝗌𝗎𝖼𝖼𝖾𝗌𝗌𝖿𝗎𝗅𝗅𝗒\n👑 𝗜𝘁𝗲𝗺 𝗡𝗮𝗺𝗲: ${response.data.itemName}\n🆔 𝗜𝘁𝗲𝗺 𝗜𝗗: ${response.data.itemID}`);
				} catch (err) {
					console.error(err);
					api.sendMessage("📚 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n━━━━━━━━━━━━\n\n𝖸𝗈𝗎 𝖺𝗋𝖾 𝖻𝖺𝗇𝗇𝖾𝖽 𝖿𝗋𝗈𝗆 𝗎𝗌𝗂𝗇𝗀 𝗍𝗁𝗂𝗌 𝖼𝗈𝗆𝗆𝖺𝗇𝖽.\n\n- 𝖳𝖾𝖺𝗆 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n𝖳𝗁𝖺𝗇𝗄 𝗒𝗈𝗎 𝖿𝗈𝗋 𝗎𝗌𝗂𝗇𝗀 𝗈𝗎𝗋 𝖦𝗈𝖺𝗍𝖬𝖺𝗋𝗍 𝗌𝖾𝗋𝗏𝗂𝖼𝖾𝗌 🥰.", event.threadID, event.messageID);
				}
			} else if (args[0] === "delete") {
				try {
					const itemID = isNaN(args[1]) ? args[1] : parseInt(args[1]);

					const response = await axios.delete(`${serverURL}/api/items/${itemID}?apikey=${APIKEY}`);

					if (response.status === 204) {
						message.reply(`📚 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n━━━━━━━━━━━━\n\n✅ 𝖨𝗍𝖾𝗆 𝖽𝖾𝗅𝖾𝗍𝖾𝖽 𝗌𝗎𝖼𝖼𝖾𝗌𝗌𝖿𝗎𝗅𝗅𝗒 𝖿𝗋𝗈𝗆 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n🆔 𝗜𝘁𝗲𝗺 𝗜𝗗: ${itemID}`);
					} else {
						message.reply(`📚 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n━━━━━━━━━━━━\n\n𝖸𝗈𝗎 𝖺𝗋𝖾 𝖻𝖺𝗇𝗇𝖾𝖽 𝖿𝗋𝗈𝗆 𝗎𝗌𝗂𝗇𝗀 𝗍𝗁𝗂𝗌 𝖼𝗈𝗆𝗆𝖺𝗇𝖽.\n\n- 𝖳𝖾𝖺𝗆 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n𝖳𝗁𝖺𝗇𝗄 𝗒𝗈𝗎 𝖿𝗈𝗋 𝗎𝗌𝗂𝗇𝗀 𝗈𝗎𝗋 𝖦𝗈𝖺𝗍𝖬𝖺𝗋𝗍 𝗌𝖾𝗋𝗏𝗂𝖼𝖾𝗌 🥰.`);
					}
				} catch (err) {
					console.error(err);
					api.sendMessage("📚 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n━━━━━━━━━━━━\n\n𝖸𝗈𝗎 𝖺𝗋𝖾 𝖻𝖺𝗇𝗇𝖾𝖽 𝖿𝗋𝗈𝗆 𝗎𝗌𝗂𝗇𝗀 𝗍𝗁𝗂𝗌 𝖼𝗈𝗆𝗆𝖺𝗇𝖽.\n\n- 𝖳𝖾𝖺𝗆 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n𝖳𝗁𝖺𝗇𝗄 𝗒𝗈𝗎 𝖿𝗈𝗋 𝗎𝗌𝗂𝗇𝗀 𝗈𝗎𝗋 𝖦𝗈𝖺𝗍𝖬𝖺𝗋𝗍 𝗌𝖾𝗋𝗏𝗂𝖼𝖾𝗌 🥰.", event.threadID, event.messageID);
				}
			} else if (args[0] === "upload") {
				try {
					const itemDetails = JSON.parse(args.slice(1).join(" "));
					const response = await axios.post(`${serverURL}/api/items?apikey=${APIKEY}`, itemDetails);

					if (response.status === 201) {
						const uploadedItem = response.data;
						message.reply(`📚 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n━━━━━━━━━━━\n\n𝖸𝗈𝗎𝗋 𝗗𝗮𝘁𝗮 𝗌𝗎𝖼𝖼𝖾𝗌𝗌𝖿𝗎𝗅𝗅𝗒 𝗎𝗉𝗅𝗈𝖺𝖽𝖾𝖽 𝗂𝗇 𝗈𝗎𝗋 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁 𝗌𝖾𝗋𝗏𝗂𝖼𝖾.\n\n👑 𝗜𝘁𝗲𝗺 𝗡𝗮𝗺𝗲: ${uploadedItem.itemName}\n🆔 𝗜𝘁𝗲𝗺 𝗜𝗗: ${uploadedItem.itemID}\n⚙ 𝗜𝘁𝗲𝗺 𝗧𝘆𝗽𝗲: ${uploadedItem.type || "Unknown"}\n📝 𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻: ${uploadedItem.description}\n📁 𝗜𝘁𝗲𝗺 𝗟𝗶𝗻𝗸: ${uploadedItem.pastebinLink}\n\n- 𝖳𝖾𝖺𝗆 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n𝖳𝗁𝖺𝗇𝗄 𝗒𝗈𝗎 𝖿𝗈𝗋 𝗎𝗌𝗂𝗇𝗀 𝗈𝗎𝗋 𝖦𝗈𝖺𝗍𝖬𝖺𝗋𝗍 𝗌𝖾𝗋𝗏𝗂𝖼𝖾𝗌 🥰.`);
					} else if (response.status === 401) {
						api.sendMessage("📚 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n━━━━━━━━━━━\n\n𝖳𝗁𝖾 𝗔𝗣𝗜 𝗞𝗘𝗬 𝗒𝗈𝗎 𝖺𝗋𝖾 𝗍𝗋𝗒𝗂𝗇𝗀 𝗍𝗈 𝖺𝖼𝖼𝖾𝗌𝗌 𝗈𝗎𝗋 𝗌𝖾𝗋𝗏𝗂𝖼𝖾𝗌 𝗂𝗌 𝗇𝗈𝗍 𝖺𝖼𝗍𝗂𝗏𝖺𝗍𝖾𝖽 𝗂𝗋 𝗂𝗇𝗏𝖺𝗅𝗂𝖽 𝖺𝗉𝗂𝗄𝖾𝗒, 𝗉𝗅𝖾𝖺𝗌𝖾 𝖼𝗁𝖾𝖼𝗄 𝗒𝗈𝗎𝗋 𝗔𝗣𝗜 𝗞𝗘𝗬 𝗂𝗌 𝗐𝗈𝗋𝗄𝗂𝗇𝗀, 𝗂𝖿 𝗍𝗁𝗂𝗌 𝖺𝗉𝗂𝗄𝖾𝗒 𝗂𝗌 𝗇𝗈𝗍 𝗏𝖺𝗅𝗂𝖽 𝗒𝗈𝗎 𝖼𝖺𝗇 𝗃𝗈𝗂𝗇 𝗈𝗎𝗋 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁 𝖢𝗈𝗆𝗆𝗎𝗇𝗂𝗍𝗒 𝖿𝗈𝗋 𝗇𝖾𝗐 𝖺𝗉𝗂𝗄𝖾𝗒, 𝖻𝖾𝖼𝖺𝗎𝗌𝖾 𝗐𝗂𝗍𝗁𝗈𝗎𝗋 𝖺𝗎𝗍𝗁𝗈𝗋𝗂𝗌𝖾𝖽 𝗒𝗈𝗎 𝖼𝖺𝗇'𝗍 𝖺𝖼𝖼𝖾𝗌 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁 𝖲𝖾𝗋𝗏𝗂𝖼𝖾𝗌. 𝖳𝗁𝖺𝗇𝗄 𝖸𝗈𝗎\n\n- 𝖳𝖾𝖺𝗆 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n𝖳𝗁𝖺𝗇𝗄 𝗒𝗈𝗎 𝖿𝗈𝗋 𝗎𝗌𝗂𝗇𝗀 𝗈𝗎𝗋 𝖦𝗈𝖺𝗍𝖬𝖺𝗋𝗍 𝗌𝖾𝗋𝗏𝗂𝖼𝖾𝗌 🥰.", event.threadID, event.messageID);
					}
				} catch (err) {
					console.error(err);
					api.sendMessage("📚 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n━━━━━━━━━━━━\n\n𝖸𝗈𝗎 𝖺𝗋𝖾 𝖻𝖺𝗇𝗇𝖾𝖽 𝖿𝗋𝗈𝗆 𝗎𝗌𝗂𝗇𝗀 𝗍𝗁𝗂𝗌 𝖼𝗈𝗆𝗆𝖺𝗇𝖽.\n\n- 𝖳𝖾𝖺𝗆 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n𝖳𝗁𝖺𝗇𝗄 𝗒𝗈𝗎 𝖿𝗈𝗋 𝗎𝗌𝗂𝗇𝗀 𝗈𝗎𝗋 𝖦𝗈𝖺𝗍𝖬𝖺𝗋𝗍 𝗌𝖾𝗋𝗏𝗂𝖼𝖾𝗌 🥰.", event.threadID, event.messageID);
				}
			}
		} catch (err) {
      console.error(err);
      api.sendMessage("📚 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n━━━━━━━━━━━━\n\n𝖸𝗈𝗎 𝖺𝗋𝖾 𝖻𝖺𝗇𝗇𝖾𝖽 𝖿𝗋𝗈𝗆 𝗎𝗌𝗂𝗇𝗀 𝗍𝗁𝗂𝗌 𝖼𝗈𝗆𝗆𝖺𝗇𝖽.\n\n- 𝖳𝖾𝖺𝗆 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n𝖳𝗁𝖺𝗇𝗄 𝗒𝗈𝗎 𝖿𝗈𝗋 𝗎𝗌𝗂𝗇𝗀 𝗈𝗎𝗋 𝖦𝗈𝖺𝗍𝖬𝖺𝗋𝗍 𝗌𝖾𝗋𝗏𝗂𝖼𝖾𝗌 🥰.", event.threadID, event.messageID);
    }
  },
};
