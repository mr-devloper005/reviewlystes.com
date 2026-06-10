import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'Articles, perspectives, and useful reads',
      description: 'Explore fresh articles through a polished editorial homepage built for quick scanning and comfortable reading.',
      openGraphTitle: 'Articles, perspectives, and useful reads',
      openGraphDescription: 'Discover article-led stories, explainers, and editor picks through a modern magazine experience.',
      keywords: ['article website', 'editorial site', 'article discovery', 'online magazine'],
    },
    hero: {
      badge: 'Fresh editorial picks',
      title: ['Read sharper articles,', 'without the clutter.'],
      description: 'Browse thoughtful articles, featured reads, and topic-led collections in a compact magazine layout that keeps the story first.',
      primaryCta: { label: 'Read latest articles', href: '/article' },
      secondaryCta: { label: 'Search archive', href: '/search' },
      searchPlaceholder: 'Search articles, authors, topics, or categories',
      focusLabel: 'Editorial focus',
      featureCardBadge: 'top story rotation',
      featureCardTitle: 'Today’s lead articles shape the homepage.',
      featureCardDescription: 'The newest reads stay prominent while every section keeps a clean editorial rhythm.',
    },
    intro: {
      badge: 'About the publication',
      title: 'Built for readers who want clear article discovery.',
      paragraphs: [
        'This site is designed around articles: timely reads, evergreen guides, opinion pieces, and practical explainers that are easy to scan and easier to finish.',
        'The homepage highlights the lead story, fast-moving picks, and organized article sections so visitors can move from headline to deep read naturally.',
        'Every layout choice favors readability, strong imagery, clear hierarchy, and a comfortable page width.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'Article-first navigation and homepage sections.',
        'Compact cards inspired by modern news magazine layouts.',
        'Readable detail pages with fewer distractions.',
        'Subtle card animations that keep browsing lively.',
      ],
      primaryLink: { label: 'Browse articles', href: '/article' },
      secondaryLink: { label: 'Search archive', href: '/search' },
    },
    cta: {
      badge: 'Keep reading',
      title: 'Find your next useful article in seconds.',
      description: 'Use the article archive, search, and featured sections to move from quick headlines to deeper context.',
      primaryCta: { label: 'Browse Articles', href: '/article' },
      secondaryCta: { label: 'Contact Editorial', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest posts in this section.',
    },
  },
  about: {
    badge: 'Our Editorial Mission',
    title: 'A clearer way to discover articles worth your time.',
    description: `${slot4BrandConfig.siteName} is an article-focused publication built for readers who want strong headlines, useful context, and uncluttered pages.`,
    paragraphs: [
      'We organize articles around what readers actually need: clear topics, readable summaries, strong visuals, and pages that never feel stretched across the screen.',
      'From the homepage to article detail pages, the experience is tuned for quick discovery, comfortable reading, and simple navigation back into the archive.',
      'Writers and editors can use the publishing flow to prepare drafts with a title, summary, category, image, and article body while readers get a consistent magazine-style interface.',
    ],
    values: [
      {
        title: 'Reading-first layouts',
        description: 'Every page is shaped around article clarity, headline hierarchy, and comfortable line length.',
      },
      {
        title: 'Better article discovery',
        description: 'Featured grids, archive cards, and search help readers find relevant stories quickly.',
      },
      {
        title: 'Simple publishing flow',
        description: 'The creator page keeps article submission focused, readable, and easy to complete.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'Send article ideas, editorial notes, or partnership questions.',
    description: 'Reach the team for article submissions, corrections, contributor questions, sponsored editorial ideas, or reader feedback.',
    formTitle: 'Message the editorial desk',
  },

  search: {
    metadata: {
      title: 'Search',
      description: 'Search articles, topics, categories, and titles across the site.',
    },
    hero: {
      badge: 'Search articles',
      title: 'Find the article you want faster.',
      description: 'Search by keyword, category, title, or topic to jump straight into relevant reads.',
      placeholder: 'Search by article keyword, topic, category, or title',
    },
    resultsTitle: 'Latest searchable articles',
  },
  create: {
    metadata: {
      title: 'Create',
      description: 'Create and submit new article content for the site.',
    },
    locked: {
      badge: 'Creator access',
      title: 'Login to create a new article.',
      description: 'Use your account to open the article workspace and prepare a clean draft for publication.',
    },
    hero: {
      badge: 'Publishing workspace',
      title: 'Create a polished article draft.',
      description: 'Add the headline, category, summary, image, source, and body copy your article needs before submission.',
    },
    formTitle: 'Content details',
    submitLabel: 'Submit content',
    successTitle: 'Content submitted successfully.',
  },
  auth: {
    login: {
      metadataDescription: 'Login page for this site.',
      badge: 'Reader and writer access',
      title: 'Welcome back to your article dashboard.',
      description: 'Login to continue reading, preparing article drafts, and managing your local publishing session.',
      formTitle: 'Login to your account',
      submitLabel: 'Login',
      noAccount: 'No account matched these details. Create an account first, then login.',
      success: 'Login successful. Redirecting...',
      createCta: 'Create an account',
    },
    signup: {
      metadataDescription: 'Signup page for this site.',
      badge: 'Create your writer profile',
      title: 'Start publishing article drafts with a clean account.',
      description: 'Create an account to unlock the article workspace, save your contributor details, and submit story ideas.',
      formTitle: 'Create account',
      submitLabel: 'Create account',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account created successfully. Redirecting...',
      loginCta: 'Login',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related articles',
      fallbackTitle: 'Article details',
    },
    listing: {
      relatedTitle: 'Related listings',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested articles',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit Official Site',
    },
  },
} as const
