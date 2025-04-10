const pageConfig = {
  title: "Dockrelix's Status Page",
  links: [
    { link: 'https://dockrelix.org', label: 'Homepage' },
    { link: 'mailto:contact@dockrelix.org', label: 'Contact Us', highlight: true },
  ],
  group: {
    "🌐 Public": ['landing-page', 'docs'],
    "💻 Servers - FRA-1": ['fra-1-0'],
  },
}

const workerConfig = {
  kvWriteCooldownMinutes: 3,
  checkLocationWorkerRoute: "https://de-cf.dockrelix.org/",
  monitors: [
    {
      id: 'landing-page',
      name: 'Landing Page',
      method: 'GET',
      target: 'https://dockrelix.org',
      checkLocationWorkerRoute: "https://de-cf.dockrelix.org/",
      hideLatencyChart: true,
    },
    {
      id: 'docs',
      name: 'Documentation',
      method: 'GET',
      target: 'https://docs.dockrelix.org',
      checkLocationWorkerRoute: "https://de-cf.dockrelix.org/",
      hideLatencyChart: true,
    },
    {
      id: 'fra-1-0',
      name: 'Node 1',
      method: 'TCP_PING',
      target: '45.138.50.127:8006',
      timeout: 5000,
      checkLocationWorkerRoute: "https://de-cf.dockrelix.org/",
      hideLatencyChart: true,
    },
  ],
  notification: {},
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
    },
  },
}

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }
