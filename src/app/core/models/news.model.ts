import { Profile } from '.';
import { Media } from './media.model';

export interface News {
  id: number;
  title: string;
  summary: string;
  text: string;
  media: Media[];
  created_by: Profile;
  updated_by: Profile;
  created_at: string;
}
