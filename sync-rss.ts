import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import Parser from 'rss-parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ============================================================================
// Type Definitions
// ============================================================================

interface BlogPost {
  title: string;
  link: string;
  date: string;
}

/**
 * Desktop index.json structure from desktop.dl.hagicode.com/index.json
 */
interface DesktopIndex {
  updatedAt: string;
  versions: Array<{
    version: string;
    files: string[];
    assets: Array<{
      name: string;
      path: string;
      size: number;
      lastModified: string;
    }>;
  }>;
  channels: {
    [channelName: string]: {
      latest: string;
      versions: string[];
    };
  };
}

/**
 * Server index.json structure from server.dl.hagicode.com/index.json
 */
interface ServerIndex {
  updatedAt: string;
  versions: Array<{
    version: string;
    files: string[];
    assets: Array<{
      name: string;
      path: string;
      size: number;
      lastModified: string;
    }>;
  }>;
  channels: {
    [channelName: string]: {
      latest: string;
      versions: string[];
    };
  };
}

/**
 * Represents a version extracted from a specific channel
 */
interface ChannelVersion {
  channel: string;
  version: string;
  product: 'desktop' | 'server';
}

/**
 * Configuration for generating version badges
 */
interface BadgeConfig {
  label: string;
  color: string;
}

// ============================================================================
// Constants
// ============================================================================

const RSS_URL = 'https://docs.hagicode.com/blog/rss.xml';
const README_PATH = path.join(__dirname, 'profile', 'README.md');
const MAX_POSTS = 10;
const DESKTOP_INDEX_URL = 'https://desktop.dl.hagicode.com/index.json';
const SERVER_INDEX_URL = 'https://server.dl.hagicode.com/index.json';

/**
 * Badge configurations for different product-channel combinations
 * Stable versions use blue, beta versions use orange
 */
const BADGE_CONFIGS: Record<string, BadgeConfig> = {
  'desktop-stable': { label: 'Desktop Stable', color: 'blue' },
  'desktop-beta': { label: 'Desktop Beta', color: 'orange' },
  'server-stable': { label: 'Server Stable', color: 'blue' },
  'server-beta': { label: 'Server Beta', color: 'orange' }
};

// ============================================================================
// RSS Fetching Functions
// ============================================================================

/**
 * Fetches and parses the RSS feed from the blog
 */
