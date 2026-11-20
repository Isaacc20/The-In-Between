export type ProjectStatus =
  | 'Completed'
  | 'Ongoing'
  | 'Research in progress'
  | 'Prototype'
  | 'Exploring';

export interface CaseStudySections {
  introduction: string;
  problem: string;
  whyItMatters: string;
  ideaAndMotivation: string;
  roleAndContributions: string;
  technicalApproach: string;
  toolsAndTechnologies: string[];
  challenges: string;
  resultsAndOutcomes: string;
  whatILearned: string;
  whatComesNext: string;
  existingVsPlanned?: {
    existing: string[];
    planned: string[];
  };
}

export interface ProjectItem {
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  field: string;
  status: ProjectStatus;
  year: string;
  featured: boolean;
  visualType: 'image' | 'banking-plate' | 'safety-plate';
  imageSrc?: string;
  imageAlt: string;
  accentTone?: 'cobalt' | 'gold';
  links: {
    label: string;
    url: string;
    external?: boolean;
  }[];
  metrics?: {
    label: string;
    value: string;
    note?: string;
  }[];
  caseStudy: CaseStudySections;
}

export interface TimelineMilestone {
  id: string;
  period: string;
  title: string;
  summary: string;
  details: string[];
  location?: string;
  relatedRoute?: string;
  relatedLabel?: string;
}

export interface CommunityExperience {
  id: string;
  organisation: string;
  role: string;
  period: string;
  highlight?: boolean;
  responsibilities: string[];
  contributions: string[];
  photoSlotLabel: string;
  photoCaption: string;
  photoSrc: string | null;
  metrics?: { label: string; value: string }[];
  attributionNote?: string;
}

export interface DomainIntersection {
  id: string;
  title: string;
  shortLabel: string;
  description: string;
  bridgingQuestion: string;
  connectedTo: string[];
  exampleWork: {
    title: string;
    route: string;
  };
}

export const SITE_CONFIG = {
  ownerName: 'Favour Falade',
  conceptTitle: 'The In-Between',
  conceptMotto: 'Where different worlds meet, new possibilities emerge.',
  domain: 'favourfalade.com',
  // Replace `null` with your email address (e.g., 'hello@favourfalade.com') when ready
  email: null as string | null,
  // Drop your actual CV PDF into `public/cv/Favour-Falade-CV.pdf` and set this path
  cvPdfPath: null as string | null,
  // Transparent-background hero cutout portrait PNG
  heroPortraitSrc: '/src/assets/images/favour-hero-cutout-black.png' as string | null,
  // Featured Story speaking & symposium portrait
  storyPhotoSrc:
    '/src/assets/images/WhatsApp Image 2026-11-18 at 23.45.21.jpeg' as string | null,
  socials: {
    linkedin: 'https://www.linkedin.com/in/favour-falade',
    github: 'https://github.com/FaladeF311',
  },
  currentlyExploring: [
    'Bioinformatics & sequence analysis workflows',
    'Computational biology & clonal population structures',
    'Machine learning research for antimicrobial resistance',
    'African language technology & dialectal inclusion (Ekiti Yoruba)',
    'AI applications in food systems and post-harvest safety',
  ],
  influencesAndThinking: [
    {
      title: 'First-principles curiosity across scarce resources',
      note: 'Learning to ask how computational tools can extend scientific inquiry when wet-lab infrastructure is constrained.',
    },
    {
      title: 'Methodological honesty in biomedical AI',
      note: 'Questioning inflated benchmarks, clonal data leakage, and model assumptions before claiming clinical readiness.',
    },
    {
      title: 'Contextual technology for African communities',
      note: 'Building models and communities that reflect local languages, agricultural realities, and public health priorities.',
    },
  ],
};

export const DOMAIN_INTERSECTIONS: DomainIntersection[] = [
  {
    id: 'biology',
    title: 'Biological Sciences',
    shortLabel: 'Biology',
    description:
      'Rooted in Microbiology at Ekiti State University — studying pathogenic bacteria, antimicrobial extracts, and how microorganisms adapt.',
    bridgingQuestion:
      'How do microbial resistance patterns behave when modeled computationally?',
    connectedTo: ['ai', 'research', 'data'],
    exampleWork: {
      title: 'CPHIA 2026 AMR Research',
      route: '/research',
    },
  },
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    shortLabel: 'AI & ML',
    description:
      'Applying machine learning, computer vision, and natural language models carefully — with attention to generalization and safety.',
    bridgingQuestion:
      'Where do machine learning models genuinely help science, and where do they overfit?',
    connectedTo: ['biology', 'research', 'creativity'],
    exampleWork: {
      title: 'Afara Language Technology',
      route: '/projects/afara',
    },
  },
  {
    id: 'research',
    title: 'Scientific Research',
    shortLabel: 'Research',
    description:
      'Designing disciplined evaluations, checking for genomic leakage, and asking clear questions about public health surveillance.',
    bridgingQuestion:
      'What happens to AMR prediction estimates when clonal relatedness is controlled?',
    connectedTo: ['biology', 'ai', 'data'],
    exampleWork: {
      title: 'Carbapenem Resistance Study',
      route: '/research',
    },
  },
  {
    id: 'data',
    title: 'Data Science',
    shortLabel: 'Data Science',
    description:
      'Exploring structured datasets, Power BI analytics, statistical storytelling, and reproducible validation pipelines.',
    bridgingQuestion:
      'How can visual and quantitative clarity uncover patterns hidden inside noisy records?',
    connectedTo: ['research', 'biology', 'creativity'],
    exampleWork: {
      title: 'Banking Analytics Dashboard',
      route: '/projects/banking-analytics-dashboard',
    },
  },
  {
    id: 'community',
    title: 'Community & Mentorship',
    shortLabel: 'Community',
    description:
      'Co-leading campus data networks, tutoring analytics learners, and helping peers bridge curiosity into research and careers.',
    bridgingQuestion:
      'How do we turn isolated self-learning into shared local capacity?',
    connectedTo: ['ai', 'data', 'creativity'],
    exampleWork: {
      title: 'DSN EKSU & Leadership',
      route: '/community',
    },
  },
  {
    id: 'creativity',
    title: 'Creativity, Language & Faith',
    shortLabel: 'Creativity',
    description:
      'Connecting analytical work with human culture, Ekiti Yoruba linguistic nuance, and reflective Scripture exploration.',
    bridgingQuestion:
      'Can data visualization observe deeply without reducing meaning?',
    connectedTo: ['ai', 'data', 'community'],
    exampleWork: {
      title: "God's Dataset",
      route: '/projects/gods-dataset',
    },
  },
];

