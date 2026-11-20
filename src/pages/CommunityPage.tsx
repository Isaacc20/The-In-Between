import React from 'react';
import {
  COMMUNITY_EXPERIENCES,
  COMMUNITY_FLYERS,
  DOCUMENTARY_GALLERY,
  RECOGNITION_GALLERY,
} from '../data/portfolio';
import {
  DocumentaryGalleryGrid,
  EditorialPhotoSlot,
} from '../components/EditorialPhotoSlot';
import { Reveal } from '../components/Reveal';

export function CommunityPage() {
  const dsnEksu = COMMUNITY_EXPERIENCES.find((e) => e.id === 'dsn-eksu')!;
  const otherExperiences = COMMUNITY_EXPERIENCES.filter(
    (e) => e.id !== 'dsn-eksu'
  );

  const stageMoments = [
    ...DOCUMENTARY_GALLERY,
    RECOGNITION_GALLERY[1], // JCI Nigeria EKSU stage ceremony (23.45.15)
    RECOGNITION_GALLERY[0], // Ekiti HealthTech Summit (00.57.50)
  ];

  return (
    <div className="bg-[var(--bg-canvas)] pb-24 pt-12 text-[var(--ink-primary)] sm:pt-16 transition-colors duration-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="pb-12">
          <p className="font-mono text-xs text-[var(--ink-accent)]">
            Community & Leadership
          </p>
          <h1 className="mt-3 max-w-4xl font-serif text-4xl font-medium leading-[1.08] tracking-tight text-[var(--ink-primary)] sm:text-5xl">
            Building spaces where curiosity becomes shared momentum.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--ink-body)] sm:text-lg">
            Much of my own growth happened because people took time to teach,
            organize, and share opportunities. Serving inside campus and
            technical communities has been my way of extending that same ladder
            to others.
          </p>
        </header>

        {/* Highlighted Section: DSN EKSU */}
        <section>
          <Reveal>
            <div className="rounded-2xl bg-[var(--bg-card)] p-6 sm:p-10">
              <div className="grid gap-10 lg:grid-cols-12">
                <div className="lg:col-span-7">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--ink-muted)]">
                    <span className="font-mono font-medium text-[var(--ink-accent)]">
                      Featured Community Stewardship
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{dsnEksu.period}</span>
                  </div>

                  <h2 className="mt-3 font-serif text-2xl font-medium text-[var(--ink-primary)] sm:text-3xl">
                    {dsnEksu.organisation}
                  </h2>
                  <p className="mt-1 text-sm font-medium text-[var(--ink-accent)]">
                    {dsnEksu.role}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-[var(--ink-body)]">
                    I led and co-led the DSN EKSU campus network from May 2024
                    to December 2025 before handing over leadership in 2026. My
                    role was stewardship within the campus chapter — not as
                    founder of Data Science Nigeria or founder of DSN EKSU, but
                    as a student leader working alongside dedicated peers.
                  </p>

                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    <div className="rounded-xl bg-[var(--bg-recessed)] p-5">
                      <h3 className="font-mono text-xs uppercase tracking-wider text-[var(--ink-accent)]">
                        Responsibilities
                      </h3>
                      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[var(--ink-body)]">
                        {dsnEksu.responsibilities.map((r) => (
                          <li key={r} className="flex items-start gap-2">
                            <span
                              aria-hidden="true"
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--ink-primary)]"
                            />
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-xl bg-[var(--bg-recessed)] p-5">
                      <h3 className="font-mono text-xs uppercase tracking-wider text-[var(--ink-accent)]">
                        Contributions
                      </h3>
                      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[var(--ink-body)]">
                        {dsnEksu.contributions.map((c) => (
                          <li key={c} className="flex items-start gap-2">
                            <span
                              aria-hidden="true"
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--ink-accent)]"
                            />
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <EditorialPhotoSlot
                    src={dsnEksu.photoSrc}
                    alt="DSN EKSU campus network group photograph"
                    plateLabel={dsnEksu.photoSlotLabel}
                    caption={dsnEksu.photoCaption}
                    aspectClass="aspect-[4/3]"
                    variant="documentary"
                  />
                </div>
              </div>

              {/* Community Impact Strip */}
              <div className="mt-8 rounded-xl bg-[var(--bg-block-alt)] p-6">
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
                  <h3 className="font-serif text-lg font-medium text-[var(--ink-primary)]">
                    Reported Community Achievements (DSN EKSU Network)
                  </h3>
                  <span className="font-mono text-[11px] text-[var(--ink-muted)]">
                    Shared collective outcomes · Not personal claims alone
                  </span>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                  {dsnEksu.metrics?.map((m, idx) => (
                    <div
                      key={m.label}
                      className={`rounded-lg p-4 ${
                        idx === 0
                          ? 'bg-[var(--bg-invert)] text-[var(--ink-invert)]'
                          : 'bg-[var(--bg-recessed)] text-[var(--ink-primary)]'
                      }`}
                    >
                      <div className="font-serif text-2xl font-semibold tabular-nums">
                        {m.value}
                      </div>
                      <div
                        className={`mt-1 text-xs ${
                          idx === 0
                            ? 'text-[var(--ink-invert-muted)]'
                            : 'text-[var(--ink-muted)]'
                        }`}
                      >
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-[var(--ink-body)]">
                  Additionally, several members began publishing or initiating
                  their first research papers during this wave of campus
                  collaboration.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Other Community & Teaching Experiences */}
        <section className="mt-16">
          <div className="mb-8">
            <p className="font-mono text-xs text-[var(--ink-accent)]">
              Teaching, Moderation & Ecosystem Service
            </p>
            <h2 className="mt-2 font-serif text-2xl font-medium text-[var(--ink-primary)] sm:text-3xl">
              Other community and leadership roles
            </h2>
          </div>

          <div className="space-y-6">
            {otherExperiences.map((exp, idx) => {
              const isFlyer = exp.id === 'techhub-eksu';
              return (
                <Reveal key={exp.id} delay={idx * 0.04}>
                  <article className="grid items-start gap-8 rounded-2xl bg-[var(--bg-card)] p-6 sm:p-8 lg:grid-cols-12">
                    <div className="lg:col-span-7">
                      <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--ink-muted)]">
                        <span className="font-mono text-[var(--ink-accent)]">
                          {exp.period}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{exp.role}</span>
                      </div>

                      <h3 className="mt-2 font-serif text-2xl font-medium text-[var(--ink-primary)]">
                        {exp.organisation}
                      </h3>

                      <div className="mt-5 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-xl bg-[var(--bg-recessed)] p-4">
                          <h4 className="font-mono text-[11px] uppercase tracking-wider text-[var(--ink-accent)]">
                            Responsibilities
                          </h4>
                          <ul className="mt-2.5 space-y-2 text-sm leading-relaxed text-[var(--ink-body)]">
                            {exp.responsibilities.map((item) => (
                              <li key={item}>· {item}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="rounded-xl bg-[var(--bg-recessed)] p-4">
                          <h4 className="font-mono text-[11px] uppercase tracking-wider text-[var(--ink-accent)]">
                            Contributions
                          </h4>
                          <ul className="mt-2.5 space-y-2 text-sm leading-relaxed text-[var(--ink-muted)]">
                            {exp.contributions.map((item) => (
                              <li key={item}>· {item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-5">
                      <EditorialPhotoSlot
                        src={exp.photoSrc}
                        alt={`${exp.organisation} photograph`}
                        plateLabel={exp.photoSlotLabel}
                        caption={exp.photoCaption}
                        aspectClass={isFlyer ? 'aspect-[4/4]' : 'aspect-[16/10]'}
                        fit={isFlyer ? 'contain' : 'cover'}
                        objectPosition={
                          exp.id === 'dsn-ado-ekiti' ? 'top' : 'center'
                        }
                        variant="documentary"
                      />
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* Stage Talks, Teaching & HealthTech Pitch Photographs */}
        <section className="mt-20 border-t border-[var(--border-subtle)] pt-14">
          <Reveal>
            <div className="mb-8 max-w-2xl">
              <p className="font-mono text-xs text-[var(--ink-accent)]">
                Field Documentary Gallery
              </p>
              <h2 className="mt-2 font-serif text-2xl font-medium text-[var(--ink-primary)] sm:text-3xl">
                On stage, in workshops, and across community gatherings
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--ink-body)]">
                Photographs from Women Techmakers Ado-Ekiti (IWD 2025), Health AI
                stage pitches, Ekiti HealthTech Summit, JCI Nigeria EKSU, and
                Data Science Nigeria facilitation sessions.
              </p>
            </div>

            <DocumentaryGalleryGrid
              items={stageMoments}
              aspectClass="aspect-[4/3]"
              cardTone="recessed"
            />
          </Reveal>
        </section>

        {/* Speaking Invitations, Panels & Workshop Flyers */}
        <section className="mt-20 border-t border-[var(--border-subtle)] pt-14">
          <Reveal>
            <div className="mb-8 max-w-2xl">
              <p className="font-mono text-xs text-[var(--ink-accent)]">
                Talks, Panels & Training Sessions
              </p>
              <h2 className="mt-2 font-serif text-2xl font-medium text-[var(--ink-primary)] sm:text-3xl">
                Programme announcements & invited facilitation archive
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--ink-body)]">
                Community workshops, university panels, and data analytics
                training sessions across EKSU, DSN, GDG On Campus, Millennium
                Fellowship, Cowrywise Ambassadors, and Easy Technologies.
              </p>
            </div>

            <DocumentaryGalleryGrid
              items={COMMUNITY_FLYERS}
              aspectClass="aspect-[4/5]"
              columnsClass="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              cardTone="card"
            />
          </Reveal>
        </section>
      </div>
    </div>
  );
}
