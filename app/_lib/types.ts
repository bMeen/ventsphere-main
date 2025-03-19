type background = "dark-purple" | "rich-black" | "space-cadet";

type filterBackground = Exclude<background, "dark-purple">;

export type ContentType = {
  icon: string;
  title: string;
  description: string;
  type?: filterBackground;
};

export type Testimonial<T> = {
  image: T;
  type: background;
  text: T;
  name: T;
  position: T;
};

export type Faq = { question: string; answer: string };