export const FEATURED_RESEARCH = {
  title:
    'Genomic Relatedness Alters Machine Learning Estimates of Carbapenem Resistance Prediction: Implications for African Genomic Surveillance',
  conference: 'CPHIA 2026',
  abstractId: '2514',
  status: 'Abstract accepted',
  publicationNote:
    'Accepted conference abstract for CPHIA 2026 — presented transparently as conference research rather than a published journal article.',
  area: 'Machine learning, antimicrobial resistance, and genomic surveillance',
  track: 'Primary Health Care, digital transformation and AI-enabled health systems',
  imageSrc: '/src/assets/images/amr_genomic_plate_1795125870666.jpg',
  imageAlt:
    'Scientific editorial illustration depicting bacterial clonal relatedness clusters and genomic similarity links',
  methodology: {
    dataNature:
      'Synthetic gene presence/absence profiles (not a real-world clinical genomic dataset)',
    totalProfiles: 188,
    founderClones: 53,
    nearIdenticalDescendants: 75,
    jaccardThreshold: 0.95,
    validationStrategy: 'GroupKFold partitioned strictly by clonal lineage',
    imbalanceHandling: 'SMOTE applied strictly within training folds to prevent leakage',
  },
  naiveOverallAuc: 0.818,
  clusterAwareResults: [
    { model: 'Linear SVM', auc: 0.848, family: 'Linear' },
    { model: 'Logistic Regression', auc: 0.846, family: 'Linear' },
    { model: 'XGBoost', auc: 0.770, family: 'Tree Ensemble' },
    { model: 'Random Forest', auc: 0.761, family: 'Tree Ensemble' },
  ],
  sections: {
    researchQuestion:
      'Does ignoring highly similar clonal genomes inflate machine learning performance estimates for carbapenem resistance prediction, and how do linear versus tree-based models behave when evaluated under clone-aware cross-validation?',
    backgroundAndMotivation:
      'Antimicrobial resistance (AMR) — particularly carbapenem resistance — poses an urgent public health challenge across African healthcare systems. As machine learning is increasingly proposed to assist genomic surveillance, standard random train-test splits often place near-identical bacterial clones across both training and evaluation sets, risking overly optimistic accuracy claims.',
    methodologyDetail:
      'To isolate and measure the effect of clonal relatedness under controlled assumptions, the study constructs 188 synthetic gene presence/absence profiles derived from 53 founder clones, including 75 near-identical descendants. Near-identical profiles are identified using a 0.95 Jaccard similarity threshold. Model evaluation compares naive random splitting against clone-grouped cross-validation (GroupKFold by clone), with SMOTE oversampling applied strictly inside training folds.',
    resultsInterpretation:
      'Under naive evaluation, overall AUC appeared uniformly optimistic (0.818). Once clonal leakage was controlled via GroupKFold, model rankings diverged sharply: linear models maintained stronger generalization (Linear SVM: 0.848; Logistic Regression: 0.846), whereas tree-based ensembles dropped notably (XGBoost: 0.770; Random Forest: 0.761).',
    publicHealthRelevance:
      'In resource-constrained genomic surveillance settings, deploying models validated without clonal grouping can mislead clinical or epidemiological decision-makers about how well a predictor will perform on newly emerging, unrelated strains.',
    limitations:
      'This study deliberately utilizes synthetic gene presence/absence profiles rather than real-world clinical whole-genome sequences. Findings illuminate structural validation risks and model behavior rather than serving as a direct clinical diagnostic benchmark.',
    implicationsForSurveillance:
      'African genomic surveillance pipelines adopting AI must incorporate phylogenetic or similarity-threshold grouping (such as Jaccard-clustered GroupKFold) as a baseline standard before reporting predictive utility.',
  },
  otherResearchInterests: [
    {
      title: 'Machine Learning for Antimicrobial Resistance',
      stage: 'Active Research',
      description:
        'Investigating leakage-resistant validation designs and interpretable feature selection for resistance gene determinants.',
    },
    {
      title: 'AI in Infectious Disease Surveillance',
      stage: 'Ongoing Exploration',
      description:
        'Exploring how low-overhead computational models can support early signal detection in Primary Health Care networks.',
    },
    {
      title: 'Bioinformatics & Microbiome Research',
      stage: 'Developing Direction',
      description:
        'Building foundational fluency in sequence workflows, microbial ecology analysis, and comparative genomics.',
    },
    {
      title: 'Computational Biology',
      stage: 'Developing Direction',
      description:
        'Bridging wet-lab microbiological intuition with mathematical and algorithmic modeling.',
    },
    {
      title: 'AI for Food Safety & Food Microbiology',
      stage: 'Prototype & Inquiry',
      description:
        'Connecting microbiological spoilage dynamics with accessible computer vision inspection for post-harvest systems.',
    },
  ],
};

