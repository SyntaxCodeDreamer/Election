// ─── Election Steps Data ─────────────────────────────────────────────────────
// Each step maps to a full section in the guide.

export const steps = [
  {
    id: 0,
    key: 'overview',
    title: 'Election Overview',
    icon: '🗳️',
    emoji: '🏛️',
    description: 'Understand what elections are and why your vote matters.',
    content: {
      heading: 'What is an Election?',
      body: `An election is the process by which citizens choose their representatives and leaders.
Elections are the cornerstone of democracy — they ensure that the government reflects the will of the people.
Every vote counts, and participating in elections is one of the most powerful ways you can shape your community, state, and nation.`,
      highlights: [
        { icon: '🤝', label: 'Representation', text: 'Elect leaders who represent your values and interests.' },
        { icon: '⚖️', label: 'Accountability', text: 'Hold elected officials accountable through regular elections.' },
        { icon: '🌍', label: 'Community Impact', text: 'Decisions made affect schools, roads, healthcare, and more.' },
        { icon: '💪', label: 'Your Power', text: 'Every single vote has the potential to change an outcome.' },
      ],
    },
  },
  {
    id: 1,
    key: 'timeline',
    title: 'Important Dates',
    icon: '📅',
    emoji: '🗓️',
    description: 'Key dates and deadlines you must not miss.',
    content: {
      heading: 'Election Timeline 2026',
      body: 'Stay on top of every critical deadline. Missing a date could mean missing your chance to vote. Mark these on your calendar!',
      timeline: [
        { date: 'Jan 15, 2026', event: 'Voter Registration Opens', status: 'done', color: 'green' },
        { date: 'Mar 31, 2026', event: 'Last Day to Register Online', status: 'done', color: 'green' },
        { date: 'Apr 15, 2026', event: 'Mail-in Ballot Requests Open', status: 'done', color: 'green' },
        { date: 'May 01, 2026', event: 'Early Voting Begins', status: 'current', color: 'blue' },
        { date: 'May 20, 2026', event: 'Early Voting Ends', status: 'upcoming', color: 'yellow' },
        { date: 'May 25, 2026', event: 'Mail-in Ballot Deadline', status: 'upcoming', color: 'yellow' },
        { date: 'Jun 03, 2026', event: 'Election Day 🗳️', status: 'upcoming', color: 'red' },
        { date: 'Jun 10, 2026', event: 'Results Certified', status: 'upcoming', color: 'gray' },
      ],
    },
  },
  {
    id: 2,
    key: 'eligibility',
    title: 'Voter Eligibility',
    icon: '✅',
    emoji: '🧑‍⚖️',
    description: 'Find out if you qualify to vote.',
    content: {
      heading: 'Am I Eligible to Vote?',
      body: 'Eligibility requirements vary by region. Here are the most common requirements for first-time voters:',
      criteria: [
        { icon: '🎂', label: 'Age', text: 'Must be at least 18 years old on or before Election Day.' },
        { icon: '🌐', label: 'Citizenship', text: 'Must be a citizen of the country.' },
        { icon: '🏠', label: 'Residency', text: 'Must be a resident of the constituency where you wish to vote.' },
        { icon: '📝', label: 'Registration', text: 'Must be registered on the electoral rolls before the deadline.' },
        { icon: '⚠️', label: 'Disqualifications', text: 'Individuals serving certain criminal sentences may be ineligible (check local laws).' },
      ],
    },
  },
  {
    id: 3,
    key: 'registration',
    title: 'Registration Process',
    icon: '📋',
    emoji: '✍️',
    description: 'Step-by-step guide to registering as a voter.',
    content: {
      heading: 'How to Register to Vote',
      body: 'Registering is easy! Follow these simple steps to ensure your name is on the electoral roll:',
      steps: [
        { step: 1, title: 'Gather Documents', text: 'Collect proof of identity (ID card, passport) and proof of address (utility bill, bank statement).' },
        { step: 2, title: 'Choose Registration Method', text: 'Register online via the official government portal, by mail, or in person at your local election office.' },
        { step: 3, title: 'Fill in Your Details', text: 'Provide your full legal name, date of birth, address, and contact information accurately.' },
        { step: 4, title: 'Submit Your Application', text: 'Submit before the registration deadline. You will receive a confirmation email or letter.' },
        { step: 5, title: 'Verify Your Registration', text: 'Check the electoral roll online or call your local election office to confirm your registration.' },
      ],
    },
  },
  {
    id: 4,
    key: 'voting',
    title: 'Voting Steps',
    icon: '🗳️',
    emoji: '🏅',
    description: 'What to expect on Election Day.',
    content: {
      heading: 'How to Vote on Election Day',
      body: 'Voting is simple and secure. Here is exactly what happens when you show up at the polling station:',
      steps: [
        { step: 1, title: 'Find Your Polling Station', text: 'Use the official website or your voter admission card to locate your designated polling station.' },
        { step: 2, title: 'Bring Valid ID', text: 'Carry your voter ID card, passport, or any government-issued photo ID.' },
        { step: 3, title: 'Join the Queue', text: 'Arrive early to avoid long lines. Polls typically open at 7 AM and close at 6 PM.' },
        { step: 4, title: 'Identity Verification', text: 'An election officer will verify your identity and mark your name on the register.' },
        { step: 5, title: 'Receive Your Ballot', text: 'You will be handed a ballot paper or directed to an electronic voting machine.' },
        { step: 6, title: 'Cast Your Vote', text: 'In a private booth, mark your choice clearly. Do not share your vote with anyone.' },
        { step: 7, title: 'Submit Your Ballot', text: 'Place the paper ballot in the sealed box or confirm your selection on the machine.' },
        { step: 8, title: 'Ink Mark Applied', text: 'Your finger will be marked with indelible ink to prevent double voting. You\'re done! 🎉' },
      ],
    },
  },
  {
    id: 5,
    key: 'faqs',
    title: 'Common FAQs',
    icon: '❓',
    emoji: '💬',
    description: 'Answers to the most frequently asked questions.',
    content: {
      heading: 'Frequently Asked Questions',
      body: 'Have questions? You\'re not alone. Here are answers to what first-time voters ask most:',
      faqs: [
        {
          q: 'What if I miss the registration deadline?',
          a: 'Some regions allow same-day registration at the polling station. Check with your local election authority for options.',
        },
        {
          q: 'Can I vote if I moved recently?',
          a: 'You may need to update your registration with your new address. Do this before the registration deadline.',
        },
        {
          q: 'What ID do I need to bring?',
          a: 'Typically a government-issued photo ID such as a voter card, passport, or driver\'s license is required.',
        },
        {
          q: 'What if I made a mistake on my ballot?',
          a: 'Inform the polling officer immediately. You may be issued a new ballot before you have cast it.',
        },
        {
          q: 'Can I take a photo inside the voting booth?',
          a: 'No. Photography inside polling stations and voting booths is strictly prohibited in most jurisdictions.',
        },
        {
          q: 'What if my name is not on the electoral roll?',
          a: 'Ask to cast a provisional ballot. Your eligibility will be verified after the polls close.',
        },
        {
          q: 'Is my vote really secret?',
          a: 'Yes! Your vote is completely anonymous. No one — not even election officials — can trace a ballot back to you.',
        },
        {
          q: 'What should I do if I encounter problems at the polling station?',
          a: 'Contact your local election authority immediately or call the non-partisan voter helpline in your area.',
        },
      ],
    },
  },
  {
    id: 6,
    key: 'candidates',
    title: 'Candidate Profiles',
    icon: '👥',
    emoji: '🕴️',
    description: 'Get to know the individuals running for office.',
    content: {
      heading: 'Meet the 2026 Candidates',
      body: 'Researching candidates is vital. Here are the key figures running in the upcoming election. Tap on a profile to learn more about their platform.',
      candidates: [
        {
          name: 'Elena Rodriguez',
          party: 'Progressive Future',
          role: 'Candidate for Mayor',
          motto: 'Innovation for All',
          image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&auto=format&fit=crop',
          focus: ['Education', 'Green Energy', 'Public Transit'],
        },
        {
          name: 'Marcus Chen',
          party: 'Liberty Alliance',
          role: 'Candidate for Mayor',
          motto: 'Stability & Growth',
          image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&h=200&auto=format&fit=crop',
          focus: ['Economic Development', 'Infrastructure', 'Safety'],
        },
        {
          name: 'Sarah Thompson',
          party: 'Independent Voice',
          role: 'Candidate for Mayor',
          motto: 'Community First',
          image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&h=200&auto=format&fit=crop',
          focus: ['Housing', 'Healthcare', 'Small Business'],
        },
      ],
    },
  },
  {
    id: 7,
    key: 'locations',
    title: 'Polling Locations',
    icon: '📍',
    emoji: '🗺️',
    description: 'Find where you need to go to cast your vote.',
    content: {
      heading: 'Find Your Polling Station',
      body: 'Polling stations are assigned based on your residential address. Here is a preview of the main stations in the city:',
      locations: [
        { name: 'Central Library', address: '123 Knowledge Way', type: 'Main Station', wait: '15 mins' },
        { name: 'Community Center North', address: '456 Unity Street', type: 'Early Voting', wait: '5 mins' },
        { name: 'Eastside High School', address: '789 Future Ave', type: 'Election Day only', wait: '30 mins' },
        { name: 'West End Civic Hall', address: '321 Liberty Blvd', type: 'Accessible Station', wait: '10 mins' },
      ],
    },
  },
  {
    id: 8,
    key: 'checklist',
    title: 'Final Checklist',
    icon: '☑️',
    emoji: '🚀',
    description: 'Make sure you\'re 100% ready to vote!',
    content: {
      heading: 'Your Voter Readiness Checklist',
      body: 'Use this checklist to make sure you\'ve completed every step before heading to the polls:',
      items: [
        { id: 'c1', label: 'I have confirmed my eligibility to vote.' },
        { id: 'c2', label: 'I have registered before the deadline.' },
        { id: 'c3', label: 'I have verified my name on the electoral roll.' },
        { id: 'c4', label: 'I know my polling station location.' },
        { id: 'c5', label: 'I have a valid photo ID ready.' },
        { id: 'c6', label: 'I have noted the polling hours (7 AM – 6 PM).' },
        { id: 'c7', label: 'I have researched the candidates and their policies.' },
        { id: 'c8', label: 'I am ready to cast my vote on Election Day! 🗳️' },
      ],
    },
  },
];

