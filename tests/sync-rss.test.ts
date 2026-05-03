import assert from 'node:assert/strict';
import test from 'node:test';

import {
  DEFAULT_EN_RSS_URL,
  DEFAULT_RSS_URL,
  generateBlogSection,
  generateBlogTable,
  resolveRSSFeeds,
  resolveRSSUrl,
} from '../sync-rss.ts';

test('resolveRSSUrl defaults to the zh-CN docs blog RSS feed', () => {
  assert.equal(resolveRSSUrl({}), DEFAULT_RSS_URL);
  assert.equal(DEFAULT_RSS_URL, 'https://docs.hagicode.com/blog/rss.zh-CN.xml');
});

test('resolveRSSUrl supports a language-specific HAGICODE_BLOG_RSS_URL override', () => {
  assert.equal(
    resolveRSSUrl({ HAGICODE_BLOG_RSS_URL: 'https://docs.hagicode.com/blog/rss.zh-CN.xml?source=override' }),
    'https://docs.hagicode.com/blog/rss.zh-CN.xml?source=override',
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

test('resolveRSSFeeds defaults to zh-CN and English docs blog feeds', () => {
  assert.deepEqual(resolveRSSFeeds({}), [
    {
      key: 'zh-CN',
      heading: '中文',
      rssUrl: DEFAULT_RSS_URL,
      tableLabels: {
        date: '日期',
        title: '标题',
      },
    },
    {
      key: 'en',
      heading: 'English',
      rssUrl: DEFAULT_EN_RSS_URL,
      tableLabels: {
        date: 'Date',
        title: 'Title',
      },
    },
  ]);
});

test('resolveRSSFeeds supports separate zh and en overrides', () => {
  assert.deepEqual(resolveRSSFeeds({
    HAGICODE_BLOG_RSS_URL_ZH: 'https://docs.hagicode.com/blog/rss.zh-CN.xml?lang=zh',
    HAGICODE_BLOG_RSS_URL_EN: 'https://docs.hagicode.com/blog/rss.en-US.xml?lang=en',
  }), [
    {
      key: 'zh-CN',
      heading: '中文',
      rssUrl: 'https://docs.hagicode.com/blog/rss.zh-CN.xml?lang=zh',
      tableLabels: {
        date: '日期',
        title: '标题',
      },
    },
    {
      key: 'en',
      heading: 'English',
      rssUrl: 'https://docs.hagicode.com/blog/rss.en-US.xml?lang=en',
      tableLabels: {
        date: 'Date',
        title: 'Title',
      },
    },
  ]);
});

test('generateBlogTable supports English table labels', () => {
  const table = generateBlogTable([
    {
      title: 'English Post',
      link: 'https://docs.hagicode.com/en/blog/example/',
      date: '2026/4/26',
    },
  ], {
    date: 'Date',
    title: 'Title',
  });

  assert.match(table, /\| Date \| Title \|/);
  assert.match(table, /\| 2026\/4\/26 \| \[English Post\]\(https:\/\/docs\.hagicode\.com\/en\/blog\/example\/\) \|/);
});

test('generateBlogSection renders separate zh and en blog tables', () => {
  const section = generateBlogSection([
    {
      heading: '中文',
      table: '| 日期 | 标题 |\n|------|------|\n| 2026/4/18 | [中文文章](https://docs.hagicode.com/blog/example/) |',
    },
    {
      heading: 'English',
      table: '| Date | Title |\n|------|------|\n| 2026/4/18 | [English Post](https://docs.hagicode.com/en/blog/example/) |',
    },
  ]);

  assert.match(section, /### 中文/);
  assert.match(section, /### English/);
  assert.match(section, /\| Date \| Title \|/);
});
