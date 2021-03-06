import { Media } from './media.model';
import { Profile } from './profile.model';

export interface Product {
  id: number;
  name: string;
  description: string;
  categories: string;
  corporativo: boolean;
  media: Media[];
  created_by: Profile;
  updated_by: Profile;
  created_at: string;
}
