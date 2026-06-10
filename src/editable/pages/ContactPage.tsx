'use client'

import { FileText, Mail, MessageSquareText, PencilLine } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

const lanes = [
  { icon: PencilLine, title: 'Article pitches', body: 'Send story ideas, outlines, contributor notes, and publication-ready article proposals.' },
  { icon: MessageSquareText, title: 'Corrections and feedback', body: 'Share reader feedback, correction requests, or context that helps improve an existing article.' },
  { icon: FileText, title: 'Editorial partnerships', body: 'Discuss sponsored editorial packages, content collaborations, and recurring article series.' },
  { icon: Mail, title: 'General requests', body: 'Ask about publishing access, account questions, or the best place to send a longer brief.' },
]

export default function ContactPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[var(--editable-page-bg,#f7f7f5)] text-[var(--editable-page-text,#202125)]">
        <section className="mx-auto grid max-w-[var(--editable-container)] gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div className="editable-animate-rise">
            <p className="editable-section-heading text-xs font-black uppercase tracking-[0.24em] text-[var(--slot4-accent)]">{pagesContent.contact.eyebrow}</p>
            <h1 className="mt-4 max-w-2xl text-4xl font-black leading-tight tracking-tight sm:text-5xl">{pagesContent.contact.title}</h1>
            <p className="mt-5 max-w-2xl text-sm leading-8 opacity-70">{pagesContent.contact.description}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {lanes.map((lane, index) => (
                <div key={lane.title} className="editable-news-module editable-card-shine rounded-md p-5 transition duration-300 hover:-translate-y-1 hover:shadow-xl" style={{ animationDelay: `${index * 80}ms` }}>
                  <lane.icon className="h-5 w-5 text-[var(--slot4-accent)]" />
                  <h2 className="mt-3 text-lg font-black">{lane.title}</h2>
                  <p className="mt-2 text-sm leading-7 opacity-70">{lane.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="editable-news-module editable-animate-soft-pop rounded-md p-5 sm:p-7">
            <h2 className="text-2xl font-black tracking-tight">{pagesContent.contact.formTitle}</h2>
            <p className="mt-2 text-sm leading-7 opacity-65">Use the form below and keep the subject specific so the right editorial lane can pick it up.</p>
            <div className="mt-5">
              <EditableContactLeadForm />
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