export const UNDERGRADUATE_RESEARCH = {
  title:
    'Antimicrobial screening of unfermented Parkia biglobosa seed extract against Staphylococcus aureus isolated from a conjunctivitis patient',
  institution: 'Ekiti State University, Department of Microbiology',
  status: 'Undergraduate Research Thesis (Unpublished)',
  solvent: 'Water (aqueous extraction)',
  methods: [
    'Microtiter Plate Method',
    'Paper Disk Diffusion',
    'Agar Well Diffusion',
  ],
  note: 'Conducted as part of undergraduate Microbiology training. Presented accurately as undergraduate research rather than a peer-reviewed journal publication.',
};

export const PROJECTS: ProjectItem[] = [
  {
    slug: 'afara',
    title: 'Afara',
    subtitle: 'Ekiti Yoruba–English Language Technology & Dialect Inclusion',
    shortDescription:
      'A language technology initiative bridging Yoruba–English translation and speech tools with deliberate attention to Ekiti Yoruba dialect variations.',
    field: 'African Language Technology · NLP & Speech',
    status: 'Ongoing',
    year: '2025–2026',
    featured: true,
    visualType: 'image',
    imageSrc: '/src/assets/images/afara_bridge_plate_1795125871121.jpg',
    imageAlt:
      'Editorial illustration showing oral speech waveforms weaving into geometric indigo Yoruba textile motifs',
    accentTone: 'cobalt',
    links: [
      {
        label: 'View Deep Learning Indaba Context',
        url: '/community',
        external: false,
      },
    ],
    metrics: [
      { label: 'Team Led', value: '5 Students' },
      { label: 'Showcase', value: 'Deep Learning Indaba 2026' },
      { label: 'Core Focus', value: 'Ekiti Yoruba Dialect' },
    ],
    caseStudy: {
      introduction:
        'Afara ("Bridge" in Yoruba) is a collaborative language technology project exploring Yoruba–English translation and speech processing with specific focus on Ekiti Yoruba dialect variations.',
      problem:
        'Mainstream multilingual AI systems frequently treat Yoruba as a single standardized orthography and spoken form, overlooking regional dialects such as Ekiti Yoruba in both text translation and speech recognition.',
      whyItMatters:
        'Language technology shapes who can access digital tools, healthcare information, and educational resources comfortably. When regional dialects are absent from datasets and models, speakers are effectively excluded from voice-first and translation technologies.',
      ideaAndMotivation:
        'Growing up and studying in Ekiti State inspired the question: what would it take to build a practical bridge between everyday Ekiti spoken expressions, standard Yoruba, and English?',
      roleAndContributions:
        'Led a five-student team, coordinating technical direction, dataset collection workflows, model experimentation, and the presentation of the project at the Deep Learning Indaba 2026 Community Showcase.',
      technicalApproach:
        'The team explored a modular pipeline combining NLLB (No Language Left Behind) for text translation, Whisper-based automatic speech recognition experiments, custom Yoruba and Ekiti dialect data collection, text-to-speech exploration, and an integrated Streamlit interface for interactive testing.',
      toolsAndTechnologies: [
        'NLLB Translation Models',
        'OpenAI Whisper (ASR Exploration)',
        'Text-to-Speech (TTS) Exploration',
        'Streamlit',
        'Python',
        'Custom Dialectal Data Collection',
      ],
      challenges:
        'Low-resource dialectal data scarcity, tonal diacritic consistency, audio recording noise variability, and balancing model latency inside a student-built prototype.',
      resultsAndOutcomes:
        'Delivered a working prototype demonstrated at the Deep Learning Indaba 2026 Community Showcase while establishing an ongoing Ekiti Yoruba dialect data collection effort.',
      whatILearned:
        'Technical architectures alone cannot solve linguistic exclusion; community trust, careful phonetic curation, and iterative team leadership matter just as much as model checkpoints.',
      whatComesNext:
        'Expanding verified Ekiti dialect audio and parallel text corpora, refining speech-to-text accuracy, and documenting reproducible evaluation benchmarks.',
    },
  },
  {
    slug: 'gods-dataset',
    title: "God's Dataset",
    subtitle: 'Scripture Data Exploration, Network Graphs & Analytical Storytelling',
    shortDescription:
      'An exploratory platform at the intersection of faith, Scripture, and data — built around the principle: "Observing, not redefining. Revealing, not replacing."',
    field: 'Analytical Storytelling · Faith & Data',
    status: 'Ongoing',
    year: '2025–2026',
    featured: true,
    visualType: 'image',
    imageSrc: '/src/assets/images/gods_dataset_plate_1795125872409.jpg',
    imageAlt:
      'Fine-art radial data visualization showing concentric Scripture cross-reference arcs in soft gold and charcoal ink',
    accentTone: 'gold',
    links: [
      {
        label: 'Visit godsdataset.com',
        url: 'https://godsdataset.com',
        external: true,
      },
      {
        label: 'Open Interactive Platform',
        url: 'https://gods-dataset.lovable.app',
        external: true,
      },
    ],
    metrics: [
      { label: 'Core Principle', value: 'Observing, not redefining' },
      { label: 'Focus', value: 'Scripture & Network Graphs' },
      { label: 'Web Presence', value: 'godsdataset.com' },
    ],
    caseStudy: {
      introduction:
        "God's Dataset is a personal and creative interdisciplinary project exploring how data visualization, network analysis, and structured text study can invite deeper engagement with Scripture.",
      problem:
        'Many readers encounter the Bible as isolated verses rather than seeing its interconnected themes, recurring vocabulary, cross-book narratives, and structural patterns across 66 books.',
      whyItMatters:
        'Thoughtful visual and structural tools can illuminate literary and thematic relationships without reducing spiritual meaning to cold statistics.',
      ideaAndMotivation:
        'Guided by the philosophy "Observing, not redefining. Revealing, not replacing," the project asks how data science sensibilities can serve contemplative reading and word studies.',
      roleAndContributions:
        'Conceived the intellectual framing, curated structural explorations, designed biblical text analyses, word studies, and network visualizations, and launched the public platform.',
      technicalApproach:
        'Combines structured Scripture text indexing, lexical frequency and word-study mapping, cross-reference network graphs, and clean interactive Bible visualizations.',
      toolsAndTechnologies: [
        'Biblical Text Analysis',
        'Network Graph Visualization',
        'Lexical & Word Studies',
        'Interactive Web Platform',
        'Analytical Storytelling',
      ],
      challenges:
        'Maintaining reverence, theological humility, and editorial clarity so visual tools encourage closer reading rather than distracting with gimmicky metrics.',
      resultsAndOutcomes:
        'Published as an evolving public web experience at godsdataset.com and gods-dataset.lovable.app with interactive Scripture visualizations and word explorations.',
      whatILearned:
        'Data storytelling is at its strongest when it knows its boundaries — acting as a lens for curiosity rather than claiming final authority over human meaning.',
      whatComesNext:
        'Expanding cross-reference network explorations, thematic book studies, and deeper interactive lexical views.',
    },
  },
  {
    slug: 'food-spoilage-detection',
    title: 'AI for Food Spoilage Detection',
    subtitle: 'Computer Vision Exploration for Freshness & Food Systems',
    shortDescription:
      'A computer vision prototype exploring how machine learning can distinguish fresh from spoiled produce, with a broader roadmap toward spoilage staging.',
    field: 'Computer Vision · Food Microbiology',
    status: 'Prototype',
    year: '2025–2026',
    featured: true,
    visualType: 'image',
    imageSrc: '/src/assets/images/spoilage_botanical_plate_1795125873227.jpg',
    imageAlt:
      'Editorial specimen study of fresh tropical produce with subtle geometric measurement crosshairs',
    accentTone: 'cobalt',
    links: [
      {
        label: 'Discuss Research Collaboration',
        url: '/contact',
        external: false,
      },
    ],
    metrics: [
      { label: 'Current Capability', value: 'Fresh vs. Spoiled Classification' },
      { label: 'Domain Bridge', value: 'Microbiology + Vision' },
      { label: 'Stage', value: 'Working Prototype' },
    ],
    caseStudy: {
      introduction:
        'A computer vision project inspired by food microbiology and post-harvest waste challenges, exploring how accessible visual models can differentiate fresh and spoiled food items.',
      problem:
        'Post-harvest spoilage and subjective visual inspection contribute significantly to food waste and foodborne safety risks across local markets and supply chains.',
      whyItMatters:
        'Connecting microbiological knowledge of spoilage indicators with lightweight computer vision could eventually support low-cost quality screening where laboratory testing is unavailable.',
      ideaAndMotivation:
        'As a Microbiology graduate familiar with microbial food deterioration, I wanted to test how visual surface cues correlate with machine-learned classification boundaries.',
      roleAndContributions:
        'Designed the problem framing, curated image classification experiments, and mapped the distinction between current binary detection and long-term microbiological spoilage staging.',
      technicalApproach:
        'Trained and evaluated image classification baselines distinguishing clearly fresh samples from spoiled samples, while documenting future requirements for multi-stage grading.',
      toolsAndTechnologies: [
        'Python',
        'Computer Vision Classification',
        'Image Preprocessing',
        'Food Microbiology Domain Framing',
      ],
      challenges:
        'Lighting variation, subtle intermediate decay stages that look visually ambiguous before microbial load spikes, and the gap between surface appearance and internal safety.',
      resultsAndOutcomes:
        'Established a working prototype capable of binary fresh-versus-spoiled classification and articulated a disciplined roadmap for future validation.',
      whatILearned:
        'Computer vision can detect surface symptoms, but credible food safety claims require pairing visual signals with microbiological ground truth.',
      whatComesNext:
        'Building curated multi-stage spoilage datasets, exploring food quality grading, and evaluating whether shelf-life estimation is scientifically reliable.',
      existingVsPlanned: {
        existing: [
          'Binary computer vision classification distinguishing fresh vs. spoiled food samples',
          'Initial model evaluation and problem framing grounded in food microbiology',
        ],
        planned: [
          'Multi-stage spoilage progression classification',
          'Broader food quality assessment across local Nigerian produce',
          'Investigating feasibility of shelf-life estimation paired with microbiological benchmarks',
        ],
      },
    },
  },
  {
    slug: 'banking-analytics-dashboard',
    title: 'Banking Analytics Dashboard',
    subtitle: 'Longitudinal Customer, Lending & Transaction Intelligence in Power BI',
    shortDescription:
      'An analytical Power BI dashboard examining 3,011 customers across 22 Nigerian cities, spanning 1955–2023 with ₦984B in loans and ₦76.59M in transactions.',
    field: 'Data Analytics & Visualization · Power BI',
    status: 'Completed',
    year: '2024–2025',
    featured: false,
    visualType: 'banking-plate',
    imageAlt:
      'Structured analytical overview plate of the Power BI Banking Analytics Dashboard',
    accentTone: 'cobalt',
    links: [
      {
        label: 'View Repository on GitHub',
        url: 'https://github.com/FaladeF311/banking-analytics-dashboard',
        external: true,
      },
    ],
    metrics: [
      { label: 'Customers Analyzed', value: '3,011' },
      { label: 'Geographic Reach', value: '22 Nigerian Cities' },
      { label: 'Temporal Span', value: '1955–2023' },
      { label: 'Loan Volume', value: '₦984B' },
      { label: 'Transactions', value: '₦76.59M' },
    ],
    caseStudy: {
      introduction:
        'A comprehensive Power BI analytics project built to inspect customer distribution, lending exposure, and transaction dynamics across historical Nigerian banking records.',
      problem:
        'Raw multi-decade banking tables obscure regional concentration, lending outliers, and customer activity trends without structured data modeling and clear visual hierarchy.',
      whyItMatters:
        'Decision-makers need scannable, trustworthy quantitative summaries that connect geographic footprint with portfolio volume without misleading visual clutter.',
      ideaAndMotivation:
        'Created while sharpening end-to-end business intelligence skills — transforming historical financial records into an executive-ready analytical narrative.',
      roleAndContributions:
        'Performed data cleaning, dimensional modeling, DAX measure creation, KPI design, and multi-view Power BI layout engineering.',
      technicalApproach:
        'Structured star-schema relationships in Power BI with calculated DAX aggregations covering customer counts, city distribution, loan totals, and transaction flows from 1955 to 2023.',
      toolsAndTechnologies: ['Power BI', 'DAX', 'Power Query', 'Data Modeling'],
      challenges:
        'Handling multi-decade date spans (1955–2023), reconciling scale differences between billion-naira loan volumes and million-naira transaction aggregates, and keeping visuals uncluttered.',
      resultsAndOutcomes:
        'Delivered a clean interactive dashboard surfacing 3,011 customers across 22 Nigerian cities, ₦984 billion in loans, and ₦76.59 million in transactions, published openly on GitHub.',
      whatILearned:
        'Effective analytics relies less on dense chart variety and more on disciplined hierarchy, consistent units, and clear geographic/temporal slicing.',
      whatComesNext:
        'Openly documented on GitHub for review; lessons in visual restraint directly inform my ongoing scientific and Scripture visualization work.',
    },
  },
  {
    slug: 'biological-ai-safety-audit',
    title: 'Biological AI Safety Audit',
    subtitle: 'Exploratory Inquiry into Bio-AI Risk & Responsible Evaluation',
    shortDescription:
      'An exploratory repository examining biological AI safety considerations, governance questions, and responsible evaluation frameworks.',
    field: 'AI Safety · Biosecurity & Governance',
    status: 'Exploring',
    year: '2026',
    featured: false,
    visualType: 'safety-plate',
    imageAlt:
      'Conceptual diagram representing biological AI safety evaluation checkpoints and governance boundaries',
    accentTone: 'gold',
    links: [
      {
        label: 'Inspect Repository on GitHub',
        url: 'https://github.com/FaladeF311/biological-ai-safety-audit',
        external: true,
      },
    ],
    metrics: [
      { label: 'Focus', value: 'Bio-AI Safety Considerations' },
      { label: 'Repository', value: 'GitHub Open Exploration' },
      { label: 'Status', value: 'Exploring' },
    ],
    caseStudy: {
      introduction:
        'An exploratory project repository investigating biological AI safety considerations at the intersection of computational biology and responsible model governance.',
      problem:
        'As generative and predictive AI models gain capabilities in biological sequence design and pathogen analysis, researchers need clearer frameworks for identifying dual-use risks and validation gaps.',
      whyItMatters:
        'Microbiologists and AI practitioners both hold responsibility for ensuring computational tools advance public health safely rather than introducing unexamined biosecurity or reliability hazards.',
      ideaAndMotivation:
        'Drawing on dual perspectives from Microbiology training and machine learning practice, this repository serves as a structured space to examine biological AI safety questions.',
      roleAndContributions:
        'Initiated and maintained the repository on GitHub to organize safety considerations, audit questions, and domain reflections.',
      technicalApproach:
        'Structured repository inquiry focusing on conceptual audit framing and biological safety considerations rather than claiming proprietary benchmark scores or automated red-teaming suites.',
      toolsAndTechnologies: [
        'GitHub Documentation',
        'Bio-AI Risk Analysis',
        'Microbiology Domain Framing',
      ],
      challenges:
        'Navigating rapidly evolving international biosecurity norms while keeping documentation honest, grounded, and free of exaggerated claims.',
      resultsAndOutcomes:
        'Established a transparent open exploration on GitHub documenting early-stage thinking on biological AI safety.',
      whatILearned:
        'Safety thinking cannot be bolted onto biological AI after deployment; domain literacy in microbiology must inform evaluation design from the start.',
      whatComesNext:
        'Continuing to deepen reading in bio-AI governance, dual-use evaluation standards, and safe open-science practices.',
    },
  },
];

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    id: '2021',
    period: '2021',
    title: 'Beginning my undergraduate journey',
    location: 'Ekiti State University, Nigeria',
    summary: 'Started studying Microbiology at Ekiti State University.',
    details: [
      'Transitioned from an initial aspiration toward Medicine into Microbiology, discovering a fascination with microorganisms and infectious disease.',
      'Observed firsthand how constrained laboratory and computational infrastructure shapes scientific curiosity and problem-solving.',
    ],
    relatedRoute: '/story',
    relatedLabel: 'Read Chapter I–II in My Story',
  },
  {
    id: '2024',
    period: '2024',
    title: 'Community and technology',
    location: 'DSN EKSU Campus Network',
    summary:
      'Became actively involved in growing the Data Science Nigeria EKSU campus community and expanding my technical interests.',
    details: [
      'Took on leadership/co-leadership within the DSN EKSU campus network (May 2024 – December 2025).',
      'Deepened independent practice in Python, data analytics, visualization, and machine learning while mentoring fellow students.',
    ],
    relatedRoute: '/community',
    relatedLabel: 'Explore Community Impact',
  },
  {
    id: '2025',
    period: '2025',
    title: 'Academic completion and transition',
    location: 'EKSU · Interdisciplinary Projects',
    summary:
      'Completed undergraduate examinations and continued developing interdisciplinary technical projects.',
    details: [
      'Completed undergraduate Microbiology coursework and screening research on unfermented Parkia biglobosa seed extract against Staphylococcus aureus.',
      'Accelerated interdisciplinary building across Yoruba language technology, food spoilage detection, and Scripture data exploration.',
    ],
    relatedRoute: '/projects',
    relatedLabel: 'Browse Project Archive',
  },
  {
    id: '2026',
    period: '2026',
    title: 'Research and new opportunities',
    location: 'Graduated April 2026 · International Showcases',
    summary:
      'Graduated from Ekiti State University, presented Afara at Deep Learning Indaba 2026, and received CPHIA 2026 abstract acceptance.',
    details: [
      'Graduated from Ekiti State University in April 2026.',
      'Handed over DSN EKSU campus network leadership in 2026 after helping grow the community to ~400 members.',
      'Presented Afara (Yoruba–English & Ekiti dialect technology) at the Deep Learning Indaba 2026 Community Showcase.',
      'Received acceptance for CPHIA 2026 Abstract #2514 on genomic relatedness and machine learning estimates of carbapenem resistance prediction.',
    ],
    relatedRoute: '/research',
    relatedLabel: 'Inspect CPHIA 2026 Research',
  },
  {
    id: '2027-plus',
    period: '2027 & Beyond',
    title: 'The next chapter',
    location: 'Global Research & Postgraduate Horizon',
    summary:
      'Further research, postgraduate opportunities, bioinformatics, AI for health, and continued interdisciplinary exploration.',
    details: [
      'Pursuing postgraduate research opportunities in computational biology, bioinformatics, and AI for infectious disease and African health systems.',
      'Continuing open, honest scientific inquiry where biology, data, and human context meet.',
    ],
    relatedRoute: '/contact',
    relatedLabel: 'Connect on Research Opportunities',
  },
];

