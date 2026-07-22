import Image from "next/image";
import { Reveal } from "@/components/reveal";

type EditorialSectionImageProps = {
  src: string;
  alt: string;
};

export function EditorialSectionImage({ src, alt }: EditorialSectionImageProps) {
  return (
    <Reveal className="recognition-intro__media" delay={0.08}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 900px) calc(100vw - 36px), 42vw"
      />
    </Reveal>
  );
}
