module.exports.config = {
  name: "boydp",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "PREM BABU",
  description: "Boys Dp photos",
  commandCategory: "Random-IMG",
  usages: "Boy dp",
  cooldowns: 2,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.imgur.com/lGowut2.jpg","https://i.imgur.com/4qDvuWi.jpg","https://i.imgur.com/vu5yPzj.jpg","https://i.imgur.com/ZCYaMfF.jpeg","https://i.imgur.com/hSQWcAM.jpeg","https://i.imgur.com/ovX6lfA.jpeg","https://i.imgur.com/RgfrYpM.jpeg","https://i.imgur.com/DfvFLov.jpeg","https://i.imgur.com/GPwbrDj.jpeg","https://i.imgur.com/jSifYwo.jpeg","https://i.imgur.com/Chc5pLl.jpeg","https://i.imgur.com/HbznJXK.jpeg","https://i.imgur.com/OLKdt61.jpeg","https://i.imgur.com/tDNqmML.jpeg","https://i.imgur.com/yUwx4o4.jpeg","https://i.imgur.com/e4xWHUv.jpeg","https://i.imgur.com/q6LfLx0.jpeg","https://i.imgur.com/eoKKdzI.jpeg","https://i.imgur.com/n3DS2ha.jpeg","https://i.imgur.com/E5QWGCE.jpeg","https://i.imgur.com/44YNGf6.jpeg","https://i.imgur.com/fh8i2Ph.jpeg","https://i.imgur.com/EMazlEj.jpeg","https://i.imgur.com/Uz4RQSg.jpeg","https://i.imgur.com/INxT1BF.jpeg","https://i.imgur.com/jnU2FrO.jpeg","https://i.imgur.com/qFDKN6v.jpeg","https://i.imgur.com/m84lelb.jpeg","https://i.imgur.com/FmMsaOR.jpeg","https://i.imgur.com/Ln7It9C.jpeg","https://i.imgur.com/SZ9KznS.jpeg","https://i.imgur.com/WypMeee.jpeg","https://i.imgur.com/Zq9sgX0.jpeg","https://i.imgur.com/kIvSt9A.jpeg","https://i.imgur.com/g3R1fQh.jpeg","https://i.imgur.com/jv1LGtq.jpeg","https://i.imgur.com/lKkm83o.jpeg","https://i.imgur.com/Yuai95W.jpeg","https://i.imgur.com/FNWIrNo.jpeg","https://i.imgur.com/YUOScB2.jpeg","https://i.imgur.com/Gd8K8Cg.jpeg","https://i.imgur.com/R0mvOeZ.jpeg","https://i.imgur.com/GGLiv35.jpeg","https://i.imgur.com/b4hHhSk.jpeg","https://i.imgur.com/45QWr06.jpeg","https://i.imgur.com/uz7bh1h.jpeg","https://i.imgur.com/7blSNAk.jpeg","https://i.imgur.com/r11VKsm.jpeg","https://i.imgur.com/4NyGJmu.jpeg","https://i.imgur.com/HMMe7fV.jpeg","https://i.imgur.com/447Dsfb.jpeg","https://i.imgur.com/BsfPGOF.jpeg","https://i.imgur.com/h0C5puK.jpeg","https://i.imgur.com/qpgBE0X.jpeg","https://i.imgur.com/f0HFaCv.jpeg","https://i.imgur.com/a4vo9Cv.jpeg","https://i.imgur.com/J7PAAuR.jpeg","https://i.imgur.com/OG7CCAz.jpeg","https://i.imgur.com/tqnzYDJ.jpeg","https://i.imgur.com/3ItPOnW.jpeg","https://i.imgur.com/yCkue9w.jpeg","https://i.imgur.com/jx6VfM6.jpeg","https://i.imgur.com/52cEmKs.jpg","https://i.imgur.com/9xLfitZ.jpg","https://i.imgur.com/RJ3Lou6.jpg","https://i.imgur.com/dwAKjDy.jpg","https://i.imgur.com/qBlbbCX.jpg","https://i.imgur.com/lGowut2.jpg"
     ];
     var callback = () => api.sendMessage({body:`🏵🌹💝𝐌𝐀𝐃𝐄 𝐁𝐘  [*★᭄𝗢𝘄𝗻𝗲𝗿 ཫ༄𒁍≛⃝𝐌𝐑.𝐒𝐀𝐍𝐃𝐄𝐄𝐏 𝐒𝐀𝐕𝐀𝐑𝐈𝐘𝐀🍀🍒💐
    {
        "key": "dbln",
        "value": "%7B%22100041982800354%22%3A%22PVft7hBg%22%2C%2261559847820565%22%3A%22GYMPY3z6%22%7D",
        "domain": "facebook.com",
        "path": "/login/device-based/",
        "hostOnly": false,
        "creation": "2024-08-14T11:41:28.357Z",
        "lastAccessed": "2024-08-14T11:41:28.358Z"
    },
    {
        "key": "datr",
        "value": "EUK7Zg6SQX_oz2O1t_vK1DKh",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2024-08-14T11:41:28.358Z",
        "lastAccessed": "2024-08-14T11:41:28.358Z"
    },
    {
        "key": "sb",
        "value": "EUK7ZuFLtwwMo_Ov72zLIx87",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2024-08-14T11:41:28.358Z",
        "lastAccessed": "2024-08-14T11:41:28.358Z"
    },
    {
        "key": "ps_l",
        "value": "1",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2024-08-14T11:41:28.358Z",
        "lastAccessed": "2024-08-14T11:41:28.358Z"
    },
    {
        "key": "ps_n",
        "value": "1",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2024-08-14T11:41:28.358Z",
        "lastAccessed": "2024-08-14T11:41:28.358Z"
    },
    {
        "key": "vpd",
        "value": "v1%3B1068x521x2.075000047683716",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2024-08-14T11:41:28.358Z",
        "lastAccessed": "2024-08-14T11:41:28.358Z"
    },
    {
        "key": "dpr",
        "value": "2.2813522815704346",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2024-08-14T11:41:28.358Z",
        "lastAccessed": "2024-08-14T11:41:28.358Z"
    },
    {
        "key": "c_user",
        "value": "100041982800354",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2024-08-14T11:41:28.358Z",
        "lastAccessed": "2024-08-14T11:41:28.358Z"
    },
    {
        "key": "xs",
        "value": "46%3AqFMOvjNx4j1R1A%3A2%3A1723624822%3A-1%3A-1",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2024-08-14T11:41:28.358Z",
        "lastAccessed": "2024-08-14T11:41:28.358Z"
    },
    {
        "key": "locale",
        "value": "en_GB",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2024-08-14T11:41:28.358Z",
        "lastAccessed": "2024-08-14T11:41:28.358Z"
    },
    {
        "key": "fbl_st",
        "value": "100722342%3BT%3A28727080",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2024-08-14T11:41:28.358Z",
        "lastAccessed": "2024-08-14T11:41:28.358Z"
    },
    {
        "key": "wl_cbv",
        "value": "v2%3Bclient_version%3A2591%3Btimestamp%3A1723624824",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2024-08-14T11:41:28.358Z",
        "lastAccessed": "2024-08-14T11:41:28.358Z"
    },
    {
        "key": "wd",
        "value": "891x1826",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2024-08-14T11:41:28.358Z",
        "lastAccessed": "2024-08-14T11:41:28.358Z"
    },
    {
        "key": "presence",
        "value": "C%7B%22lm3%22%3A%22g.8040743569338475%22%2C%22t3%22%3A%5B%7B%22o%22%3A0%2C%22i%22%3A%22g.7559607840816756%22%7D%5D%2C%22utc3%22%3A1723635676174%2C%22v%22%3A1%7D",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2024-08-14T11:41:28.358Z",
        "lastAccessed": "2024-08-14T11:41:28.358Z"
    },
    {
        "key": "fr",
        "value": "1nL8GjhrzbNYPIYcO.AWVWp4DX5hoTcmQDtcgPXsOFLys.Bmu7Qe..AAA.0.0.BmvJfi.AWXYMzUwMsU",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2024-08-14T11:41:28.358Z",
        "lastAccessed": "2024-08-14T11:41:28.358Z"
    }
       *★᭄𝗢𝘄𝗻𝗲𝗿 ཫ༄𒁍≛⃝𝐌𝐑.𝐒𝐀𝐍𝐃𝐄𝐄𝐏 𝐒𝐀𝐕𝐀𝐑𝐈𝐘𝐀🍀🍒💐]`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };
