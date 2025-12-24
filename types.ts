
export interface VideoClip {
  id: string;
  startTime: number;
  endTime: number;
  title: string;
  description: string;
  socialPlatforms: ('tiktok' | 'youtube' | 'instagram')[];
  status: 'draft' | 'processing' | 'ready';
  previewUrl?: string;
}

export interface VideoMetadata {
  url: string;
  title: string;
  duration: number;
  thumbnail?: string;
}

export interface AiClipSuggestion {
  start: string;
  end: string;
  reason: string;
  hook: string;
  caption: string;
}
