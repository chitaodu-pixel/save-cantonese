export type DailyPhrase = {
  id: string
  mandarin: string
  cantonese: string
  jyutping: string
  scene: string
  explanation: string
  tags: string[]
}

export type ParentChildPhrase = {
  id: string
  category: string
  mandarin: string
  cantonese: string
  jyutping: string
  scene: string
  tags: string[]
}

export type MistakePhrase = {
  id: string
  wrong: string
  literal: string
  natural: string
  explanation: string
  tags: string[]
}

export type LostWord = {
  id: string
  word: string
  meaning: string
  jyutping: string
  example: string
  region: string
  explanation: string
  tags: string[]
}

export const dailyPhrases: DailyPhrase[] = [
  { id: 'daily-001', mandarin: '早上好，今天精神吗？', cantonese: '早晨，今日精神冇？', jyutping: 'zou2 san4, gam1 jat6 zing1 san4 mou5?', scene: '起床问候', explanation: '“早晨”是很日常的粤语问候，“冇”表示“没有”。', tags: ['早晨', '问候', '家庭'] },
  { id: 'daily-002', mandarin: '先吃饭，别着急。', cantonese: '食咗饭先，唔使急。', jyutping: 'sik6 zo2 faan6 sin1, m4 sai2 gap1.', scene: '吃饭', explanation: '“先”放在句尾时，有“先做这件事”的语气。', tags: ['吃饭', '安抚'] },
  { id: 'daily-003', mandarin: '你今天做得很好。', cantonese: '你今日做得好好。', jyutping: 'nei5 gam1 jat6 zou6 dak1 hou2 hou2.', scene: '表扬', explanation: '重复“好好”听起来亲切自然，适合鼓励孩子。', tags: ['表扬', '孩子'] },
  { id: 'daily-004', mandarin: '慢慢来，我等你。', cantonese: '慢慢嚟，我等你。', jyutping: 'maan6 maan6 lai4, ngo5 dang2 nei5.', scene: '安慰', explanation: '“嚟”是“来”，这句语气温柔，适合降低孩子焦虑。', tags: ['安慰', '亲子'] },
  { id: 'daily-005', mandarin: '小心一点，地上湿。', cantonese: '小心啲，地下湿。', jyutping: 'siu2 sam1 di1, dei6 haa6 sap1.', scene: '安全提醒', explanation: '“啲”相当于“一点”，让提醒更口语。', tags: ['安全', '提醒'] },
  { id: 'daily-006', mandarin: '你想喝水吗？', cantonese: '你想唔想饮水？', jyutping: 'nei5 soeng2 m4 soeng2 jam2 seoi2?', scene: '照顾', explanation: '粤语常用“动词/形容词 + 唔 + 动词/形容词”来提问。', tags: ['喝水', '提问'] },
  { id: 'daily-007', mandarin: '这件衣服很好看。', cantonese: '呢件衫好靓。', jyutping: 'ni1 gin6 saam1 hou2 leng3.', scene: '穿衣', explanation: '“呢”是“这”，“靓”是漂亮、好看。', tags: ['穿衣', '赞美'] },
  { id: 'daily-008', mandarin: '我们一会儿出门。', cantonese: '我哋阵间出门口。', jyutping: 'ngo5 dei6 zan6 gaan1 ceot1 mun4 hau2.', scene: '出门', explanation: '“阵间”表示等一下、一会儿。', tags: ['出门', '时间'] },
  { id: 'daily-009', mandarin: '你要不要再试一次？', cantonese: '你要唔要再试多次？', jyutping: 'nei5 jiu3 m4 jiu3 zoi3 si3 do1 ci3?', scene: '学习', explanation: '“试多次”比直译“再试一次”更常见。', tags: ['学习', '鼓励'] },
  { id: 'daily-010', mandarin: '别怕，爸爸妈妈在。', cantonese: '唔使惊，爸爸妈妈喺度。', jyutping: 'm4 sai2 geng1, baa4 baa1 maa4 maa1 hai2 dou6.', scene: '安慰', explanation: '“唔使惊”是安慰别人“不要害怕”的自然说法。', tags: ['安慰', '安全感'] },
  { id: 'daily-011', mandarin: '我们一起收拾玩具。', cantonese: '我哋一齐执玩具。', jyutping: 'ngo5 dei6 jat1 cai4 zap1 wun6 geoi6.', scene: '整理', explanation: '“执”有收拾、捡起的意思。', tags: ['整理', '玩具'] },
  { id: 'daily-012', mandarin: '这道菜有点烫。', cantonese: '呢碟餸有啲热。', jyutping: 'ni1 dip6 sung3 jau5 di1 jit6.', scene: '吃饭', explanation: '“餸”指配饭吃的菜。', tags: ['吃饭', '安全'] },
  { id: 'daily-013', mandarin: '今天辛苦你了。', cantonese: '今日辛苦晒你。', jyutping: 'gam1 jat6 san1 fu2 saai3 nei5.', scene: '感谢', explanation: '“晒”加强语气，表达很真诚的感谢。', tags: ['感谢', '礼貌'] },
  { id: 'daily-014', mandarin: '你讲得很清楚。', cantonese: '你讲得好清楚。', jyutping: 'nei5 gong2 dak1 hou2 cing1 co2.', scene: '表达', explanation: '适合鼓励孩子多开口，而不是只纠错。', tags: ['表达', '表扬'] },
  { id: 'daily-015', mandarin: '这个怎么说？', cantonese: '呢个点讲？', jyutping: 'ni1 go3 dim2 gong2?', scene: '学习粤语', explanation: '“点讲”就是“怎么说”，很适合日常随口问。', tags: ['学习', '提问'] },
  { id: 'daily-016', mandarin: '你先洗手。', cantonese: '你洗手先。', jyutping: 'nei5 sai2 sau2 sin1.', scene: '卫生', explanation: '粤语里“先”常放句尾，听起来更自然。', tags: ['卫生', '吃饭'] },
  { id: 'daily-017', mandarin: '别跑太快。', cantonese: '唔好跑咁快。', jyutping: 'm4 hou2 paau2 gam3 faai3.', scene: '安全提醒', explanation: '“咁”表示“这么、那么”。', tags: ['安全', '提醒'] },
  { id: 'daily-018', mandarin: '你想先玩哪一个？', cantonese: '你想玩边个先？', jyutping: 'nei5 soeng2 waan2 bin1 go3 sin1?', scene: '游戏', explanation: '“边个”是“哪一个”。', tags: ['游戏', '选择'] },
  { id: 'daily-019', mandarin: '妈妈抱一下。', cantonese: '妈妈揽下。', jyutping: 'maa4 maa1 laam5 haa5.', scene: '亲密互动', explanation: '“揽”是抱、搂抱，家庭里很常用。', tags: ['亲子', '安慰'] },
  { id: 'daily-020', mandarin: '我们回家吧。', cantonese: '我哋返屋企啦。', jyutping: 'ngo5 dei6 faan1 uk1 kei2 laa1.', scene: '放学', explanation: '“屋企”就是家。', tags: ['回家', '放学'] },
  { id: 'daily-021', mandarin: '你要记得说谢谢。', cantonese: '你记得讲多谢。', jyutping: 'nei5 gei3 dak1 gong2 do1 ze6.', scene: '礼貌', explanation: '“多谢”比“谢谢”更有粤语味。', tags: ['礼貌', '家庭'] },
  { id: 'daily-022', mandarin: '今天很热，喝多点水。', cantonese: '今日好热，饮多啲水。', jyutping: 'gam1 jat6 hou2 jit6, jam2 do1 di1 seoi2.', scene: '天气', explanation: '“多啲”表示多一点。', tags: ['天气', '喝水'] },
  { id: 'daily-023', mandarin: '我们小声一点。', cantonese: '我哋细声啲。', jyutping: 'ngo5 dei6 sai3 seng1 di1.', scene: '公共场所', explanation: '“细声”是小声，提醒时很自然。', tags: ['礼貌', '提醒'] },
  { id: 'daily-024', mandarin: '我听到你了。', cantonese: '我听到你讲嘢。', jyutping: 'ngo5 teng1 dou2 nei5 gong2 je5.', scene: '回应孩子', explanation: '“讲嘢”是说话，表达你正在认真听。', tags: ['回应', '亲子'] },
  { id: 'daily-025', mandarin: '这不是你的错。', cantonese: '呢个唔系你错。', jyutping: 'ni1 go3 m4 hai6 nei5 co3.', scene: '安慰', explanation: '孩子难过时，这句比讲道理更先到位。', tags: ['安慰', '情绪'] },
  { id: 'daily-026', mandarin: '再等一分钟。', cantonese: '再等多一分钟。', jyutping: 'zoi3 dang2 do1 jat1 fan1 zung1.', scene: '等待', explanation: '“多一”是粤语里常见的补充数量说法。', tags: ['等待', '时间'] },
  { id: 'daily-027', mandarin: '你自己试试看。', cantonese: '你自己试下。', jyutping: 'nei5 zi6 gei2 si3 haa5.', scene: '鼓励独立', explanation: '“试下”语气轻松，不会给孩子太大压力。', tags: ['鼓励', '学习'] },
  { id: 'daily-028', mandarin: '这里很多人，牵着手。', cantonese: '呢度好多人，拖住手。', jyutping: 'ni1 dou6 hou2 do1 jan4, to1 zyu6 sau2.', scene: '外出安全', explanation: '“拖手”是牵手，“拖住手”是持续牵着。', tags: ['安全', '外出'] },
  { id: 'daily-029', mandarin: '睡觉前讲个故事。', cantonese: '瞓觉前讲个故事。', jyutping: 'fan3 gaau3 cin4 gong2 go3 gu3 si6.', scene: '睡前', explanation: '“瞓觉”是睡觉，非常口语。', tags: ['睡觉', '故事'] },
  { id: 'daily-030', mandarin: '明天见。', cantonese: '听日见。', jyutping: 'ting1 jat6 gin3.', scene: '道别', explanation: '“听日”是明天，不是“听一天”。', tags: ['道别', '时间'] },
]

