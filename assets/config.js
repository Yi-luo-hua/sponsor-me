/* ==========================================================================
   sponsor-me · config
   这是唯一需要改的文件。运行时（app.js）与构建期（scripts/build-assets.mjs）
   读的是同一份配置，所以新增一个礼物只需要在这里加一条，然后跑一次构建。

   结构总览：
     meta      —— PayPal 收款链接
     media     —— 媒体注册表。key 就是文件名（不含扩展名），全局唯一。
     items     —— 每种语言一份条目列表，靠 media 名跨语言匹配
     channels  —— 渠道定义（二维码路径按主题区分）
     i18n      —— 界面文案
   ========================================================================== */

window.SPONSOR_CONFIG = {

  meta: {
    // 开源后换成你自己的仓库
    // 换成你的 paypal.me
    paypalUrl: 'https://paypal.me/akesakiko'
  },

  /* ────────────────────────────────────────────────────────────────────
     媒体注册表

     key      : 文件名，决定 assets/lottie/<key>.js
                **不允许重名**，跨语言匹配就靠它
     file     : .media/lottie/ 下的原始 Lottie JSON（不进仓库）
     kind     : 'lottie' 有动画；'still' 是单张 SVG
     loop     : 一轮动画的毫秒数，构建时与 JSON 自身的 op/fr 核对
     trim     : 可选。裁到第几帧为止，用于去掉尾部的空白或重复循环
     ──────────────────────────────────────────────────────────────────── */
  media: {
    // 全部是 Noto Animated Emoji 的 Lottie 动画（CC BY 4.0）。
    // file 指向 .media/lottie/ 下的原始文件，构建时转成 assets/lottie/<key>.js。
    // loop 是构建期的校验值：必须等于动画自身时长，构建脚本会逐个核对。
    hero:         { file: 'coffee.json',      kind: 'lottie', loop: 2017 },
    finger:       { file: 'finger.svg',       kind: 'still' },   // 只是静止指向，不需要动画

    gift:         { file: 'gift.json',         kind: 'lottie', loop: 4767 },
    kiss:         { file: 'kiss.json',         kind: 'lottie', loop: 2000 },
    bomb:         { file: 'bomb.json',         kind: 'lottie', loop: 2333 },
    hundred:      { file: 'hundred.json',      kind: 'lottie', loop: 2250 },
    // rocket 不裁：40 帧里尾焰/速度线/反光各是一个 20 帧子合成重复两遍，
    // 但机身窗口的抖动是 40 帧往复；裁到 20 帧只剩单向抖动，且 333ms 一轮太短
    rocket:       { file: 'rocket.json',       kind: 'lottie', loop: 667 },
    call:         { file: 'call.json',         kind: 'lottie', loop: 1933 },
    ghost:        { file: 'ghost.json',        kind: 'lottie', loop: 2400 },
    bulb:         { file: 'bulb.json',         kind: 'lottie', loop: 2400 },
    beer:         { file: 'beer.json',         kind: 'lottie', loop: 1767 },
    socks:        { file: 'socks.json',        kind: 'lottie', loop: 2200 },

    'bubble-tea': { file: 'bubble-tea.json',   kind: 'lottie', loop: 3200 },
    tropical:     { file: 'tropical.json',     kind: 'lottie', loop: 3600 },
    trophy:       { file: 'trophy.json',       kind: 'lottie', loop: 2267 },
    'crystal-ball': { file: 'crystal-ball.json', kind: 'lottie', loop: 2400 },
    'money-wings': { file: 'money-wings.json', kind: 'lottie', loop: 800 },
    coin:         { file: 'coin.json',         kind: 'lottie', loop: 3150 },
    gem:          { file: 'gem.json',          kind: 'lottie', loop: 1333 },
    wand:         { file: 'wand.json',         kind: 'lottie', loop: 1700 },
    slot:         { file: 'slot.json',         kind: 'lottie', loop: 2000 },
    balloon:      { file: 'balloon.json',      kind: 'lottie', loop: 1600 },
    medal:        { file: 'medal.json',        kind: 'lottie', loop: 2000 },
    ufo:          { file: 'ufo.json',          kind: 'lottie', loop: 4633 },
    house:        { file: 'house.json',        kind: 'lottie', loop: 3583 },
    cookie:       { file: 'cookie.json',       kind: 'lottie', loop: 1767, trim: 106 },
    'ice-cream':  { file: 'ice-cream.json',    kind: 'lottie', loop: 3933 },
    'chicken-leg': { file: 'chicken-leg.json', kind: 'lottie', loop: 2500 },
    rainbow:      { file: 'rainbow.json',      kind: 'lottie', loop: 2000 },
    clover:       { file: 'clover.json',       kind: 'lottie', loop: 1800 },
    bouquet:      { file: 'bouquet.json',      kind: 'lottie', loop: 2233 },
    star:         { file: 'star.json',         kind: 'lottie', loop: 1783 },
    fire:         { file: 'fire.json',         kind: 'lottie', loop: 1083 }
  },

  /* ────────────────────────────────────────────────────────────────────
     条目（按语言分组）

     每种语言独立维护，互不依赖。切换语言时按 media 名匹配：
       · 新语言里有同名条目 → 保留当前物品，只换文案
       · 没有 → 自动换到新语言里的第一个可用条目
     所以如果某个礼物只想在中文里出现，直接不写进 en 列表即可。
     ──────────────────────────────────────────────────────────────────── */
  items: {
    'zh-Hans': [
      { media: 'hero',    caption: '点击赞助作者一杯咖啡' },
      { media: 'gift',    caption: '点击赞助作者一份礼物' },
      { media: 'kiss',    caption: '点击给作者一个飞吻' },
      { media: 'bomb',    caption: '点击赞助作者一颗炸弹' },
      { media: 'hundred', caption: '点击给作者打个一百分' },
      { media: 'rocket',  caption: '点击为作者刷一个火箭' },
      { media: 'call',    caption: '点击给作者打个 call' },
      { media: 'ghost',   caption: '点击放一只幽灵出来' },
      { media: 'bulb',    caption: '点击赞助作者一个灵感' },
      { media: 'beer',    caption: '点击和作者碰一杯' },
      { media: 'socks',   caption: '点击赞助作者一只袜子' },

      { media: 'bubble-tea',   caption: '点击请作者喝杯珍珠奶茶' },
      { media: 'tropical',     caption: '点击请作者喝杯热带特调' },
      { media: 'trophy',       caption: '点击给作者颁一座奖杯' },
      { media: 'crystal-ball', caption: '点击让作者看看你的未来' },
      { media: 'money-wings',  caption: '点击让钱包长出翅膀' },
      { media: 'coin',         caption: '点击给作者投一枚金币' },
      { media: 'gem',          caption: '点击赞助作者一颗宝石' },
      { media: 'wand',         caption: '点击挥一下魔法棒' },
      { media: 'slot',         caption: '点击拉一次老虎机' },
      { media: 'balloon',      caption: '点击放一只气球' },
      { media: 'medal',        caption: '点击给作者挂一块金牌' },
      { media: 'ufo',          caption: '点击召唤一架飞碟' },
      { media: 'house',        caption: '点击给作者刷个大别墅' },
      { media: 'cookie',       caption: '点击投喂作者一块饼干' },
      { media: 'ice-cream',    caption: '点击请作者吃个冰淇淋' },
      { media: 'chicken-leg',  caption: '点击给作者加个鸡腿' },
      { media: 'rainbow',      caption: '点击给作者画一道彩虹' },
      { media: 'clover',       caption: '点击送作者一片四叶草' },
      { media: 'bouquet',      caption: '点击给作者献一束花' },
      { media: 'star',         caption: '点击给作者点亮一颗星' },
      { media: 'fire',         caption: '点击给作者添一把火' }
    ],

    'en': [
      { media: 'hero',    caption: 'Tap to buy the author a coffee' },
      { media: 'gift',    caption: 'Tap to send the author a gift' },
      { media: 'kiss',    caption: 'Tap to blow the author a kiss' },
      { media: 'bomb',    caption: 'Tap to hand the author a bomb' },
      { media: 'hundred', caption: 'Tap to give the author 100 points' },
      { media: 'rocket',  caption: 'Tap to send the author a rocket' },
      { media: 'call',    caption: 'Tap to cheer the author on' },
      { media: 'ghost',   caption: 'Tap to release a ghost' },
      { media: 'bulb',    caption: 'Tap to give the author an idea' },
      { media: 'beer',    caption: 'Tap to clink glasses with the author' },
      { media: 'socks',   caption: 'Tap to send the author one sock' },

      { media: 'bubble-tea',   caption: 'Tap to buy the author bubble tea' },
      { media: 'tropical',     caption: 'Tap to buy the author a tropical drink' },
      { media: 'trophy',       caption: 'Tap to hand the author a trophy' },
      { media: 'crystal-ball', caption: 'Tap to see what the future holds' },
      { media: 'money-wings',  caption: 'Tap to give the author money with wings' },
      { media: 'coin',         caption: 'Tap to drop a coin in the jar' },
      { media: 'gem',          caption: 'Tap to send the author a gem' },
      { media: 'wand',         caption: 'Tap to wave the magic wand' },
      { media: 'slot',         caption: 'Tap to pull the lever' },
      { media: 'balloon',      caption: 'Tap to release a balloon' },
      { media: 'medal',        caption: 'Tap to pin a gold medal on the author' },
      { media: 'ufo',          caption: 'Tap to summon a flying saucer' },
      { media: 'house',        caption: 'Tap to buy the author a mansion' },
      { media: 'cookie',       caption: 'Tap to feed the author a cookie' },
      { media: 'ice-cream',    caption: 'Tap to buy the author ice cream' },
      { media: 'chicken-leg',  caption: 'Tap to add a drumstick' },
      { media: 'rainbow',      caption: 'Tap to paint the author a rainbow' },
      { media: 'clover',       caption: 'Tap to send a four-leaf clover' },
      { media: 'bouquet',      caption: 'Tap to hand the author flowers' },
      { media: 'star',         caption: 'Tap to light up a star for the author' },
      { media: 'fire',         caption: 'Tap to add fuel to the fire' }
    ]
  },

  /* ────────────────────────────────────────────────────────────────────
     渠道
     qr 按主题给两份；PayPal 没有二维码，用 paypalUrl 跳转。
     ──────────────────────────────────────────────────────────────────── */
  channels: {
    wechat: {
      enabled: true,
      mark: 'wechat',
      qr: { light: 'assets/qr/wechat-light.png', dark: 'assets/qr/wechat-dark.png' },
      // 卡片顶部品牌标识（按语言 + 主题）
      logo: {
        'zh-Hans': { light: 'assets/brand/wechat-zh-light.svg', dark: 'assets/brand/wechat-zh-dark.svg' },
        'en':      { light: 'assets/brand/wechat-en-light.svg', dark: 'assets/brand/wechat-en-dark.svg' }
      }
    },
    alipay: {
      enabled: true,
      mark: 'alipay',
      qr: { light: 'assets/qr/alipay-light.png', dark: 'assets/qr/alipay-dark.png' },
      // 支付宝的标识不区分语言
      logo: {
        light: 'assets/brand/alipay-plus-light.svg',
        dark: 'assets/brand/alipay-plus-dark.svg'
      }
    },
    paypal: {
      enabled: true,
      mark: 'paypal',
      symbol: { light: 'assets/brand/paypal-symbol.svg', dark: 'assets/brand/paypal-symbol-alt.svg' },
      wordmark: { light: 'assets/brand/paypal-text-light.svg', dark: 'assets/brand/paypal-text-dark.svg' }
    }
  },

  /* ────────────────────────────────────────────────────────────────────
     界面文案
     ──────────────────────────────────────────────────────────────────── */
  i18n: {
    'zh-Hans': {
      roll: '赞助点别的？',
      backToPicker: '← 换个方式',
      backToLanding: '← 更换礼物',
      themeToDark: '切换到深色模式',
      themeToLight: '切换到浅色模式',
      langLabel: '切换语言',
      wechatName: '微信支付',
      alipayName: '支付宝',
      paypalName: 'PayPal',
      wechatNote: '扫码付款',
      alipayNote: '扫码付款',
      paypalNote: '跳转外部',
      wechatHint: '长按二维码，或保存图片后用<strong>微信</strong>扫一扫',
      alipayHint: '长按二维码，或保存图片后用<strong>支付宝</strong>扫一扫',
      paypalHint: '已尝试在新标签页打开 paypal.me',
      paypalBtn: '前往 paypal.me',
      paypalBack: '没有自动跳转？点上面的按钮。没有账号？返回换个方式',
      noChannel: '作者还没配置收款方式 :(',
    },
    'en': {
      roll: 'Sponsor something else?',
      backToPicker: '← Change method',
      backToLanding: '← Change gift',
      themeToDark: 'Switch to dark mode',
      themeToLight: 'Switch to light mode',
      langLabel: 'Change language',
      wechatName: 'WeChat Pay',
      alipayName: 'Alipay',
      paypalName: 'PayPal',
      wechatNote: 'Scan to pay',
      alipayNote: 'Scan to pay',
      paypalNote: 'Opens externally',
      wechatHint: 'Long-press to scan, or save the code and use <strong>WeChat</strong>',
      alipayHint: 'Long-press to scan, or save the code and use <strong>Alipay</strong>',
      paypalHint: 'Tried to open paypal.me in a new tab.',
      paypalBtn: 'Go to paypal.me',
      paypalBack: 'Did not open? Tap the button above. No account? Go back.',
      noChannel: 'No payment method configured yet :(',
    }
  }
};