export const COMMUNITY_EXPERIENCES: CommunityExperience[] = [
  {
    id: 'dsn-eksu',
    organisation: 'Data Science Nigeria (DSN) — EKSU Campus Network',
    role: 'Campus Network Leader / Co-Lead (not Founder)',
    period: 'May 2024 – December 2025 (Handed over leadership in 2026)',
    highlight: true,
    responsibilities: [
      'Led and co-led campus community operations, study sessions, and technical workshops at Ekiti State University.',
      'Coordinated peer mentorship pathways connecting beginners in data analytics and machine learning with practical projects and research.',
      'Stewarded a smooth leadership handover in 2026 to sustain campus momentum.',
    ],
    contributions: [
      'Helped cultivate a thriving campus community of approximately 400 members.',
      'Supported training initiatives reaching more than 150 learners across data and AI tracks.',
      'Fostered an environment where community members achieved international conference opportunities, hackathon wins, internships, and early research papers.',
    ],
    attributionNote:
      'Figures below reflect collective achievements of the DSN EKSU campus community rather than personal accomplishments alone.',
    metrics: [
      { label: 'Community Members', value: '~400' },
      { label: 'Learners Trained', value: '150+' },
      { label: 'International Conferences', value: '3' },
      { label: 'Hackathon Winners', value: '2' },
      { label: 'Internship / Job Outcomes', value: '5' },
    ],
    photoSlotLabel: 'Archival Plate · DSN EKSU Community',
    photoCaption:
      'Data Science Nigeria (DSN) EKSU campus community members gathered behind the Training · Research · Innovation banner.',
    photoSrc: '/src/assets/images/WhatsApp Image 2026-11-19 at 00.58.24.jpeg',
  },
  {
    id: 'dsn-ado-ekiti',
    organisation: 'Data Science Nigeria (DSN) — Ado-Ekiti',
    role: 'Core Team Member',
    period: 'Community Involvement',
    responsibilities: [
      'Collaborated with the regional Ado-Ekiti core team to organize technical meetups and data literacy engagements.',
      'Supported outreach bridging university students with the broader Ekiti State data science ecosystem.',
    ],
    contributions: [
      'Strengthened collaboration between campus learners and city-wide practitioners.',
    ],
    photoSlotLabel: 'Archival Plate · DSN Ado-Ekiti',
    photoCaption:
      'Leading an interactive Data Science Nigeria session and guiding student practitioners in Ado-Ekiti.',
    photoSrc: '/src/assets/images/WhatsApp Image 2026-11-19 at 00.58.54.jpeg',
  },
  {
    id: 'deep-learning-indaba',
    organisation: 'Deep Learning Indaba 2026',
    role: 'Community Showcase Presenter (Afara Team Lead)',
    period: '2026',
    responsibilities: [
      'Presented Afara — our Yoruba–English and Ekiti dialect language technology project — at the Community Showcase.',
      'Shared lessons on building inclusive speech and translation tools with a five-student team.',
    ],
    contributions: [
      'Represented grassroots African NLP work from Ekiti State within the continental AI research community.',
    ],
    photoSlotLabel: 'Archival Plate · Deep Learning Indaba 2026',
    photoCaption:
      'Reserved for Afara presentation photograph at Deep Learning Indaba 2026.',
    photoSrc: null,
  },
  {
    id: '3mtt-deeptech',
    organisation: '3MTT DeepTech Ready Upskilling Programme',
    role: 'Community Manager',
    period: 'Programme Tenure',
    responsibilities: [
      'Managed learner engagement, peer communication channels, and progress check-ins across technical cohorts.',
      'Guided participants navigating structured upskilling modules and practical assignments.',
    ],
    contributions: [
      'Maintained responsive peer support and encouraged steady learner retention throughout the programme.',
    ],
    photoSlotLabel: 'Archival Plate · 3MTT DeepTech Ready',
    photoCaption: 'Reserved for 3MTT DeepTech community session photography.',
    photoSrc: null,
  },
  {
    id: 'techhub-eksu',
    organisation: 'TechHUB EKSU',
    role: 'Former Data Analytics Tutor',
    period: 'Undergraduate Tenure',
    responsibilities: [
      'Taught foundational data analytics concepts, spreadsheet reasoning, and visualization workflows to fellow students.',
      'Translated technical concepts into approachable exercises for learners from non-computational majors.',
    ],
    contributions: [
      'Enabled undergraduate peers from science and humanities backgrounds to take their first structured steps into data analysis.',
    ],
    photoSlotLabel: 'Archival Plate · TechHUB EKSU',
    photoCaption:
      'Data in Action: Building Interactive AI & Analytics Applications — workshop co-facilitated at Tech Hub EKSU (Feb 2025).',
    photoSrc: '/src/assets/images/WhatsApp Image 2026-11-19 at 00.57.11.jpeg',
  },
  {
    id: 'data-fellows',
    organisation: 'Data Fellows',
    role: 'Community Member & Domain Moderator',
    period: 'Community Involvement',
    responsibilities: [
      'Moderated domain discussions, curated learning conversations, and answered peer questions across data disciplines.',
    ],
    contributions: [
      'Helped sustain constructive, focused dialogue and knowledge sharing within the community.',
    ],
    photoSlotLabel: 'Archival Plate · Data Fellows',
    photoCaption: 'Reserved for Data Fellows community activity visual.',
    photoSrc: null,
  },
  {
    id: 'aurora-robotics',
    organisation: 'Aurora Robotics AEP',
    role: 'Community Manager',
    period: 'Programme Tenure',
    responsibilities: [
      'Coordinated community communications and member engagement across Aurora Robotics AEP initiatives.',
    ],
    contributions: [
      'Supported cross-disciplinary collaboration connecting learners interested in hardware, robotics, and AI.',
    ],
    photoSlotLabel: 'Archival Plate · Aurora Robotics AEP',
    photoCaption: 'Reserved for Aurora Robotics AEP community photograph.',
    photoSrc: null,
  },
];

