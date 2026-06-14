import { useEffect, useMemo, useState, type ReactNode } from 'react'
import {
  allDataCounts,
  dailyPhrases,
  lostWords,
  mistakePhrases,
  parentChildPhrases,
  type DailyPhrase,
  type LostWord,
  type MistakePhrase,
  type ParentChildPhrase,
} from './data/cantonese'
import './App.css'

type PageKey = '/' | '/daily' | '/parent-child' | '/mistakes' | '/lost-words' | '/search' | '/about'
type FavoriteItem = {
  id: string
  type: 'daily' | 'parent' | 'mistake' | 'lost'
  text: string
  meta: string
}

const navItems: { path: PageKey; label: string }[] = [
  { path: '/', label: '首页' },
  { path: '/daily', label: '今日一句' },
  { path: '/parent-child', label: '亲子粤语' },
  { path: '/mistakes', label: '直译错误' },
  { path: '/lost-words', label: '濒危粤语词' },
  { path: '/search', label: '搜索' },
  { path: '/about', label: '关于' },
]

const favoriteKey = 'save-cantonese:favorites'
const heardKey = 'save-cantonese:heard-stats'

function getCurrentPath(): PageKey {
  const path = window.location.pathname as PageKey
  return navItems.some((item) => item.path === path) ? path : '/'
}

function getStoredFavorites(): FavoriteItem[] {
  try {
    return JSON.parse(localStorage.getItem(favoriteKey) || '[]') as FavoriteItem[]
  } catch {
    return []
  }
}

function getStoredHeard(): Record<string, { heard: number; unheard: number }> {
  try {
    return JSON.parse(localStorage.getItem(heardKey) || '{}') as Record<string, { heard: number; unheard: number }>
  } catch {
    return {}
  }
}

function pickDailySeed() {
  return new Date().getDate() % dailyPhrases.length
}

