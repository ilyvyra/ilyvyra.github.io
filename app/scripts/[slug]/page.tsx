import { scripts } from "@/lib/data";
import ScriptDetailPageClient from "./ScriptDetailPageClient";

export function generateStaticParams() {
  return scripts.map((script) => ({
    slug: script.slug,
  }));
}

export default function ScriptDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  return <ScriptDetailPageClient slug={params.slug} />;
}