export interface GalleryPhotoItem {
  id: string;
  src: string;
  alt: string;
  label: string;
  title: string;
  caption: string;
  fit?: 'cover' | 'contain';
  objectPosition?: 'center' | 'top';
}

export const DOCUMENTARY_GALLERY: GalleryPhotoItem[] = [
  {
    id: 'wtm-iwd-front',
    src: '/src/assets/images/WhatsApp Image 2026-11-18 at 23.45.17.jpeg',
    alt: 'Favour Falade speaking with a microphone at Women Techmakers Ado-Ekiti International Women’s Day 2025',
    label: 'WTM Ado-Ekiti · IWD 2025',
    title: 'Speaking at Women Techmakers Ado-Ekiti',
    caption:
      'Contributing to the International Women’s Day 2025 programme ("Redefine Possible") in Ado-Ekiti.',
    fit: 'cover',
    objectPosition: 'top',
  },
  {
    id: 'wtm-iwd-profile',
    src: '/src/assets/images/WhatsApp Image 2026-11-18 at 23.45.16.jpeg',
    alt: 'Favour Falade addressing attendees with microphone at Women Techmakers Ado-Ekiti',
    label: 'WTM Ado-Ekiti · Panel Dialogue',
    title: 'Sharing Field & Community Perspectives',
    caption:
      'Discussing interdisciplinary learning and technical growth with emerging practitioners.',
    fit: 'cover',
    objectPosition: 'top',
  },
  {
    id: 'pitch-social-impact',
    src: '/src/assets/images/WhatsApp Image 2026-11-18 at 23.45.18.jpeg',
    alt: 'Favour Falade presenting a Social Impact slide on infant malnutrition early detection and SDG targets',
    label: 'Health AI Pitch · Social Impact',
    title: 'Presenting Malnutrition Detection Impact',
    caption:
      'Outlining SDG 2 & 3 targets and early infant malnutrition screening on stage.',
    fit: 'cover',
    objectPosition: 'top',
  },
  {
    id: 'pitch-our-solution',
    src: '/src/assets/images/WhatsApp Image 2026-11-18 at 23.45.20.jpeg',
    alt: 'Favour Falade presenting Our Solution slide for classification AI model and caregiver recommendation system',
    label: 'Health AI Pitch · Architecture',
    title: 'Walkthrough of AI Classification & Recommendations',
    caption:
      'Demonstrating how classification modeling pairs with caregiver recommendation workflows.',
    fit: 'cover',
    objectPosition: 'top',
  },
  {
    id: 'symposium-dialogue',
    src: '/src/assets/images/WhatsApp Image 2026-11-18 at 23.45.21.jpeg',
    alt: 'Favour Falade holding a microphone during a food systems and policy leadership workshop',
    label: 'Policy & Systems Dialogue',
    title: 'Interdisciplinary Workshop Intervention',
    caption:
      'Contributing microbiology and data perspectives during a multi-stakeholder policy session.',
    fit: 'cover',
    objectPosition: 'top',
  },
  {
    id: 'dsn-campus-banner',
    src: '/src/assets/images/WhatsApp Image 2026-11-19 at 00.58.24.jpeg',
    alt: 'DSN EKSU campus network members posing together with the DSN EKSU banner',
    label: 'DSN EKSU · Campus Community',
    title: 'DSN EKSU Training, Research & Innovation',
    caption:
      'Campus network gathering celebrating peer-led learning across data analytics and AI.',
    fit: 'cover',
    objectPosition: 'center',
  },
  {
    id: 'dsn-teaching-session',
    src: '/src/assets/images/WhatsApp Image 2026-11-19 at 00.58.54.jpeg',
    alt: 'Favour Falade teaching with a microphone in a Data Science Nigeria black t-shirt',
    label: 'DSN Workshop · Facilitation',
    title: 'Teaching Data & AI Foundations',
    caption:
      'Facilitating a Data Science Nigeria session focused on accessible technical onboarding.',
    fit: 'cover',
    objectPosition: 'top',
  },
];

