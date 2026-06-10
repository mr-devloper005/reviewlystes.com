import Link from 'next/link'
import { ArrowRight, Search } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { editableDesignContract as dc, editablePalette as pal } from '@/editable/layouts/design-contract'
import { getEditablePostImage, postHref } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

function getExcerpt(post?: SitePost | null, limit = 130) {
  const content = post?.content && typeof post.content === 'object' ? post.content as Record<string, unknown> : {}
  const raw =
    (typeof content.description === 'string' && content.description) ||
    (typeof content.summary === 'string' && content.summary) ||
    post?.summary ||
    ''
  const clean = raw.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
  return clean.length > limit ? `${clean.slice(0, limit).trim()}...` : clean
}

function taskLabel(task: TaskKey) {
  return SITE_CONFIG.tasks.find((item) => item.key === task)?.label || task
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="editable-section-heading text-xl font-black uppercase tracking-tight text-[#2b2b2b] sm:text-2xl">{children}</h2>
}

function MiniPoster({ post, href }: { post: SitePost; href: string }) {
  return (
    <Link href={href} className={`group block w-[250px] shrink-0 ${dc.motion.fade}`}>
      <article className="editable-news-module relative overflow-hidden rounded-md p-0 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(0,0,0,0.13)]">
        <div className="relative aspect-[4/3] overflow-hidden bg-[var(--slot4-media-bg)]">
          <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
          <div className="editable-story-overlay absolute inset-0" />
          <span className="editable-kicker absolute left-3 top-3">Read</span>
          <h3 className="absolute bottom-3 left-3 right-3 line-clamp-3 text-base font-black leading-tight tracking-[-0.03em] text-white drop-shadow-sm">
            {post.title}
          </h3>
        </div>
      </article>
    </Link>
  )
}

function FeatureTile({ post, href, index }: { post: SitePost; href: string; index: number }) {
  const style = index % 3
  if (style === 0) {
    return (
      <Link href={href} className="editable-card-shine group relative min-h-[330px] overflow-hidden rounded-md bg-[#24150f] p-5 text-white shadow-[0_20px_55px_rgba(0,0,0,0.16)] transition duration-300 hover:-translate-y-1">
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover opacity-70 transition duration-700 group-hover:scale-105" />
        <div className="editable-story-overlay absolute inset-0" />
        <div className="relative z-10 flex min-h-[320px] flex-col justify-end">
          <p className="editable-kicker">Featured</p>
          <h3 className="mt-3 line-clamp-3 text-2xl font-black leading-tight tracking-tight">{post.title}</h3>
          <p className="mt-4 line-clamp-2 text-sm leading-6 text-white/76">{getExcerpt(post, 110)}</p>
        </div>
      </Link>
    )
  }
  if (style === 1) {
    return (
      <Link href={href} className={`editable-news-module group grid overflow-hidden rounded-md border ${pal.border} bg-white transition duration-300 hover:-translate-y-1 md:grid-cols-[0.82fr_1fr]`}>
        <div className="relative min-h-[190px] bg-[var(--slot4-media-bg)]">
          <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        </div>
        <div className="p-6">
          <p className={`text-[11px] font-black uppercase tracking-[0.18em] ${pal.accentText}`}>Spotlight {index + 1}</p>
          <h3 className="mt-4 line-clamp-3 text-2xl font-black leading-tight tracking-tight text-[var(--slot4-page-text)]">{post.title}</h3>
          <p className={`mt-4 line-clamp-3 text-sm leading-7 ${pal.mutedText}`}>{getExcerpt(post, 135)}</p>
        </div>
      </Link>
    )
  }
  return (
    <Link href={href} className={`editable-news-module group relative overflow-hidden rounded-md border ${pal.border} bg-white p-6 transition duration-300 hover:-translate-y-1`}>
      <div className="relative h-24 w-24 overflow-hidden rounded-md border-4 border-white shadow-sm">
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
      </div>
      <p className={`mt-8 text-[11px] font-black uppercase tracking-[0.26em] ${pal.accentText}`}>Deep read</p>
      <h3 className="mt-3 line-clamp-4 text-2xl font-black leading-tight tracking-tight text-[var(--slot4-page-text)]">{post.title}</h3>
      <p className={`mt-4 line-clamp-3 text-sm leading-7 ${pal.mutedText}`}>{getExcerpt(post, 125)}</p>
    </Link>
  )
}

function WideStoryCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className={`editable-news-module group grid gap-4 overflow-hidden rounded-md border ${pal.border} bg-white p-3 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_58px_rgba(47,29,22,0.14)] sm:grid-cols-[150px_minmax(0,1fr)]`}>
      <div className="relative aspect-[5/4] overflow-hidden rounded bg-[var(--slot4-media-bg)] sm:aspect-square">
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        <span className="absolute bottom-3 left-3 bg-black/72 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-white backdrop-blur">
          Pick {index + 1}
        </span>
      </div>
      <div className="min-w-0 py-2 pr-2">
        <p className={`text-[11px] font-extrabold uppercase tracking-[0.24em] ${pal.accentText}`}>Editor's lane</p>
        <h3 className="mt-2 line-clamp-2 text-2xl font-black leading-tight tracking-[-0.04em] text-[var(--slot4-page-text)]">{post.title}</h3>
        <p className={`mt-3 line-clamp-3 text-sm leading-7 ${pal.mutedText}`}>{getExcerpt(post, 145)}</p>
      </div>
    </Link>
  )
}

function IndexPill({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className={`editable-news-module group relative overflow-hidden rounded-md border ${pal.border} bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_48px_rgba(47,29,22,0.13)]`}>
      <span className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-[var(--slot4-accent-soft)] opacity-70 transition group-hover:scale-125" />
      <p className={`relative text-[11px] font-black uppercase tracking-[0.26em] ${pal.accentText}`}>No. {String(index + 1).padStart(2, '0')}</p>
      <h3 className="relative mt-3 line-clamp-3 text-xl font-black leading-tight tracking-[-0.04em] text-[var(--slot4-page-text)]">{post.title}</h3>
      <p className={`relative mt-4 line-clamp-3 text-sm leading-7 ${pal.mutedText}`}>{getExcerpt(post, 120)}</p>
      <span className="relative mt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-[var(--slot4-page-text)] opacity-70">
        Open <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
      </span>
    </Link>
  )
}

function Rail({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`${dc.layout.rail} ${className}`}>{children}</div>
}