function navigate(path: PageKey) {
  window.history.pushState({}, '', path)
  window.dispatchEvent(new PopStateEvent('popstate'))
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function copyText(text: string) {
  void navigator.clipboard?.writeText(text)
}

function App() {
  const [page, setPage] = useState<PageKey>(getCurrentPath)
  const [favorites, setFavorites] = useState<FavoriteItem[]>(getStoredFavorites)
  const [heardStats, setHeardStats] = useState(getStoredHeard)

  useEffect(() => {
    const onPopState = () => setPage(getCurrentPath())
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  useEffect(() => {
    localStorage.setItem(favoriteKey, JSON.stringify(favorites))
  }, [favorites])

  useEffect(() => {
    localStorage.setItem(heardKey, JSON.stringify(heardStats))
  }, [heardStats])

  const toggleFavorite = (item: FavoriteItem) => {
    setFavorites((current) =>
      current.some((favorite) => favorite.id === item.id)
        ? current.filter((favorite) => favorite.id !== item.id)
        : [item, ...current],
    )
  }

  const isFavorite = (id: string) => favorites.some((favorite) => favorite.id === id)

  const recordHeard = (id: string, field: 'heard' | 'unheard') => {
    setHeardStats((current) => {
      const existing = current[id] ?? { heard: 0, unheard: 0 }
      return { ...current, [id]: { ...existing, [field]: existing[field] + 1 } }
    })
  }

  return (
    <div className="site-shell">
      <Header page={page} />
      <main>
        {page === '/' && <HomePage onFavorite={toggleFavorite} isFavorite={isFavorite} />}
        {page === '/daily' && <DailyPage onFavorite={toggleFavorite} isFavorite={isFavorite} />}
        {page === '/parent-child' && <ParentChildPage onFavorite={toggleFavorite} isFavorite={isFavorite} />}
        {page === '/mistakes' && <MistakesPage onFavorite={toggleFavorite} isFavorite={isFavorite} />}
        {page === '/lost-words' && (
          <LostWordsPage
            onFavorite={toggleFavorite}
            isFavorite={isFavorite}
            heardStats={heardStats}
            onRecord={recordHeard}
          />
        )}
        {page === '/search' && <SearchPage onFavorite={toggleFavorite} isFavorite={isFavorite} />}
        {page === '/about' && <AboutPage />}
      </main>
      <Footer />
    </div>
  )
}

function Header({ page }: { page: PageKey }) {
  return (
    <header className="topbar">
      <button className="brand" onClick={() => navigate('/')} type="button">
        <span className="brand-mark">粤</span>
        <span>
          <strong>守粤</strong>
          <small>Save Cantonese</small>
        </span>
      </button>
      <nav className="nav-scroll" aria-label="主导航">
        {navItems.map((item) => (
          <button
            key={item.path}
            className={page === item.path ? 'active' : ''}
            onClick={() => navigate(item.path)}
            type="button"
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  )
}

function HomePage({
  onFavorite,
  isFavorite,
}: {
  onFavorite: (item: FavoriteItem) => void
  isFavorite: (id: string) => boolean
}) {
  const phrase = dailyPhrases[pickDailySeed()]
  const entries = [
    { path: '/daily' as PageKey, title: '今日一句', text: '每天开口讲一句，从家庭场景开始。', icon: '声' },
    { path: '/parent-child' as PageKey, title: '亲子粤语', text: '起床、吃饭、睡前，都有可直接说的话。', icon: '家' },
    { path: '/mistakes' as PageKey, title: '普通话直译错误', text: '避开不自然直译，学会真实家庭表达。', icon: '改' },
    { path: '/lost-words' as PageKey, title: '濒危粤语词', text: '把快被忘记的词，重新带回饭桌和客厅。', icon: '词' },
    { path: '/search' as PageKey, title: '搜索', text: '按普通话、粤语、粤拼、场景和标签查找。', icon: '搜' },
    { path: '/about' as PageKey, title: '关于项目', text: '了解为什么守粤，以及如何贡献内容。', icon: '开' },
  ]

  return (
    <>
      <section className="hero-section">
        <div className="hero-copy">
          <h1>守粤 Save Cantonese</h1>
          <p>让下一代还能听懂、会讲、敢讲粤语</p>
          <div className="hero-actions">
            <button className="primary-button" onClick={() => navigate('/daily')} type="button">
              开始学习
            </button>
            <button className="ghost-button" onClick={() => navigate('/search')} type="button">
              搜索一句
            </button>
          </div>
        </div>
        <DailyCard phrase={phrase} onFavorite={onFavorite} isFavorite={isFavorite(phrase.id)} compact />
      </section>
      <section className="section-wrap">
        <div className="section-title">
          <h2>主要功能</h2>
          <p>不是词典，是每天可以马上讲出口的粤语练习。</p>
        </div>
        <div className="feature-grid">
          {entries.map((entry) => (
            <button key={entry.path} className="feature-card" onClick={() => navigate(entry.path)} type="button">
              <span>{entry.icon}</span>
              <strong>{entry.title}</strong>
              <small>{entry.text}</small>
            </button>
          ))}
        </div>
      </section>
      <section className="stats-band">
        <span>{allDataCounts.daily} 条今日一句</span>
        <span>{allDataCounts.parentChild} 条亲子粤语</span>
        <span>{allDataCounts.mistakes} 条直译纠错</span>
        <span>{allDataCounts.lostWords} 个濒危词</span>
      </section>
    </>
  )
}

function DailyPage({
  onFavorite,
  isFavorite,
}: {
  onFavorite: (item: FavoriteItem) => void
  isFavorite: (id: string) => boolean
}) {
  const [index, setIndex] = useState(pickDailySeed)
  const phrase = dailyPhrases[index]

  return (
    <PageFrame title="今日一句" intro="每天换一句，先听懂，再跟着讲。">
      <DailyCard phrase={phrase} onFavorite={onFavorite} isFavorite={isFavorite(phrase.id)} />
      <div className="center-actions">
        <button className="primary-button" onClick={() => setIndex((index + 1) % dailyPhrases.length)} type="button">
          换一句
        </button>
      </div>
    </PageFrame>
  )
}

function ParentChildPage({
  onFavorite,
  isFavorite,
}: {
  onFavorite: (item: FavoriteItem) => void
  isFavorite: (id: string) => boolean
}) {
  const categories = Array.from(new Set(parentChildPhrases.map((phrase) => phrase.category)))
  const [active, setActive] = useState(categories[0])
  const list = parentChildPhrases.filter((phrase) => phrase.category === active)

  return (
    <PageFrame title="亲子粤语" intro="把粤语放回真实家庭时刻：叫醒、吃饭、上学、安慰和睡前。">
      <div className="tabs" role="tablist">
        {categories.map((category) => (
          <button key={category} className={active === category ? 'active' : ''} onClick={() => setActive(category)} type="button">
            {category}
          </button>
        ))}
      </div>
      <div className="card-list">
        {list.map((phrase) => (
          <ParentCard key={phrase.id} phrase={phrase} onFavorite={onFavorite} isFavorite={isFavorite(phrase.id)} />
        ))}
      </div>
    </PageFrame>
  )
}

function MistakesPage({
  onFavorite,
  isFavorite,
}: {
  onFavorite: (item: FavoriteItem) => void
  isFavorite: (id: string) => boolean
}) {
  return (
    <PageFrame title="普通话直译错误" intro="不是每句普通话都能逐字翻成粤语。这里帮你从“不奇怪”讲到“好自然”。">
      <div className="card-list two-columns">
        {mistakePhrases.map((phrase) => (
          <MistakeCard key={phrase.id} phrase={phrase} onFavorite={onFavorite} isFavorite={isFavorite(phrase.id)} />
        ))}
      </div>
    </PageFrame>
  )
}

function LostWordsPage({
  onFavorite,
  isFavorite,
  heardStats,
  onRecord,
}: {
  onFavorite: (item: FavoriteItem) => void
  isFavorite: (id: string) => boolean
  heardStats: Record<string, { heard: number; unheard: number }>
  onRecord: (id: string, field: 'heard' | 'unheard') => void
}) {
  return (
    <PageFrame title="濒危粤语词" intro="有些词不是消失了，只是太久没人教孩子讲。听过就点一下，把记忆留下。">
      <div className="card-list two-columns">
        {lostWords.map((word) => (
          <LostWordCard
            key={word.id}
            word={word}
            onFavorite={onFavorite}
            isFavorite={isFavorite(word.id)}
            stats={heardStats[word.id] ?? { heard: 0, unheard: 0 }}
            onRecord={onRecord}
          />
        ))}
      </div>
    </PageFrame>
  )
}

function SearchPage({
  onFavorite,
  isFavorite,
}: {
  onFavorite: (item: FavoriteItem) => void
  isFavorite: (id: string) => boolean
}) {
  const [query, setQuery] = useState('')
  const results = useMemo(() => {
    const needle = query.trim().toLowerCase()
    if (!needle) return []

    const haystack = [
      ...dailyPhrases.map((item) => ({ source: '今日一句', type: 'daily' as const, item })),
      ...parentChildPhrases.map((item) => ({ source: '亲子粤语', type: 'parent' as const, item })),
      ...mistakePhrases.map((item) => ({ source: '直译错误', type: 'mistake' as const, item })),
      ...lostWords.map((item) => ({ source: '濒危粤语词', type: 'lost' as const, item })),
    ]

    return haystack.filter(({ item }) => JSON.stringify(item).toLowerCase().includes(needle)).slice(0, 80)
  }, [query])

  return (
    <PageFrame title="搜索" intro="搜索普通话、粤语、粤拼、场景或标签。">
      <label className="search-box">
        <span>输入关键词</span>
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="例如：瞓觉、上学、jyutping、唔使急" />
      </label>
      <div className="search-meta">{query ? `找到 ${results.length} 条结果` : '输入后开始搜索全部数据'}</div>
      <div className="card-list">
        {results.map((result) => (
          <SearchResult
            key={`${result.source}-${result.item.id}`}
            result={result}
            onFavorite={onFavorite}
            isFavorite={isFavorite(result.item.id)}
          />
        ))}
      </div>
    </PageFrame>
  )
}

function AboutPage() {
  return (
    <PageFrame title="关于项目" intro="守粤 Save Cantonese 是一个开源静态网站，目标很简单：让更多家庭每天开口讲粤语。">
      <div className="about-grid">
        <article className="text-panel">
          <h2>为什么做</h2>
          <p>
            很多广东家庭和海外华人家庭，孩子能听懂一点粤语，却越来越少开口。语言不是只靠词典保存，
            它要出现在叫醒、吃饭、放学、安慰、睡前故事这些普通时刻里。
          </p>
        </article>
        <article className="text-panel">
          <h2>不是反对普通话</h2>
          <p>
            普通话很重要，粤语也很珍贵。守粤希望孩子多一种语言能力，多一条和长辈、城市、音乐、
            电影和地方记忆连接的路。
          </p>
        </article>
        <article className="text-panel wide">
          <h2>欢迎贡献</h2>
          <p>
            第一版所有内容都放在 src/data 目录，未来可以通过 GitHub 补充更多家庭句子、地区词、
            粤拼校对和真实使用场景。这个项目适合每个会讲一点粤语的人一起慢慢养大。
          </p>
          <a className="primary-link" href="https://github.com/" target="_blank" rel="noreferrer">
            去 GitHub 贡献内容
          </a>
        </article>
      </div>
    </PageFrame>
  )
}

function PageFrame({ title, intro, children }: { title: string; intro: string; children: ReactNode }) {
  return (
    <section className="page-frame">
      <div className="page-heading">
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>
      {children}
    </section>
  )
}

function DailyCard({
  phrase,
  onFavorite,
  isFavorite,
  compact = false,
}: {
  phrase: DailyPhrase
  onFavorite: (item: FavoriteItem) => void
  isFavorite: boolean
  compact?: boolean
}) {
  return (
    <article className={`phrase-card daily-card ${compact ? 'compact' : ''}`}>
      <div className="card-kicker">{phrase.scene}</div>
      <h2>{phrase.cantonese}</h2>
      <p className="jyutping">{phrase.jyutping}</p>
      <dl>
        <div>
          <dt>普通话</dt>
          <dd>{phrase.mandarin}</dd>
        </div>
        <div>
          <dt>解释</dt>
          <dd>{phrase.explanation}</dd>
        </div>
      </dl>
      <CardActions
        text={phrase.cantonese}
        favorite={isFavorite}
        onFavorite={() => onFavorite({ id: phrase.id, type: 'daily', text: phrase.cantonese, meta: phrase.scene })}
      />
    </article>
  )
}

function ParentCard({
  phrase,
  onFavorite,
  isFavorite,
}: {
  phrase: ParentChildPhrase
  onFavorite: (item: FavoriteItem) => void
  isFavorite: boolean
}) {
  return (
    <article className="phrase-card">
      <div className="card-kicker">{phrase.scene}</div>
      <h2>{phrase.cantonese}</h2>
      <p className="jyutping">{phrase.jyutping}</p>
      <p>{phrase.mandarin}</p>
      <CardActions
        text={phrase.cantonese}
        favorite={isFavorite}
        onFavorite={() => onFavorite({ id: phrase.id, type: 'parent', text: phrase.cantonese, meta: phrase.category })}
      />
    </article>
  )
}

function MistakeCard({
  phrase,
  onFavorite,
  isFavorite,
}: {
  phrase: MistakePhrase
  onFavorite: (item: FavoriteItem) => void
  isFavorite: boolean
}) {
  return (
    <article className="phrase-card mistake-card">
      <div className="compare-row bad">
        <span>错误说法</span>
        <strong>{phrase.wrong}</strong>
      </div>
      <div className="compare-row">
        <span>不自然直译</span>
        <strong>{phrase.literal}</strong>
      </div>
      <div className="compare-row good">
        <span>自然粤语</span>
        <strong>{phrase.natural}</strong>
      </div>
      <p>{phrase.explanation}</p>
      <CardActions
        text={phrase.natural}
        favorite={isFavorite}
        onFavorite={() => onFavorite({ id: phrase.id, type: 'mistake', text: phrase.natural, meta: '普通话直译错误' })}
      />
    </article>
  )
}

function LostWordCard({
  word,
  onFavorite,
  isFavorite,
  stats,
  onRecord,
}: {
  word: LostWord
  onFavorite: (item: FavoriteItem) => void
  isFavorite: boolean
  stats: { heard: number; unheard: number }
  onRecord: (id: string, field: 'heard' | 'unheard') => void
}) {
  return (
    <article className="phrase-card lost-card">
      <div className="word-head">
        <h2>{word.word}</h2>
        <span>{word.region}</span>
      </div>
      <p className="jyutping">{word.jyutping}</p>
      <p className="meaning">{word.meaning}</p>
      <blockquote>{word.example}</blockquote>
      <p>{word.explanation}</p>
      <div className="heard-actions">
        <button onClick={() => onRecord(word.id, 'heard')} type="button">我听过 {stats.heard}</button>
        <button onClick={() => onRecord(word.id, 'unheard')} type="button">我没听过 {stats.unheard}</button>
      </div>
      <CardActions
        text={word.word}
        favorite={isFavorite}
        hideCopy
        onFavorite={() => onFavorite({ id: word.id, type: 'lost', text: word.word, meta: word.meaning })}
      />
    </article>
  )
}

function SearchResult({
  result,
  onFavorite,
  isFavorite,
}: {
  result:
    | { source: string; type: 'daily'; item: DailyPhrase }
    | { source: string; type: 'parent'; item: ParentChildPhrase }
    | { source: string; type: 'mistake'; item: MistakePhrase }
    | { source: string; type: 'lost'; item: LostWord }
  onFavorite: (item: FavoriteItem) => void
  isFavorite: boolean
}) {
  if (result.type === 'mistake') {
    return <MistakeCard phrase={result.item} onFavorite={onFavorite} isFavorite={isFavorite} />
  }
  if (result.type === 'lost') {
    return (
      <article className="phrase-card">
        <div className="card-kicker">{result.source}</div>
        <h2>{result.item.word}</h2>
        <p className="jyutping">{result.item.jyutping}</p>
        <p>{result.item.meaning}。{result.item.example}</p>
        <CardActions
          text={result.item.word}
          favorite={isFavorite}
          hideCopy
          onFavorite={() => onFavorite({ id: result.item.id, type: 'lost', text: result.item.word, meta: result.item.meaning })}
        />
      </article>
    )
  }
  const item = result.item
  return (
    <article className="phrase-card">
      <div className="card-kicker">{result.source} · {item.scene}</div>
      <h2>{item.cantonese}</h2>
      <p className="jyutping">{item.jyutping}</p>
      <p>{item.mandarin}</p>
      <CardActions
        text={item.cantonese}
        favorite={isFavorite}
        onFavorite={() => onFavorite({ id: item.id, type: result.type, text: item.cantonese, meta: result.source })}
      />
    </article>
  )
}

function CardActions({
  text,
  favorite,
  onFavorite,
  hideCopy = false,
}: {
  text: string
  favorite: boolean
  onFavorite: () => void
  hideCopy?: boolean
}) {
  return (
    <div className="card-actions">
      {!hideCopy && <button onClick={() => copyText(text)} type="button">复制粤语</button>}
      <button className={favorite ? 'favorited' : ''} onClick={onFavorite} type="button">
        {favorite ? '已收藏' : '收藏'}
      </button>
    </div>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <strong>守粤 Save Cantonese</strong>
      <span>开源、静态、无后端。把粤语留在每天真实说出口的句子里。</span>
    </footer>
  )
}

export default App
