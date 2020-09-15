import { Media } from './media.model';
import { Profile } from './profile.model';

export interface Banner {
  id: number;
  title: string;
  subtitle: string;
  text: string;
  media: Media[];
  created_by: Profile;
  updated_by: Profile;
  created_at: string;
}