const parentChildSeeds: Record<string, Omit<ParentChildPhrase, 'id' | 'category'>[]> = {
  起床: [
    { mandarin: '起床啦。', cantonese: '起身啦。', jyutping: 'hei2 san1 laa1.', scene: '早上叫醒', tags: ['起床', '日常'] },
    { mandarin: '睁开眼睛。', cantonese: '擘大眼啦。', jyutping: 'maak3 daai6 ngaan5 laa1.', scene: '轻声叫醒', tags: ['起床'] },
    { mandarin: '太阳出来了。', cantonese: '太阳出嚟喇。', jyutping: 'taai3 joeng4 ceot1 lai4 laa3.', scene: '早晨互动', tags: ['起床', '天气'] },
    { mandarin: '再赖床就迟到了。', cantonese: '再瞓就迟到喇。', jyutping: 'zoi3 fan3 zau6 ci4 dou3 laa3.', scene: '赶时间', tags: ['起床', '上学'] },
    { mandarin: '先穿衣服。', cantonese: '着衫先。', jyutping: 'zoek3 saam1 sin1.', scene: '穿衣', tags: ['起床', '穿衣'] },
    { mandarin: '把被子叠好。', cantonese: '摺好张被。', jyutping: 'zip3 hou2 zoeng1 pei5.', scene: '整理床铺', tags: ['起床', '整理'] },
    { mandarin: '洗脸刷牙。', cantonese: '洗面刷牙。', jyutping: 'sai2 min6 caat3 ngaa4.', scene: '晨间卫生', tags: ['起床', '卫生'] },
    { mandarin: '今天想穿哪件？', cantonese: '今日想着边件？', jyutping: 'gam1 jat6 soeng2 zoek3 bin1 gin6?', scene: '选衣服', tags: ['起床', '选择'] },
    { mandarin: '快一点但不用慌。', cantonese: '快啲，不过唔使慌。', jyutping: 'faai3 di1, bat1 gwo3 m4 sai2 fong1.', scene: '赶时间安抚', tags: ['起床', '安慰'] },
    { mandarin: '妈妈帮你梳头。', cantonese: '妈妈帮你梳头。', jyutping: 'maa4 maa1 bong1 nei5 so1 tau4.', scene: '出门准备', tags: ['起床', '亲子'] },
    { mandarin: '书包准备好了吗？', cantonese: '书包执好未？', jyutping: 'syu1 baau1 zap1 hou2 mei6?', scene: '出门检查', tags: ['起床', '上学'] },
    { mandarin: '我们出发吧。', cantonese: '我哋出发啦。', jyutping: 'ngo5 dei6 ceot1 faat3 laa1.', scene: '离家', tags: ['起床', '出门'] },
  ],
  吃饭: [
    { mandarin: '吃饭啦。', cantonese: '食饭啦。', jyutping: 'sik6 faan6 laa1.', scene: '开饭', tags: ['吃饭'] },
    { mandarin: '先洗手。', cantonese: '洗手先。', jyutping: 'sai2 sau2 sin1.', scene: '饭前卫生', tags: ['吃饭', '卫生'] },
    { mandarin: '这碗汤有点热。', cantonese: '呢碗汤有啲热。', jyutping: 'ni1 wun2 tong1 jau5 di1 jit6.', scene: '提醒烫口', tags: ['吃饭', '安全'] },
    { mandarin: '慢慢吃。', cantonese: '慢慢食。', jyutping: 'maan6 maan6 sik6.', scene: '用餐', tags: ['吃饭'] },
    { mandarin: '别含着饭说话。', cantonese: '唔好含住饭讲话。', jyutping: 'm4 hou2 ham4 zyu6 faan6 gong2 waa6.', scene: '餐桌礼貌', tags: ['吃饭', '礼貌'] },
    { mandarin: '多吃一口菜。', cantonese: '食多啖餸。', jyutping: 'sik6 do1 daam6 sung3.', scene: '鼓励尝试', tags: ['吃饭', '蔬菜'] },
    { mandarin: '要不要加点饭？', cantonese: '要唔要添饭？', jyutping: 'jiu3 m4 jiu3 tim1 faan6?', scene: '添饭', tags: ['吃饭'] },
    { mandarin: '这个很好吃。', cantonese: '呢个好好食。', jyutping: 'ni1 go3 hou2 hou2 sik6.', scene: '介绍食物', tags: ['吃饭', '形容'] },
    { mandarin: '把碗拿稳。', cantonese: '揸稳只碗。', jyutping: 'zaa1 wan2 zek3 wun2.', scene: '餐桌安全', tags: ['吃饭', '安全'] },
    { mandarin: '吃完再玩。', cantonese: '食完先玩。', jyutping: 'sik6 jyun4 sin1 waan2.', scene: '饭桌规则', tags: ['吃饭', '规则'] },
    { mandarin: '谢谢外婆煮饭。', cantonese: '多谢婆婆煮饭。', jyutping: 'do1 ze6 po4 po2 zyu2 faan6.', scene: '表达感谢', tags: ['吃饭', '礼貌'] },
  ],
  上学: [
    { mandarin: '上学啦。', cantonese: '返学啦。', jyutping: 'faan1 hok6 laa1.', scene: '出门上学', tags: ['上学'] },
    { mandarin: '书包背好。', cantonese: '孭好书包。', jyutping: 'me1 hou2 syu1 baau1.', scene: '出门准备', tags: ['上学', '书包'] },
    { mandarin: '水壶带了吗？', cantonese: '水樽带咗未？', jyutping: 'seoi2 zeon1 daai3 zo2 mei6?', scene: '检查物品', tags: ['上学', '喝水'] },
    { mandarin: '路上小心。', cantonese: '路上小心啲。', jyutping: 'lou6 soeng6 siu2 sam1 di1.', scene: '安全叮嘱', tags: ['上学', '安全'] },
    { mandarin: '见到老师要问好。', cantonese: '见到老师要打招呼。', jyutping: 'gin3 dou2 lou5 si1 jiu3 daa2 ziu1 fu1.', scene: '礼貌提醒', tags: ['上学', '礼貌'] },
    { mandarin: '今天认真听。', cantonese: '今日畀心机听。', jyutping: 'gam1 jat6 bei2 sam1 gei1 teng1.', scene: '学习提醒', tags: ['上学', '学习'] },
    { mandarin: '有事告诉老师。', cantonese: '有事同老师讲。', jyutping: 'jau5 si6 tung4 lou5 si1 gong2.', scene: '安全感', tags: ['上学', '安全'] },
    { mandarin: '别忘了拿外套。', cantonese: '唔好唔记得攞外套。', jyutping: 'm4 hou2 m4 gei3 dak1 lo2 ngoi6 tou3.', scene: '出门检查', tags: ['上学', '天气'] },
    { mandarin: '放学我来接你。', cantonese: '放学我嚟接你。', jyutping: 'fong3 hok6 ngo5 lai4 zip3 nei5.', scene: '告别', tags: ['上学', '放学'] },
    { mandarin: '勇敢一点。', cantonese: '勇敢啲。', jyutping: 'jung5 gam2 di1.', scene: '入校前鼓励', tags: ['上学', '鼓励'] },
    { mandarin: '和同学好好相处。', cantonese: '同同学好好相处。', jyutping: 'tung4 tung4 hok6 hou2 hou2 soeng1 cyu5.', scene: '社交提醒', tags: ['上学', '朋友'] },
  ],
  放学: [
    { mandarin: '放学啦。', cantonese: '放学啦。', jyutping: 'fong3 hok6 laa1.', scene: '接孩子', tags: ['放学'] },
    { mandarin: '今天开心吗？', cantonese: '今日开唔开心？', jyutping: 'gam1 jat6 hoi1 m4 hoi1 sam1?', scene: '放学聊天', tags: ['放学', '情绪'] },
    { mandarin: '今天学了什么？', cantonese: '今日学咗啲咩？', jyutping: 'gam1 jat6 hok6 zo2 di1 me1?', scene: '了解学校', tags: ['放学', '学习'] },
    { mandarin: '先喝口水。', cantonese: '饮啖水先。', jyutping: 'jam2 daam6 seoi2 sin1.', scene: '接回家', tags: ['放学', '喝水'] },
    { mandarin: '书包重不重？', cantonese: '书包重唔重？', jyutping: 'syu1 baau1 cung5 m4 cung5?', scene: '关心孩子', tags: ['放学'] },
    { mandarin: '我们回家吃点东西。', cantonese: '我哋返屋企食啲嘢。', jyutping: 'ngo5 dei6 faan1 uk1 kei2 sik6 di1 je5.', scene: '回家', tags: ['放学', '吃饭'] },
    { mandarin: '作业多吗？', cantonese: '功课多唔多？', jyutping: 'gung1 fo3 do1 m4 do1?', scene: '问作业', tags: ['放学', '学习'] },
    { mandarin: '你今天很努力。', cantonese: '你今日好努力。', jyutping: 'nei5 gam1 jat6 hou2 nou5 lik6.', scene: '表扬', tags: ['放学', '表扬'] },
    { mandarin: '有什么想跟我说？', cantonese: '有咩想同我讲？', jyutping: 'jau5 me1 soeng2 tung4 ngo5 gong2?', scene: '亲子沟通', tags: ['放学', '聊天'] },
    { mandarin: '先休息十分钟。', cantonese: '休息十分钟先。', jyutping: 'jau1 sik1 sap6 fan1 zung1 sin1.', scene: '回家安排', tags: ['放学', '休息'] },
    { mandarin: '把鞋放好。', cantonese: '摆好对鞋。', jyutping: 'baai2 hou2 deoi3 haai4.', scene: '回家整理', tags: ['放学', '整理'] },
  ],
  洗澡: [
    { mandarin: '洗澡啦。', cantonese: '冲凉啦。', jyutping: 'cung1 loeng4 laa1.', scene: '洗澡', tags: ['洗澡'] },
    { mandarin: '水温可以吗？', cantonese: '水温得唔得？', jyutping: 'seoi2 wan1 dak1 m4 dak1?', scene: '调水温', tags: ['洗澡', '安全'] },
    { mandarin: '小心地滑。', cantonese: '小心跣亲。', jyutping: 'siu2 sam1 sin2 can1.', scene: '浴室安全', tags: ['洗澡', '安全'] },
    { mandarin: '先洗头。', cantonese: '洗头先。', jyutping: 'sai2 tau4 sin1.', scene: '洗头', tags: ['洗澡'] },
    { mandarin: '闭上眼睛。', cantonese: '合埋眼。', jyutping: 'hap6 maai4 ngaan5.', scene: '冲洗头发', tags: ['洗澡'] },
    { mandarin: '泡泡冲干净。', cantonese: '冲干净啲泡。', jyutping: 'cung1 gon1 zeng6 di1 pou5.', scene: '冲洗', tags: ['洗澡', '卫生'] },
    { mandarin: '毛巾递给我。', cantonese: '畀条毛巾我。', jyutping: 'bei2 tiu4 mou4 gan1 ngo5.', scene: '洗澡结束', tags: ['洗澡'] },
    { mandarin: '快点擦干。', cantonese: '快啲抹干。', jyutping: 'faai3 di1 mut3 gon1.', scene: '擦身', tags: ['洗澡'] },
    { mandarin: '穿好睡衣。', cantonese: '着好睡衣。', jyutping: 'zoek3 hou2 seoi6 ji1.', scene: '洗后准备', tags: ['洗澡', '睡觉'] },
    { mandarin: '头发要吹干。', cantonese: '头发要吹干。', jyutping: 'tau4 faat3 jiu3 ceoi1 gon1.', scene: '吹头发', tags: ['洗澡', '健康'] },
    { mandarin: '洗完香喷喷。', cantonese: '冲完凉香喷喷。', jyutping: 'cung1 jyun4 loeng4 hoeng1 pan3 pan3.', scene: '表扬', tags: ['洗澡', '表扬'] },
  ],
  睡觉: [
    { mandarin: '睡觉啦。', cantonese: '瞓觉啦。', jyutping: 'fan3 gaau3 laa1.', scene: '睡前', tags: ['睡觉'] },
    { mandarin: '关灯了。', cantonese: '熄灯喇。', jyutping: 'sik1 dang1 laa3.', scene: '睡前准备', tags: ['睡觉'] },
    { mandarin: '盖好被子。', cantonese: '冚好张被。', jyutping: 'kam2 hou2 zoeng1 pei5.', scene: '入睡', tags: ['睡觉'] },
    { mandarin: '讲一个故事。', cantonese: '讲个故事。', jyutping: 'gong2 go3 gu3 si6.', scene: '睡前故事', tags: ['睡觉', '故事'] },
    { mandarin: '晚安。', cantonese: '早唞。', jyutping: 'zou2 tau2.', scene: '道晚安', tags: ['睡觉', '礼貌'] },
    { mandarin: '做个好梦。', cantonese: '发个好梦。', jyutping: 'faat3 go3 hou2 mung6.', scene: '睡前祝福', tags: ['睡觉'] },
    { mandarin: '明天再玩。', cantonese: '听日再玩。', jyutping: 'ting1 jat6 zoi3 waan2.', scene: '结束游戏', tags: ['睡觉', '时间'] },
    { mandarin: '先放下玩具。', cantonese: '摆低玩具先。', jyutping: 'baai2 dai1 wun6 geoi6 sin1.', scene: '睡前整理', tags: ['睡觉', '玩具'] },
    { mandarin: '妈妈在这里。', cantonese: '妈妈喺度。', jyutping: 'maa4 maa1 hai2 dou6.', scene: '安抚入睡', tags: ['睡觉', '安慰'] },
    { mandarin: '闭上眼休息。', cantonese: '合埋眼休息。', jyutping: 'hap6 maai4 ngaan5 jau1 sik1.', scene: '入睡', tags: ['睡觉'] },
    { mandarin: '别看手机了。', cantonese: '唔好睇电话喇。', jyutping: 'm4 hou2 tai2 din6 waa2 laa3.', scene: '睡前习惯', tags: ['睡觉', '规则'] },
  ],
  表扬: [
    { mandarin: '你很棒。', cantonese: '你好叻。', jyutping: 'nei5 hou2 lek1.', scene: '日常表扬', tags: ['表扬'] },
    { mandarin: '你讲得很好。', cantonese: '你讲得好好。', jyutping: 'nei5 gong2 dak1 hou2 hou2.', scene: '鼓励开口', tags: ['表扬', '粤语'] },
    { mandarin: '你自己完成了。', cantonese: '你自己做完喇。', jyutping: 'nei5 zi6 gei2 zou6 jyun4 laa3.', scene: '完成任务', tags: ['表扬', '独立'] },
    { mandarin: '你很有礼貌。', cantonese: '你好有礼貌。', jyutping: 'nei5 hou2 jau5 lai5 maau6.', scene: '礼貌行为', tags: ['表扬', '礼貌'] },
    { mandarin: '你很认真。', cantonese: '你好畀心机。', jyutping: 'nei5 hou2 bei2 sam1 gei1.', scene: '学习表扬', tags: ['表扬', '学习'] },
    { mandarin: '这个主意不错。', cantonese: '呢个谂法唔错。', jyutping: 'ni1 go3 nam2 faat3 m4 co3.', scene: '鼓励想法', tags: ['表扬', '表达'] },
    { mandarin: '谢谢你帮忙。', cantonese: '多谢你帮手。', jyutping: 'do1 ze6 nei5 bong1 sau2.', scene: '做家务', tags: ['表扬', '感谢'] },
    { mandarin: '你进步了。', cantonese: '你有进步喇。', jyutping: 'nei5 jau5 zeon3 bou6 laa3.', scene: '学习反馈', tags: ['表扬', '学习'] },
    { mandarin: '你很会照顾人。', cantonese: '你好识照顾人。', jyutping: 'nei5 hou2 sik1 ziu3 gu3 jan4.', scene: '关心别人', tags: ['表扬', '情绪'] },
    { mandarin: '我为你开心。', cantonese: '我替你开心。', jyutping: 'ngo5 tai3 nei5 hoi1 sam1.', scene: '分享喜悦', tags: ['表扬'] },
    { mandarin: '继续试。', cantonese: '继续试。', jyutping: 'gai3 zuk6 si3.', scene: '鼓励坚持', tags: ['表扬', '鼓励'] },
  ],
  安慰: [
    { mandarin: '没关系。', cantonese: '唔紧要。', jyutping: 'm4 gan2 jiu3.', scene: '犯错后', tags: ['安慰'] },
    { mandarin: '别害怕。', cantonese: '唔使惊。', jyutping: 'm4 sai2 geng1.', scene: '害怕时', tags: ['安慰', '情绪'] },
    { mandarin: '我陪着你。', cantonese: '我陪住你。', jyutping: 'ngo5 pui4 zyu6 nei5.', scene: '陪伴', tags: ['安慰', '亲子'] },
    { mandarin: '慢慢说。', cantonese: '慢慢讲。', jyutping: 'maan6 maan6 gong2.', scene: '表达困难', tags: ['安慰', '表达'] },
    { mandarin: '哭出来也可以。', cantonese: '喊出嚟都得。', jyutping: 'haam3 ceot1 lai4 dou1 dak1.', scene: '情绪支持', tags: ['安慰', '情绪'] },
    { mandarin: '我们一起想办法。', cantonese: '我哋一齐谂办法。', jyutping: 'ngo5 dei6 jat1 cai4 nam2 baan6 faat3.', scene: '解决问题', tags: ['安慰', '合作'] },
    { mandarin: '你已经很努力。', cantonese: '你已经好努力。', jyutping: 'nei5 ji5 ging1 hou2 nou5 lik6.', scene: '挫折后', tags: ['安慰', '表扬'] },
    { mandarin: '先深呼吸。', cantonese: '深呼吸先。', jyutping: 'sam1 fu1 kap1 sin1.', scene: '平复情绪', tags: ['安慰', '情绪'] },
    { mandarin: '这次不行，下次再来。', cantonese: '今次唔得，下次再嚟。', jyutping: 'gam1 ci3 m4 dak1, haa6 ci3 zoi3 lai4.', scene: '失败后', tags: ['安慰', '鼓励'] },
    { mandarin: '妈妈明白。', cantonese: '妈妈明白。', jyutping: 'maa4 maa1 ming4 baak6.', scene: '倾听', tags: ['安慰', '亲子'] },
    { mandarin: '你可以休息一下。', cantonese: '你可以休息下。', jyutping: 'nei5 ho2 ji5 jau1 sik1 haa5.', scene: '累了', tags: ['安慰', '休息'] },
  ],
  安全提醒: [
    { mandarin: '过马路要看车。', cantonese: '过马路要睇车。', jyutping: 'gwo3 maa5 lou6 jiu3 tai2 ce1.', scene: '过马路', tags: ['安全', '外出'] },
    { mandarin: '牵着我的手。', cantonese: '拖住我只手。', jyutping: 'to1 zyu6 ngo5 zek3 sau2.', scene: '人多地方', tags: ['安全', '外出'] },
    { mandarin: '不要碰插座。', cantonese: '唔好掂插苏。', jyutping: 'm4 hou2 dim3 caap3 sou1.', scene: '家居安全', tags: ['安全', '家里'] },
    { mandarin: '刀很锋利。', cantonese: '把刀好利。', jyutping: 'baa2 dou1 hou2 lei6.', scene: '厨房安全', tags: ['安全', '厨房'] },
    { mandarin: '别站太近。', cantonese: '唔好企咁埋。', jyutping: 'm4 hou2 kei5 gam3 maai4.', scene: '保持距离', tags: ['安全'] },
    { mandarin: '电梯里别跳。', cantonese: '喺𨋢入面唔好跳。', jyutping: 'hai2 lip1 jap6 min6 m4 hou2 tiu3.', scene: '电梯安全', tags: ['安全', '外出'] },
    { mandarin: '东西掉了我来捡。', cantonese: '跌咗嘢我嚟执。', jyutping: 'dit3 zo2 je5 ngo5 lai4 zap1.', scene: '路边安全', tags: ['安全'] },
    { mandarin: '水边要小心。', cantonese: '水边要小心。', jyutping: 'seoi2 bin1 jiu3 siu2 sam1.', scene: '游泳池边', tags: ['安全', '外出'] },
    { mandarin: '不要随便跟别人走。', cantonese: '唔好随便跟人走。', jyutping: 'm4 hou2 ceoi4 bin6 gan1 jan4 zau2.', scene: '防走失', tags: ['安全', '外出'] },
    { mandarin: '有事大声叫我。', cantonese: '有事大声嗌我。', jyutping: 'jau5 si6 daai6 seng1 aai3 ngo5.', scene: '安全约定', tags: ['安全'] },
    { mandarin: '坐好，车要开了。', cantonese: '坐好，架车开喇。', jyutping: 'co5 hou2, gaa3 ce1 hoi1 laa3.', scene: '坐车', tags: ['安全', '交通'] },
  ],
}

