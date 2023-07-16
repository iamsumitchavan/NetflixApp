type item = {
  id: number;

  name: string;
  type: string;
  language: string;

  status: string;

  rating: {
    average?: string;
  };

  image?: {
    medium: string;
    original: string;
  };
  summary?: string;
};
export default item;
