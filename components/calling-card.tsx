import Image from 'next/image'

const LINKEDIN_URL = 'https://www.linkedin.com/in/jessicajones5280'

export function CallingCard() {
  return (
    <div className="cc-page">
      <div className="cc-blob a" aria-hidden="true" />
      <div className="cc-blob b" aria-hidden="true" />

      <main className="cc-main">
        <article className="cc-card" aria-labelledby="name">
          <header className="cc-hero">
            <div className="cc-portrait">
              <Image
                src="/images/jessica.jpg"
                alt="Portrait of Jessica Jones"
                width={280}
                height={350}
                priority
              />
            </div>
            <div className="cc-name-block">
              <svg className="cc-nodes" viewBox="0 0 96 30" aria-hidden="true">
                <line x1="10" y1="15" x2="48" y2="15" />
                <line x1="48" y1="15" x2="86" y2="15" />
                <circle className="node-p" cx="10" cy="15" r="6" fill="#9B6C59" />
                <circle className="node-r" cx="48" cy="15" r="6" fill="#7FAAA5" />
                <circle className="node-t" cx="86" cy="15" r="6" fill="#203333" />
              </svg>
              <p className="cc-eyebrow">Hello, I&apos;m</p>
              <h1 id="name" className="cc-name">
                Jessica <em>Jones</em>
              </h1>
              <p className="cc-gh-note">
                <span className="cc-gh-dot" aria-hidden="true" />
                Now on GitHub
              </p>
            </div>
          </header>

          <p className="cc-lede">
            I connect{' '}
            <span className="kw p" tabIndex={0}>
              people
            </span>
            ,{' '}
            <span className="kw r" tabIndex={0}>
              processes
            </span>
            , and{' '}
            <span className="kw t" tabIndex={0}>
              technology
            </span>{' '}
            to create better human experiences.
          </p>

          <hr className="cc-rule" />

          <p className="cc-more">
            My work brings together client success, change management, and practical uses of AI.
          </p>
          <p className="cc-more">
            Here you&apos;ll find professional projects, creative experiments, and tools that make
            everyday work a little easier.
          </p>

          <ul className="cc-tags" aria-label="Focus areas">
            <li>Client success</li>
            <li>Change management</li>
            <li>Practical AI</li>
          </ul>

          <p className="cc-thread">
            <svg width="46" height="16" viewBox="0 0 46 16" fill="none" aria-hidden="true">
              <path
                d="M1 8c5-7 9 7 14 0s9 7 14 0 9 7 16 0"
                stroke="#9B6C59"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
            Curiosity is the common thread.
          </p>

          <div className="cc-reach">
            <a className="cc-btn" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
              </svg>
              <span className="sr-only">Connect on LinkedIn:</span>
              linkedin.com/in/jessicajones5280
              <span className="arrow" aria-hidden="true">
                &#8599;
              </span>
            </a>
          </div>
        </article>
        <footer className="cc-footer">Jessica Jones</footer>
      </main>
    </div>
  )
}
