// @flow

const sizes: {
  large: number,
  medium: number,
  small: number
} = {
  large: 1280,
  medium: 769,
  small: 0
};

type Response = {
  large: string,
  medium: string,
  small: string
};

// Iterate through the sizes and create a media template
const media: Response = Object.keys(sizes).reduce(
  (acc: any, label: string): Response => {
    acc[label] = `@media (min-width: ${sizes[label] / 16}em)`;
    return acc;
  },
  {}
);

export default media;
