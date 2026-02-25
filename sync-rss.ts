import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import Parser from 'rss-parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface BlogPost {
  title: string;
  link: string;
  date: string;
}

const RSS_URL = 'https://docs.hagicode.com/blog/rss.xml';
const README_PATH = path.join(__dirname, 'profile', 'README.md');
const MAX_POSTS = 10;

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

async function main(): Promise<void> {
  console.log('=== Starting Blog RSS Sync ===');

  try {
    const posts = await fetchRSS();

    if (posts.length === 0) {
      console.log('No blog posts found, skipping update');
      return;
    }

    const blogTable = generateBlogTable(posts);
    updateReadme(blogTable);

    console.log('=== Blog RSS Sync Completed ===');
  } catch (error) {
    console.error('Error during RSS sync:', error);
    process.exit(1);
  }
}

main();