export const parentChildPhrases: ParentChildPhrase[] = Object.entries(parentChildSeeds).flatMap(
  ([category, phrases]) =>
    phrases.map((phrase, index) => ({
      id: `parent-${category}-${String(index + 1).padStart(2, '0')}`,
      category,
      ...phrase,
    })),
)

export const mistakePhrases: MistakePhrase[] = [
  { id: 'mistake-001', wrong: '我先走了', literal: '我先走咗', natural: '我走先喇', explanation: '粤语表达“先离开”通常把“先”放在后面。', tags: ['语序', '告别'] },
  { id: 'mistake-002', wrong: '你吃饭了吗', literal: '你食饭咗未', natural: '你食咗饭未', explanation: '完成体“咗”一般放在动词后。', tags: ['咗', '吃饭'] },
  { id: 'mistake-003', wrong: '我不知道', literal: '我唔知道', natural: '我唔知', explanation: '日常粤语常说“唔知”，更短更自然。', tags: ['常用句'] },
  { id: 'mistake-004', wrong: '很好吃', literal: '好吃', natural: '好好食', explanation: '粤语说食物好吃常用“好好食”。', tags: ['吃饭', '形容'] },
  { id: 'mistake-005', wrong: '很好看', literal: '好看', natural: '好靓', explanation: '形容衣服、人或物件好看，粤语常说“靓”。', tags: ['形容'] },
  { id: 'mistake-006', wrong: '我回家', literal: '我回家', natural: '我返屋企', explanation: '粤语口语里“回家”多说“返屋企”。', tags: ['家庭'] },
  { id: 'mistake-007', wrong: '等一下', literal: '等一下', natural: '等阵', explanation: '“等阵”是很常见的口语表达。', tags: ['时间'] },
  { id: 'mistake-008', wrong: '这个怎么说', literal: '呢个点样讲', natural: '呢个点讲', explanation: '“点讲”已经足够自然，不必加“样”。', tags: ['学习'] },
  { id: 'mistake-009', wrong: '不要着急', literal: '唔好着急', natural: '唔使急', explanation: '“唔使急”更像日常安抚。', tags: ['安慰'] },
  { id: 'mistake-010', wrong: '你在哪里', literal: '你喺边里', natural: '你喺边度', explanation: '粤语问地点用“边度”。', tags: ['地点'] },
  { id: 'mistake-011', wrong: '多少钱', literal: '几多钱', natural: '几钱', explanation: '买东西时“几钱”很自然，也可说“几多钱”。', tags: ['购物'] },
  { id: 'mistake-012', wrong: '我没有', literal: '我没有', natural: '我冇', explanation: '“冇”就是“没有”，粤语里非常核心。', tags: ['否定'] },
  { id: 'mistake-013', wrong: '是不是', literal: '系唔系', natural: '系咪', explanation: '“系咪”是更常见的口语问法。', tags: ['提问'] },
  { id: 'mistake-014', wrong: '给我看看', literal: '畀我睇睇', natural: '畀我睇下', explanation: '“动词下”表示试一下、做一下。', tags: ['动词下'] },
  { id: 'mistake-015', wrong: '我想睡觉', literal: '我想睡觉', natural: '我想瞓觉', explanation: '“瞓觉”是睡觉的地道说法。', tags: ['睡觉'] },
  { id: 'mistake-016', wrong: '洗澡', literal: '洗澡', natural: '冲凉', explanation: '广东家庭里“冲凉”非常常用。', tags: ['洗澡'] },
  { id: 'mistake-017', wrong: '拿东西', literal: '拿嘢', natural: '攞嘢', explanation: '粤语“拿”常说“攞”。', tags: ['动词'] },
  { id: 'mistake-018', wrong: '收拾玩具', literal: '收拾玩具', natural: '执玩具', explanation: '“执”有收拾、捡起的意思。', tags: ['亲子', '玩具'] },
  { id: 'mistake-019', wrong: '开灯', literal: '开灯', natural: '开灯', explanation: '这句本身可以自然使用，不必硬改。', tags: ['自然表达'] },
  { id: 'mistake-020', wrong: '关灯', literal: '关灯', natural: '熄灯', explanation: '“熄灯”更有粤语口语味。', tags: ['睡觉'] },
  { id: 'mistake-021', wrong: '你先做作业', literal: '你先做功课', natural: '你做功课先', explanation: '命令或安排顺序时，“先”常放句尾。', tags: ['语序', '学习'] },
  { id: 'mistake-022', wrong: '我马上来', literal: '我马上嚟', natural: '我即刻嚟', explanation: '“即刻”比“马上”更口语。', tags: ['时间'] },
  { id: 'mistake-023', wrong: '等我一下', literal: '等我一下', natural: '等我阵', explanation: '“阵”表示一小段时间。', tags: ['时间'] },
  { id: 'mistake-024', wrong: '小声一点', literal: '小声一点', natural: '细声啲', explanation: '“细声”是小声，“啲”是一点。', tags: ['提醒'] },
  { id: 'mistake-025', wrong: '大声一点', literal: '大声一点', natural: '大声啲', explanation: '形容声音大小时，“啲”很自然。', tags: ['表达'] },
  { id: 'mistake-026', wrong: '很热', literal: '很热', natural: '好热', explanation: '粤语口语里“很”多用“好”。', tags: ['形容'] },
  { id: 'mistake-027', wrong: '我听不懂', literal: '我听唔懂', natural: '我听唔明', explanation: '粤语常用“明”表示理解。', tags: ['学习'] },
  { id: 'mistake-028', wrong: '你懂吗', literal: '你懂唔懂', natural: '你明唔明', explanation: '“明唔明”更自然。', tags: ['提问'] },
  { id: 'mistake-029', wrong: '看电视', literal: '看电视', natural: '睇电视', explanation: '“睇”是看。', tags: ['家庭'] },
  { id: 'mistake-030', wrong: '讲故事', literal: '讲故事', natural: '讲故仔', explanation: '“故仔”是故事的口语说法。', tags: ['睡觉', '亲子'] },
  { id: 'mistake-031', wrong: '别哭', literal: '唔好哭', natural: '唔好喊', explanation: '粤语里“哭”口语多说“喊”。', tags: ['安慰'] },
  { id: 'mistake-032', wrong: '哭出来', literal: '哭出嚟', natural: '喊出嚟', explanation: '情绪表达用“喊”更自然。', tags: ['情绪'] },
  { id: 'mistake-033', wrong: '抱一下', literal: '抱一下', natural: '揽下', explanation: '家庭亲密语境里“揽”很常用。', tags: ['亲子'] },
  { id: 'mistake-034', wrong: '牵手', literal: '牵手', natural: '拖手', explanation: '粤语常说“拖手”。', tags: ['安全', '亲子'] },
  { id: 'mistake-035', wrong: '坐电梯', literal: '坐电梯', natural: '搭𨋢', explanation: '广州香港常用“𨋢”指电梯。', tags: ['外出'] },
  { id: 'mistake-036', wrong: '坐公交', literal: '坐公交', natural: '搭巴士', explanation: '粤语口语更常说“搭巴士”。', tags: ['交通'] },
  { id: 'mistake-037', wrong: '穿衣服', literal: '穿衣服', natural: '着衫', explanation: '“着衫”是穿衣服。', tags: ['穿衣'] },
  { id: 'mistake-038', wrong: '脱鞋', literal: '脱鞋', natural: '除鞋', explanation: '粤语常用“除”表示脱掉。', tags: ['回家'] },
  { id: 'mistake-039', wrong: '这是什么', literal: '呢个系乜嘢', natural: '呢个系咩', explanation: '日常问法常简化成“系咩”。', tags: ['提问'] },
  { id: 'mistake-040', wrong: '为什么', literal: '为咩', natural: '点解', explanation: '“点解”是为什么。', tags: ['提问'] },
  { id: 'mistake-041', wrong: '怎么样', literal: '点样', natural: '点啊', explanation: '很多场景问情况时说“点啊”更自然。', tags: ['聊天'] },
  { id: 'mistake-042', wrong: '累不累', literal: '累唔累', natural: '攰唔攰', explanation: '“攰”是累。', tags: ['关心'] },
  { id: 'mistake-043', wrong: '漂亮女孩', literal: '漂亮女仔', natural: '靓女', explanation: '称呼或形容时常说“靓女”。', tags: ['称呼'] },
  { id: 'mistake-044', wrong: '小朋友', literal: '小朋友', natural: '细路仔', explanation: '“细路仔”是孩子、小朋友。', tags: ['称呼'] },
  { id: 'mistake-045', wrong: '别乱跑', literal: '唔好乱跑', natural: '唔好周围走', explanation: '提醒孩子时“周围走”更贴近日常场景。', tags: ['安全'] },
  { id: 'mistake-046', wrong: '全部吃完', literal: '全部食完', natural: '食晒', explanation: '“晒”表示全部、完全。', tags: ['吃饭'] },
  { id: 'mistake-047', wrong: '我已经做完了', literal: '我已经做完咗', natural: '我做晒喇', explanation: '完成且全部做完可用“晒”。', tags: ['完成'] },
  { id: 'mistake-048', wrong: '太贵了', literal: '太贵咗', natural: '太贵喇', explanation: '状态判断常用“喇”收尾。', tags: ['购物'] },
  { id: 'mistake-049', wrong: '没问题', literal: '冇问题', natural: '冇问题', explanation: '这句自然可用，是普通话和粤语相近的表达。', tags: ['自然表达'] },
  { id: 'mistake-050', wrong: '谢谢你', literal: '谢谢你', natural: '多谢你', explanation: '“多谢”是粤语核心礼貌表达。', tags: ['礼貌'] },
]

