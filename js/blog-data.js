/**
 * WriteEase AI — Blog posts
 * To add a new post, copy one object below, give it a unique `slug`, and add it to the array.
 * `content` is plain HTML (use <p>, <h2>, <ul>, <blockquote>).
 */
const BLOG_CATEGORIES = ['Grammar', 'Email', 'Academic', 'AI Writing', 'Productivity'];

const BLOG_POSTS = [
  {
    slug: 'fix-5-common-grammar-mistakes',
    title: '5 Grammar Mistakes Almost Everyone Makes (and How to Fix Them)',
    category: 'Grammar',
    badge: 'badge-success',
    icon: '✓',
    iconClass: 'tool-icon-green',
    date: '2024-11-04',
    readTime: 4,
    excerpt: 'From "their" vs "they\'re" to "should of", these small slips can undermine otherwise strong writing. Here is how to spot and fix them.',
    tool: { name: 'Grammar Fixer', href: 'grammar.html' },
    content: `
      <p>Even confident writers trip over the same handful of errors. The good news: once you know the patterns, they are easy to catch.</p>
      <h2>1. Their / There / They're</h2>
      <p><strong>Their</strong> shows ownership, <strong>there</strong> points to a place, and <strong>they're</strong> is a contraction of "they are". If you can replace the word with "they are" and the sentence still works, use <em>they're</em>.</p>
      <h2>2. "Should of" instead of "should have"</h2>
      <p>This one comes from how we speak: "should've" sounds like "should of". In writing, it is always <strong>should have</strong>, <strong>could have</strong>, <strong>would have</strong>.</p>
      <h2>3. Its vs It's</h2>
      <p><strong>It's</strong> always means "it is" or "it has". <strong>Its</strong> shows possession: "The company updated its policy."</p>
      <h2>4. "Alot"</h2>
      <p>There is no such word. Write <strong>a lot</strong> (two words), or better, use a more precise word like "many" or "often".</p>
      <h2>5. Comma splices</h2>
      <p>Two full sentences cannot be joined with only a comma. Use a period, a semicolon, or add a conjunction: "I was tired, so I went home."</p>
      <blockquote>Tip: Read your text aloud once. Your ear catches errors your eyes skip.</blockquote>
      <p>Want a second pair of eyes? Paste your draft into the Grammar Fixer and it will flag each issue with an explanation.</p>
    `
  },
  {
    slug: 'write-professional-emails-that-get-replies',
    title: 'How to Write Professional Emails That Actually Get Replies',
    category: 'Email',
    badge: 'badge-warning',
    icon: '✉',
    iconClass: 'tool-icon-amber',
    date: '2024-11-12',
    readTime: 5,
    excerpt: 'A clear subject line, one ask, and a polite close. Learn the simple structure behind emails people answer quickly.',
    tool: { name: 'Email Writer', href: 'email.html' },
    content: `
      <p>Busy people skim. If your email is hard to understand in five seconds, it goes to the bottom of the pile. Use this structure instead.</p>
      <h2>Write a specific subject line</h2>
      <p>"Question" tells the reader nothing. "Question about invoice #4821 due Friday" tells them exactly what to expect and when to act.</p>
      <h2>Lead with the point</h2>
      <p>State why you are writing in the first sentence. Context can follow, but the reader should never wonder what you want.</p>
      <h2>Make one clear ask</h2>
      <p>Multiple requests in one email lead to partial answers. If you need three things, number them, or send separate emails.</p>
      <h2>Keep it short</h2>
      <ul>
        <li>Aim for under 150 words for routine emails.</li>
        <li>Use short paragraphs of 1–3 sentences.</li>
        <li>Cut phrases like "I just wanted to" and "as per my last email".</li>
      </ul>
      <h2>Close with a next step</h2>
      <p>End with a clear action and, if relevant, a date: "Could you confirm by Thursday?" Then sign off politely.</p>
      <blockquote>Tone check: if you would not say it face to face, soften it before you hit send.</blockquote>
    `
  },
  {
    slug: 'paraphrasing-without-losing-meaning',
    title: 'Paraphrasing Done Right: Change the Words, Keep the Meaning',
    category: 'Academic',
    badge: 'badge-primary',
    icon: '⟳',
    iconClass: 'tool-icon-blue',
    date: '2024-11-19',
    readTime: 5,
    excerpt: 'Swapping a few synonyms is not paraphrasing. Learn a reliable method to rewrite ideas in your own voice.',
    tool: { name: 'Paraphraser', href: 'paraphraser.html' },
    content: `
      <p>Good paraphrasing restates an idea in your own words and sentence structure while keeping the original meaning. It still needs a citation.</p>
      <h2>A simple 4-step method</h2>
      <ul>
        <li><strong>Read</strong> the passage until you fully understand it.</li>
        <li><strong>Hide</strong> the original and explain the idea from memory.</li>
        <li><strong>Compare</strong> your version with the source to check accuracy.</li>
        <li><strong>Cite</strong> the original author.</li>
      </ul>
      <h2>Common mistakes</h2>
      <p><strong>Patchwriting</strong> means keeping the original structure and replacing a few words. Change the sentence structure, not just the vocabulary.</p>
      <p><strong>Changing the meaning</strong> can happen when you replace a technical term with a "similar" word. Keep key terms intact.</p>
      <h2>Match the tone to your audience</h2>
      <p>The same idea reads differently in a formal report, a casual blog, or an academic essay. Decide on your tone first, then rewrite.</p>
      <p>The Paraphraser offers Formal, Casual and Academic modes so you can compare versions quickly.</p>
    `
  },
  {
    slug: 'make-ai-text-sound-human',
    title: 'How to Make AI-Generated Text Sound Naturally Human',
    category: 'AI Writing',
    badge: 'badge-purple',
    icon: '☺',
    iconClass: 'tool-icon-purple',
    date: '2024-11-26',
    readTime: 4,
    excerpt: 'AI drafts are a great start, but they often sound stiff. These edits add voice, rhythm and personality.',
    tool: { name: 'AI Humanizer', href: 'humanizer.html' },
    content: `
      <p>AI can produce a clean first draft in seconds. What it often lacks is personality. Here is how to fix that.</p>
      <h2>Vary your sentence length</h2>
      <p>Robotic text has an even rhythm. Mix short sentences with longer ones. Like this.</p>
      <h2>Cut filler openers</h2>
      <p>Phrases like "In today's fast-paced world" or "It is important to note that" add nothing. Start with the actual point.</p>
      <h2>Add specifics</h2>
      <p>Replace vague claims with real examples, numbers or a short personal story. Specifics are what make writing feel human.</p>
      <h2>Use contractions and plain words</h2>
      <p>Write "don't" instead of "do not" and "use" instead of "utilize" unless the context is very formal.</p>
      <blockquote>Always review and fact-check AI-assisted writing, and follow your school or workplace policy on AI use.</blockquote>
    `
  },
  {
    slug: 'beat-writers-block',
    title: '7 Ways to Beat Writer\'s Block When the Deadline Is Close',
    category: 'Productivity',
    badge: 'badge-cyan',
    icon: '⊟',
    iconClass: 'tool-icon-cyan',
    date: '2024-12-03',
    readTime: 4,
    excerpt: 'Stuck on a blank page? Try these practical techniques to get words flowing again, fast.',
    tool: { name: 'Templates', href: 'templates.html' },
    content: `
      <p>Writer's block is usually a perfectionism problem, not a talent problem. These tactics lower the pressure so you can start.</p>
      <ul>
        <li><strong>Write a terrible first draft.</strong> You can only edit what exists.</li>
        <li><strong>Use a template.</strong> A ready structure removes the "where do I begin" problem.</li>
        <li><strong>Set a 15-minute timer.</strong> Short sprints feel manageable.</li>
        <li><strong>Outline in bullet points.</strong> Three bullets per section is enough.</li>
        <li><strong>Talk it out.</strong> Explain your point to a friend or record a voice note, then transcribe it.</li>
        <li><strong>Start in the middle.</strong> Skip the intro; write the part you know best.</li>
        <li><strong>Take a real break.</strong> A short walk often unlocks the next sentence.</li>
      </ul>
      <p>The Templates section includes ready-to-use formats for essays, job applications and professional documents, so you never start from zero.</p>
    `
  },
  {
    slug: 'write-a-strong-college-essay-intro',
    title: 'Writing a College Essay Introduction That Hooks the Reader',
    category: 'Academic',
    badge: 'badge-primary',
    icon: '✎',
    iconClass: 'tool-icon-blue',
    date: '2024-12-10',
    readTime: 5,
    excerpt: 'Your first paragraph sets the tone for the whole essay. Learn how to open strong and state a clear thesis.',
    tool: { name: 'Templates', href: 'templates.html' },
    content: `
      <p>Admissions readers and professors read dozens of essays at a time. A strong opening earns you their full attention.</p>
      <h2>Start with a hook</h2>
      <p>Try a short scene, a surprising fact, or a question that connects to your topic. Avoid dictionary definitions and sweeping statements like "Since the dawn of time".</p>
      <h2>Give brief context</h2>
      <p>Two or three sentences are enough to orient the reader. Do not summarize the whole essay here.</p>
      <h2>End with a clear thesis</h2>
      <p>Your thesis is the main argument in one or two sentences. A good thesis is specific, arguable and focused.</p>
      <h2>Quick checklist</h2>
      <ul>
        <li>Does the first line make someone want to read the second?</li>
        <li>Is the thesis clear without being obvious?</li>
        <li>Can you cut the first sentence and improve the paragraph?</li>
      </ul>
      <p>Write the introduction last if you get stuck. Once the body is done, you will know exactly what you are introducing.</p>
    `
  }
];
