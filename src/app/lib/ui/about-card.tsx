import Image, { StaticImageData } from "next/image";

export interface AboutCardProps {
  imageUrl: StaticImageData;
  title: string;
  description: string;
}

export function AboutCard({ title, imageUrl, description }: AboutCardProps) {
  return (
    <div
      className="flex justify-start items-start flex-col m-5 xl:m-12 transform-gpu transition-all duration-200 hover:scale-110"
      key={Math.random()}
    >
      <Image
        src={imageUrl}
        width={400}
        height={720}
        alt={title}
        quality={80}
        priority
        className={" rounded-sm"}
      />

      <h2
        className={"font-extrabold  text-center mx-auto"}
        style={{ marginTop: 20 }}
      >
        {title}
      </h2>
      <p
        className={"text-muted-foreground text-center"}
        style={{ marginTop: 10, textAlign: "center" }}
      >
        {description}
      </p>
    </div>
  );
}

export default AboutCard;
