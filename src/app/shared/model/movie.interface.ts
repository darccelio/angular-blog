export interface Movie {
  id: number;
  title: string;
  originalTitle?: string;
  summary?: string;
  verticalPhotoCover?: string[];
  horizontalPhotoCover?: string[];
  trailler?: string[];
  genre?: string[];
  priceRent?: number;
  duration?: string;
  cast?: string[];
  directors?: string;
  industries?: string;
  tags?: string[];
  bugdet?: string;
  releaseDate?: string;
  rate?: string;
  ageIndication?: string;
}
