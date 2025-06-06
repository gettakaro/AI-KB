/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  sevenDaysSidebar: [
    {
      type: 'category',
      label: '7 Days to Die Server Management',
      items: [
        '7-days-to-die/index',
        {
          type: 'category',
          label: 'Server Setup',
          items: [
            '7-days-to-die/setup/installation',
            '7-days-to-die/setup/configuration',
            '7-days-to-die/setup/first-run',
          ],
        },
        {
          type: 'category',
          label: 'Administration',
          items: [
            '7-days-to-die/admin/commands',
            '7-days-to-die/admin/permissions',
            '7-days-to-die/admin/moderation',
          ],
        },
        {
          type: 'category',
          label: 'Troubleshooting',
          items: [
            '7-days-to-die/troubleshooting/common-issues',
            '7-days-to-die/troubleshooting/performance',
            '7-days-to-die/troubleshooting/connectivity',
          ],
        },
      ],
    },
  ],

  csmmSidebar: [
    {
      type: 'category',
      label: 'CSMM - 7D2D Server Manager',
      items: [
        'csmm/index',
        {
          type: 'category',
          label: 'Getting Started',
          items: [
            'csmm/getting-started/installation',
            'csmm/getting-started/setup',
            'csmm/getting-started/connecting-server',
          ],
        },
        {
          type: 'category',
          label: 'Features',
          items: [
            'csmm/features/dashboard',
            'csmm/features/player-management',
            'csmm/features/automation',
            'csmm/features/discord-integration',
          ],
        },
        {
          type: 'category',
          label: 'Configuration',
          items: [
            'csmm/config/settings',
            'csmm/config/modules',
            'csmm/config/permissions',
          ],
        },
        {
          type: 'category',
          label: 'FAQ',
          items: [
            'csmm/faq/general',
            'csmm/faq/troubleshooting',
          ],
        },
      ],
    },
  ],

  cpmSidebar: [
    {
      type: 'category',
      label: 'CPM - CSMM Patrons Mod',
      items: [
        'cpm/index',
        {
          type: 'category',
          label: 'Getting Started',
          items: [
            'cpm/getting-started/installation',
            'cpm/getting-started/setup',
            'cpm/getting-started/first-use',
          ],
        },
        {
          type: 'category',
          label: 'Features',
          items: [
            'cpm/features/advanced-commands',
            'cpm/features/player-management',
            'cpm/features/automation',
            'cpm/features/economy-extensions',
          ],
        },
        {
          type: 'category',
          label: 'Configuration',
          items: [
            'cpm/config/permissions',
            'cpm/config/custom-commands',
            'cpm/config/integration-settings',
          ],
        },
        {
          type: 'category',
          label: 'Advanced Usage',
          items: [
            'cpm/advanced/scripting',
            'cpm/advanced/custom-modules',
            'cpm/advanced/api-integration',
          ],
        },
        {
          type: 'category',
          label: 'FAQ',
          items: [
            'cpm/faq/general',
            'cpm/faq/troubleshooting',
            'cpm/faq/migration',
          ],
        },
      ],
    },
  ],

  takaroSidebar: [
    {
      type: 'category',
      label: 'Takaro - Multi-Game Server Manager',
      items: [
        'takaro/index',
        {
          type: 'category',
          label: 'Overview',
          items: [
            'takaro/overview/what-is-takaro',
            'takaro/overview/supported-games',
            'takaro/overview/features',
          ],
        },
        {
          type: 'category',
          label: 'Getting Started',
          items: [
            'takaro/getting-started/installation',
            'takaro/getting-started/setup',
            'takaro/getting-started/first-server',
          ],
        },
        {
          type: 'category',
          label: 'Configuration',
          items: [
            'takaro/config/server-settings',
            'takaro/config/modules',
            'takaro/config/integrations',
          ],
        },
        {
          type: 'category',
          label: 'Advanced',
          items: [
            'takaro/advanced/api',
            'takaro/advanced/webhooks',
            'takaro/advanced/custom-modules',
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;