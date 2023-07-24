type show = {
  id: number;

  name: string;
  type: string;
  language: string;

  status: string;
  genres: string[];
  rating: {
    average?: number;
  };

  image?: {
    medium: string;
    original: string;
  };
  summary?: string;
};
export default show;