export const lostWords: LostWord[] = [
  { id: 'lost-001', word: '攰', meaning: '累、疲倦', jyutping: 'gui6', example: '今日返学返到好攰。', region: '广府常用', explanation: '年轻人常被普通话“累”替代，但“攰”很有粤语味。', tags: ['情绪', '身体'] },
  { id: 'lost-002', word: '曱甴', meaning: '蟑螂', jyutping: 'gaat6 zaat6', example: '厨房有只曱甴。', region: '广州、香港', explanation: '字形特别，很多人会说但不会写。', tags: ['动物', '家居'] },
  { id: 'lost-003', word: '𨋢', meaning: '电梯', jyutping: 'lip1', example: '我哋搭𨋢上去。', region: '香港、广州', explanation: '来自 lift 的音译，口语很常见。', tags: ['交通', '外出'] },
  { id: 'lost-004', word: '冚', meaning: '盖住', jyutping: 'kam2', example: '瞓觉要冚好张被。', region: '广府常用', explanation: '亲子睡前场景很实用。', tags: ['睡觉', '家庭'] },
  { id: 'lost-005', word: '揦', meaning: '抓、拿得不稳', jyutping: 'laa2', example: '唔好揦住咁多嘢。', region: '珠三角', explanation: '表达手上乱拿一堆东西的感觉很准确。', tags: ['动作'] },
  { id: 'lost-006', word: '掟', meaning: '扔', jyutping: 'deng3', example: '唔好掟玩具。', region: '广府常用', explanation: '比“扔”更口语，提醒孩子时常用。', tags: ['动作', '亲子'] },
  { id: 'lost-007', word: '揸', meaning: '握、拿、开车', jyutping: 'zaa1', example: '揸稳只杯。', region: '广府常用', explanation: '“揸车”也是开车。', tags: ['动作'] },
  { id: 'lost-008', word: '攞', meaning: '拿、取', jyutping: 'lo2', example: '帮我攞对鞋。', region: '广府常用', explanation: '日常高频动词。', tags: ['动作', '家居'] },
  { id: 'lost-009', word: '睇', meaning: '看', jyutping: 'tai2', example: '你睇下呢个。', region: '广府常用', explanation: '孩子开口说粤语必会的基础词。', tags: ['动作'] },
  { id: 'lost-010', word: '嚟', meaning: '来', jyutping: 'lai4', example: '你过嚟。', region: '广府常用', explanation: '语音和字形都需要多见多用。', tags: ['动作'] },
  { id: 'lost-011', word: '瞓', meaning: '睡', jyutping: 'fan3', example: '够钟瞓觉喇。', region: '广府常用', explanation: '比“睡觉”更自然。', tags: ['睡觉'] },
  { id: 'lost-012', word: '餸', meaning: '配饭吃的菜', jyutping: 'sung3', example: '今晚有咩餸？', region: '广府常用', explanation: '粤语饮食文化里的高频词。', tags: ['吃饭'] },
  { id: 'lost-013', word: '啖', meaning: '一口', jyutping: 'daam6', example: '饮啖水先。', region: '广府常用', explanation: '“一口水、一口饭”都可以用。', tags: ['吃饭', '喝水'] },
  { id: 'lost-014', word: '樽', meaning: '瓶', jyutping: 'zeon1', example: '水樽摆喺书包侧边。', region: '广府常用', explanation: '日常用品词，适合孩子学习。', tags: ['物品'] },
  { id: 'lost-015', word: '孭', meaning: '背在身上', jyutping: 'me1', example: '孭好书包。', region: '广府常用', explanation: '背书包、背孩子都可用。', tags: ['上学', '动作'] },
  { id: 'lost-016', word: '跣', meaning: '滑倒、打滑', jyutping: 'sin2', example: '地下湿，小心跣亲。', region: '广府常用', explanation: '安全提醒中特别实用。', tags: ['安全'] },
  { id: 'lost-017', word: '嗌', meaning: '叫喊、点餐', jyutping: 'aai3', example: '有事大声嗌我。', region: '广府常用', explanation: '也可说“嗌外卖”。', tags: ['表达'] },
  { id: 'lost-018', word: '谂', meaning: '想、思考', jyutping: 'nam2', example: '你谂下先。', region: '广府常用', explanation: '比“想”更粤语口语。', tags: ['思考'] },
  { id: 'lost-019', word: '啱', meaning: '对、合适、刚好', jyutping: 'ngaam1', example: '呢对鞋啱唔啱？', region: '广府常用', explanation: '含义多，需要在场景中学。', tags: ['判断'] },
  { id: 'lost-020', word: '唔该', meaning: '麻烦你、谢谢', jyutping: 'm4 goi1', example: '唔该借借。', region: '广府常用', explanation: '比“谢谢”更覆盖日常请求场景。', tags: ['礼貌'] },
  { id: 'lost-021', word: '多谢', meaning: '谢谢', jyutping: 'do1 ze6', example: '多谢你帮手。', region: '广府常用', explanation: '收礼、被帮助时常用。', tags: ['礼貌'] },
  { id: 'lost-022', word: '细路仔', meaning: '小孩子', jyutping: 'sai3 lou6 zai2', example: '细路仔最钟意玩。', region: '广府常用', explanation: '家庭聊天里很自然。', tags: ['称呼'] },
  { id: 'lost-023', word: '屋企', meaning: '家', jyutping: 'uk1 kei2', example: '返屋企食饭。', region: '广府常用', explanation: '比“家”更口语。', tags: ['家庭'] },
  { id: 'lost-024', word: '阵间', meaning: '一会儿', jyutping: 'zan6 gaan1', example: '阵间我嚟接你。', region: '广府常用', explanation: '安排时间时常用。', tags: ['时间'] },
  { id: 'lost-025', word: '听日', meaning: '明天', jyutping: 'ting1 jat6', example: '听日见。', region: '广府常用', explanation: '粤语时间词之一。', tags: ['时间'] },
  { id: 'lost-026', word: '琴日', meaning: '昨天', jyutping: 'kam4 jat6', example: '琴日落雨。', region: '广府常用', explanation: '和“今日、听日”成组学习更容易。', tags: ['时间'] },
  { id: 'lost-027', word: '而家', meaning: '现在', jyutping: 'ji4 gaa1', example: '而家出门啦。', region: '广府常用', explanation: '很多孩子会被普通话“现在”替代。', tags: ['时间'] },
  { id: 'lost-028', word: '即刻', meaning: '马上', jyutping: 'zik1 hak1', example: '我即刻嚟。', region: '广府常用', explanation: '比“马上”更自然。', tags: ['时间'] },
  { id: 'lost-029', word: '得闲', meaning: '有空', jyutping: 'dak1 haan4', example: '得闲嚟玩。', region: '广府常用', explanation: '社交邀请很常见。', tags: ['社交'] },
  { id: 'lost-030', word: '钟意', meaning: '喜欢', jyutping: 'zung1 ji3', example: '你钟意边个？', region: '广府常用', explanation: '孩子表达偏好时很常用。', tags: ['情绪', '选择'] },
  { id: 'lost-031', word: '靓', meaning: '漂亮、好看', jyutping: 'leng3', example: '呢件衫好靓。', region: '广府常用', explanation: '赞美人和物都常见。', tags: ['形容'] },
  { id: 'lost-032', word: '叻', meaning: '聪明、能干、棒', jyutping: 'lek1', example: '你好叻呀。', region: '广府常用', explanation: '表扬孩子的核心词。', tags: ['表扬'] },
  { id: 'lost-033', word: '嬲', meaning: '生气', jyutping: 'nau1', example: '你系咪嬲咗？', region: '广府常用', explanation: '情绪词，帮助孩子说出感受。', tags: ['情绪'] },
  { id: 'lost-034', word: '惊', meaning: '害怕', jyutping: 'geng1', example: '唔使惊。', region: '广府常用', explanation: '安慰孩子时很实用。', tags: ['情绪', '安慰'] },
  { id: 'lost-035', word: '喊', meaning: '哭', jyutping: 'haam3', example: '唔好喊啦。', region: '广府常用', explanation: '比“哭”更口语。', tags: ['情绪'] },
  { id: 'lost-036', word: '揽', meaning: '抱、搂抱', jyutping: 'laam5', example: '嚟，爸爸揽下。', region: '广府常用', explanation: '亲子表达里很温暖的词。', tags: ['亲子'] },
  { id: 'lost-037', word: '拖手', meaning: '牵手', jyutping: 'to1 sau2', example: '过马路要拖手。', region: '广府常用', explanation: '外出安全高频词。', tags: ['安全', '亲子'] },
  { id: 'lost-038', word: '拎', meaning: '提、拿', jyutping: 'ling1', example: '帮我拎住个袋。', region: '广府常用', explanation: '和“攞、揸”不同，偏提着。', tags: ['动作'] },
  { id: 'lost-039', word: '摆低', meaning: '放下', jyutping: 'baai2 dai1', example: '摆低玩具先。', region: '广府常用', explanation: '睡前整理、家规场景常用。', tags: ['动作'] },
  { id: 'lost-040', word: '执', meaning: '收拾、捡', jyutping: 'zap1', example: '一齐执玩具。', region: '广府常用', explanation: '亲子家务常用词。', tags: ['整理'] },
  { id: 'lost-041', word: '摺', meaning: '折叠', jyutping: 'zip3', example: '摺好件衫。', region: '广府常用', explanation: '整理衣物时使用。', tags: ['整理'] },
  { id: 'lost-042', word: '抹', meaning: '擦', jyutping: 'mut3', example: '抹干只手。', region: '广府常用', explanation: '洗手洗澡后常用。', tags: ['卫生'] },
  { id: 'lost-043', word: '衫', meaning: '衣服', jyutping: 'saam1', example: '着衫出门。', region: '广府常用', explanation: '基础生活词。', tags: ['穿衣'] },
  { id: 'lost-044', word: '除', meaning: '脱掉', jyutping: 'ceoi4', example: '入屋要除鞋。', region: '广府常用', explanation: '脱鞋、脱衣服都可用。', tags: ['动作'] },
  { id: 'lost-045', word: '凼', meaning: '哄、逗', jyutping: 'tam5', example: '凼下细佬开心。', region: '广府常用', explanation: '家庭照顾小孩时常见。', tags: ['亲子'] },
  { id: 'lost-046', word: '扭计', meaning: '闹别扭、耍小性子', jyutping: 'nau2 gai3', example: '佢今日有啲扭计。', region: '广府常用', explanation: '描述孩子情绪状态很传神。', tags: ['情绪', '亲子'] },
  { id: 'lost-047', word: '牙擦', meaning: '爱顶嘴、神气', jyutping: 'ngaa4 caat3', example: '唔好咁牙擦。', region: '广府常用', explanation: '带一点调侃语气，使用要看场合。', tags: ['性格'] },
  { id: 'lost-048', word: '醒目', meaning: '机灵、聪明', jyutping: 'sing2 muk6', example: '你好醒目。', region: '广府常用', explanation: '表扬孩子反应快。', tags: ['表扬'] },
  { id: 'lost-049', word: '核突', meaning: '难看、恶心', jyutping: 'wat6 dat6', example: '地下咁污糟，好核突。', region: '广府常用', explanation: '生活评价词，但对人使用要谨慎。', tags: ['形容'] },
  { id: 'lost-050', word: '污糟', meaning: '脏', jyutping: 'wu1 zou1', example: '只手好污糟，去洗手。', region: '广府常用', explanation: '卫生提醒里很实用。', tags: ['卫生'] },
]
