import React, { useRef, useState } from 'react';
import { ArrowUpRight, CheckCircle2, Copy, FileText } from 'lucide-react';
import { SITE_CONFIG } from '../data/portfolio';
import { Link } from '../lib/router';

const COLLABORATION_TOPICS = [
  'Research collaborations (AMR, genomic surveillance, computational biology)',
  'Postgraduate & academic opportunities',
  'Conference & speaking invitations',
  'Technical collaborations (African NLP, food systems AI, analytics)',
  'Mentorship & community engagements',
];

export function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState(COLLABORATION_TOPICS[0]);
  const [message, setMessage] = useState('');
  const [websiteTrap, setWebsiteTrap] = useState('');
  const mountedAtRef = useRef<number>(Date.now());

  const [status, setStatus] = useState<'idle' | 'error' | 'submitted'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (websiteTrap.trim() !== '' || Date.now() - mountedAtRef.current < 1200) {
      setStatus('error');
      setErrorMsg('Submission could not be verified. Please try again.');
      return;
    }

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus('error');
      setErrorMsg('Please complete your name, email, and message.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setStatus('error');
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setStatus('submitted');
    setErrorMsg('');
  };

  const handleCopyEmail = () => {
    if (!SITE_CONFIG.email) return;
    navigator.clipboard?.writeText(SITE_CONFIG.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[var(--bg-canvas)] pb-24 pt-12 text-[var(--ink-primary)] sm:pt-16 transition-colors duration-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="pb-12">
          <p className="font-mono text-xs text-[var(--ink-accent)]">Contact</p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl font-medium leading-[1.08] tracking-tight text-[var(--ink-primary)] sm:text-5xl">
            Let’s explore meaningful questions together.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--ink-body)] sm:text-lg">
            I welcome conversations around interdisciplinary research,
            postgraduate supervision, conference invitations, technical
            collaborations, and community mentorship.
          </p>
        </header>

        <div className="grid gap-10 lg:grid-cols-12">
          {/* Left: Direct Channels & Collaboration Focus */}
          <div className="space-y-6 lg:col-span-5">
            <div className="rounded-2xl bg-[var(--bg-card)] p-6 sm:p-7">
              <h2 className="font-serif text-xl font-medium text-[var(--ink-primary)]">
                Open to conversations on
              </h2>
              <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-[var(--ink-body)]">
                {COLLABORATION_TOPICS.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--ink-accent)]"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-[var(--bg-recessed)] p-6 sm:p-7">
              <h2 className="font-serif text-xl font-medium text-[var(--ink-primary)]">
                Direct Channels
              </h2>

              <dl className="mt-5 space-y-3 text-sm">
                <div className="rounded-xl bg-[var(--bg-card)] p-4">
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-[var(--ink-accent)]">
                    Email
                  </dt>
                  <dd className="mt-1">
                    {SITE_CONFIG.email ? (
                      <div className="flex items-center justify-between gap-3">
                        <a
                          href={`mailto:${SITE_CONFIG.email}`}
                          className="font-medium text-[var(--ink-primary)] hover:underline"
                        >
                          {SITE_CONFIG.email}
                        </a>
                        <button
                          type="button"
                          onClick={handleCopyEmail}
                          className="inline-flex items-center gap-1 rounded bg-[var(--bg-block-alt)] px-2.5 py-1 text-xs text-[var(--ink-primary)] hover:bg-[var(--bg-invert)] hover:text-[var(--ink-invert)]"
                        >
                          <Copy className="h-3 w-3" aria-hidden="true" />
                          <span>{copied ? 'Copied' : 'Copy'}</span>
                        </button>
                      </div>
                    ) : (
                      <span className="text-xs text-[var(--ink-muted)]">
                        Email address slot ready in{' '}
                        <code className="font-mono text-[var(--ink-primary)]">
                          src/data/portfolio.ts
                        </code>{' '}
                        — use LinkedIn or the form alongside in the meantime.
                      </span>
                    )}
                  </dd>
                </div>

                <div className="rounded-xl bg-[var(--bg-card)] p-4">
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-[var(--ink-accent)]">
                    LinkedIn
                  </dt>
                  <dd className="mt-1">
                    <Link
                      to={SITE_CONFIG.socials.linkedin}
                      className="inline-flex items-center gap-1.5 font-medium text-[var(--ink-primary)] hover:text-[var(--ink-accent)]"
                    >
                      <span>linkedin.com/in/favour-falade</span>
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </dd>
                </div>

                <div className="rounded-xl bg-[var(--bg-card)] p-4">
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-[var(--ink-accent)]">
                    GitHub
                  </dt>
                  <dd className="mt-1">
                    <Link
                      to={SITE_CONFIG.socials.github}
                      className="inline-flex items-center gap-1.5 font-medium text-[var(--ink-primary)] hover:text-[var(--ink-accent)]"
                    >
                      <span>github.com/FaladeF311</span>
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </dd>
                </div>

                <div className="pt-2">
                  <Link
                    to="/cv"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--bg-invert)] px-4 py-3 text-xs font-semibold text-[var(--ink-invert)] hover:opacity-90 transition-opacity"
                  >
                    <FileText className="h-4 w-4" aria-hidden="true" />
                    <span>View & Download Curriculum Vitae</span>
                  </Link>
                </div>
              </dl>
            </div>
          </div>

          {/* Right: Inquiry Form with Honeypot Spam Protection */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[var(--bg-card)] p-6 sm:p-8">
              <h2 className="font-serif text-2xl font-medium text-[var(--ink-primary)]">
                Send an inquiry
              </h2>
              <p className="mt-2 text-sm text-[var(--ink-muted)]">
                Share context about your research group, event, or project.
              </p>

              {status === 'submitted' ? (
                <div
                  role="status"
                  className="mt-6 rounded-xl bg-[var(--bg-focal)] p-6 text-[var(--ink-focal)]"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-[var(--ink-focal-accent)]"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="font-serif text-lg font-medium text-[var(--ink-focal)]">
                        Message prepared for Favour Falade
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--ink-focal-body)]">
                        Thank you, <strong>{name}</strong>. Your note regarding{' '}
                        <em>{topic}</em> has been validated.{' '}
                        {SITE_CONFIG.email
                          ? 'You can also send it directly via your email client below.'
                          : 'To connect immediately while direct email routing is configured, please reach out via LinkedIn.'}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-3">
                        {SITE_CONFIG.email && (
                          <a
                            href={`mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent(
                              `[Portfolio Inquiry] ${topic}`
                            )}&body=${encodeURIComponent(
                              `From: ${name} (${email})\n\n${message}`
                            )}`}
                            className="inline-flex items-center gap-2 rounded-lg bg-[#EFE6DB] px-4 py-2.5 text-xs font-semibold text-[#18110D]"
                          >
                            <span>Open in Email App</span>
                            <ArrowUpRight
                              className="h-3.5 w-3.5"
                              aria-hidden="true"
                            />
                          </a>
                        )}
                        <Link
                          to={SITE_CONFIG.socials.linkedin}
                          className="inline-flex items-center gap-2 rounded-lg bg-[#211712] px-4 py-2.5 text-xs font-medium text-[#EFE6DB] hover:bg-[#18110D]"
                        >
                          <span>Message on LinkedIn</span>
                          <ArrowUpRight
                            className="h-3.5 w-3.5"
                            aria-hidden="true"
                          />
                        </Link>
                        <button
                          type="button"
                          onClick={() => {
                            setStatus('idle');
                            setMessage('');
                          }}
                          className="px-3 py-2 text-xs text-[var(--ink-focal-body)] hover:text-white"
                        >
                          Write another note
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="website-field">Website</label>
                    <input
                      id="website-field"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={websiteTrap}
                      onChange={(e) => setWebsiteTrap(e.target.value)}
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-medium text-[var(--ink-body)]"
                      >
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Dr. / Prof. / Colleague Name"
                        className="mt-1.5 w-full rounded-lg bg-[var(--bg-recessed)] px-3.5 py-2.5 text-sm text-[var(--ink-primary)] placeholder:text-[var(--ink-muted)]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-medium text-[var(--ink-body)]"
                      >
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@institution.org"
                        className="mt-1.5 w-full rounded-lg bg-[var(--bg-recessed)] px-3.5 py-2.5 text-sm text-[var(--ink-primary)] placeholder:text-[var(--ink-muted)]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-topic"
                      className="block text-xs font-medium text-[var(--ink-body)]"
                    >
                      Area of Interest
                    </label>
                    <select
                      id="contact-topic"
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      className="mt-1.5 w-full rounded-lg bg-[var(--bg-recessed)] px-3.5 py-2.5 text-sm text-[var(--ink-primary)]"
                    >
                      {COLLABORATION_TOPICS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-medium text-[var(--ink-body)]"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share a brief note on the research question, event, or collaboration..."
                      className="mt-1.5 w-full rounded-lg bg-[var(--bg-recessed)] px-3.5 py-2.5 text-sm text-[var(--ink-primary)] placeholder:text-[var(--ink-muted)]"
                    />
                  </div>

                  {status === 'error' && (
                    <p
                      role="alert"
                      className="text-xs font-medium text-[var(--ink-accent)]"
                    >
                      {errorMsg}
                    </p>
                  )}

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                    <span className="font-mono text-[11px] text-[var(--ink-muted)]">
                      Protected against automated spam submissions
                    </span>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-lg bg-[var(--bg-invert)] px-5 py-3 text-sm font-semibold text-[var(--ink-invert)] whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity"
                    >
                      Prepare Message
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