export function EditableHomeHero({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const heroTitle = pagesContent.home.hero.title.join(' ') || `Come for the ${taskLabel(primaryTask).toLowerCase()}. Stay for the connection.`
  const leadPosts = posts.slice(0, 5)
  const lead = leadPosts[0]
  return (
    <section className={`${pal.creamBg} border-b border-black/[0.06]`}>
      <div className="mx-auto max-w-[var(--editable-container)] px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="editable-animate-rise">
            <p className={`${dc.type.eyebrow} ${pal.accentText}`}>{pagesContent.home.hero.badge}</p>
            <h1 className="mt-4 max-w-xl text-4xl font-black leading-tight tracking-tight sm:text-5xl">{heroTitle}</h1>
            <p className={`mt-5 max-w-lg text-base leading-relaxed ${pal.mutedText} sm:text-lg`}>{pagesContent.home.hero.description}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href={primaryRoute} className={dc.button.primary}>Browse {taskLabel(primaryTask).toLowerCase()} <ArrowRight className="h-4 w-4" /></Link>
              <Link href="/search" className={dc.button.secondary}>Search archive</Link>
            </div>
          </div>
          <form action="/search" className="editable-animate-soft-pop flex rounded-md border border-black/[0.08] bg-white p-2 shadow-sm">
            <input name="q" placeholder={pagesContent.home.hero.searchPlaceholder} className="min-w-0 flex-1 bg-transparent px-4 text-sm font-semibold outline-none" />
            <button className="inline-flex items-center gap-2 rounded-md bg-[var(--slot4-accent)] px-5 py-3 text-sm font-black text-white"><Search className="h-4 w-4" /> Search</button>
          </form>
        </div>

        {lead ? (
          <div className="editable-news-module mt-8 flex overflow-hidden rounded-md text-sm">
            <span className="shrink-0 bg-[#2fbf62] px-4 py-3 text-xs font-black uppercase tracking-[0.14em] text-white">Breaking News</span>
            <Link href={postHref(primaryTask, lead, primaryRoute)} className="min-w-0 flex-1 truncate px-4 py-3 font-semibold text-[#555] hover:text-[#202124]">
              {lead.title}
            </Link>
          </div>
        ) : null}

        {lead ? (
          <div className="mt-8 grid gap-1 md:grid-cols-4 md:grid-rows-2">
            <Link href={postHref(primaryTask, lead, primaryRoute)} className="editable-card-shine group relative min-h-[360px] overflow-hidden bg-black text-white md:col-span-2 md:row-span-2">
              <img src={getEditablePostImage(lead)} alt={lead.title} className="absolute inset-0 h-full w-full object-cover opacity-78 transition duration-700 group-hover:scale-105" />
              <div className="editable-story-overlay absolute inset-0" />
              <div className="relative z-10 flex min-h-[360px] flex-col justify-end p-6">
                <span className="editable-kicker">Lead article</span>
                <h2 className="mt-4 max-w-xl text-3xl font-black leading-tight tracking-tight sm:text-4xl">{lead.title}</h2>
                <p className="mt-3 line-clamp-2 text-sm leading-6 text-white/78">{getExcerpt(lead, 150)}</p>
              </div>
            </Link>
            {leadPosts.slice(1, 5).map((post, index) => (
              <Link key={post.id || post.slug} href={postHref(primaryTask, post, primaryRoute)} className="editable-card-shine group relative min-h-[178px] overflow-hidden bg-black text-white">
                <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover opacity-75 transition duration-700 group-hover:scale-105" />
                <div className="editable-story-overlay absolute inset-0" />
                <div className="relative z-10 flex min-h-[178px] flex-col justify-end p-4">
                  <span className="editable-kicker">Pick {index + 1}</span>
                  <h3 className="mt-2 line-clamp-3 text-lg font-black leading-tight">{post.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const railPosts = posts.slice(0, 12)
  if (!railPosts.length) return null
  return (
    <section className={`${pal.warmBg} relative border-t border-black/[0.06]`}>
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-[linear-gradient(to_bottom,transparent,#ffffff)]" />
      <div className="relative mx-auto max-w-[var(--editable-container)] px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <SectionTitle>Don&apos;t Miss</SectionTitle>
          <Link href={primaryRoute} className="hidden text-sm font-semibold text-[#006d6d] hover:underline sm:inline">See all</Link>
        </div>
        <Rail className="mt-8">
          {railPosts.map((post) => <MiniPoster key={post.id} post={post} href={postHref(primaryTask, post, primaryRoute)} />)}
        </Rail>
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const featured = posts.slice(0, 8)
  if (!featured.length) return null
  return (
    <section className={`${pal.lavenderBg} relative overflow-hidden`}>
      <div className="relative mx-auto max-w-[var(--editable-container)] px-4 py-14 sm:px-6 lg:px-8">
        <SectionTitle>Must-read {taskLabel(primaryTask).toLowerCase()}</SectionTitle>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featured.slice(0, 6).map((post, index) => (
            <FeatureTile key={post.id} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const categoryPosts = timeSections.flatMap((section) => section.posts).length ? timeSections.flatMap((section) => section.posts) : posts.slice(8)
  const feature = categoryPosts[0] || posts[0]
  const picks = categoryPosts.slice(1, 5)
  const indexPosts = categoryPosts.slice(5, 13)
  return (
    <section className={pal.grayBg}>
      <div className="mx-auto grid max-w-[var(--editable-container)] gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
        <div>
          <SectionTitle>Latest Articles</SectionTitle>
          <p className={`mt-4 max-w-md text-base leading-relaxed ${pal.mutedText}`}>Find your next article faster. Browse clean sections, rich cards, and useful reads without losing the magazine rhythm.</p>
          <form action="/search" className="mt-8 flex max-w-md rounded-md border border-black/[0.08] bg-white p-2 shadow-sm">
            <input name="q" placeholder="Search articles" className="min-w-0 flex-1 bg-transparent px-4 text-sm outline-none" />
            <button className="inline-flex items-center gap-2 rounded-md bg-black px-5 py-3 text-sm font-semibold text-white"><Search className="h-4 w-4" /> Search</button>
          </form>
        </div>
        <div className="grid gap-4">
          {picks.map((post, index) => <WideStoryCard key={post.id} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
        </div>
      </div>
      {feature ? (
        <div className="mx-auto grid max-w-[var(--editable-container)] gap-8 px-4 pb-16 sm:px-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1fr)] lg:px-8">
          <Link href={postHref(primaryTask, feature, primaryRoute)} className="editable-card-shine group relative min-h-[420px] overflow-hidden rounded-md bg-black text-white shadow-[0_18px_70px_rgba(0,0,0,0.16)]">
            <img src={getEditablePostImage(feature)} alt={feature.title} className="absolute inset-0 h-full w-full object-cover opacity-65 transition duration-500 group-hover:scale-105" />
            <div className="editable-story-overlay absolute inset-0" />
            <div className="relative z-10 flex min-h-[420px] flex-col justify-end p-7 sm:p-10">
              <p className="editable-kicker">Featured stream</p>
              <h3 className="mt-4 max-w-2xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">{feature.title}</h3>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/78">{getExcerpt(feature, 180)}</p>
            </div>
          </Link>
          <div className="grid gap-4 sm:grid-cols-2">
            {indexPosts.map((post, index) => <IndexPill key={post.id} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
          </div>
        </div>
      ) : null}
    </section>
  )
}

export function EditableHomeCta() {
  return (
    <section id="get-app" className={`${pal.panelBg} relative scroll-mt-24 overflow-hidden`}>
      <div className="relative mx-auto max-w-[var(--editable-container)] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Where useful articles meet their readers</h2>
          <p className={`mt-4 text-lg ${pal.mutedText}`}>Explore fresh updates, thoughtful perspectives, and curated article collections across the site.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4"><Link href="/contact" className={dc.button.primary}>Contact us</Link></div>
        </div>
      </div>
    </section>
  )
}