async function fetchRSS(): Promise<BlogPost[]> {
  console.log(`Fetching RSS from ${RSS_URL}...`);

  const parser = new Parser();

  try {
    const feed = await parser.parseURL(RSS_URL);
    console.log(`Successfully fetched ${feed.items.length} items from RSS`);

    const posts: BlogPost[] = feed.items.slice(0, MAX_POSTS).map(item => ({
      title: item.title ?? 'Untitled',
      link: item.link ?? '',
      date: item.pubDate ? new Date(item.pubDate).toLocaleDateString('zh-CN') : ''
    }));

    return posts;
  } catch (error) {
    console.error('Failed to fetch RSS:', error);
    throw new Error(`RSS fetch failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

function generateBlogTable(posts: BlogPost[]): string {
  const header = '| 日期 | 标题 |\n|------|------|';
  const rows = posts.map(post => {
    const date = post.date || 'N/A';
    const title = `[${post.title}](${post.link})`;
    return `| ${date} | ${title} |`;
  });

  return `${header}\n${rows.join('\n')}`;
}

function updateReadme(blogTable: string): void {
  console.log('Reading existing README...');

  if (!fs.existsSync(README_PATH)) {
    throw new Error(`README not found at ${README_PATH}`);
  }

  let content = fs.readFileSync(README_PATH, 'utf-8');

  const startMarker = '<!-- blog-posts-start -->';
  const endMarker = '<!-- blog-posts-end -->';

  const startIndex = content.indexOf(startMarker);
  const endIndex = content.indexOf(endMarker);

  if (startIndex === -1 || endIndex === -1) {
    throw new Error('Placeholder markers not found in README');
  }

  const before = content.substring(0, startIndex + startMarker.length);
  const after = content.substring(endIndex);

  content = `${before}\n${blogTable}\n${after}`;

  fs.writeFileSync(README_PATH, content, 'utf-8');
  console.log('README updated successfully');
}

// ============================================================================
// Version Fetching Functions
// ============================================================================

/**
 * Fetches all channel versions from Desktop index.json
 * @returns Array of ChannelVersion objects for Desktop
 */
async function fetchDesktopVersions(): Promise<ChannelVersion[]> {
  console.log(`Fetching Desktop index from ${DESKTOP_INDEX_URL}...`);

  try {
    const response = await fetch(DESKTOP_INDEX_URL);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const index: DesktopIndex = await response.json();

    // Validate JSON structure
    if (!index.channels) {
      throw new Error('channels not found in Desktop index');
    }

    const versions: ChannelVersion[] = [];

    // Extract all channel versions
    for (const [channelName, channelData] of Object.entries(index.channels)) {
      if (channelData.latest) {
        versions.push({
          channel: channelName,
          version: channelData.latest,
          product: 'desktop'
        });
      }
    }

    console.log(`Found ${versions.length} Desktop channel(s): ${versions.map(v => `${v.channel}:${v.version}`).join(', ')}`);
    return versions;
  } catch (error) {
    console.error('Failed to fetch Desktop versions:', error);
    throw new Error(`Desktop version fetch failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Fetches all channel versions from Server index.json
 * @returns Array of ChannelVersion objects for Server
 */
async function fetchServerVersions(): Promise<ChannelVersion[]> {
  console.log(`Fetching Server index from ${SERVER_INDEX_URL}...`);

  try {
    const response = await fetch(SERVER_INDEX_URL);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const index: ServerIndex = await response.json();

    // Validate JSON structure
    if (!index.channels) {
      throw new Error('channels not found in Server index');
    }

    const versions: ChannelVersion[] = [];

    // Extract all channel versions
    for (const [channelName, channelData] of Object.entries(index.channels)) {
      if (channelData.latest) {
        versions.push({
          channel: channelName,
          version: channelData.latest,
          product: 'server'
        });
      }
    }

    console.log(`Found ${versions.length} Server channel(s): ${versions.map(v => `${v.channel}:${v.version}`).join(', ')}`);
    return versions;
  } catch (error) {
    console.error('Failed to fetch Server versions:', error);
    throw new Error(`Server version fetch failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

// ============================================================================
// Badge Generation Functions
// ============================================================================

/**
 * Generates Markdown badge URLs for channel versions
 * @param versions Array of channel versions
 * @returns Array of badge Markdown strings
 */
function generateChannelBadges(versions: ChannelVersion[]): string[] {
  const badges: string[] = [];

  for (const versionData of versions) {
    const configKey = `${versionData.product}-${versionData.channel}`;
    const config = BADGE_CONFIGS[configKey];

    if (!config) {
      console.warn(`No badge config found for ${configKey}, skipping`);
      continue;
    }

    // Spaces in label should be URL-encoded
    const escapedLabel = config.label.replace(/ /g, '%20');
    // Version should be URL-encoded (hyphens don't need escaping in URL, but spaces do)
    const encodedVersion = encodeURIComponent(versionData.version);
    const badgeUrl = `![${config.label}](https://img.shields.io/badge/${escapedLabel}-${encodedVersion}-${config.color})`;
    badges.push(badgeUrl);
  }

  return badges;
}

/**
 * Updates version badges in README.md
 * @param badges Array of badge Markdown strings to update
 */
function updateChannelBadges(badges: string[]): void {
  console.log('Reading existing README...');

  if (!fs.existsSync(README_PATH)) {
    throw new Error(`README not found at ${README_PATH}`);
  }

  let content = fs.readFileSync(README_PATH, 'utf-8');

  let updatedCount = 0;

  // Update each badge separately using regex with channel label matching
  for (const badge of badges) {
    // Extract label and color from badge for pattern matching
    const badgeMatch = badge.match(/!\[([^\]]+)\]\(https:\/\/img\.shields\.io\/badge\/([^\)]+)\)/);
    if (!badgeMatch) {
      console.warn(`Could not parse badge: ${badge}`);
      continue;
    }

    const label = badgeMatch[1];
    const badgeUrlPattern = badgeMatch[2];

    // Create regex that matches badges with this label regardless of version/color
    // Handle both space and %20 encoding for spaces in labels
    const escapedLabel = escapeRegex(label);
    const encodedLabel = label.replace(/ /g, '%20').replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`!\\[${escapedLabel}\\]\\(https://img\\.shields\\.io/badge/(?:${escapedLabel}|${encodedLabel})-[^\)]+\\)`, 'g');

    const oldContent = content;
    content = content.replace(regex, badge);

    if (oldContent !== content) {
      updatedCount++;
    }
  }

  if (updatedCount > 0) {
    fs.writeFileSync(README_PATH, content, 'utf-8');
    console.log(`Updated ${updatedCount} version badge(s)`);
  } else {
    console.warn('No version badges found to update');
  }
}

/**
 * Escapes special regex characters
 */
function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// ============================================================================
// Main Function
// ============================================================================

async function main(): Promise<void> {
  console.log('=== Starting Sync Job ===');

  try {
    // Blog RSS Sync
    console.log('\n--- Blog RSS Sync ---');
    const posts = await fetchRSS();

    if (posts.length > 0) {
      const blogTable = generateBlogTable(posts);
      updateReadme(blogTable);
      console.log('=== Blog RSS Sync Completed ===\n');
    } else {
      console.log('No blog posts found, skipping RSS update\n');
    }

    // Version Sync with error isolation
    console.log('--- Version Sync ---');

    let hasVersionErrors = false;

    // Sync Desktop versions
    try {
      const desktopVersions = await fetchDesktopVersions();
      if (desktopVersions.length > 0) {
        const desktopBadges = generateChannelBadges(desktopVersions);
        updateChannelBadges(desktopBadges);
      }
    } catch (error) {
      console.error('Desktop version sync failed:', error);
      hasVersionErrors = true;
    }

    // Sync Server versions (independent of Desktop)
    try {
      const serverVersions = await fetchServerVersions();
      if (serverVersions.length > 0) {
        const serverBadges = generateChannelBadges(serverVersions);
        updateChannelBadges(serverBadges);
      }
    } catch (error) {
      console.error('Server version sync failed:', error);
      hasVersionErrors = true;
    }

    if (hasVersionErrors) {
      console.warn('=== Version Sync Completed with Errors ===\n');
    } else {
      console.log('=== Version Sync Completed ===\n');
    }

    console.log('=== All Sync Jobs Completed ===');
  } catch (error) {
    console.error('Fatal error during sync:', error);
    process.exit(1);
  }
}

main();