export const RECOGNITION_GALLERY: GalleryPhotoItem[] = [
  {
    id: 'ekiti-healthtech-2025',
    src: '/src/assets/images/WhatsApp Image 2026-11-19 at 00.57.50.jpeg',
    alt: 'Favour Falade holding a ₦100,000 recognition cheque at Ekiti HealthTech Summit 2025 dated 29 November 2025',
    label: 'Nov 2025 · Ekiti HealthTech Summit',
    title: 'Ekiti HealthTech Summit 2025 Recognition',
    caption:
      'Awarded ₦100,000 prize recognition at Ekiti HealthTech Summit 2025 (29 November 2025).',
    fit: 'cover',
    objectPosition: 'top',
  },
  {
    id: 'jci-topa-ceremony',
    src: '/src/assets/images/WhatsApp Image 2026-11-18 at 23.45.15.jpeg',
    alt: 'Favour Falade receiving an award plaque on stage at JCI Nigeria EKSU 37th Convention and 38th Investiture Ceremony',
    label: 'JCI Nigeria EKSU · Ceremony',
    title: '37th Convention & 38th Investiture Stage Recognition',
    caption:
      'Presenting on stage with co-honourees after receiving the JCI Nigeria EKSU recognition plaque.',
    fit: 'cover',
    objectPosition: 'top',
  },
  {
    id: 'jci-topa-plaque',
    src: '/src/assets/images/WhatsApp Image 2026-11-19 at 00.58.40.jpeg',
    alt: 'JCI Nigeria EKSU TOPA Ten Outstanding Personality Award plaque inscribed Most Outstanding Personality in Technology and Innovation, 14th February 2025',
    label: 'Feb 2025 · TOPA Plaque',
    title: 'Ten Outstanding Personality Award (TOPA)',
    caption:
      'Most Outstanding Personality in Technology and Innovation — JCI Nigeria EKSU (14 February 2025).',
    fit: 'cover',
    objectPosition: 'center',
  },
  {
    id: 'jci-topa-announcement',
    src: '/src/assets/images/WhatsApp Image 2026-11-19 at 00.58.18.jpeg',
    alt: 'JCI Nigeria EKSU TOPA Awards winner announcement for Falade Favour in Technology and Innovation',
    label: 'JCI Nigeria EKSU · Announcement',
    title: 'Most Outstanding Person in Technology & Innovation',
    caption:
      'Official JCI Nigeria EKSU TOPA Awards winner citation celebrating campus technology impact.',
    fit: 'contain',
    objectPosition: 'center',
  },
];

