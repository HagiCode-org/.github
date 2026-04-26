import assert from 'node:assert/strict';
import test from 'node:test';

import { DEFAULT_RSS_URL, generateBlogTable, resolveRSSUrl } from '../sync-rss.ts';

test('resolveRSSUrl defaults to the all-language docs blog RSS feed', () => {
  assert.equal(resolveRSSUrl({}), DEFAULT_RSS_URL);
  assert.equal(DEFAULT_RSS_URL, 'https://docs.hagicode.com/blog/rss.xml');
});

test('resolveRSSUrl supports a language-specific HAGICODE_BLOG_RSS_URL override', () => {
  assert.equal(
    resolveRSSUrl({ HAGICODE_BLOG_RSS_URL: 'https://docs.hagicode.com/blog/rss.en.xml' }),
    'https://docs.hagicode.com/blog/rss.en.xml',
  );
});

test('resolveRSSUrl keeps RSS_URL as a compatibility override', () => {
  assert.equal(
    resolveRSSUrl({ RSS_URL: 'https://docs.hagicode.com/blog/rss.zh-CN.xml' }),
    'https://docs.hagicode.com/blog/rss.zh-CN.xml',
  );
});

test('generateBlogTable stays compatible with language-specific feed items', () => {
  const table = generateBlogTable([
    {
      title: 'English Post',
      link: 'https://docs.hagicode.com/en/blog/example/',
      date: '2026/4/26',
    },
  ]);

  assert.match(table, /\| 日期 \| 标题 \|/);
  assert.match(table, /\| 2026\/4\/26 \| \[English Post\]\(https:\/\/docs\.hagicode\.com\/en\/blog\/example\/\) \|/);
});
