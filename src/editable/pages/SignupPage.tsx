import type { Metadata } from 'next'
import Link from 'next/link'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalSignupForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/signup', title: 'Sign up', description: pagesContent.auth.signup.metadataDescription })
}

export default function SignupPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[var(--editable-page-bg,#f7f7f5)] text-[var(--editable-page-text,#202125)]">
        <section className="mx-auto grid min-h-[calc(100vh-12rem)] max-w-[var(--editable-container)] items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.84fr_1fr] lg:px-8">
          <div className="editable-news-module editable-animate-soft-pop rounded-md p-6 backdrop-blur sm:p-8">
            <h1 className="text-3xl font-black tracking-tight">{pagesContent.auth.signup.formTitle}</h1>
            <EditableLocalSignupForm />
            <p className="mt-5 text-sm text-[#666]">Already have an account? <Link href="/login" className="font-black text-[#202125] underline-offset-4 hover:underline">{pagesContent.auth.signup.loginCta}</Link></p>
          </div>
          <div className="editable-animate-rise">
            <p className="editable-section-heading text-xs font-black uppercase tracking-[0.24em] text-[var(--slot4-accent)]">{pagesContent.auth.signup.badge}</p>
            <h2 className="mt-5 max-w-xl text-4xl font-black leading-tight tracking-tight sm:text-5xl">{pagesContent.auth.signup.title}</h2>
            <p className="mt-6 max-w-lg text-sm leading-8 opacity-70">{pagesContent.auth.signup.description}</p>
            <div className="mt-8 rounded-md border border-[var(--editable-border)] bg-[#202125] p-6 text-white">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-white/50">What you get</p>
              <p className="mt-3 text-sm leading-7 text-white/75">A simple local account session, instant access to Create, and a publishing form focused on article headlines, summaries, images, and body copy.</p>
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