export const COMMUNITY_FLYERS: GalleryPhotoItem[] = [
  {
    id: 'flyer-beyond-classroom',
    src: '/src/assets/images/WhatsApp Image 2026-11-18 at 23.48.20.jpeg',
    alt: 'Event flyer for Bridge to Opportunity and Millennium Fellowship session Beyond The Classroom featuring Falade Favour Toluwanimi',
    label: 'Nov 2026 · Panelist',
    title: 'Beyond The Classroom (Bridge to Opportunity × Millennium Fellowship)',
    caption:
      'Virtual session on discovering opportunities, building skills, and interdisciplinary possibilities.',
    fit: 'contain',
  },
  {
    id: 'flyer-bms-sheets',
    src: '/src/assets/images/WhatsApp Image 2026-11-19 at 08.14.30.jpeg',
    alt: 'Event flyer for Faculty of Basic Medical Sciences EKSU and The Samuel Kola Company Virtual Session 2 with Favour Falade',
    label: 'July 2026 · Guest Speaker',
    title: 'Manage & Organize Raw Data w/ Google Sheets',
    caption:
      'Virtual session for Faculty of Basic Medical Sciences, EKSU in collaboration with The Samuel Kola Company.',
    fit: 'contain',
  },
  {
    id: 'flyer-cowrywise-networking',
    src: '/src/assets/images/WhatsApp Image 2026-11-19 at 12.30.43.jpeg',
    alt: 'Event flyer for EKSU Ambassadors Academics and Career: The Importance of Networking in University featuring Falade Favour',
    label: 'May · Invited Speaker',
    title: 'Academics and Career: Networking in University',
    caption:
      'Campus ambassadors session exploring academic trajectory and building purposeful peer networks.',
    fit: 'contain',
  },
  {
    id: 'flyer-digital-edge',
    src: '/src/assets/images/WhatsApp Image 2026-11-19 at 00.57.27.jpeg',
    alt: 'Event flyer for Legacy Lab, GDG On Campus EKSU, and Outnovately Africa Digital Edge Series featuring Falade Favour Toluwanimi',
    label: 'Nov 2025 · Speaker',
    title: 'Introduction to Data Science: Turning Data into Insights',
    caption:
      'The Digital Edge Series hosted by Legacy Lab, GDG On Campus EKSU, and Outnovately Africa.',
    fit: 'contain',
  },
  {
    id: 'flyer-data-in-action',
    src: '/src/assets/images/WhatsApp Image 2026-11-19 at 00.57.11.jpeg',
    alt: 'Event flyer for DSN EKSU Data in Action: Building Interactive AI and Analytics Applications at Tech Hub EKSU',
    label: 'Feb 2025 · Co-Facilitator',
    title: 'Data in Action: Interactive AI & Analytics Apps',
    caption:
      'Hands-on DSN EKSU workshop hosted at Tech Hub EKSU alongside fellow campus facilitators.',
    fit: 'contain',
  },
  {
    id: 'flyer-ai-education',
    src: '/src/assets/images/WhatsApp Image 2026-11-19 at 00.56.57.jpeg',
    alt: 'Event flyer for Integrating AI in Education at Faculty of Education EKSU featuring Favour Falade',
    label: 'Jan · Facilitator',
    title: 'Integrating AI in Education (EKSU)',
    caption:
      'Inter-faculty workshop at Faculty of Education EKSU in partnership with DSN, JCI, BIGIF, and Wave.',
    fit: 'contain',
  },
  {
    id: 'flyer-easytech-live',
    src: '/src/assets/images/WhatsApp Image 2026-11-19 at 00.56.41.jpeg',
    alt: 'Event flyer for Easy Technologies Data Talk Live: The Future of Data Analysis with Favour Falade',
    label: 'Nov 2024 · Live Session',
    title: 'The Future of Data Analysis (Easy Technologies)',
    caption:
      'Public virtual Data Talk Live hosted with Easy Technologies covering data careers and analysis.',
    fit: 'contain',
  },
];

