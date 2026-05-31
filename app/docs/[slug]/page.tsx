import { scripts } from '@/lib/data';
import DocsPageClient from './DocsPageClient';

export function generateStaticParams() {
  return scripts.map((script) => ({
    slug: script.slug,
  }));
}

export default function DocsPage({ params }: { params: { slug: string } }) {
  return <DocsPageClient slug={params.slug} />;
}
