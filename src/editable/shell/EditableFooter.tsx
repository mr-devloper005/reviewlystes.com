'use client'

import Link from 'next/link'
import type { CSSProperties } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'
import { slot4BrandConfig } from '@/editable/theme/brand.config'

export function EditableFooter() {
  const footerVars = { '--editable-footer-bg': '#202125', '--editable-footer-text': '#ffffff' } as CSSProperties
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()

  return (
    <footer style={footerVars} className="border-t border-black/10 bg-[var(--editable-footer-bg)] text-[var(--editable-footer-text)]">
      <div className="mx-auto grid max-w-[var(--editable-container)] gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.25fr_1fr_1fr] lg:px-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white">
              <img src="/favicon.png?v=20260413" alt={slot4BrandConfig.siteName} className="h-14 w-14 object-contain" />
            </span>
            <span className="text-lg font-black tracking-tight">{slot4BrandConfig.siteName}</span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/65">
            {globalContent.footer?.description || slot4BrandConfig.tagline}
          </p>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.22em] text-white/50">Explore</h3>
          <div className="mt-4 grid gap-2">
            <Link href="/article" className="inline-flex items-center gap-2 text-sm font-bold text-white/75 hover:text-white">
              Articles <ArrowUpRight className="h-3.5 w-3.5 text-[var(--slot4-accent)]" />
            </Link>
            <Link href="/search" className="inline-flex items-center gap-2 text-sm font-bold text-white/75 hover:text-white">
              Search archive <ArrowUpRight className="h-3.5 w-3.5 text-[var(--slot4-accent)]" />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.22em] text-white/50">Site</h3>
          <div className="mt-4 grid gap-2">
            {[
              ['About', '/about'],
              ['Contact', '/contact'],
              ...(session ? [['Create', '/create']] : [['Login', '/login'], ['Sign up', '/signup']]),
            ].map(([label, href]) => (
              <Link key={href} href={href} className="text-sm font-bold text-white/75 hover:text-white">{label}</Link>
            ))}
            {session ? <p className="text-sm font-bold text-white/55">Signed in as {session.name}</p> : null}
            {session ? <button type="button" onClick={logout} className="text-left text-sm font-bold text-white/75 hover:text-white">Logout</button> : null}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs font-bold text-white/45">
        &copy; {year} {slot4BrandConfig.siteName}. All rights reserved.
      </div>
    </footer>
  )
}
